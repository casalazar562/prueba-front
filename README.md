# Prueba Vue.js - Diseño y Lógica

Este proyecto contiene la solución a una prueba técnica en Vue.js que incluye aspectos de diseño con CSS y lógica con Vue.js. Dentro del proyecto, se encuentran dos archivos adicionales que resuelven distintos problemas planteados en la prueba.

## Requisitos de la Prueba

### **1. Estilos y Diseño (CSS)**

Se aplicaron los siguientes estilos y configuraciones en la interfaz:

- **Centrado del texto**: Todo el contenido del `body` está alineado al centro.
- **Contenedor principal**:
  - Ancho fijo de `600px`.
  - Centrado horizontalmente.
  - Margen interno (`padding`) de `10px` y margen inferior (`margin-bottom`) de `10px`.
  - Borde punteado (`dashed`) gris para destacar el área.
- **Bloques dentro del contenedor**:
  - `bloque1` tiene un ancho de `100px`, fondo rojo degradado y margen superior de `70px`.
  - `bloque2` tiene un ancho de `100px`, fondo amarillo degradado.
  - Ambos bloques flotan a la izquierda con `margin: 5px` en todas las direcciones.
- **Bloques fuera del contenedor**:
  - `bloque1` y `bloque2` mantienen los mismos colores, pero no flotan.
- **Tipografía**:
  - `bloque1` dentro del contenedor: el párrafo está en itálica.
  - `bloque2` dentro y fuera del contenedor: el párrafo está en negrita.

### **2. Lógica con Vue.js**

Dentro del componente Vue:

- Se maneja un array `myArray` con 5 objetos, cada uno con:
  - `id` (entero)
  - `name` (string)
  - `roles` (array de enteros)
- Se genera dinámicamente una lista de elementos en la interfaz mostrando:
  - `Nombre: [nombre]`.
  - `Roles: [lista de roles separados por comas]`.
- Se aplican estilos dinámicos:
  - Los elementos con índice impar tienen fondo gris `#e6e6e6`.
  - Los elementos con índice par están ocultos (`display: none`).
- Se implementa un botón que, al hacer clic, muestra la cantidad total de elementos en el array dentro de un div con clase `output`.

## **Estructura del Proyecto**

El proyecto contiene los siguientes archivos:

```
├── src/
│   ├── components/
│   │   ├── myArray.js    
│   │   ├── PruebaVue.vue    
│   │   ├── styles.css     
│   ├── App.vue           
│   ├── main.js           
│
├── public/
│   ├── index.html        
│
├── README.md             
```

## **Cómo Ejecutar el Proyecto**

1. Clonar el repositorio:
   ```sh
   git clone [URL_DEL_REPO]
   ```
2. Acceder al directorio del proyecto:
   ```sh
   cd prueba-front
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```sh
   npm run serve
   ```
5. Abrir en el navegador `http://localhost:8080/`

---

Este proyecto cubre tanto la parte visual como la lógica de Vue.js, asegurando compatibilidad en diferentes navegadores y aplicando buenas prácticas de diseño y desarrollo. 🚀

