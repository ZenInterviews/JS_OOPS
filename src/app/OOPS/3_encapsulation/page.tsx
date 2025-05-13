'use client';
import LiveCode from '@/app/components/LiveEditor';

const EncapsulationPage = () => {
  const code = `
class Person {
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}

const person = new Person("Alice", 30);
person.getAge(); // 30
person.setAge(35);
person.getAge(); // 35
  `.trim();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">3. Encapsulation</h1>
      <p className="mb-4">
        Encapsulation is the principle of restricting direct access to some of an object's components and exposing access through methods.
        In modern JavaScript, private fields can be declared using the <code>#</code> symbol.
      </p>
      <LiveCode code={code} />
    </div>
  );
};

export default EncapsulationPage;
