var qs = require("querystring");
import axios from "axios";

//  get、post
export default (type, url, data, mixin) => {
  const qsData = qs.stringify(data);
  const opt = {
    method: "get",
    url: url
  };

  return new Promise((resolve, reject) => {
    switch (type) {
      case "GET":
        if (data && Object.keys(data).length > 0) {
          Object.assign(opt, {
            url: `${url}?${qsData}`
          });
        }
        break;
      case "POST":
        Object.assign(opt, {
          method: "post",
          data: data
        });
        break;
      case "PUT":
        Object.assign(opt, {
          method: "put",
          data: data
        });
        break;
      case "DEL":
        Object.assign(opt, {
          method: "delete",
          data: data
        });
        break;
    }
    console.log(opt);
    axios(opt)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
