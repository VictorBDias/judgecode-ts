import React from 'react';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';

// CUSTOM IMPORTS
import { TabsProps } from './tabs.interface';

const TabsList = ({ children, variant = 'enclosed', tabs }: TabsProps) => (
  <Tabs size="md" variant={variant}>
    {tabs && (
      <TabList>
        {tabs.map((tab) => (
          <Tab>{tab}</Tab>
        ))}
      </TabList>
    )}
    <TabPanels>
      {React.Children.map(children, (c) => (
        <TabPanel>{c}</TabPanel>
      ))}
    </TabPanels>
  </Tabs>
);

export { TabsList };
