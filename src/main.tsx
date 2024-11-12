import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { AuthContextProvier } from '@/context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvier>
            <App />
        </AuthContextProvier>
    </StrictMode>
);
