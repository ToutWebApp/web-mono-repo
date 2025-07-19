"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerWithEmail } from "@repo/auth/src/authClient";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

export default function WebRegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    setError("root", { message: "" });
    try {
      await registerWithEmail({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      router.push("/login?registered=true");
    } catch (error: any) {
      console.error("Registration error:", error);
      setError("root", {
        message: error.response?.data?.message || "Registration failed",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="pt-8 pb-4 text-center">
          <h1 className="text-xl font-medium">Create Account</h1>
          <div className="mt-2 h-px bg-gray-200" />
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {errors.root?.message && (
              <p className="text-sm text-red-600 text-center">
                {errors.root.message}
              </p>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  {...register("lastName")}
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {errors.password && (
                <p className="text-xs text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                aria-invalid={!!errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full text-white bg-ipsum-orange"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="py-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-ipsum-orange hover:underline"
            >
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}