import { useRef } from 'react';
import { CustomInput } from '../CustomInput';
import styles from './syles.module.scss';

export const DynamicForm = () => {
  const formRef = useRef(null);
  let form = {
    title: 'Form Title',
    submitUrl: '/teste',
    lsInput: [
      {
        props: {
          id: 'Teste',
          label: 'Teste',
          type: 'text',
          defaultValue: 'adas',
        },
        outputName: 'teste',
      },
      {
        props: {
          id: 'Teste2',
          label: 'Teste2',
          type: 'select',
          defaultValue: 'aaa',
          options: [{ label: 'aaaa', value: 'aaa' }],
        },
        outputName: 'teste1',
      },
      {
        props: {
          id: 'Teste2',
          label: 'Teste2',
          type: 'select',
          defaultValue: 'aaa',
          options: [{ label: 'aaaa', value: 'aaa' }],
        },
        outputName: 'teste2',
      },
    ],
  };
  const formOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData.entries);
    const requestBody = Object.fromEntries(formData.entries);

    console.log(requestBody);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{form.title}</h1>
      <form ref={formRef} onSubmit={formOnSubmit}>
        <div className={styles.fieldsContainer}>
          {form.lsInput.map(({ props, outputName }, index) => {
            return (
              <CustomInput key={index} outputName={outputName} {...props} />
            );
          })}
          <input type="checkbox" name="teste3" id="" value="1" />
          <input type="checkbox" name="teste3" id="" value="2" />
          <input type="checkbox" name="teste3" id="" value="3" />
          <input type="checkbox" name="teste3" id="" value="4" />
          <input type="checkbox" name="teste3" id="" value="5" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
