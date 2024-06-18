import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
const Loader = ({ loadingMessage = "Loading", isLoading = false }) => {
    if(!isLoading) return;
    return (
        <div className='fixed  w-32 h-14 flex flex-col items-start justify-center'>
            <MutatingDots
                visible={isLoading}
                height="100"
                width="100"
                color="rgb(234 179 8 / 0.9)"
                secondaryColor="rgb(234 179 8 / 0.8)"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p>{loadingMessage}</p>
        </div>
    )
}

export default Loader