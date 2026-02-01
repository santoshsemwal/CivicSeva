import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className=" footcontent max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <h3>Civic Seva</h3>
            <p>Empowering citizens to report civic issues, track progress, and collaborate with authorities for cleaner, safer, and smarter communities.</p>
            <ul className="space-y-2 text-sm">
                <li>📍 India</li>
                <li>📧 support@civicseva.com</li>
                <li>📞 +91 XXXXX XXXXX</li>
            </ul>
        </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm">
             © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Civic Seva</span>.  
            All rights reserved. Built with ❤️ for better communities.
      </div>
    </footer>
  );
}

export default Footer;
