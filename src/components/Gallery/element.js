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
		this.prevMainImageIndex = this.setCurrMainImageIndex.bind(this, -1);
		this.nextMainImageIndex = this.setCurrMainImageIndex.bind(this, 1);
		this.changeMainImage = this.changeMainImage.bind(this);
		this.handleInputChecked = this.handleInputChecked.bind(this);
		
		// grab and store main image, then set the initial image to show
		this.mainImage = clone.querySelector("#mainImage");
		this.currMainImageIndex = 1;
		this.changeMainImage(this.currMainImageIndex);

		// add event listeners
		prevButton.addEventListener("click", this.prevMainImageIndex);
		nextButton.addEventListener("click", this.nextMainImageIndex);
		
		for(let thumbnail of thumbnailButtons){
			thumbnail.addEventListener("click", this.handleInputChecked);
		}

		// inject final HTML
		shadow.appendChild(clone);

	}//constructor

	setCurrMainImageIndex(directionNum, event){
		event.preventDefault();

		//use the directionNum (either -1 or 1) to decrease/increase the index
		let index = this.currMainImageIndex + directionNum;
		if(index > 4){
			index = 1; //wrap to 1
		}
		else if(index < 1){
			index = 4; //wrap to 4
		}
		this.currMainImageIndex = index;

		this.changeMainImage();
	}//setCurrMainImageIndex

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