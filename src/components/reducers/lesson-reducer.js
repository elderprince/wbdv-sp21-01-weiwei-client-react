const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lessons
                ]
            }

        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id !== action.lessonToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }

        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lessonToUpdate._id) {
                        return action.lessonToUpdate
                    } else {
                        return lesson
                    }
                })
            }

        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }

        default:
            return state
    }
}

export default lessonReducer