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

function PageWithHeader({ pageTitle, className, goBackLink, goBackTitle, children }: PageWithHeaderInterface) {
    return (
        <div className={clsx('page-with-header', className)}>
            <GlobalHeader goBackTitle={goBackTitle} title={pageTitle} goBackLink={goBackLink} />
            <div
                className={clsx(
                    'page-with-header__container',
                    goBackLink && 'page-with-header__container--with-back-link',
                )}
            >
                {children}
            </div>
        </div>
    );
}
PageWithHeader.defaultProps = {
    pageTitle: '',
    className: '',
};
export default PageWithHeader;
