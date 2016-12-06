console.log("Hi!")

//get the data with a button


	//add event listener to a button
document.getElementById("getUser").addEventListener("click", getUser);
	

	//function
	var user;
function getUser() {
	//create a request
	var userRequest = new XMLHttpRequest();
	userRequest.addEventListener("load", saveUser);
	userRequest.open("GET", "https://randomuser.me/api/");
	userRequest.send();
}


function saveUser(e) {
		user = JSON.parse(e.target.responseText);
		console.log(user)
	}

	//create a request
	// var userRequest = new XMLHttpRequest();
	// userRequest.addEventListener("load", saveUser);
	// userRequest.open("GET", "https://randomuser.me/api/");
	// userRequest.send();

//display the data with a button
document.getElementById("displayUser").addEventListener("click", displayUser)

function displayUser() {
	if (!user) {
		alert("Generate User First, prick!")
	} else {
	var stuffToDisplay = `<h3>${user.results[0].name.first} ${user.results[0].name.last}</h3>
		<img src="${user.results[0].picture.large}">
		<h3>${user.results[0].phone}</h3>`
	document.getElementById("user").innerHTML = stuffToDisplay;
	}
}
