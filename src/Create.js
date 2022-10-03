import React, { useContext, useState } from 'react';
import Button from './components/Button';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../src/App';

const Create = () => {
  // Event name
  // Host name, Start and End time / date
  // Location
  // Event photo.
  const { dispatch } = useContext(globalContext);

  const [name, setName] = useState('');
  const [hostName, setHostName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [timeEnd, setTimeEnd] = useState('');

  const history = useHistory();

  return (
    <div className='mx-5 my-10 sm:w-1/2 sm:mx-auto '>
      <form
        class="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: 'create-event',
            payload: {
              name,
              hostName,
              location,
              time,
              timeEnd,
                date,
                dateEnd
            },
          });
          history.push('/event');
        }}
      >
        <div class="mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
          </div>
        </div>
        <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
              Location
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              placeholder="Location"
            />
          </div>
        </div>
        <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
              Host Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              onChange={(e) => setHostName(e.target.value)}
              value={hostName}
              placeholder="Host Name"
            />
          </div>
        </div>
        <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
              Start Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
              </div>
              <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
              End Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="date"
              onChange={(e) => setDateEnd(e.target.value)}
              value={dateEnd}
            />
          </div>
        </div>
        <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
              Start Time
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>
        </div>
        
        <div class=" mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
              End Time
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="time"
              onChange={(e) => setTimeEnd(e.target.value)}
              value={timeEnd}
            />
          </div>
        </div>

        <div class="">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <Button type="submit">Create event</Button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Create;
