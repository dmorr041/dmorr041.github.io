document
  .getElementById('projects-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    const mainContent = document.getElementById('main-content')
    const backgroundContent = document.getElementById('background-content')
    const galleryContent = document.getElementById('gallery-content')
    const c360SummaryContent = document.getElementById('carrier-360-summary')
    const openResearchContent = document.getElementById('open-research-summary')

    mainContent.classList = []
    backgroundContent.classList = []
    c360SummaryContent.classList = []
    openResearchContent.classList = []
    mainContent.classList.add('fade-out')
    backgroundContent.classList.add('fade-out')
    c360SummaryContent.classList.add('fade-out')
    openResearchContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'
      backgroundContent.style.display = 'none'
      c360SummaryContent.style.display = 'none'
      openResearchContent.style.display = 'none'
      mainContent.classList = []
      backgroundContent.classList = []
      c360SummaryContent.classList = []
      openResearchContent.classList = []

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
    const c360SummaryContent = document.getElementById('carrier-360-summary')
    const openResearchContent = document.getElementById('open-research-summary')

    // console.log('home: ', mainContent.classList)
    // console.log('projects: ', galleryContent.classList)
    // console.log('background: ', backgroundContent.classList)

    galleryContent.classList = []
    backgroundContent.classList = []
    c360SummaryContent.classList = []
    openResearchContent.classList = []
    galleryContent.classList.add('fade-out')
    backgroundContent.classList.add('fade-out')
    c360SummaryContent.classList.add('fade-out')
    openResearchContent.classList.add('fade-out')

    setTimeout(function () {
      galleryContent.style.display = 'none'
      backgroundContent.style.display = 'none'
      c360SummaryContent.style.display = 'none'
      openResearchContent.style.display = 'none'
      galleryContent.classList = []
      backgroundContent.classList = []
      c360SummaryContent.classList = []
      openResearchContent.classList = []

      mainContent.style.display = 'block'
      mainContent.classList.add('fade-in')
    }, 1000)
  })

document
  .getElementById('background-link')
  .addEventListener('click', function (event) {
    event.preventDefault()

    const mainContent = document.getElementById('main-content')
    const galleryContent = document.getElementById('gallery-content')
    const backgroundContent = document.getElementById('background-content')
    const c360SummaryContent = document.getElementById('carrier-360-summary')
    const openResearchContent = document.getElementById('open-research-summary')

    mainContent.classList = []
    galleryContent.classList = []
    c360SummaryContent.classList = []
    openResearchContent.classList = []
    mainContent.classList.add('fade-out')
    galleryContent.classList.add('fade-out')
    c360SummaryContent.classList.add('fade-out')
    openResearchContent.classList.add('fade-out')

    setTimeout(function () {
      mainContent.style.display = 'none'
      galleryContent.style.display = 'none'
      c360SummaryContent.style.display = 'none'
      openResearchContent.style.display = 'none'
      mainContent.classList = []
      galleryContent.classList = []
      c360SummaryContent.classList = []
      openResearchContent.classList = []

      backgroundContent.style.display = 'block'
      backgroundContent.classList.add('fade-in')
    }, 1000)
  })

document
  .getElementById('open-research-card')
  .addEventListener('click', function (event) {
    event.preventDefault()

    const galleryContent = document.getElementById('gallery-content')
    const openResearchContent = document.getElementById('open-research-summary')

    galleryContent.classList = []
    galleryContent.classList.add('fade-out')

    setTimeout(function () {
      galleryContent.style.display = 'none'
      galleryContent.classList = []

      openResearchContent.style.display = 'block'
      openResearchContent.classList.add('fade-in')
    }, 1000)
  })

document
  .getElementById('carrier-360-card')
  .addEventListener('click', function (event) {
    event.preventDefault()

    const galleryContent = document.getElementById('gallery-content')
    const c360SummaryContent = document.getElementById('carrier-360-summary')

    galleryContent.classList = []
    galleryContent.classList.add('fade-out')

    setTimeout(function () {
      galleryContent.style.display = 'none'
      galleryContent.classList = []

      c360SummaryContent.style.display = 'block'
      c360SummaryContent.classList.add('fade-in')
    }, 1000)
  })
