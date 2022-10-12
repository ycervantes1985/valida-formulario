import React, { useReducer } from 'react';
 
const initialState = {
  name: {
      value: '',
      error: ''
  },
  lastName: {
      value: '',
      error: ''
  },
  email: {
      value: '',
      error: ''
  }
};
 
function reducer(state, action) {
  console.log(state, action.payload)
  console.log(state.name.error)
  if(action.type === 'name')
      if(action.payload.length<5){
        //state.name.error="El nombre es muy corto";
}
      
      
  
   

    return {
        ...state,
        [action.type]: action.payload
    };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    const enviarDatos = (event) => {
      event.preventDefault()
      
  }

  
    return (
        <div className='container'>
          <form className="row" onSubmit={enviarDatos}>
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name.value}
                        onChange={handleChange}
                    />
                </label>
                <p className="error">{state.name.error}</p>
            </div>
            <div>
                <label>
                    <span>LastName:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
