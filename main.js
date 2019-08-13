
 var x= document.getElementById("txt")     ;
function bd()
{ 
  if (x.style.fontWeight!="bold")
{
  x.style.fontWeight="bold";
}
else 

x.style.fontWeight="normal";


}

function ic()
{
  if (x.style.fontStyle!="italic" )

  x.style.fontStyle="italic";   
  
  else 
  x.style.fontStyle="normal"; 

}
function ue()
{
  if (x.style.textDecoration!="underline")
  x.style.textDecoration="underline";  
  else 
  x.style.textDecoration="none" ; 

}

var y= document.getElementById("slc");


function bigger()
{
x.style.fontSize=y.value;
 }
 var z= document.getElementById("ff");

 function ffam()
 
 {
  x.style.fontFamily=z.value;

 }