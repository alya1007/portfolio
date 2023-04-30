import React from "react";
import "../styles/Contacts.css";

function ContactLink({ link, text, sideBar }) {
	const className = sideBar
		? "contact-link contact-link__sidebar"
		: "contact-link";
	return (
		<a href={link} target="blank" className={className}>
			{text}
		</a>
	);
}

export default ContactLink;
