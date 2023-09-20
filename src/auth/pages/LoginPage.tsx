import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useScreenSize } from '../../hooks';
import { useLoginPage } from '../hooks';
import { IFormFieldType, ILoginData, RootState } from '../../interfaces';
import {
  authConstants,
  rulesInputEmail,
  rulesInputPassword,
} from '../../constants/authConstants';
import { loginButton, loginInput } from '../ui';
import '../ui/loginPage.css';

export const LoginPage = () => {
  const { contextHolder } = useLoginPage();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { isMobile } = useScreenSize();
  const dispatch: CallableFunction = useDispatch();

  const handleLogin = (values: ILoginData) => {
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
            <Form.Item<IFormFieldType>
              name="email"
              rules={[
                rulesInputEmail,
                { type: 'email', message: authConstants.emailWrongFormat },
              ]}
            >
              <Input
                autoComplete="off"
                placeholder={authConstants.placeholderEmail}
                className="login-inputs-input"
                style={loginInput}
              />
            </Form.Item>

            <Form.Item<IFormFieldType>
              name="password"
              style={{ marginBottom: '0px' }}
              rules={[rulesInputPassword]}
            >
              <Input.Password
                type="password"
                autoComplete="off"
                placeholder={authConstants.placeholderPassword}
                className="login-inputs-input"
                style={{
                  marginBottom: '0px',
                  ...loginInput,
                }}
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined style={{ color: 'var(--gray)' }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: 'var(--gray)' }} />
                  )
                }
              />
            </Form.Item>
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
