import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { BsInstagram } from "react-icons/bs"

const tiltfishtycoongame = () => {
  return (
    <>
        <Head>
            <title>GAMEBASE.SK - Tilt Fish Tycoon</title>
            <meta name="description" content="Tilt Fish Tycoon by GameBase.sk" />
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
              <Link className='english-link' href="/tiltfishtycoon">Slovak</Link>
            </div>
          </div>
        </div>
        <div className='grid-row-two-custom'>
            <h1 className='pages-heading'>Tilt Fish Tycoon</h1>
        </div>
        <div className='grid-row-three'>
          <div className='grid-three-row'>


          </div>
          <div className='grid-three-row'>


          </div>
          <div className='grid-three-row'>


          </div>
          <div className='grid-three-row'>


          </div>
        </div>
      </div>
    </>
  )
}

export default tiltfishtycoongame
