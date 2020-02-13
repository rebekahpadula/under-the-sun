import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


document.querySelector('.video').addEventListener('loadedmetadata', function() {
    this.currentTime = 2;
  }, false);


// document.addEventListener('DOMContentLoaded', function() {
//   let ctrlVideo = document.querySelector('.video');

//   let videoButton = document.querySelector('.video-button');

//   videoButton.addEventListener('click', function() {
//     if(videoButton.classList.contains('active')) {
//       ctrlVideo.play();
//       videoButton.classList.remove('active');
//     } else {
//       ctrlVideo.pause();
//       videoButton.classList.add('active');
//     };
//   });
// });



// $(document).ready(function() {
//   let ctrlVideo = document.querySelector('.video');
// })

// $('.video-button').click(function() {
//   if($('.video-button').hasClass('active')) {
//     ctrlVideo.play();
//     $('.video-button').html('Pause');
//     $('.video-button').toggleClass('active');
//   } else {
//     ctrlVideo.pause();
//     $('.video-button').html('play');
//     $('.video-button').toggleClass('active');
//   };
// });