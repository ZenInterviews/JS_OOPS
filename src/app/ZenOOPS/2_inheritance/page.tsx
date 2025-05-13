'use client';

const InheritancePage = () => {
  // Demo: Inheritance using class extends
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    speak(): string {
      return `${this.name} makes a sound.`;
    }
  }

  class Dog extends Animal {
    speak(): string {
      return `${this.name} barks loudly!`;
    }
  }

  const myDog = new Dog("Buddy");
  const output = myDog.speak();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Inheritance</h1>
      <p className="mb-4">
        This page demonstrates class inheritance in JavaScript using <code>extends</code>. 
        The <code>Dog</code> class inherits from <code>Animal</code> and overrides the <code>speak()</code> method.
      </p>

      <div className="bg-gray-100 border p-4 rounded text-lg font-mono">
        {output}
      </div>
    </div>
  );
};

export default InheritancePage;
