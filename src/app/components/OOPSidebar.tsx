'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-gray-200 rounded-md shadow"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-100 border-r p-4 transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Section: JS OOPS */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">JS OOP Topics</h2>
          <ul className="space-y-2">
            {oopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded ${
                    pathname === link.href
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section: ZenOOPS */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Zen OOP Topics</h2>
          <ul className="space-y-2">
            {zenOopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded ${
                    pathname === link.href
                      ? 'bg-green-600 text-white'
                      : 'hover:bg-gray-200'
                  }`}
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
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default OOPSidebar;
