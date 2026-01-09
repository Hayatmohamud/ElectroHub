import React from "react";
import { Globe, Zap, Shield, Headphones } from "lucide-react";

export default function About() {
  const stats = [
    { value: "10M+", label: "Happy Customers" },
    { value: "500+", label: "Brand Partners" },
    { value: "50+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We source only genuine products from authorized distributors and manufacturers.",
    },
    {
      icon: Headphones,
      title: "Customer Focus",
      description:
        "Our dedicated support team is available around the clock to assist you.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We deliver to over 50 countries with fast and reliable shipping options.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sky-300 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powering Your <span className="text-sky-400">Digital Life</span>
          </h1>

          <p className="text-lg text-slate-300">
            Since 2023, ElectroHub has been at the forefront of consumer
            electronics, bringing the latest technology to millions of customers
            worldwide with unmatched quality and service.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-500/20 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-sky-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Our passionate team of experts is dedicated to bringing you the best
          electronics experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-sky-500/20"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sky-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
