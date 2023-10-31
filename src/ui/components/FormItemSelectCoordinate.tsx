import { IFormFieldEnterprises } from '../../interfaces/IEnterprises';
import { Form, Select } from 'antd';
import { inputFormsStyle } from '../styles';
import { FC, useState } from 'react';
import { IFormFieldUsers, NameType } from '../../interfaces';

export interface IFormItemSelectCoordinate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  firstName: NameType;
  secondName: NameType;
  firstPlaceholder: string;
  secondPlaceholder: string;
}
export const FormItemSelectCoordinate: FC<IFormItemSelectCoordinate> = ({
  data,

  firstName,
  secondName,
  firstPlaceholder,
  secondPlaceholder,
}) => {
  const [value, setValue] = useState<string[]>([]);
  const [secondValue, setSecondValue] = useState<string | undefined>(undefined);

  const handleChange = (value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp = data.find((item: any) => item.value == value);
    console.log(temp.cities);
    setValue(temp.cities);
    setSecondValue(temp.cities);
  };

  const onSecondChange = (value: string) => {
    setSecondValue(value);
  };

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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options={data.map((value: any) => ({
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options={value.map((value: any) => ({
            label: value.label,
            value: value.value,
          }))}
        />
      </Form.Item>
    </>
  );
};
