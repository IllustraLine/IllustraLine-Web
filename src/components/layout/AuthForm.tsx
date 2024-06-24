"use client";
import { login, register } from "@/services/auth";
import React, { useState } from "react";
import { z } from "zod";
interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  const schema = z
    .object({
      username:
        type === "register"
          ? z.string().nonempty("Nama pengguna diperlukan")
          : z.string().optional(),
      email: z.string().email("Alamat email tidak valid"),
      password: z
        .string()
        .min(8, "Kata sandi minimal 8 karakter")
        .regex(/[A-Z]/, "Kata sandi harus berisi minimal satu huruf kapital")
        .regex(
          /[!@#$%^&*]/,
          "Kata sandi harus berisi minimal satu karakter khusus",
        ),
      confirmPassword:
        type === "register"
          ? z.string().nonempty("Konfirmasi kata sandi diperlukan")
          : z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Kata sandi tidak cocok",
      path: ["confirmPassword"],
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("try");
      schema.parse(formData);
      setErrors({});

      if (type === "login") {
        await login(formData.email, formData.password);
      } else {
        await register(formData.username, formData.email, formData.password);
      }

      // Handle successful form submission (e.g., navigate to another page or show a success message)
      console.log("Form submitted successfully");
    } catch (err) {
      console.log("catch");
      if (err instanceof z.ZodError) {
        const errorObject: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          errorObject[error.path[0] as string] = error.message;
        });
        setErrors(errorObject);
      } else {
        // Handle other errors (e.g., network errors or server errors)
        setErrors({ general: "Something went wrong. Please try again." });
      }
    }
  };

  return (
    <form
      className="mx-auto mt-10 h-fit w-96 rounded-md border bg-white p-6"
      onSubmit={(e) => {
        handleSubmit;
      }}
    >
      <h2 className="mb-6 text-2xl font-bold">
        {type === "login" ? "Login" : "Register"}
      </h2>

      {type === "register" && (
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`mt-1 block w-full border px-3 py-2 ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.username && (
            <p className="mt-2 text-sm text-red-600">{errors.username}</p>
          )}
        </div>
      )}

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full border px-3 py-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`mt-1 block w-full border px-3 py-2 ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      {type === "register" && (
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`mt-1 block w-full border px-3 py-2 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full rounded-md bg-blue-400 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
