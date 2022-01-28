function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    destino = document.getElementById('saida');
	destino.innerHTML = "Seu calculo é " + peso / (altura * altura);
}
 






