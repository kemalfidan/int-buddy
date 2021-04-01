import Link from "next/link";
import styles from "./Header.module.scss";

const Header = props => (
    <>
    <div className={styles.Header}>
        <div className={styles.LogoBack}>
            <Link href="/">
                <img className={styles.Logo} src="intBuddy.svg" alt="intBuddy"></img>
            </Link>
        </div>
        <Link href="/">
            <div className={styles.AppTitle}>{props.appTitle}</div>
        </Link>
    </div>
    </>
);

export default Header;