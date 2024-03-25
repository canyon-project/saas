import arex from '../assets/img/arex.png';
import ThirdPartyLogin from './ThirdPartyLogin.tsx';
const AuthWrap = ({ content, type }) => {
  return (
    <div className={' flex justify-center items-center h-[100vh]'}>
      <div className="pb-20">
        <div
          className={'grid grid-cols-2 w-[1000px] h-[580px]'}
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
          <div className="p-[60px]">
            <div className={'flex justify-between items-center mb-[24px]'}>
              <span className={'text-[20px]'} style={{ fontWeight: 'bolder' }}>
                <img src={arex} alt="" className={'h-[30px] mr-2'} />
                {type === 'login' ? 'Login' : 'Sign Up'}
              </span>

              <div className={'text-[14px]'}>
                {type === 'login' ? (
                  <>
                    No account?<a href="/signup" className={'ml-2'}>Click here to sign up</a>
                  </>
                ) : (
                  <>
                    Have an account?
                    <a href="/login" className={'ml-2'}>Click here to login</a>
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
