'use client';

import { chatList } from '@/fakedata';
import { formatMovementDate } from '@/lib/utils';
import Link from 'next/link';

export default function UsersChat() {
  return (
    <>
      {/* list chat */}
      <div className="chat-list mt-6 px-2">
        {chatList.map((c, i) => {
          const date = formatMovementDate(new Date(c.createdAt).getTime());
          return (
            <Link key={i} href={'/kdjfk'} className="mt-3">
              <div
                key={i}
                className="chat-box flex cursor-pointer justify-between"
              >
                <div className="flex gap-2">
                  <img
                    className="h-12 w-12 rounded-full border border-gray-50"
                    src={c.profileImg}
                    alt={c.username}
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold leading-3">
                      {c.username}
                    </span>
                    <div className="text-sm leading-none text-tex-500">
                      {c.lastMessage}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="w-max text-xs font-semibold leading-none text-tex-500">
                    {date}
                  </span>
                  {c.unread !== 0 && (
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full 
                      bg-primary-500 text-xs font-semibold text-tex-100"
                    >
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
