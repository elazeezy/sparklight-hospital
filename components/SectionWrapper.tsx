import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('py-24 lg:py-32', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
