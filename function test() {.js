//Ex1
function test() {
    console.log(a);
    console.log(four());
    var a = 1;
    function four() {return 4;}
    }
    test ();


//EX2

function categorie()
{   var age=document.getElementById('fname').value
    if(age<=6 && age>=1)
    {console.log('vous etes un jeune enfant . ')}
    else if(age<=11 && age>=7)
    {console.log('vous etes un enfant qui a atteint l"age de raison . ')}
    else if(age<=17 && age>=12)
    {console.log('vous etes adolescent . ')}
    else if(age<=120 && age>=8)
    {console.log('vous etes un adulte . ')}

}
//EX3
var x,y


function somme(x,y)
{
if(typeof x != Number || typeof y != Number )
{console.log('erreur !!!')}
else console.log(x+y)

}

//EX4
function multiple()
{
    for(var i =0 ;i<=100;i++) {console.log(i*10)}
}
multiple()

//EX5
function inverse(ch)
{   let k
    for(let i=0 ;i<Math.round(ch.length/2);i++)
    {k=ch[i]
     ch[i]=ch[ch.length-i]
     ch[ch.length-i]=k}
}
inverse (3INFOB)




