import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
	let [a, handleShow] = useState("");
	//   as abhi toh a ki value "true" hai.

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				handleShow(true);
			} else {
				handleShow(false);
			}
			return () => {
				window.removeEventListener("scroll");
			};
		});
	}, []);
	return (
		<div className={`navbar ${a && "nav_black"}`}>
			<img
				src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41"
				alt="netflix-logo"
				className="navbar_logo"
			/>
			<img
				src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				alt="icon"
				className="navbar_hamicon"
			/>
			{/* <Avatar src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" /> */}
		</div>
	);
}

export default Navbar;
