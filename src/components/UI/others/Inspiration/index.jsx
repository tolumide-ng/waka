import React from 'react'
import sanDiego from '../../../../assets/imgs/sandiego.png'
import newMexico from '../../../../assets/imgs/newMexico.png'
import paris from '../../../../assets/imgs/paris.png'
import './index.sass'
import Inspos from '../../atoms/Inspos'


const Inspiration = () => {
    const places = [{place: sanDiego, alt: 'san diego trip', text: 'San Diego'}, {place: newMexico, alt: 'new Mexico trip', text: 'New Mexico'}, {place: paris, alt: 'new paris trip', text: 'Paris'}]
    return (
        <div className='flex flex-wrap w-full mb-20'>
            <div className="flex w-full px-12 justify-between">
                <div className="item-check flex">
                    <img src={sanDiego} alt='san diego trip' className='w-full relative' />
                    <div className='absolute text-white self-end w-full flex flex-col'>
                        <p>New Mexico</p>
                        <p>San Diego offer endless sand and sunshine</p>
                    </div>
                </div>
                <div className="item-check flex">
                    <img src={newMexico} alt='new Mexico trip' className='w-full' />
                </div>
                <div className="item-check flex">
                    <img src={paris} alt='paris trip' className='w-full' />
                </div>
            </div>
        </div>
    )
}


export default Inspiration