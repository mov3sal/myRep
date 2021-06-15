const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

// Create Elements For links & Photos, Add to DOM
function displayPhotos(photosArray){
    // Run function for each object in photosArray
    photosArray.forEach((photos) =>{
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photos.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> fot photo
        const img = document.createElement('img');
        img.setAttribute('src', photos.urls.small);
        img.setAttribute('alt', photos.alt_description);
        img.setAttribute('title', photos.alt_description);
        // Put <img> inside <a>, then put both inside imgContainer
        item.appendChild(img);
        imgContainer.appendChild(item);

    });
}


// Unsplash API
const count = 10;
const apiKey = 'SfAvcdcQxfiXfHS6TVFdANlO-eSOeYubkf5TsdkMiZI';
const ori = 'squarish&portrait';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get Photos from API
async function getPhotos (){
    try {
        const response = await fetch(apiUrl);
        const photosArray = await response.json();
        console.log(photosArray);
        displayPhotos(photosArray);
    } catch (error) {
        // Catch Error
    }
}

// On Load
getPhotos();

