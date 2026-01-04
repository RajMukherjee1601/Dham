import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asalpath-logo.jpg";

const NAV_ITEMS = [
  { label: "About Bhairavidham", type: "route", to: "/about" },
  {
    label: "Shishya",
    type: "external",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfFiJD7BVhTFhTusHA4xbsNr9jzPYXXWnS1SMrddSYL5zbbIw/viewform",
  },
  {
    label: "Guru Diksha",
    type: "external",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeI7hGhiqvhhJw3F5Llnp7aeg6zcH3aYq1KliY9z7Y3XQ9gIg/viewform",
  },
  { label: "Bhairavidham Sutra Products", type: "disabled", note: "Coming soon" },
  { label: "Events", type: "route",to:"/Event" },
  { label: "Gallery", type: "disabled", note: "Coming soon" },
  { label: "Travel", type: "route", to: "/Travel" },
  { label: "Contact", type: "route", to: "/contact" },
];

const SidebarItem = ({ item }) => {
  if (item.type === "route") {
    return (
      <NavLink
        to={item.to}
        end
        className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
      >
        {item.label}
      </NavLink>
    );
  }

  if (item.type === "external") {
    return (
      <a
        className="nav-item"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.label} (opens in new tab)`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <button
      className="nav-item nav-item--disabled"
      type="button"
      disabled
      aria-disabled="true"
      title={item.note || "Coming soon"}
    >
      {item.label}
      {item.note ? <span className="nav-item-note"> • {item.note}</span> : null}
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Primary">
      {/* Brand */}
      <div className="brand-section">
        <div className="brand-logo-wrapper">
          <img
            src={logo}
            alt="Bhairavi Dham logo"
            className="brand-logo"
            loading="lazy"
          />
        </div>

        <h1 className="brand-title">BHAIRAVI DHAM</h1>
        <p className="brand-subtitle">Tantra • Shakti • Sadhana</p>
      </div>

      {/* Nav */}
      <nav className="nav-menu" aria-label="Main navigation">
        <p className="nav-label">NAVIGATION</p>

        {/* ✅ Scroll only this part */}
        <div className="nav-scroll">
          <ul className="nav-list" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="nav-list-item">
                <SidebarItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <p>खैरा ग्राम • राजनांदगांव, छत्तीसगढ़</p>
      </div>
    </aside>
  );
};

export default Sidebar;
