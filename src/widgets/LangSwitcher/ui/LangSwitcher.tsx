import React, { FC } from 'react';
import { useLangSwitcher } from "widgets/LangSwitcher/hooks/useLangSwitcher";


export const LangSwitcher:FC = () => {
    const { langList,onToggleTranslate }=useLangSwitcher()

    return (<div>

        <select
            onChange={(event)=>onToggleTranslate(event.target.value)}
        >
            {langList.map(item=>
                <option
                    key={item.lang}
                    value={item.lang}
                >
                    {item.lang}
                </option>)}
        </select>

        {/*<Button onClick={onToggleTranslate}>{selectLanguages}*/}
        {/*</Button>*/}
    </div>

    );
};
