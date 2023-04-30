import React from "react";
import "../styles/Contacts.css";
import ContactLink from "./ContactLink";
import EmailButton from "./EmailButton";

function Contacts() {
	const contactLinks = [
		{
			link: "https://www.linkedin.com/in/alexandra-konjevic-34a4b6241/",
			text: "LinkedIn",
			sideBar: true,
		},
		{
			link: "https://github.com/alya1007",
			text: "GitHub",
			sideBar: false,
		},
	];
	return (
		<div>
			<div className="container">
				<div className="email-bar">
					<EmailButton />
					<h3 className="email-bar__text">Get in touch</h3>
				</div>
				<div className="contact-links">
					<ContactLink
						link={contactLinks[0].link}
						text={contactLinks[0].text}
						sideBar={contactLinks[0].sideBar}
					/>
					<ContactLink
						link={contactLinks[1].link}
						text={contactLinks[1].text}
						sideBar={contactLinks[1].sideBar}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
