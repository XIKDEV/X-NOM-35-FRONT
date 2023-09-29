import { Form, Input, Select } from 'antd';
import { FormsButtons } from '../../ui/components';
import { IFormFieldUsers } from '../../interfaces';
import { usersPlaceholders } from '../../constants';
import { inputFormsStyle } from '../../ui/styles';

export const FormUser = () => {
  const handleSubmit = (values: IFormFieldUsers) => {
    console.log(values);
  };
  return (
    <Form name="userForm" initialValues={{}} onFinish={handleSubmit}>
      <Form.Item<IFormFieldUsers> name="name">
        <Input
          autoComplete="off"
          placeholder={usersPlaceholders.name}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldUsers> name="lastname">
        <Input
          autoComplete="off"
          placeholder={usersPlaceholders.lastname}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldUsers> name="email">
        <Input
          autoComplete="off"
          placeholder={usersPlaceholders.email}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldUsers> name="role">
        <Select
          showSearch
          placeholder={usersPlaceholders.role}
          className="select-form"
          style={inputFormsStyle}
          dropdownStyle={{
            background: 'var(--gray)',
          }}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          //TODO: data temporal
          options={[
            {
              value: '1',
              label: 'Desarrollador',
            },
            {
              value: '2',
              label: 'Admin',
            },
            {
              value: '3',
              label: 'Admin Empresa',
            },
            {
              value: '4',
              label: 'Empleado',
            },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <FormsButtons />
      </Form.Item>
    </Form>
  );
};
