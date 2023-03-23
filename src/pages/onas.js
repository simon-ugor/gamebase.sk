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
                <p className='pages-text'>GameBase je herné vývojárske štúdio založené na Slovensku. Naše štúdio sa snaží vytvárať jednoduché pútavé hry, ktoré si môžu užiť hráči všetkých vekových kategórií. Zahraj si hocikedy a hocikde keď potrebuješ prestávku od každodenného života. Hry vyžadujú minimálne premýšľanie, sú ľahko hrateľné a poskytujú odreagovanie vždy a všade. Všetky <Link style={{"color": "white"}} href="/nasehry">naše hry</Link> sú dostupné na iOS a Android, nájdeš ich na Apple App Store ako aj Google Play Store. Tak si vyber z našej ponuky hier a ponor sa s nami do herného dobrodružstva.</p>
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
