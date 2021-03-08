const initialState = {
    modules: [
        {title: 'CS5610', _id: '123'},
        {title: 'DS5220', _id: '456'},
        {title: 'CS5800', _id: '789'},
    ]
}

const moduleReducers = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.modules
                ]
            }

        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.filter(module => {
                    if(module._id !== action.moduleToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }

        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }

        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        default: return state
    }
}

export default moduleReducers