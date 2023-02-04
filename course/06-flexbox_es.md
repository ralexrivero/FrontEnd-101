# Flexbox

## Introduction

Flexbox es un concepto en diseño web que se refiere a una manera de organizar elementos en una página. Se llama "flexible box" porque permite que los elementos dentro de un contenedor se ajusten y se distribuyan de manera flexible en función de diferentes tamaños de pantalla o de la cantidad de contenido.

Flexbox facilita las tareas de composición y alineación de elementos en una página web. También es una herramienta muy útil para crear diseños responsivos que se adapten a diferentes tamaños de pantalla.

## Flexbox vs. Box Model

Flexbox es una forma de organizar elementos en una página web. El modelo de caja es una forma de dar estilo a los elementos en una página web.

Flexbox y el modelo de caja son conceptos diferentes, pero se pueden utilizar juntos para crear diseños de página web más complejos.

## Flexbox Properties

Flexbox se basa en propiedades CSS que se aplican a un elemento contenedor. Estas propiedades definen cómo se distribuyen los elementos dentro del contenedor.

Las propiedades flexbox más comunes son:

- `display`: Establece que un elemento es un contenedor flex.
- `flex-direction`: Establece la dirección de los elementos hijos dentro del contenedor flex.
- `flex-wrap`: Establece si los elementos hijos deben estirarse para llenar todo el ancho del contenedor o deben ajustarse en varias líneas.
- `flex-flow`: Es un atajo para establecer flex-direction y flex-wrap en una sola línea.
- `justify-content`: Alinea los elementos hijos en el eje principal del contenedor flex.
- `align-items`: Alinea los elementos hijos en el eje transversal del contenedor flex.
- `align-content`: Alinea varias líneas de elementos hijos en el eje transversal, si existen varias líneas de elementos hijos en el contenedor flex.
- `order`: Establece el orden en que se deben mostrar los elementos hijos en el contenedor flex.
- `flex-grow`: Establece el tamaño de crecimiento relativo de los elementos hijos en el contenedor flex.
- `flex-shrink`: Establece el tamaño de reducción relativo de los elementos hijos en el contenedor flex.
- `flex-basis`: Establece el tamaño base de los elementos hijos en el contenedor flex.
- `flex`: Es un atajo para establecer `flex-grow`, `flex-shrink` y `flex-basis` en una sola línea.

## Flexbox Container

Un elemento contenedor es un elemento HTML que contiene otros elementos HTML. El elemento contenedor se define con la propiedad `display: flex;`.

```css
.container {
  display: flex;
}
```

## Flexbox Items

Los elementos flexibles son los elementos HTML que se encuentran dentro de un elemento contenedor. Los elementos flexibles se distribuyen en una fila o columna dentro del elemento contenedor.

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

## Flexbox Direction

La propiedad `flex-direction` define la dirección en la que se distribuyen los elementos flexibles dentro del elemento contenedor. Los valores posibles son:

`flex-direction: row | row-reverse | column | column-reverse;`

- `flex-direction: row;` distribuye los elementos flexibles en una fila. Es el valor por omisión. De izquierda a derecha.
- `flex-direction: row-reverse;` distribuye los elementos flexibles en una fila, pero en orden inverso. De derecha a izquierda.
- `flex-direction: column;` distribuye los elementos flexibles en una columna. De arriba a abajo.
- `flex-direction: column-reverse;` distribuye los elementos flexibles en una columna, pero en orden inverso. De abajo a arriba.

## Justify Content

- `justify-content: center | flex-start | flex-end | space-between | space-around;`
- `justify-content: center;` alinea los elementos flexibles en el centro del elemento contenedor.
- `justify-content: flex-start;` alinea los elementos flexibles al principio del elemento contenedor.
- `justify-content: flex-end;` alinea los elementos flexibles al final del elemento contenedor.
- `justify-content: space-between;` distribuye los elementos flexibles con un espacio igual entre ellos.
- `justify-content: space-around;` distribuye los elementos flexibles con un espacio igual alrededor de ellos.
- `justify-content: space-evenly;` distribuye los elementos flexibles con un espacio igual alrededor de ellos y entre ellos.

## links

- [Mozilla Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Flexbox Zombies](https://mastery.games/flexboxzombies/)
