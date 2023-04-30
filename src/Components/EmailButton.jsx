import React from "react";
import { BsEnvelope } from "react-icons/bs";

function EmailButton() {
	const recipientEmailAddress = "alea.konj@gmail.com";
	function handleClick() {
		const mailtoLink = `mailto:${recipientEmailAddress}`;
		window.location.href = mailtoLink;
	}
	return (
		<button className="email-bar__button" onClick={handleClick}>
			<BsEnvelope className="email-bar__icon" />
		</button>
	);
}

export default EmailButton;
