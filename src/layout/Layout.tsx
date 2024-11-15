import styles from './Layout.module.css';

import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';

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