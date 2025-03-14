export default function ContactPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>
        Get in touch with me via email at{" "}
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          your.email@example.com
        </a>{" "}
        or through my social media channels.
      </p>
    </section>
  );
}
