const tmdbapi_key = "e67cc5cbf143d84c0177440abac2ffd5";

let requests = {
	fetchTrending: `/trending/all/week?api_key=${tmdbapi_key}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${tmdbapi_key}&with_network=213`,
	fetchTopRated: `/movie/top_rated?api_key=${tmdbapi_key}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${tmdbapi_key}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${tmdbapi_key}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${tmdbapi_key}&with_genres=27`,
	RomanceMovies: `/discover/movie?api_key=${tmdbapi_key}&with_genres=1049`,
	Documentaries: `/discover/movie?api_key=${tmdbapi_key}&with_genres=99`,
};

export default requests;

/* Note-point: 🎆
1. as apn ess export default function , component etc ko kisi bhi naam se kisi bhi file meh import kr skteh hai, as but 
2. but ek file meh sirf ek hi export-default function or component ... hi hona chahiyeh. */
