import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function Form3RhfZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    // getValues,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // console.log(data);

    // Kalau kamu gunakan NextJs, gunakan code berikut untuk di bagian server side

    // ---- bagian nextjs
    // import { NextResponse } from 'next/server'

    // export async function POST(request: Request){
    //   const body: unknown = await request.json();
    //   signUpSchema.safeParse(body);
    //   if(!result.success){
    //     result.error.issues.forEach((issue) => {
    //       zodErrors = {...zodErrors, [issue.path[0]]: issue.message}
    //     })
    //   }
    //   return NextResponse.json(
    //     Object.keys(zodErrors).length > 0
    //       ? {errors: zodErrors}
    //       : {success: true}
    //   )
    // }
    // ---- akhir nextjs

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      }
    }

    // reset();
  };

  return (
    <div className="my-4">
      <h2>Form3RhfZod (dari bytegrad)</h2>
      <p>https://youtu.be/u6PQ5xZAv7Q?si=n4sSKT2eNTeBkiKf</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <input {...register("email")} type="email" placeholder="Email" className="border w-full" />
          {errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}
        </div>
        <div className="mb-2">
          <input {...register("password")} type="password" placeholder="password" className="border w-full" />
          {errors.password && <p className="text-red-500">{`${errors.password.message}`}</p>}
        </div>
        <div className="mb-2">
          <input
            {...register("confirmPassword")}
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
