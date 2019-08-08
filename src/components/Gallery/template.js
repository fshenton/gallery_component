import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}}
	</style>
	<div>
		<figure class="${s.mainFig}">
			<img id="mainImage" class="${s.mainImage}"/>
			<figcaption class="${s.caption}"></figcaption>
			<button id="prevButton" class="${s.prevButton} ${s.navButton}"></button>
			<button id="nextButton" class="${s.nextButton} ${s.navButton}"></button>
		</figure>
		<div>
			<input data-num="1" type="radio" class="${s.thumbnail}"/>
			<input data-num="2" type="radio" class="${s.thumbnail}"/>
			<input data-num="3" type="radio" class="${s.thumbnail}"/>
			<input data-num="4" type="radio" class="${s.thumbnail}"/>
		</div>
	</div>
`;

export default template;
