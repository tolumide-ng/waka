import React from 'react'
import waka from '../../../../assets/imgs/wakanow.png'

const Header = () => {
    const menuList = ['USD', 'My trips', 'English', 'Support', 'Sign in']
    const lowerMenuList = ['Flights', 'Hotels', 'Packages', 'Special Events', 'Things to do', 'More']
    return (
        <div className='w-full px-20'>
            <div className="flex pt-3 w-full items-center">
                <div className="w-7/12">
                    <img src={waka} />
                </div>
                <div className='w-5/12'>
                    <ul className='flex'>
                        {menuList.map(item => <li className='w-1/6' key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="w-full pt-4 w-full">
                <ul className='flex w-7/12 justify-between pr-8'>
                    {lowerMenuList.map(item => <li className=''>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Header