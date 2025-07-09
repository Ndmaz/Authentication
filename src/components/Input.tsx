'use client'
import styles from './Input.module.scss'
import { useState } from "react"

export function Input() {
    const [phoneValidation, setPhoneValidation] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        // Correct regex: /^(\+98|0)?9\d{9}$/
        const regex = new RegExp('^(\\+98|0)?9\\d{9}$');
        if (regex.test(value)) {
            setPhoneValidation('شماره موبایل معتبر است');
            setIsValid(true);
        } else {
            setPhoneValidation('شماره موبایل نامعتبر است');
            setIsValid(false);
        }
    }

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="شماره موبایل"
                onChange={handleChange}
                aria-label="شماره موبایل"
                aria-invalid={isValid === false}
                
            />
            <p className={
                isValid === null
                    ? styles.validation
                    : isValid
                        ? `${styles.validation} ${styles.success}`
                        : `${styles.validation} ${styles.error}`
            }>
                {phoneValidation}
            </p>
        </div>
    );
}