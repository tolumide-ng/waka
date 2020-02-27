import React from 'react'
import british from '../../../../assets/imgs/british.svg'
import arikLogo from '../../../../assets/imgs/arik.svg'
import britishLogo from '../../../../assets/imgs/britishLogo.svg'
import toLondon from '../../../../assets/imgs/toLondon.svg'
import toFrance from '../../../../assets/imgs/toFrance.svg'
import toAmsterdam from '../../../../assets/imgs/toAmsterdam.svg'
import toBoston from '../../../../assets/imgs/toBoston.svg'
import flight1 from '../../../../assets/imgs/flight1.svg'
import flight2 from '../../../../assets/imgs/flight2.svg'
import flight3 from '../../../../assets/imgs/flight3.svg'
import flight4 from '../../../../assets/imgs/flight4.svg'


import TopFlights from '../../atoms/TopFlights'

const FlightDeals = () => {

    const allTrips = [{ to: 'Boston', from: 'London', fromDate: '02/11/2020', toDate: '25/11/2020', image:flight1, logo: britishLogo },
        { to: 'Boston', from: 'London', fromDate: '02/11/2020', toDate: '25/11/2020', image: flight2, logo: britishLogo },
        { to: 'Boston', from: 'London', fromDate: '02/11/2020', toDate: '25/11/2020', image: flight3, logo: arikLogo },
        { to: 'Boston',from: 'London', fromDate: '02/11/2020', toDate: '25/11/2020', image: flight4, logo: arikLogo }]
    return (
        <div className='px-12 mt-12 flex justify-between text-sm text-green-form-text w-full flex-wrap mb-12'>
            {/* <TopFlights /> */}
            {allTrips.map(flights => <TopFlights to={flights.to} from={flights.from} fromDate={flights.fromDate} toDate={flights.toDate} image={flights.image} logo={flights.logo}/>)}
        </div>
    )
}

export default FlightDeals