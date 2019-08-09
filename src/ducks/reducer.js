//setting up inialState
const initialState = {
    username: '',
    user_id: '',
    user_image: ''
}

//action const types


//action builders


//reducers
export default (state = initialState, action) => {
    //destructuring type and payload off of action
    const {type, payload} = action
    switch(type){
        default:
            return state
    }

}