import ThirdPartyLogin from './ThirdPartyLogin.tsx';
import arex from '../assets/img/arex.png'
const AuthWrap = ({ content, type }) => {
  return (
    <div className={' flex justify-center items-center h-[100vh]'}>
      <div className="pb-20">
        <div
          className={'grid grid-cols-2 gap-4 w-[1000px] h-[580px] '}
          style={{
            boxShadow: '0px 20px 80px 0px rgba(0,0,0,0.3)',
          }}
        >
          <div className="flex-col flex justify-center items-center bg-[#0081f1] text-white">
            <h1 className={'text-center'}>Eliminate Environment Differences</h1>
            <p className={'text-center text-xl'}>
              Intelligent Mock mechanism, support Mock time, cache data, etc
            </p>
          </div>
          <div className="p-10">
            <div className={'flex justify-between items-end mb-[24px]'}>
              <span className={'text-[24px]'}>
                <img src={arex} alt="" className={'h-[36px]'} />
                {type === 'login' ? '登陆' : '注册'}
              </span>

              <div className={'text-[14px]'}>
                {type === 'login' ? (
                  <>
                    没有账号？<a href="/signup">点击这里注册</a>
                  </>
                ) : (
                  <>
                    已有帐号？ <a href="/login">点此登录</a>
                  </>
                )}
              </div>
            </div>
            {content}
            <ThirdPartyLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrap;
