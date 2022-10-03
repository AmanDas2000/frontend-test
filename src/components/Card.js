import React from 'react';
import homePageCardImage from '../images/home-page-card.png';
import { GrNext } from 'react-icons/gr';
import calender from '../images/calender.jpg';

const Card = () => {
  const details = [
    {
      image: calender,
      heading: '18 August 6:00PM',
      subHeading: 'to 19 August 1:00PM UTC +10',
    },
    {
      image: calender,
      heading: 'Street name',
      subHeading: '301 Rowes Lane, WA, 7183',
    },
    {
      image: calender,
      heading: 'Link',
      subHeading: 'netflix.com',
    },
  ];

  return (
    <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-0 bg-[#fbfaff] rounded-lg">
      <div>
        <img src={homePageCardImage} />
      </div>
      <div className="px-4 py-5">
        <div>
          <div className="text-3xl font-semibold text-[#463271]">Movie night</div>
          <div className="flex">
            <div>👋 Hosted by</div>
            <div className="mx-1 font-semibold">Elysia</div>
          </div>
        </div>
        <div className="flex py-5 justify-between my-3 bg-[#ffffff] rounded-lg items-center">
          <div className='flex text-sm'>
            <div className="font-semibold">14</div>
            <div>&nbsp;responses</div>
            <div>&nbsp;•&nbsp;</div>
            <div className="text-[#8456ec] font-semibold">see guests</div>
          </div>

          <button className="bg-[#8456ec] px-2 pt-1 pb-2 rounded-xl text-white text-xs">🤝 Invite</button>
        </div>
        <div>
          {details.map((e) => (
            <div className="flex justify-between p-2">
              <div className="w-1/6">
                <img src={e.image} />
              </div>
              <div className="w-4/6">
                <div className="font-semibold">{e.heading}</div>
                <div className="text-xs">{e.subHeading}</div>
              </div>
              <div className="1/6 my-auto">
                <GrNext />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
