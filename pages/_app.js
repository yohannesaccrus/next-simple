import React, { Fragment, useEffect } from 'react'
import '../assets/application.scss'

const MyApp = ({ Component, pageProps }) => {

	const track = () => {
		alert('track HOC work')
		var owa_baseUrl = 'https://next-owa-track.herokuapp.com/'
		var owa_cmds = owa_cmds || []
		owa_cmds.push(['setSiteId', 'e166b5571c46006ec88eced33981d80d'])
		owa_cmds.push(['trackPageView'])
		owa_cmds.push(['trackClicks']);

		var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true
		owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl)
		_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js'
		var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s)
	}

	useEffect(() => {
		track()
	}, [])

	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp