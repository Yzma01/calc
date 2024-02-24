'use client';
import React from 'react'

type ButtonProps = {
    name: string;
    onClick: (params:any) => void;
}

const CustumButtons = (args: ButtonProps) => {
    return (
        <div
            className='btn'
            onClick={args.onClick}
         >
            {args.name}
        </div>
    )
}

export default CustumButtons;