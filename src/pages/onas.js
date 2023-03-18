import Head from 'next/head'
import Link from 'next/link'

const onas = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - O nás</title>
        <meta name="description" content="O hernom štúdiu GameBase.sk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>O nás</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text'>GameBase je herné vývojárske štúdio pôsobiace na Slovensku. Venujeme sa najmä jednoduchým mobilným hrám...</p>
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

export default onas
