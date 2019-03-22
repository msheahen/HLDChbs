const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//register partials
//hbs.registerPartial('partial',)

/// Test data
let something = 'something';
let employeeData = [{
 "id": "1001",
 "lastName": "Ipsem1",
 "firstName": "Loremloremlorem",
 "position": "dollar",
 "action": "Action"
},{
 "id": "1001",
 "lastName": "Ipsem",
 "firstName": "Lorem",
 "position": "dollar",
 "action": "Action"
},{
 "id": "1001",
 "lastName": "Ipsem",
 "firstName": "Lorem",
 "position": "dollar",
 "action": "Action"
}];

let projectsData = [{
  "id": "1001",
  "projectName": "Fujjang International Corp.",
  "dateCreated": "Feb 23, 2019",
  "dateFinished": "Feb 24, 2021",
  "noofUnits": "5",
  "eic": "Roland",
  "status": "Ongoing",
  "action": "Action"
},
{
  "id": "1001",
  "projectName": "Fujjang International Corp.",
  "dateCreated": "Feb 23, 2019",
  "dateFinished": "Feb 24, 2021",
  "noofUnits": "5",
  "eic": "Roland",
  "status": "Ongoing",
  "action": "Action"
}];

let poData = [{
 "id": "1001",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Fullfilled",
 "action": "Action"
},{
 "id": "1002",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Pending",
 "action": "Action"
},{
 "id": "1003",
 "supplier": "Supplier Name",
 "dateOrdered": "Feb 11, 2019",
 "orderedBy": "Sam Malone",
 "dateCreated": "Fev 11, 2019",
  "status": "Cancellend",
 "action": "Action"
},{
 "id": "1001",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Fullfilled",
 "action": "Action"
},{
 "id": "1002",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Pending",
 "action": "Action"
},{
 "id": "1003",
 "supplier": "Supplier Name",
 "dateOrdered": "Feb 11, 2019",
 "orderedBy": "Sam Malone",
 "dateCreated": "Fev 11, 2019",
  "status": "Cancellend",
 "action": "Action"
},{
 "id": "1001",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Fullfilled",
 "action": "Action"
},{
 "id": "1002",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Pending",
 "action": "Action"
},{
 "id": "1003",
 "supplier": "Supplier Name",
 "dateOrdered": "Feb 11, 2019",
 "orderedBy": "Sam Malone",
 "dateCreated": "Fev 11, 2019",
  "status": "Cancelled",
 "action": "Action"
},{
 "id": "1001",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Fullfilled",
 "action": "Action"
},{
 "id": "1002",
 "supplier": "Supplier Name",
 "dateOrdered": "Aug 11, 2018",
 "orderedBy": "Sam Malone",
 "dateCreated": "Aug 11, 2018",
  "status": "Pending",
 "action": "Action"
},{
 "id": "1003",
 "supplier": "Supplier Name",
 "dateOrdered": "Feb 11, 2019",
 "orderedBy": "Sam Malone",
 "dateCreated": "Fev 11, 2019",
  "status": "Cancelled",
 "action": "Action"
}];


let poviewData = [{
 "category": "1001",
 "description": "Placeholder",
 "quantity": "Aug 11, 2018",
 "unit": "Sam Malone",
 "unitCost": "Aug 11, 2018",
  "amount": "Fullfilled"

},{
 "category": "1002",
 "description": "Supplier Name",
 "quantity": "Aug 11, 2018",
 "unit": "Sam Malone",
 "unitCost": "Aug 11, 2018",
  "amount": "Pending"
},{
 "category": "1003",
 "description": "Supplier Name",
 "quantity": "Feb 11, 2019",
 "unit": "Sam Malone",
 "unitCost": "Fev 11, 2019",
  "amount": "Cancellend"
},{
 "category": "1001",
 "description": "Supplier Name",
 "quantity": "Aug 11, 2018",
 "unit": "Sam Malone",
 "unitCost": "Aug 11, 2018",
  "amount": "Fullfilled"
}];

let materialData = [{
 "id": "1001",
 "material": "Paper",
 "dateCreated": "Aug 21, 2018",
 "action": "Action"
},{
 "id": "1001",
 "material": "Bronze",
 "dateCreated": "Aug 21, 2018",
 "action": "Action"
},{
 "id": "1001",
 "material": "Cobalt",
 "dateCreated": "Aug 21, 2018",
 "action": "Action"
}];

let projectsColumns = [{
  "name": "id",
  "value": "ID",
  "editable": false
},{
  "name": "projectName",
  "value": "Project Name",
  "editable": false
},{
  "name": "dateCreated",
  "value": "Date Created",
  "editable": false
},{
  "name": "dateFinished",
  "value": "Date Finished",
  "editable": false
},{
  "name": "noofUnits",
  "value": "No. of Units",
  "editable": false
},{
  "name": "eic",
  "value": "EIC",
  "editable": false
},{
  "name": "status",
  "value": "Status",
  "editable": false
},{
  "name": "action",
  "value": "Action",
  "editable": true
}
]
let employeeColumns = [{
 "name": "id",
 "value": "ID",
 "editable": false
},{
 "name": "lastName",
 "value": "Last Name",
 "editable": false
},{
 "name": "firstName",
 "value": "First Name",
 "editable": false
},{
 "name": "position",
 "value": "Position",
 "editable": false
},{
 "name": "action",
 "value": "Action",
 "editable": true
}];

let materialColumns = [{
 "name": "id",
 "value": "ID",
 "editable": false
},{
 "name": "material",
 "value": "Material",
 "editable": false
},{
 "name": "dateCreated",
 "value": "Date Created",
 "editable": false
},{
 "name": "action",
 "value": "Action",
 "editable": true
}];

let poColumns = [{
 "name": "id",
 "value": "ID",
 "editable": false
},{
 "name": "supplier",
 "value": "Supplier",
 "editable": false
},{
 "name": "dateOrdered",
 "value": "Date Ordered",
 "editable": false
},{
 "name": "dateCreated",
 "value": "Date Created",
 "editable": false
},{
 "name": "orderedBy",
 "value": "Ordered By",
 "editable": false
},{
 "name": "status",
 "value": "Status",
 "editable": false
},{
 "name": "action",
 "value": "Action",
 "editable": true
}];

let poviewColumns = [{
 "name": "category",
 "value": "Category",
 "editable": false
},{
 "name": "description",
 "value": "Description",
 "editable": false
},{
 "name": "quantity",
 "value": "Quantity",
 "editable": false
},{
 "name": "unit",
 "value": "Unit",
 "editable": false
},{
 "name": "unitCost",
 "value": "Unit Cost",
 "editable": false
},{
 "name": "amount",
 "value": "Amount",
 "editable": false
}];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('management/employees', { active: {employees: true}, data: employeeData, columns: employeeColumns, pageHeader: "Employees"});
});

app.get('/projects', (req, res) => {
  res.render('management/projects', { active: {projects: true}, data: projectsData, columns: projectsColumns, pageHeader: "Projects"});
});

app.get('/createprojects', (req, res) => {
  res.render('management/createprojects', { active: {projects: true}, pageHeader: "Create a New Project"});
});

app.get('/viewprojects', (req, res) => {
  res.render('management/viewprojects', { active: {projects: true}, data: projectsData, columns: projectsColumns, pageHeader: "Projects"});
});

app.get('/po', (req, res) => {
  res.render('management/po', { active: {PO: true}, data: poData, columns: poColumns, pageHeader: "Purchase Orders"});
});

app.get('/viewapo', (req, res) => {
  res.render('management/viewapo', { active: {PO: true}, data: poviewData, columns: poviewColumns, pageHeader: "Purchase Orders"});
});

app.get('/materials', (req, res) => {
  res.render('management/materials', { active: {materials: true}, data: materialData, columns: materialColumns, pageHeader: "Materials"});
});

app.get('/creatematerials', (req, res) => {
  res.render('management/creatematerials', { active: {creatematerials: true}});
});





app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});
