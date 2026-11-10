<?php
class Conexion{
  private String $host = "localhost";
  private String $basedatos = "Aetheria";
  private String $usuario = "camila";
  private String $password = "123456";
  protected ?mysqli $conexion = null;
  
  public function conectar(): ?mysqli {
    if($this->conexion === null){
        $this->conexion = new mysqli(
            $this->host,
            $this->basedatos,
            $this->usuario,
            $this->password
        );

        if($this->conexion->connect_error){
            die("Error en la conexion a la base de datos:" .$this->conexion->connect_error);
        }
        $this->conexion->set_charset(utf8mb4);
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

$conexion = new conexion();
if($conexion->conectar() != null){
    echo "Conexion exitosa a la base de datos";
    $conexion->cerrar();
}else{
    echo "Error en la conexion con la base de datos";
}
?>