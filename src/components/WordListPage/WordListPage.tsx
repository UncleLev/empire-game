import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import EmpiresList from 'src/components/EmpiresList';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';
import WordList from '../WordList';
import VictoryModal from '../VictoryModal';

interface WordListPageInterface {
    isEndOfGame: boolean;
}

function WordListPage({ isEndOfGame }: WordListPageInterface) {
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
                <TabPanel value="1">
                    <WordList />
                </TabPanel>
                <TabPanel value="2">
                    <EmpiresList />
                </TabPanel>
            </TabContext>
            <VictoryModal open={!!isEndOfGame} />
        </PageWithHeader>
    );
}

export default WordListPage;
