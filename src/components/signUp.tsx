import React, { useState } from 'react';
import styles from './loginScreen.module.scss';
import { handleApi } from '../network';

const SignupScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       const data = {
        name,
        email,
        password,
        passwordConfirm
    };
    handleApi('http://localhost:3000/api/v1/users/signup', 'post', data);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Sign-In</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="name">
                            Name
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="passwordConfirm">
                            Password
                        </label>
                        <input
                            className={styles.input}
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(e) => setpasswordConfirm(e.target.value)}
                            required
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Sign-Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupScreen;