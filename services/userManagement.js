import {Customer,Admin} from '../Classes/user_class/userClass.js';


// later create usrerObj from db after login success
function generateUserList() {
    var admin = new Admin('Arun', 'arunvavara@gmail.com', 37,'male');
    var customer = new Customer('Anju', 'anju@gmail.com', 27,'female');
    var users = [admin,customer];
    console.log (users);
}

export {generateUserList};