import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProviders";

import { clsMix } from 'shared/lib/classNames/clsMix';
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={clsMix('app',{},[theme])}>
            <NavBar/>
            <button onClick={toggleTheme}>TOGGLE</button>

            <AppRouter/>
        </div>
    );
};

export default App;
