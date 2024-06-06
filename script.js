document.addEventListener('DOMContentLoaded', function () {
  const bar = document.getElementById('bar');
  const navbar = document.getElementById('navbar');

  if (bar) {
      bar.addEventListener('click', function () {
          navbar.classList.toggle('active');
      });
  }
});



const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    categories.forEach(c => {
      if (c !== category) {
        c.classList.remove('active');
      }
    });
    category.classList.toggle('active');
  });
});



document.querySelectorAll('.openPopupBtn').forEach(button => {
  button.addEventListener('click', function() {
      const message = this.getAttribute('data-message');
      document.getElementById('popupMessage').textContent = message;
      document.getElementById('popup').style.display = 'flex';
  });
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});






document.addEventListener('DOMContentLoaded', () => {
  const morePhotosBtn = document.getElementById('more-photos-btn');
  const modal = document.getElementById('photo-modal');
  const closeModal = document.querySelector('.close');
  const fullscreenView = document.getElementById('fullscreen-view');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const closeFullscreen = document.querySelector('.close-fullscreen');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentPhotoIndex = 0;

  const photos = Array.from(document.querySelectorAll('.modal-photo'));

  morePhotosBtn.addEventListener('click', () => {
      modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  photos.forEach((photo, index) => {
      photo.addEventListener('click', () => {
          openFullscreen(index);
      });
  });

  function openFullscreen(index) {
      currentPhotoIndex = index;
      fullscreenImage.src = photos[currentPhotoIndex].src;
      fullscreenView.style.display = 'flex';
  }

  closeFullscreen.addEventListener('click', () => {
      fullscreenView.style.display = 'none';
  });

  prevButton.addEventListener('click', showPrevPhoto);
  nextButton.addEventListener('click', showNextPhoto);

  window.addEventListener('keydown', (event) => {
      if (fullscreenView.style.display === 'flex') {
          if (event.key === 'ArrowLeft') {
              showPrevPhoto();
          } else if (event.key === 'ArrowRight') {
              showNextPhoto();
          } else if (event.key === 'Escape') {
              fullscreenView.style.display = 'none';
          }
      }
  });

  function showPrevPhoto() {
      currentPhotoIndex = (currentPhotoIndex > 0) ? currentPhotoIndex - 1 : photos.length - 1;
      fullscreenImage.src = photos[currentPhotoIndex].src;
  }

  function showNextPhoto() {
      currentPhotoIndex = (currentPhotoIndex < photos.length - 1) ? currentPhotoIndex + 1 : 0;
      fullscreenImage.src = photos[currentPhotoIndex].src;
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const moreVideosBtn27 = document.getElementById('more-videos-btn27');
  const modal27 = document.getElementById('video-modal27');
  const closeModal27 = document.querySelector('.close27');
  const fullscreenView27 = document.getElementById('fullscreen-view27');
  const fullscreenVideo27 = document.getElementById('fullscreen-video27');
  const closeFullscreen27 = document.querySelector('.close-fullscreen27');
  const prevButton27 = document.querySelector('.prev27');
  const nextButton27 = document.querySelector('.next27');

  let currentVideoIndex27 = 0;

  const videos27 = Array.from(document.querySelectorAll('.modal-video27'));

  moreVideosBtn27.addEventListener('click', () => {
      modal27.style.display = 'block';
  });

  closeModal27.addEventListener('click', () => {
      modal27.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal27) {
          modal27.style.display = 'none';
      }
  });

  videos27.forEach((video, index) => {
      video.addEventListener('click', () => {
          openFullscreen27(index);
      });
  });

  function openFullscreen27(index) {
      currentVideoIndex27 = index;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
      fullscreenView27.style.display = 'flex';
  }

  closeFullscreen27.addEventListener('click', () => {
      fullscreenView27.style.display = 'none';
      fullscreenVideo27.pause();
  });

  prevButton27.addEventListener('click', showPrevVideo27);
  nextButton27.addEventListener('click', showNextVideo27);

  window.addEventListener('keydown', (event) => {
      if (fullscreenView27.style.display === 'flex') {
          if (event.key === 'ArrowLeft') {
              showPrevVideo27();
          } else if (event.key === 'ArrowRight') {
              showNextVideo27();
          } else if (event.key === 'Escape') {
              fullscreenView27.style.display = 'none';
              fullscreenVideo27.pause();
          }
      }
  });

  function showPrevVideo27() {
      currentVideoIndex27 = (currentVideoIndex27 > 0) ? currentVideoIndex27 - 1 : videos27.length - 1;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
  }

  function showNextVideo27() {
      currentVideoIndex27 = (currentVideoIndex27 < videos27.length - 1) ? currentVideoIndex27 + 1 : 0;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const moreVideosBtn27 = document.getElementById('more-videos-btn27');
  const modal27 = document.getElementById('video-modal27');
  const closeModal27 = document.querySelector('.close27');
  const fullscreenView27 = document.getElementById('fullscreen-view27');
  const fullscreenVideo27 = document.getElementById('fullscreen-video27');
  const closeFullscreen27 = document.querySelector('.close-fullscreen27');
  const prevButton27 = document.querySelector('.prev27');
  const nextButton27 = document.querySelector('.next27');

  let currentVideoIndex27 = 0;

  const videos27 = Array.from(document.querySelectorAll('.modal-video27'));
  const homeVideo27 = document.getElementById('home-video27');

  moreVideosBtn27.addEventListener('click', () => {
      modal27.style.display = 'block';
  });

  closeModal27.addEventListener('click', () => {
      modal27.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal27) {
          modal27.style.display = 'none';
      }
  });

  videos27.forEach((video, index) => {
      video.addEventListener('click', () => {
          openFullscreen27(index);
      });
  });

  homeVideo27.addEventListener('click', () => {
      openFullscreen27(0); // Assuming the home video corresponds to the first video in the modal
  });

  function openFullscreen27(index) {
      currentVideoIndex27 = index;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
      fullscreenView27.style.display = 'flex';
  }

  closeFullscreen27.addEventListener('click', () => {
      fullscreenView27.style.display = 'none';
      fullscreenVideo27.pause();
  });

  prevButton27.addEventListener('click', showPrevVideo27);
  nextButton27.addEventListener('click', showNextVideo27);

  window.addEventListener('keydown', (event) => {
      if (fullscreenView27.style.display === 'flex') {
          if (event.key === 'ArrowLeft') {
              showPrevVideo27();
          } else if (event.key === 'ArrowRight') {
              showNextVideo27();
          } else if (event.key === 'Escape') {
              fullscreenView27.style.display = 'none';
              fullscreenVideo27.pause();
          }
      }
  });

  function showPrevVideo27() {
      currentVideoIndex27 = (currentVideoIndex27 > 0) ? currentVideoIndex27 - 1 : videos27.length - 1;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
  }

  function showNextVideo27() {
      currentVideoIndex27 = (currentVideoIndex27 < videos27.length - 1) ? currentVideoIndex27 + 1 : 0;
      fullscreenVideo27.src = videos27[currentVideoIndex27].src;
      fullscreenVideo27.play();
  }
});

