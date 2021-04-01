import mongoose from 'mongoose';
import Customer from './models/customer.js';

//Map global promises
mongoose.Promise = global.Promise;
//Connect to db

const db = mongoose.connect('mongodb://localhost:27017/customercli', { useNewUrlParser: true, useUnifiedTopology: true })

//Add Customer
export const addCustomer = (customer) => {
    Customer.create(customer)
        .then(customer => {
            console.info('New Customer Added');
            mongoose.connection.close()
        })
}


//Find Customer
export const findCustomer = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstName: search }, { lastName: search }] })
        .then(customer => {
            console.info(customer)
            console.info(`${customer.length} matches`)
            mongoose.connection.close()
        })

}

//update customer
export const updateCustomer = (_id, customer) => {
    Customer.findByIdAndUpdate({ _id }, customer)
        .then(customer => {
            console.info('Customer has been updated')
            mongoose.connection.close()
        })
}

// Delete customer
export const removeCustomer = (_id) => {
    Customer.findByIdAndDelete({ _id })
        .then(customer => {
            console.info('Customer has been deleted')
            mongoose.connection.close()
        })
}

//List all customer

export const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers)
            console.info(`${customers.length} customers`)
            mongoose.connection.close()
        })
}
