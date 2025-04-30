import './header.scss'
import Logo from '../../img/image 6.svg'


export default function Header(){
    return(
        <header className='header'>
            <img src={Logo} alt="logo" />
            <h1 className='header__title'>Поиск авиабилетов</h1>
        </header>
    )
}