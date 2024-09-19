# Usa una imagen de Python 3.10 o superior
FROM python:3.10

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo requirements.txt
COPY requirements.txt .

# Actualiza pip e instala las dependencias
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación Django
EXPOSE 8000

# Define la variable de entorno que indica a Django que está en un entorno de producción
ENV DJANGO_SETTINGS_MODULE=celsia_internet.settings

# Ejecuta el servidor de Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

