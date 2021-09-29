import Head from 'next/head';

import { useForm } from 'react-hook-form';
import FormWrapper from '../../components/Form/FormWrapper';
import { Input } from '../../components/Form/Input';

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
      <FormWrapper
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitNewCategory)}
        title="Nova categoria"
        subtitle="Representação especifica de uma tematica."
      >
        <section>
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
        </section>
      </FormWrapper>
    </>
  );
};

export default NewCategory;
