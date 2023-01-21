// Pop-up logic here

// document.addEventListener('DOMContentLoaded', () => {
//     // DOM loads --> pop-up listens for user input ---> sends message to open tab with input data 
//     // communicates with app.js thru message 
    
//     // create button --> listen for click 
//     const button = document.getElementById('button');
//     button.addEventListener('click', () => {
//         const input = document.getElementById("theme").value; //get theme --> string
//         chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
//             console.log('query tab', tabs[0].id);
//             chrome.tabs.sendMessage(tabs[0].id, {input: input});  // send a message to the 1st tab you have open 
//         });
//     });
// });

// meme bank 
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
    "https://i1.sndcdn.com/artworks-000036846542-n6cmhr-t500x500.jpg",
    "https://t3.ftcdn.net/jpg/05/23/65/00/360_F_523650075_Xs1rNBoZrfwVZ5Lk9xRBtCgxfl0ny7CM.jpg",
    "https://i.ytimg.com/vi/WZY15Lb0L-k/maxresdefault.jpg",
    "https://www.birdsandblooms.com/wp-content/uploads/2017/03/7Squirrel_KathleenOttos.jpg?fit=628,416"
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
    "https://i.pinimg.com/236x/8d/fc/3a/8dfc3a7f3b1d8da788c52c4f97acde90.jpg"
];


const themes = {
    dog: dogImages,
    cat: catImages,
    sqirrel: squirrelImages,
    anime: animeImages
};

// DOM loads --> listen 

document.addEventListener('DOMContentLoaded', () => {

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const input = getInput();
  if (validTheme(input)) {
    //on button click select the theme, validate and send to the content.js
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: 'changePictures',
        meme: input,
        content: JSON.stringify(themes[input])   // returns a JSON.stringified array 
      });
    });
  } else {
    document.getElementById('error-mssg').style.visibility = 'visible';
  }
  document.getElementById("theme").value = '';  // clear form 
});

  function getInput() {
    const input = document.getElementById('theme').value.toLowerCase();  // case-insensitive input
    // document.getElementById('theme').value = '';
    return input;  // returns a string 
  }

  function validTheme(str) {
    if (!themes[str] || str === '') return false;
    return true;
  }
})