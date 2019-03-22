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

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('employees', { active: {employees: true}, data: employeeData, columns: employeeColumns, pageHeader: "Employees"});
});

app.get('/po', (req, res) => {
  res.render('po', { active: {PO: true}, data: poData, columns: poColumns, pageHeader: "Purchase Orders"});
});

app.get('/materials', (req, res) => {
  res.render('materials', { active: {materials: true}, data: materialData, columns: materialColumns, pageHeader: "Materials"});
});

app.get('/creatematerials', (req, res) => {
  res.render('creatematerials', { active: {creatematerials: true}});
});





app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});
