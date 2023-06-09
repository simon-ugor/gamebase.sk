import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import ninjaHopIcon from "../images/ninjaHopPlaystore.png"
import dropTheBasketballIcon from "../images/dropTheBasketballIcon.png"
import whatTheRocketIcon from "../images/whatTheRocketIcon.png"
import hackTheGameIcon from "../images/hackTheGameIcon.png"
import dropThatBoxIcon from "../images/dropThatBoxIcon.png"
import basketFlicksIcon from "../images/basketFlicksIcon.png"

const nasehry = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Naše hry</title>
        <meta name="description" content="Všetky hry od GameBase.sk na jednom mieste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="main-div-pages">
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Naše hry</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-games-div'>
                <div className='game-one'>
                    <div className='game-icon'>
                      <a href="/whattherocket" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={whatTheRocketIcon}
                          alt="What The Rocket icon"
                        />
                        <p className='game-title'>What The Rocket</p>
                      </a>
                    </div>
                </div>

                <div className='game-three'>
                    <div className='game-icon'>
                      <a href="/hackthegame" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={hackTheGameIcon}
                          alt="Hack The Game icon"
                        />
                        <p className='game-title'>Hack The Game</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-four'>
                    <div className='game-icon'>
                      <a href="/dropthatbox" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={dropThatBoxIcon}
                          alt="Drop That Box icon"
                        />
                        <p className='game-title'>Drop That Box</p>
                      </a>
                    </div>
                </div>

                <div className='game-two'>
                    <div className='game-icon'>
                      <a href="/ninjahop" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={ninjaHopIcon}
                          alt="Ninja Hop icon"
                        />
                        <p className='game-title'>Ninja Hop</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-five'>
                    <div className='game-icon'>
                      <a href="/basketflicks" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={basketFlicksIcon}
                          alt="Basket Flicks icon"
                        />
                        <p className='game-title'>Basket Flicks</p>
                      </a>
                    </div>
                  </div>
                  {/*
                  <div className='game-six'>
                    <div className='game-icon'>
                      <a href="/dropthebasketball" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={dropTheBasketballIcon}
                          alt="Drop The Basketball icon"
                        />
                        <p className='game-title'>Drop The Basketball</p>
                      </a>
                    </div>
                  </div>
                  */}

                

                
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

export default nasehry
