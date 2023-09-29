import { Form, Input } from 'antd';
import { FormsButtons } from '../../ui/components';
import { IFormFieldEnterprises } from '../../interfaces';
import { enterprisesPlaceholders } from '../../constants';
import { inputFormsStyle } from '../../ui/styles';

export const FormEnterprise = () => {
  const handleSubmit = (values: IFormFieldEnterprises) => {
    console.log(values);
  };
  return (
    <Form name="userForm" initialValues={{}} onFinish={handleSubmit}>
      <Form.Item<IFormFieldEnterprises> name="business_name">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.bussinessName}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="comercial_name">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.comercialName}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="legal_representative">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.legalRepresentative}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="RFC">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.RFC}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="street">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.street}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <div className="two-columns-forms">
        <Form.Item<IFormFieldEnterprises> name="exterior_number">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.exteriorNumber}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>

        <Form.Item<IFormFieldEnterprises> name="interior_number">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.interiorNumber}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>
      </div>

      <div className="two-columns-forms">
        <Form.Item<IFormFieldEnterprises> name="suburb">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.suburb}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>

        <Form.Item<IFormFieldEnterprises> name="postal_code">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.postalCode}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>
      </div>
      <div className="two-columns-forms">
        <Form.Item<IFormFieldEnterprises> name="state">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.state}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>

        <Form.Item<IFormFieldEnterprises> name="municipality">
          <Input
            autoComplete="off"
            placeholder={enterprisesPlaceholders.municipality}
            className="input-form"
            style={inputFormsStyle}
          />
        </Form.Item>
      </div>

      <Form.Item<IFormFieldEnterprises> name="country">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.country}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="enterprise_type">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.enterpriseType}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="turn_enterprise">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.turnEnterprise}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="tellphone">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.tellphone}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="email">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.email}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item<IFormFieldEnterprises> name="file">
        <Input
          autoComplete="off"
          placeholder={enterprisesPlaceholders.file}
          className="input-form"
          style={inputFormsStyle}
        />
      </Form.Item>

      <Form.Item>
        <FormsButtons />
      </Form.Item>
    </Form>
  );
};
