import { FC } from 'react';

import cls from './NotFoundPage.module.scss';
import { clsMix } from 'shared/lib/classNames/clsMix';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={clsMix(cls.NotFoundPage)}>
            <h2> {t('Page not found')}</h2>
        </div>
    );
};
