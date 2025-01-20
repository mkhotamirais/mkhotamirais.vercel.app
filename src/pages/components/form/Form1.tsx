import { useState } from "react";

export default function Form1() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({} as { [key: string]: string });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = {} as { [key: string]: string };

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password does not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="my-4">
      <h2>Form1 (dari Lamadev)</h2>
      <p>https://youtu.be/yra7iNwAjL4?si=bbr3cR--zmKtQYIP</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" name="username" onChange={handleChange} placeholder="username" className="border w-full" />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="mb-2">
          <input type="text" name="email" onChange={handleChange} placeholder="email" className="border w-full" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            className="border w-full"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirmPassword"
            className="border w-full"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          className="border rounded py-1 px-2 w-full bg-blue-500 hover:bg-blue-600 transition-all text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
