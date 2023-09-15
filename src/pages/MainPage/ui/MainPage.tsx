import React from 'react';
import { t } from 'i18next';

const MainPage = () => {
    return (
        <div>
            {t('MainTitle')}
            <input type='text'></input>
        </div>
    );
};

export default MainPage;
