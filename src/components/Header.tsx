// // src/components/Header.tsx
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "src/assets/LOGO-3.jpg";
// import "./Header.css";

// const Header: React.FC = () => {
//   const location = useLocation();

//   return (
//     <header className="custom-header">
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img
//           src={logo}
//           alt="IONLedger Logo"
//           style={{ height: "30px", marginRight: "10px" }}
//         />
//         <h1>ION LEDGER</h1>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <Link
//               to="/"
//               style={{
//                 color: location.pathname === "/" ? "#2196F3" : "black",
//               }}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/ecosystem"
//               style={{
//                 color: location.pathname === "/ecosystem" ? "#2196F3" : "black",
//               }}
//             >
//               ECOSYSTEM
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/solutions"
//               style={{
//                 color: location.pathname === "/solutions" ? "#2196F3" : "black",
//               }}
//             >
//               SOLUTIONS
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               style={{
//                 color: location.pathname === "/about" ? "#2196F3" : "black",
//               }}
//             >
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               style={{
//                 color: location.pathname === "/contact" ? "#2196F3" : "black",
//               }}
//             >
//               CONTACT US
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// src/components/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO-3-removebg-preview.png";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="custom-header">
      <div className="logo-container">
        <img src={logo} alt="IONLedger Logo" className="logo" />
        {/* <h1>ION LEDGER</h1> */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/ecosystem"
              className={location.pathname === "/ecosystem" ? "active" : ""}
            >
              ECOSYSTEM
            </Link>
          </li>
          {/* <li>
            <Link
              to="/solutions"
              className={location.pathname === "/solutions" ? "active" : ""}
            >
              SOLUTIONS
            </Link>
          </li> */}
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
