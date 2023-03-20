import Head from 'next/head'
import Link from 'next/link'

const kontakt = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Contact</title>
        <meta name="description" content="Contact GameBase via Email" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Contact</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text'>gamebaseslovakia@gmail.com</p>
            </div>
            <div></div>
        </div>
        <div className='pages-row-three'>
            <Link href="/en" className='pages-home'>Home</Link>
        </div>
    </div>
    </>
  )
}

export default kontakt
