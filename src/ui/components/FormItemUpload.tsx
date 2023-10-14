import { Button, Form, Upload, UploadFile } from 'antd';
import {
  IFormFieldEnterprises,
  IFormFieldUsers,
  NameType,
} from '../../interfaces';
import { useState, FC } from 'react';

export interface IFormItemUpload {
  name: NameType;
  maxCount?: number;
  accept: string;
  buttonText: string;
}
export const FormItemUpload: FC<IFormItemUpload> = ({
  name,
  maxCount = 1,
  accept,
  buttonText,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <Form.Item<IFormFieldUsers | IFormFieldEnterprises>
      name={name}
      valuePropName={name}
      getValueFromEvent={(event) => {
        return event?.fileList;
      }}
      rules={[{ required: true, message: 'Campo obligatorio' }]}
    >
      <Upload
        maxCount={maxCount}
        onRemove={(file) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        }}
        beforeUpload={(file) => {
          setFileList([...fileList, file]);
          return false;
        }}
        accept={accept}
      >
        <Button>{buttonText}</Button>
      </Upload>
    </Form.Item>
  );
};
