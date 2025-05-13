'use client';
import LiveCode from '@/app/components/LiveEditor';

const InheritancePage = () => {
  const code = `
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks
  `.trim();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">2. Inheritance</h1>
      <p className="mb-4">
        Inheritance allows a class to acquire properties and methods of another class using the <code>extends</code> keyword. It's a core concept of OOP used to promote code reuse.
      </p>
      <LiveCode code={code} />
    </div>
  );
};

export default InheritancePage;
