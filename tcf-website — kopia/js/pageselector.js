function ShowStatus() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#changelog-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#downloads-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#about-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#gamemodes-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#news-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#status-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowNews() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#changelog-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#downloads-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#about-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#gamemodes-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#news-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowChangelog() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#news-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#downloads-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#about-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#gamemodes-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#changelog-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowDownloads() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#news-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#changelog-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#about-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#gamemodes-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#downloads-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowAbout() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#news-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#changelog-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#downloads-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#gamemodes-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#about-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowGamemodes() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#news-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#changelog-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#downloads-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#about-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#faq-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#gamemodes-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function ShowFAQ() {
    // Remove the "active" class from the other buttons
    var page1Button = document.querySelector('#news-button');
    if (page1Button) {
        page1Button.classList.remove('active');
    }

    var page2Button = document.querySelector('#changelog-button');
    if (page2Button) {
        page2Button.classList.remove('active');
    }

    var page3Button = document.querySelector('#downloads-button');
    if (page3Button) {
        page3Button.classList.remove('active');
    }

    var page4Button = document.querySelector('#about-button');
    if (page4Button) {
        page4Button.classList.remove('active');
    }

    var page5Button = document.querySelector('#gamemodes-button');
    if (page5Button) {
        page5Button.classList.remove('active');
    }

    var page6Button = document.querySelector('#status-button');
    if (page6Button) {
        page6Button.classList.remove('active');
    }
    var page7Button = document.querySelector('#staff-button');
    if (page7Button) {
        page7Button.classList.remove('active');
    }

    // Hide other elements with id="gmt_browse"
    var page1Element = document.querySelector('#gmt_browse[page-subtype="news"]');
    if (page1Element) {
        page1Element.style.display = 'none';
    }

    var page2Element = document.querySelector('#gmt_browse[page-subtype="changelog"]');
    if (page2Element) {
        page2Element.style.display = 'none';
    }

    var page3Element = document.querySelector('#gmt_browse[page-subtype="downloads"]');
    if (page3Element) {
        page3Element.style.display = 'none';
    }

    var page4Element = document.querySelector('#gmt_browse[page-subtype="about"]');
    if (page4Element) {
        page4Element.style.display = 'none';
    }

    var page5Element = document.querySelector('#gmt_browse[page-subtype="gamemodes"]');
    if (page5Element) {
        page5Element.style.display = 'none';
    }

    var page6Element = document.querySelector('#gmt_browse[page-subtype="status"]');
    if (page6Element) {
        page6Element.style.display = 'none';
    }

    var page7Element = document.querySelector('#gmt_browse[page-subtype="staff"]');
    if (page7Element) {
        page7Element.style.display = 'none';
    }

    // Show active element with id="gmt_browse"
    var activeElement = document.querySelector('#gmt_browse[page-subtype="faq"]');
    if (activeElement) {
        activeElement.style.display = 'block';
    }

    // Add the "active" class to the button with active page
    var activeButton = document.querySelector('#faq-button');
    if (activeButton) {
        activeButton.classList.add('active');
    }
}