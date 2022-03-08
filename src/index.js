const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//VARIABLES

const navLinks = document.querySelectorAll("nav a");
const logoImg = document.querySelector("#logo-img");
const ctaTitle = document.querySelector("h1");
const ctaButton = document.querySelector(".cta button");
const ctaImg = document.querySelector(".cta img");
const featuresTitle = document.querySelector(".top-content .text-content h4")
const featuresText = document.querySelector(".top-content .text-content p")
const aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
const aboutText = aboutTitle.nextElementSibling;
const middleImg = document.querySelector("#middle-img");
const servicesTitle = document.querySelector(".bottom-content .text-content h4")
const servicesText = document.querySelector(".bottom-content .text-content p")
const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
const productText = document.querySelector(".bottom-content .text-content:nth-of-type(2) p")
const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
const visionText = document.querySelector(".bottom-content .text-content:nth-of-type(3) p")
const contact = document.querySelector('section.contact');
const footerLink = document.querySelector('footer a');

//HEADER

//loop through navLinks nodeList variable adding italic class and inserting text from the nav object nested in the siteContent object
navLinks.forEach((link, index) => {
  link.classList.add("italic");
  link.textContent = Object.values(siteContent.nav)[index];
})

//add source for logo img
logoImg.src = "http://localhost:9000/img/logo.png";


//CTA

//add text content for the cta title and button
ctaTitle.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

//add source for cta image
ctaImg.src = "http://localhost:9000/img/cta.png";


//TOP CONTENT

//add text content for features and about
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];


//MIDDLE CONTENT

//add source of middle img
middleImg.src = "http://localhost:9000/img/accent.png";


//BOTTOM CONTENT

//add text content for services, product, and vision
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
servicesText.textContent = siteContent["main-content"]["services-content"];
productTitle.textContent = siteContent["main-content"]["product-h4"];
productText.textContent = siteContent["main-content"]["product-content"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];


//CONTACT

//add text content for contact section
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
contact.querySelector('p:nth-of-type(3)').textContent = siteContent['contact']['email'];


//FOOTER

//add text content for contact section and class of bold
footerLink.textContent = 'Copyright Great Idea! 2021';
footerLink.classList.add('bold');