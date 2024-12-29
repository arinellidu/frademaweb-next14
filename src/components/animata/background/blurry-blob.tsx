import { cn } from '@components/lib/utils';
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({ className, firstBlobColor, secondBlobColor }: BlobProps) {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            'absolute -right-8 -top-34 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter',
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            'absolute -left-20 -top-84 h-72 w-72 animate-pop-blob rounded-sm bg-green-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter',
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
