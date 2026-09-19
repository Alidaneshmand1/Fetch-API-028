///text.php///


// Request Object
const h = new Headers({
    "Contant-Type" : "image/png",
})


const req = new Request("https://localhost/test/26.php", {
    method: 'GET',
    mode : "cors",
    // redirect : 'follow',
    // headers :" h" ,

})


fetch(req)
.then((response) => {
    console.log(response.status);
    console.log(response.url);
    return response.text();

    
    
})
.then((text) => console.log(text))





// const q = new Headers({
//     "Contant-type" : "image-png"
// })


// const req1 = new Request('https://localhost/test/27.php' , {
//     method: 'GET',
    
// })