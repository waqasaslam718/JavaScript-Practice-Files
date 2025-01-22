let user= prompt("please Login to web page")
if(user=="Admin")
{
let passward =prompt("please Enter the password")
{
    if(passward=="TheMaster")
    {
        alert("Login Successful");
    }
    else if(user==null)
        {
            alert("cancelled");
        
        }
    else
    {
        alert("Wrong Password");
    }
}

}
else if(user==null)
{
    alert("cancelled");

}
else 
{
    alert("I do not know you");
}
