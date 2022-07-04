const pool = new Pool({
    user: 'NOMBRE_USUARIO',
    host: '127.0.0.1',
    database: 'app_ejemplo',
    password: 'CLAVE_USUARIO',
    port: 5432,
    max: 20,
    min: 2,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

/* 
¿Cómo se interpretaría esta configuración? Leyendo propiedad por propiedad, declarando lo
siguiente:
● El nombre de usuario para conectarse a PostgreSQL.
● Servidor donde está alojada la base de datos.
● Base de datos a conectarnos.
● Contraseña correspondiente al usuario indicado.
● Puerto de conexión para el servicio.
● 20 clientes máximos para el Pool.
● 2 clientes como mínimo para que el Pool inicie las consultas.
● 30 segundos como tiempo de espera máximo de inactividad, es decir, que el cliente
no realizó otra consulta en este tiempo.
● 2 segundos máximo de espera para recibir la consulta de otro cliente.
● El ssl no está declarado puesto que no aplica para esta lectura, por lo que por
defecto su valor es false.


Conceptos

Pool es una clase al igual que Client, recibe un objeto donde son válidos los mismos
parámetros utilizados con la clase Cliente, pero la diferencia está en otras propiedades para
generar un grupo de conexiones con la base de datos, a continuación te muestra a cuáles
propiedades hago referencia:
● max: Recibe un valor numérico, que establece la cantidad máxima de clientes
conectados que puede contener el grupo. Por defecto, se establece en un valor de
10.
● min: Recibe un valor numérico, que establece la cantidad mínima de clientes
conectados para iniciar sus consultas. Por defecto, se establece en un valor de 0.
● idleTimeoutMillis: Recibe un valor numérico que indica la cantidad de milisegundos
que un cliente puede permanecer inactivo antes de que sea desconectado. Por
defecto, se establece en un valor de 10.000 que equivalen a 10 segundos, si este
valor se establece en 0 deshabilitará la desconexión automática para los clientes
inactivos.
● connectionTimeoutMillis: Recibe un valor numérico que indica la cantidad de
milisegundos, que deben transcurrir antes que se agote el tiempo de espera para
conectar a un nuevo cliente. Por defecto, se establece en un valor de 0, que significa
que no hay tiempo de espera.
● ssl: Recibe un valor booleano, es decir, un true o un false como valor, permite definir
si la conexión a la base de datos soporta un protocolo de transporte encriptado.
La función constructora de la clase Pool al igual que la clase Cliente se instancia utilizando
la palabra new, como se muestra en el siguiente código donde se escribió unos valores de
ejemplo para las propiedades nuevas.
*/