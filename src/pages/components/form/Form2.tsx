import { useState } from "react";

export default function Form2() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    age: "",
    gender: "",
    interests: [] as string[],
    birthDate: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter((interest) => interest !== name);
    }

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const validateForm = () => {
    const newErrors = {} as { [key: string]: string };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length min 6";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password does not match";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (!/^\d+$/.test(formData.age)) {
      newErrors.age = "Age is invalid";
    }

    if (!formData.birthDate.trim()) {
      newErrors.birthDate = "Birth date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <div className="my-4">
      <h2>Form2 (dari roadsidecoder)</h2>
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
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="age"
            className="border w-full"
          />
          {errors.age && <p className="text-red-500">{errors.age}</p>}
        </div>
        <div className="mb-2">
          <select title="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="sport"
              checked={formData.interests.includes("sport")}
              onChange={handleCheckboxChange}
            />
            Sport
          </label>
          {errors.interests && <p className="text-red-500">{errors.interests}</p>}
        </div>
        <div className="mb-2">
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="border w-full"
            placeholder="birthDate"
          />
          {errors.birthDate && <p className="text-red-500">{errors.birthDate}</p>}
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
