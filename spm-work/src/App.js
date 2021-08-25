import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div class="form-group"></div>
      <div class="form-group row"></div>
      <div class="custom-control custom-checkbox"></div>
      <div class="form-group"></div>
      <h1>Stay Fit Gym </h1>

      <h3>
        <small class="text-muted">Member Registration</small>
      </h3>
      <form>
        <label>Title </label>
        <select class="custom-select custom-select-sm">
          <option selected>Mr</option>
          <option value="1">Ms</option>
          <option value="2">Mrs</option>
        </select>
        <br />
        <br />
        <label for="Name">Name</label>
        <input
          type="text"
          class="form-control-sm"
          id="formGroupExampleInput"
          placeholder="Name"
        ></input>
        <br />
        <br />
        <label for="formGroupExampleInput2">Address</label>
        <input
          type="text"
          class="form-control-sm"
          id="formGroupExampleInput2"
          placeholder="Address"
        ></input>
        <br />
        <br />
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control-sm"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
        <br />
        <br />
        <label>Purpose to coming to the gym </label>
        <br />
        <br />
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck1"
        ></input>
        <label class="custom-control-label" for="customCheck1">
          To reduce weight
        </label>
        <br />
        <br />
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck2"
        ></input>
        <label class="custom-control-label" for="customCheck2">
          To gain weight
        </label>
        <br />
        <br />
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck3"
        ></input>
        <label class="custom-control-label" for="customCheck3">
          To build muscles
        </label>
        <br />
        <br />
        <label for="exampleFormControlTextarea1">other</label>
        <textarea
          class="form-control-sm"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <br />
        <br />
        <label for="exampleFormControlTextarea1">Enter Height</label>
        <input
          type="text"
          class="form-control-sm"
          id="formGroupExampleInput"
          placeholder="Height"
        ></input>
        <label for="exampleFormControlTextarea1">Enter weight</label>
        <input
          type="text"
          class="form-control-sm"
          id="formGroupExampleInput"
          placeholder="weight"
        ></input>
        <label for="exampleFormControlTextarea1">BMI</label>
        <input
          type="text"
          class="form-control-sm"
          id="formGroupExampleInput"
          placeholder="BMI"
        ></input>
        <br />
        <br />
        <label>Membership Type</label>
        <select class="custom-select custom-select-sm">
          <option selected>Pay As You Go</option>
          <option value="1">Class Package</option>
          <option value="2">Open Membership</option>
          <option value="3">Term Membership</option>
        </select>
        <br />
        <br />
        <Button>Register</Button>
      </form>
    </div>
  );
}

export default App;
