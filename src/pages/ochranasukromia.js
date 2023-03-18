import Head from 'next/head'
import Link from 'next/link'

const ochranasukromia = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Ochrana súkromia</title>
        <meta name="description" content="Zásady ochrany osobných údajov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Ochrana súkromia</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text'></p>
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

export default ochranasukromia
