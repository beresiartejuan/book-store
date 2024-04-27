# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Eliminando la dependencia de react de los componentes 🟢

En algunos archivos se importa react en la primera linea, pero en proyectos con Vite no es necesario, por lo que se puede eliminar

## Implementando Sass 🟢

Sass es compatible al 100% con el codigo css común, por lo que todos los archivos `.css` pasaron a ser `.scss` para tener las ventajas de sass.

## Uso de Tailwind-CSS 🟢

Tailwind css es un framework de css que permite estilar componentes en linea, ofreciendo clases utilitarias.

## Implementando Wouter en lugar de ReactRouter 🟢

Wouter es una biblioteca minimalista que entrega funciones parecidas a React Router.
Link al repo de Wouter: [https://github.com/molefrog/wouter](https://github.com/molefrog/wouter)

## Cambiando la forma de exportación en las páginas 🟢

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

## Mejora al momento de cargar las rutas 🟢

Para un mejor cuidado y administración de las rutas, estas se encuentran registradas en el archivo `RoutesAllowed.jsx` en un array que une los paths con los componentes

## Uso de zustand para crear el carrito de compras 🔴

## Uso de los datos para mockear para simular una API 🟢

- `/`: Pagina principal
- `/books`: Lista de libros
- `/books/?q=`: Busqueda por titulo
- `/authors`: Lista de autores
- `/authors/?q=`: Busqueda por autor
- `/books/{id}`: Detalles al libro asociado con el id
- `/authors/{id}`: Detalles al autor asociado con el id

[Api Mockeada :v]

- `/api/books`: Lista de libros en formato JSON
- `/api/authors`: Lista de libros en formato JSON