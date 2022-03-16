import React from "react";

const contactStyle = {
  alignContent: "center",
  backgroundColor: "rgb(80, 200, 255)",
  backgroundImage: "linear-gradient(45deg, #7FFFD4, #00FFFF, #F0F8FF)",
  width: "100%",
};

const

export default function Contact() {
  return (
    <section style={contactStyle}>
      <div
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          backgroundColor: "rgb(80, 200, 255)",
          backgroundImage: "linear-gradient(45deg, #7FFFD4, #00FFFF, #F0F8FF)",
          padding: "200px",
        }}
      >
        <h1>Contact</h1>

        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name:
            </label>
            <input type="name" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Note:
            </label>
            <textarea
              className="form-control"
              id="textarea"
              placeholder="message required"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
