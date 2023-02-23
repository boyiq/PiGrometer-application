import React, {useEffect, useState} from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Chart_1 from './Chart_1.jsx';
import Chart_3 from './Chart_3.jsx';
import Chart_7 from './Chart_7.jsx';

const HistoryTabs = () => {
    const history1 = 1;
    const history2 = 3;
    const history3 = 7;

    return (
        <Tabs variant='soft-rounded' colorScheme='purple'>
            <TabList>
                <Tab>Past 24 hours</Tab>
                <Tab>Past 3 days</Tab>
                <Tab>Past 7 days</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Chart_1 />
                </TabPanel>
                <TabPanel>
                    <Chart_3 />
                </TabPanel>
                <TabPanel>
                    <Chart_7 />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default HistoryTabs;