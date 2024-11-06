import styles from './Header.module.css';

export const Header = ({
    userData,
    handleLogout
}) => {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="/">
                <img src="./logo.svg" alt="Логотип сайта" />
            </a>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#">
                            Поиск фильмов
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">
                            Мои фильмы
                            <span>
                                0
                            </span>
                        </a>
                    </li>
                    {
                        userData.isLogged && <>
                            <li className={styles.item}>
                                <a href="#">
                                    {userData.name}
                                    <img src="/user.svg" alt="Ссылка на страницу профиля" />
                                </a>
                            </li>
                            <li className={styles.item}>
                                <button onClick={handleLogout}>
                                    Выйти
                                </button>
                            </li>
                        </>
                    }
                    {
                        !userData.isLogged && <li className={styles.item}>
                            <button>
                                Войти
                                <img src="/login.svg" alt="Кнопка авторизации" />
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
};
