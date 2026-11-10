
<?php
class Conexion{
    private string $host = "localhost";
    private string $usuario = "camila";
    private string $password = "123456";
    private string $basedatos = "Aetheria";
    protected ?mysqli $conexion = null;
    
    public function conectar(): ?mysqli {
        if($this->conexion === null){
            $this->conexion = new mysqli(
                $this->host,
                $this->usuario,
                $this->password,
                $this->basedatos
            );

            if($this->conexion->connect_error){
                die("Error en la conexion a la base de datos:" . $this->conexion->connect_error);
            }
            $this->conexion->set_charset('utf8mb4');
        }
        return $this->conexion;
    }
    public function cerrar(): void{
        if ($this->conexion != null){
            $this->conexion->close();
            $this->conexion = null;
        }
    }
}

$conexion = new Conexion();
if($conexion->conectar() != null){
    echo "Conexion exitosa a la base de datos";
    $conexion->cerrar();
}else{
    echo "Error en la conexion con la base de datos";
}
?>
EOF
