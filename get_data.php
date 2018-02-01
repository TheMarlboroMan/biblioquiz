<?php
//Configuración y requerimientos...
require("configuracion/constantes_app.class.php");

//Arrancar el motor.
require("../renoir_engine/renoir_engine_iniciar.php");

//Conexión bbdd...
require("configuracion/constantes_bbdd.class.php");
$conexion=Consulta_mysql::conectar(Constantes_bbdd_biblioquiz::BBDD_HOST, Constantes_bbdd_biblioquiz::BBDD_USER, Constantes_bbdd_biblioquiz::BBDD_PASS, Constantes_bbdd_biblioquiz::BBDD_BASE_DATOS);

$query=mysql_query("SELECT * FROM tablw_with_all_the_data");
$data=mysql_fetch_assoc($query);

header('Content-type: application/json; charset=iso-8859-1;');
echo $data['authors'];
?>
