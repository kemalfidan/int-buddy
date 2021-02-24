import { prependOnceListener } from "process";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header = props => (
    <>
        <div className={styles.LogoBack}>
            <img className={styles.Logo} src="intBuddy.svg" alt="intBuddy"></img>
        </div>
        <Link href="/">
            <div className={styles.Header}>{props.appTitle}</div>
        </Link>
    </>
);

export default Header;