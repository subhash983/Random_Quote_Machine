import {colors, quotes} from './data.js';

let app = angular.module('quoteMachineApp', ['ngRoute']);

app.controller('quoteMachineController', function(quotesData) {
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
        quotesData.getQuote().then(function(response) {
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
    };
});

app.factory('quotesData', function($http) {
    return {
        getQuote: function() {
            return $http.get('http://localhost:4000/data');
        }
    };
});

app.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: './templates/quoteTemplate.html'}).otherwise({redirectTo: '/'});
});
