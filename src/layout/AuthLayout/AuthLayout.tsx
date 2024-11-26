import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header';

export const AuthLayout = () => {
    return (
        <div className={styles.layout_container}>
            <Header />
            <main className={styles.main_container}>
                <Outlet />
            </main>
        </div>
    );
};