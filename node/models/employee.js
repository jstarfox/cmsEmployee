/* Define a PageSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
Create the model for PageSchema
Export the model. 
*/
//Require mongoose module 
const mongoose = require("mongoose")

// Define a PageSchema
const EmployeeSchema = mongoose.Schema({
    id: String,
    name: String,
    department: String,
    salary: Number,
    location: String,
    }
  );

  //Create the model for PageSchema
  //Export the model
  const employee = (module.exports=mongoose.model("Employee", EmployeeSchema))