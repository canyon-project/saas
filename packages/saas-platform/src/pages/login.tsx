const Login = () => {
  const [state, setState] = useState({ name: 'zhangsan', age: 18 });
  return (
    <div className={' flex justify-center items-center h-[100vh]'}>
      <div className="grid grid-cols-2 gap-4 w-[1000px] h-[580px]">
        <div className="bg-gray-200 p-4">{JSON.stringify(state)}</div>
        <div className="bg-gray-300 p-10">
          <div className={'flex justify-between'}>
            <span>登陆</span>

            <div>没有账号？点击这里注册</div>
          </div>
          {/*<div123></div123>*/}
          <Form>
            <Form.Item>
              <Input placeholder={'请输入用户名'} />
            </Form.Item>
            <Form.Item>
              <Input placeholder={'请输入密码'} />
            </Form.Item>
            <Form.Item>
              <Button
                type={'primary'}
                onClick={() => {
                  setState({ name: 'lisi', age: 20 });
                }}
              >
                登陆
              </Button>
            </Form.Item>
          </Form>

          <div>
            {/*谷歌登陆*/}
            <Button>谷歌登陆</Button>

            <div className={'flex'}>
              <Button>Github</Button>
              <Button>Github</Button>
              <Button>Github</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
