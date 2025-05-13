'use client';

const PolymorphismPage = () => {
  // Demo: Polymorphism using method overriding
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
      return `${this.name} barks.`;
    }
  }

  class Cat extends Animal {
    speak(): string {
      return `${this.name} meows.`;
    }
  }

  const animals: Animal[] = [new Dog("Bruno"), new Cat("Whiskers")];
  const output = animals.map((animal) => animal.speak()).join(" ");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Polymorphism</h1>
      <p className="mb-4">
        This page demonstrates <strong>polymorphism</strong> where different classes implement the same method
        (<code>speak()</code>) with different behaviors.
      </p>

      <div className="bg-gray-100 border p-4 rounded text-lg font-mono">
        {output}
      </div>
    </div>
  );
};

export default PolymorphismPage;
