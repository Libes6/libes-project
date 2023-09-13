import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProviders";

import { clsMix } from 'shared/lib/classNames/clsMix';
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets";
import {useTranslation} from "react-i18next";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={clsMix('app',{},[theme])}>
            <Suspense fallback={''}>
            <NavBar/>
            <div className='content-page'>
                <SideBar/>
                <AppRouter/>
            </div>

            </Suspense>
        </div>
    );
};

export default App;
