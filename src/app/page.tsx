

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */'use client';

import Link from 'next/link';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to JS OOP Tutorial</h1>
      <p className="text-lg">
        Learn JavaScript Object-Oriented Programming concepts through hands-on examples.
        Click a topic from the sidebar or choose one below to get started.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        <li>
          <Link href="/OOPS/1_classes" className="hover:underline">1. Classes</Link>
        </li>
        <li>
          <Link href="/OOPS/2_inheritance" className="hover:underline">2. Inheritance</Link>
        </li>
        <li>
          <Link href="/OOPS/3_encapsulation" className="hover:underline">3. Encapsulation</Link>
        </li>
        <li>
          <Link href="/OOPS/4_polymorphism" className="hover:underline">4. Polymorphism</Link>
        </li>
        <li>
          <Link href="/OOPS/5_prototype" className="hover:underline">5. Prototypes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
