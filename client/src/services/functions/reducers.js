// Input reducers
export function reducer(state, event) {
    if (event.reset) {
        state = {}
        return state
    }
    return {
        ...state,
        [event.name]: event.value
    }
}