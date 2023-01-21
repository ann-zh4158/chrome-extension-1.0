window.addEventListener("load", (event) => {
  changeImg();
})
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
    "https://image-prod.iol.co.za/resize/1180x118000/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/aa5c9346-ad15-562f-b841-c5e9273e5bbc&operation=CROP&offset=0x0&resize=640x548&webp=true",
    "https://media.tenor.com/7r-BGEoIohkAAAAd/meme-cat.gif",
    "https://i.kym-cdn.com/photos/images/original/001/931/959/2e4.gif",
    "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424",
    "https://i.kym-cdn.com/photos/images/original/001/878/329/dfa.jpg"
];

const dogImages = [
    "https://cdn-abigi.nitrocdn.com/efuJsKtDyptHinJPkZsojPmTOBGlNDxZ/assets/static/optimized/rev-b3b8aea/wp-content/uploads/2021/08/Why-Do-Dogs-Sleep-So-Much.jpeg",
    "https://www.gannett-cdn.com/media/2022/07/29/USATODAY/usatsports/a-sleeping-shiba-inu-dog.jpg?width=1320&height=882&fit=crop&format=pjpg&auto=webp",
    "https://www.exodus.com/img/news/content/2022/11/flat-550x550-075-f.u1.jpg",
    "https://www.exodus.com/img/news/content/2022/11/b64e9bdc1f3e8eaffd78c.png",
    "https://www.exodus.com/img/news/content/2022/11/doge_squadron_by_shankidy-d6ijgat.png",
    "https://www.exodus.com/img/news/content/2022/11/infinite_doge.gif",
    "https://www.boredpanda.com/blog/wp-content/uploads/2020/05/5ece0a099744b_ux0cane3zq051__700.jpg"
];

const squirrelImages = [
    "https://i.pinimg.com/originals/29/2f/0a/292f0aa7caccb7c70fa0c6afaddedf61.jpg",
    "https://i1.sndcdn.com/artworks-000036846542-n6cmhr-t500x500.jpg",
    "https://media.tenor.com/r-aYBD6jTNAAAAAS/animal-beaver.gif",
    "https://pbs.twimg.com/media/EsStL6VVoAIaPE5?format=jpg&name=medium",
    "https://cdn.ebaumsworld.com/mediaFiles/picture/730195/87164682.jpg"
];

const animeImages = [
  "https://cdn.vox-cdn.com/thumbor/f8eYhijXL5eLm-D6W1rzc3pC9rM=/0x0:1400x788/1820x1213/filters:focal(588x282:812x506):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png",
  "https://www.lifewire.com/thmb/PpnJuquSid8GJ4rrxNsXe_nXqa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anime-pokemon-5a191e1789eacc00372449e8-512c78337fbe42b2b6cd6280bb7a23f6.jpg",
  "https://media.tenor.com/hd8ist3bcakAAAAd/spy-family-anya-anya-blame.gif", 
  "https://media.tenor.com/sbzzoAi06uAAAAAM/anya-spy-x-family-anime-spy-x-family.gif", 
  "https://media.tenor.com/9n08OE8c-b0AAAAM/spy-x-family-spy-family.gif",
  "https://qph.cf2.quoracdn.net/main-qimg-9a80a938b392b478ebba8a15a8e95a4b",
  "https://i.pinimg.com/originals/03/5c/d6/035cd678b21043185248b0f83afd15a4.gif",
  "https://sportshub.cbsistatic.com/i/2021/03/17/fb0cb07d-f22e-4915-8e11-e2a83fa75d9b/gintama-gintoki-1172688.jpg",
  "https://i.pinimg.com/236x/8d/fc/3a/8dfc3a7f3b1d8da788c52c4f97acde90.jpg",
  "https://gifdb.com/images/thumbnail/anime-funny-eyebrow-raise-4m5s6us70nzittch.gif",
  "https://64.media.tumblr.com/24291384b31c1ac161abab1379af2320/9f405815309c8099-3e/s540x810/2062bd878f79111a57625d42588f0086dbe17bfa.gif",
  "https://64.media.tumblr.com/f010cdb5025d27d40de71a28b73dd52d/tumblr_pha1ouuRAS1v57tj1o1_500.gif"
];

const surprisedAnimalImgs = [
  "https://i.insider.com/5c79aa5ceb3ce83818367f13?width=600&format=jpeg&auto=webp",
  "https://i.pinimg.com/originals/b4/f3/bb/b4f3bbc60e074815d7fdbe8ad4160cbe.png",
  "https://i.pinimg.com/originals/13/e8/eb/13e8eb29c20f1774a668aaaf9b9bfef8.jpg"
];

const capybaraImgs = [
  "https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2015/10/560fd6b80e4d5_560fd668b1dce_511482178.jpg",
  "https://img.cooljapan-videos.com/files/articles/9zx7h1ej/thumbnail/bae0c1de0cf2e3dbbec309eb786b4c85.jpg.webp",
  "https://video-images.vice.com/articles/61c18e0fb0ada600968ab97e/lede/1640076033394-ap111222126398.jpeg?crop=1xw:0.8441xh;0xw,0.1559xh",
  "https://thesmartlocal.jp/wp-content/uploads/2022/01/capybara-onsen-soak-2-1024x642.jpg",
  "https://japanhouse.illinois.edu/uploads/general/_1200x630_crop_center-center_82_none/capybara-yuzuyu.jpeg?mtime=1642099928"
];





const themes = [catImages, dogImages, squirrelImages, animeImages, surprisedAnimalImgs, capybaraImgs];

const randTheme = themes[Math.floor(Math.random()*themes.length)];

// need to have a popup
    // two buttons --> event listeners
        // cats
        // dogs

// evaluates validity of user input 
// function getTheme(){

//   const input = document.getElementById("theme").value; //string
//   if (!themes[input] || input === '') {
//     document.getElementById('error-mssg').style.visibility = 'visible';
//     document.getElementById("theme").value = '';
//     // console.log('Input must be a valid theme');
//     return;
//     } 
//   document.getElementById("theme").value = ''; // resets the value of the input
//   console.log('valid input')
//   changeImg(themes[input]); 
// }

// create button --> listen for click 
// const button = document.getElementById('button');
// button.addEventListener('click', getTheme);

// randomly assign image 
// changeImg();
function changeImg(){
//   // grab all images using the DOM (stored in an array)
  const images = document.getElementsByTagName("img");
  // loop over all images and change them with a random image
  for(let img of images){
   // random index generator
   const index = Math.floor(Math.random() * randTheme.length);
   img.src = randTheme[index];    
  }
}

// setInterval(changeImg, 5000);

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });