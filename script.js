document
  .getElementById('projects-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var mainContent = document.getElementById('main-content')
    var backgroundContent = document.getElementById('background-content')
    var galleryContent = document.getElementById('gallery-content')

    mainContent.classList.add('fade-out')
    backgroundContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'
      backgroundContent.style.display = 'none'

      galleryContent.style.display = 'block'
      galleryContent.classList.remove('fade-out')
      galleryContent.classList.add('slide-in')
    }, 1000)
  })

document
  .getElementById('home-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var galleryContent = document.getElementById('gallery-content')
    var backGroundContent = document.getElementById('background-content')
    galleryContent.classList.add('fade-out')
    backGroundContent.classList.add('fade-out')

    setTimeout(function () {
      galleryContent.style.display = 'none'
      galleryContent.classList.remove('fade-out')
      backGroundContent.style.display = 'none'
      backGroundContent.classList.remove('fade-out')

      var mainContent = document.getElementById('main-content')
      mainContent.style.display = 'block'
      mainContent.classList.add('fade-in')
    }, 1000)
  })

document
  .getElementById('background-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var mainContent = document.getElementById('main-content')
    var galleryContent = document.getElementById('gallery-content')
    var backgroundContent = document.getElementById('background-content')

    mainContent.classList.add('fade-out')
    galleryContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'
      galleryContent.style.display = 'none'

      backgroundContent.style.display = 'block'
      backgroundContent.classList.remove('fade-out')
      backgroundContent.classList.add('fade-in')
    }, 1000)
  })
