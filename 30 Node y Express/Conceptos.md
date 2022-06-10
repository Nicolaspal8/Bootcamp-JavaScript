1. Nodejs = Es un entorno de ejecucion para JavaScript el cual permite utilizar este del lado del servidor como en aplicaciones backend, fue creado en 2009 y luego en 2010 se creo npm que fue principalmente un administrador de paquetes para node pero que luego se volvio popular y fue utilizado para otros proyectos igualmente
2. Express = 
+ Es el framework de node para el desarrollo de aplicaciones web y independientes
+ Soporta las operaciones de un CRUD
+ Soporta Vistas es decir el html que ve el usuario
+ MVC 
3. Enrutamiento = El enrutamiento se refiere a determinar cómo una aplicación responde a una solicitud del cliente a un 
punto final particular, que bien puede ser una URI o una URL, además de poseer algún método de 
solicitud HTTP específico (GET, POST, PUT, DELETE, etc.).

4. Rutas Genericas = Puedes crear rutas con un asterisco en el metodo get como path app.get("/*", callback)
+  Las rutas genéricas deben ser ubicadas luego de la definición de todas las rutas, ya que al final, si Express no encuentra un handler adecuado para la petición recibida, usará este nuevo código de forma genérica para gestionar todas las peticiones que no coincidan con sus rutas preestablecidas.
5. Objeto Request = Este objeto contiene varios métodos y propiedades interesantes, pero los más utilizados son:

