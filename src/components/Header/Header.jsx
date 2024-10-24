import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <a className='header__logo' href="/">
                <img src="./logo.svg" alt="Логотип сайта" />
            </a>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="">
                            Поиск фильмов
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="">
                            Мои фильмы
                            <span>
                                0
                            </span>
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="">
                            Войти
                            <img src="/login.svg" alt="Ссылка на страницу логина" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
