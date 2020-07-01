const   express = require('express'),
        port = process.env.PORT || 3001,
        mongoose = require('mongoose'),
        cors = require('cors'),
        router = express();

mongoose.connect("mongodb+srv://test:test@demo-yvblj.mongodb.net/mockdata?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true});

//import routes

const userRoute = require('./routes/user.route');
const addressRoute = require('./routes/address.route');
const employeeRoute = require('./routes/employee.route');

//get route (localhost:3001/api/users)

router.use(cors());
router.use('/api', userRoute);
router.use('/api', addressRoute);
router.use('/api', employeeRoute);

router.get('*', (req, res) => {
    res.send("Error 404 not found!");
});

router.listen(port, ()=> {
    console.log("Running...");
});