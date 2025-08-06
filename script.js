//your JS code here. If required.
const btn = document.getElementById("enterBtn");
btn.addEventListener("click",()=>{
	const ele = document.getElementById("status");
	const h1Tag = document.createElement('h1');
	h1Tag.textContent = "Entered Metaverse";
	ele.appendChild(h1Tag);
})
