import Hero from '../components/Hero';
import BucketList from '../components/BucketList';

const HomePage = () => (
  <div className="w-full">
    <Hero />
    <div className="bucketContainer">
      <BucketList />
    </div>
  </div>
);

export default HomePage;
