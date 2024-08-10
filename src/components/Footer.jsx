import React from "react";

function Footer() {
  const footeryear = new Date().getFullYear;
  return (
    <div>
      <footer className="footer p-4 bg-gray-800 text-primary-content footer-center"></footer>
      <svg
        className="inline pr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.386-1.332-1.757-1.332-1.757-1.088-.744.082-.729.082-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.605-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.124-.303-.536-1.527.117-3.18 0 0 1.008-.322 3.302 1.23.957-.266 1.982-.399 3.003-.404 1.021.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.877.117 3.18.769.84 1.235 1.911 1.235 3.221 0 4.608-2.805 5.625-5.476 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.899-.015 3.292 0 .321.218.694.824.576C20.565 21.798 24 17.299 24 12 24 5.373 18.627 0 12 0z" />
      </svg>
      <div className="bg-blue-500 content-center">
        <p>All righs reserved {footeryear}</p>
      </div>
    </div>
  );
}

export default Footer;
