import FormLogin from '../../components/FormLogin'
import GoogleBtn from '../../components/GoogleBtn'
import RightThemeBtn from '../../components/RightThemeBtn';
import Divider from '../../components/Divider';


export default function Login() {

  return (
    <>
      <RightThemeBtn />
      <FormLogin/>
      <Divider>- OR -</Divider>
      <GoogleBtn>Log in with Google</GoogleBtn>
    </>
  )
}
