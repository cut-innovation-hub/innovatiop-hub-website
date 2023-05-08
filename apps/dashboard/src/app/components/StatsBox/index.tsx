import React from 'react';
import ProgressCircle from '../ProgressCircle';

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

interface Props {
    icon: any;
    title: string;
    progress: number,
    subtitle: string;
    increase: string;
    size: string
}

const StatBox = ({icon, title, progress, subtitle, increase, size}: Props) => {
    return (
        <div className="w-[100%] mx-[30px]">
            <div className="flex justify-between">
                <div>
                    {icon}
                </div>
                <div>
                    <ProgressCircle progress={progress} size={size}/>
                </div>
            </div>
            <div className="flex justify-between mt-[2px]">
                <h5 className="text-slate-900">{subtitle}</h5>
                <h5 className="font-italic text-blue-600">{increase}</h5>
            </div>
        </div>
    )
}

export default StatBox
