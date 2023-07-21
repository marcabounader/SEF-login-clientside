const register = async (email,password) =>{
    const response = await fetch('http://localhost/SEF-login-serverside/validate-user.php', { 
    method: "post",
    mode: 'cors',
    cache: "no-cache",
    origin: 'http://127.0.0.1:5500',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
            email,
            password
        })
    });
    if(response.status!=200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    console.log(response);
    return data;
}


document.getElementById('login-btn').addEventListener('click',(e)=>{

    let $email=document.getElementById('email').value;
    let $password=document.getElementById('password').value;
    register($email,$password).then( data =>{
        // console.log('resolved:',data);
        if(data.status==0){
            document.getElementById('error-message').innerText="Failed login. Please check username and password";
        } else{
            document.cookie = `name=${data.first_name}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
            window.location = "/dashboard.html";
        }
    }).catch((err)=>{
        // console.log('rejected',err.message)
    })
    
})

