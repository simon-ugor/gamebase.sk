import Head from 'next/head'
import Link from 'next/link'

const kontakt = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Kontakt</title>
        <meta name="description" content="Kontakt na herné štúdio GameBase.sk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Kontakt</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text'>V prípade akýchkoľvek otázok alebo nápadov nám neváhaj napísať na <nobr style={{"textDecoration": "underline"}} >gamebaseslovakia@gmail.com</nobr></p>
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

export default kontakt
