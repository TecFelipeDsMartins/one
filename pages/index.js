import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lagoinha one</title>
        <meta name="description" content="Aqui voce vai encontrar todas as 39 Músicas da playlist louvor ONE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img  src="https://pps.whatsapp.net/v/t61.24694-24/221213601_4949871671727691_8592480405169751622_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxup7QJL5H0hAoO7EZk4norLPB2t8vmk13cElbrMi0rjA&oe=62B8BCE4" alt="logo" />
        <h1 className={styles.title}>
          Lagoinha ONE 
        </h1>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=1XqHlWsMThA&list=PLXLvcDJ3jU1ZH3pDfVBlj7mkXRgH0denF" className={styles.card}>
            <h2 className={styles.h2}>Youtube playlist louvores &rarr;</h2>
            <p>Aqui voce vai encontrar todas as 39 Músicas da playlist louvor ONE</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
