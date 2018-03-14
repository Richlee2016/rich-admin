import { observable, action, computed, runInAction } from "mobx";
import { Session_Login, Session_Logout } from "@/servers/server";
class App {
  // menu
  @observable user=null;
  @observable isShowLoading = false;

  @action.bound
  setLoading(load){
    this.isShowLoading = load;
  }
}

const app = new App();
export default app;
