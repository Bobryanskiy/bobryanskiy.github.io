document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['#ffcc00', '#e6b800', '#ff9900', '#cc8400', '#b36b00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});