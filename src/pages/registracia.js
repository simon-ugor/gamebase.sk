import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const registracia = () => {
  return (
    <>
        <Head>
            <title>GAMEBASE.SK - Registrácia</title>
            <meta name="description" content="Zaregistrus sa na novinky od herného štúdia GameBase" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='main-div-pages'>
            <div className='pages-row-one'>
                
            </div>
            <div className='pages-row-two'>
                <div></div>
                <div className='pages-text-div'>
                    <p className='pages-text'>Zadaj svoj e-mail</p>
                    <input placeholder='E-mail' className='email-input'></input>
                    <br />
                    <button className='submit-email-button'>Odoslať</button>
                </div>
                <div></div>
            </div>
            <div className='pages-row-three'>
                <Link href="/" className='pages-home'>Domov</Link>
            </div>
        </div>
    </>
  )
}

export default registracia
