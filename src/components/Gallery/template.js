import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}}
	</style>
	<div>
		<figure>
			<img class="${s.mainImage}"/>
			<figcaption class="${s.caption}"></figcaption>
			<button class="${s.prevButton} ${s.navButton}"></button>
			<button class="${s.nextButton} ${s.navButton}"></button>
		</figure>
		<div>
			<input type="radio" class="${s.thumbnail}"/>
			<input type="radio" class="${s.thumbnail}"/>
			<input type="radio" class="${s.thumbnail}"/>
			<input type="radio" class="${s.thumbnail}"/>
		</div>
	</div
`;

export default template;
