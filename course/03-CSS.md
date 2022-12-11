# Cascading Style Sheets (CSS)

## Selecting and Styling Elements

CSS is a language for describing the presentation of web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.
CSS tells the web browser how to display html eleents on screen or paper.

### CSS Syntax

CSS consists of a series of rules. Each rule contains a selector and a declaration block. The selector indicates which element the rule applies to. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.

```css
selector {
  property: value;
}
```

### CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

```css
p {
  color: red;
}
```

There are many types of selector available that allow developers to be as broad or as specific as they need to be when selecting HTML elements to apply CSS styles to.

Element Selector allows to select HTML elements based on their element type. When selecting elements by element type, the selector will match all elements of that type in the document.

```css
a {
  color: oceanblue;
}
```

ID selector allows to select HTML elements based on their ID attribute. When selecting elements by ID, the selector will match the element with the specified ID attribute. The ID selectors are prefixed with a # character.

```html
<span id="latest">Newest!</span>
```

```css
#latest {
    background-color: yellow;
}
```

Class selector allows to select HTML elements based on their class attribute. When selecting elements by class, the selector will match all elements with the specified class attribute. The class selectors are prefixed with a `.` character.

```html
<a class="navigation">Go Back</a>
<a class="navigation">Go Forward</a>
```

```css
.navigation {
  margin: 10px;
}
```

Descendant selectors are used to select HTML elements that are contained within another selector.

```html
<div class="container">
  <p>Some text</p>
</div>
```

```css
.container p {
  color: red;
}
```

Child selectors are more specific than descendant selectors. They are used to select HTML elements that are direct children of another selector (the parent).

```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
```

```css
#blog > h1 {
  color: blue;
}
```

This selector will only match the first `h1` element inside the `#blog` element, and this will not go beyond a single depth level.

Pseudo-class selectors allow to select HTML elements based on their state. For example, the `:hover` pseudo-class selector can be used to select links when the mouse cursor is over them.

```css
a:hover {
  color: orange;
}
```

Pseudo-class is useful for creating visual effects when a user interacts with an element.

### declaration block

A declaration block is a group of one or more declarations surrounded by curly braces. A declaration is a property-value pair. A property is a category of style that you want to apply to the selected elements. A value is the setting you want to use for the chosen property.
