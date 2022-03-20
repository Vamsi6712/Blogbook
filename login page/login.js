function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="" || password=="")
{
	alert("missing username or password");	
}
else if(username=="vamsi" && password=="vamsi6712" || username=="vk" && password=="vk6712")
{ 

	
	alert("Logged in successfully");

}
else
{
	alert("invalid username or password");

}
}