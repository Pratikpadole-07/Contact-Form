import React from "react";

function ContactItem({ contact, onDelete }) {
  return (
    <tr className="border-b border-white/40 hover:bg-white/50 transition">
      <td className="px-4 py-3 font-medium text-slate-800">
        {contact.name}
      </td>
      <td className="px-4 py-3 text-slate-600">
        {contact.email}
      </td>
      <td className="px-4 py-3 text-slate-600">
        {contact.phone}
      </td>
      <td className="px-4 py-3 text-right">
        <button
          onClick={() => onDelete(contact._id)}
          className="text-red-500 hover:text-red-600 font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactItem;
