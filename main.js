var image = document.querySelector('.dog-image');

function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json();
    }).then(jsonResponse => {
        console.log('Success!')
        image.src = jsonResponse.message;
    }).catch(error => {
        console.log(error);
    })
};