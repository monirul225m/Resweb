function Opnnav(){
	document.getElementById("Mynav").style.width="270px"
}

function Closnav() {
	// Tab to edit
	document.getElementById("Mynav").style.width="0"
}

const loginformcontainerm = document.getElementById("loginformm");
const loginform = document.getElementById("logincontainerid");

loginformcontainerm.addEventListener('click', function(){
	loginform.classList.toggle('show')
})

const logform = document.getElementById("logincontainerid");
    logform.addEventListener('submit', function (event) {
  	event.preventDefault();
   loginform.classList.remove('show');
       
    });
   
const hiding = document.getElementById("hidingbtn");
hiding.addEventListener('click', function(){
	// Tab to edit
	loginform.classList.remove("show")
});


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementsByClassName("footerbtm")[0].innerHTML = "© All Rights Reserved by MongoBD"+" "+currentYear;



