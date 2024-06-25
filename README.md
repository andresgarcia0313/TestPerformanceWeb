
# Medición de Rendimiento del Procesador

## Descripción
Este proyecto proporciona una interfaz web para medir diversas métricas de rendimiento del procesador, incluyendo velocidad de trabajo, uso de cada núcleo, capacidad de multitarea, tiempo de respuesta y cantidad de trabajo realizado. El servidor está configurado para utilizar HTTP/2 si se encuentran disponibles los certificados de seguridad.

## Instalación
Sigue estos pasos para instalar y configurar el proyecto:

```sh
git clone https://github.com/andresgarcia0313/TestPerformanceWeb.git
cd TestPerformanceWeb
npm install
```

## Uso
Para iniciar el servidor y acceder a la interfaz web:

```sh
npm start
```
Abre tu navegador y navega a `http://localhost:8080`. Si los certificados `server.crt` y `server.key` están presentes, el servidor usará HTTP/2 y estará disponible en `https://localhost:8080`.

## Contribución
Para contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Puede solicitar la licencia con un issue para solicitar permisos de modificación distribución entre otros que considere necesar
