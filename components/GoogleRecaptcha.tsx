/*
 * Created on Mon Feb 13 2023
 * Copyright (c) 2023 Connor Doman
 */

interface RecaptchaAltTextProps {
    className?: string;
}

export const RecaptchaAltText = ({ className }: RecaptchaAltTextProps) => {
    return (
        <p className={className}>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
    );
};
