import React from 'react';
import { GoDatabase, GoPlus, GoX } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const iconTypes = {
  DATABASE: 'database',
  PLUS: 'plus',
  SEARCH: 'search',
  EMAIL: 'email',
  LOCK: 'lock',
  PERSON: 'person',
  MENU: 'menu',
  CLOSE: 'close',
};

export const setIcons = (type: string) => {
  switch (type) {
    case iconTypes.DATABASE:
      return <GoDatabase />;

    case iconTypes.PLUS:
      return <GoPlus />;

    case iconTypes.SEARCH:
      return <GrSearch />;

    case iconTypes.EMAIL:
      return <MdEmail />;

    case iconTypes.LOCK:
      return <MdLock />;

    case iconTypes.PERSON:
      return <MdPerson />;

    case iconTypes.MENU:
      return <BsThreeDotsVertical />;

    case iconTypes.CLOSE:
      return <GoX />;

    default:
      return null;
  }
};

export const icons = Object.entries(iconTypes).map((entry) => ({
  id: entry[0],
  type: entry[1],
}));
