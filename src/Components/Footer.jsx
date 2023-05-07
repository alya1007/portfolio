import React from "react";
import "../styles/FooterSection.css";

function Footer() {
	return (
		<section className="footer-section">
			<div className="footer-section__content">
				<h5 className="footer-section__rights">© 2023 All rights reserved.</h5>
				<div className="footer-section__links">
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
					<a href="#">Legal</a>
				</div>
			</div>
		</section>
	);
}

export default Footer;
