# HTML cheet sheet

## Tabla de contenidos

- [Guia_rapida](#guia_rapida)
- [Secciones](#secciones)
- [Elementos](#elementos)
- [Atributos](#atributos)
- [Comentarios](#comentarios)
- [Estructura](#estructura)
- [Encabezados](#encabezados)
- [Parrafos](#parrafos)
- [Listas](#listas)
- [Enlaces](#enlaces)
- [Imagenes](#imagenes)
- [Tablas](#tablas)
- [Formularios](#formularios)
- [Semantica](#semantica)
- [Recursos](#recursos)

## Guia_rapida

- `<html>` - documento HTML
- `<head>` - informacion sobre el documento
- `<title>` - titulo del documento
- `<body>` - cuerpo del documento
- `<h1>` - encabezado de nivel 1
- `<p>` - parrafo
- `<br>` - salto de linea
- `<hr>` - linea horizontal
- `<a>` - Define un enlace
- `<img>` - imagen
- `<table>` - tabla
- `<tr>` - fila de una tabla
- `<th>` - celda de encabezado de una tabla
- `<td>` - celda de una tabla
- `<form>` - formulario
- `<input>` - campo de entrada
- `<textarea>` - area de texto
- `<button>` - boton
- `<select>` -  lista de seleccion
- `<option>` - opcion de una lista de seleccion
- `<label>` - etiqueta para un elemento de formulario
- `<fieldset>` - grupo de elementos de formulario
- `<legend>` - titulo para un elemento fieldset
- `<div>` - seccion en un documento
- `<span>` - fragmento en un documento
- `<header>` - encabezado para un documento o seccion
- `<footer>` - pie de pagina para un documento o seccion
- `<nav>` - seccion de navegacion
- `<article>` - articulo
- `<section>` - seccion
- `<aside>` - contenido relacionado
- `<details>` - detalles adicionales que el usuario puede ver o ocultar
- `<summary>` - encabezado para un elemento details
- `<main>` - contenido principal de un documento
- `<time>` - fecha/hora
- `<script>` - script
- `<noscript>` - texto alternativo para contenido que no soporta scripts
- `<cite>` - titulo de una obra
- `<q>` - cita corta
- `<blockquote>` - cita larga
- `<abbr>` - abreviatura
- `<address>` - informacion de contacto
- `<b>` - texto en negrita
- `<strong>` - texto importante
- `<i>` - texto en cursiva
- `<em>` - texto enfatizado
- `<small>` - texto pequeño
- `<code>` - codigo
- `<kbd>` - entrada del teclado
- `<samp>` - muestra de codigo
- `<span>` - Define un fragmento en un documento

## Secciones

### DOCTYPE

La etiqueta `<!DOCTYPE html>` le dice al navegador que el documento es HTML5. Esta etiqueta debe ser la primera etiqueta en el documento y no tiene etiqueta de cierre.

```html
<!DOCTYPE html>
```

### la raiz del documento

La etiqueta `<html>` es la raiz del documento. Todo el contenido del documento debe ir dentro de esta etiqueta.
Todos los otros elementos deben ser descendientes de este.

```html
<html>
  <!-- contenido del documento -->
</html>
```

### Metadatos

La etiqueta HTML `<head>` contiene metadatos sobre el documento. Los metadatos son informacion legible por maquinas, no se muestran en el navegador, pero son importantes para los motores de búsqueda y para la configuración de la página.

- `<head>`...`</head>`: Contiene metadatos sobre el documento, como el titulo, los estilos y los scripts.

- `<title>`...`</title>`: Define el titulo del documento, que se muestra en la barra de titulo del navegador o en la pestaña de la pagina.

- `<link>`: Define la relacion entre el documento actual y un recurso externo. Se usa para vincular el documento a una hoja de estilos.

- `<style>` ... `</style>`: Define estilos en linea para el documento. Los estilos en linea se utilizan para casos puntuales, usualmente no se utilizan en produccion.

- `<meta>` define metadatos sobre el documento que no pueden ser definidos por `<head>`, `<title>`, `<style>` o `<script>`.

#### ejemplo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Titulo de la pagina</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      body {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <!-- contenido del documento -->
  </body>
</html>
```

### Cuerpo del documento

La etiqueta `<body>` contiene todo el contenido visible del documento, como texto, imagenes, videos, etc.

```html
<body>
  <!-- contenido del documento -->
</body>
```

### secciones del documento

Las etiquetas `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>` y `<main>` definen secciones en un documento.

- `<main>`...`</main>`: Define el contenido principal de un documento. El contenido principal debe ser unico y se refiere a la funcionalidad principal de la pagina.
- `<header>`...`</header>`: Define un encabezado para un documento o seccion. Tipicamente contiene un titulo o logo.
- `<nav>`...`</nav>`: Define un conjunto de enlaces de navegacion. Se usa para crear una barra de navegacion o un menu hamburguesa.
- `<article>`...`</article>`: Representa un articulo completo en un documento, pagina o sitio web. Puede contener secciones, encabezados, pie de pagina, etc. Es un elemento autocontenido, independiente y reutilizable.
- `<aside>`...`</aside>`: Define contenido que esta relacionado con el contenido principal del documento, pero que no es esencial para entenderlo. Se usa comunmente para contenido publicitario o contenido relacionado. Tienen relacion indirecta con el contenido principal.
- `<footer>`...`</footer>`: Define un pie de pagina para un documento o seccion. Tipicamente contiene informacion acerca del autor, derechos de autor, enlaces a informacion relacionada, etc.
- `<address>`...`</address>`: Define informacion de contacto. Se usa dentro de un elemento `<footer>`.
- `<section>`...`</section>`: Define una seccion en un documento. Se usa para agrupar contenido relacionado.

#### ejemplos

```html
    <address>
        <a href="mailto:ralexrivero@gmail.com">ralexrivero@gmail.com</a><br>
        <a href="tel:+59893776930">(598) 093-776 930</a>
    </address>
```

## Elementos

Los elementos son las etiquetas que usamos para definir la estructura de la pagina. Por ejemplo, la etiqueta `<h1>` define un encabezado de nivel 1, mientras que la etiqueta `<p>` define un parrafo.

```html
<h1>Este es un encabezado</h1>
<p>Este es un parrafo</p>
```

## Atributos

Los atributos son propiedades que agregamos a las etiquetas. Por ejemplo, la etiqueta `<img>` tiene un atributo `src` que define la ruta de la imagen.

```html
<img src="https://placekitten.com/200/300" />
```

## Comentarios

Los comentarios son texto que no se muestra en la pagina. Los comentarios son utiles para agregar notas a nuestro codigo.

```html
<!-- Este es un comentario -->
```

### Estructura

Esta es la estructura de una pagina html basica

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Titulo de la pagina</title>
  </head>
  <body>
    <h1>Este es un encabezado</h1>
    <p>Este es un parrafo</p>
  </body>
</html>
```

## Elementos de texto

## Encabezados

Los encabezados son etiquetas que definen titulos. Hay 6 niveles de encabezados, del 1 al 6. El nivel 1 es el mas grande y el 6 es el mas pequeño.

```html
<h1>Este es un encabezado de nivel 1</h1>
<h2>Este es un encabezado de nivel 2</h2>
<h3>Este es un encabezado de nivel 3</h3>
<h4>Este es un encabezado de nivel 4</h4>
<h5>Este es un encabezado de nivel 5</h5>
<h6>Este es un encabezado de nivel 6</h6>
```

## Parrafos

Los parrafos son bloques de texto que se muestran en una nueva linea.

```html
<p>Este es un parrafo</p>
```

## Listas

Hay dos tipos de listas: ordenadas y desordenadas.

### Listas ordenadas

Las listas ordenadas son listas numeradas.

```html
<ol>
  <li>Este es el primer elemento de la lista</li>
  <li>Este es el segundo elemento de la lista</li>
  <li>Este es el tercer elemento de la lista</li>
</ol>
```

### Listas desordenadas

Las listas desordenadas son listas con viñetas.

```html
<ul>
  <li>Este es el primer elemento de la lista</li>
  <li>Este es el segundo elemento de la lista</li>
  <li>Este es el tercer elemento de la lista</li>
</ul>
```

## Enlaces

Los enlaces son usados para navegar entre paginas.

```html
<a href="https://google.com">Ir a Google</a>
```

## Imagenes

Muestran imagenes.

```html
<img src="https://placekitten.com/200/300" />
```

## Tablas

Muestan datos en forma de tabla.

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Apellido</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

## Formularios

Los formularios son usados para recopilar informacion del usuario.

```html
<form>
  <label for="name">Nombre</label>
  <input type="text" id="name" name="name" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Enviar</button>
</form>
```

## Preformateado

- `<pre>`...`</pre>`: Define un bloque de texto preformateado, tal cual se escribio en el documento `html`. Los espacios y saltos de linea son preservados.

```html
<pre>
  Este es un texto preformateado
    Este es un texto preformateado
        Este es un texto preformateado
</pre>
```

- `<code>`...`</code>`: Define un fragmento de codigo. Los espacios y saltos de linea son preservados.

```html
<code>
    def foo():
        if not bar:
            return True
</code>
```

## Citas

- `<blockquote>`...`</blockquote>`: Define una cita larga.

```html
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
    erat a ante.
  </p>
</blockquote>
```

- `<q>`...`</q>`: Define una cita corta.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <q>Integer posuere
  erat a ante.</q>
</p>
```

- `<cite>`...`</cite>`: Define el titulo de una obra.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <cite>Integer
  posuere erat a ante.</cite>
</p>
```

## Bloques

- `<div>`...`</div>`: Define una division.

```html
<div>
  <p>Este es un parrafo</p>
  <p>Este es otro parrafo</p>
</div>
```

## Semantica

La semantica es la forma en que definimos la estructura de la pagina. La semantica es importante porque ayuda a los motores de busqueda a entender la estructura de la pagina.

### Recursos

- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [HTML Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
- [HTML Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
- [HTML Input Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
- [HTML Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)

Lorem ipsum

- [Lorem Ipsum](https://www.lipsum.com/)

- [Primer web](http://info.cern.ch/)
- [Tim Berners Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee) - El creador de la Web, HTTP y URL
