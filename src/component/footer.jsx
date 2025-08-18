export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Nakazain"
            className="text-blue-400 hover:underline"
          >Nakazain</a>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Waifu Search. All rights reserved.
        </p>
      </div>
    </footer>
  );
}