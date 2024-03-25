import googleSvg from '../assets/img/google.svg'
const ThirdPartyLogin = () => {
  return <div className={'flex justify-center'}>
    <a className={'cursor-pointer'}>
      <img src={googleSvg} className={'w-[24px] mr-2'} alt="" />
      <span>使用 Chrome 帐号登录</span>
    </a>
  </div>
}

export default ThirdPartyLogin;