// Write your solution in this file!
const employee = {
    name : "Moath",
    streetAddress: "102 Street"
}
 function updateEmployeeWithKeyAndValue(obj,key,value){
    const newEmp = {...obj,
    [key]:value } ;
    return newEmp;
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
 }
 function deleteFromEmployeeByKey(obj,key){
    const newEmp = {...obj};
    delete newEmp[key];
    return newEmp;
 }

 function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
 }