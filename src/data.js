
const users = [
    {name: "mario", premium: true},
    {name: "kiki", premium: true},
    {name: "coco", premium: false},
    {name: "crisse", premium: true},
    {name: "louis", premium: false}
];

/*export*/ const premiumUsers =  (usersArray) => {
    return usersArray.filter((user) => user.premium)
}

//export default users;
export {premiumUsers, users as default};