import { useState } from "react";

export default function Form3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors([...errors, "Password does not match"]);
      setIsSubmitting(false);
      return;
    }

    // TODO: submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
    setIsSubmitting(false);
  };

  return (
    <div className="my-4">
      <h2>Form3 (dari bytegrad)</h2>
      <p>https://youtu.be/u6PQ5xZAv7Q?si=n4sSKT2eNTeBkiKf</p>
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error} className="bg-red-100 text-red-500 px-4 py-2 rounded">
              {error}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            maxLength={50}
            className="border w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            minLength={6}
            className="border w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password"
            required
            className="border w-full"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="border rounded py-1 px-2 w-full bg-blue-500 hover:bg-blue-600 transition-all text-white disabled:bg-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
