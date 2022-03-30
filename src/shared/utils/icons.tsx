import React from 'react';
import { GoDatabase, GoPlus } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';
import { MdEmail, MdLock } from 'react-icons/md';

export const iconTypes = {
  DATABASE: 'database',
  PLUS: 'plus',
  SEARCH: 'search',
  EMAIL: 'email',
  LOCK: 'lock',
};

export const setIcon = (type: string) => {
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

    default:
      return null;
  }
};

export const icons = Object.entries(iconTypes).map((entry) => ({
  id: entry[0],
  type: entry[1],
}));
