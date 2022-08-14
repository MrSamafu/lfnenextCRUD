import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RecipeCard from '../components/recipeCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recettes Manager</title>
        <meta name="description" content="Une application pourgérer ses recettes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold">
          Recettes manager
        </h1>
        <p className="text-xl underline">
          Liste des recettes :
        </p>

        <div className={styles.grid}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
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

export default Home
