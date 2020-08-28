# Latest
Awesome scss styles for web properties.

## File Structure
This README file documents the specifics of the `latest` version. This project follows the SASS/CSS best practices as defined by the [Sass Guidelines](https://sass-guidelin.es/#architecture).

~~~
version/
|
|– assets/
|   |
|   `- */ *  # Asset Directories and Files
|
|– css/
|   |
|   |– */ *  # SCSS Import/ Directories
|   |
|   |- platforms/ *                # Platform Specific styles
|   |
|   |- platforms/ campaign.css     # Compiled CSS
|   |- platforms/ campaign.min.css # Compiled and Minified CSS
|   |- platforms/ campaign.scss    # SCSS file
|   |
|   |- themes/ *            # Property Specific Styles
|   |
|   |- themes/ armc.css     # Compiled CSS
|   |- themes/ armc.min.css # Compiled and Minified CSS
|   |- themes/ armc.scss    # SCSS file
|   |
|   |– main.css     # Compiled CSS
|   |– main.min.css # Compiled and Minified CSS
|   `– main.scss    # SCSS file
|
|– js/
|   |
|   `– *.js         # JavaScript files
|
`– README.md
~~~

## Supported Platforms

- `campaign` - CONGO Service Line campaign landing pages

## Supported Themes

- `armc` - Akien Regional Medical Center (HERO-Digital, _cool_)

## Supported Design Componenets

- Hero
- Deck
- Duo
- Banner
- Alert
- Location
- Infograph
- Tabs
- Accordion
- Table
- Testimonial
- Subscription
- Gallery (static and rotating)
- WYSIWYG
- !TBD - Carousel vs Slider - TBD!

## JavaScript Functions

- Smooth Scroll

## CDN Styles
[gitcdn.link](https://min.gitcdn.link/ "CDN for GitRepos")

### Design Framework
- **Framework**, main [main.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/main.min.css "universal building blocks")

add to HTML `<head>`

`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`

`<link rel="stylesheet" type="text/css" href="https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/main.min.css">`

- **Platform**, campaign [campaign.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/platforms/campaign.min.css "acutecare-initiatives.com")
& assest files [latest/assets](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/assets/ "assest files")

`<link rel="stylesheet" type="text/css" href="https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/platforms/campaign.min.css">`

- **Theme**, armc [armc.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/themes/armc.min.css "acutecare-initiatives.com/armc-cardio/")
& assest files [latest/assets](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/assets/ "assest files")

`<link rel="stylesheet" type="text/css" href="https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/themes/armc.min.css">`


### JavaScript
Add specific javascript functions to properties, specific pages or design components.
[smooth-scroll](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/js/smooth-scroll.js)

within the HTML `<body>` after the closing `</footer>` tag.

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

`<script src="https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/js/smooth-scroll.js"></script>`

## Global README & License
Currently you are reading a README file for this version of styles, see the [global README](../README.md) file for additional details. [MIT License](../LICENSE)