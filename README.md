# Tienda Gamer - Evaluación 3 (SPA con React)

## Descripción del Negocio
Esta aplicación es una Single Page Application (SPA) desarrollada para una Tienda Gamer. Permite consultar un catálogo de hardware y periféricos actualizado desde un servidor externo, y proporciona un sistema administrativo para registrar, editar y eliminar pedidos de clientes de forma persistente.

## Instrucciones para correr el proyecto
1. Clona este repositorio.
2. Abre una terminal en la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
3. Ejecuta la API de Python proporcionada por el docente en el puerto 8000.
4. Inicia el servidor de desarrollo de React ejecutando `npm run dev`.
5. Abre el enlace local (generalmente `http://localhost:5173/cr3`) en tu navegador.

## Despliegue en GitHub Pages
Esta aplicación está configurada para desplegarse en GitHub Pages.
- Ejecuta `npm install gh-pages --save-dev` para instalar la dependencia de deploy.
- Ejecuta `npm run deploy` para generar la versión optimizada y subirla a GitHub Pages.
- La aplicación estará disponible en `https://christoferponceh-rgb.github.io/cr3/`

## Uso de IA
* **Herramientas utilizadas:** Gemini.
* **Aprendizajes:** Utilicé la IA como tutor para estructurar el enrutamiento con React Router y afinar la lógica del hook `useEffect` para la persistencia de datos en Local Storage. La asistencia técnica me ayudó a comprender cómo separar las responsabilidades de los componentes funcionales y cómo manejar correctamente los estados asíncronos de la API externa (carga, datos, error) mostrándolos directamente en la interfaz.

## Estructura del Proyecto
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductoCard.jsx
│   └── FormularioPedido.jsx
├── pages/
│   ├── Inicio.jsx
│   ├── Catalogo.jsx
│   └── MisPedidos.jsx
├── App.jsx
├── main.jsx
└── index.css
```
