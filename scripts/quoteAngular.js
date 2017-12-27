import {colors, quotes} from './data.js';

let app = angular.module('quoteMachineApp', []);

app.controller('quoteMachineController', function() {
    var self = this;
    self.quoteText = "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.";
    self.author = 'Albert Einstein';
    self.bgColor = {
        'background-color': 'rgb(71, 46, 50)',
        'color':'rgb(71, 46, 50)'
    };
    self.iconsbgColor = {
        'background-color': 'rgb(71, 46, 50)',
    };
    self.getNextQuote = function() {
        //setting background colors
        let colorIndex = Math.floor(Math.random() * colors.length);
        self.bgColor = {
            'background-color': colors[colorIndex],
            'color': colors[colorIndex]
        };
        self.iconsbgColor = {
            'background-color': colors[colorIndex],
        };
        //setting quoteText
        let quoteIndex = Math.floor(Math.random() * quotes.length);
        self.quoteText = quotes[quoteIndex].quote;
        self.author = quotes[quoteIndex].author;
    };
});
