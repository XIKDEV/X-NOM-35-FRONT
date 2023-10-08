import { Button } from 'antd';
import { formsButtonsStyles } from '../styles';
import { useFormsButtons } from '../hooks';

export const FormsButtons = () => {
  const { isLoading, handleCloseDrawerForm } = useFormsButtons();

  return (
    <div className="forms-buttons">
      <Button
        htmlType="button"
        className="forms-buttons-button"
        style={formsButtonsStyles}
        onClick={handleCloseDrawerForm}
        disabled={isLoading}
      >
        Cancelar
      </Button>

      <Button
        htmlType="submit"
        className="forms-buttons-button"
        style={formsButtonsStyles}
        onClick={() => {}}
        loading={isLoading}
      >
        Confirmar
      </Button>
    </div>
  );
};
