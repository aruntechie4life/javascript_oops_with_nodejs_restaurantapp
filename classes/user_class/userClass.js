
// OOP Classes
class User {
  constructor(username, age,gender,password) {
    this.username = username;
    this.age = age,
    this.password = password,
    this.gender = gender
    
  }
  login() {
    // setLogin
    return this;
  }
  logout() {
     // setLogOut
    return this;
  }
}


class Admin extends User {
    constructor(username, email, age, gender) {
       super(username, email, age, gender)
        this.role = 'Admin';
    }
}

 
class Customer extends User {

    constructor(username, email, age, gender) {
        super(username, email, age, gender)
        this.role = 'Customer';
    }

}

export {Admin,Customer,User};




