function checkCookieAndRedirect() {
  // Split the document.cookie string into individual cookie parts
  const cookies = document.cookie.split('; ');

  // Iterate through the cookies to find the one named "PREF"
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'PREF' && value === 'F6') {
      // Redirect to /old-site
      window.location.href = '/old-site';
      return; // Exit the function to prevent further checks
    }
  }
}

// Call the function to check the cookie and redirect if necessary
checkCookieAndRedirect();

function ShowHome() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#projects-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#contact-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#page-container[page-subtype="projects"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#page-container[page-subtype="contact"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#page-container[page-subtype="home"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#home-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowProjects() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#home-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#contact-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#page-container[page-subtype="home"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#page-container[page-subtype="contact"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#page-container[page-subtype="projects"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#projects-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowContact() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#home-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#projects-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#page-container[page-subtype="home"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#page-container[page-subtype="projects"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#page-container[page-subtype="contact"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#contact-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
