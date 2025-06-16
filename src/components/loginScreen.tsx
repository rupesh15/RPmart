import React, {useState } from 'react';
import styles from './loginScreen.module.scss';
import { useAppSelector, useAppDispatch } from '../hook';
import { loginUser } from '../network/loginauth';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.loginauth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser( email, password)) 
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Sign-In</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">
                            Email
                        </label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="password">
                            Password
                        </label>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={styles.button} type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
                <div className={styles.error}>
                    {error && <p className={styles.errorMessage}>{error}</p>}
                </div>
                <p className={styles.footerText}>
                    New to RPMart? <a href="/signup" className={styles.link}>Create your RPMart account</a>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;