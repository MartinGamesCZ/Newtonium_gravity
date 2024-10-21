# Newtonium Gravity
Custom React Renderer for building native desktop applications with React and Newtonium.

Mainly made for (and part of) [Newtonium](https://github.com/MartinGamesCZ/Newtonium) framework. **Will be slowly implemented into Newtonium.**

## Components
- Window
- Dialog
- Button
- Text
- Layout

## Hooks
I hate this more than myself. It is a pain to implement, because of some issues with react and react-reconciler. Will implement in future, when I am happier in life and mentaly stable enough for this. Wasted 4 days on this (just because react and react-reconciler refuse to communicate properly).

**For now, did my own implementation:**

### useRef
Similar to useRef in React, but passed to the `reference` prop of the component.

## Styles
Styles are written in JSON format, similar to CSS-in-JS libraries. It is then converted to CSS and applied to the component.

Implemented styles [here](docs/css_coverage.md) 