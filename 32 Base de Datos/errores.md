Interpretación de errores PostgreSQL
El servidor de base de datos PostgreSQL emite mensajes a los que se le asignan códigos de
error de cinco caracteres que cumplen con convenciones del estándar SQL para los códigos
SQLSTATE.
Es poco probable que estos códigos cambien en nuevas versiones de PostgreSQL. Según el
estándar, los dos primeros caracteres corresponden a una clase de error y los últimos tres
indican una condición específica en la clase.
A continuación se detallarán las clases de errores para poder identificarlas, estas son las
que encuentra vigente en la versión 12.x de PostgreSQL:
● Clase 00 - Finalización exitosa
● Clase 01 - Advertencia
● Clase 02 - Sin datos
● Clase 03 - Declaración SQL aún no completa
● Clase 08 - Excepción de conexión
● Clase 09 - Excepción de acción activada
● Clase 0A - Característica no admitida
● Clase 0F - Excepción del localizador
● Clase 0L - Concedente inválido
● Clase 0P - Especificación de rol no válida
● Clase 0Z - Excepción de diagnóstico
● Clase 20 - Caso no encontrado
● Clase 21 - Violación de cardinalidad
● Clase 22 - Excepción de datos
● Clase 23 - Infracción de restricción de integridad
● Clase 24 - Estado del cursor inválido
● Clase 25 - Estado de transacción no válido
● Clase 26 - Nombre de instrucción SQL no válido
● Clase 27 - Violación de cambio de datos desencadenada
● Clase 28 - Especificación de autorización no válida
● Clase 2B - Todavía existen descriptores de privilegios dependientes
● Clase 2D - Terminación de transacción no válida
● Clase 2F - Excepción de rutina SQL
● Clase 34 - Nombre de cursor inválido
● Clase 38 - Excepción de rutina externa
● Clase 39 - Excepción de invocación de rutina externa
_ 1
www.desafiolatam.com
● Clase 3B - Excepción de punto de rescate
● Clase 3D - Nombre de catálogo no válido
● Clase 3F - Nombre de esquema no válido
● Clase 40 - Reversión de transacciones
● Clase 42 - Error de sintaxis o infracción de la regla de acceso
● Clase 44 - CON OPCIÓN DE VERIFICACIÓN Infracción
● Clase 53 - Recursos insuficientes
● Clase 54 - Límite de programa excedido
● Clase 55 - Objeto no en estado de requisito previo
● Clase 57 - Intervención del operador
● Clase 58 - Error del sistema (errores externos al propio PostgreSQL )
● Clase 72 - Fracaso de instantánea
● Clase F0 - Error de archivo de configuración
● Clase HV - Error de contenedor de datos externos (SQL / MED)
● Clase P0 - Error PL / pgSQL
● Clase XX - Error interno
Como se podrá apreciar el listado de códigos de error es muy largo, por lo tanto se
detallarán los códigos más comunes incluyendo una breve descripción.
● Código 08003 - connection_does_not_exist
● Código 08006 - connection_failure
● Código 2F002 - modifying_sql_data_not_permitted
● Código 57P03 - cannot_connect_now
● Código 42601 - syntax_error
● Código 42501 - insufficient_privilege
● Código 42602 - invalid_name
● Código 42622 - name_too_long
● Código 42939 - reserved_name
● Código 42703 - undefined_column
● Código 42000 - syntax_error_or_access_rule_violation
● Código 42P01 - undefined_table
● Código 42P02 - undefined_parameter
