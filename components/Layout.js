import Head from "next/head";

import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout = props => {
    const appTitle = `intBuddy`;
    
    return (
        <div className={styles.Layout}>
            <Head>
                <title>intBuddy</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>

            <Header appTitle={appTitle} />
            <div className={styles.Content}>{props.children}</div>

        </div>
    );
};

export default Layout;