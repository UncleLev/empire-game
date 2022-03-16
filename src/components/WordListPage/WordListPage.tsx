import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PageWithHeader from '../PageWithHeader';
import routerConfig from '../../constants/routerConfig';

function WordListPage() {
    const [tabIndex, setTabIndex] = useState('1');
    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTabIndex(newValue);
    };
    return (
        <PageWithHeader
            pageTitle="Word List"
            className="word-list-page"
            goBackLink={routerConfig.menu}
            goBackTitle="Menu"
        >
            <TabContext value={tabIndex}>
                <TabList variant="fullWidth" onChange={handleChangeTab}>
                    <Tab label="List" value="1" />
                    <Tab label="Empires" value="2" />
                </TabList>
                <TabPanel value="1"></TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </PageWithHeader>
    );
}

export default WordListPage;
