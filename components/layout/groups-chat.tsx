import { chatList } from '@/fakedata';
import { formatMovementDate } from '@/lib/utils';

export default function GroupsChat() {
  return (
    <>
      {/* list chat */}
      <div className="chat-list mt-6 px-4">
        {chatList.map((c, i) => {
          const date = formatMovementDate(new Date(c.createdAt).getTime());
          return (
            <div
              key={i}
              className="chat-box mt-3 flex cursor-pointer justify-between"
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
              <div className="flex flex-col items-end gap-1">
                <span className="w-max text-xs font-semibold leading-none text-tex-500">
                  {date}
                </span>
                {c.unread != 0 && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-tex-100">
                    {c.unread}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
