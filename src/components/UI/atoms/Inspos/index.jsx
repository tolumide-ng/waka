import React from 'react'

const Inspos = ({background, classes, text}) => {
    return (
        <div className="">
            <img src={background} className={`h-64 w-4/12 relative ${classes}`} />
            <p className='absolute'>{text}</p>
        </div>
    )
}

export default Inspos