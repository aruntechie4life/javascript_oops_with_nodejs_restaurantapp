
// OOP Classes
class User {
  constructor(username, email, age, gender) {
    this.username = username;
    this.email = email,
    this.age = age,
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

export {Admin,Customer};




