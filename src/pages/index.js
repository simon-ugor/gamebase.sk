import Head from 'next/head'
import Link from 'next/link'

import { BsInstagram } from "react-icons/bs"

export default function Home() {

  return (
    <>
      <Head>
        <title>GAMEBASE.SK</title>
        <meta name="description" content="Slovenské vývojárske štúdio hier GameBase" />
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
          <div className='grid-row-one-column-two'></div>
        </div>
        <div className='grid-row-two'>
            <h1 className='gamebase-title'>GAMEBASE</h1>
        </div>
        <div className='grid-row-three'>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/nasehry">
              <div className='link-heading'>NAŠE HRY</div>
              <div className='link-desc'>Všetky naše hry na jednom mieste</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/onas">
              <div className='link-heading'>O NÁS</div>
              <div className='link-desc'>Informácie o hernom štúdiu GameBase</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/kontakt">
              <div className='link-heading'>KONTAKT</div>
              <div className='link-desc'>Kontaktujte nás prostredníctvom email-u</div>
            </Link>
          </div>
          <div className='grid-three-row'>
            <Link className='link-grid' href="/ochranasukromia">
              <div className='link-heading'>OCHRANA SÚKROMIA</div>
              <div className='link-desc'>Zásady ochrany osobných údajov</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
