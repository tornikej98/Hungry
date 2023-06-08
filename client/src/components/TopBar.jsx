import React from 'react'

import { LogoutUser } from '../hooks/Logout'
import { useAuthCtx } from '../hooks/useAuthCtx'
import { Link } from 'react-router-dom'

function TopBar() {
    const { logout } = LogoutUser()


    const handleClick = () => {
        logout()
    }

    return (
        <div className='top-bar'>
            <h4>this is the top bar</h4>

            <Link to='/'>
                <h1>Home</h1>
            </Link>

            <div>
                <button onClick={handleClick}>Log out</button>
            </div>

        </div>
    )
}

export default TopBar