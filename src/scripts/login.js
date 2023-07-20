const register = async (email,password) =>{
    const response = await fetch('http://localhost/SEF-login-serverside/validate-user.php', { 
    method: "post",
    mode: 'cors',
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
    return data;
}



document.getElementById('login-btn').addEventListener('click',(e)=>{

    let $email=document.getElementById('email').value;
    let $password=document.getElementById('password').value;
    register($email,$password).then( data =>{
        console.log('resolved:',data);
    }).catch((err)=>{
        console.log('rejected',err.message)
    })
    
})