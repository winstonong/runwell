export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-center">
        &copy; {new Date().getFullYear()} Virtual Assistants Philippines. All rights reserved.
      </div>
    </footer>
  );
}
