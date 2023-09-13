import React from "react";

export declare const ILangSwitcher:[
    "ru",
    "en"
]



export interface ILangSwitcherList{
    lang: typeof ILangSwitcher[number]
    icon?:React.ReactNode
}