import React from 'react'

const privacyPolicy = () => {
    return (

        <div className='main-div-pages'>
            <div className='pages-row-one'>
                <h1 className='pages-heading'>Privacy Policy</h1>
            </div>
            <div className='pages-row-two'>
                <div></div>
                <div className='pages-text-div'>
                    <p className='pages-text'>Emoji Reactions ("the app") is provided to help merchants collect customer sentiment through emoji reactions on product pages. This privacy policy describes how information is collected, used, and stored when merchants install and use the app.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Information the App Collects</h2>
                    <p className='pages-text'>The app collects and stores the following information:</p>
                    <ul className='pages-text' style={{ marginTop: '0.5rem', marginBottom: '1rem', listStylePosition: 'inside', display: 'inline-block', textAlign: 'left' }}>
                        <li>Shopify session data required for authentication, including shop domain and user identifiers</li>
                        <li>Emoji reactions submitted by customers, including selected emoji, session identifier, and timestamp</li>
                        <li>App configuration data associated with each shop, such as feature settings and preferences</li>
                    </ul>
                    <p className='pages-text'>The app does not collect customer names, email addresses, payment information, or other personally identifiable customer data.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>How the Information Is Used</h2>
                    <p className='pages-text'>Collected information is used solely to:</p>
                    <ul className='pages-text' style={{ marginTop: '0.5rem', marginBottom: '1rem', listStylePosition: 'inside', display: 'inline-block', textAlign: 'left' }}>
                        <li>Authenticate merchants and maintain secure app sessions</li>
                        <li>Display emoji reactions on product pages</li>
                        <li>Provide merchants with analytics and insights related to customer sentiment</li>
                        <li>Store and apply shop-specific configuration settings</li>
                    </ul>
                    <p className='pages-text'>The app does not use collected data for advertising or marketing purposes.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Data Storage and Security</h2>
                    <p className='pages-text'>All data is securely stored in a managed database. Reasonable technical and organizational measures are used to protect information against unauthorized access, loss, or misuse.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Data Sharing</h2>
                    <p className='pages-text'>The app does not sell, rent, or share collected data with third parties, except as required to operate the app or comply with legal obligations.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Data Retention and Deletion</h2>
                    <p className='pages-text'>Data is retained only for as long as the merchant uses the app.</p>
                    <p className='pages-text' style={{ marginTop: '0.5rem' }}>When a merchant uninstalls the app or requests data deletion, all associated shop data and stored information are deleted in accordance with Shopify's data protection requirements.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Merchant Responsibilities</h2>
                    <p className='pages-text'>Merchants are responsible for informing their customers about the use of emoji reactions on their storefronts and how customer sentiment data is collected.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Changes to This Policy</h2>
                    <p className='pages-text'>This privacy policy may be updated to reflect changes in the app or legal requirements. Any updates will be posted within the app listing.</p>

                    <h2 className='pages-heading' style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '2.25rem', fontWeight: '600', color: 'white' }}>Contact</h2>
                    <p className='pages-text'>If you have questions about this privacy policy or data handling practices, please contact us via email at gamebaseslovakia@gmail.com</p>

                </div>
                <div></div>
            </div>
        </div>

    )
}

export default privacyPolicy