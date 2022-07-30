import {Customer,Admin} from '../Classes/user_class/userClass.js';


var usersObj =null;
var logiedInUser =null;

function generateUserList() {


    var admin = new Admin('Arun', 37,'male','123');
    var customer = new Customer('Anju', 27,'female','321');
    var customer2 = new Customer('Arav', 20,'female','2123');
// intead of variable we can create it as array.for each new admin or customer

    usersObj = [admin,customer,customer2];
}

export default  {
    userAuthCheck:function(username,password) {
        // intializing user object
        generateUserList();
        // given username and passowrd can validated with db also
        const user = usersObj.find(el => (el.username == username));
        //logedInUser = loginUser.find(el => (el.password == password))
        logiedInUser = user;
        if (user && user.password == password) {
            return user;
        }else {
            return null;
        }
    },
    userLogOut:function() {
        logedInUser = null;
    },
    userSessionCheck:function(){
        return (logedInUser.length > 0) ? true:false;
    }
}