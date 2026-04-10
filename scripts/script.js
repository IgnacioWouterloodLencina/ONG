document.getElementById("formAdocao").addEventListener("submit", function (e) {
e.preventDefault();

let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;//idade
let temp = document.getElementById("temp").value;//tempo sozinho
let telefone = document.getElementById("telefone").value;//telefone
let cpf = document.getElementById("cpf").value;//cpf
let motivo = document.getElementById("motivo").value;//motivo
let cidade = document.getElementById("cidade").value;
let email = document.getElementById("email").value;
let moradia = document.getElementById("moradia").value;
let quintal = document.querySelector('input[name="quintal"]:checked');
let jateve = document.querySelector('input[name="jateve"]:checked');//ja teve cachooro?
let apt = document.querySelector('input[name="apt"]:checked');//ja teve


if(idade <18 ) return alert("idade ruim")
    if(temp <8 ) return alert("tempo ruim")

if(telefone.length < 8) return alert("telefone Inválido");
if(cpf.length == 0) return alert("cpf Inválido");
if(motivo.length < 10) return alert("motivo Inválido");
if(jateve.value == "naoteve") return alert("tem q ter tido");
if(apt.value == "aptnao") return alert("tem q te");


if(nome.length < 3) return alert("Nome Inválido");
document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "nome" + nome;



});
