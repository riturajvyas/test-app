import { Actions } from "./action";


type InitialState = {
    content: string
  };
  
  const initialState: InitialState = {
    content: 'Overview'
  };

 export default function reducer(state = initialState, action: Actions): InitialState {
    switch (action.type) {

        case "UPDATE_CONTENT": {
            
            return {
                ...state,
                content: action.payload.content
              }
        }
    

        default:
            return state
    }
}
