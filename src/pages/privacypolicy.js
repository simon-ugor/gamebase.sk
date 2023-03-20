import Head from 'next/head'
import Link from 'next/link'

const ochranasukromia = () => {
  return (
    <>
    <Head>
        <title>GAMEBASE.SK - Privacy policy</title>
        <meta name="description" content="Privacy policy and legal information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='main-div-pages'>
        <div className='pages-row-one'>
            <h1 className='pages-heading'>Privacy policy</h1>
        </div>
        <div className='pages-row-two'>
            <div></div>
            <div className='pages-text-div'>
                <p className='pages-text-underline'>Privacy policy</p>
                <p className='pages-text'>GameBase built all apps as Free apps. This SERVICE is provided by GameBase at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at all aps unless otherwise defined in this Privacy Policy.</p>
                <p className='pages-text-underline'>Information Collection and Use</p>
                <p className='pages-text'>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained on your device and is not collected by us in any way. The apps does use third-party services that may collect information used to identify you. Link to the privacy policy of third-party service providers used by the apps - <a href='https://unity.com/legal/privacy-policy' style={{"color": "white", "textDecoration": "underline"}}>Unity</a></p>
                <p className='pages-text-underline'>Log Data</p>
                <p className='pages-text'>We want to inform you that whenever you use our Service, in a case of an error in apps we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
                <p className='pages-text-underline'>Cookies</p>
                <p className='pages-text'>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, apps may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                <p className='pages-text-underline'>Service Providers</p>
                <p className='pages-text'>We may employ third-party companies and individuals due to the following reasons: To faciliate our Service; To provide the Service on our behalf; To perform Service-related services; To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                <p className='pages-text-underline'>Security</p>
                <p className='pages-text'>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                <p className='pages-text-underline'>Links to Other Sites</p>
                <p className='pages-text'>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                <p className='pages-text-underline'>Children's Privacy</p>
                <p className='pages-text'>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.</p>
                <p className='pages-text-underline'>Changes to This Privacy Policy</p>
                <p className='pages-text'>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 2023-01-01</p>
                <p className='pages-text-underline'>Contact Us</p>
                <p className='pages-text'>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at gamebaseslovakia@gmail.com.</p>
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

export default ochranasukromia
