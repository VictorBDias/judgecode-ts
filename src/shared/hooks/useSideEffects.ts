import { useCallback, Dispatch, SetStateAction } from 'react';

type State = {
  id: string | number;
};

const useSideEffects = <T extends State>(
  setState: Dispatch<SetStateAction<T[]>>
) => {
  const create = useCallback(
    state => {
      setState((oldState: T[]) => [state, ...oldState]);
    },
    [setState]
  );

  const append = useCallback(
    state => {
      setState((oldState: T[]) => [...oldState, state]);
    },
    [setState]
  );

  const update = useCallback(
    (id: number | string, state: T) => {
      setState(oldState => {
        const foundIndex = oldState.findIndex(oldState => oldState.id === id);

        if (foundIndex !== -1) oldState[foundIndex] = state;

        return [...oldState];
      });
    },
    [setState]
  );

  const destroy = useCallback(
    (id: number | string) => {
      setState(oldState => oldState.filter(oldState => oldState.id !== id));
    },
    [setState]
  );

  const replaceList = useCallback(
    (list: T[]) => {
      setState(list);
    },
    [setState]
  );

  const appendList = useCallback(
    (list: T[]) => {
      setState(oldState => [...oldState, ...list]);
    },
    [setState]
  );

  return {
    create,
    append,
    update,
    destroy,
    replaceList,
    appendList,
  };
};

export { useSideEffects };
