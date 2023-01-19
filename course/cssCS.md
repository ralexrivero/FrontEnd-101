# CSS cheetsheet

## Tabla de contenido

- [guia rapida](#guia_rapida)
- [selectores](#selectores)
- [propiedades](#propiedades)
- [colores](#colores)
- [unidades](#unidades)
- [tipografía](#tipografía)
- [texto](#texto)
- [tamaño de elementos](#tamaños)
- [espaciado](#espaciado)
- [posicionamiento](#posicionamiento)
- [fondos](#fondos)
- [display](#display)
- [indice](#indice)
- [desbordamiento](#desbordamiento)
- [transformaciones](#transformaciones)
- [hover](#hover)
- [animaciones](#animaciones)
- [recursos](#recursos)
- [frameworks](#frameworks)

## Guia_rapida

CSS es un lenguaje de estilos que se utiliza para darle estilo a un documento HTML.
Define el aspecto visual de un documento HTML.

- `color` color del texto
- `background-color` color de fondo
- `font-family` tipo de fuente
- `font-size` tamaño de la fuente
- `font-weight` grosor de la fuente
- `margin` margen
- `padding` relleno
- `border` borde
- `width` ancho
- `height` alto
- `display` tipo de display (`block`, `inline`, `inline-block`, `none`)
- `position` posicion (`static`, `relative`, `absolute`, `fixed`)
  - `top` posicion superior
  - `right` posicion derecha
  - `bottom` posicion inferior
  - `left` posicion izquierda
- `float` flotar (`left`, `right`, `none`)
- `clear` limpiar flotantes (`left`, `right`, `both`, `none`)
- `text-align` alineacion del texto (`left`, `right`, `center`, `justify`)
- `text-decoration` decoracion del texto (`none`, `underline`, `overline`, `line-through`)
- `text-transform` transformacion del texto (`uppercase`, `lowercase`, `capitalize`)
- `text-indent` sangria del texto
- `text-shadow` sombra del texto
- `box-shadow` sombra del elemento
- `opacity` opacidad
- `visibility` visibilidad (`visible`, `hidden`, `collapse`)
- `overflow` desbordamiento (`visible`, `hidden`, `scroll`, `auto`)
- `z-index` indice de profundidad

## Selectores

Los selectores se utilizan para seleccionar los elementos HTML a los que se les aplicará el estilo.

- `Elemento`: Selecciona todos los elementos de un tipo especifico.

```css
p {
  color: red;
}
```

- `ID`: Selecciona un elemento con un ID especifico.

```html
<p id="demo">Este es un parrafo</p>
```

```css
#demo {
  color: red;
}
```

- `Clase`: Selecciona todos los elementos con una clase especifica.

```html
<p class="demo">Este es un parrafo</p>
```

```css
.demo {
  color: red;
}
```

- `Universal`: Selecciona todos los elementos de un documento.

```css
* {
  color: red;
}
```

Un selector universal se utiliza para resetear los estilos de un documento.

```css
* {
  margin: 0;
  padding: 0;
}
```

- `Grupo`: Selecciona todos los elementos que coincidan con uno o mas selectores.

```css
p, h1, h2 {
  color: red;
}
```

## Propiedades

### Colores

Codigos de colores: nombres, hexadecimales, abreviacion hexadecimal, rgb, rgba, hsl, hsla

- `red` #ff0000 #f00 rgb(255, 0, 0) rgba(255, 0, 0, 1) hsl(0, 100%, 50%) hsla(0, 100%, 50%, 1)
- `green` #00ff00 #0f0 rgb(0, 255, 0) rgba(0, 255, 0, 1) hsl(120, 100%, 50%) hsla(120, 100%, 50%, 1)
- `blue` #0000ff #00f rgb(0, 0, 255) rgba(0, 0, 255, 1) hsl(240, 100%, 50%) hsla(240, 100%, 50%, 1)
- `yellow` #ffff00 #ff0 rgb(255, 255, 0) rgba(255, 255, 0, 1) hsl(60, 100%, 50%) hsla(60, 100%, 50%, 1)
- `black` #000000 #000 rgb(0, 0, 0) rgba(0, 0, 0, 1) hsl(0, 0%, 0%) hsla(0, 0%, 0%, 1)
- `white` #ffffff #fff rgb(255, 255, 255) rgba(255, 255, 255, 1) hsl(0, 0%, 100%) hsla(0, 0%, 100%, 1)
- `gray` #808080 #808 rgb(128, 128, 128) rgba(128, 128, 128, 1) hsl(0, 0%, 50%) hsla(0, 0%, 50%, 1)
- `orange` #ffa500 #ffa500 rgb(255, 165, 0) rgba(255, 165, 0, 1) hsl(39, 100%, 50%) hsla(39, 100%, 50%, 1)
- `purple` #800080 #800080 rgb(128, 0, 128) rgba(128, 0, 128, 1) hsl(300, 100%, 25%) hsla(300, 100%, 25%, 1)
- `brown` #a52a2a #a52a2a rgb(165, 42, 42) rgba(165, 42, 42, 1) hsl(0, 59%, 40%) hsla(0, 59%, 40%, 1)
- `pink` #ffc0cb #ffc0cb rgb(255, 192, 203) rgba(255, 192, 203, 1) hsl(350, 100%, 88%) hsla(350, 100%, 88%, 1)
- `cyan` #00ffff #0ff rgb(0, 255, 255) rgba(0, 255, 255, 1) hsl(180, 100%, 50%) hsla(180, 100%, 50%, 1)
- `magenta` #ff00ff #f0f rgb(255, 0, 255) rgba(255, 0, 255, 1) hsl(300, 100%, 50%) hsla(300, 100%, 50%, 1)
- `silver` #c0c0c0 #c0c0c0 rgb(192, 192, 192) rgba(192, 192, 192, 1) hsl(0, 0%, 75%) hsla(0, 0%, 75%, 1)
- `gold` #ffd700 #ffd700 rgb(255, 215, 0) rgba(255, 215, 0, 1) hsl(51, 100%, 50%) hsla(51, 100%, 50%, 1)
- `maroon` #800000 #800000 rgb(128, 0, 0) rgba(128, 0, 0, 1) hsl(0, 100%, 25%) hsla(0, 100%, 25%, 1)
- `olive` #808000 #808000 rgb(128, 128, 0) rgba(128, 128, 0, 1) hsl(60, 100%, 25%) hsla(60, 100%, 25%, 1)
- `lime` #00ff00 #0f0 rgb(0, 255, 0) rgba(0, 255, 0, 1) hsl(120, 100%, 50%) hsla(120, 100%, 50%, 1)
- `teal` #008080 #008080 rgb(0, 128, 128) rgba(0, 128, 128, 1) hsl(180, 100%, 25%) hsla(180, 100%, 25%, 1)
- `navy` #000080 #000080 rgb(0, 0, 128) rgba(0, 0, 128, 1) hsl(240, 100%, 25%) hsla(240, 100%, 25%, 1)
- `indigo` #4b0082 #4b0082 rgb(75, 0, 130) rgba(75, 0, 130, 1) hsl(275, 100%, 25%) hsla(275, 100%, 25%, 1)
- `violet` #ee82ee #ee82ee rgb(238, 130, 238) rgba(238, 130, 238, 1) hsl(300, 76%, 72%) hsla(300, 76%, 72%, 1)
- `turquoise` #40e0d0 #40e0d0 rgb(64, 224, 208) rgba(64, 224, 208, 1) hsl(174, 72%, 56%) hsla(174, 72%, 56%, 1)
- `salmon` #fa8072 #fa8072 rgb(250, 128, 114) rgba(250, 128, 114, 1) hsl(6, 93%, 71%) hsla(6, 93%, 71%, 1)
- `plum` #dda0dd #dda0dd rgb(221, 160, 221) rgba(221, 160, 221, 1) hsl(300, 47%, 76%) hsla(300, 47%, 76%, 1)

### Referencia de colores

Usualmente los colores se representan en hexadecimal en numeros en base 16 desde el 00000 al FFFFFF, donde cada par de numeros representa un color, el primero es el rojo, el segundo es el verde y el tercero es el azul. Tambien se pueden especificar los colores en RGB, donde cada valor es un numero entre 0 y 255, donde 0 es el minimo y 255 es el maximo.
En RGBA la transparencia se puede especificar con un valor entre 0 y 1, donde 0 es transparente y 1 es opaco.

```css
body {
  background-color: #ff0000;
  background-color: rgba(255, 0, 0, 1);
}
```

```css
body {
  background-color: rgb(255, 0, 0);
}
```

```css
body {
  background-color: rgba(255, 0, 0, 0.3);
}
```

- [HTML COLORS](https://htmlcolorcodes.com/es/)
- [CSS COLOR NAMES](https://www.w3schools.com/colors/colors_names.asp)
- [Material Design Color Tool](https://material.io/resources/color/#!/?view.left=0&view.right=0)

## Unidades

### Unidades relativas

Las unidades relativas son unidades que se basan en otras unidades, por ejemplo, en el caso de las unidades de medida de texto, el tamaño de la fuente se basa en el tamaño de la fuente del elemento padre.

- `em` - Unidad relativa de medida de texto, el tamaño de la fuente se basa en el tamaño de la fuente del elemento padre.
- `rem` - Unidad relativa de medida de texto, el tamaño de la fuente se basa en el tamaño de la fuente del elemento raiz.
- `vw` - Unidad relativa de medida de ancho, el tamaño se basa en el ancho de la ventana.
- `vh` - Unidad relativa de medida de alto, el tamaño se basa en el alto de la ventana.
- `vmin` - Unidad relativa de medida de ancho y alto, el tamaño se basa en el ancho o alto de la ventana, el que sea menor.
- `vmax` - Unidad relativa de medida de ancho y alto, el tamaño se basa en el ancho o alto de la ventana, el que sea mayor.
- `%` - Unidad relativa de medida de ancho y alto, el tamaño se basa en un porcentaje del ancho o alto del elemento padre.

### Unidades absolutas

Las unidades absolutas son unidades que no se basan en otras unidades, por ejemplo, en el caso de las unidades de medida de texto, el tamaño de la fuente no se basa en el tamaño de la fuente del elemento padre.

- `px` - Unidad absoluta de medida de texto, el tamaño de la fuente no se basa en el tamaño de la fuente del elemento padre.

## Tipografía

### Fuentes

Las fuentes son los tipos de letra que se pueden usar en un documento, por ejemplo, Arial, Times New Roman, Verdana, etc.

### Familias de fuentes

Las familias de fuentes son un conjunto de fuentes que se pueden usar en un documento, por ejemplo, Arial, Times New Roman, Verdana, etc.
Las familias de fuentes se pueden especificar con la propiedad `font-family`.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

### Tipos de fuentes

Los tipos de fuentes son los estilos de las fuentes, por ejemplo, normal, cursiva, negrita, etc.

```css
body {
  font-style: italic;
}
```

### Tamaño de fuentes

El tamaño de las fuentes se puede especificar en pixeles o en unidades relativas.

```css
body {
  font-size: 1em;
}
```

```css
h1 {
  font-size: 2em;
}
```

### Estilos de fuentes

Los estilos de fuentes se pueden especificar con las propiedades `font-style` y `font-weight`.

```css
body {
  font-style: italic;
  font-weight: bold;
}
```

### Fuentes combinadas

Las fuentes combinadas se pueden especificar con la propiedad `font`.

```css
body {
  font: italic bold 1em Arial, Helvetica, sans-serif;
}
```

## Texto

### Color de texto

- `color`: Define el color del texto.

```css
p {
  color: red;
}
```

### Alineación de texto

La alineación de texto se puede especificar con la propiedad `text-align`.

```css
body {
  text-align: center;
}
```

### Espaciado de texto

El espaciado de texto se puede especificar con la propiedad `letter-spacing`.

```css
body {
  letter-spacing: 2px;
}
```

### Altura de texto

La altura de texto se puede especificar con la propiedad `line-height`.

```css
body {
  line-height: 1.5;
}
```

### Transformación de texto

La transformación de texto se puede especificar con la propiedad `text-transform`.

- `uppercase` - Convierte el texto a mayusculas.
- `lowercase` - Convierte el texto a minusculas.
- `capitalize` - Convierte el texto a mayusculas y minusculas.

```css
body {
  text-transform: uppercase;
}
```

### Decoración de texto

La decoración de texto se puede especificar con la propiedad `text-decoration`.

- `none` - No hay decoración.
- `underline` - Subrayado.
- `overline` - Linea superior.
- `line-through` - Linea tachada.

```css
body {
  text-decoration: underline;
}
```

### Referencia de fuentes

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

## Tamaños

El tamaño de los elementos se puede especificar con las propiedades `width` y `height`.

```css
body {
  width: 100%;
  height: 100%;
}
```

```css
body {
  width: 100px;
  height: 100px;
}
```

```html
<meta viewport="width=device-width, initial-scale=1.0">
```

```css
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  width: 100vmin;
  height: 100vmin;
}
```

```css
body {
  width: 100vmax;
  height: 100vmax;
}
```

## Espaciado

El espaciado esta definido por el margen, el relleno y el borde de un elemento.

### Margenes

- `margin` Los margenes son los espacios entre los bordes de un elemento y los bordes de otros elementos.

```css
body {
  margin: 1em;
}
```

```css
body {
  margin: 1em 2em;
}
```

```css
body {
  margin: 1em 2em 3em 4em;
}
```

```css
body {
  margin: 1em 2em 3em;
}
```

### Relleno

- `padding` El relleno es el espacio entre el borde de un elemento y el contenido de un elemento.

```css
body {
  padding: 1em;
}
```

```css
body {
  padding: 1em 2em;
}
```

```css
body {
  padding: 1em 2em 3em 4em;
}
```

```css
body {
  padding: 1em 2em 3em;
}
```

### Borde

- `border` El borde es el espacio entre el borde de un elemento y el contenido de un elemento.
- `border`: Define el ancho, el estilo y el color de los bordes.
- `border-width`: Define el ancho de los bordes.
- `border-style`: Define el estilo de los bordes.
  - `none` - No hay borde.
  - `hidden` - Borde oculto.
  - `dotted` - Borde punteado.
  - `dashed` - Borde discontinuo.
  - `solid` - Borde sólido.
  - `double` - Borde doble.
  - `groove` - Borde con relieve.
  - `ridge` - Borde con relieve inverso.
- `border-color`: Define el color de los bordes.
- `border-radius`: Define el radio de los bordes.

```css
div {
  border: 1px solid red;
  border-radius: 1em;
}
```

```css
body {
  border: 1px solid #000;
}
```

```css
body {
  border: 1px solid #000;
  border-radius: 1em;
}
```

```css
body {
  border: 1px solid #000;
  border-radius: 1em;
  box-shadow: 1px 1px 1px 1px #000;
}
```

### Referencia de espaciado

- [CSS Margin](https://www.w3schools.com/css/css_margin.asp)

## Posicionamiento

El posicionamiento define la posición de un elemento en la página, por ejemplo, si un elemento esta arriba, abajo, a la izquierda o a la derecha de otro elemento.

### Posicionamiento estático

El posicionamiento estático es el posicionamiento por defecto de los elementos, los elementos se posicionan en el flujo normal del documento.

### Posicionamiento relativo

El posicionamiento relativo es el posicionamiento de los elementos que se basa en el posicionamiento estático, los elementos se posicionan en el flujo normal del documento.

```css
body {
  position: relative;
  top: 1em;
  left: 1em;
}
```

### Posicionamiento absoluto

El posicionamiento absoluto es el posicionamiento de los elementos que se basa en el posicionamiento relativo, los elementos se posicionan en el flujo normal del documento.

```css
body {
  position: absolute;
  top: 1em;
  left: 1em;
}
```

## fondos

Las imagenes se pueden especificar con la propiedad `background-image`.
El color de fondo se puede especificar con la propiedad `background-color`.
El tamaño de fondo se puede especificar con la propiedad `background-size`.
La posición de fondo se puede especificar con la propiedad `background-position`.
La repetición de fondo se puede especificar con la propiedad `background-repeat`.

```css
body {
  background-image: url("https://picsum.photos/200/300");
}
```

```css
body {
  background-image: url("https://picsum.photos/200/300");
  background-repeat: no-repeat;
  background-size: cover;
}
```

```css
body {
  background-image: url("https://picsum.photos/200/300");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
```

- `background-color`: Define el color de fondo.

```css
p {
  background-color: green;
}
```

- `background-image`: Define una imagen de fondo.

```css
div {
  background-image: url("img_tree.png");
}
```

- `background-repeat` : Define si la imagen de fondo se repite o no.

```html
<div class="container-x></div>
```

```css
.container-x {
  height:200px;
  width:200px;
  background-color:pink;
  background-image:url("https://picsum.photos/100/100")
}
```

- `background-attachment`: Define si la imagen de fondo es fija o se mueve con el contenido.

```css
body {
  background-image: url("img_tree.png");
  background-attachment: fixed;
}
```

### ejercicio

Prueba agregar uno a uno los estilos css para ver como cambia el resultado.

```html
<div class="container-x"></div>
```

```css
.container-x {
  height:200px;
  width:200px;
  background-color:pink;
  background-image:url("https://picsum.photos/100/100");
  backgound-repeat:no-repeat;
  background-size:cover;
}
```

## Display

El display define si un elemento es un bloque o un elemento en línea.

### Display block

Los elementos de bloque son elementos que se muestran en una nueva línea, por ejemplo, `<div>`, `<p>`, `<h1>`, `<form>`, etc.

### Display inline

Los elementos en línea son elementos que se muestran en la misma línea, por ejemplo, `<span>`, `<a>`, `<img>`, etc.

### Display none

Los elementos ocultos no se muestran en la página.

```css
body {
  display: none;
}
```

## Indice

- `z-index` : Define el orden de los elementos. El elemento con el mayor valor de `z-index` se muestra por encima de los demás elementos.

```css
body {
  z-index: 1;
}
```

## Desbordamiento

El desbordamiento define si un elemento se desborda o no.

- `overflow` : Define si un elemento se desborda o no.
  - `visible` - El contenido se desborda.
  - `hidden` - El contenido no se desborda.
  - `scroll` - El contenido se desborda y se muestra una barra de desplazamiento.
  - `auto` - El contenido se desborda y se muestra una barra de desplazamiento si es necesario.

```css
body {
  overflow: hidden;
}
```

## Transformaciones

Las transformaciones una transformacion al elemento

- `transform` : Define una transformacion al elemento.
  - `translate` - Desplaza el elemento.
  - `scale` - Cambia el tamaño del elemento.
  - `rotate` - Rota el elemento.
  - `skew` - Inclina el elemento.

```css

```css
body {
  transform: rotate(45deg);
}
```

## Hover

Las pseudoclases hover definen el estado de un elemento cuando el mouse esta sobre el elemento y son muy populares para crear efectos de transición en hipervinculos y botones.

- `hover`

```css
a:hover {
  color: red;
}
```

```html
<a href="#" class="btn btn-primary">Primary</a>
```

```css
.btn {
  padding: 1em;
  border-radius: 1em;
  transition: 0.5s ease-in-out;
}

.btn-primary {
  background-color: #000;
  color: #fff;
}

.btn-primary:hover {
  background-color: #fff;
  color: #000;
}
```

## Animaciones

Un ejemplo de animacion simple utilizando `@keyframes` y `animation`.

```html

```css
body {
  animation: mymove 5s infinite;
}

@keyframes mymove {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}
```

- `float`: Define la posición de un elemento flotante.
- `clear`: Define si un elemento flotante debe estar a la izquierda, a la derecha o a ambos lados.
- `visibility`: Define si un elemento debe ser visible o no.

## Recursos

- [W3 Schools](https://www.w3schools.com/css/default.asp)
- [Mozilla Dev](https://developer.mozilla.org/es/docs/Web/CSS)
- [W3](https://www.w3.org/Style/CSS/Overview.es.html)
- [CSS Tricks](https://css-tricks.com/)
- [CSS Zen Garden](http://www.csszengarden.com/)
- [CSS Reference](https://cssreference.io/)
- [CSS Grid](https://cssgrid.io/)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Froggy](https://flexboxfroggy.com/)

## Frameworks

Algunos frameworks CSS que pueden ser de utilidad.

- [Bootstrap](https://getbootstrap.com/)
- [Materialize](https://materializecss.com/)
- [Bulma](https://bulma.io/)
- [Foundation](https://get.foundation/)
- [Semantic UI](https://semantic-ui.com/)
- [Tailwind](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/)
