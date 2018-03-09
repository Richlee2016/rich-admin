import React from "react";
import { Button,Spin} from "antd";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

@inject("movie")
@observer
export default class MovieCrawler extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.movie;
  }

  
  render() {
    const {loading,crawlerGet,crawlerRes} = this.state;
    console.log(loading);
    
    return (
          <div className="movie-crawler">
          <Button className="btn" type="primary" onClick={() => crawlerGet('page')}>获取首页</Button>
          <Button className="btn" type="primary" onClick={() => crawlerGet('home')}>获取新电影</Button>
          {loading?<Spin size="large" tip="Loading..." />:null}
          <div className="crawler-res">
          <p>抓取结果</p>
            {crawlerRes?<p>{JSON.stringify(crawlerRes)}</p>:null}
          </div>
          </div>
        );
  }
}

