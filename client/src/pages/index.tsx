import Head from "next/head";

import Menu from "../../components/Menu";
import Intro from "../../components/Intro";
import styles from "@/styles/Home.module.css";
import Resume from "./resume/resume";

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
          <div id="resume" className={styles.pageSection}>
            <Resume />
            {/* <div className={styles.grid}>
              <Link href="/resume/resume" className={styles.card}>
                <h2 className={inter.className}>
                  Resume <span>-&gt;</span>
                </h2>
                <p className={inter.className}>Meowmewomeomwoemoewmewow.</p>
              </Link>

              <Link href="/" className={styles.card}>
                <h2 className={inter.className}>
                  Endorsements<span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  From people I&apos;ve worked with
                </p>
              </Link>

              <Link href="/projects/climate/climate-x" className={styles.card}>
                <h2 className={inter.className}>
                  Climate X <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Active project on making climate education more digestable.
                </p>
              </Link>

              <Link
                href="https://github.com/SophXN"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  Prior Projects <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Full stack projects created a few blue moons ago.
                </p>
              </Link>
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
}
