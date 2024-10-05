# Frontend - DataMart Académico UAGRM

Este proyecto es la interfaz de usuario del DataMart Académico de la UAGRM. Permite visualizar información como inscritos, rendimiento, promedios, nuevos inscritos, egresados, deserción y PPAC, consumiendo datos desde un backend mediante llamadas a una API REST.

## Requisitos

Para correr el frontend, solo necesitas un navegador web moderno que soporte JavaScript. El proyecto utiliza Tailwind CSS para el diseño de la interfaz y JavaScript puro para las interacciones.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Victoroide/datamart-uagrm-frontend.git
   cd datamart-uagrm-frontend
   ```

2. **Instalar las dependencias de Tailwind CSS:**

   Si Tailwind CSS no está configurado localmente, necesitarás instalar las dependencias y compilar los estilos. Para ello, sigue estos pasos:

   - **Instalar Node.js** (si aún no lo tienes) desde [https://nodejs.org/](https://nodejs.org/).
   
   - **Instalar Tailwind CSS**:

     Ejecuta los siguientes comandos para inicializar Tailwind CSS en tu proyecto:

     ```bash
     npm init -y
     npm install -D tailwindcss
     npx tailwindcss init
     ```

   - **Configurar el archivo tailwind.config.js**:
   
     En el archivo `tailwind.config.js`, agrega las rutas donde se utilizará Tailwind CSS:

     ```javascript
     module.exports = {
       content: ["./src/**/*.{html,js}", "./*.html"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

   - **Compilar los estilos de Tailwind CSS**:

     Añade las siguientes directivas en el archivo `src/tailwind.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

     Luego, compila los estilos de Tailwind ejecutando:

     ```bash
     npx tailwindcss -i ./src/tailwind.css -o ./dist/output.css --watch
     ```

3. **Configurar el entorno:**

   Si es necesario, puedes ajustar la URL de la API del backend directamente en los archivos JavaScript de tu proyecto. Busca la línea donde se realiza la petición `fetch` y ajusta la URL si no apunta al servidor correcto:

   ```javascript
   const res = await fetch('http://localhost:5000/rendimiento'); // Ejemplo de la API
   ```

4. **Abrir el proyecto en el navegador:**

   Una vez que Tailwind CSS esté compilado, simplemente abre el archivo `index.html` en tu navegador. Puedes hacerlo directamente haciendo doble clic en el archivo o utilizando una extensión como "Live Server" si usas un editor como Visual Studio Code.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
datamart-uagrm-frontend/
│
├── assets/
│   └── tailwind.css      # Archivo fuente para Tailwind CSS
│
├── css/
│   └── styles.css        # Archivo CSS generado por Tailwind
│
├── js/
│   ├── app.js            # Archivo principal de JavaScript
│   ├── desercion.js       # Script para manejo de datos de deserción
│   ├── egresados.js       # Script para manejo de datos de egresados
│   ├── filters.js         # Script para manejar los filtros
│   ├── inscritos.js       # Script para manejar datos de inscritos
│   ├── nuevos_inscritos.js # Script para manejar datos de nuevos inscritos
│   ├── ppac.js            # Script para manejo de datos de PPAC
│   ├── promedios.js       # Script para manejo de datos de promedios
│   └── rendimiento.js     # Script para manejo de datos de rendimiento
│
├── index.html             # Página principal del proyecto
├── .gitignore             # Archivos a ignorar por git
├── package.json           # Dependencias del proyecto
├── package-lock.json      # Versión bloqueada de las dependencias
└── tailwind.config.js     # Configuración de Tailwind CSS
```

## Funcionalidades

### 1. **Visualización de datos**

   La aplicación permite seleccionar filtros de facultad, carrera y periodo académico, y visualizar la información en tablas y gráficos.

### 2. **Interacción con la API**

   Se realiza una solicitud a la API del backend para obtener datos específicos. Estos datos se muestran de manera gráfica utilizando librerías como ApexCharts y tablas HTML.

## Notas adicionales

- Asegúrate de que el backend esté corriendo en paralelo para poder consumir los datos.
- Tailwind CSS se utiliza para el diseño, así que asegúrate de compilar los estilos correctamente antes de cargar el frontend en tu navegador.
- Los archivos JavaScript están organizados por función (ejemplo: `rendimiento.js`, `inscritos.js`), y se encargan de realizar las llamadas API y actualizar el DOM con los datos.
