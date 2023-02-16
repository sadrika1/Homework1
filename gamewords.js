let gameTwo = () => {
    let gameWords = ['Яблоко','Груша','Дыня','Виноград','Персик', 'Апельсин','Мандарин'];
    gameWords = gameWords.sort(() => Math.random() - 0.5);
    alert(gameWords.join(', '));

    let question1 = prompt('Чему равнялся первый элемент массива?');
    let question2 = prompt('Чему равнялся последний элемент массива?');
    
    if (question1.toLowerCase() === gameWords[0].toLowerCase() && question2.toLowerCase() === gameWords[gameWords.length - 1].toLowerCase()) {
    alert('Поздравляем, вы угадали оба элемента!')
    }  else if (question1.toLowerCase() === gameWords[0].toLowerCase() || question2.toLowerCase() === gameWords[gameWords.length - 1].toLowerCase()) {
    alert ('Вы были близки к победе!');
    } else {
    alert ('Неверный ответ')
    }
}