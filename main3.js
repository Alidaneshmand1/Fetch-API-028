const button = document.querySelector("#button")
const myImage = document.querySelector('#img')

const url  = "https://images.dog.ceo/breeds/hound-blood/n02088466_7195.jpg"

button.addEventListener('click' , function () {
    fetch(url)
    .then((response) => response.blob())
    .then((myBlob) => {
        const fileUrl = URL.createObjectURL(myBlob)
        myImage.setAttribute("src" , fileUrl)
        const link = document.createElement('a')
        link.innerHTML = 'download picture'
        link.setAttribute('download' , 'my-img.jpg')
        document.body.appendChild(link)
        link.href = fileUrl;
    })
})