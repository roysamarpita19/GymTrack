document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await response.json();
  
    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      window.location.href = "/dashboard.html";
    } else {
      alert("Login failed");
    }
  });
  