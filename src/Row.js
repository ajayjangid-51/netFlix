import React, { useState, useEffect } from "react";
import "./Row.css";
import axi from "./axios";
import YouTube from "react-youtube";
import movieTraileri from "movie-trailer";

function Row({ title, fetchurl, largerow }) {
	let [movies, setmovies] = useState([]);

	// useEffect()-fn , as apne component k just lode hone pr yeh function apne-app run ho jata hai. thus toh apne component k load hone pr apnko koi kaam krvana then toh apn simply ess useEffect()-fn ka use krteh hai.
	useEffect(() => {
		// },[])
		// as yaha second argument meh [] ka mtlb hai ki apnko yeh function ek baar hi krvana hai jab yeh component load hoyeh toh , mtlb phir vapis se run nhi krvana . mtlb ek baar orr phir vapis se yeh component load hota hai. then toh as
		// and agr apnne yaha [movies] likha toh mtlb ki yeh har baar run hoga component load hone with that ki movies ki value bhi change honi chahiyeh.

		// 🌟 as apn ess tarah asynchronous-function define kr skteh hai ,
		async function fetchdatafn() {
			let requesti = await axi.get(fetchurl);
			// console.log(requesti);

			// as now toh aab apn ess requesti-ki-value ko setmovies()-fn ko de deteh hai thus toh yeh function voh use movies-variable-container meh assign kr dega . as like this:
			setmovies(requesti.data.results);

			return requesti;
		}
		// whereas apnko asynchronous-fn ka use isliy krteh hai takki bcoz jaise kuch functions hoteh hai jo kuch jada time leteh hai , thus toh mtlb voh function-run hone se actully uss function k aage wala code meh bhi thoda late se execute hota hai , thus toh esliy apn simply asynchronous-function use krteh hai takki esseh bina-faltu ki delay na ho and apna program ek dam mast fastly chale.

		// now we are calling that asynchronous-function:
		fetchdatafn();
		// },[movies])
	}, [fetchurl]);

	// console.log("")
	// console.log("i am the value for movies" + movies)
	// console.log(movies)
	// console.table(movies);
	// 🌟 Tip 🌟 as toh kabhi apnko koi Array ya Ojbect console meh print krvana hai then toh use console's table()-fn as bcoz yeh uss Array  , Object ko actually ek mastam-table meh show karega. toh mtlb yeh ek kafi acchi and mastam baat hai.

	let basiurl = "https://image.tmdb.org/t/p/original/";

	let optsis = {
		height: "480px",
		width: "90%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	//   let trailerurl = "https://www.youtube.com/watch?v=JqvobBKLHwU";
	let [trailerurl, settingtrailerurl] = useState("");

	function handleClicki(p1movie) {
		console.log(p1movie);
		if (trailerurl) {
			settingtrailerurl("");
		} else {
			//   movieTraileri().then();
			// \\.then()
			movieTraileri(
				p1movie?.name || p1movie?.title || p1movie?.original_title || ""
			)
				// movieTraileri(null, { tmdbId: p1movie.name })
				.then((url) => {
					//   AS YEH movieTrailer-fn inputed movie-name ka trailer-return krta hai.
					//   https://www.youtube.com/watch?v=XtMThy8QKqU&t=868s as ess youtube-vedio-url meh yeh vedio-url meh yeh this is vedioID =  "XtMThy8QKqU&t".
					//   thus toh now aab apn vedio-url meh vedioId nikalenge. thus toh eske liy apn apna URL-class ka use krenge as like this:

					//   let urlvedioId = new URL(url);
					//   let urlvediois = urlvedioId.search;
					//   as yeh kaam apn directly bhi kr skteh hai as like this:

					//   let directVedioId = new URL(url).search;

					//   as mtlb bcoz yeh URL(url) apni return-value ko hi hamesa point krta hai , as functions , variables , objects , classes bas apnko yeh baat dhyan meh rkhni hoti hai ki functions hamesa apni return-value ko denote kr rhe hoteh hai and varialbes hamesa apni assigned value ko denote kr rhe hoteh hai, as thus toh ess baat ko dhyn meh rkhne se apna sara kaam easily and shortly ho jata hai.

					//   as now apn URLsearchParams
					//   as bcoz esske function se apn search meh particular cheezo ki valuee le skteh hai.

					let urlkeyvalue = new URLSearchParams(new URL(url).search);
					let valueofv_inurl = urlkeyvalue.get("v");
					console.log("the value of inurl iss ---------");
					console.log(valueofv_inurl);
					settingtrailerurl(valueofv_inurl);
					//   or as directly apn esseh bhi kr skteh ahi.
					//   as bcoz yaha yeh variable valueofv_inurl actual meh eski value ko hi represent kr raha hai, toh apn directly uski representing value ko likhde toh mastam baat hogi na. toh hamesa aab apnko esseh hi krna hai mtlb bina faltu meh apnko variables-nhi banane hai.
					// settingtrailerurl(urlkeyvalue.get("v"));
				})
				.catch((error) => console.log("err in movie-trailer react"));
			//   movieTraileri().then()
		}
	}

	return (
		<div className="row">
			<h2>{title} </h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClicki(movie)}
						// as agr apnko react meh with-input function ko lena hoga then uss function ko apn ess tarah hi call krteh hai.
						// onClick={handleClick(movie)}
						// as ess tarah function ko likhe se apne dono kaam hoteh hai , ek to function ko define krna and second-one is ki function ko call krna bhi. mtlb function apne aap call bhi ho jata hai.
						className={`imgi  ${largerow && "largirow"}`}
						// className={"imgi  {largerow && largirow"}
						src={`${basiurl}${
							largerow ? movie.poster_path : movie.backdrop_path
						}`}
						// src={`${basiurl}${movie.backdrop_path}`}
						// as ess tarah ${} meh apn variable use krteh hai as but apn ess tarah variable use krne k saat ess ${} meh ES7-ki conditional-features bhi laga skteh hai.
						// src={if(largerow)(
						//     movie.poster_path )
						//     else(
						//         movie.
						//     )
						//    }
						// yaha ( largerow ? work1 : work2 ) means ki if largerow then do this :(otherwise) do this.
						// as yeh ES7 ka feature hai jaha apn ess tarah shortly-conditional-statement likh skteh hai.
						alt={movie.name}
					/>
					// <h1>awesome this is awesome</h1>)
				))}
				{/* as yeh upar yeh map()-fn array k har element ko one by one access krta hai. and ess function ka input ek function hi hota hai . */}
			</div>
			{trailerurl && (
				<YouTube className="youtubi" videoId={trailerurl} opts={optsis} />
			)}
		</div>
	);
}

export default Row;
