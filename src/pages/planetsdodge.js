import Head from 'next/head'
import { useEffect } from 'react'

Home.getInitialProps = (ctx) => {
    let isMobileView = (ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent).match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )

    let testMessage;

    let deviceInfo = ctx.req.headers['user-agent']
    // if this includes "iphone" - open AppStore
    // else if it includes "android" (or something like that) - open PlayStore
    // else it must be a computer - do something else
    
    if (deviceInfo.includes("Mac")) {
      testMessage = "ios"
    } else {
      testMessage = "android"
    }
    

    return {
        deviceInfo: deviceInfo,
        testMessage: testMessage
    }
  }

export default function Home({deviceInfo, testMessage}) {

  useEffect(() => {
    if(testMessage == "ios"){
      window.location.assign("https://apps.apple.com/app/planets-dodge/id1616264143")
    } else {
      window.location.assign("https://play.google.com/store/apps/details?id=com.coldendev.planetsdodge")
    }
    
  })

  return (
    <div>
      <Head>
        <title>GAMEBASE.SK - Planets Dodge</title>
        <meta name="description" content="GAMEBASE.SK - Planets Dodge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}