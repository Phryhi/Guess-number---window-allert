const numMax = 100;
const numMin = 1;
const answer = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

let attempts = 0;
let guess;
let running = true;

console.log(answer);

while(running){
    guess = window.prompt(`Escolha um número de ${numMin} - ${numMax}...`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Por favor, insira um número váido.");
    }else if(guess < numMin || guess > numMax){
        window.alert("Por favor, insira um número váido.");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("MUUUITO baixo. Tente novamente!");
        }else if(guess > answer){
            window.alert("MUUUITO alto. Tente novamente!");
        }else{
            window.alert(`Parabéns!! Você acertou, o número era ${answer} e você tentou ${attempts} vezes!`);
            running = false;
        }
    }
    
}