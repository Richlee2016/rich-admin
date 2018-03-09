import { observable, action, computed, runInAction } from "mobx";
import { Session_Login, Session_Logout } from "@/servers/server";
class App {
  // menu
  @observable user;
  constructor() {
    this.user = null;
  }

  //保持会话
  Login = async hash => {
    const reg = /#/;
    const openid = hash ? hash.replace(reg, "") : "";
    const {data} = await Session_Login({openid});
    runInAction(() => {
      this.user = data
    });
  };

  LogOut = async () => {
    const res = await Session_Logout();
    runInAction(() => {
      this.user = null;
    });
  };
}

const app = new App();
export default app;
