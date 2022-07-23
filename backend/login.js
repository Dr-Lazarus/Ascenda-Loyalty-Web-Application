const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  axios.post("http://localhost:5000/api/users", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
});
const nameInput = document.getElementById("name");
const picInput = document.getElementById("pic");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = nameInput.value;
  const pic = picInput.value;

  axios.post("http://localhost:5000/api/register", {
      email: email,
      password: password,
      name : name,
      pic : pic
    })
    .then((response) => {
      console.log(response);
    });
});

export const register = async (email, password) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/users/register',
        data: {
          email,
          password,
          firstName ,
          lastName,
          confirmPassword,
          contactNumber,
        }
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'Logged in successfully!');
        window.setTimeout(() => {
          location.assign('/profile');
        }, 1500);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  export const login = async (email, password) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/users/login',
        data: {
          email,
          password
        }
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'Logged in successfully!');
        window.setTimeout(() => {
          location.assign('/profile');
        }, 1500);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };