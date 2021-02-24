import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

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
            <div className={styles.Content}>{props.children}
                <div className={styles.WelcomeInfoPage}>
                    <div className={styles.WelcomeInfoBox}>
                        <div className={styles.WelcomeInfoTitle}>Get started with intBuddy</div>
                        <div className={styles.GetStartedButton}>Get Started</div>
                    </div>
                    <div className={styles.SlideShow}>temp</div>
                </div>

                <div className={styles.AboutIntBuddyPage}>

                </div>

                <div className={styles.AboutUsPage}>

                </div>
            </div>
            <Footer/>

        </div>
    );
};

export default Layout;