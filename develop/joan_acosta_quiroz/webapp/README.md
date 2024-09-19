
### 1. Descripción del Frontend

El frontend de la solución se desarrolló con **React** y utiliza **Vite** como herramienta de construcción. Esta combinación permite una experiencia ágil y rápida en el desarrollo de la interfaz de usuario, optimizando tanto la carga inicial como las actualizaciones en tiempo real. El frontend permite que los usuarios interactúen con la aplicación para registrar nuevos clientes y servicios, así como consultar los servicios contratados por los clientes.

### 2. Configuración del Frontend

- **React + Vite**:
  - Se utilizaron componentes de React para crear las vistas necesarias, como los formularios de registro de clientes y servicios.
  - **Vite** fue elegido como la herramienta de construcción debido a su velocidad y eficiencia en el desarrollo.
  - La interfaz está conectada al backend a través de llamadas a la **API REST**, utilizando **Axios** para gestionar las solicitudes y respuestas.

- **Dockerización**:
  - Se configuró un **Dockerfile** dedicado al frontend, donde se define el entorno de ejecución para React y Vite.
  - El **docker-compose** incluye este contenedor junto con el backend y la base de datos.
  - El frontend se ejecuta en el puerto **4173**, y es accesible mediante la URL: `http://localhost:4173/`.

### 3. Despliegue del Frontend

1. Clonar el repositorio desde GitHub.
2. Ejecutar el comando `docker-compose up --build` para construir y ejecutar los contenedores.
3. El frontend estará accesible en el puerto **4173** en la URL `http://localhost:4173/`.
4. Los usuarios podrán acceder a la interfaz gráfica y realizar operaciones como la creación, consulta y actualización de clientes y servicios a través de los formularios conectados al backend.

El uso de **React y Vite** asegura una interfaz de usuario rápida y eficiente, mientras que la contenedorización con Docker facilita la portabilidad y el despliegue en cualquier entorno de manera uniforme.