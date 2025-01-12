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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email body with formatted content
    const emailBody = `
Client Information:
------------------
Name: ${formData.clientName}
Phone: ${formData.phoneNumber}
Email: ${formData.emailAddress}
Home Address: ${formData.homeAddress}
Project Address: ${formData.projectAddress}

Project Details:
---------------
Project Scope: ${formData.projectScope}
Client Expectations: ${formData.clientExpectations}
Budget Range: ${formData.budgetRange}
Timeline Expectations: ${formData.timelineExpectations}

Design Information:
-----------------
Design Source: ${formData.designSource}
Inspiration Notes: ${formData.inspirationNotes}
    `.trim();

    // Create mailto link with form data
    const mailtoLink = `mailto:ryan@montgomeryconstruction.ca?subject=New Bathroom Renovation Inquiry - ${
      formData.clientName
    }&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="intake-form">
      <h1>
        {formData.clientName
          ? `${formData.clientName} - ${formData.projectAddress}`
          : "Bathroom Renovation Intake Form"}
      </h1>

      <form onSubmit={handleSubmit}>
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
              placeholder="If Different Than Home Address"
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
