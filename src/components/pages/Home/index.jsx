import React from 'react'
import Header from '../../UI/others/Header'
import Inspiration from '../../UI/others/Inspiration'
import FlightForm from '../../UI/others/FlightForm'
import TopDeals from '../../UI/others/FlightDeals'


const HomePage = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col'>
                <FlightForm />
                <Inspiration />
                <TopDeals />
            </div>
        </div>
    )
}


export default HomePage