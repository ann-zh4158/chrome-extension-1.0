document.addEventListener('DOMContentLoaded', () => {
// take all images on the page and replace them with images

    // Phase 1 several themes locally
    // Phase 2 gifs/images instead
    // Phase 3 Google search

    // array with links for the pictures
const catImages = [
    "https://bestlifeonline.com/wp-content/uploads/sites/3/2018/06/cat-meme-54-0.jpg?quality=82&strip=all",
    "https://suddenlycat.com/wp-content/uploads/2020/09/Screenshot-2020-08-30-at-2.41.56-AM-814x1024.png",
    "https://www.americanhumane.org/app/uploads/2016/08/shutterstock_393108265-1024x681.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=980:*",
    "https://image-prod.iol.co.za/resize/1180x118000/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/aa5c9346-ad15-562f-b841-c5e9273e5bbc&operation=CROP&offset=0x0&resize=640x548&webp=true"
];

const dogImages = [
    "https://cdn-abigi.nitrocdn.com/efuJsKtDyptHinJPkZsojPmTOBGlNDxZ/assets/static/optimized/rev-b3b8aea/wp-content/uploads/2021/08/Why-Do-Dogs-Sleep-So-Much.jpeg",
    "https://www.gannett-cdn.com/media/2022/07/29/USATODAY/usatsports/a-sleeping-shiba-inu-dog.jpg?width=1320&height=882&fit=crop&format=pjpg&auto=webp"
];

const squirrelImages = [
    "https://i.pinimg.com/originals/29/2f/0a/292f0aa7caccb7c70fa0c6afaddedf61.jpg",
    "https://i1.sndcdn.com/artworks-000036846542-n6cmhr-t500x500.jpg"
];

const animeImages = [
    "https://cdn.vox-cdn.com/thumbor/f8eYhijXL5eLm-D6W1rzc3pC9rM=/0x0:1400x788/1820x1213/filters:focal(588x282:812x506):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png",
    "https://www.lifewire.com/thmb/PpnJuquSid8GJ4rrxNsXe_nXqa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anime-pokemon-5a191e1789eacc00372449e8-512c78337fbe42b2b6cd6280bb7a23f6.jpg"
    
];

const themes = {
    dog: dogImages,
    cat: catImages,
    sqirrel: squirrelImages,
    anime: animeImages
};
// need to have a popup
    // two buttons --> event listeners
        // cats
        // dogs

// evaluates validity of user input 
function getTheme(){

  const input = document.getElementById("theme").value; //string
  if (!themes[input] || input === '') {
    document.getElementById('error-mssg').style.visibility = 'visible';
    document.getElementById("theme").value = '';
    // console.log('Input must be a valid theme');
    return;
    } 
  document.getElementById("theme").value = ''; // resets the value of the input
  console.log('valid input')
  changeImg(themes[input]); 
}

// create button --> listen for click 
const button = document.getElementById('button');
button.addEventListener('click', getTheme);

// randomly assign image 
function changeImg(arr){
  if(!Array.isArray(arr)) {
    // console.log('Input to changeImg needs to be an array');
    return;
  }
  // grab all images using the DOM (stored in an array)
  const images = document.getElementsByTagName("img");
  // loop over all images and change them with a random image
  for(let img of images){
   // random index generator
   const index = Math.floor(Math.random() * arr.length);
   img.src = arr[index];    
  }
}



// phase 3

    // in popup: have a search bar and a submit button
    // figure out if we can communicate with api to get pictures based on search
    // get pictures from API
        // setTimeOut

    


});