import { useState } from "react";
import "./IntakeForm.css";

function IntakeForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    phoneNumber: "",
    emailAddress: "",
    homeAddress: "",
    projectAddress: "",
    projectScope: "",
    clientExpectations: "",
    renovationReason: "",
    budgetRange: "",
    timelineExpectations: "",
    designSource: "",
    designDetails: "",
    inspirationNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="intake-form">
        <h2>Thank you for your submission!</h2>
        <p>We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="intake-form">
      <h1>
        {formData.clientName
          ? `${formData.clientName} - ${formData.projectAddress}`
          : "Bathroom Renovation Intake Form"}
      </h1>

      <form
        name="bathroom-renovation"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Netlify Forms hidden fields */}
        <input type="hidden" name="form-name" value="bathroom-renovation" />
        <p hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <section>
          <h2>1. Client Information</h2>
          <div className="form-group">
            <label htmlFor="clientName">Name:</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="homeAddress">Home Address:</label>
            <input
              type="text"
              id="homeAddress"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectAddress">Project Address:</label>
            <input
              type="text"
              id="projectAddress"
              name="projectAddress"
              value={formData.projectAddress}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section>
          <h2>2. Project Details</h2>
          <div className="form-group">
            <label htmlFor="projectScope">Project Scope:</label>
            <textarea
              id="projectScope"
              name="projectScope"
              value={formData.projectScope}
              onChange={handleChange}
              placeholder="Example: Full bathroom renovation, partial remodel, etc."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="clientExpectations">
              Client Expectations & Priorities:
            </label>
            <textarea
              id="clientExpectations"
              name="clientExpectations"
              value={formData.clientExpectations}
              onChange={handleChange}
              placeholder="Example: Modern aesthetic, accessible features, luxury upgrades"
            />
          </div>

          <div className="form-group">
            <label htmlFor="budgetRange">Budget Estimate:</label>
            <input
              type="text"
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              placeholder="Enter your budget range"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timelineExpectations">Timeline Expectations:</label>
            <input
              type="text"
              id="timelineExpectations"
              name="timelineExpectations"
              value={formData.timelineExpectations}
              onChange={handleChange}
              placeholder="Example: Flexible, ASAP, specific date"
              required
            />
          </div>
        </section>

        <section>
          <h2>3. Design Information</h2>
          <div className="form-group">
            <label htmlFor="designSource">Design Source:</label>
            <select
              id="designSource"
              name="designSource"
              value={formData.designSource}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="client">Client-Designed</option>
              <option value="inhouse">In-House Design</option>
              <option value="other">Other Designer</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inspirationNotes">Notes:</label>
            <textarea
              id="inspirationNotes"
              name="inspirationNotes"
              value={formData.inspirationNotes}
              onChange={handleChange}
              placeholder="Add descriptions, notes, or inspiration details here"
            />
          </div>
        </section>

        <button type="submit" className="submit-button">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default IntakeForm;
