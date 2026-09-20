# CHAIRMAN Barber Studio

Thrive Africa Final Capstone Project

Student name: Onipayede John Kwaku

Project type: Individual frontend development project

Technologies: HTML, CSS and JavaScript

## Project overview

I chose a barber shop for my final capstone project because it gave me the opportunity to design a website for a local service business. CHAIRMAN Barber Studio is a single-page website focused on haircuts, beard care and grooming in Tutuka, Obuasi.

My aim was to make it easy for customers to explore the services, view hairstyle inspiration and make an enquiry through WhatsApp. I wanted the page to feel simple, attractive and suitable for customers using phones, tablets or computers.

## Business details

- Business name: CHAIRMAN Barber Studio
- Location: Obuasi, Ashanti Region, Ghana
- Service area: Tutuka
- Email: [onipayedejohn11@gmail.com](mailto:onipayedejohn11@gmail.com)
- Telephone: [024 969 8992](tel:+233249698992)
- WhatsApp: [Chat with CHAIRMAN](https://wa.me/233249698992)

The service prices and durations are examples for the capstone. The photographs are stock images used for style inspiration, rather than photographs of the shop's customers.

## Folder structure

- index.html: Page content and structure.
- style.css: Styling and responsive layouts.
- script.js: Interactive features.
- fonts.css: Local font declarations.
- images/: Photographs and favicon.
- fonts/: Downloaded fonts and licence files.
- moodboard/: Design reference notes and layout sketch.
- screenshots/: Desktop, tablet and mobile screenshots.
- README.md: Project documentation.

## How I organised the project

I created the project folder and opened it in Visual Studio Code. Inside the folder, I created separate HTML, CSS and JavaScript files. I linked fonts.css and style.css using link elements in the HTML head. I linked script.js using a script element with the defer attribute.

I used HTML to organise the content, CSS to control the appearance and layout, and JavaScript for the interactive features. Keeping these files separate made the project easier to follow and update.

I organised the photographs in the images folder and the downloaded font files in the fonts folder. The site uses relative paths so these assets can load locally. The SVG icons are defined directly in the HTML and reused across the page.

## Page sections

- Hero: Business name, introduction, main action button and a five-image carousel with service descriptions.
- Our services: The signature cut, the beard ritual and the full reset, with descriptions, example prices and durations.
- How we work: Three steps explaining the enquiry, consultation and grooming experience.
- Recent work / style gallery: Three photographic examples with captions and an enlarged image view.
- Contact us: Contact details and a form for the customer's name, email, service, preferred date, location and message.
- Footer: Business information, contact links, copyright and quick links to the main sections.

## Design choices and inspiration

I chose a charcoal, copper and light neutral colour scheme to give the page a premium appearance without making it too busy. Large headings establish a clear hierarchy, while the photographs keep the focus on barbering. I selected images featuring Black barbers and clients to better suit the intended audience.

The design references for the project include:

- [Refero](https://styles.refero.design/style/ac86af87-6f60-42a2-b805-87a168792e55): restrained use of an accent colour and clear visual hierarchy.
- [Mobbin](https://mobbin.com/): public examples of interface controls and user flows.
- [Dribbble](https://dribbble.com/search/barbershop-landing-page): barber landing-page compositions and service layouts.
- [Landbook](https://land-book.com/): large typography, photographic layouts and organised footers.
- [Behance: Barbershop website and visual identity](https://www.behance.net/gallery/181292443/Barbershop-website-design-visual-identity): consistent presentation of a premium barber brand.

These references informed the design direction. The project does not use a downloaded website template. Reference notes and a layout sketch are in moodboard/. External inspiration screenshots are not yet included.

## Interactive features

Hero carousel:

The carousel contains five images and changes every four seconds. Each slide includes a service description. Customers can move between photographs using the arrows or slide selectors, or pause the slideshow to read the text. Rotation also pauses while the controls have keyboard focus or the pointer is over the carousel. Reduced-motion preferences are respected.

Mobile navigation:

On smaller screens, the navigation changes to a menu button. Selecting a section closes the menu and moves to that part of the page.

Service selection and gallery:

Selecting a service card fills in the matching option in the enquiry form. Selecting a gallery photograph opens a larger view, with previous, next and close controls. The gallery also supports keyboard navigation.

Customer location:

The form includes Abombe, Tutuka, Kunka, Boete, Mangoase and Bongoberi. Choosing Others – specify reveals a field for another location. Selecting a listed area again hides and clears that field.

Form validation and WhatsApp:

The form checks the required details and displays feedback when information is missing or invalid. A preferred date cannot be in the past.

After validation, the customer can review an enquiry summary and choose Continue on WhatsApp. This opens a prepared message containing the selected service, location and other enquiry details. The customer must press Send in WhatsApp. The website itself does not send messages, store customer information or confirm appointments.

The separate Join us on WhatsApp link opens a chat requesting information about the WhatsApp platform. It is not a direct group invitation.

## Fonts, images and icons

The locally stored fonts are [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) for headings and [DM Sans](https://fonts.google.com/specimen/DM+Sans) for body text. Their licence files are included in fonts/.

The photographs are from [Unsplash](https://unsplash.com/license):

- barber-1.jpg: Ace Maxwell. [Photograph](https://unsplash.com/photos/a-man-getting-his-hair-cut-by-a-barber-alPVAV3zMMI).
- barber-2.jpg: Alex Mihai C. [Photograph](https://unsplash.com/photos/man-shaving-lying-man-FWgYghZrVqU).
- barber-3.jpg: Ali Mkumbwa. [Photograph](https://unsplash.com/photos/PKcZhrQMqNo).
- barber-4.jpg: Rinald Rolle. [Photograph](https://unsplash.com/photos/_49_L5KmMq4).
- barber-5.jpg: erik reardon. [Photograph](https://unsplash.com/photos/2ZjKLOe7vOI).

The SVG interface icons are inline project graphics, not downloaded icon-library assets.

## Running and testing

Open the project folder in VS Code, then open index.html in a browser. Live Server can also be used. No package installation or build command is required.

Local Chromium checks covered widths of 320, 375, 768, 1366 and 1920 pixels. No horizontal overflow was found at these widths, and all local images loaded. The menu, gallery, service selection, location fields, form validation, WhatsApp message construction and four-second carousel were checked. No messages were sent during testing.

Screenshots of the finished layouts:

- [Desktop, 1366px](screenshots/desktop-1366.png)
- [Tablet, 768px](screenshots/tablet-768.png)
- [Mobile, 375px](screenshots/mobile-375.png)

Testing on other browsers and physical devices remains a final check before submission.

## Reflection

One design challenge was balancing large photographs and detailed service descriptions on smaller screens. The responsive layout stacks the sections on mobile and adjusts spacing and text sizes to keep the page readable.

The enquiry flow also needed to remain consistent when a customer changed their details. Clearing the previous preview prevents an outdated WhatsApp message from being reused. These parts of the project bring together page structure, responsive styling and JavaScript event handling.

A future improvement would be a booking system that shows available appointment times and confirms reservations.

## Project links

- GitHub repository: Not yet added.
- Live website: Not yet added.

