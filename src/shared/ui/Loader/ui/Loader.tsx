import { CSSProperties, FC } from 'react';
import cls from './Loader.module.scss';
import { clsMix } from 'shared/lib/classNames/clsMix';

interface ILoaderProps {
    className?: string;
    size?: number;
    color?: string;
}
export const Loader: FC<ILoaderProps> = props => {
    const { className = '', size = 5, color = '#4285F4' } = props;

    const sizeSpinner = size * 20 + 'px';
    const borderSpinner = size * 2 + 'px';

    const spinnerProps: CSSProperties = {
        width: sizeSpinner,
        height: sizeSpinner,
        borderWidth: borderSpinner,
        borderTopWidth: borderSpinner,
    };
    return (
        <div className={cls.container}>
            <div
                className={clsMix(cls.spinner, {}, [className])}
                style={spinnerProps}
            ></div>
        </div>
    );
};
