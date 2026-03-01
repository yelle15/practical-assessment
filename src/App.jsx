import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialMedia from './components/SocialMedia';
import Hobbies from './components/Hobbies';
import LikesDislikes from './components/LikesDislikes';
import NumberGuessing from './components/NumberGuessing';

function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialMedia />
      <LikesDislikes />
      <Hobbies />
      <NumberGuessing />

    </div>
  );
}

export default App;
