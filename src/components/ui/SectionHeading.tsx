
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  className,
  align = 'center',
  tag: Tag = 'h2',
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mx-auto mb-12',
        {
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
          'mx-0': align !== 'center',
        },
        className
      )}
    >
      <div className="inline-flex items-center mb-2">
        <div className="h-1 w-6 rounded bg-blue-500 mr-2" />
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Таїровський ліцей
        </span>
      </div>

      <Tag className={cn(
        'text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4'
      )}>
        {title}
      </Tag>

      {description && (
          <p
              className="text-lg text-gray-600 [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
              dangerouslySetInnerHTML={{__html: description}}
          />
      )}
    </div>
  );
};

export default SectionHeading;
