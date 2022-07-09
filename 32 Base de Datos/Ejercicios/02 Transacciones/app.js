(async () => {
    try {
    await pool.query("BEGIN");
    const descontar =
    "UPDATE usuarios SET saldo = saldo - 25000 WHERE email ='yuki_whobrey@aol.com' ";
    await pool.query(descontar);
    const acreditar =
    "UPDATE usuarios SET saldo = saldo + 25000 WHERE email = 'fletcher.flosi@yahoo.com' ";
    await pool.query(acreditar);
    await pool.query("COMMIT");
    } catch (e) {
    await pool.query("ROLLBACK");
    // Paso 1
    console.log("Error código: " + e.code);
    // Paso 2
    console.log("Detalle del error: " + e.detail);
    // Paso 3
    console.log("Tabla originaria del error: " + e.table);
    // Paso 4
    console.log("Restricción violada en el campo: " + e.constraint);
    }
})();
    