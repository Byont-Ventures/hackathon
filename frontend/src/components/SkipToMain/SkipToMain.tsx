import { Link } from '../Link';

export const SkipToMain: React.FC = () => {
  return (
    <Link
      data-testid="SkipToMain"
      href="#maincontent"
      className="sr-only focus:not-sr-only focus:z-50 focus:absolute"
    >
      Skip to main
    </Link>
  );
};
