#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } from './index.js';
import pkg from 'inquirer';
const { prompt } = pkg;

const program = new Command();

//Customer questions_
const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
]

program
    .version('1.0.0')
    .description('Client Management System')

//adding a customer

//without inquirer
// program
//     .command('add <firstName> <lastName> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstName, lastName, phone, email) => {
//         addCustomer({ firstName, lastName, phone, email });
//     })

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions)
            .then(answers => addCustomer(answers));
    })

//finding a customer

program
    .command('find <name>')
    .alias('f')
    .description('Find a Customer')
    .action(name => findCustomer(name))


//udpating customer

program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id) => {
        prompt(questions)
            .then(answers => updateCustomer(_id, answers));
    })

//removing customer
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a Customer')
    .action(_id => removeCustomer(_id))

//list all customers
program
    .command('list')
    .alias('l')
    .description('List all Customers')
    .action(() => listCustomers())

program.parse(process.argv);