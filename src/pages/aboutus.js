import Head from 'next/head'
import Link from 'next/link'

const onas = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - About us</title>
        <meta name="description" content="About game development studio GameBase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>About us</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text'>Write some great about us text in english and place it here</p>
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

export default onas