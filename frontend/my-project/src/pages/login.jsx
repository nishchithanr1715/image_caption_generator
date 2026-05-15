import React from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
        
        <h1 className="text-4xl font-bold text-center">
          Welcome Back 👋
        </h1>

        <p className="text-center text-slate-300 mt-3">
          Login to continue using CaptionAI
        </p>

        <form className="space-y-5 mt-8">

          <div>
            <label className="block mb-2 text-sm">
              Email Address
            </label>

            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
              <Mail className="w-5 h-5 text-slate-300" />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
              <Lock className="w-5 h-5 text-slate-300" />

              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </button>
          </div>

          <button className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-lg">
            Login
          </button>
        </form>

        <p className="text-center text-slate-300 mt-6">
          Don&apos;t have an account?{" "}
          <span className="text-indigo-400 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}