document.getElementById('createTag').addEventListener('click', function() {
    const game = document.getElementById('game').value;
    const console = document.getElementById('console').value;
    const playstyle = document.getElementById('playstyle').value;
    const resultElement = document.getElementById('gamerTagResult');

    if (game && console && playstyle) {
        const gamerTag = `${playstyle}-${game}-${console}-Player`;
        resultElement.textContent = `Your Gamer Tag: ${gamerTag}`;
    } else {
        resultElement.textContent = "Please fill in all fields.";
    }
});