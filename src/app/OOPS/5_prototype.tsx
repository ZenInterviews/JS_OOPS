'use client';
import LiveCode from '@/app/components/LiveEditor';

const PrototypePage = () => {
  const code = `
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " makes a sound";
};

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound
  `.trim();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">5. Prototypes</h1>
      <p className="mb-4">
        Before ES6 classes, JavaScript used constructor functions and <code>prototype</code> to define reusable methods. The <code>prototype</code> chain is still the underlying mechanism behind inheritance in JavaScript.
      </p>
      <LiveCode code={code} />
    </div>
  );
};

export default PrototypePage;
