import React, { useState, useEffect } from "react";
import "./Banner.css";
import axi from "./axios";
import requesti from "./request";

function Banner() {
  let [movie, setmoviefn] = useState([]);

  useEffect(() => {
    async function fetchtingdatafn() {
      let ourrequestresult = await axi.get(requesti.fetchNetflixOriginals);
      console.log(ourrequestresult);
      console.log(
        ourrequestresult.data.results[
          Math.floor(Math.random() * ourrequestresult.data.results.length - 1)
        ]
        // as esseh krne se apnko ess results-arry meh se koi randomly ek element choose krli hai.
      );

      setmoviefn(
        ourrequestresult.data.results[
          Math.floor(Math.random() * ourrequestresult.data.results.length - 1)
        ]
      );
      //   as now toh yeh setmoviefn()-fn apni andar inputed value ko movie meh set kr dega.
      //   as toh now aab apne movie-named variable-Container-Array meh bohat sari values stored hai.
      return ourrequestresult;
    }

    fetchtingdatafn();
  }, []);
  //   }, [movie]);
  //   }, []); as apnne yaha empty-square-bracket specify kiya hai thus toh mtlb yeh function ek hi baar run hoga.
  //   and yaha as apnne [movie] specify kiya toh mtlb jab jab movie-variable-container ki value change hogi tab-tab yeh function run hoga ess Component k load hone pr.

  let turncatefn = (p1str, p2_n) => {
    return p1str?.length > p2_n ? p1str.substr(0, p2_n - 1) + "..." : p1str;
    // mtlb "?"-question-mark k left wali cheez condition hoti hai and and right-wali cheez as a workbox hoti hai and ":"(colon) k right-wali cheeze else condition wali hoti hai. as yeh sab features ES7 and ES8 k features hai thus toh mtlb ES7 and ES8 ekdam mastam cheez hai.
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* as apn "react" meh ess tarah inline-css-styling krteh hai. */}
      <div className="banner__content">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        {/* yaha movie? meh "?(question-mark)" ka mtlb hai ki agr yeh hai toh . otherwise koi jarurat nhi hai. as agr apn yeh "?"-questionmark use nhi krteh hai toh phir apnko phir voh pura-if-else-conditional-statement likhna hota hai jo ki phir kafi bada ho jata hai. as like this: */}
        <div className="banner__content_buttons">
          <button className="btns">Play</button>
          <button className="btns">My List</button>
          {/* button.abc{super}.*3 */}
          {/* as esseh apn directly value bhi daal skteh hai as by simply using curly-bracket{} for writing the value of the element */}
        </div>
        {/* as yeh apn short-handly esseh bhi kr skteh hai: */}
        {/* div.banner_content>div.btns>button.bti*2 */}
        {/* as simply mtlb apnko ">" yeh use krna hai element k andar element banane k liyeh. */}

        {/* <h3>i am the description and {movie?.gudu} </h3> */}
        <h4> {turncatefn(movie?.overview, 200)} </h4>
      </div>
      {/* hello m banner.js title buttons-2 description */}
      <div className="banner__fading"></div>
    </header>
  );
}

export default Banner;
