export default {
  menus: [
    {
      name: "movie",
      title:"电影",
      icon: "desktop",
      navs: [
        { title: "影片", href: "/movie/home", icon: "link" },
        { title: "在线", href: "/movie/online", icon: "heart-o" },
        { title: "推荐", href: "/movie/hot", icon: "heart-o" },
        { title: "用户", href: "/movie/user", icon: "heart-o" },
        { title: "日志", href: "/movie/log", icon: "eye-o" },
        { title: "爬虫", href: "/movie/crawler", icon: "man" },
        { title: "API", href: "/movie/api", icon: "api" }
      ]
    },
    {
      name: "book",
      title:"书城",
      icon: "hdd",
      navs: [
        { title: "书籍", href: "/book/home", icon: "edit" },
        { title: "用户", href: "/book/user", icon: "user" },
        { title: "日志", href: "/book/log", icon: "line-chart" },
        { title: "爬虫", href: "/book/crawler", icon: "man" },
        { title: "API", href: "/book/api", icon: "api" }
      ]
    },
    {
      name: "user",
      title:"用户",
      icon: "hdd",
      href: "/user"
    }
  ]
};
