import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';
import { selectAuthUser } from 'store/user/selectors';
import { AppDispatch } from 'store';
import { logout } from 'store/user/userSlice';

export const Header = () => {
    const authUser = useSelector(selectAuthUser);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(logout());
    };

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
                        authUser?.isLogged && <>
                            <li className={styles.item}>
                                <NavLink to={'/'} className={activeState}>
                                    Поиск фильмов
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to={'/favorites'} className={activeState}>
                                    Мои фильмы
                                    <span>
                                        {favorites.length}
                                    </span>
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to={'/profile'} className={activeState}>
                                    {authUser.name}
                                    <img src="/user.svg" alt="Ссылка на страницу профиля" />
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        authUser?.isLogged ?
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
