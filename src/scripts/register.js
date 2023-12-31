const register = async (first_name,last_name,email,password) =>{
    const response = await fetch('http://localhost/SEF-login-serverside/register-user.php', { 
    method: "post",
    mode: 'cors',
    origin: 'http://127.0.0.1:5500',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
            first_name,
            last_name,
            email,
            password
        })
    });
    if(response.status!=200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;
}



document.getElementById('register-btn').addEventListener('click',(e)=>{
    let $first_name=document.getElementById('first-name').value;
    let $last_name=document.getElementById('last-name').value;
    let $email=document.getElementById('email').value;
    let $password=document.getElementById('password').value;
    register($first_name,$last_name,$email,$password).then( data =>{
        // console.log('resolved:',data);
        if(data.status==0){
            document.getElementById('error-message').innerText=`Failed login. ${data.error}`;
        } else{
            window.location = "/login.html";
        }
    }).catch((err)=>{
        // console.log('rejected',err.message)
    })
    
})