import { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.password.trim()) {
      console.log(formData);
      setFormData({ name: '', email: '', password: '' });
      return
    } else {
      alert("Please fill out all fields")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;