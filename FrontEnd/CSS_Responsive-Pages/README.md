# Frontend: Use CSS to create responsive pages

## CSS includes media queries with mobile-first breakpoints 📲 (min-width instead of max-width)

>* A mobile-first approach to styling means that styles are applied first to mobile devices. Advanced styles and other overrides for larger screens are then added into the stylesheet via media queries.

>* Code for larger screens is usualy more complicated than the codes for smalller screens; therefore, coding mobile first can help simplify the code.

> **min-width vs max-width**

> min-width queries are used to apply specific styling above a certain size

> if:
   body {
    background: Olive;
 }

>  @ media (min-width: 400px) {
    body {
      background: FloralWhite;
    }
  }

> *if the screen reaches 400px and / above , the background color becomes FloralWhite.*

> max-width queries are most valuable when you want styles to be implemented below a certain viewport size

> if:
   body {
   background: Olive;
 }

>  @ media (max-width: 400px) {
    body {
      background: HoneyDew;
    }
  }

> *if the screen goes below 400px, the background color becomes HoneyDew.*

> **A combination of both min-width and max-width media queries can help to constrain the styles between two different viewport sizes**

>*Special thanks to [Zell](https://zellwk.com/blog/how-to-write-mobile-first-css/)*

## Uses flexbox / percentage-based widths to show content flowing to a grid

## Includes meta tags to set the viewport correctly
