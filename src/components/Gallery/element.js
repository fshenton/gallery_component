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

		// set up binding of class functions 
		this.changeMainImage = this.changeMainImage.bind(this);
		this.handleInputChecked = this.handleInputChecked.bind(this);
		
		// grab and store main image, then set the initial image to show
		this.mainImage = clone.querySelector("#mainImage");
		this.currMainImageIndex = 1;
		this.changeMainImage(this.currMainImageIndex);

		// set up the event handlers
		prevButton.addEventListener("click", () => { 
			this.currMainImageIndex--;
			//index 1-4
			if(this.currMainImageIndex < 1) this.currMainImageIndex = 4; 
			this.changeMainImage();
		});

		nextButton.addEventListener("click", () => { 
			this.currMainImageIndex++;
			//index 1-4
			if(this.currMainImageIndex > 4) this.currMainImageIndex = 1;
			this.changeMainImage();
		});
		
		for(let thumbnail of thumbnailButtons){
			thumbnail.addEventListener("click", this.handleInputChecked);
		}

		// inject final HTML
		shadow.appendChild(clone);

	}//constructor

	changeMainImage(){
		const num = this.currMainImageIndex;

		console.log(num);

		this.mainImage.src = `/assets/2d/${num}.png`;
	}//changeMainImage

	handleInputChecked(event){
		const { 
			checked, 
			dataset: { num } 
		} = event.target;

		if(checked){
			let thumbnailNo = parseInt(num);
			this.currMainImageIndex = thumbnailNo;
			this.changeMainImage();
		}
	}//handleInputChecked
}

export default Gallery;