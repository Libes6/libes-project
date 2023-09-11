import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {clsMix} from "shared/lib/classNames/clsMix";
import cls from './NavBar.module.scss'
import {AppLink} from "shared/ui";
interface INavBarProps{
className?:string
}
export const NavBar: FC<INavBarProps> = ({className}) => {
    return (
        <div className={clsMix(cls.navbar,{},[className])}>

            <div className={clsMix(cls.links)}>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>

        </div>
    );
};


