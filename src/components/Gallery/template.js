import styles, { locals as s } from "./styles.scss";
import reset from "SRC/reset.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${reset.toString()}
		${styles.toString()}
	</style>
	<aside>
		<form class="${s.galleryForm}">
			<output class="${s.outputWrapper}" for="prevButton nextButton thumbnail1 thumbnail2 thumbnail3 thumbnail4">
				<img id="mainImage" class="${s.outputImage}"/>
			</output>
			<button id="prevButton" class="${s.navButton} ${s.prevButton}"></button>
			<button id="nextButton" class="${s.navButton} ${s.nextButton}"></button>
			<fieldset>
				<div class="${s.thumbnails}">
					<input id="thumbnail1" class="${s.thumbnail}" name="thumbnail" data-num="1" type="radio"/>
					<input id="thumbnail2" class="${s.thumbnail}" name="thumbnail" data-num="2" type="radio"/>
					<input id="thumbnail3" class="${s.thumbnail}" name="thumbnail" data-num="3" type="radio"/>
					<input id="thumbnail4" class="${s.thumbnail}" name="thumbnail" data-num="4" type="radio"/>
				</div>
			</fieldset>
		</form>
	</aside>
`;
	
export default template;
