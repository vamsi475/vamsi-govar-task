
const login = (data) => dispatch => {
    console.log("data", data);
    dispatch({
        type: 'LOGIN',
        payload: data
    })
}

export default login;