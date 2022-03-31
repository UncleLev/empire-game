import React from 'react';
import { DialogActions, Button, DialogTitle, DialogContent } from '@mui/material';
import { wordListItemType } from 'src/store/game/game.reducer';
import { useNavigate } from 'react-router-dom';
import routerConfig from 'src/constants/routerConfig';
import { CustomDialog } from '../CustomDialog';

interface VictoryModalInterface {
    open: boolean;
    winner?: wordListItemType;
    restartGame(): void;
}

function VictoryModal({ open, winner, restartGame }: VictoryModalInterface) {
    const navigate = useNavigate();

    const handleRestart = () => {
        restartGame();
        navigate(routerConfig.startPage);
    };

    return (
        <CustomDialog open={open} className="victory-modal">
            <DialogTitle>The end of game</DialogTitle>
            <DialogContent>
                <p>The empire {winner?.value} win</p>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleRestart}>
                    Restart
                </Button>
            </DialogActions>
        </CustomDialog>
    );
}

VictoryModal.defaultProps = {
    winner: undefined,
};

export default VictoryModal;
