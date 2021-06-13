var capturanome = "";


function captura(){
    
    // essa linha irá capturar o nome lá no formulario.html
    capturanome = document.getElementById('nome').value;

    // e essa linha irá mostrar um alerta
    alert("Obrigada por se cadastrar - "+capturanome + "\n" + "Você receberá um e-mail com mais informações!" )
}