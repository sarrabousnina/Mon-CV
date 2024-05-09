function verif()
{
var e=document.querySelectorAll('p')
var login=document.getElementById("login").value
var mdp=document.getElementById("MDP").value

if (login=="")
{ alert("veillez remplir le login !! ");}
else if(mdp==""){alert("veillez remplir le mot de passe !!")}
else {var v1 = prompt("hello !","heyy");}
console.log(login);
var arr=[];
arr[0]=1;
arr[1]="bonjour";
arr[2]=true;
console.log(arr);
console.log(e);
console.log(ee);

e.forEach(function(e) {
    console.log(e.textContent);}
}
