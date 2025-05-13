'use client';


interface AnimalInterface {
  name: string;
  speak(): string;
}

interface AnimalConstructor {
  new (name: string): AnimalInterface;
  prototype: any;
}

const PrototypePage = () => {
  // Demo: Prototypes using function constructor
  function Animal(this: AnimalInterface, name: string) {
    this.name = name;
  }

  Animal.prototype.speak = function (this: AnimalInterface): string {
    return `${this.name} makes a sound using prototype.`;
  };

  const dog = new (Animal as any)("Dog");
  const output = dog.speak();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Prototypes</h1>
      <p className="mb-4">
        This page demonstrates how prototypes work using function constructors and shared methods through <code>Animal.prototype.speak</code>.
      </p>

      <div className="bg-gray-100 border p-4 rounded text-lg font-mono">
        {output}
      </div>
    </div>
  );
};

export default PrototypePage;