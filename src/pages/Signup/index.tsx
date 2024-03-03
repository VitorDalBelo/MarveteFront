import GoogleBtn from '../../components/GoogleBtn'
import RightThemeBtn from '../../components/RightThemeBtn';
import Divider from '../../components/Divider';
import FormSignup from '../../components/FormSignup';


export default function Signup() {

  return (
    <>
      <RightThemeBtn />
      <FormSignup/>
      <Divider style={{
            marginTop: 10,
            marginBottom: 5
      }}>- OR -</Divider>
      <GoogleBtn mode='signup' >Sign up with Google</GoogleBtn>
    </>
  )
}
