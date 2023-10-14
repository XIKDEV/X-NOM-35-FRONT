import { Form } from 'antd';
import {
  FormItemInput,
  FormItemSelectCoordinate,
  FormItemUpload,
  FormsButtons,
} from '../../ui/components';
import { useFormEnterprise } from '../hooks';

export const FormEnterprise = () => {
  const { modules, handleSubmit } = useFormEnterprise();

  return (
    // TODO: Optimizar reglas de formulario
    <Form name="userForm" initialValues={{}} onFinish={handleSubmit}>
      <FormItemInput name="business_name" placeholder="Nombre de la empresa" />
      <FormItemInput name="comercial_name" placeholder="Nombre comercial" />
      <FormItemInput
        name="legal_representative"
        placeholder="Representante legal"
        rules={[
          {
            pattern:
              /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
            message: 'Ingrese nombre válido',
          },
        ]}
      />
      <FormItemInput
        name="RFC"
        placeholder="RFC"
        rules={[
          {
            pattern:
              /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
            message: 'Ingrese RFC válido',
          },
        ]}
      />
      <FormItemInput name="street" placeholder="Calle" />
      <div className="two-columns-forms">
        <FormItemInput
          name="exterior_number"
          placeholder="Número exterior"
          rules={[{ pattern: /^[0-9]+/, message: 'Ingrese número válido' }]}
        />
        <FormItemInput name="interior_number" placeholder="Número interior" />
      </div>
      <div className="two-columns-forms">
        <FormItemInput name="suburb" placeholder="Colonia" />
        <FormItemInput
          name="postal_code"
          placeholder="Código postal"
          rules={[{ pattern: /^[0-9]+/, message: 'Ingrese número válido' }]}
        />
      </div>
      <div className="two-columns-forms">
        <FormItemSelectCoordinate
          firstData={modules.states}
          firstName="id_state"
          secondName="id_city"
          firstPlaceholder="Estado"
          secondPlaceholder="Ciudad"
        />
      </div>
      <FormItemInput name="country" placeholder="País" />
      <FormItemInput name="enterprise_type" placeholder="Tipo de empresa" />
      <FormItemInput name="turn_enterprise" placeholder="Giro de la empresa" />
      <FormItemInput
        name="tellphone"
        placeholder="Teléfono"
        rules={[
          { max: 10, message: 'Ingrese teléfono válido' },
          { pattern: /^[0-9]+/, message: 'Ingrese teléfono válido' },
        ]}
      />
      <FormItemInput
        name="email"
        placeholder="Email"
        rules={[{ type: 'email', message: 'Ingrese email válido' }]}
      />

      <FormItemUpload
        name="file"
        accept=".png,.jpeg,.jpg"
        buttonText="Subir imagen"
      />

      <Form.Item>
        <FormsButtons />
      </Form.Item>
    </Form>
  );
};
