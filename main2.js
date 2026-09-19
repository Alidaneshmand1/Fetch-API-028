const form = new FormData()
form.append('my-field' , 'my.data');




const req = new Request('https://localhost/test/29.php' ,{

    method : 'POST',
    body : form,
})

fetch(req)
.then((respone) => {

    console.log(respone.status);
    console.log(respone.url);
    return respone.text();
    
    
})
.then((text) => console.log(text))