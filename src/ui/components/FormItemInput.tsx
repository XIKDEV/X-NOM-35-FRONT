import { FC } from 'react';
import { Form, Input } from 'antd';
import {
  IFormFieldEnterprises,
  IFormFieldLogin,
  IFormFieldUsers,
  IFormItemInputProps,
} from '../../interfaces';
import { inputFormsStyle } from '../styles';

export const FormItemInput: FC<IFormItemInputProps> = ({
  name,
  rules = [],
  placeholder,
  classname = 'input-form',
}) => {
  return (
    <Form.Item<IFormFieldLogin | IFormFieldUsers | IFormFieldEnterprises>
      name={name}
      rules={[...rules, { required: true, message: 'Campo obligatorio' }]}
    >
      <Input
        autoComplete="off"
        placeholder={placeholder}
        className={classname}
        style={inputFormsStyle}
      />
    </Form.Item>
  );
};
