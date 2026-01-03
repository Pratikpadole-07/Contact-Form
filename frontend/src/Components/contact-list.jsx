import React from "react";
import ContactItem from "./contact-list";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-xl">
      <div className="px-6 py-4 border-b border-white/40 flex justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          Contacts
        </h2>
        <span className="text-sm text-slate-600">
          {contacts.length} total
        </span>
      </div>

      {contacts.length === 0 ? (
        <div className="py-12 text-center text-slate-600">
          No contacts yet
        </div>
      ) : (
        <table className="w-full text-sm">
          <tbody>
            {contacts.map((c) => (
              <ContactItem
                key={c._id}
                contact={c}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactList;
