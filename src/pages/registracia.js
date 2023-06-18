import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const registracia = () => {

    const [email, setEmail] = useState("");
    const [placeHolder, setPlaceHolder] = useState("E-mail");

    const submitClick = () => {
        if (email.includes("@") == true && email.includes(".") && email.length < 320) {
            postApi();
        } else {
            //throw an error
            setPlaceHolder("Neplatný formát");
            setEmail("");
        }
    }

    const postApi = async () => {
        const res = await fetch("https://648e5e272de8d0ea11e8adf8.mockapi.io/emails", {
            method: "POST",
            body: JSON.stringify({"email": email}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        setPlaceHolder("E-mail úspešne odoslaný");
        setEmail("");
        return data;
    }

  return (
    <>
        <Head>
            <title>GAMEBASE.SK - Registrácia</title>
            <meta name="description" content="Zaregistrus sa na novinky od herného štúdia GameBase" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='main-div-pages'>
            <div className='pages-row-one'>
                
            </div>
            <div className='pages-row-two'>
                <div></div>
                <div className='pages-text-div'>
                    <p className='pages-text'>Zadaj svoj e-mail</p>
                    <input placeholder={placeHolder} className='email-input' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                    <br />
                    <button className='submit-email-button' onClick={submitClick}>Odoslať</button>
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

export default registracia
