document
  .getElementById('projects-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var mainContent = document.getElementById('main-content')
    mainContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'

      var galleryContent = document.getElementById('gallery-content')
      galleryContent.style.display = 'block'
      galleryContent.classList.add('slide-in')
    }, 1000)
  })

document
  .getElementById('home-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var galleryContent = document.getElementById('gallery-content')
    galleryContent.classList.add('fade-out')

    setTimeout(function () {
      galleryContent.style.display = 'none'
      galleryContent.classList.remove('fade-out')

      var mainContent = document.getElementById('main-content')
      mainContent.style.display = 'block'
      mainContent.classList.add('fade-in')
    }, 1000)
  })
