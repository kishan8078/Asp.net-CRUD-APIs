import React from 'react'
import {Outlet , NavLink} from 'react-router-dom'
import '../CSS/RootCSS.css'

const Root = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='student'>Student</NavLink>
                    </li>
                    <li>
                        <NavLink to='staff'>Staff</NavLink>
                    </li>
                    <li>
                        <NavLink to='subject'>Subject</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Root
