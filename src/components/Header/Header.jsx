import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInit(max) {
  return Math.floor(Math.random(max) * max + 1);
}

const MainHeader = () => {
  const description = reactDescriptions[getRandomInit(2)];
  return (
    <header>
      <img src={reactImg} alt='atom' />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will nedd</p>
    </header>
  );
};

export default MainHeader;
