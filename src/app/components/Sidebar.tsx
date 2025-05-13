import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 fixed h-full">
      <h2 className="text-xl font-semibold mb-4">JS OOP Topics</h2>
      <ul className="space-y-2">
        <li><Link href="/tutorial/classes">Classes</Link></li>
        <li><Link href="/tutorial/inheritance">Inheritance</Link></li>
        <li><Link href="/tutorial/encapsulation">Encapsulation</Link></li>
        <li><Link href="/tutorial/polymorphism">Polymorphism</Link></li>
        <li><Link href="/tutorial/prototype">Prototype</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
