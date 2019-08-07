const isAwesomeReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_AWSM":
            return state = true
        case "UNSET_AWSM":
            return state = false
        default:
            return state
    }
}

export default isAwesomeReducer;