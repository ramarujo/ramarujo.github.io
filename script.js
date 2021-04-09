var mooncake = document.getElementById("mooncake"),
  mouth = document.getElementsByClassName("boca")[0],
  face = document.getElementsByClassName("rostinho")[0],
  eyes = Array.from(face.getElementsByClassName('olho')),
  pupils = Array.from(face.getElementsByClassName('pupila')),
  chookity = document.getElementsByClassName('chookity')[0];
  // interests = document.getElementById("wrapper-interests")


mooncake.onmousemove = () => {
  mouth.classList.add('surprise')
  eyes.forEach(eye => eye.classList.add('surprise'));
  pupils.forEach(pupil => pupil.classList.add('surprise'));
}

mooncake.onmouseleave = () => {
  mouth.classList.remove('surprise');
  eyes.forEach(eye => eye.classList.remove('surprise'));
  pupils.forEach(pupil => pupil.classList.remove('surprise'));
}

mooncake.onclick = () => {
  mooncake.classList.remove('back')
  mooncake.classList.add('surprise')
  chookity.style.display = 'block'

  setTimeout(() => {
    chookity.style.display = 'none'
  }, 1000) 

  setTimeout(() => {
    mooncake.classList.remove('surprise')
    mooncake.classList.add('back')
  }, 2000)
}