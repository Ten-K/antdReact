import React, { Component } from 'react'
import { Card,Form,Input,Button,Icon,Checkbox  } from 'antd'
const FormItem = Form.Item

class FormLogin extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登陆水平表单" style={{marginTop:10}}>
                    <Form style={{width:300}} onSubmit={this.handleSubmit}>
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码"/>)
                            }
                        </FormItem>
                        
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);