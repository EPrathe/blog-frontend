import {ADD_ARTICLES} from "./actions"

const initialState = {
    articles: [],
    loading: false,
    hasErrors: false,
  }

function reducer(state=initialState, action){
    switch(action.type) {
      
        case ADD_ARTICLES:
          return Object.assign({}, state, 
              {
                ...state,
                articles: action.data
               }); 
         default: 
           return state;
     }
}


export default reducer