import React from 'react'

interface Props {
    progress: number;
    size: string;
}

const ProgressCircle = ({progress, size}: Props) => {
    const angle = progress *360
    const primary = 'red-500'
    const colorBlue = 'blue-500'
    const colorGreen = 'green-500'
    const style = {
      background: `radial-gradient(${primary} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colorBlue} ${angle}deg 360deg),
            ${colorGreen}`,
      borderRadius: '50%',
      width: `${size}px`,
      height: `${size}px`,
    };
    return (
        <div className={`${style}`}>
            
        </div>
    )
}

export default ProgressCircle
