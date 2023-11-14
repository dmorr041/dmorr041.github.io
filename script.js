document
  .getElementById('projects-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var mainContent = document.getElementById('main-content')
    var backgroundContent = document.getElementById('background-content')
    var galleryContent = document.getElementById('gallery-content')

    console.log('home: ', mainContent.classList)
    console.log('projects: ', galleryContent.classList)
    console.log('background: ', backgroundContent.classList)

    mainContent.classList = []
    backgroundContent.classList = []
    mainContent.classList.add('fade-out')
    backgroundContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'
      backgroundContent.style.display = 'none'
      mainContent.classList = []
      backgroundContent.classList = []

      galleryContent.style.display = 'block'
      galleryContent.classList.add('slide-in')
    }, 1000)
  })

document
  .getElementById('home-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    var galleryContent = document.getElementById('gallery-content')
    var backgroundContent = document.getElementById('background-content')
    var mainContent = document.getElementById('main-content')

    console.log('home: ', mainContent.classList)
    console.log('projects: ', galleryContent.classList)
    console.log('background: ', backgroundContent.classList)

    galleryContent.classList = []
    backgroundContent.classList = []

    // Fade out other content
    galleryContent.classList.add('fade-out')
    backgroundContent.classList.add('fade-out')

    // Once fade out is done, hide other content, remove all classes from other content
    // Show Home Content and add fade in
    setTimeout(function () {
      galleryContent.style.display = 'none'
      backgroundContent.style.display = 'none'
      galleryContent.classList = []
      backgroundContent.classList = []

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

    console.log('home: ', mainContent.classList)
    console.log('projects: ', galleryContent.classList)
    console.log('background: ', backgroundContent.classList)

    mainContent.classList = []
    galleryContent.classList = []

    // Fade out other content
    mainContent.classList.add('fade-out')
    galleryContent.classList.add('fade-out')

    // Once fade out is done, hide other content, remove all classes from other content
    // Show Background Content and add fade in
    setTimeout(function () {
      mainContent.style.display = 'none'
      galleryContent.style.display = 'none'
      mainContent.classList = []
      galleryContent.classList = []

      backgroundContent.style.display = 'block'
      backgroundContent.classList.add('fade-in')
    }, 1000)
  })
