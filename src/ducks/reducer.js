//setting up inialState
const initialState = {
    username: '',
    user_id: '',
    user_image: ''
}

//action const types
const DISPLAY_USER = 'DISPLAY_USER'


//action builders  NEEDS TO BE FIXED
export function displayUser(user_id, username, user_image){
    return {
        type: DISPLAY_USER,
        payload: {
            user_id, 
            username, 
            user_image
        }
    }
}


//reducers
export default (state = initialState, action) => {
    //destructuring type and payload off of action
    const {type, payload} = action
    switch(type){
        case DISPLAY_USER:
                console.log(payload)
            const { username, user_id, user_image } = payload
            return {...state, user_id: user_id, username: username, user_image: user_image}
        default:
            return state
    }

}