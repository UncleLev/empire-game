import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import routerConfig from 'src/constants/routerConfig';
import { wordListItemType } from 'src/store/game/game.reducer';
import { CustomDialog } from '../CustomDialog';

interface VictoryModalInterface {
    open: boolean;
    winner?: wordListItemType;
    restartGame(): void;
}

function VictoryModal({ open, winner, restartGame }: VictoryModalInterface) {
    const navigate = useNavigate();
    const { t } = useTranslation(['general', 'victoryModal']);

    const handleRestart = () => {
        restartGame();
        navigate(routerConfig.startPage);
    };

    return (
        <CustomDialog open={open} className="victory-modal">
            <DialogTitle>{t('victoryModal:endOfGame')}</DialogTitle>
            <DialogContent>
                <p>{t('victoryModal:winnerIs', { val: winner?.value })}</p>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleRestart}>
                    {t('general:restart')}
                </Button>
            </DialogActions>
        </CustomDialog>
    );
}

VictoryModal.defaultProps = {
    winner: undefined,
};

export default VictoryModal;
