import axios from 'axios';

export const sendContactMail = async (nome, phone, curso  ) => {
  const data = {
    nome, phone, curso
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}