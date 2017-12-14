onload = setTimeout(init, 0);

function init() {
	/* Send the request */
	req = new XMLHttpRequest();
	req.open('GET', 'http://www.ipinfo.io/json');
	req.onload = process;
	req.send();

}

function process() {
	var res = JSON.parse(req.responseText);
  document.getElementById("ip").innerHTML=res.ip;
  if(res.city!=="")
  document.getElementById("city").innerHTML=res.city;
  if(res.region!=="")
  document.getElementById("region").innerHTML=res.region;
  document.getElementById("country").innerHTML=res.country;
  document.getElementById("org").innerHTML=res.org;

}
