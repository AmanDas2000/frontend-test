import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { useHistory,Link } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    
  return (
    <div className="bg-[#f6f2ff] p-10 lg:flex lg:flex-row-reverse">
      <div className='lg:w-1/2 lg:my-auto lg:mr-36'>
        <div className="text-4xl font-bold text-center lg:text-right lg:text-6xl">
          <div>Imagine if</div>
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] ">
            Snapchat
          </div>
          <div>has events.</div>
        </div>
        <div className="text-[#4F4F4F] my-5 text-center lg:text-right">
          Easily host and share events with your friends <br />
          across any social media.
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <Button>🎉 Create my event</Button>
        </div>
      </div>

      <div className="my-10 px-5 flex justify-center ">
        <Card />
      </div>
      <div className="flex justify-center lg:hidden">
              <Button><Link to='/create'>
              🎉 Create my event
        </Link></Button>
      </div>
    </div>
  );
};

export default Home;
