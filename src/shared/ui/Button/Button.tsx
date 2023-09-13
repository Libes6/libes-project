import {ButtonHTMLAttributes, FC} from 'react';
import {clsMix} from "shared/lib/classNames/clsMix";
import cls from './Button.module.scss'
import {Simulate} from "react-dom/test-utils";


const ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
theme?:ButtonType
}
export const Button:FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        theme=ButtonTypes[0]
        ,...otherProps
    }=props

    const clsTheme =cls[`btn-${theme}`]
 return (
  <button className={clsMix(cls.btn,{},[className,clsTheme])}  {...otherProps}>
      {children}
  </button>
 );
};
