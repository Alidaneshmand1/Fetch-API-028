// Request Object

const h = new Headers({
    "Contant-Type" : "image/png"
})

const req = new Request('http://localhost/test/26.php' , {
    method: 'GET',
    mode : "cors",
    redirect : 'follow'

})


fetch(req)
.then((response) => {
    console.log(response.status());
    console.log();
    
    
})
.then((text) => console.log(text))