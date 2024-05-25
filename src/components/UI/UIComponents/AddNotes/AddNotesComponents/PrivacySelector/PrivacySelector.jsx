import React, { useState } from 'react'
import Switch from '../../../Switch/Switch'

const PrivacySelector = ({ value, setValue }) => {
    return (
        <div className='flex flex-row items-center gap-3'>
            <p className=' font-semibold'>Task Privacy</p>
            <Switch
                value={value}
                onClick={() => setValue(!value)}
            />
        </div>
    )
}

export default PrivacySelector