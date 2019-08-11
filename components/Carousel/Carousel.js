/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
<div class="carousel">
<div class="left-button"> < </div>
<img src="./assets/carousel/mountains.jpeg" />
<img src="./assets/carousel/computer.jpeg" />
<img src="./assets/carousel/trees.jpeg" />
<img src="./assets/carousel/turntable.jpeg" />
<div class="right-button"> > </div>
</div>
*/
const carouselContainer = document.querySelector('.carousel-container')
let index = 0
let imgs = []

if(index > imgs.length -1){
  index = 0
}




carouselContainer.appendChild(createCarousel())

function createCarousel() {
  const carousel = document.createElement('dive')
  carousel.classList.add('carousel')

  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = ' < '

  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = ' > '

  const mountainImg = document.createElement('img')
  mountainImg.src = "./assets/carousel/mountains.jpeg"
  imgs[0] = mountainImg


  const computerImg = document.createElement('img')
  computerImg.src = "./assets/carousel/computer.jpeg"
  imgs[1] = computerImg

  const treesImg = document.createElement('img')
  treesImg.src = "./assets/carousel/trees.jpeg"
  imgs[2] = treesImg


  const turntableImg = document.createElement('img')
  turntableImg.src = "./assets/carousel/turntable.jpeg"
  imgs[3] = turntableImg


  carousel.appendChild(leftButton)
  carousel.appendChild(mountainImg)
  carousel.appendChild(computerImg)
  carousel.appendChild(treesImg)
  carousel.appendChild(turntableImg)
  carousel.appendChild(rightButton)
  


  rightButton.addEventListener('click', e => {
    index += 1
    if(index > imgs.length -1){
      index = 0
    }

    if (imgs[index].stlye.display === "none" || "") {
      imgs[index].style.display = "block";
    } else {
      imgs[index].style.display = "none";
    }
  })



  leftButton.addEventListener('click', e => {
    index -= 1
    if(index < 0){
      index = imgs.length -1
    }
  })

  return carousel
}


