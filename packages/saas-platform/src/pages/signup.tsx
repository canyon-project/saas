import { useRequest } from 'ahooks';
import { message } from 'antd';
import axios from 'axios';

import AuthWrap from '../components/AuthWrap.tsx';
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  email?: string;
  company?: string;
};
const Signup = () => {
  const { data, run } = useRequest(
    (params) => axios.post(`/api/signup`, params),
    {
      manual: true,
      onSuccess: (data) => {
        localStorage.setItem('token', data.data.jwt);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        // setTimeout(() => {
        //   window.location.href = '/';
        // }, 500);
        if (data.data.body.success) {
          message.success('Register success');
        } else {
          message.error('Register failed');
        }
      },
      onError: (error) => {
        try {
          message.error(error.response.data.error.message);
        } catch (e) {
          message.error(error.message);
        }
      },
    },
  );
  const onFinish = (values: any) => {
    console.log('Success:', values);
    run(values);
  };
  return (
    <div>
      <AuthWrap
        type={'signup'}
        content={
          <div>
            <Form
              name="basic"
              layout={'vertical'}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ maxWidth: 384 }}
            >
              <Form.Item<FieldType>
                label="Company"
                name="company"
                rules={[
                  { required: true, message: 'Please input your company!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className={'w-[100%]'}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        }
      />
    </div>
  );
};

export default Signup;
