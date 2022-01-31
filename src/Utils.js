function CreateElement(type, attributes, path) {
    const parent = document.querySelector(path);
	const el = document.createElement(type);
	for(var attribute in attributes) {
    	el.setAttribute(attribute, attributes[attribute]);
	}
	parent.appendChild(el);
	return "#" + attributes["id"];
}