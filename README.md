# Store
![alt text](https://i.imgur.com/Il3VsDI.jpg "Home Page")

This is a simple ecommerce website that is targeting clothing stores. The store owner is given an account that can be used to sign in to the dashboard page. From the dashboard user is able to manage all needed data such as:
* Managing products categories
* Managing products sizes
* Managing products, change availability of certain sizes
* Managing available delivery options
* Managing payments methods
* Browse all orders, change orders status, cancel orders

![alt text](https://i.imgur.com/pXTqvrs.png "Home Page")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for developement purposes.

### Prerequisties

There are __two__ things You have to install in order to get this project running on your machine.
1. Since project uses __NodeJS__ you must have it installed, otherwise you won't be able to start project.
2. Store uses __MongoDB__ as a storage database. To get project running you must have it installed on your local machine or specify MongoDB server address inside */server/index.js* file.
```
// Database
mongoose.connect('mongodb://your-mongodb-server-address/your-collection-name', ...)
```

### Running

1. To run project make sure you have both NodeJS installed and MongoDB server running.
2. Navigate to store root directory and execute following commands to run application:
```
npm install
npm start
```

If everything goes well you will get store running on http://localhost:3000

### Issues

If any error has occurred, please let me know by opening issue.