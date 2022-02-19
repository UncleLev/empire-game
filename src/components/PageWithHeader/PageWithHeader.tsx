import React from 'react';
import clsx from 'clsx';
import GlobalHeader from '../GlobalHeader';
import { GlobalHeaderInterface } from '../GlobalHeader/GlobalHeader';
import './_PageWithHeader.scss';

interface PageWithHeaderInterface extends GlobalHeaderInterface {
    children: React.ReactNode;
    pageTitle?: string;
    className?: string;
}

function PageWithHeader({ pageTitle, className, goBackLink, children }: PageWithHeaderInterface) {
    return (
        <div className={clsx('page-with-header', className)}>
            <GlobalHeader title={pageTitle} goBackLink={goBackLink} />
            <div className="page-with-header__container">{children}</div>
        </div>
    );
}
PageWithHeader.defaultProps = {
    pageTitle: '',
    className: '',
};
export default PageWithHeader;
