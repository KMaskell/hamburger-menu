import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className={styles.main}>
            <section className={styles.pMenu1}>
                <nav
                    id="navbar"
                    className={styles.navigation}
                    role="navigation"
                >
                    <input
                        id="toggle1"
                        type="checkbox"
                        className={styles.toggle1}
                    />
                    <label className={styles.hamburger1} htmlFor="toggle1">
                        <div className={styles.top}></div>
                        <div className={styles.meat}></div>
                        <div className={styles.bottom}></div>
                    </label>

                    <nav className={styles.menu1}>
                        <Link className={styles.link1} href="">
                            Our Models
                        </Link>
                        <Link className={styles.link1} href="">
                            Specialties
                        </Link>
                        <Link className={styles.link1} href="">
                            About
                        </Link>
                        <Link className={styles.link1} href="">
                            Contact
                        </Link>
                    </nav>
                </nav>
            </section>
        </div>
    );
}
