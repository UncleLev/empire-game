import React from 'react';
import { Route, useLocation } from 'react-router-dom';

interface PublicRoutesInterface {
    path: string;
    element: React.ReactNode;
}

function PublicRoute({ path, element }: PublicRoutesInterface) {
    const location = useLocation();

    // location.state.from = location.pathname;
    return <Route path={path} element={element} />;
}

export default PublicRoute;
