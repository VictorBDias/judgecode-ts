import { useEffect, useLayoutEffect, useRef } from 'react';

type UseEventListenerOptions = {
  enabled?: boolean;
  target?: GlobalEventHandlers;
};

type UseDOMEventListener = <
  EventType extends keyof GlobalEventHandlersEventMap
>(
  eventType: EventType,
  handler: (event: GlobalEventHandlersEventMap[EventType]) => void,
  options?: UseEventListenerOptions
) => void;

const DEFAULT_OPTIONS: UseEventListenerOptions = {
  enabled: true,
  target: document,
};

export const useDOMEventListener: UseDOMEventListener = (
  eventType,
  handler,
  options = DEFAULT_OPTIONS
) => {
  const { enabled = true, target = document } = options;

  const handlerRef = useRef(handler);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return () => null;

    const eventHandler: typeof handlerRef.current = e => {
      handlerRef.current.call(target, e);
    };

    target.addEventListener(eventType, eventHandler);

    return () => {
      target.removeEventListener(eventType, eventHandler);
    };
  }, [enabled, eventType, target]);
};
