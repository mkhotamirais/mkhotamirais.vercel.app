import { useState } from "react";
import * as Yup from "yup";

export default function Form2Yup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted:", formData);
    } catch (error) {
      const newErrors = {} as { [key: string]: string };
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((validationError) => {
          if (validationError.path) {
            newErrors[validationError.path] = validationError.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <div className="my-4">
      <h2>Form2 (from roadsidecoder)</h2>
      <p>https://youtu.be/9rp_1TYDlkY?si=9eoRhoBL462YDUyv</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="border w-full"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="border w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="phoneNumber"
            className="border w-full"
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
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
            //   onChange={handleChange}
            placeholder="confirmPassword"
            className="border w-full"
          />
          {/* {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>} */}
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
