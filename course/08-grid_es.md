# grid

## introducción

El sistema de cuadrícula de CSS es una forma de dividir la página en columnas y filas. Esto nos permite colocar elementos en la página de una manera ordenada y predecible.

## ¿Qué es una cuadrícula?

Una cuadrícula es una estructura de filas y columnas.

![grid](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/master/.learn/assets/grid.png)

## ¿Cómo funciona?

La cuadrícula se basa en dos ejes: el eje horizontal y el eje vertical. El eje horizontal se llama fila y el eje vertical se llama columna. Cada celda en la cuadrícula se denomina celda de cuadrícula.

![grid](https://raw.githubusercontent.com/4GeeksAcademy/css-tutorial-exercises-course/master/.learn/assets/grid2.png)

## ¿Cómo se crea una cuadrícula?

Para crear una cuadrícula, debemos definir un elemento contenedor como un elemento de cuadrícula. Luego, creamos filas y columnas dentro de ese elemento de cuadrícula.

## ¿Cómo se define un elemento de cuadrícula?

Para definir un elemento de cuadrícula, debe establecer la propiedad `display` en `grid` o `inline-grid`.

```css
.container {
  display: grid;
}
```

## ¿Cómo se crea una fila?

Para crear una fila, debe establecer la propiedad `display` en `grid` o `inline-grid`.

```css
.row {
  display: grid;
}
```

## ¿Cómo se crea una columna?

Para crear una columna, debe establecer la propiedad `display` en `grid` o `inline-grid`.

```css

.column {
  display: grid;
}
```

## ¿Cómo se define el número de columnas?

Para definir el número de columnas, debe establecer la propiedad `grid-template-columns` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
}
```

## ¿Cómo se define el número de filas?

Para definir el número de filas, debe establecer la propiedad `grid-template-rows` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template-rows: 50px 50px 50px;
}
```

## ¿Cómo se define el número de columnas y filas?

Para definir el número de columnas y filas, debe establecer la propiedad `grid-template` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template: 50px 50px 50px / 50px 50px 50px;
}
```

## ¿Cómo se define el número de columnas y filas con fracciones?

Para definir el número de columnas y filas con fracciones, debe establecer la propiedad `grid-template` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
}
```

## ¿Cómo se define el número de columnas y filas con porcentajes?

Para definir el número de columnas y filas con porcentajes, debe establecer la propiedad `grid-template` en el elemento de cuadrícula.

```css

.container {
  display: grid;
  grid-template: 50% 50% / 50% 50%;
}
```

## ¿Cómo se define el número de columnas y filas con pixeles?

Para definir el número de columnas y filas con pixeles, debe establecer la propiedad `grid-template` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px;
}
```

## ¿Cómo se define el número de columnas y filas con auto?

Para definir el número de columnas y filas con auto, debe establecer la propiedad `grid-template` en el elemento de cuadrícula.

```css
.container {
  display: grid;
  grid-template: auto auto / auto auto;
}
```

