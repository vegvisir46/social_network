// {id: 1, photoUrl:'', followed: true, fullName: 'Michael', status: 'I am boss', location: {city: 'New-York', country: 'USA'}},
// {id: 2, photoUrl:'', followed: false, fullName: 'Jim', status: 'I am boss', location: {city: 'New-York', country: 'USA'}},
// {id: 3, photoUrl:'', followed: false, fullName: 'Dwight', status: 'I am boss', location: {city: 'New-York', country: 'USA'}},
// {id: 4, photoUrl:'', followed: true, fullName: 'Oscar', status: 'I am boss', location: {city: 'New-York', country: 'USA'}}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer;