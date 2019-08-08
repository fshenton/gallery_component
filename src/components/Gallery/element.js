import template from "./template.js";
import { locals as s } from "./styles.scss";

class Gallery extends HTMLElement {
	constructor(){
		super();

		console.log("Created, yay!");

		const clone = document.importNode(template.content, true);
		const shadow = this.attachShadow({"mode": "open"});

		shadow.appendChild(clone);
	}
}

export default Gallery;