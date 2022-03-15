import React from 'react';
import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

// CUSTOM IMPORTS
import { TabsProps } from './tabs.interface';
import { Typography } from '../../atoms';

const Tabs = ({ children, variant = 'line', tabs }: TabsProps) => (
  <TabsChakra size="tab" variant={variant} colorScheme="secondary">
    {tabs && (
      <TabList>
        {tabs.map((tab) => (
          <Tab style={{ marginRight: 24 }}>
            <Typography>{tab}</Typography>
          </Tab>
        ))}
      </TabList>
    )}
    <TabPanels>
      {React.Children.map(children, (c) => (
        <TabPanel>{c}</TabPanel>
      ))}
    </TabPanels>
  </TabsChakra>
);

export { Tabs };
