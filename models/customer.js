import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
})

const Customer = mongoose.model('CustomerSchema', customerSchema);

export default Customer;