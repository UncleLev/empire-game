import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import routerConfig from 'src/constants/routerConfig';
import * as selectors from 'src/store/selectors';

const publicRoute = (children: React.ReactNode) => {
    const location = useLocation();
    const isEndOfGame = useSelector(selectors.getEndOfGame);
    const category = useSelector(selectors.getGameCategory);
    const wordsList = useSelector(selectors.getWordsList);

    if (isEndOfGame && location.pathname !== routerConfig.wordList) return <Navigate to={routerConfig.wordList} />;

    if (!category && location.pathname !== routerConfig.startPage) return <Navigate to={routerConfig.startPage} />;

    if (category && !wordsList.length && location.pathname !== routerConfig.addWords)
        return <Navigate to={routerConfig.addWords} />;

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

export default publicRoute;
