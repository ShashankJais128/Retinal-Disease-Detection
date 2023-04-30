import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-between px-16 bg-gradient-to-r from-black via-slate-600 to-black text-white border-t-2 border-gray-500 py-8"
    >
      <div>
        <h1 className="text-5xl font-bold">Retinal Disease</h1>
      </div>
      <div className="flex gap-x-10 text-lg">
        <div>
          <h1 className="text-xl font-semibold">Mail</h1>
          <hr />
          <div className="pt-1">
            <p>
              <a href="mailto:2005405@kiit.ac.in.com">Shashank Jaiwal</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">name 2</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">Send email 3</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">Send email</a>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">LinkedIn</h1>
          <hr />
          <div className="pt-1">
            <p>
              <a href="">Shashank Jaiwal</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">Send email</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">Send email</a>
            </p>
            <p>
              <a href="mailto:someone@example.com">Send email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
