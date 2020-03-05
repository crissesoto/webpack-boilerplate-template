import {bodyStyle, addTitle, name} from './dom';
import users, {premiumUsers} from "./data";
bodyStyle();
addTitle("crisse");

const premium = premiumUsers(users);

console.log(users);
console.log(premium);
console.log("from before.js");