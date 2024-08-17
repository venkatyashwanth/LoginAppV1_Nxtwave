import React, { useEffect, useState } from 'react';
import styles from "./Loginapp.module.scss";

function Loginapp() {
    const [logInstatus, setLoginStatus] = useState(false);
    const [display, setDisplay] = useState({ headingContent: '', btnContent: '' })

    const handleLog = () => {
        setLoginStatus(!logInstatus)
    }

    useEffect(() => {
        const headingContentUpdate = logInstatus ? 'Welcome User' : 'Please Login';
        const buttonContentUpdate = logInstatus ? 'Logout' : 'Login';
        setDisplay(display => ({headingContent: headingContentUpdate, btnContent: buttonContentUpdate }))
    }, [logInstatus])

    return (
        <div className={styles.appBg}>
            <div className={styles.appContent}>
                <h1>{display.headingContent}</h1>
                <button onClick={handleLog}>{display.btnContent}</button>
            </div>
        </div>
    )
}

export default Loginapp