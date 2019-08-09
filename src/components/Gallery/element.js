import template from "./template.js";

class Gallery extends HTMLElement {
	
	constructor(){
		super();

		// create the shadow DOM and import the template as clone
		const shadow = this.attachShadow({"mode": "open"});
		const clone = document.importNode(template.content, true);

		// grab all interactive elements from clone
		const prevButton = clone.querySelector("#prevButton");
		const nextButton = clone.querySelector("#nextButton");
		const thumbnailButtons = clone.querySelectorAll("input");

		console.log(thumbnailButtons);

		// set up binding of class functions 
		this.setInitialMainImage = this.setInitialMainImage.bind(this);
		this.prevMainImageIndex = this.setCurrMainImageIndex.bind(this, "prev");
		this.nextMainImageIndex = this.setCurrMainImageIndex.bind(this, "next");
		this.changeMainImage = this.changeMainImage.bind(this);
		this.handleInputChecked = this.handleInputChecked.bind(this);
		
		// grab and store main image, then set the initial image to show
		this.mainImage = clone.querySelector("#mainImage");
		this.currMainImageIndex = 1;

		// add event listeners
		prevButton.addEventListener("click", this.prevMainImageIndex);
		nextButton.addEventListener("click", this.nextMainImageIndex);
		
		for(let thumbnail of thumbnailButtons){
			thumbnail.addEventListener("click", this.handleInputChecked);
		}

		// inject final HTML
		shadow.appendChild(clone);

		//add listener to first slot, once it has an image child it triggers the slotchange event
		this.slots = this.shadowRoot.querySelectorAll("slot");
		this.slots[0].addEventListener("slotchange", this.setInitialMainImage);
	}//constructor
			
	setInitialMainImage(event){
		const initialSrc = event.target.assignedNodes()[0].src;

		this.changeMainImage(initialSrc);
	}//setInitialMainImage

	setCurrMainImageIndex(direction, event){
		event.preventDefault();

		let index = 0;
		if(direction === "prev"){
			index = this.currMainImageIndex - 1;
		}
		else if(direction === "next"){
			index = this.currMainImageIndex + 1;
		}

		if(index > 4){
			index = 1; //wrap to 1
		}
		else if(index < 1){
			index = 4; //wrap to 4
		}
		this.currMainImageIndex = index;

		const newImageSrc = this.slots[index-1].assignedNodes()[0].src;

		this.changeMainImage(newImageSrc);
	}//setCurrMainImageIndex

	changeMainImage(src){
		this.mainImage.src = src;
	}//changeMainImage

	handleInputChecked(event){
		const { 
			checked, 
			dataset: { num },
		} = event.target;

		this.currMainImageIndex = parseInt(num); //avoids concatenation bug 
		
		const newImageSrc = this.slots[num-1].assignedNodes()[0].src;

		if(checked){
			this.changeMainImage(newImageSrc);
		}
	}//handleInputChecked
}

export default Gallery;