import React, {useEffect, useState} from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Chart from './Chart.jsx';

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
                    <Chart history={history1}/>
                </TabPanel>
                <TabPanel>
                    <Chart history={history2} />
                </TabPanel>
                <TabPanel>
                    <Chart history={history3} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default HistoryTabs;