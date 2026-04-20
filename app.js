function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("role", "admin");
    window.location = "dashboard.html";
  } 
  else if (user === "user" && pass === "1234") {
    localStorage.setItem("role", "employee");
    window.location = "employee.html";
  } 
  else {
    alert("خطأ في تسجيل الدخول");
  }
}
