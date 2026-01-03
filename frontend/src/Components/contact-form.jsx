import React, { useState } from "react";

function ContactForm({ onAdd }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const isValid =
    data.name && data.phone && /\S+@\S+\.\S+/.test(data.email);

  const submit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onAdd(data);
    setData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-xl">
      <form onSubmit={submit} className="p-8 space-y-5">
        <h2 className="text-xl font-semibold text-slate-800 text-center">
          Add Contact
        </h2>

        {["name", "email", "phone"].map((field) => (
          <input
            key={field}
            name={field}
            value={data[field]}
            onChange={handleChange}
            placeholder={field.toUpperCase()}
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-300
            focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        ))}

        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="MESSAGE (optional)"
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-300
          focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          disabled={!isValid}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            isValid
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-slate-300 text-slate-500 cursor-not-allowed"
          }`}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
