# Bienvenidos a el proyecto para openBootcamp!. 

A continuacion esta la explicacion de los scripts, dependencias y lo que necesitas en el .env

**script**

- start - ejecuta  el codigo transpilado.
- build - ejecuta tsc y generara lo que especifiquemos en el tsconfig.
- dev - escucha y transpila el codigo mientras este activo.
- Test - ejecutara jest.

**Dependencies**
- express - crear la aplicacion de backend.
- dotenv - almacenar informacion privada del proyecto.
- nodemon - vigila el sistema de archivos y reinicia automáticamente el proceso.
- Typescript - superconjunto de Javascript | todas las dependencias con version Typescript  (@types/express, @types/node).
- concurrently - ejecuta comandos a la vez.
- webpack - empaquetar la solucion para que sea mas ligera.
- webpack-node-externals - Webpack le permite definir elementos externos: módulos que no se deben agrupar.
- webpack-shell-plugin - realizar configuraciones de webpack
- eslint - indicara errores de sintaxis. Señalara errores cuando no se siguen buenas prácticas.
- Jest - es una librería que nos permite escribir y ejecutar tests (conjunto a su version TS ts-jest).
- ts-node - Ejecución de TypeScript y REPL para node.js, con mapa de origen y compatibilidad nativa con ESM.

**env**

    Que crear en el .env

- PORT = "Tu port"