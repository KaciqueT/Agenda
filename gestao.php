<?php

    $servidor = "localhost";
    $user = "root";
    $senha = "";
    $db = "agenda";

    $con = new mysqli($servidor, $user, $senha, $db);

    $dados = array();

    $query = "SELECT * FROM contato";
    $res = mysqli_query($con, $query);
    if(mysqli_num_rows($res) > 0){
        while($reg = mysqli_fetch_array($res)){
            $dados[] = array(
                "n_id_contato" => $reg["n_id_contato"],
                "s_nome_contato" => $reg["s_nome_contato"],
                "s_celular_contato" => $reg["s_celular_contato"],
                "s_email_contato" => $reg["s_email_contato"],
                "dt_dtnasc_contato" => $reg["dt_dtnasc_contato"],
            );
        }
    }else{
        echo "Nenhum Registro";
    }


    echo json_encode($dados);

?>