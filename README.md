# Book Store

## Upgrade

## Implementando Sass 

Sass es compatible al 100% con el codigo css común, por lo que todos los archivos `.css` pasaron a ser `.scss` para tener las ventajas de sass.

## Uso de Tailwind-CSS

Tailwind css es un framework de css que permite estilar componentes en linea, ofreciendo clases utilitarias.

## Implementando Wouter en lugar de ReactRouter

Wouter es una biblioteca minimalista que entrega funciones parecidas a React Router.
Link al repo de Wouter: [https://github.com/molefrog/wouter](https://github.com/molefrog/wouter)

## Cambiando la forma de exportación en las páginas

En lugar de tener que desestructurar el componente e importarlo de un archivo con el mimso nombre que su carpeta padre, dentro de la carpeta pages hice que la estructura de carpeta tenga la siguiente forma:

```
/pages/{Componente}/index.jsx
/pages/{Componente}/{Componente}.module.scss
```

Y dentro de los archivos index.jsx exportando un componente por defecto con el mismo nombre del componente.

El cambio al importar un componente es el siguiente:

```jsx
// Antes
import { Componente } from ".../pages/Componente/Componente"
// Ahora 
import Componente from ".../pages/Componente"
```

## Mejora al momento de cargar las rutas

## Uso de zustand para crear el carrito de compras

## Uso de los datos para mockear para simular una API
