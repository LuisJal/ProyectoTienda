## Proyecto Tienda

Ejercicio hecho en `JavaScript` para ejecutarse sobre NodeJS. Permite realizar acciones CRUD (Create, Read, Update, Delete) sobre una base de datos MongoDB. Está diseñado para trabajar en local en tu propio ordenador de Desarrollo. Necesitarás tener instalado un editor (recomendado `VSCode`), el entorno NodeJS (`npm`) y un motor de base de datos MongoDB (`mongod`). 

Aquí tienes un ejemplo de cómo instalarlos en un Mac (apunte [Mac para desarrollo](https://www.luispa.com/desarrollo/2023/04/15/mac-desarrollo.html)).

<br/>

### Instalación y ejecución rápida

* Clona el repositorio 

```shell
➜  git clone https://github.com/LuisJal/ProyectoTienda.git
:
➜  cd ProyectoTienda
```

* Instalar dependencias (indicadas en `packages.json`)

```shell
➜  ProyectoTienda git:(master) ✗ npm install
```

* Arrancar `mongod` (en otro Terminal)

```shell
➜  ~ brew services start mongodb-community@6.0
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-commu
```

* Comprobar el log (en otro Terminal)

```shell
➜  ~ tail -f /opt/homebrew/var/log/mongodb/mongo.log
```

* Arrancar el App `app.js`

```shell
➜  ProyectoTienda git:(master) ✗ node app.js
Servidor iniciado en http://localhost:3000
```

* Conecta el navegador: [http://localhost:3000](http://localhost:3000)

![Tienda](resources/browser-tienda.png?raw=true "Tienda")

<br/>

* Terminar el App (Ctrl-C)

```shell
➜  ProyectoTienda git:(master) ✗ node app.js
:
CTRL-C
```

* Terminar MongoDB

```shell
➜  ~ brew services stop mongodb-community@6.0
```

<br/>

### Contribuir mediante Fork (bifurcación)

Si quieres contribuir al proyecto, como no tienes acceso de escritura a mi repositorio, puedes usar el flujo de trabajo **"fork and pull request"** ("bifurcación y solicitud de incorporación de cambios").

Tienes [aquí]()https://docs.github.com/es/get-started/quickstart/contributing-to-projects el detalle sobre cómo se hace ([inlgés](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)), pero en resumen: 

1. Haz un Fork de mi repositorio desde tu cuenta de GitHub
2. Clónate tu propio Fork en tu ordenador.
3. Cuando vayas a modificar primero crea un Issue en mi repositorio para darle seguimiento
4. Después crea una Rama en el tuyo (fork) relacionada con el Issue, trabaja en tus modificaciones. 
```shell
git branch feature/issue-1/crear-readme
git checkout feature/issue-1/crear-readme
```
5. Haz **commit / push** en tu Fork
6. Por último Solicítame el cambio (**pull request**) referenciando el Issue.

