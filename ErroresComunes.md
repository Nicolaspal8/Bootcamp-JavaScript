1. **EADDRINUSE: Address Already In Use** : Este error se produce al intentar enlazar un servidor a una dirección local (dirección IP más
puerto) la cual ya se encuentra en uso por otra aplicación o servicio local. Este error es frecuente al intentar utilizar el módulo integrado http o frameworks como express. ![Referencia Error](img/Errores/01%20EADDRINUSE.png)
## Soluciones
+ La utilidad `netstat -abno` entrega un listado completo de los procesos
del sistema que están utilizando un puerto en cuestión, a qué dirección IP se están tratando
de comunicar, bajo qué protocolos, junto con un identificador de procesos (PID). Para
detener el proceso, se puede hacer uso del comando `taskkill /F /PID [ID DEL PROCESO]`. Por
ejemplo, para detener el proceso con el PID 7904, usamos el comando taskkill /F /PID 7904 
+ Cambiar el puerto de uso para la aplicacion

2. **EACCES: Permission Denied** : Este error es producido al intentar acceder a un archivo o directorio, del cual no se tienen los
permisos suficientes. Este error puede aparecer, por ejemplo, al tratar un archivo como el
package.json mediante un usuario sin los permisos necesarios. Este error también puede
aparecer en ocasiones al tratar de instalar un paquete con NPM de manera global.
Es posible que este error se presente en diferentes casos, pero por lo general se asocia a
archivos y/o directorios bloqueados por el sistema o permisos de ejecución insuficientes.
![Referencia error](img/Errores/02%20EACCES.png)
## Soluciones
+ Revisar que el sistema operativo no esté utilizando un recurso que pueda estar en
uso o bloqueado, del cual el programa necesite acceder.
+ Elevar los permisos del archivo con chmod en linux 
+ En windows puedes utilizar el comando icacls para administrar los permisos escribe simplemente el comando en consola y te dara las instrucciones de uso depende de tu caso

3. **ECONNREFUSED: Connection Refused** : Este error se produce al intentar conectarse a un servidor o equipo remoto, el cual no
responde a la petición, ya sea porque la rechazó o porque no se encuentra disponible. En
ocasiones, puede deberse a restricciones del entorno de red.
¿Y cómo se soluciona? La solución a este error puede ser variable dependiendo del
contexto, pero para corregirlo es necesario asegurarse de que las credenciales de acceso al
servicio que se desea conectar sean las correctas. De otro modo, es necesario también
revisar que la dirección de destino esté activa y que no exista algún software, como un
antivirus o firewall, bloqueando el acceso. A su vez, también es necesario revisar si el
destino al que se quiere acceder tiene el puerto de conexión esperado abierto.

4. **ENOENT: No Such File Or Directory** : Este error se produce al intentar acceder a un archivo o directorio que Node no es capaz de
encontrar o éste no existe. Generalmente, este tipo de errores es generado al hacer uso del módulo integrado File System (fs).\
La solución a este error consiste en revisar que las rutas a el o los archivos que se intenta acceder sean las correctas. En ocasiones, estas rutas no son referenciadas correctamente, por lo que se sugiere asegurarse que se están creando correctamente.

5. **EPERM: Operation Not Permitted** : Este error se produce al intentar realizar un proceso o acción del cual se requieren privilegios elevados. Puede ocurrir al tratar de ejecutar algún script o aplicación de terceros sin los permisos suficientes.
![Ref err](img/Errores/03%20EPERM.png)

6. **ETIMEDOUT: Operation Time Out** : Este error se produce al intentar acceder o realizar una petición a un destino, como un equipo o servidor en red, el cual no respondió dentro del tiempo de espera requerido. Este tipo de error se genera usualmente cuando se hace uso de módulos integrados como http, net o al hacer uso de alguna librería que trabaje con elementos de red como axios, express, entre otras.
![Ref err](img/Errores/04%20ETIMEDOUT.png)
¿Solución? El problema usualmente en este tipo de errores puede estar en el destino, ya que este no responde a tiempo o le falta la instrucción que cuelga la petición. Sin embargo, también puede deberse a que el proceso que se está ejecutando en el servidor es complejo y requiere de más tiempo del que está declarado como límite. Este último es una señal clara de que se necesita optimizar el código en el servidor para poder responder más rápidamente a los clientes.