'use client';

const EncapsulationPage = () => {
  // Demo: Encapsulation using private field
  class Person {
    name: string;
    #age: number; // Private field

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    getAge(): number {
      return this.#age;
    }

    setAge(newAge: number) {
      if (newAge > 0) {
        this.#age = newAge;
      }
    }
  }

  const person = new Person("Alice", 30);
  person.setAge(35);
  const output = `${person.name} is ${person.getAge()} years old.`;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Encapsulation</h1>
      <p className="mb-4">
        This page demonstrates <strong>encapsulation</strong> using private fields and public getter/setter methods in JavaScript.
      </p>

      <div className="bg-gray-100 border p-4 rounded text-lg font-mono">
        {output}
      </div>
    </div>
  );
};

export default EncapsulationPage;
