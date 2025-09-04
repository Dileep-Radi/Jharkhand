const scene = document.querySelector('a-scene');
const header = document.getElementById('site-header');

// Switch images in sky
function changeScene(img) {
  document.querySelector('#vr-sky').setAttribute('src', img);
}

// Auto-hide header when entering VR
if (scene) {
  scene.addEventListener('enter-vr', () => {
    header.classList.add('vr-hidden');
  });
  scene.addEventListener('exit-vr', () => {
    header.classList.remove('vr-hidden');
  });
}
