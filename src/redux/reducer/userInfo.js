const INIT_STATE = {
    userName: 'cherish'
};

export default function userInfo(state=INIT_STATE,action,payload){
    switch(action.type) {
        case 'SET_USER_INFO':
            return Object.assign({},state,payload);
            default:
        return state;
    }
}