# Universal Styles
Awesome scss & JavaScript styles for UHS _inc_ web properties. These **styles** define the visual display, responsive rules and user interactions for design components, specific web platforms and properties; a Design System.

## BEM Philosophy
A design philosophy that focuses on establishing a logical structure (Design System) and method of application (Design Framework):

* **B**lock    - parent block container (the lease specific, _universal_)

* **E**lement  - child element(s) contained within the parent block container (specific to a child of `block`, a _platform_ and a properties' _theme_)

* **M**odifier - alter block and/or element(s) to indicate individual or group states (the most specific, a set of `element`)

### Applied

**B.** E. M.

Universal building **b**locks of the Design System, creating a _Design Framework_
[main.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/main.min.css "universal building blocks")

B. **E. M.**

**Platform** specific **e**lements and **m**odifcations of `main`, creating a `platform`. 
[campaign.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/platforms/campaign.min.css "acutecare-initiatives.com")

**Property** specific **e**lements and **m**odifcations of `platform`, creating a `theme`. 
[armc.min.css](https://min.gitcdn.link/repo/Universal-Health-Services/styles/master/latest/css/themes/armc.min.css "acutecare-initiatives.com/armc-cardio/")

All platforms share only one instance of a properties' theme.

## Evolution
The design components and user interactions defined within this project are intended to evolve over time, so `latest` is the next proposed version of `v#`. `v#` is a complete collection of scss, css and javascript, collectivly all version are described as 'styles'.

### File Structure
This README file documents the overall structure and common features shared by all style versions. Each version has its own README file documenting the specifics of that particular style's version.

~~~
styles/
|
|– latest/
|   |
|   |– assets/   # fonts icons and images
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for latest
|
|– v#/
|   |
|   |– assets/   # fonts icons and images
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for v#
|
|- .gitignore
|- LICENSE
|– README.md
`- RESOURCES.md
~~~

#### `latest/`
The directory containing the most current version of a style undergoing development and testing. Using this style in a solution is risky, it is better to use a particular version to better manage updates. Learn more about the current version of [latest](./latest/README.md).

#### `v#/`
The directory containing the version # of a style, the highest number being the most recient fully tested and supported version.

##### `latest/` to `v(n+1)/`, where `v#/` = `v(n)`
When `latest` has been fully tested and is ready to be published, the directory is duplicated and renamed to `/v(n+1)`. This replaces `/v(n)` as the most current version of a style. A website can then be updated to use the new and current `/v(n+1)` or even `latest` following a testing and redeployment process. Any website using an older style version `/v(n-i)`, where i > 0, of the style rules will not be broken.

This structure builds on the best practices as defined by [Sass Guidelines](https://sass-guidelin.es/#architecture)

### Getting Started
You will need a scss compiler to compile your changes. I am using Microsoft's [Visual Studio Code](https://code.visualstudio.com/) with the [Easy Sass Extention](https://marketplace.visualstudio.com/items?itemName=spook.easysass) by *Wojciech Sura*.

To help, here is a collection of [resources](./RESOURCES.md).

## License
This project is licensed under the MIT License - see the [MIT License](./LICENSE) file for details.
