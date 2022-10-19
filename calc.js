const form = document.querySelector('.formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Stopped');
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso){
        setResultado('Peso invalido <br> (Defina o Peso com Valor Numérico) <br> Separe Utilizando . (Ponto) <br>se for o caso.', false);
        return;
    }
    if(!altura){
        setResultado('Altura invalida <br> (Defina a Altura com Valor Numérico) <br> Separe Utilizando . (Ponto) <br>se for o caso.', false);
        return;
    }
    const imc =getImc(peso, altura);
    const nivelImc = getLevelImc(imc);
    const msg = `Seu IMC é ${imc} ${nivelImc} .`; 
    setResultado( msg, true);
});
function getLevelImc(imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 
    'Obesidade G1', 'Obesidade G2', 'Obesidade G3'];
    if(imc >= 39.9) return nivel[5];
    if(imc >=34.9) return nivel[4];
    if(imc >=29.9) return nivel[3];
    if(imc >=24.9) return nivel[2];
    if(imc >=18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}
function getImc(peso, altura){
    const imc =(peso/Math.pow(altura,2));
    return imc.toFixed(2);
}
function criaParagrafo(){
     
     const p = document.createElement('p');
     return p;
}
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    
    resultado.innerHTML = '';
    const p = criaParagrafo();
    if(isValid){
         p.classList.add('ok');
    }else{
        p.classList.add('NoOk');
    }
    p.innerHTML = msg;
    
    resultado.appendChild(p);
}