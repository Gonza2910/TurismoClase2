var active=false
function navEffect() {
	if(!active) {
		active=true
		document.getElementById('nav-mobile').style.display='block'
	} else {
		document.getElementById('nav-mobile').style.display='none'
		active=false
	}
	
	
}
function sendContact () {
	var name= document.getElementsByName('name'),
	    email= document.getElementsByName('email'),
	    description= document.getElementsByName('comments')

	console.log(name, email, description)

}