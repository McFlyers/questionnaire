var inputs = document.getElementsByTagName('li');
var entire = document.getElementById('full');
var bonne_reponse = 0;
var mauvaise_reponse = 0;

function verifyQuiz () {
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].style.display = "none";
		};
		entire.style.display = "none";

		if(document.getElementById('first').checked = true){
			bonne_reponse++;
		}else{
			mauvaise_reponse++;
		}

		if (document.getElementById('third').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('fifth').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('seventh').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('nineth').checked = true) {
			bonne_reponse++;
		}else{
			mauvaise_reponse++;
		}
		if (document.getElementById('eleventh').checked = true) {
			bonne_reponse++;
		}else{
			mauvaise_reponse++;
		}
		if (document.getElementById('thirteenth').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('fifteenth').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('seventeenth').checked = true) {
			mauvaise_reponse++;
		}else{
			bonne_reponse++;
		}
		if (document.getElementById('nineteenth').checked = true) {
			bonne_reponse++;
		}else{
			mauvaise_reponse++;
		}





		document.write("Wow, tu as " + bonne_reponse + " bonne(s) réponse(s), et tu as " + mauvaise_reponse + " mauvaise(s) réponse(s)")
}