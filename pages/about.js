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