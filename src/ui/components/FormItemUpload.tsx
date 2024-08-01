import { useState, FC } from 'react';
import { Button, Form, Upload, UploadFile } from 'antd';
import {
  IFormFieldEnterprises,
  IFormFieldUsers,
  IFormItemUploadProps,
} from '../../interfaces';

export const FormItemUpload: FC<IFormItemUploadProps> = ({
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
