import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./Components/contact-form";
import ContactList from "./Components/contact-list";

const API_URL = import.meta.env.VITE_API_URL;
console.log("API URL:", import.meta.env.VITE_API_URL);

function App() {
  const [contacts, setContacts] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  const addContact = async (contact) => {
    try {
      await axios.post(API_URL, contact);
      await fetchContacts();
      setSuccess("Contact added");
      setTimeout(() => setSuccess(""), 2000);
    } catch (err) {
      console.error("Add failed", err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-white">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold text-emerald-700">
          Contact Manager
        </h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-10">
        {success && (
          <div className="mx-auto max-w-md bg-emerald-500 text-white text-center py-2 rounded-full shadow">
            {success}
          </div>
        )}

        <ContactForm onAdd={addContact} />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </main>
    </div>
  );
}

export default App;
