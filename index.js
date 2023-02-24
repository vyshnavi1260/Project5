function visible()
{
	document.getElementById("con").removeAttribute("style");
}
function hide()
{
	document.getElementById("con").setAttribute("style", "display:none");
}
function colo()
{
	var col=["vasavi.png","cyber.png","oriana.jpg","sattva.jpg","suma.jpg","ramky.jpg","ira.jpg","dinesh.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo()},1000);
}
function imgK(pic,heading,discription)
{
	document.getElementById("bigscreen").removeAttribute("style");
	document.getElementById("imghead").innerHTML=heading;
	document.getElementById("imgpara").innerHTML=discription;
	bigscreen.style.display="flex";
	fullimg.src=pic;
}
function imgV()
{
	document.getElementById("bigscreen").setAttribute("style", "display:none");
	//console.log("calling");
}