import clsx from 'clsx';

export function Divider({
  soft = true,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      role="presentation"
      {...props}
      className={clsx(
        className,
        'w-full border-t',
        soft && 'border-zinc-950/60 dark:border-zinc-950',
        !soft && 'border-zinc-950/10 dark:border-white/10'
      )}
    />
  );
}
