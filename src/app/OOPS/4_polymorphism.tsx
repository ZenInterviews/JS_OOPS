'use client';
import LiveCode from '@/app/components/LiveEditor';

const PolymorphismPage = () => {
  const code = `
class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks";
  }
}

class Cat extends Animal {
  speak() {
    return "Cat meows";
  }
}

const animals = [new Dog(), new Cat()];
animals.map(a => a.speak());
  `.trim();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">4. Polymorphism</h1>
      <p className="mb-4">
        Polymorphism allows objects of different classes to be treated through a common interface. It enables method overriding — where a subclass provides a specific implementation of a method already defined in its superclass.
      </p>
      <LiveCode code={code} />
    </div>
  );
};

export default PolymorphismPage;
