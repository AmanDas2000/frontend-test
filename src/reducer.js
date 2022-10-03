//initial state
export const init = {
  name: '',
  hostName: '',
  location: '',
  time: '',
  timeEnd: '',
  date: '',
  dateEnd: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'create-event':
      return {
        ...state,
        name: action.payload.name,
        hostName: action.payload.hostName,
        location: action.payload.location,
        time: action.payload.time,
        timeEnd: action.payload.timeEnd,
        date: action.payload.date,
        dateEnd: action.payload.dateEnd,
      };

    default:
      return state;
  }
};
