import styles from './Header.module.css';

export const Header = () => {
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
                    <li className={styles.item}>
                        <a href="#">
                            Войти
                            <img src="/login.svg" alt="Ссылка на страницу логина" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
