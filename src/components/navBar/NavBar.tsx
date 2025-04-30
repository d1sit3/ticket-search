import './navbar.scss'
import { useState } from 'react'


export default function NavBar(){
    const [isActive, setAcive] = useState('first')

    const handleClick = (buttonName : string) =>{
        setAcive(buttonName)
    }
    return(
        <nav className='nav'>
            <button 
            className={`nav__btn first ${isActive === 'first' ? 'active' : ''}`}
            onClick={() => handleClick('first')}
            >
                Самый дешевый
            </button>
            <button 
            className={`nav__btn second ${isActive === 'second' ? 'active' : ''}`}
            onClick={() => handleClick('second')}
            >
                Самый быстрый
            </button>
            <button 
            className={`nav__btn last ${isActive === 'last' ? 'active' : ''}`}
            onClick={() => handleClick('last')}
            >
                Самый оптимальный
            </button>
        </nav>
    )
}