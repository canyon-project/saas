import AuthWrap from '../components/AuthWrap.tsx';
import { message } from 'antd';
import axios from 'axios';
import { useRequest } from 'ahooks';
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login = () => {
  const [state, setState] = useState({ name: 'zhangsan', age: 18 });
  const { data, run } = useRequest(
    (params) =>
      axios.post('/api/auth/local', {
        identifier: params.username,
        password: params.password,
      }),
    {
      manual: true,
      onSuccess: (data) => {
        localStorage.setItem('token', data.data.jwt);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        message.success('login success');
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      },
      onError: (error) => {
        console.log();
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
        type={'login'}
        content={
          <div>
            <Form
              name='basic'
              layout={'vertical'}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              style={{ maxWidth: 384 }}
            >
              <Form.Item<FieldType>
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder={'Please input your username'} />
              </Form.Item>

              <Form.Item<FieldType>
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password  placeholder={'Please input your password'} />
              </Form.Item>

              <Form.Item>
                <Button type='primary' htmlType='submit' className={'w-[100%]'}>
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

export default Login;
