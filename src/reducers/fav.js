export const favInitialState = []

export const FAV_ACTION_TYPES = {
    ADD_TO_FAV: 'ADD_TO_FAV',
    REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
    CLEAR_FAV: 'CLEAR_FAV'
}

export const favReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case FAV_ACTION_TYPES.ADD_TO_FAV: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }

        case FAV_ACTION_TYPES.REMOVE_FROM_FAV: {
            const { id } = actionPayload
            return state.filter(item => item.id !== id)
        }

        case FAV_ACTION_TYPES.CLEAR_FAV: {
            return favInitialState
        }
    }

    return state;
}