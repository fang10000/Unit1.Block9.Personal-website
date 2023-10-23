function validateForm() {
    let x = document.forms["contactForm"]["First Name"].value
    if (x == "") {
      return false;
    }