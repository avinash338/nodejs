// npm dependency
const mongoose         = require('mongoose');
const messages         = require('../utilities/static_messages');
const { serverConfig } = require('../utilities/constants');

/**
 * @description     This method connects the application to database.
 */
module.exports = () => {
    mongoose.connect( serverConfig.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(messages.DBCONNECTION_SUCCESS_TEXT))
        .catch(err => console.log(messages.DBCONNECTION_FAILURE_TEXT, err));
}
