import Gallery from "./components/Gallery/";
import reset from "./reset.scss";


addStylesToPage(reset);
registerComponents();


function addStylesToPage(styles){
	const styleEl = document.createElement("style");
	styleEl.innerHTML = styles.toString();

	document.head.appendChild(styleEl);
}//addStyleToPage

function registerComponents(){
	
	window.customElements.define("web-gallery", Gallery);
}//registerComponents