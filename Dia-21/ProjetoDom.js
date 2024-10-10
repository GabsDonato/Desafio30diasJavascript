/*
### DOM: Mini projeto 1

1. Desenvolva a seguinte aplicação, utilizando os elementos HTML abaixo para começar. Você encontrará o mesmo código na pasta inicial. Aplique todos os estilos e funcionalidades apenas com JavaScript.

   - A cor do ano muda a cada 1 segundo.
   - A cor de fundo da data e hora muda a cada segundo.
   - O desafio concluído tem fundo verde.
   - O desafio em andamento tem fundo amarelo.
   - Os desafios futuros têm fundo vermelho.   
*/


const challenges = document.querySelectorAll('#challenge-list li');
        const timeDisplay = document.getElementById('time-display');

        function changeYearColor() {
            const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            timeDisplay.style.color = randomColor;
        }

        function changeBackgroundColor() {
            const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightpink'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }

        function displayTime() {
            const now = new Date();
            timeDisplay.innerText = now.toLocaleTimeString();
        }

        function startApp() {
            setInterval(displayTime, 1000);
            setInterval(changeYearColor, 1000);
            setInterval(changeBackgroundColor, 1000);
        }

        startApp();