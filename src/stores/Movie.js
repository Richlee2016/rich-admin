import { observable, action, computed, runInAction,useStrict} from "mobx";
import {message} from "antd"
import { Get_Home_Movie,Get_Hot_Movie,Add_Hot_Movie} from "@/servers/movie";
import { Promise } from "core-js";
useStrict(true);
class Movie {
  constructor() {}

  @observable list = {}; //电影列表
  @observable hot ={}; //推荐电影
  @observable onlineList = {}; //电影列表
  @observable loading = false; //loading缓冲
  
  sleep(time){
    return new Promise((resolve,reject) => {
      setTimeout(()=> {
        resolve();
      },time)
    })
  }
  // 获取 电影列表
  @action
  async getHomeMovie(qs){
    this.loading = true;
    try {
      const {data:{movies}} = await Get_Home_Movie(qs);
      runInAction(() => {
        this.list = movies;
        message.info("获取成功")
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        message.error("获取错误")
      });
    }
  }

  // 获取 推荐电影
  @action
  async getHotMovie(qs){
    this.loading = true;
    try {
      const {data:{movies}} = await Get_Hot_Movie(qs);
      runInAction(() => {
        this.hot = movies;
        this.loading = false;
      });
    } catch (error) {
      message.error("获取错误")
    }
  }

  // 添加 推荐电影
  @action.bound
  async addHotMovie(qs,fn){
    this.loading = true;
    try {
      const res = await Add_Hot_Movie(qs);
      this.loading = false;
      message.info("添加成功")
      fn&&fn();
    } catch (error) {
      message.error("获取错误")
    }
  }
}

const movie = new Movie();
export default movie;
