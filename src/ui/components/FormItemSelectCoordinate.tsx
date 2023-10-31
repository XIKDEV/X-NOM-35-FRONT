import { IFormFieldEnterprises } from '../../interfaces/IEnterprises';
import { Form, Select } from 'antd';
import { inputFormsStyle } from '../styles';
import { FC, useState } from 'react';
import { IFormFieldUsers, NameType } from '../../interfaces';

interface ISelectProperties {
  value: number;
  label: string;
}
interface ICities extends ISelectProperties {}

interface IStates extends ISelectProperties {
  cities: ICities[];
}

export interface IFormItemSelectCoordinate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: IStates[];
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
  const [value, setValue] = useState<ICities[]>([]);
  const [secondValue, setSecondValue] = useState<ICities[] | undefined>(
    undefined
  );

  const handleChange = (value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp = data.find((item: IStates) => item.value === Number(value));
    console.log(temp!.cities);
    setValue(temp!.cities);
    setSecondValue(temp!.cities);
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
