'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './OOPSidebar.css';

const oopLinks = [
  { href: '/OOPS/1_classes', label: '1. Classes' },
  { href: '/OOPS/2_inheritance', label: '2. Inheritance' },
  { href: '/OOPS/3_encapsulation', label: '3. Encapsulation' },
  { href: '/OOPS/4_polymorphism', label: '4. Polymorphism' },
  { href: '/OOPS/5_prototype', label: '5. Prototypes' }
];

const zenOopLinks = [
  { href: '/ZenOOPS/1_classes', label: '1. Classes' },
  { href: '/ZenOOPS/2_inheritance', label: '2. Inheritance' },
  { href: '/ZenOOPS/3_encapsulation', label: '3. Encapsulation' },
  { href: '/ZenOOPS/4_polymorphism', label: '4. Polymorphism' },
  { href: '/ZenOOPS/5_prototype', label: '5. Prototypes' }
];

const OOPSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <div className="sidebar-hamburger">
        <button
          onClick={() => setOpen(!open)}
          className="sidebar-hamburger-button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`sidebar ${open ? 'sidebar-open' : ''}`}
      >
        <div className="sidebar-header">
          <ThemeToggle />
        </div>

        {/* Section: JS OOPS */}
        <div className="sidebar-section">
          <h2 className="sidebar-title">JS OOP Topics</h2>
          <ul className="sidebar-links">
            {oopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`sidebar-link ${pathname === link.href ? 'sidebar-link-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section: ZenOOPS */}
        <div className="sidebar-section">
          <h2 className="sidebar-title">Zen OOP Topics</h2>
          <ul className="sidebar-links">
            {zenOopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`sidebar-link ${pathname === link.href ? 'sidebar-link-active-zen' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default OOPSidebar;
