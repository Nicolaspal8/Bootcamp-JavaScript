# Lista de comandos utiles trabajando con node 
+ Para ver una lista completa --> [Lista de comandos](https://docs.npmjs.com/cli/v8/commands)

1. Instalacion de Express --> npm install express --save
2. Iniciar proyecto --> node nombreProyecto.js
3. Objeto request -->
~~~
● req.params: Manejo de los parámetros recibidos por URL.
● req.header(): Recibe como argumento el nombre de una propiedad y devuelve el valor de esta.
● req.secure: Confirma si el sitio de la consulta tiene el sello de seguridad https.
● req.method: Devuelve el método HTTP con el que se está haciendo la consulta.
~~~

4. Objeto Response --> 
~~~
● res.download(): Permite la descarga de un archivo dentro del servidor. Es importante destacar que 
esta es una cualidad muy potente del framework Express.
● res.redirect(): Así como su nombre lo indica, se utiliza para redireccionar la consulta recibiendo 
como argumento la dirección en formato string.
● res.sendStatus(): Recibe como argumento el código de estado que deseemos devolver como 
respuesta de la solicitud.
~~~
5. Metodos de la clase File System
- writeFile\
![metodo writeFile](/img/15%20writeFile.png)
- readFile\
![metodo readFile](/img/16%20ReadFile.png)
- renameFile\
![metodo renameFile](/img/17%20RenameFile.png)
- unlink Elimina un archivo\
![metodo unlink](/img/18%20Unlink.png)

6. Actualizacion automatica del servidor al realizar algun cambio --> npm install nodemon -g 
- ahora hay que correr el proyecto con nodemon "nodemon start"
7. **Instalacion de paquetes** --> npm install `<Nombre paquete>`
Donde `<Nombre_del_paquete>` será el nombre de la dependencia o librería que se desea
instalar. Al ejecutar este comando, se registrará una dependencia dentro del archivo
package.json como obligatoria para que el proyecto pueda funcionar.
~~~
npm install jquery --save
npm i jquery --save
npm i jquery
~~~
+ Desde la versión 5 de NPM en adelante, la opción --save es opcional y tendrá el mismo efecto si se especifica o no
+ Una vez que termine el proceso anterior, podemos ver que se creó la carpeta
/node_modules, que contiene dentro de su estructura el código fuente de jQuery. Junto con lo anterior, también se creó un archivo llamado package-lock.json que contiene información detallada de los paquetes que se instalan dentro del proyecto.
+ ¿Cómo verifico que efectivamente fue instalada la dependencia? La forma rápida de
comprobarlo es leyendo el package.json porque deberá haberse agregado automáticamente
el objeto “dependencias” declarando únicamente el paquete jQuery y su versión
+ En caso de que descargues el código de un proyecto o estés haciendo respaldo del tuyo, puedes exportar todos tus archivos exceptuando la carpeta node_modules y aplicar el siguiente comando en la terminal: `npm install`\
¿Qué hace esto? NPM con la ayuda de Node y de forma automatizada leerá el package.json e instalará todas las dependencias que se encuentren declaradas en él. De esta manera se reducirá el tamaño del proyecto y en próximas descargas sólo bastará con este comando para descargar las dependencias de dicho proyecto.
8. **Iniciar un proyecto** --> npm init

9. **Quitar una dependencia** --> npm uninstall `<nombre_del_paquete>`

10. **Instalar version especifica** 
+ Es posible decidir qué versión de la dependencia se instalará, muy probablemente esto sea necesario por posibles problemas de compatibilidad con nuestro software o con otras dependencias. La forma de especificar el número de la versión del paquete es escribiendo junto a su nombre y el símbolo “@”, así como te muestro en la siguiente sintaxis.
~~~
npm install <nombre_del_paquete>@<numero_version>
~~~

11. **Actualizar dependencias** 
~~~
npm update <nombre_del_paquete>
~~~
+ Ahora, ¿Qué sucede si deseo actualizar una dependencia para solo aplicar parches o quizá solo actualizar a una versión menor? Para esto, podemos modificar el registro de la dependencia en el archivo package.json, anteponiendo un carácter especial que NPM lo interpretará para saber a qué nivel deseamos actualizar. Por ejemplo:
+ ~3.5.1: El carácter “tilde” nos asegurará que solo se corregirán errores, es decir, se aplicará el parche más reciente disponible.
+ ^3.5.1: El carácter intercalación nos garantizará que se corregirán errores y se
agregarán funcionalidades nuevas, es decir, se cambiará a la versión menor más
reciente disponible.
+ *3.5.1: El carácter asterisco nos asegurará que se actualizará a la versión mayor más reciente disponible. Aplicar este tipo de configuración suele ser de alto impacto, por lo que se requiere cuidado al proceder.

12. **--save** 
+ a partir de la version 5.0.0 de npm esta opcion de utiliza por defecto
+ antes era utilizado para guardar las dependencias en un archivo package.json ya que antes había que instalarlas primero y luego guardarlas entonces ese comando ahorraba ese paso de guardado
