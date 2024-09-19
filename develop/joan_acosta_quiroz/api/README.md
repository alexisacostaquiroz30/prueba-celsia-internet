### 1. Descripción del Backend

El backend de la solución está desarrollado utilizando **Python** con el framework **Django** y **Django Rest Framework (DRF)**. Esta API REST permite realizar las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre las tablas que gestionan la información de los clientes y los servicios contratados. Gracias a DRF, se asegura que la comunicación entre el backend y el frontend se realice de manera eficiente y estructurada.

El backend también incluye validaciones para garantizar que los campos de la base de datos no contengan valores nulos y que los tipos de datos cumplan con las especificaciones del modelo de datos.

### 2. Configuración del Backend

- **API REST con Django Rest Framework**:
  - Implementación de endpoints que manejan las operaciones CRUD sobre las tablas `clientes` y `servicios`.
  - Uso de **serializers** para transformar los modelos de Django en formato JSON y viceversa.
  - Validación de campos para asegurar que la información cumpla con los requisitos de la base de datos, como evitar nulos y verificar tipos de datos.

- **Dockerización**:
  - Se creó un **Dockerfile** exclusivo para el backend, donde se detallan las instrucciones para crear el contenedor.
  - El **docker-compose** incluye la definición de este contenedor junto con los otros servicios (frontend y base de datos).
  - El backend se ejecuta en el puerto **8000**, y es accesible mediante la URL: `http://localhost:8000/`.

### 3. Despliegue del Backend

1. Clonar el repositorio desde GitHub.
2. Ejecutar el comando `docker-compose up --build` para construir y ejecutar los contenedores.
3. El backend estará accesible en el puerto **8000** en la URL `http://localhost:8000/`.
4. Este contenedor permite la interacción con la base de datos a través de la API REST, realizando todas las operaciones necesarias de registro, actualización y consulta de clientes y sus servicios.

Este enfoque asegura que el backend pueda ser desplegado en cualquier entorno de manera consistente gracias a Docker, manteniendo una estructura modular y escalable.
