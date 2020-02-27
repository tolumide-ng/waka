import React from 'react'
import flightsForm from '../../../../assets/imgs/flightsforms.svg'
import flightLight from '../../../../assets/imgs/flightslight.svg'
import hotelsLight from '../../../../assets/imgs/hotelslight.svg'
import packages from '../../../../assets/imgs/packages.svg'
import flightsbackground from '../../../../assets/imgs/flightsbackground.png'
import {NavLink} from 'react-router-dom'
import './index.sass'



const FlightForm = () => {
    const handlesubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='bg-white mb-20 w-full bg-green-500 mt-4 flex items-center text-sm text-green-text'>
            <img src={flightsbackground} alt='background for the flights form' className="background object-cover relative filter-color w-full" />
            <div className='w-3/5 bg-white h-auto p-6 ml-20 absolute h-64'>
                <div className='w-9/12'>
                    <p className='mb-8'>
                        Find the best flight deals
                    </p>
                <div className='flex mb-8'>
                    <img src={flightsForm} alt='flights form' className='mr-2' />
                    <img src={hotelsLight} alt='flights form' className='mr-2'/>
                    <img src={packages} alt='flights form' className='mr-2'/>
                </div>
            </div>

            <div className='formTitle flex mb-1'>
                <NavLink to='/' activeClassName='' className='mr-6 text-green-form-text hover:text-green-gold ml-6'>Round trip</NavLink>
                <NavLink to='/' className='mr-6 text-green-form-text hover:text-green-gold'>One Way</NavLink>
                <NavLink to='/'className='mr-6 text-green-form-text hover:text-green-gold'>Multi city</NavLink>
                </div>
                <div className="w-full h-px bg-gray-200 mb-6"></div>
            {/* <hr/> */}

                <form onSubmit={handlesubmit}>
                <fieldset>
                    <div className="flex mb-6">
                        <legend>fly from
                            <input type="text" placeholder='Lagos(LOS)'/>
                        </legend>
                        <legend>fly to
                            <input type="text" placeholder='City or Airport'/>
                        </legend>
                    </div>

                    <div className="flex mb-6">
                        <legend>
                            Departing
                                <input type='date' placeholder='Sat01/11/2020'/>
                        </legend>
                        <legend>
                            Returning
                            <input type='date' placeholder='Fri07/11/2020'/>
                        </legend>
                    </div>
                    
                        
                    <div className="flex mb-6">
                        <legend>
                            Passenger
                                {/* <select>1 Adult</select> */}
                                <input type='select' placeholder='1 Adult' />
                        </legend>
                        <legend>
                            Class
                            <input type='select' placeholder='Economy' />
                        </legend>
                    </div>
                    
                    </fieldset>
                    

                    <button className='px-6 py-1 text-sm bg-green-gold text-white'>Search</button>
            </form>
           
            </div>
            

        </div>
    )
}

export default FlightForm