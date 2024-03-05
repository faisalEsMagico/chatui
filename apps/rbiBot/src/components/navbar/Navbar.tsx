import React from 'react'
import Menu from '../../assets/icons/menu.svg'
import Image from 'next/image'
import styles from './index.module.css'
const Navbar = () => {
    return (
        <div
            className={styles.container}
        >
            <div>
                <Image src={Menu.src} height={40} width={40} alt='menu' />
            </div>
            <div className={styles.navbarHeading}>Indian Bank</div>
            <div className={styles.language}>ENG</div>
        </div>
    )
}

export default Navbar