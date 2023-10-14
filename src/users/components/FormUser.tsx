import { Form } from 'antd';
import {
  FormItemInput,
  FormItemSelect,
  FormsButtons,
} from '../../ui/components';
import { useFormUsers } from '../hooks/useFormUsers';
import { usersPlaceholders } from '../../constants';

export const FormUser = () => {
  const { modules, handleSubmit } = useFormUsers();

  return (
    // TODO: Optimizar reglas de formulario
    <Form name="userForm" initialValues={{}} onFinish={handleSubmit}>
      <FormItemInput
        name="name"
        placeholder={usersPlaceholders.name}
        rules={[
          {
            pattern:
              /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
            message: 'Ingrese nombre válido',
          },
        ]}
      />
      <FormItemInput
        name="lastname"
        placeholder={usersPlaceholders.lastname}
        rules={[
          {
            pattern:
              /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
            message: 'Ingrese apellido válido',
          },
        ]}
      />
      <FormItemInput
        name="email"
        placeholder={usersPlaceholders.email}
        rules={[{ type: 'email', message: 'Ingrese email válido' }]}
      />
      <FormItemSelect
        name="id_role"
        placeholder={usersPlaceholders.role}
        options={modules.role}
      />

      <Form.Item>
        <FormsButtons />
      </Form.Item>
    </Form>
  );
};
