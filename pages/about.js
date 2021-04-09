import { useEffect } from 'react'
import ReactGa from 'react-ga'
import { usePlausible } from 'next-plausible'
import Link from 'next/link'

const About = () => {
	//REACT GA
	// useEffect(() => {
	// 	ReactGa.initialize('UA-193204821-1')
	// 	ReactGa.pageview(window.location.pathname)
	// }, [])

	// const submitOTP = () => {
	// 	ReactGa.event({
	// 		category: 'OTP Payment',
	// 		action: 'Submit OTP'
	// 	})
	// }

	// const registration = () => {
	// 	ReactGa.event({
	// 		category: 'Card Registration',
	// 		action: 'Send Registration'
	// 	})
	// }

	//PLAUSIBLE IO
	// const plausible = usePlausible()
	// const submitOTP = () => {
	// 	plausible('Payment OTP', { props: { method: 'Method A' } })
	// }

	// const registration = () => {
	// 	plausible('Payment OTP', { props: { method: 'Method B' } })
	// }

	const track = () => {
		alert('track about work')
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
		<div className={'frame'}>
			<div className={'box'}>
			<nav>
				<Link href={'/'}>
					<p>Home</p>
				</Link>
				<Link href={'/about'}>
					<p>About</p>
				</Link>
			</nav>
			<h1>About Page</h1>
			<div className={'action'}>
				{/* <button type={'button'} onClick={() => submitOTP()}>Submit OTPX</button>
				<button type={'button'} onClick={() => registration()}>User Registration</button> */}
				<button type={'button'}>Submit OTPX</button>
				<button type={'button'}>User Registration</button>
			</div>
			</div>
		</div>
	)
}

export default About