import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

import { useAuthContext } from '@hooks/useAuthContext';

export const Header = () => {
    const { currentUser, handleLogout } = useAuthContext();

    const activeState = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${styles.active}` : `${styles.inactive}`;
    };

    return (
        <header className={styles.header}>
            <a className={styles.logo} href="/">
                <img src="/logo.svg" alt="Логотип сайта" />
            </a>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    {
                        currentUser?.isLogged && <>
                            <li className={styles.item}>
                                <NavLink to={'/'} className={activeState}>
                                    Поиск фильмов
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to={'/favorites'} className={activeState}>
                                    Мои фильмы
                                    <span>
                                        0
                                    </span>
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to={'/profile'} className={activeState}>
                                    {currentUser.name}
                                    <img src="/user.svg" alt="Ссылка на страницу профиля" />
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        currentUser?.isLogged ?
                            <li className={styles.item}>
                                <button onClick={handleLogout}>
                                    Выйти
                                </button>
                            </li>
                            :
                            <li className={styles.item}>
                                <NavLink to={'/auth/login'} className={activeState}>
                                    Войти
                                    <img src="/login.svg" alt="Кнопка авторизации" />
                                </NavLink>
                            </li>
                    }
                </ul>
            </nav>
        </header >
    );
};
