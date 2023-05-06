import Head from "next/head";

import Menu from "../../components/Menu";
import Intro from "../../components/Intro";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>sophie nguyen</title>
        <meta name="description" content="Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div id="finisher-header" className={styles.containerWrapper}>
        <main className={styles.container}>
          <div id="home" className={styles.pageSection}>
            <Intro />
          </div>
        </main>
      </div>
    </>
  );
}
