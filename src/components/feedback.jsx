import React from "react";

const Feedback = () => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Feedback Form</h2>
      </div>
      <form
        action="https://formspree.io/f/moqgbaja"
        method="POST"
        className="px-6 py-8"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nama:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 font-semibold mb-2"
          >
            Topik:
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Kritik dan Saran:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
