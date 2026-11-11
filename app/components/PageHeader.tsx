type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

const PageHeader = ({ eyebrow, title, intro }: Props) => {
  return (
    <header className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {intro && <p className="mt-4 text-lg leading-8 text-zinc-600">{intro}</p>}
    </header>
  );
};

export default PageHeader;
