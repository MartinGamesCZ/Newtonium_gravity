# Newtonium Gravity
--- 
**MADE FOR NEWTONIUM FRAMEWORK**<br />
Should be only used with Newtonium framework.

---

Custom React Renderer for building native desktop applications with React and Newtonium.

Mainly made for (and part of) [Newtonium](https://github.com/MartinGamesCZ/Newtonium) framework. **Will be slowly implemented into Newtonium.**

## Components
- Window
- Dialog
- Button
- Text
- Layout

## Unsuported features
- Updating anything except text-typed and number-typed properties when re-rendering (for example setting ReactNode through useState)

## Supported hooks
- useState 
- useEffect

## Styles
Styles are written in JSON format, similar to CSS-in-JS libraries. It is then converted to CSS and applied to the component.

Implemented styles [here](docs/css_coverage.md) 