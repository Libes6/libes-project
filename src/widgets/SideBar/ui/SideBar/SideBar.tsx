import { FC } from 'react';
import cls from './SideBar.module.scss';
import { useSideBar } from 'widgets/SideBar/ui/SideBar/hooks/useSideBar';
import { clsMix } from 'shared/lib/classNames/clsMix';

export const SideBar: FC = () => {
    const { collapsed, onCollapsed } = useSideBar();
    return (
        <div
            className={clsMix(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                []
            )}
        >
            <button onClick={onCollapsed}>{'toggle'}</button>
        </div>
    );
};
