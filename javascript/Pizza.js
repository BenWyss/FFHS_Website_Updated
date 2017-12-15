window.onload = function() {
	
	var request = new XMLHttpRequest();
	request.open("GET","https://tonyspizzafactory.herokuapp.com/api/pizzas", false);
	request.setRequestHeader("Authorization","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
	request.send();
	
	var parsedData = JSON.parse(request.responseText);
	
	for(var i = 0; i < parsedData.length; i++) {
		document.getElementsByClassName("Title")[i].innerHTML = parsedData[i].name;
		document.getElementsByClassName("Price")[i].innerHTML = parsedData[i].prize;
		document.getElementsByClassName("Image")[i].style.backgroundImage = "url("+parsedData[i].imageUrl+")";
		document.getElementsByClassName("Description")[i].innerHTML = parsedData[i].ingredients.toString();
	}
}