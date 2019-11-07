import Gallery from "./components/Gallery/";
import reset from "./shared/reset.scss";

addStylesToPage(reset);
registerComponents();


function addStylesToPage(style){
	const styleEl = document.createElement("style");
	styleEl.innerHTML = style.toString();

	document.head.appendChild(styleEl);
}//addStyleToPage

function registerComponents(){
	
	window.customElements.define("web-gallery", Gallery);
}//registerComponents