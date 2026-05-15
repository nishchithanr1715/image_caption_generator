import React from "react";
import { User, Mail, Lock } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-950 text-white px-6">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
        
        <h1 className="text-4xl font-bold text-center">
          Create Account 🚀
        </h1>

        <p className="text-center text-slate-300 mt-3">
          Join CaptionAI and generate amazing captions
        </p>

        <form className="space-y-5 mt-8">

          <div>
            <label className="block mb-2 text-sm">
              Full Name
            </label>

            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
              <User className="w-5 h-5 text-slate-300" />

              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent outline-none w-full placeholder:text-slate-400"
              />
            </div>
          </div>

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
                placeholder="Create a password"
                className="bg-transparent outline-none w-full placeholder:text-slate-400"
              />
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold text-lg">
            Create Account
          </button>
        </form>

        <p className="text-center text-slate-300 mt-6">
          Already have an account?{" "}
          <span className="text-pink-400 cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}