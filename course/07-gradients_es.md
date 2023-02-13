# Gradientes CSS

Los gradientes son una técnica avanzada en CSS que nos permite crear degradados de color en una página web, de manera sencilla y eficiente.

## sintaxis

### gradientes lineales

```css
.selector {
    background: linear-gradient(<direction>, <color1>, <color2>, ...);
}
```

La dirección puede ser definida utilizando ángulos (por ejemplo, `45deg`), o utilizando direcciones específicas (por ejemplo, `to top`, t`o bottom`). Los colores pueden ser especificados en **hexadecimal**, **RGB** o **HSL**.

Direcciones específicas:

- `to top`
- `to right`
- `to bottom`
- `to left`

### gradientes radiales

```css
.selector {
    background: radial-gradient(<shape>, <position>, <color1>, <color2>, ...);
}
```

La forma puede ser definida como un círculo o una elipse, y la posición puede ser definida utilizando direcciones específicas (por ejemplo, `at center`, `at top right`).

Direcciones específicas:

- `at center`
- `at top`
- `at right`
- `at bottom`
- `at left`
- `at top left`
- `at top right`
- `at bottom left`
- `at bottom right`

## Ejemplos

- Gradiente de dos colores:

```css
.selector {
    background: linear-gradient(to right, #f44336, #e91e63);
}
```

- Gradiente de tres colores:

```css
.selector {
    background: linear-gradient(to right, #f44336, #ffeb3b, #4caf50);
}
```

- Gradiente radial:

```css
.selector {
    background: radial-gradient(circle, #f44336, #e91e63);
}
```

- Gradiente diagonal:

```css
.selector {
    background: linear-gradient(45deg, #f44336, #e91e63);
}
```

- Gradiente de degradado de colores:

```css
.selector {
    background: linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
}
```

- Gradiente de degradado de colores con transparencia:

```css
.selector {
    background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}
```

- Gradiente de degradado de colores con transparencia y posición:

```css
.selector {
    background: linear-gradient(to right, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 1) 50%, rgba(255, 0, 0, 0) 100%);
}
```

### referencias

- [CSS Gradient](https://cssgradient.io/)
- [CSS Gradient Generator](https://www.colorzilla.com/gradient-editor/)
