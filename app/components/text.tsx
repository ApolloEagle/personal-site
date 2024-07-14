const Text = ({ text, title }: { text: string; title?: boolean }) => (
  <>
    {title ? (
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        {text}
      </h1>
    ) : (
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{text}</p>
    )}
  </>
);

export default Text;
