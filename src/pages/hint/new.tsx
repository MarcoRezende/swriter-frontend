import Head from 'next/head';

import { useForm } from 'react-hook-form';
import FormWrapper from '../../components/Form/FormWrapper';
import { Input } from '../../components/Form/Input';
import { Textarea } from '../../components/Form/Textarea';

import { Select } from '../../components/Select';
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
        title="Nova sentença"
        subtitle="Adicione uma nova frase baseada em uma temática."
      >
        <section>
          <Textarea
            value={watchedFields.name}
            label="Sentença"
            placeholder="frase ou palavra"
            register={register('tip', { required: true, maxLength: 20 })}
          />

          {/* <Select
          
          /> */}

          <Input
            value={watchedFields.theme}
            label="Categorias"
            placeholder="escolha uma ou mais"
            register={register('category', { required: false, maxLength: 20 })}
          />

          <Input
            value={watchedFields.theme}
            label="Autor"
            placeholder="autor da obra"
            register={register('author', { required: false, maxLength: 20 })}
          />

          <Input
            value={watchedFields.theme}
            label="Livro"
            placeholder="obra de referência"
            register={register('book', { required: false, maxLength: 20 })}
          />
        </section>
      </FormWrapper>
    </>
  );
};

export default NewCategory;
