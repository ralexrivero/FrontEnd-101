# Hyper Text Markup Language

HTML is frame of a web page, it is a structure assembled such as tags and elements. HTML is a markup language that is used to create web pages. It is used to create the structure of the web page. It is used to create the content of the web page. It is used to create the layout of the web page.

The first web page was created in 1991 by Sir Tim Berners Lee. He was working at CERN, the European Organization for Nuclear Research, in Switzerland. He was working on a project to share information between scientists. He was working on a project to share information between scientists in different countries. He was working on a project to share information between scientists in different countries and different institutions.

HTML stands for HyperText Markup Language, Hypertext is text wich contains links to other text, Markup is a set of tags that are used to define the structure of a document.

HTML is a text file with a specific structure that consists of elements and tags, usually with a .html extension.
Each HTML element consists of an opening tag and a closing tag. The opening tag is placed at the beginning of the element, and the closing tag is placed at the end of the element. The content of the element is placed between the opening and closing tags. Most elements are paired with a closing tag, wich has a formward slash before the tag name. Some elements are not paired with a closing tag, and are called empty elements. Empty elements do not have a closing tag.

The HTML specification is maintained by the World Wide Web Consortium (W3C). The W3C is an international community where Member organizations, a full-time staff, and the public work together to develop Web standards.
The current version of HTML is HTML5. HTML5 is the fifth revision of the HTML standard. It is a complete rewrite of the HTML standard. It is a complete rewrite of the HTML standard, and it has been completely redesigned from the previous versions. It has been completely redesigned from the previous versions, and it is not compatible with previous versions of HTML.

## Simple Tags

### Headings

Headings are used to define the structure of the content and disply titles and subtitles on the webpage.

```html
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
```

### Paragraphs

Paragraphs contain text content.

```html
<body>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
</body>
```

### Line Breaks

Line breaks are used to create a new line.

```html
<body>
  <p>This is a paragraph<br>with a line break.</p>
</body>
```

### Horizontal Rules

Horizontal rules are used to create a horizontal line.

```html
<body>
  <p>This is a paragraph.</p>
  <hr>
  <p>This is another paragraph.</p>
</body>
```

### Strong

Strong is used to create bold text, and indicate that a range of text is important.

```html
<body>
  <p>This is a <strong>paragraph</strong>.</p>
</body>
```

### Bold

Bold is used to create bold text and draw the reader's attention to the element's contents. It is not used to indicate that a range of text is important, only to indicate that the text is of a different type than surrounding text.

```html
<body>
  <p>This is a <b>paragraph</b>.</p>
</body>
```

### Emphasis

Emphasis is used to create italic text, and indicate that a range of text is of a different type than surrounding text.

```html
<body>
  <p>This is a <em>paragraph</em>.</p>
</body>
```

### Italic

Italic is used to offset a range of text.

```html
<body>
  <p>This is a <i>paragraph</i>.</p>
</body>
```

### Emphasis vs Italic

Emphasis is used to indicate that a range of text is of a different type than surrounding text. Italic is used to offset a range of text, used for technical terms, titles, a thought or a phrase from another language.
By default both tags are displayed with the same visual effect in the web browser, but they have different meanings.

### Lists

There are two types of lists: ordered and unordered.

Unordered lists are used to create a list of items, where the order of the items does not matter.

```html
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
```

Ordered lists are used to create a list of items, where the order of the items does matter.

```html
<body>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</body>
```

### Div tags

A `<div>` tag is used to group elements together in a block-level box.

```html
<body>
  <div>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </div>
</body>
```

### Comments

Comments are used to add comments to the HTML code.

```html
<body>
  <!-- This is a comment -->
  <p>This is a paragraph.</p>
</body>
```

The comments are not displayed in the web browser, and their purpose is to add notes for the developers team.

### Anchor tags

Websites consist of mutiple webpages linked together. Anchor tags are used to create links between webpages.

```html
<body>
  <a href="https://www.google.com">Google</a>
</body>
```

### images

The `<img>` tag is used to embed an image in an HTML page. The attribute `src` specifies the path to the image.

```html
<body>
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" width="104" height="142">
</body>
```

- image attributes:
  - `src` - Specifies the path to the image
  - `alt` - Specifies an alternate text for the image, if the image cannot be displayed and for accessibility purposes, specially for screen readers.
  - `width` - Specifies the width of the image
  - `height` - Specifies the height of the image
  - `align` - Specifies the alignment of the image
  - `border` - Specifies whether or not to display a border around the image
  - `target` - Specifies where to open the linked document
  - `_blank` - Specifies that the linked document is to be opened in a new window or tab
    - `_self` - Specifies that the linked document is to be opened in the same frame as it was clicked (this is default)
    - `_parent` - Specifies that the linked document is to be opened in the parent frame
    - `_top` - Specifies that the linked document is to be opened in the full body of the window
    - `framename` - Specifies that the linked document is to be opened in a named frame

### tables

Allow to neatly organize content into rows and columns.

```html
<body>
  <table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </table>
</body>
```

### forms

Forms are extremely useful for collecting user input. Used for login, registration, contact forms, etc.

```html
<body>
  <form action="/action_page.php">
    First name:<br>
    <input type="text" name="firstname" value="Mickey">
    <br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse">
    <br><br>
    <input type="submit" value="Submit">
  </form>
</body>
```

- form attributes:
  - `action` - Specifies where to send the form-data when a form is submitted
  - `method` - Specifies how to send the form-data (which HTTP method to use)
    - `get` - The form-data will be added to the URL in name/value pairs
    - `post` - The form-data will be sent in the HTTP body

- input types
  - `text` - Defines a one-line text input field
  - `password` - Defines a password field (characters are masked)
  - `radio` - Defines a radio button (for selecting one of many choices)
  - `checkbox` - Defines a checkbox (for selecting zero or more of many choices)
  - `submit` - Defines a submit button (for submitting the form)
  - `reset` - Defines a reset button (for resetting the form)
  - `button` - Defines a clickable button (for extra functionality in forms)
  - `file` - Defines a file-select field and a "Browse" button (for uploading files)
  - `hidden` - Defines a hidden input field
  - `image` - Defines an image as the submit button
  - `email` - Defines a field for an e-mail address
  - `number` - Defines a field for entering a number
  - `range` - Defines a control for entering a number whose exact value is not important (like a slider control)
  - `search` - Defines a text field for entering a search string
  - `tel` - Defines a field for entering a telephone number
  - `url` - Defines a field for entering a URL
  - `date` - Defines a field for entering a date
  - `datetime-local` - Defines a field for entering a date and time (with no time zone)
  - `month` - Defines a field for entering a month and year
  - `time` - Defines a field for entering a time (no time zone)
  - `week` - Defines a field for entering a week and year
  - `textarea` - Defines a multiline input control (text area)
  - `select` - Defines a drop-down list

## DOM

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

DOM is as simple as a tree structure or model of the objects in the HTML document. The DOM is a standard for how to get, change, add, or delete HTML elements.
Using JavaScript we can modify the DOM to make the page dynamic.

## Web accesibility

Web accessibility means that people with disabilities can perceive, understand, navigate, and interact with the Web, and that they can contribute to the Web. Web accessibility also benefits others, including older people with changing abilities due to aging.
As a web developer, it is important to try to ensure that everyone can access and enyou the content you create.

WAI (Web Accessibility Initiative) is a group of people who work together to make the web accessible to people with disabilities.

Examples of accessibility are screen readers, which are software programs that read out the content of a computer screen to a user. Other examples are braille displays, which translate the text on a computer screen into braille.
Subtitles are also a form of accessibility, as they allow people who are deaf or hard of hearing to understand the content of a video.
Speach recognition software is another example of accessibility, as it allows people who cannot type to use a computer.

Structure and semantics are important for accessibility. For example, a `<div>` element does not convey any meaning to the user, whereas a `<button>` element clearly indicates that the user can interact with it.

ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

Additional Resources

Learn more

Here is a list of resources that may be helpful as you continue your learning journey.

HTML Elements Reference (Mozilla)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

The Form Element (Mozilla)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

What is the Document Object Model? (W3C)

https://www.w3.org/TR/WD-DOM/introduction.html

ARIA in HTML (W3C via Github)

https://w3c.github.io/html-aria/

ARIA Authoring Practices  (W3C)

https://www.w3.org/TR/wai-aria-practices-1.2/
