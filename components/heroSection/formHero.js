import React, {useState} from 'react'
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import MaskedInput  from 'react-input-mask';

import { sendContactMail } from '../../services/sendMail';
import LoadingSpinner from '../LoadingSpinner';

import { FormContainer } from './style';
import theme from '../../styles/theme';

function FormHero() {
  const [ nome, setNome ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ curso, setCurso ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const router = useRouter();

  console.log(nome, phone, curso)


  async function handleSubmit(event){
    event.preventDefault();

    if(!nome || !phone || !curso){
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });

      return;
    }

    try {
      setLoading(true)
      await sendContactMail(nome, phone, curso);
      setNome('');
      setPhone('');
      setCurso('');
      toast('Formulário enviado com sucesso!', {
        style: {
          background: theme.sucess,
          color: theme.white
        }
      });
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });
    } finally {
      router.push('/obrigado')
      setLoading(false)
    }
  }

  return (
    <FormContainer
      id="form"
      onSubmit={handleSubmit}
    >
      { loading ? <LoadingSpinner /> : ''}   
      <p>Cadastre-se para mais informações</p>
      <input
        type="text"
        placeholder="Seu Nome"
        onChange={({target}) => setNome(target.value)}
        value={nome}
        className={`${loading ? "disabled-input" : ""}`}
      />
      {/* <input
        type="phone"
        required
        placeholder="Seu Telefone"
        onChange={({target}) => setPhone(target.value)}
        value={phone}
        className={`${loading ? "disabled-input" : ""}`}
      /> */}
      <MaskedInput
        mask="(99) 99999-9999"
        type="phone"
        placeholder="Seu Telefone"
        onChange={({target}) => setPhone(target.value)}
        value={phone}
        className={`${loading ? "disabled-input" : ""}`}
      />
      <select
        onChange={({target}) => setCurso(target.value)}
        value={curso}
        className={`${loading ? "disabled-input" : ""}`}
      >
        <option value="" disabled defaultValue>Selecione um curso</option>
        <option value="Administração">Assistente Completo Administrativo</option>
        <option value="Farmacia">Atendente de Farmácia</option>
        <option value="Ingles">Cebrac English</option>
        <option value="Cuidador">Cuidador</option>
        <option value="Logistica">Logística Completa</option>
        <option value="Manutenção Celular">Manutenção de Celulares e Computadores</option>
        <option value="Profissional da Beleza">Profissional da Beleza e Bem Estar</option>
      </select>
      <button
        type="submit"
        className={`${loading ? "disabled-input" : ""}`}
      >
        Enviar
      </button>
    </FormContainer>
  )
}

export default FormHero