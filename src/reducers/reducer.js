import userData from '../const/data';

const appreducer = (state1 = userData, action) => {
  let state = { ...state1 };
  switch (action.type) {
    case 'Delete':
      state = { ...state };
      state.data.splice(action.payload, 1);
      break;
    case 'Important':
      state = { ...state };
      state.data[action.payload].important = !state.data[action.payload].important;
      break;
    case 'Add':
      return { ...state,
        data: state.data.concat([action.payload]),
        nextId: state.nextId + 1,
      };
    case 'Edit':
      return { ...state,
        data: state.data.map(data => data.id === action.payload.id ?

        { ...data,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
          work: action.payload.work,
          city: action.payload.city } :
            data,
        ),
      };
    default:
      return state;

  }
  return state;
};

export default appreducer;
