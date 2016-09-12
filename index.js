'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Country Facts';

/**
 * Array containing country facts.
 */
var FACTS = [
    "On July 4, 1776, the Declaration of Independence was issued, establishing the United States of America.",
    "The US is the 4th largest country in the world by land area and 3rd by population.",
    "On February 25, 2013, the estimated population of the US was 315,568,000.",
    "The US is a diverse country with a multicultural society.",
    "The US has the world's largest economy.",
    "The US developed the first nuclear weapons, using them on the Japanese cities of Hiroshima and Nagasaki near the end of World War 2.",
    "The Mississippi and Missouri Rivers combine to form the longest river system in the US and the fourth longest in the world.",
    "The tallest mountain in the US is Mt McKinley, located in the state of Alaska it reaches 20,320 ft (6,194 m) above sea level.",
    "Alaska was purchased from Russia in 1867 and is the largest state in the US by land area.",
    "Hawaii is the most recent of the 50 states in the US (joining in 1959) and is the only one made up entirely of islands.",
    "Most of the world's tornadoes occur in the Midwest region of the US known as Tornado Alley.",
    "The most populated city in the US is New York City, followed by Los Angeles and Chicago.",
    "English is the most commonly spoken language in the US, followed by Spanish.",
    "The first man to walk on the moon was American Neil Armstrong (July 21, 1969).",
    "The US was the leading force behind the development of the Internet.",
    "The US consumes more petroleum than any other country in the world.",
    "The most popular team sports in the US are American football, baseball, basketball and ice hockey."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random country fact from the country facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact + ". Would you like another fact?";

        this.emit(':askWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a country fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok, bah-bye!!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Until next time, Goodbye!');
    }
};