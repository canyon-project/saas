import AuthWrap from '../components/AuthWrap.tsx';

const Login = () => {
  const [state, setState] = useState({ name: 'zhangsan', age: 18 });
  return (
    <div>
      <AuthWrap
        type={'login'}
        content={
          <div>
            <Form>
              <Form.Item>
                <Input placeholder={'请输入用户名'} />
              </Form.Item>
              <Form.Item>
                <Input placeholder={'请输入密码'} />
              </Form.Item>
              <Form.Item>
                <Button
                  className={'w-full'}
                  type={'primary'}
                  onClick={() => {
                    // setState({ name: 'lisi', age: 20 });
                  }}
                >
                  登陆
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
