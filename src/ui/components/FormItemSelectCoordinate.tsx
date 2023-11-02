import { FC } from 'react';
import { Form, Select } from 'antd';
import { useFormItemSelectCoordinate } from '../hooks';
import {
  IFormFieldUsers,
  IFormItemSelectCoordinateProps,
  IFormFieldEnterprises,
} from '../../interfaces';
import { inputFormsStyle } from '../styles';

export const FormItemSelectCoordinate: FC<IFormItemSelectCoordinateProps> = ({
  data,
  firstName,
  secondName,
  firstPlaceholder,
  secondPlaceholder,
}) => {
  const { handleChange, secondValue, onSecondChange, value } =
    useFormItemSelectCoordinate(data);

  return (
    <>
      <Form.Item<IFormFieldUsers | IFormFieldEnterprises>
        name={firstName}
        rules={[{ required: true, message: 'Campo obligatorio' }]}
      >
        <Select
          placeholder={firstPlaceholder}
          className="select-form"
          style={inputFormsStyle}
          dropdownStyle={{
            background: 'var(--gray)',
          }}
          onChange={handleChange}
          options={data.map((value) => ({
            label: value.label,
            value: value.value,
          }))}
        />
      </Form.Item>

      <Form.Item<IFormFieldUsers | IFormFieldEnterprises>
        name={secondName}
        rules={[{ required: true, message: 'Campo obligatorio' }]}
      >
        <Select
          placeholder={secondPlaceholder}
          className="select-form"
          style={inputFormsStyle}
          dropdownStyle={{
            background: 'var(--gray)',
          }}
          value={secondValue}
          onChange={onSecondChange}
          options={value.map((value) => ({
            label: value.label,
            value: value.value,
          }))}
        />
      </Form.Item>
    </>
  );
};
