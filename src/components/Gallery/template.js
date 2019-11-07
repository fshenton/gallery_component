import styles, { locals as s } from "./styles.scss";
// import reset from "SRC/shared/reset.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<aside>
		<form class="${s.galleryForm}">
			<output class="${s.outputWrapper}" for="prevButton nextButton thumbnail1 thumbnail2 thumbnail3 thumbnail4">
				<img id="mainImage" class="${s.outputImage}"/>
			</output>
			<button id="prevButton" class="${s.navButton} ${s.prevButton}">
				<svg class="${s.prevSVG} ${s.svg}" viewBox="0 0 129 129">
					<path d="M34.6,67.4c-1.6-1.6-1.6-4.2,0-5.8L88.5,7.7c1.6-1.6,4.2-1.6,5.8,0s1.6,4.2,0,5.8l-51,51l51,51c1.6,1.6,1.6,4.2,0,5.8
					c-0.8,0.8-1.8,1.2-2.9,1.2c-1.1,0-2.1-0.4-2.9-1.2L34.6,67.4z"/>
				</svg>
			</button>
			<button id="nextButton" class="${s.navButton} ${s.nextButton}">
				<svg class="${s.nextSVG} ${s.svg}" viewBox="0 0 129 129">
					<path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 
					1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
				</svg>
			</button>
			<fieldset>
				<div class="${s.thumbnails}">
					<input id="thumbnail1" class="${s.thumbnailInput}" name="thumbnail" data-num="1" type="radio"/>
					<label id="thumbnail1Label" for="thumbnail1" class="${s.thumbnailLabel}">
						<slot name="first"></slot>
					</label>
					<input id="thumbnail2" class="${s.thumbnailInput}" name="thumbnail" data-num="2" type="radio"/>
					<label id="thumbnail2Label" for="thumbnail2" class="${s.thumbnailLabel}">
						<slot name="second"></slot>
					</label>
					<input id="thumbnail3" class="${s.thumbnailInput}" name="thumbnail" data-num="3" type="radio"/>
					<label id="thumbnail3Label" for="thumbnail3" class="${s.thumbnailLabel}">
						<slot name="third"></slot>
					</label>
					<input id="thumbnail4" class="${s.thumbnailInput}" name="thumbnail" data-num="4" type="radio"/>
					<label id="thumbnail4Label" for="thumbnail4" class="${s.thumbnailLabel}">
						<slot name="fourth"></slot>
					</label>
				</div>
			</fieldset>
		</form>
	</aside>
`;

export default template;
