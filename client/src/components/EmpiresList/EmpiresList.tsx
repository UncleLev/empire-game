import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import GppBadIcon from '@mui/icons-material/GppBad';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { subjectType, wordListItemType } from 'src/store/game/game.reducer';
import EditWordModal from '../EditWordModal';
import DefeatModal from '../DefeatModal';

import './EmpiresList.scss';

interface EmpiresListInterface {
    empiresList: wordListItemType[];
    wordList: wordListItemType[];
}

function EmpiresList({ empiresList, wordList }: EmpiresListInterface) {
    const [selectedWord, setSelectedWord] = useState<wordListItemType | null>(null);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDefeat, setOpenDefeat] = useState(false);

    const filteredEmpires = useMemo(
        () =>
            empiresList.filter(({ subjects }) => subjects.length).sort((a, b) => b.subjects.length - a.subjects.length),
        [empiresList],
    );

    const handleEdit = (subject: subjectType) => () => {
        const word = wordList.find(({ id }) => id === subject.id);
        if (!word) return;
        setSelectedWord(word);
        setOpenEdit(true);
    };

    const handleDefeat = (word: wordListItemType) => (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setSelectedWord(word);
        setOpenDefeat(true);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
        setOpenEdit(false);
        setOpenDefeat(false);
    };

    return (
        <div className="empires-list">
            <div className="empires-list__container">
                {filteredEmpires.map((empire) => {
                    return (
                        <Accordion classes={{ root: 'empires-list__item empires-list-item' }}>
                            <AccordionSummary
                                classes={{ root: 'empires-list-item__summary' }}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <div className="empires-list-item__summary-container">
                                    <p className="empires-list-item__summary-title">{empire.value}</p>
                                    <IconButton
                                        className="empires-list-item__summary-btn"
                                        onClick={handleDefeat(empire)}
                                    >
                                        <GppBadIcon />
                                    </IconButton>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {empire.subjects.map((subject) => (
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" onClick={handleEdit(subject)}>
                                                    <EditIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemText primary={subject.value} />
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
            <DefeatModal selectedWord={selectedWord} open={openDefeat} onClose={handleCloseModal} />
            {selectedWord && openEdit && (
                <EditWordModal selectedWord={selectedWord} open={openEdit} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default EmpiresList;
