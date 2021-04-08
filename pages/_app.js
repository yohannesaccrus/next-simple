import React, { Fragment } from 'react'
import '../assets/application.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp