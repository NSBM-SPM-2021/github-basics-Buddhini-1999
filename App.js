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
      <form class="row g-3">
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label">
            Title
          </label>
          <select class="form-select" id="validationDefault04" required>
            <option>Mr</option>
            <option>Ms</option>
            <option>Mrs</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="Enter Name"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Telephone Number
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="Enter Telephone Number"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="email@example.com"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault03" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            required
          />
        </div>

        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">
            Age
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault05"
            placeholder="Enter Age"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Purpose to coming gym
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="gridRadios1">
              To reduce weight
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              To gain weight
            </label>
          </div>
          <div class="form-check disabled">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label class="form-check-label" for="gridRadios3">
              To buitd muscles
            </label>
          </div>
        </div>

        <div class="col-md-4">
          <label for="validationDefault03" class="form-label">
            Other Purposes
          </label>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>

        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">
            Gender
          </label>
          <select class="form-select" id="validationDefault04" required>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="row g-3">
          <div class="col-md-4">
            <lable>Member suffering from any diseases</lable>
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Yes
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              No
            </label>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formFile" class="form-label">
                If yes,upload medical report/
              </label>

              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-4">
              <lable>Package</lable>
              <select class="form-select" id="validationDefault04" required>
                <option selected>Pay As You Go</option>
                <option value="1">Class Package</option>
                <option value="2">Open Membership</option>
                <option value="3">Term Membership</option>
              </select>
            </div>
            <div class="col-md-4">
              <lable>Height</lable>
              <input
                type="text"
                class="form-control"
                placeholder="Height/cm"
                aria-label="Last name"
              />
            </div>
            <div class="col-md-4">
              <lable>weight</lable>
              <input
                type="text"
                class="form-control"
                placeholder="weight/Kg"
                aria-label="Last name"
              />
            </div>
          </div>
          <center>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
          </center>
        </div>
      </form>
    </div>
  );
}

export default App;
