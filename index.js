
import userManagementModule from './module/userManagement.js';

//console log ask user name password
//get user name and password form readline
const userName = 'Arun';
const password = '123';

let userLogedInUser = userManagementModule.userAuthCheck(userName,password);
if(userLogedInUser){
    console.log('loged in user is ',userLogedInUser);
    // call menuGeneratorfunction and pass  userLogedInUser.role according to the user role menu wil be created 
}else {
    console.log('wrong user id password');
}





