function verif()
{

var nom=document.getElementById("nom").value
var email=document.getElementById("email").value
var sujet=document.getElementById("sujet").value

if (email=="")
{ alert("Veillez remplir votre email ");}
else if(nom==""){alert("veillez remplir votre nom !")}
else if(sujet==""){alert("veillez ecrire un sujet s'il vous plait ")}
else {alert("Merci "+nom +" de me contacter !!");}
}