import { Container } from '../styles/components/Navbar';
import RandomIcon from '../assets/icons/random.svg';
import CreateIcon from '../assets/icons/create.svg';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <RandomIcon />
          </a>
        </Link>
        <Link href="/category/new">
          <a>
            <CreateIcon />
          </a>
        </Link>
      </div>
    </Container>
  );
};
