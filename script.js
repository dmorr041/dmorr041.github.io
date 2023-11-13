document
  .getElementById('projects-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    // Fade out the main content
    var mainContent = document.getElementById('main-content')
    mainContent.classList.add('fade-out')

    // Wait for the fade-out to complete
    setTimeout(function () {
      mainContent.style.display = 'none' // Hide main content

      // Show and animate the gallery
      var galleryContent = document.getElementById('gallery-content')
      galleryContent.style.display = 'block' // Make the gallery visible
      galleryContent.classList.add('slide-in')
    }, 1000) // This timeout should match the duration of the fade-out animation
  })
