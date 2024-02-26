'use client';
import React from 'react'

type ButtonProps = {
    name: string;
    onClick: (params:any) => void;
    className: string;
    key: number;
}

const CustumButtons = (args: ButtonProps) => {
    return (
        <div
            className={args.name == 'C'? 'btn-c': args.className}
            onClick={args.onClick}
         >
            {args.name}
        </div>
    )
}

export default CustumButtons;