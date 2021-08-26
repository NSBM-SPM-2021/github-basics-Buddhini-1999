import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Stay Fit Gym </h1>

        <h3>
          <small class="text-muted">Member Registration</small>
        </h3>
      </center>
      <form>
        <div className="form-group">
          <label>Title</label>

          <select class="custom-select custom-select">
            <option selected>Mr</option>
            <option value="1">Ms</option>
            <option value="2">Mrs</option>
          </select>
          <br />
          <br />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control-m"
            placeholder="Enter Name"
          />
        </div>
        <br />
        <br />

        <div className="form-group">
          <label>Telephone Number</label>
          <input
            type="text"
            className="form-control-m"
            placeholder="Telephone"
          />
        </div>
        <br />
        <br />
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control-m"
            placeholder="Enter email"
          />
          <br />
          <br />
        </div>
        <div className="form-group">
          <label>Purpose to coming gym</label>
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
          <label for="custom-control-label">other</label>
          <br />
          <br />
          <textarea
            class="form-control-sm"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <br />

          <br />
        </div>
        <label for="custom-control-label">
          Member suffering from any chronic disease or any non-communicable
          disease
        </label>
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        ></input>
        <label class="btn btn-outline-primary" for="btnradio1">
          Yes
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        ></input>
        <label class="btn btn-outline-primary" for="btnradio2">
          No
        </label>
        <br />
        <br />

        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            If yes, upload medical repots.
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          ></input>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
