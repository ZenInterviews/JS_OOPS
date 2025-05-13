'use client';

const ClassesPage = () => {
  // Demo: Simple JS Class
  class Animal {
    name: string; // Declare the name property

    constructor(name: string) {
      this.name = name;
    }

    speak(): string {
      return `${this.name} barks!`;
    }
  }

  const dog = new Animal("Dog");
  const output = dog.speak();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Classes</h1>
      <p className="mb-4">
        This page demonstrates a simple JavaScript class that makes an animal speak.
      </p>

      <div className="bg-gray-100 border p-4 rounded text-lg font-mono">
        {output}
      </div>
    </div>
  );
};

export default ClassesPage;
