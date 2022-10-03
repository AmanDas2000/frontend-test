import React,{ useContext }  from 'react';
import { GrNext } from 'react-icons/gr';
import calender from '../src/images/calender.jpg';
import homePageCardImage from '../src/images/event.png';
import { globalContext } from '../src/App';





const Event = () => {

    const { context } = useContext(globalContext);
    const details = [
        {
          image: calender,
          heading: `${context.date} ${context.time}`,
          subHeading: `to ${context.dateEnd} ${context.timeEnd}`,
        },
        {
            image: calender,
            heading: context.location,
            subHeading: `at PO${context.hostName}`,
        }
      ];
  return (
    <div className='md:w-4/5 md:mx-auto md:mt-20 sm:w-4/5 sm:mx-auto sm:mt-20 lg:flex lg:flex-row-reverse lg:mt-36'>
    
    <div>
        <img src={homePageCardImage} />
      </div>
      <div className="px-4 py-5">
        <div>
                  <div className="text-6xl font-bold text-[#463271]">{ context.name}</div>
          <div className="flex mt-3">
            <div>Hosted by</div>
                      <div className="mx-1 font-semibold">{context.hostName}</div>
          </div>
        </div>
        
        <div className='mt-10'>
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

export default Event;
