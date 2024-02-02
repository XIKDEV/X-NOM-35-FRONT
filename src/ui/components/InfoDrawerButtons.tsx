import { Button } from 'antd';
import { useInfoDrawerButtons } from '../hooks';
import { formsButtonsStyles } from '../styles';

export const InfoDrawerButtons = () => {
  const { handleCloseDrawerForm } = useInfoDrawerButtons();

  return (
    <div className="forms-buttons">
      <Button
        htmlType="button"
        className="forms-buttons-button"
        style={formsButtonsStyles}
        onClick={handleCloseDrawerForm}
      >
        Cancelar
      </Button>

      <Button
        htmlType="button"
        className="forms-buttons-button"
        style={formsButtonsStyles}
        onClick={() => {}}
      >
        Editar
      </Button>
    </div>
  );
};
