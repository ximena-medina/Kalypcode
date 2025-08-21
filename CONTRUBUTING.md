# Bienvenido a la guía para documentar en el proyecto frontend de Trunck and Trailer.

Hola, imaginamos que eres nuevo en el proyecto y estás interesado en aportar tus conocimientos a este desarrollo. Recuerde que todos los cambios realizados en la plataforma se pueden consultar en los [lanzamientos del proyecto](https://github.com/cceo-developer/corporativo-trunck-and-trailer-backend/releases).

Para obtener toda la información técnica del proyecto se puede consultar el CODA (https://coda.io/d/Corporativo-Alaman_dLy4nTto3HZ/Corporativo-Alaman_suuGk#_lu8wF). Allí podrá encontrar información referente a buenas prácticas, módulos, equipos, instructivos entre otras cosas.

En esta guía, obtendrá una descripción general del flujo de trabajo de contribución desde la apertura de una incidencia, la creación de un PR, la revisión y la combinación del PR.

## Guía para nuevos colaboradores.

Para obtener una descripción general del proyecto puedes leer el [README](https://github.com/cceo-developer/truck-and-trailer-storage-frontend.git). A continuación se muestran algunos recursos que le ayudarán a empezar con las contribuciones de código:

- [Documentación Git](https://git-scm.com/book/es/v2)
- [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
- [Colaborar usando pull requests](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests)
- [Buenas prácticas](https://coda.io/d/Buenas-practicas-de-desarrollo_dz5eYvD14LH/Buenas-practicas-de-desarrollo_suDEm)

### Issues

#### Crear un nuevo isssue

Si detecta algún problema con la documentación, por favor notifica al responsable del producto, él hará el seguimiento adecuado para solucionar el problema. Si no hay ningún problema relacionado, puede abrir un nuevo issue usando el [Proyecto](https://github.com/users/cceo-developer/projects/39) de git.

#### Resolver un issue

Tenemos predilección por asignar issues a las personas que fueron responsables del módulo que presenta el problema o cambio, pero no nos limitamos a que cualquier miembro del equipo pueda solucionarlo. Una vez resuelto, solo te pedimos que respondas el problema en el proyecto de git para que el equipo de atención al cliente esté al tanto.

### Hacer cambios

#### Consideraciones previas

Antes de comenzar a desarrollar, considere que utilizamos el [patrón de desarrollo por repositorio](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design) y [diseño orientado al dominio](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-ceived-microservice) para facilitar la comprensión y el código reutilizar. Además de estas consideraciones, debes tener en cuenta que programamos en base a pruebas ([TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)) por lo que es imprescindible que todos los módulos y desarrollos tengan su respectiva prueba.

### Subir tus cambios

Revisa tus cambios, y realiza sus commits una vez que estés satisfecho con ellos. Recuerda que es tu obligación evaluar en tu máquina el correcto funcionamiento de tu código en conjunto con el resto. No olvides autoevaluarte para acelerar el proceso de revisión.

### Pull Request

Cuando hayas terminado con los cambios, cree un pull request, también conocida como PR.
- Completar el formulario [Nueva pull request](https://github.com/cceo-developer/corporativo-alaman-frontend/compare), llenando un listado de todas las actividades que se realizaron.
- La solicitud de extracción debe ser aceptada por uno de tus compañeros de equipo y, en caso de que sea una revisión, por uno de tus líderes de proyecto.
- En caso de que tenga conflictos, su código deberá ser aprobado por otra persona antes de que podamos solucionar los problemas y mezclar.

## Environments

### Environment Local

Este sitio se puede desarrollar en cualquier sistema operativo, pero recomendamos utilizar un entorno Linux o Mac para facilitar el proceso de desarrollo.

### Environments en linea

Tenemos diferentes entornos donde subimos los cambios y cada uno tiene un enfoque diferente. Nuestros ambientes son:
* Sandbox: Entorno especial donde el equipo de desarrollo puede realizar pruebas. URL: https://corporativo-alaman.cceo.io/
* Producción: Entorno productivo, aquí es donde se ubican las operaciones reales. URL: https://sistema.corporativoalaman.com/
