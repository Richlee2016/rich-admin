import rxios from "./rxios";

export const Get_Home_Movie = qs => rxios("GET", "/api/movies/Movies", qs);//电影家园电影列表
export const Get_Hot_Movie = qs => rxios("GET", "/api/hot/HotMovies", qs);//推荐电影列表
export const Add_Hot_Movie = qs => rxios("POST", "/api/hot/UpdateHotMovie", qs);//推荐电影上传