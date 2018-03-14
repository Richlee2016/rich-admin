import React from "react";
import { inject, observer } from "mobx-react";
import { Form, Input, Button,Radio,Card} from 'antd';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Search = Input.Search;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
@inject("movie")
@observer
@Form.create()
class MovieHotAdd extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.movie;
    this.state = {
      checkNick: false,
      type:1
    }
  }
  handleSubmit = (e) => {
    const {loading,addHotMovie} = this.store;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        addHotMovie(values,() => {
          this.props.history.push("/movie/hot");
        })
      }
    });
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {loading} = this.store;
    return (
      <div>
        <Card title="添加推荐电影">
          <p>添加推荐电影</p>
        </Card>
        <FormItem {...formItemLayout} label="名字">
          {getFieldDecorator('name', {
            rules: [{
              required: true,
              message: '请输入电影名',
            }],
          })(
            <Search
              placeholder="请输入电影名"
              onSearch={value => console.log(value)}
              enterButton
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="类型">
          {getFieldDecorator('hotType', {
            rules: [{
              type:'number',
              required: true,
              message: '请输入图片地址',
            }],
            initialValue:1
          })(
            <RadioGroup>
              <Radio value={1}>热门推荐</Radio>
              <Radio value={2}>即将上映</Radio>
              <Radio value={3}>经典影片</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="图片">
          {getFieldDecorator('cover', {
            rules: [{
              required: true,
              message: '请输入图片地址',
            }],
          })(
            <Input placeholder="请输入图片地址" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="视频">
          {getFieldDecorator('video', {
            rules: [{
              required: true,
              message: '请输入视频地址',
            }],
          })(
            <Input placeholder="请输入视频地址" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.handleSubmit} loading={loading} >
            Check
          </Button>
        </FormItem>
      </div>
    );
  }
}

export default MovieHotAdd;

