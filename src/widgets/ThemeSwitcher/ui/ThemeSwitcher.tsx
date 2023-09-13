import React, { FC } from 'react';
import cls from '../ui/ThemeSwitcher.module.scss'
import { clsMix } from "shared/lib/classNames/clsMix";
import { useTheme } from "app/providers/ThemeProvider";
import IconDark from "../../../shared/assets/icons/theme-dark.svg";
import IconLight from "../../../shared/assets/icons/theme-light.svg";


interface IThemeSwitcherProps{
 className?:string
}
export const ThemeSwitcher:FC<IThemeSwitcherProps> = ({ className }) => {

    const { toggleTheme,theme } = useTheme();

    const renderIcon = ()=>{
        return  theme ==='dark'?<IconDark />:<IconLight/>
    }

    return (
        <button className={clsMix(cls.btn,{},[className,theme])}
            onClick={toggleTheme}>
            {renderIcon()}
        </button>
    );
};
