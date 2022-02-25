import { ReactNode } from 'react';

type TabsVariants =
  'line'|
  'enclosed'|
  'enclosed-colored'|
  'soft-rounded'|
  'solid-rounded'|
  'unstyled'

export interface TabsProps {
  children: ReactNode,
  tabs: Array<string>,
  variant?: TabsVariants
}
