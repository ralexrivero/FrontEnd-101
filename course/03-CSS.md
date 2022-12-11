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

### declaration block

A declaration block is a group of one or more declarations surrounded by curly braces. A declaration is a property-value pair. A property is a category of style that you want to apply to the selected elements. A value is the setting you want to use for the chosen property.

