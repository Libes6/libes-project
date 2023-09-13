import {useTranslation} from "react-i18next";
import {ILangSwitcher, ILangSwitcherList} from "../type/ILangSwitcher";

export const  useLangSwitcher = ()=>{

    const {t,i18n}=useTranslation()
const langList:ILangSwitcherList[]=[{lang:'en'},{lang:"ru"}]
    const onToggleTranslate =(lang:typeof ILangSwitcher[number]|string)=>{
        console.log(lang)
        i18n.changeLanguage(lang)

    }

    const selectLanguages =i18n.language

    return {langList,selectLanguages,onToggleTranslate}
}