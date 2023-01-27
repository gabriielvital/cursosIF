var caracteres = "1234567890qwertyuiopasdfghjklçzxcvbnm@!#$%¨¨&*()-_=+/?°´{^~]<>:;QWERTYUIOPASDFGHJKLÇZXCVBNM"
function geraSenhaAleatoria(){
    var senha = '';
    var contador = 0;
    let tamanho = document.getElementById('qntCaracteres')
    for (contador; contador < tamanho.value ; contador++ ){
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    contador = 0;
    document.getElementById('senha').value = senha;
}

function copiarSenha(){
    var copia = document.getElementById('senha');
    copia.select();
    copia.setSelectionRange(0,8);
    navigator.clipboard.writeText(copia.value);
    alert("Copiado com sucesso!")
}