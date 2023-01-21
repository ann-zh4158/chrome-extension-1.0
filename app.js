// window.addEventListener("load", (event) => {
//   changeImg();
//   setInterval(changeImg, 10000);  // reruns every 10k ms
// })

function changeImg(arr){
  // grab all images using the DOM (stored in an array)
  const images = document.getElementsByTagName("img");
  // loop over all images and change them with a random image
  for(let img of images){
   // random index generator
   const index = Math.floor(Math.random() * arr.length);
   img.src = arr[index];    
  }
}

// listen for one-time message request 
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.memes) {
      // if this exists 
      changeImg(request.memes);
      console.log('This is working. Data: ', request.memes);   // see this on browser console
      console.log('Sender Info: ', sender);   // see this on browser console
      sendResponse({status: "done"});
    }
  });