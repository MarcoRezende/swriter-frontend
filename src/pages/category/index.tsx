import Link from 'next/link';

const Category: React.FC = () => {
  return (
    <div>
      <Link href="/category/new">
        <a>Nova categoria</a>
      </Link>
    </div>
  );
};

export default Category;
