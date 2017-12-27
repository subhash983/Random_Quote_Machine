import {colors, quotes} from './data.js';

(function() {

    const getNextQuote = () => {
        //setting background colors
        let colorIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[colorIndex];
        document.body.style.color = colors[colorIndex];
        let elements = document.getElementsByClassName('button');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = colors[colorIndex];
        };

        //setting quoteText
        let quoteIndex = Math.floor(Math.random() * quotes.length);
        document.getElementsByClassName('quoteText')[0].innerHTML = quotes[quoteIndex].quote;
        document.getElementsByClassName('author')[0].innerHTML = "- " + quotes[quoteIndex].author;
    };
    document.getElementById('btnNextQuote').addEventListener('click', getNextQuote);
})();
