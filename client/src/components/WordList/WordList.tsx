import CachedIcon from '@mui/icons-material/Cached';
import EditIcon from '@mui/icons-material/Edit';
import GppBadIcon from '@mui/icons-material/GppBad';
import { Button, IconButton } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CrownIcon } from 'src/assets/icons/crown-icon.svg';
import { isColorLight } from 'src/service/helpers/color.helper';
import { shuffleArray } from 'src/service/helpers/general.helpers';
import { wordListItemType } from '../../store/game/game.reducer';
import DefeatModal from '../DefeatModal';
import EditWordModal from '../EditWordModal';
import './WordList.scss';

interface WordListInterface {
    wordsList?: wordListItemType[];
    empiresColors: any;
}

function WordList({ wordsList, empiresColors }: WordListInterface) {
    const { t } = useTranslation(['general', 'wordListPage']);

    const [selectedWord, setSelectedWord] = useState<wordListItemType | null>(null);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDefeat, setOpenDefeat] = useState(false);
    const [words, setWords] = useState<wordListItemType[]>([]);

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

    const handleReorder = () => {
        if (!wordsList) return;
        setWords(shuffleArray(wordsList));
    };

    useEffect(() => {
        if (!wordsList) return;
        setWords(shuffleArray(wordsList));
    }, [wordsList]);

    return (
        <div className="word-list">
            <div className="word-list__controllers">
                <Button variant="contained" onClick={handleReorder} endIcon={<CachedIcon />}>
                    {t('wordListPage:reorder')}
                </Button>
            </div>
            <div className="word-list__container">
                {words?.map((word) => {
                    const backgroundColor = word.subjects.length
                        ? empiresColors[word.id]
                        : empiresColors[word?.empireId];
                    const color = isColorLight(backgroundColor) ? '#000' : '#fff';
                    return (
                        <div
                            key={word.id}
                            className={clsx(
                                'word-list__item word-list-item',
                                word.empireId && 'word-list__item word-list-item--in-empire',
                                word.subjects.length && 'word-list__item word-list-item--is-empire',
                            )}
                            style={{
                                backgroundColor,
                                color,
                            }}
                        >
                            {!!word.subjects.length && <CrownIcon className="word-list-item__crown-icon" />}
                            <span className="word-list-item__title">{word.value}</span>
                            {word.fake && <span className="word-list-item__fake">{t('general:fake')}</span>}
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

WordList.defaultProps = {
    wordsList: [],
};

export default WordList;
