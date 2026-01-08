import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';

const CoreConcepts = () => {
  return (
    <>
      <h2>Core Concepts</h2>
      <section>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CoreConcepts;
