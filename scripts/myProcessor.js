'use strict';

module.exports = {
    generateRandomData
};

const Faker = require('faker');

function generateRandomData(userContext, events, done){
    const taskSummary = `${Faker.hacker.verb()}`;
    userContext.vars.taskSummary = taskSummary;
    return done();
}