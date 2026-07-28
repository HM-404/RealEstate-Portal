function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Owner</h1>

      <textarea
        rows="6"
        placeholder="Write your message..."
        className="w-full border p-4 rounded"
      ></textarea>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
        Send Message
      </button>
    </div>
  );
}

export default Contact;
