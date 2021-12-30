import toast, { Toast } from 'react-hot-toast';

const base: Partial<Toast> = {
  style: {
    fontFamily: 'Poppins',
    background: '#303030',
    color: '#fff',
  },
  position: 'top-right',
  duration: 3000,
};

export const errorToast = (message = 'Ocorreu um erro!') =>
  toast.error(message, base);

export const successToast = (message = 'Sucesso!') =>
  toast.success(message, base);
