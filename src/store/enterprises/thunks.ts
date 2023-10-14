import { getAdapter, content, sublink, postAdapter } from '../../api';
import { IFormFieldEnterprises } from '../../interfaces';

export const getEnterprisesList = () => {
  return async (dispatch: CallableFunction) => {
    import('../request/requestSlice').then(({ setLoading }) => {
      dispatch(setLoading());
    });

    const token = localStorage.getItem('token');
    const header = {
      content,
      auth: `Bearer ${token}`,
    };

    try {
      const { data } = await getAdapter(sublink.enterprise, header);
      import('./enterprisesSlice').then(({ setEnterprises }) => {
        dispatch(setEnterprises(data));
      });
      import('../request').then(({ setStopLoading }) => {
        dispatch(setStopLoading());
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      import('../request').then(({ setErrorInRequest }) => {
        dispatch(setErrorInRequest(err.response.data.message));
      });
    }
  };
};

export const postEnterprise = (values: IFormFieldEnterprises) => {
  return async (dispatch: CallableFunction) => {
    import('../request').then(({ setLoading }) => {
      dispatch(setLoading());
    });

    const {
      business_name,
      comercial_name,
      legal_representative,
      RFC,
      street,
      exterior_number,
      interior_number,
      suburb,
      postal_code,
      id_state,
      id_city,
      country,
      enterprise_type,
      turn_enterprise,
      tellphone,
      email,
      file,
    } = values;
    const corpInfo = new FormData();
    corpInfo.append('business_name', business_name);
    corpInfo.append('comercial_name', comercial_name);
    corpInfo.append('legal_representative', legal_representative);
    corpInfo.append('RFC', RFC);
    corpInfo.append('street', street);
    corpInfo.append('exterior_number', exterior_number);
    corpInfo.append('interior_number', interior_number);
    corpInfo.append('suburb', suburb);
    corpInfo.append('postal_code', postal_code);
    corpInfo.append('id_state', id_state);
    corpInfo.append('id_city', id_city);
    corpInfo.append('country', country);
    corpInfo.append('enterprise_type', enterprise_type);
    corpInfo.append('turn_enterprise', turn_enterprise);
    corpInfo.append('tellphone', tellphone);
    corpInfo.append('email', email);
    corpInfo.append('file', file[0]);

    const token = localStorage.getItem('token');
    const header = {
      content: 'multipart/form-data',
      auth: `Bearer ${token}`,
    };

    try {
      const { message } = await postAdapter(
        sublink.enterprise,
        corpInfo,
        header
      );

      import('../request').then(({ setStopLoading, setSaveInfo }) => {
        dispatch(setStopLoading());
        dispatch(setSaveInfo(message));
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      import('../request').then(({ setErrorInRequest }) => {
        dispatch(setErrorInRequest(err.response.data.message));
      });
    }
  };
};
