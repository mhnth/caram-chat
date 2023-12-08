'use client';

import { cx } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ModelProps {
  isVisible?: boolean;
  variant: 'left' | 'right' | 'center';
  onOutsideClick?: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

export const Modal: React.FC<ModelProps> = ({
  isVisible,
  onOutsideClick,
  variant,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx(
        'fixed inset-0 z-50 bg-black bg-opacity-25',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      onClick={() => onOutsideClick}
    >
      <div onClick={(e) => e.stopPropagation()} {...rest} className="h-full">
        {/* {children} */}
        <div className="h-full w-4/5 bg-white">
          <div className="flex flex-col">
            <span>setting</span>
            <span>Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};
