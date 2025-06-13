import React, {useState } from 'react';
import styles from './loginScreen.module.scss';
import { handleApi } from '../network';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        const data = {
            email,
            password,
        };
        handleApi('http://localhost:3000/api/v1/users/login', 'post', data);
        // setEmail('');
        // setPassword('');
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
                    <button className={styles.button} type="submit">
                        Sign-In
                    </button>
                </form>
                <p className={styles.footerText}>
                    New to RPMart? <a href="/signup" className={styles.link}>Create your RPMart account</a>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;