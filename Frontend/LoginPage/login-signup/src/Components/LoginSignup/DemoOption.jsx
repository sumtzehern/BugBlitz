import React from 'react';
import './LoginSignup.css'; // Import the CSS file

const DemoOption = ({ onSelectOption, onSignInClick }) => {
  return (
    <div className="overlay">
      <div className="demo-options-container">
        <h2>Choose Your Role</h2>
        <button onClick={() => onSelectOption('projectManager')}>Project Manager</button>
        <button onClick={() => onSelectOption('developer')}>Developer</button>
        <div className="back-to-signin" onClick={onSignInClick}>
          Have an account? <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default DemoOption;
