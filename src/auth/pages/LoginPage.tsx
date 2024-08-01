import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'antd';
import { FormItemInput, FormItemInputPassword } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { useLoginPage } from '../hooks';
import { IFormFieldLogin, RootState } from '../../interfaces';
import { authConstants } from '../../constants/authConstants';
import { loginButton } from '../ui';
import '../ui/loginPage.css';

export const LoginPage = () => {
  const { contextHolder } = useLoginPage();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { isMobile } = useScreenSize();
  const dispatch: CallableFunction = useDispatch();

  const handleLogin = (values: IFormFieldLogin) => {
    import('../../store/auth').then(({ setAuthLogin }) => {
      dispatch(setAuthLogin(values));
    });
  };

  return (
    <>
      {contextHolder}
      <div className="login">
        <Form
          name="login"
          className="login-form"
          initialValues={{ email: '', password: '' }}
          onFinish={handleLogin}
        >
          <img
            className="logo"
            src="../../../public/XIK_VerdeTransparente.png"
            alt="XikDev"
          />
          <div className="login-inputs">
            <FormItemInput
              name="email"
              placeholder={authConstants.placeholderEmail}
              rules={[
                {
                  type: 'email',
                  message: authConstants.emailWrongFormat,
                },
              ]}
              classname="login-inputs-input"
            />

            <FormItemInputPassword />
          </div>

          <Form.Item
            style={{
              width: isMobile ? 'calc(100% - 50px)' : 'calc(100% - 96px)',
            }}
          >
            <Button
              className="login-button"
              style={loginButton}
              loading={auth == 'checking' ? true : false}
              htmlType="submit"
            >
              {auth == 'checking' ? 'Cargando' : authConstants.bttnLogin}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
