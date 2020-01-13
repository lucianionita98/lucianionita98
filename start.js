var changeColor = setInterval(
	function(){
		document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	}, 800);

	var marq = document.createElement("p");
	marq.innerHTML = "Let's play a game";
	marq.id = "rainbow";
	marq.style.fontSize = "30px";
	marq.style.fontWeight = "900";
	// marq.style.backgroundImage = "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)";
	// marq.style.color = "transparent";
	document.body.appendChild(marq);


	var form = document.createElement("form");
	form.style.position = "absolute";
	form.style.zIndex = "9";
	form.style.display = "flex";
	form.style.justifyContent = "center";
	form.style.flexDirection = "column";
	document.body.appendChild(form);



	//email
	var pe = document.createElement("p");
	pe.innerHTML = "Email:";
	form.appendChild(pe);

	var email_field = document.createElement("input");
	email_field.type = "email";
	email_field.id = "email";
	email_field.placeholder = "example@smth.com";
	form.appendChild(email_field);


	//password
	var pp = document.createElement("p");
	pp.innerHTML = "Password:";
	form.appendChild(pp);	

	var password_field = document.createElement("input");
	password_field.type = "password";
	password_field.id = "password";
	password_field.placeholder = "Enter password";
	form.appendChild(password_field);


	//select
	var ps = document.createElement("p");
	ps.innerHTML = "I am:";
	form.appendChild(ps);

	var select_field = document.createElement("select");
	select_field.name = "This thing";
	select_field.placeholder = "Choices";
	form.appendChild(select_field);

	var option_1 = document.createElement("option");
	option_1.value = "First option";
	option_1.innerHTML = "Rookie weirdo";
	select_field.appendChild(option_1);

	var option_2 = document.createElement("option");
	option_2.value = "Second option";
	option_2.innerHTML = "Advanced weirdo";
	select_field.appendChild(option_2);	

	var option_3 = document.createElement("option");
	option_3.value = "Third option";
	option_3.innerHTML = "Grand master weirdo";
	select_field.appendChild(option_3);


	//checkbox
	var divc = document.createElement("div");
	form.appendChild(divc);

	var pc = document.createElement("p");
	pc.innerHTML = "Send me some weird stuff";
	divc.appendChild(pc);

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "checkbox";
	checkbox.value = "checkbox";
	divc.appendChild(checkbox);

	var checkboxLabel = document.createElement("label");
	checkboxLabel.for = "checkbox";
	checkboxLabel.innerHTML = "OK";
	divc.appendChild(checkboxLabel);


	//radio button
	var pr = document.createElement("p");
	pr.innerHTML = "Are you happy?";
	form.appendChild(pr);

	var divr = document.createElement("div");
	form.appendChild(divr);
	var radio1 = document.createElement("input");
	radio1.type = "radio";
	radio1.name = "radio";
	radio1.id = "radio1";
	radio1.value = "This thingy";
	divr.appendChild(radio1);

	var radioLabel1 = document.createElement("label");
	radioLabel1.for = "radio";
	radioLabel1.innerHTML = "Yes.";
	divr.appendChild(radioLabel1);

	//
	var radio2 = document.createElement("input");
	radio2.type = "radio";
	radio2.name = "radio";
	radio2.id = "radio2";
	radio2.value = "This thingy";
	divr.appendChild(radio2);

	var radioLabel2 = document.createElement("label");
	radioLabel2.for = "radio2";
	radioLabel2.innerHTML = "No.";
	divr.appendChild(radioLabel2);



	//range

	var prg = document.createElement("p");
	prg.innerHTML = "How weird are you?";
	form.appendChild(prg);

	var range = document.createElement("input");
	range.type = "range";
	range.name = "range";
	range.min = "0";
	range.max = "100";
	form.appendChild(range);


	//play button
	var br = document.createElement("br");
	form.appendChild(br);

	var play = document.createElement("button");
	play.innerHTML = "Play";
	play.id = "play";
	play.type = "button";
	form.appendChild(play);

	var br = document.createElement("br");
	form.appendChild(br);

function validatePassword()
{
	var password = document.getElementById("password");
	var numberRegEx = new RegExp("[0-9]"); //check for numbers
	var lowerCaseRegEx = new RegExp("[A-Z]");
	var upperCaseRexEx = new RegExp("[a-z]");

	var email = document.getElementById("email");
	var dotRegEx = new RegExp(".");
	var aRegEx = new RegExp("@");


	return (numberRegEx.test(password.value) && lowerCaseRegEx.test(password.value) && upperCaseRexEx.test(password.value) && dotRegEx.test(email.value) && aRegEx.test(email.value));
}

play.addEventListener("click", function(){
	if (validatePassword())
	{
		document.location.href	 = "mazegf.html";
	}
	else{
		alert("Invalid input!");
	}
})