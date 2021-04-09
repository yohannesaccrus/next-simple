import { useEffect, useState } from 'react'
import Geocode from 'react-geocode'
import ReactGa from 'react-ga'
// import { MapContainer, TileLayer } from 'react-leaflet'
// import osm from '../constant/osm'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {

	//REACT GA
	// useEffect(() => {
	// 	ReactGa.initialize('UA-193204821-1')
	// 	ReactGa.pageview(window.location.pathname)
	// }, [])

	//GOOGLE DIRECT HIT API
	// const [coordinate, setCoordinate] = useState({
	// 	latitude: '',
	// 	longitude: ''
	// })
	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		setCoordinate({
	// 			latitude: position.coords.latitude,
	// 			longitude: position.coords.longitude
	// 		})
	// 	})

	// 	const API_KEY = 'AIzaSyC-SvBhs_p2gYkMe7Tfdj3WkgrpSTfFW8c'
	// 	let url       = `https://maps.googleapis.com/maps/api/geocode/json?latlng=-7.918159,112.64771069999999&key=${API_KEY}`
	// 	fetch(url)
	// 		.then(response => {
	// 			console.log(response)
	// 		})

	// }, [])

	//GOOGLE GEOCODE
	// const [coordinate, setCoordinate] = useState({
	// 	latitude: '',
	// 	longitude: ''
	// })

	// useEffect(() => {
	// 	Geocode.setApiKey('AIzaSyC-SvBhs_p2gYkMe7Tfdj3WkgrpSTfFW8c')
	// 	Geocode.setLocationType('ROOFTOP')
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		setCoordinate({
	// 			latitude: position.coords.latitude,
	// 			longitude: position.coords.longitude
	// 		})
	// 	})

	// 	Geocode.fromLatLng("48.8583701", "2.2922926").then(
	// 		(response) => {
	// 		  const address = response.results[0].formatted_address;
	// 		  console.log(address);
	// 		},
	// 		(error) => {
	// 		  console.error(error);
	// 		}
	// 	  );
	// }, [])

	//GEOLOCATION DB
	// const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 })
	// const position = [13.084622, 80.248357]
	// const [location, setLocation] = useState({
	// 	country: '',
	// 	state: '',
	// 	city: ''
	// })

	

	// useEffect(() => {
		// const API_KEY = 'f746f3f0-9393-11eb-bbed-1d442d4cd8d7'
		// let URL = `https://geolocation-db.com/json/${API_KEY}`

		// axios({
		// 	method: 'get',
		// 	url: URL
		// }).then(response => {
		// 	console.log(response)
		// 	setLocation({
		// 		country: response.data.country_name,
		// 		state: response.data.state,
		// 		city: response.data.city,
		// 	})
		// })
		// track()
	// }, [])

	return (
		<div className={'frame'}>
			{/* <Head> */}
			{/* <title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" /> */}
			{/* <script async defer data-domain="tugasaccrus.com" src="https://plausible.io/js/plausible.js"></script> */}
			{/* </Head> */}
			<div className={'box'}>
				<nav>
					<Link href={'/'}>
						<p>Home</p>
					</Link>
					<Link href={'/about'}>
						<p>About</p>
					</Link>
				</nav>
				<div className={'map'}>
					{/* <MapContainer 
						center={position}
						zoom={9}
					>
						<TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
					</MapContainer> */}
				</div>
				<h1>Your Location Detected : <span>{location.country}, {location.state}, {location.city}</span></h1>
			</div>
		</div>
	)
}

export default Home
