import { FC } from 'react';
import { Form, Input } from 'antd';
import {
  IFormFieldEnterprises,
  IFormFieldUsers,
  IFormItemInput,
} from '../../interfaces';
import { inputFormsStyle } from '../styles';

export const FormItemInput: FC<IFormItemInput> = ({
  name,
  rules = [],
  placeholder,
}) => {
  return (
    <Form.Item<IFormFieldUsers | IFormFieldEnterprises>
      name={name}
      rules={[...rules, { required: true, message: 'Campo obligatorio' }]}
    >
      <Input
        autoComplete="off"
        placeholder={placeholder}
        className="input-form"
        style={inputFormsStyle}
      />
    </Form.Item>
  );
};
