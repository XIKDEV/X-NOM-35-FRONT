import { useState } from 'react';
import { ICities, IStates } from '../../interfaces';

export const useFormItemSelectCoordinate = (data: IStates[]) => {
  const [value, setValue] = useState<ICities[]>([]);
  const [secondValue, setSecondValue] = useState<ICities[] | undefined>(
    undefined
  );

  const handleChange = (value: ICities[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp: any = data.find(
      (item: IStates) => item.value === Number(value)
    );
    setValue(temp!.cities);
    setSecondValue(temp!.cities);
  };

  const onSecondChange = (value: ICities[]) => {
    setSecondValue(value);
  };

  return { value, secondValue, handleChange, onSecondChange };
};
