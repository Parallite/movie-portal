import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvier } from '@context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvier>
            <App />
        </AuthContextProvier>
    </StrictMode>
);
