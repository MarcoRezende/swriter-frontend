import Head from 'next/head';

import { useForm } from 'react-hook-form';

import Form from '../../components/Form';
import { Input } from '../../components/Input';
import { useCategory } from '../../context/category';
import { Category } from '../../models/Category';

const NewCategory: React.FC = () => {
  const { createOne } = useCategory();
  const { register, handleSubmit, watch } = useForm();
  const watchedFields = watch();
  const handleSubmitNewCategory = async ({ name, theme }: Category) => {
    const category: Category = {
      name,
      theme,
    };

    console.log('creating -->', category);

    await createOne(category);
  };

  return (
    <>
      <Head>
        <title>Swriter | Nova categoria</title>
      </Head>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitNewCategory)}
        title="Nova categoria"
      >
        <div>
          <Input
            value={watchedFields.name}
            label="Nome"
            placeholder="nova categoria"
            register={register('name', { required: true, maxLength: 20 })}
          />

          <Input
            value={watchedFields.theme}
            label="Tema"
            placeholder="selecione"
            register={register('theme', { required: true, maxLength: 20 })}
          />
        </div>
      </Form>
    </>
  );
};

export default NewCategory;
