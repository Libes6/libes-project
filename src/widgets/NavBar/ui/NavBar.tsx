import React, { FC } from 'react';
import { clsMix } from "shared/lib/classNames/clsMix";
import cls from './NavBar.module.scss'
import { AppLink } from "shared/ui";
import { LangSwitcher, ThemeSwitcher } from "widgets";
import { useTranslation } from "react-i18next";
interface INavBarProps{
className?:string
}
export const NavBar: FC<INavBarProps> = ({ className }) => {

    const { t }=useTranslation()



    return (
        <div className={clsMix(cls.navbar,{},[className])}>

            <div className={clsMix(cls.links)}>
                <AppLink to={'/'}>{t('MainTitle')}</AppLink>
                <AppLink to={'/about'}>{t('AboutTitle')}</AppLink>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>

        </div>
    );
};


