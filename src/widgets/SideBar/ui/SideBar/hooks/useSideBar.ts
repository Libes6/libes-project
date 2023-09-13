import {useState} from "react";

export  const  useSideBar =()=>{
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onCollapsed =()=>{
        setCollapsed(prevState => !prevState)
    }
    return {collapsed,onCollapsed}
}