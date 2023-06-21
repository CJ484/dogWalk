import React from 'react';
import { connect } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  clearForm
} from '../../Redux/Actions/actions.js';

const ProfileForm = (props) => {
  const {
    firstName,
    lastName,
    email,
    setFirstName,
    setLastName,
    setEmail,
    clearForm
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email
    });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
  };
};

const mapDispatchToProps = {
  setFirstName,
  setLastName,
  setEmail,
  clearForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
// export default ProfileForm;