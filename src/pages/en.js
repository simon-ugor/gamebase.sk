import Head from 'next/head'
import Link from 'next/link'

import { BsInstagram } from "react-icons/bs"

export default function HomeEnglish() {

  return (
    <>
      <Head>
        <title>GAMEBASE.SK</title>
        <meta name="description" content="Game development studio GameBase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main-div'>
        <div className='grid-row-one'>
          <div className='grid-row-one-column-one'>
            <div className='instagram'>
              <BsInstagram/>
              <a
              href="https://instagram.com/gamebase.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              >
              &nbsp;@gamebase.sk
              </a>
            </div>
            <div className='instagram'></div>
          </div>
          <div className='grid-row-one-column-two'>
            <div></div>
            <div className='instagram'>
              <Link className='english-link' href="/">Slovak</Link>
            </div>
          </div>
        </div>
        <div className='grid-row-two'>
            <h1 className='gamebase-title'>GAMEBASE</h1>
        </div>
        <div className='grid-row-three'>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/ourgames">
              <div className='link-heading'>OUR GAMES</div>
              <div className='link-desc'>All our games in one place</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/aboutus">
              <div className='link-heading'>ABOUT US</div>
              <div className='link-desc'>Information about our game development studio</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/contact">
              <div className='link-heading'>CONTACT</div>
              <div className='link-desc'>Contact us via Email</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/privacypolicy">
              <div className='link-heading'>PRIVACY POLICY</div>
              <div className='link-desc'>Privacy policy and legal information</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
