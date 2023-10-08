import { FC } from 'react';
import { Form, Select } from 'antd';
import {
  IFormFieldEnterprises,
  IFormItemSelect,
  IFormFieldUsers,
} from '../../interfaces';
import { inputFormsStyle } from '../styles';

export const FormItemSelect: FC<IFormItemSelect> = ({
  name,
  rules = {},
  placeholder,
  options,
}) => {
  return (
    <Form.Item<IFormFieldUsers | IFormFieldEnterprises>
      name={name}
      rules={[rules, { required: true, message: 'Campo obligatorio' }]}
    >
      <Select
        showSearch
        placeholder={placeholder}
        className="select-form"
        style={inputFormsStyle}
        dropdownStyle={{
          background: 'var(--gray)',
        }}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={options}
      />
    </Form.Item>
  );
};
