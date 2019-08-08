import styles, { locals as s } from "./styles.scss";
import reset from "SRC/reset.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${reset.toString()}
		${styles.toString()}
	</style>
	<div>
		<figure class="${s.mainFig}">
			<img id="mainImage" class="${s.mainImage}"/>
		</figure>
		<button id="prevButton" class="${s.navButton} ${s.prevButton}"></button>
		<button id="nextButton" class="${s.navButton} ${s.nextButton}"></button>
		<div class="${s.thumbnails}">
			<input data-num="1" type="radio" class="${s.thumbnail}"/>
			<input data-num="2" type="radio" class="${s.thumbnail}"/>
			<input data-num="3" type="radio" class="${s.thumbnail}"/>
			<input data-num="4" type="radio" class="${s.thumbnail}"/>
		</div>
	</div>
`;

export default template;
