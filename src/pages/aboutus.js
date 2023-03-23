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
                <p className='pages-text'>GameBase is a game development studio based in Slovakia. Our studio aims to create simple, engaging games that players of all ages can enjoy. Play anytime, anywhere when you need a break from everyday life. Games require minimal thought, are easy to play and provide a relaxing escape anytime and anywhere. All of <Link style={{"color": "white"}} href="/ourgames">our games</Link> are available on iOS and Android, and can be found on the Apple App Store as well as the Google Play Store. So choose from our selection of games and dive into a gaming adventure with us.</p>
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
