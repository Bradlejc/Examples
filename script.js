function validation() {
    var user = 'jerod';
    var pass = '123456a';
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if ((user == username) && (pass == password)) {
      swal("Good job!", "You successfully logged in", "success");
    } else {
      sweetAlert("Oops...", "Username or password is incorrect", "error");
    }
  }