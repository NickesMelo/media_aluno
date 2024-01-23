function myScope () {
    const container = document.querySelector('.container');

    const button = document.querySelector('button');

    button.addEventListener('click', function (e){
        e.preventDefault();

        const nomeAluno = prompt('Informe o nome do aluno');
        
        const firstNote = Number(prompt('Digite a primeira nota'));
        const secondNote = Number(prompt('Digite a segunda nota'));
        const threeNote = Number(prompt('Digite a terceira nota'));
        const forNote = Number(prompt('Digite a quarta nota'));
        
        const setResult = Number((firstNote + secondNote + threeNote + forNote) / 4);
        const msg = `A média de ${nomeAluno} é ${setResult}.`;
        console.log(msg);
        return Number(setResult.toFixed(1));
        
    })

        
   
}
myScope();