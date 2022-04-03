import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmpiresList from 'src/components/EmpiresList';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';
import VictoryModal from '../VictoryModal';
import WordList from '../WordList';

interface WordListPageInterface {
    isEndOfGame: boolean;
}

function WordListPage({ isEndOfGame }: WordListPageInterface) {
    const { t } = useTranslation(['menu', 'general']);

    const [tabIndex, setTabIndex] = useState('1');
    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTabIndex(newValue);
    };

    return (
        <PageWithHeader
            pageTitle={t('menu:wordList')}
            className="word-list-page"
            goBackLink={routerConfig.menu}
            goBackTitle={t('general:menu')}
        >
            <TabContext value={tabIndex}>
                <TabList variant="fullWidth" onChange={handleChangeTab}>
                    <Tab label={t('general:list')} value="1" />
                    <Tab label={t('general:empire')} value="2" />
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
