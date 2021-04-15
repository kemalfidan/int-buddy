import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link"

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
                        <div>Your end-to-end mock interview platform.</div>
                        <div className={styles.ButtonBox}>
                            <div className={styles.Buttoncont}>    
                                <Link href="/questions">
                                    <button className={styles.GetStartedButton}>
                                        <a>Try it now!</a>
                                    </button>
                                </Link>
                                <img className={styles.Mascot} src="intBuddy.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.WelcomeInfoSlideShow}>
                        <img style={{ width: "600px", marginRight: "200px" }} src="home_page.png"></img>
                    </div>
                </div>

                <div className={styles.AboutIntBuddyPage}>
                    <div className={styles.AboutIntBuddyTitle}>What is Int Buddy?</div>
                    <div className={styles.AboutIntBuddyDesc}>
                        Int Buddy is a free platform to practice your computer science interviews. 
                    </div>
                    <div className={styles.AboutIntBuddyBody}>
                        Our team found that many computer science students have a problem with job interviews.  
                        Mock interviews help applicants get a job by X% [reference].  There is also an increase 
                        in the number of job applicants in the computer science market: almost doubling over the
                        past 10 years [ref2]. For these reasons, we’ve designed Int Buddy to simulate a mock 
                        interview session. Random questions will be picked from a question bank. The types of 
                        questions featured in Int Buddy include:
                        <ul>
                            <li>Introductory</li>
                            <li>Multiple Choice</li> 
                            <li>Short Answer</li>
                            <li>Coding</li>
                            <li>Behavioral</li>
                            <li>System Design</li> 
                        </ul>
                    </div>
                </div>

                <div className={styles.AboutUsPage}>
                    <div className={styles.AboutUsTitle}>Meet the Team</div>
                    <div className={styles.AboutUsBlank}></div>
                    <div className={styles.AboutUsCircles}>
                        <img className={styles.OurFaces} src="kemal_fidan.jpeg"></img>
                    </div>
                    <div className={styles.AboutUsCircles}>
                        <img className={styles.OurFaces} src="catherine_fei.jpeg"></img>
                    </div>
                    <div className={styles.AboutUsCircles}>
                        <img className={styles.OurFaces} src="logan_courtney.png"></img>
                    </div>
                    <div className={styles.AboutUsCircles}>
                        <img className={styles.OurFaces} src="chaohui_zheng.jpeg"></img>
                    </div>
                    <div className={styles.AboutUsBlank}></div>
                    <div className={styles.AboutUsDescription}></div>
                    <div className={styles.AboutUsDescription}>
                        Kemal Fidan<br></br>
                    </div>
                    <div className={styles.AboutUsDescription}>
                        Catherine Fei<br></br>
                    </div>
                    <div className={styles.AboutUsDescription}>
                        Logan Courtney<br></br>
                    </div>
                    <div className={styles.AboutUsDescription}>
                        Chaohui Zheng<br></br>
                    </div>
                    <div className={styles.AboutUsDescription}></div>
                </div>
            </div>
            <Footer appTitle={appTitle}/>
        </div>
    );
};

export default Layout;