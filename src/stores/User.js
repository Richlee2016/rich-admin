import { observable, action, computed, runInAction } from "mobx";
import {
  Session_Login
} from "@/servers/server";
class User {
  @observable user
  constructor() {
    this.user = []
  }
  // 获取用户信息
  fetchUsers = async () => {
    this.loading = true;
    const res = await Session_Login();
    console.log(res);
    runInAction(() => {
      if(code === 1){
         this.user = data;   
         this.loading = false; 
      };
    });
  };
}

const user = new User();
export default user;
