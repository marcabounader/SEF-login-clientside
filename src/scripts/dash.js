let id_element=document.getElementById('name')


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

let first_name=getCookie('name');
id_element.innerText=first_name.toUpperCase();
