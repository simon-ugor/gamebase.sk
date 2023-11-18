import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import ninjaHopIcon from "../images/ninjaHopPlaystore.png"
import dropTheBasketballIcon from "../images/dropTheBasketballIcon.png"
import whatTheRocketIcon from "../images/whatTheRocketIcon.png"
import hackTheGameIcon from "../images/hackTheGameIcon.png"
import dropThatBoxIcon from "../images/dropThatBoxIcon.png"
import basketFlicksIcon from "../images/basketFlicksIcon.png"
import tiltFishTycoonIcon from "../images/tiltFishTycoonIcon.png"
import planetsDodgeIcon from "../images/planetsDodgeIcon.png"
import sketchLinePuzzleIcon from "../images/sketchLinePuzzleIcon.png"
import vesmirnaMatematikaIcon from "../images/vesmirnaMatematikaIcon.png"
import ninjaWallrunIcon from "../images/ninjaWallrun.png"
import tinyStreetSkaterIcon from "../images/tinyStreetSkaterIcon.png"

const nasehry = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Our games</title>
        <meta name="description" content="All games developed by GameBase in one place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="main-div-pages">
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Our games</h1>
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

                  <div className='game-seven'>
                    <div className='game-icon'>
                      <a href="/tiltfishtycoon" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={tiltFishTycoonIcon}
                          alt="Tilt Fish Tycoon icon"
                        />
                        <p className='game-title'>Tilt Fish Tycoon</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-eight'>
                    <div className='game-icon'>
                      <a href="/planetsdodge" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={planetsDodgeIcon}
                          alt="Planets Dodge icon"
                        />
                        <p className='game-title'>Planets Dodge</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-nine'>
                    <div className='game-icon'>
                      <a href="/sketchlinepuzzle" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={sketchLinePuzzleIcon}
                          alt="Sketch Line Puzzle icon"
                        />
                        <p className='game-title'>Sketch Line Puzzle</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-ten'>
                    <div className='game-icon'>
                      <a href="/vesmirnamatematika" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={vesmirnaMatematikaIcon}
                          alt="Vesmírna Matematika icon"
                        />
                        <p className='game-title'>Vesmírna Matematika</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-eleven'>
                    <div className='game-icon'>
                      <a href="/ninjawallrun" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={ninjaWallrunIcon}
                          alt="Ninja Wallrun icon"
                        />
                        <p className='game-title'>Ninja Wallrun</p>
                      </a>
                    </div>
                  </div>

                  <div className='game-twelve'>
                    <div className='game-icon'>
                      <a href="/tinystreetskater" className='game-link' target="_blank">
                        <Image
                          className='game-icon-image'
                          src={tinyStreetSkaterIcon}
                          alt="Tiny Street Skater icon"
                        />
                        <p className='game-title'>Tiny Street Skater</p>
                      </a>
                    </div>
                  </div>
                  
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

export default nasehry
