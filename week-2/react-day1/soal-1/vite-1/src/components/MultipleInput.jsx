import React, { useState } from 'react';

function MultipleInput() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError('Email harus mengandung karakter "@"');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password minimal 6 karakter');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); 
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError && email && password) {
      alert('Formulir berhasil disubmit!');
      console.log({ email, password });
    } else {
      alert('Mohon perbaiki kesalahan dalam formulir.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Formulir dengan Validasi</h2>

      <div>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        {emailError && (
          <p style={{ color: 'red', fontSize: '0.8em' }}>{emailError}</p>
        )}
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {passwordError && (
          <p style={{ color: 'red', fontSize: '0.8em' }}>{passwordError}</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default MultipleInput;
