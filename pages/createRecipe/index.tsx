import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { IoAddOutline } from 'react-icons/io5'
import { useState } from 'react'


const CreateRecipe: NextPage = () => {
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
                <div className='flex flex-row items-center w-full justify-between'>
                    <p className="text-xl underline">
                        Créations d'une recette
                    </p>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col m-2'>
                        <label htmlFor="name">Titre de votre recette</label>
                        <input name="name" className='bg-slate-50 rounded' />
                        <label htmlFor="description">Description</label>
                        <input name="description" className='bg-slate-50 rounded' />
                        <label htmlFor="image">Image</label>
                        <button name="image" className='bg-yellow-500 rounded m-2 p-2 w-40 text-white'>
                            <p>Parcourir</p>
                        </button>
                        <label htmlFor="level">Niveau de difficultée</label>
                        <input name="level" className='bg-slate-50 rounded' />
                        <label htmlFor="forHow">Pour combien de personne</label>
                        <input name="forHow" className='bg-slate-50 rounded' />
                        <label htmlFor="preparingTime">Temps de préparation</label>
                        <input name="preparingTime" className='bg-slate-50 rounded' />
                        <label htmlFor="cookingTime">Temps de cuisson</label>
                        <input name="cookingTime" className='bg-slate-50 rounded' />
                    </div>
                    <div className='flex flex-col m-2'>
                        <label>Ingredients :</label>
                        <div className='bg-slate-50 rounded flex flex-col justify-center items-center'>
                            <button className='bg-yellow-500 rounded text-white m-2 p-2 w-40 flex flex-row justify-center items-center'><IoAddOutline /></button>
                        </div>
                        <label>Etapes :</label>
                        <div className='bg-slate-50 rounded flex flex-col justify-center items-center'>
                            <button className='bg-yellow-500 rounded text-white m-2 p-2 w-40 flex flex-row justify-center items-center'><IoAddOutline /></button>
                        </div>
                        <label htmlFor='update'>Déclinaison</label>
                        <input name='update' className='bg-slate-50 rounded' />
                        <label htmlFor='update'></label>
                        <input name='update' className='bg-slate-50 rounded' />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <button className='rounded bg-red-800 flex justify-center items-center text-white m-2 p-2 w-40'>
                        <p>Annuler</p>
                    </button>
                    <button className='rounded bg-lime-800 flex justify-center items-center text-white m-2 p-2 w-40'>
                        <p>Valider</p>
                    </button>
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

export default CreateRecipe;