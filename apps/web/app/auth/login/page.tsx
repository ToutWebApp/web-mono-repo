"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithCredentials } from "@repo/auth/src/signInWithCredentials";
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
import { useAuth } from "@repo/auth";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function WebLoginPage() {
  const { login, loading } = useAuth();
  const [loginError, setLoginError] = useState<string>("");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoginError("");
    
    try {
      await login(data);      
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Handle API error responses
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setLoginError("Invalid email or password");
            break;
          case 400:
            setLoginError("Validation error. Please check your input.");
            break;
          default:
            setLoginError("An error occurred during login. Please try again.");
        }
      } else {
        setLoginError("Network error. Please check your connection.");
      }
    }
  };


  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md bg-white'>
        <CardHeader className='pt-8 pb-4 text-center'>
          <h1 className='text-xl font-medium'>Log In</h1>
          <div className='mt-2 h-px bg-gray-200' />
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* Form-level error */}
            {loginError && (
              <div className='p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md'>
                {loginError}
              </div>
            )}

            {/* Email Field */}
            <div className='space-y-1'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                {...register("email")}
                aria-invalid={!!errors.email}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className='text-xs text-red-600'>{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className='space-y-1'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                {...register("password")}
                aria-invalid={!!errors.password}
                disabled={isSubmitting}
              />
              {errors.password && (
                <p className='text-xs text-red-600'>
                  {errors.password.message}
                </p>
              )}
              <div className='text-right'>
                <Link
                  href='/forgot-password'
                  className='text-sm text-gray-500 hover:text-gray-700'
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <Button
              type='submit'
              className='w-full text-white bg-ipsum-orange'
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className='py-4 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account?{" "}
            <Link
              href='/register'
              className='text-ipsum-orange hover:underline'
            >
              Create one Now!
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}