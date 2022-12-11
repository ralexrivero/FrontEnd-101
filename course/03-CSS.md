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

### Text and color in CSS

The `color` property is used to set the color of text.

```css
span {
    color: aliceblue;
}
```

There are five main ways to specify colors in CSS:

- **Hex codes** These are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: `#ee3e80`.
- **RGB values** These express colors in terms of how much red, green and blue are used to make it up. For example: `rgb(100,100,90)`.
- **RGBA** This is an extension of RGB color model with an alpha channel - which specifies the opacity for a color. The alpha channel is a number between 0.0 (fully transparent) and 1.0 (fully opaque). For example: `rgba(255, 99, 71, 0.5)`.
- **HSL** This stands for hue, saturation, and lightness. HSL color values are specified with: the hue is a degree on the color wheel from 0 to 360, 0 being red, 120 being green, 240 being blue; saturation is a percentage value; 0% being a shade of gray and 100% being the full color; lightness is also a percentage; 0% being black, 50% no change, 100% being white. For example: `hsl(94, 68%, 55%)`.
- **HSLA** This is an extension of HSL color model with an alpha channel - which specifies the opacity for a color. The alpha channel is a number between 0.0 (fully transparent) and 1.0 (fully opaque). For example: `hsla(94, 68%, 55%, 0.5)`.
- **Color names** There are 147 predefined color names that are recognized by browsers. For example: `DarkCyan`.
- **CurrentColor** This keyword represents the value of the color property of the element it is applied to. For example: `color: currentColor;`.

RGB is a color model that ads the color red (R), green (G), and blue (B) to create all other colors. The RGB color model is an additive color model, which means that when you add different amounts of red, green, and blue, you get different colors, based on how human eyes sees colors.
Each value can be an integer between 0 and 255 or a percentage from 0% to 100%.
To specify a color in RGB values, need to use the `rgb` keyword.

```css
p {
  color: rgb(128, 0, 0);
}
```

RGBA is an extension of RGB color model with an alpha channel - which specifies the opacity for a color. The alpha channel is a number between 0.0 (fully transparent) and 1.0 (fully opaque).
The RGBA value is specified using the `rgba` keyword.

```css
p {
  color: rgba(128, 0, 0, 0.5);
}
```

HSL is a color model that adds the color hue (H), saturation (S), and lightness (L) to create all other colors. The Hue value is the degree value on the color wheel from 0 to 360, 0 being red, 120 being green, 240 being blue. The Saturation value is a percentage value; 0% being a shade of gray and 100% being the full color. The Lightness value is also a percentage; 0% being black, 50% no change, 100% being white.
Saturation is the distance from the center of the color wheel to the color itself. The higher the saturation, the more vivid the color.
Lightness is the distance form the bottom the cylinder to the top.

```css
p {
  color: hsl(120, 100%, 50%);
}
```

HSLA is an extension of HSL color model with an alpha channel - which specifies the opacity for a color. The alpha channel is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

```css
p {
  color: hsla(120, 100%, 50%, 0.5);
}
```

Hex codes are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: `#ee3e80`.

```css
p {
  color: #ee3e80;
}
```

Predefined color names are 147 predefined color names that are recognized by browsers. For example: `DarkCyan`.

```css
p {
  color: DarkCyan;
}
```

### Text font and Size

A font is a collection of text characters written in a specific style and size. To set a font for an element, use the `font-family` property.


The `font-size` property is used to specify the size of a font. The value of this property can be specified in pixels, percentages, or ems.

```css
p {
  font-family: "Courrier New", monospace;
    font-size: 16px;
}
```

Text transform is useful to ensure the correct capitalization of text. The `text-transform` property is used to specify the capitalization of text.

```css
p {
  text-transform: uppercase;
}
```

The most common values are: `uppercase`, `lowercase`, `capitalize`, `none`.

The `text-decoration` property is used to specify the decoration added to text. The most common values are: `underline`, `overline`, `line-through`, `none`.

```css
p {
  text-decoration: underline;
}
```

To set the color, thickness and style of the decoration, use the `text-decoration-color`, `text-decoration-thickness`, and `text-decoration-style` properties.

```css
p {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  text-decoration-style: wavy;
}
```

```css
p {
  text-decoration: underline red 2px wavy;
}
```

### Box model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

Content size is controlled by de CSS rules `width` and `height`.

- **width** The width property is used to set the width of an element. The value of this property can be specified in pixels, percentages, or ems.
- **height** The height property is used to set the height of an element. The value of this property can be specified in pixels, percentages, or ems.
- **min-width** The min-width property is used to set the minimum width of an element. The value of this property can be specified in pixels, percentages, or ems.
- **max-width** The max-width property is used to set the maximum width of an element. The value of this property can be specified in pixels, percentages, or ems.
- **min-height** The min-height property is used to set the minimum height of an element. The value of this property can be specified in pixels, percentages, or ems.
- **max-height** The max-height property is used to set the maximum height of an element. The value of this property can be specified in pixels, percentages, or ems.

```css
p {
  width: 100px;
  height: 100px;
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
  max-height: 100px;
}
```

The padding extends the content size of an element, and consist of the `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties.

Border is the border around an element, and consist of the `border-top`, `border-right`, `border-bottom`, and `border-left` properties.
There are different types of borders: `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, `hidden`.

```css
h1 {
    boder-width: medium;
}
```

- `border-width`: thin;
- `border-width`: medium;
- `border-width`: thick;

Margin is the space outside the border of an element, and consist of the `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties. Margin separates elements from his neighbors elements.

To specify the margin of all four sides of an element, use the `margin` property, or the `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties.

```css
p {
  margin: 10px;
}
```

## Document Flow

Block vs inline elements.
The document flow is the way the browser displays the elements on the page.
Block elements are displayed using the full width of the page, and are displayed one below the other, like a stack of blocks.
Inline elements only ocuppy the the width and height of their content, and are displayed one next to the other, like a line of text.

Block elments

- `div`
- `form`
- `h1` to `h6`

Inline elements

- `span`
- `a`
- `p`
- `img`
- `input`
- `label`
- `b`
- `i`
- `em`

## Alignment

Text alignment is used to align the text inside an element. The `text-align` property is used to specify the horizontal alignment of text inside an element.

Text alignment can be set to: `left`, `right`, `center`, `justify`.

```css
p {
  text-align: center;
}
```

To align HTML elements needs to consider the box model and document flow. Aligning an HTML element is done by changing the properties of tis box model and how it impacts the document flow.

HTML center alignment is done by setting the `margin` property to `auto` on the left and right sides.

```html
<div class="parent">
  <div class="child">
  </div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.child {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: auto;
}
```

HTML element left / right alignment is done by setting the `float` property to `left` or `right` on the element.

```html
<div class="parent">
  <div class="child">
  </div>
  <div class="child">
  </div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.child {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  float: left;
}
```
