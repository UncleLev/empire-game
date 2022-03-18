import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import GppBadIcon from '@mui/icons-material/GppBad';
import clsx from 'clsx';
import React, { useState } from 'react';
import { wordListItemType } from '../../store/game/game.reducer';
import './WordList.scss';
import DefeatModal from '../DefeatModal';

interface WordListInterface {
    wordsList?: wordListItemType[];
}

function WordList({ wordsList }: WordListInterface) {
    const [selectedWord, setSelectedWord] = useState<wordListItemType | null>(null);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDefeat, setOpenDefeat] = useState(false);

    const handleEdit = (word: wordListItemType) => () => {
        setSelectedWord(word);
        setOpenEdit(true);
    };

    const handleDefeat = (word: wordListItemType) => () => {
        setSelectedWord(word);
        setOpenDefeat(true);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
        setOpenEdit(false);
        setOpenDefeat(false);
    };

    return (
        <div className="word-list">
            <div className="word-list__container">
                {wordsList?.map((word) => (
                    <div
                        key={word.id}
                        className={clsx(
                            'word-list__item word-list-item',
                            word.empireId && 'word-list__item word-list-item--in-empire',
                            word.subjects.length && 'word-list__item word-list-item--is-empire',
                        )}
                    >
                        <span className="word-list-item__title">{word.value}</span>
                        {word.fake && <span className="word-list-item__fake">fake</span>}
                        <div className="word-list-item__controller">
                            <IconButton color="warning" onClick={handleEdit(word)}>
                                <EditIcon />
                            </IconButton>
                            {!(word.fake || word.empireId) && (
                                <IconButton color="error" onClick={handleDefeat(word)}>
                                    <GppBadIcon />
                                </IconButton>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <DefeatModal selectedWord={selectedWord} open={openDefeat} onClose={handleCloseModal} />
        </div>
    );
}

WordList.defaultProps = {
    wordsList: [],
};

export default WordList;
