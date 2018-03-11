import React from "react";
import { Table, Button, Modal, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import "../less/home.less";

@inject("movie")
@observer
export default class MovieHot extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.movie;
    this.state = {
      // 表格排版
      columns: [
        {
          title: "id",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "type",
          dataIndex: "hotType",
          key: "type",
          render: record => {
            const arr = ["热门推荐","即将上映","经典影片"];
            return (
              <span>{arr[record]}</span>
            )
          }
        },
        {
          title: "handle",
          key: "handle",
          render: record => (
            <span>
              <span />
              <a>查看</a>
              <span className="ant-divider" />
              <Popconfirm
                title={`确定要删除《${record.name}》?`}
                onConfirm={() => {this.removeMovie(record.id)}}
                okText="确定"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>
            </span>
          )
        }
      ]
    };
  }
  // 初始化
  componentDidMount() {
    this.store.getHotMovie({ page: 1, size: 10 });
  }
  // 翻页请求
  querySet(page, size) {
    this.store.getHomeMovie({ page, size });
  }
  // 删除弹窗
  removeMovie(id) {
    console.log(`删除${id}`);
  }
  // 视图
  render() {
    const { loading, hot:{list,counts} } = this.store;
    const { columns } = this.state;
    const that = this;
    return (
      <div className="movie-home">
      <Link to={'/movie/hot_add'}>
        <Button type="primary">添加</Button>
      </Link>
        <Table
          rowKey={record => record._id}
          dataSource={toJS(list)}
          columns={columns}
          loading={loading}
          pagination={{
            onChange(a, b) {
              that.querySet(a, b);
            },
            onShowSizeChange(a, b) {
              that.querySet(a, b);
            },
            showSizeChanger: true,
            showQuickJumper: true,
            total: counts
          }}
        />
      </div>
    );
  }
}
