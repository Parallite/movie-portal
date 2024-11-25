import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header';

export const Layout = () => {
    return (
        <div className={styles.layout_container}>
            <Header />
            <main className={styles.main_container}>
                <Outlet />
            </main>
        </div>
    );
};