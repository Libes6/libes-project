import React, {FC} from 'react';
import {Button} from "shared/ui";
import {useLangSwitcher} from "widgets/LangSwitcher/hooks/useLangSwitcher";


export const LangSwitcher:FC = () => {
const {langList,selectLanguages,onToggleTranslate}=useLangSwitcher()

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
