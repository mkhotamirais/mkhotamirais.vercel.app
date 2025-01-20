import { FieldValues, useForm } from "react-hook-form";

export default function Form3Rhf() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="my-4">
      <h2>Form3Rhf (dari bytegrad)</h2>
      <p>https://youtu.be/u6PQ5xZAv7Q?si=n4sSKT2eNTeBkiKf</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <input
            {...register("email", {
              required: "Email harus diisi",
            })}
            type="email"
            placeholder="Email"
            className="border w-full"
          />
          {errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: "Password harus diisi",
              minLength: {
                value: 6,
                message: "Panjang password minimal 6 kata",
              },
            })}
            type="password"
            placeholder="password"
            className="border w-full"
          />
          {errors.password && <p className="text-red-500">{`${errors.password.message}`}</p>}
        </div>
        <div className="mb-2">
          <input
            {...register("confirmPassword", {
              required: "Confirm password harus diisi",
              validate: (value) => value === getValues("password") || "Password tidak cocok",
            })}
            type="password"
            placeholder="confirm password"
            className="border w-full"
          />
          {errors.confirmPassword && <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>}
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
