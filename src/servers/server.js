import rxios from "./rxios";

// 电影
export const get_movie_list = qs => rxios("GET", "/movie_api/list", qs);
// 在线电影
export const get_online_list = qs => rxios("GET", "/online_api/list", qs);
//爬虫
export const get_crawler_home = () => rxios("GET", "/crawler/movie_home");
export const get_crawler_page = () => rxios("GET", "/crawler/movie_page");
// 用户
// export const log_in = qs => rxios("GET",`/oauth/users/${qs}`);
// export const log_out = () => rxios("DEL", "/oauth/users");
export const get_users = () => rxios("GET", "/oauth/users");
// 会话
export const Session_Login = qs => rxios("GET","/api/session",qs);
export const Session_Logout = () => rxios("DEL","/api/session");
// 用户
export const Get_Users = () => rxios("GET","/api/users");
// 电影
export const Get_Moives = qs => rxios("GET","/api/movies",qs);
