import React from 'react';
import { GoDatabase, GoPlus } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';

export const iconTypes = {
  DATABASE: 'database',
  PLUS: 'plus',
  SEARCH: 'search',
};

export const setIcon = (type: string) => {
  switch (type) {
    case iconTypes.DATABASE:
      return <GoDatabase />;

    case iconTypes.PLUS:
      return <GoPlus />;

    case iconTypes.SEARCH:
      return <GrSearch />;

    default:
      return null;
  }
};

export const icons = Object.entries(iconTypes).map((entry) => ({
  id: entry[0],
  type: entry[1],
}));
