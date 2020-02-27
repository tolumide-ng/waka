import React from 'react';


const TopFlights = ({image, toDate, logo, fromDate, from, to}) => {
    return (
        <div className='flex flex-col flight-width'>
                <img src={image} className='w-full' />
                <div className='w-full' className='flex justify-between items-center'>
                    <div className='flex items-center justify-center w-4/12 bg-green-400'>
                        <img src={logo} className='w-full' />
                    </div>


                    <div className='flex justify-between w-2/5 flex-col'>
                        <div className='flex justify-between mx-8'>
                            <p>{from}</p>
                            <p>-</p>
                            <p>{to}</p>
                        </div>
                        <div className='flex justify-center'>
                            <p>{fromDate}</p>
                            <p className='mx-2'>-</p>
                            <p>{toDate}</p>
                        </div>
                    </div>



                    <div className='w-4/12 ml-16'>
                        <p className=''>
                            Money
                        </p>

                    </div>
                </div>

            </div>
    )
}

export default TopFlights