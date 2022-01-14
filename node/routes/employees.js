//ALL API calls are routed from this file for pages collection
/*
Set the route defined using require
Load the middleware function on the app */

//Create a router module
const express = require("express")
const router = express.Router();

//Require the page model
const Employee = require("../models/employee")

//Define the GET method on the router.
router.get("/", (req, res) => {
    Employee.find({}, (error, employees)=>{
        if(error) console.log("Error in Employees" + error)
        res.json(employees);
    });
});
router.post("/", (req, res)=> {
    const id = req.fields.id;
    const name = req.fields.name;
    const department = req.fields.department;
    const salary = req.fields.salary;
    const location = req.fields.location;
    const employee = new Employee({
        id:id,
        name: name,
        department: department,
        salary: salary,
        location: location
    });
    employee.save((error) => {
        if(error) console.log("Error in Employees" + error)
        //display the ressponse in json
        res.status(201).end()
    });
/*Define the POST method on the router. */

    router.put("/:id", (req, res)=> {
            const id = req.params.id;
            const name = req.fields.name;
            const department = req.fields.department;
            const salary = req.fields.salary;
            const location = req.fields.salary
    
    Employee.findByid(id, (error, employee) => {
                if(error) console.log("Error in employees" + error)
                employee.id = id;
                employee.name = name;
                employee.department = department;
                employee.salary = salary;
                employee.location = location;
                employee.save((error)=>{
                    if(error) console.log("Error in Employees" + error)
                    res.status(201).end();
                });
            })});//End of get 
/*Define the GET method on the router. */
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    /* Use find query to retrieve the documents from the collection */
    Employee.findByIdAndRemove(id, (error) => {
        if(error) console.log("Error in Pages" + error)
        else {

        /* Display the response in json */
        res.status(204).end();
        }
    }); //end of find
}); //end of get

});
//Export the router
module.exports = router;

    
