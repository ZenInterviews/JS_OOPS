// pages/tutorial/1_classes.tsx
import LiveCode from "../components/LiveEditor";

const ClassesPage = () => {
  const classCode = `
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound
  `.trim();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">1. JavaScript Classes</h1>
      <p className="mb-4">
        JavaScript introduced the <code>class</code> keyword in ES6 as a
        syntactic sugar over its existing prototype-based inheritance model.
        Classes help you create objects with shared methods and properties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example:</h2>
      <LiveCode code={classCode} />

      <h2 className="text-xl font-semibold mt-6 mb-2">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <code>class Animal</code>: Defines a class called <code>Animal</code>.
        </li>
        <li>
          <code>constructor(name)</code>: A special method for initializing new objects.
        </li>
        <li>
          <code>speak()</code>: Instance method that returns a string.
        </li>
        <li>
          <code>new Animal("Dog")</code>: Creates an object instance.
        </li>
      </ul>
    </div>
  );
};

export default ClassesPage;
