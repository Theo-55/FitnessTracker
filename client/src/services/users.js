
const list = [
    { 
        firstName: 'Theo',
        lastName: 'Deyoe',
        handle: '@JewPaltz',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        password: 'me',
        isAdmin: true,
        emails: [
            "plotkinm@newpaltz.edu"
        ],
        following: [ { handle: '@vp', isApproved: true }, { handle: '@johnsmith', isApproved: true }, ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },

];

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); } 

// export function Add(user) {
//     if(!user.firstName){
//         throw { code: 422, msg: "First Name is required" }
//     }
//      list.push(user);
//      return { ...user, password: undefined };
// }


// export function Update(user_id, user) {
//     const oldObj = list[user_id];
//     if(user.firstName){
//         oldObj.firstName = user.firstName;
//     }
//     if(user.lastName){
//         oldObj.lastName = user.lastName;
//     }
//     if(user.handle){
//         oldObj.handle = user.handle;
//     }
//     if(user.pic){
//         oldObj.pic = user.pic;
//     }
    //list[user_id] = newObj ;
//     return { ...oldObj, password: undefined };
// }

// export function Delete(user_id) {
//     const user = list[user_id];
//     list.splice(user_id, 1);
//     return user;
// }

export function Login(handle, password){
    console.log({ handle, password})
    const user = list.find(x=> x.handle == handle);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}