import template from "./template.js";
import { locals as s } from "./styles.scss";

class Gallery extends HTMLElement {
	
	constructor(){
		super();

		console.log("Created, yay!");

		const shadow = this.attachShadow({"mode": "open"});
		const clone = document.importNode(template.content, true);
		
		this.mainImage = clone.querySelector("#mainImage");
		this.mainImage.src = "/assets/2d/1.png";

		const prevButton = clone.querySelector("#prevButton");
		const nextButton = clone.querySelector("#nextButton");
		

		prevButton.addEventListener("click", (event) => { this.changeMainImage(event, 1) });
		nextButton.addEventListener("click", (event) => { this.changeMainImage(event, 2) });

		shadow.appendChild(clone);
	}
	changeMainImage(event, num){
		console.log({event});
		console.log(event.target);
		console.log({num});

		this.mainImage.src = `/assets/2d/${num}.png`;
	}
}

export default Gallery;