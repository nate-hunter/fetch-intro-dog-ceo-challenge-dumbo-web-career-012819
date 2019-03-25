console.log('%c HI', 'color: firebrick')

// VARIABLES:
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulTag = document.querySelector('#dog-breeds')
//-----

// FUNCTIONS:
function createImage(image) {
  return `<img src="${image}" height="200" width="200">`
};

function breedList(breed) {
  return `<li class="dog-breed" style="color:black;">${breed}</li>`
};
//-----

// EVENT LISTENERS:
ulTag.addEventListener('click', e => {
  const liTag = e.target
  if (liTag.className === "dog-breed") {
    if (liTag.style.color === 'black') {
      liTag.style.color = 'pink';
    } else if (liTag.style.color === 'pink') {
      liTag.style.color = 'black';
      }
  }
});
//-----

// GETs all images:
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
  images.message.forEach(image => {
    const dogDiv = document.querySelector('#dog-image-container')
    dogDiv.innerHTML += createImage(image)
  })
});

fetch(breedUrl)
.then(resp => resp.json())
.then(breeds => {
  for (let breed in breeds.message) {
    const ulTagBreeds = document.querySelector('#dog-breeds')
    ulTagBreeds.innerHTML += breedList(breed)
  }
});
//-----
