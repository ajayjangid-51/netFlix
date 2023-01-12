import React from "react";
// first install the react-player
// takki apne pass voh sari files mtlb sare-functions aajayeh jo ki yeh kaam krti hai.
import Reactplayeri from "react-player";

function Reactplayer() {
  return (
    <div className="reactplayer">
      {/* i am reactplayer */}
      <Reactplayeri url="https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&index=1" />
    </div>
  );
}

export default Reactplayer;

// Note-point: 🔥🔥 AS toh apn ess tarah aur bhi bohat sare npm-packages ko explore kr skteh hai and apni website pe apply kr skteh hai.takki apni website ekdam mastam dekhe aur bane.
// for more packages visit this: https://www.npmjs.com/package/react-player
