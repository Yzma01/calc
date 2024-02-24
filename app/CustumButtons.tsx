import React from 'react'

type ButtonProps = {
    name: string;
    onClick: Function;
}

const CustumButtons = ({name}:ButtonProps, {onClick}:ButtonProps) => {
    return (
        <div
            className='btn'
            onClick={() => onClick}
         >
            {name}
        </div>
    )
}

export default CustumButtons;