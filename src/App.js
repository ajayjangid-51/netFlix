import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banneri from "./Banner";
import Navbar from "./Navbar";
// import Reactplayer from "./Reactplayer";
// import Reactyoutube from "./Reactyoutube";
function App() {
	return (
		<div className="app">
			{/* hellooow we are gonna to go build a NetFlix-clone , alright let's go
      brother */}
			{/* navbar */}
			{/* banner */}
			<Navbar />
			<Banneri />
			{/* <Reactyoutube /> */}
			{/* <Reactplayer /> */}
			<Row
				title="NETFLIX ORIGINALS"
				fetchurl={requests.fetchNetflixOriginals}
				largerow={true}
				// or
				// largerow
				// bcoz dono ka ek hi mtlb hota hai mtlb samjha jata hai.
			/>
			<Row title="Trending Now" fetchurl={requests.fetchTrending} />
			<Row title="Top rated" fetchurl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
			{/* <Row title="Romance Movies" fetchurl={requests.RomanceMovies} /> */}
			<Row title="Documentaries" fetchurl={requests.Documentaries} />
		</div>
	);
}

export default App;
