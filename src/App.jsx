import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples.jsx';
import MainHeader from './components/Header/Header.jsx';

const App = () => {
  return (
    <div>
      <MainHeader />

      <main id='core-concepts'>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
};

export default App;
