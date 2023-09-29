import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { formsButtonsStyles } from '../styles';

export const FormsButtons = () => {
  const dispatch: CallableFunction = useDispatch();
  const handleCloseDrawerForm = () => {
    import('../../store/forms').then(({ setCloseDrawerForm }) => {
      dispatch(setCloseDrawerForm());
    });
  };

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
        htmlType="submit"
        className="forms-buttons-button"
        style={formsButtonsStyles}
        onClick={() => {}}
      >
        Confirmar
      </Button>
    </div>
  );
};
