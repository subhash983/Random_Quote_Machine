import {colors, quotes} from './data.js';

let app = angular.module('quoteMachineApp', []);

app.controller('quoteMachineController', function(quotesData,$http) {
    var self = this;
    self.quoteText = "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.";
    self.author = 'Albert Einstein';
    self.bgColor = {
        'background-color': 'rgb(71, 46, 50)',
        'color': 'rgb(71, 46, 50)'
    };
    self.iconsbgColor = {
        'background-color': 'rgb(71, 46, 50)'
    };
    self.getNextQuote = function() {
        //setting background colors
        $http.get('http://localhost:4000/data').then(function (response) {
          self.bgColor = {
              'background-color': response.data.backgroundColor,
              'color': response.data.backgroundColor
          };
          self.iconsbgColor = {
              'background-color': response.data.backgroundColor
          };
          //setting quoteText
          self.quoteText = response.data.quoteData.quote;
          self.author = response.data.quoteData.author;
        });
        // let bgColor = quotesData.getBackgroundColor();
        // self.bgColor = {
        //     'background-color': bgColor,
        //     'color': bgColor
        // };
        // self.iconsbgColor = {
        //     'background-color': bgColor
        // };
        // //setting quoteText
        // let quoteData = quotesData.getQuote();
        // self.quoteText = quoteData.quote;
        // self.author = quoteData.author;
    };
});

app.factory('quotesData', function() {
    return {
        getQuote: function() {
            let quoteIndex = Math.floor(Math.random() * quotes.length);
            return quotes[quoteIndex];
        },
        getBackgroundColor: function() {
            let colorIndex = Math.floor(Math.random() * colors.length);
            return colors[colorIndex];
        }
    };
});
