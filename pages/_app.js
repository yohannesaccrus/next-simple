import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import '../assets/application.scss'

const MyApp = ({ Component, pageProps }) => {

	// const trackInitial = () => {
	// 	alert('initial happens')
	// 	var owa_baseUrl = "https://next-owa-track.herokuapp.com/"
	// 	document.write(unescape("<script src='" + owa_baseUrl + "modules/base/js/owa.tracker-combined-min.js' type='text/javascript'> </script>"))
	// }

	// const trackDefine = () => {
	// 	try {
	// 		OWA.setSetting('baseUrl', owa_baseUrl)
	// 		OWATracker = new OWA.tracker()
	// 		OWATracker.setSiteId('e166b5571c46006ec88eced33981d80d')
	// 		OWATracker.trackPageView()
	// 		OWATracker.trackClicks()
	// 		OWATracker.trackDomStream()

	// 		alert('Define success')
	// 	 } catch(err) {}
	// }

	return (
		<Fragment>
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<script type="text/javascript" src="/static/owa.js"/>
				<script type="text/javascript" src="/static/try.js"/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp