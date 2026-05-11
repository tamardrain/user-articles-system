import { Injectable, signal } from "@angular/core";
import { UserObj } from "../modules/user.module";
import { USERS } from "../data/users-fake-data";

@Injectable({ providedIn:'root'})

export class UsersService{
    users=signal<UserObj[]>([...USERS]);
    selectedUser=signal<UserObj | null>(null);
    //שליפת כל המשתמשים
getAllUsers(){
return this.users();
}
//שליפת המשתמש הנבחר
getSelectedUser(){
    return this.selectedUser();
}
//שליפת משתמש לפי מזהה
getUserById(id:number){
   return this.users().find(u=>u.id===id); 
}
//עדכון משתמש שנבחר
setSelectedUser(user: UserObj | null){
    this.selectedUser.set(user);
}
}