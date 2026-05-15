import React from "react";
import { Camera, Image, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-10">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Caption<span className="text-indigo-400">AI</span>
          </h1>

          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Login
            </button>

            <button className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Camera className="w-5 h-5 text-indigo-400" />
              <span>AI Image Caption Generator</span>
            </div>

            <h1 className="text-6xl font-extrabold leading-tight">
              Generate
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Smart Captions
              </span>
              <br />
              For Any Image
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Upload any image and let AI generate creative, meaningful,
              and intelligent captions instantly.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <div className="bg-white/10 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
              <Image className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold">Image Upload</h3>
              <p className="text-slate-300 mt-2">
                Upload JPG, PNG, and other image formats easily.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
              <Sparkles className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold">AI Captions</h3>
              <p className="text-slate-300 mt-2">
                Generate descriptive and creative captions instantly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}