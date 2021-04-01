import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = props => (
    <>
        <Link href="/">
            <div className={styles.Footer}>{props.appTitle}</div>
        </Link>
    </>
);

export default Footer;