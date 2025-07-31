/* hamburgur js logi */

let hamburgurBar = document.querySelector(".hamburgur-container"); // humburgur get

// humburgur show function
const showHamburgur = () => {
  hamburgurBar.style.right = "0px";
};

// humbirgir close function
const closeHambuger = () => {
  hamburgurBar.style.right = "-370px";
};

// ✅ Page load par authentication check
window.addEventListener("load", () => {
  const userEmail = localStorage.getItem("userEmail");
  const path = window.location.pathname;

  if (!userEmail && (path === "/" || path.endsWith("index.html"))) {
    window.location.href = "./pages/login.html";
  }

  if (
    userEmail &&
    (path.includes("login.html") || path.includes("signup.html"))
  ) {
    window.location.href = "../index.html";
  }
});

// ✅ Signup
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(
      "https://ewl-server.vercel.app/api/v1/Auth/Signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: name, Email: email, Password: password }),
      }
    );

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("userEmail", email);
      window.location.href = "../index.html";
    } else {
      alert(data.msg);
    }
  });
}

// ✅ Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const res = await fetch("https://ewl-server.vercel.app/api/v1/Auth/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Email: email, Password: password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("userEmail", email);
      window.location.href = "../index.html";
    } else {
      alert(data.msg);
    }
  });
}

// ✅ Logout
function logout() {
  localStorage.removeItem("userEmail");
  window.location.href = "./pages/login.html";
}
