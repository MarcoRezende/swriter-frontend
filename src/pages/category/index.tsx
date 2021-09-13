import Link from 'next/link';

export const Category: React.FC = () => {
  return (
    <div>
      <Link href="/new">
        <a>Nova categoria</a>
      </Link>
    </div>
  );
};
