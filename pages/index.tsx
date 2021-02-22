//import { NextPage } from "next";
import Layout from "components/Layout";
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <Layout>
        Welcome to intBuddy! 
        <Link href="/questions"><a>Start interview</a></Link>
      </Layout>
    </>
  );
};

export default Home;
