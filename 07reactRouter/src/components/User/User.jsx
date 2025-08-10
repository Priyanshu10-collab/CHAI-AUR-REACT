import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();
    return (
        <div className='text-2xl bg-violet-700 p-4 text-white '>
            {userId}
        </div>
    )
}

export default User
