import { chatData } from '@/chatData';
import { IArrowBack, IPhoto, ISearch, ISend } from '@/components/icons';
import { chatList } from '@/fakedata';
import { cx } from '@/lib/utils';
import Link from 'next/link';

export default function ChatPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let prevUserId = 0;
  let isDisplayImg = true;
  let myId = 1;
  return (
    <div className="bg-blue-400">
      <div
        className="sticky top-0 z-10 flex w-full items-center justify-between
                 bg-blue-400 px-1 py-2 opacity-95"
      >
        <Link href={'/'} className="flex items-center">
          <span className="span-icon">
            <IArrowBack />
          </span>
          <span>Name</span>
        </Link>
        <div>
          <span className="span-icon">
            <ISearch />
          </span>
        </div>
      </div>
      <div>
        {chatData.map((c, i) => {
          if (c.userId === prevUserId) {
            isDisplayImg = false;
          } else {
            isDisplayImg = true;
            prevUserId = c.userId;
          }

          let isMyMsg = c.userId === myId;

          return (
            <div
              className={cx('mt-1.5 flex px-1', isMyMsg && 'mr-2 justify-end')}
            >
              <div className="h-7 w-7">
                {isDisplayImg && !isMyMsg && (
                  <img
                    className="h-full w-full rounded-full"
                    src={chatList[0].profileImg}
                    alt=""
                  />
                )}
              </div>
              <div
                className={cx(
                  'msg relative ml-1 mt-1 flex max-h-max w-max items-center',
                  'rounded-xl bg-green-400 px-3 py-1 text-primary-900',
                  isMyMsg ? 'before:hidden' : 'bg-white after:hidden',
                )}
              >
                <div
                  className={cx(
                    'buff',
                    !isDisplayImg && 'mt-0 before:hidden after:hidden',
                    isMyMsg ? 'before:hidden' : 'after:hidden',
                  )}
                ></div>
                {c.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="chatroom-footer fixed bottom-0 z-10 w-full">
        <form action="" className="flex items-center gap-2 bg-white p-1.5">
          <span className="span-icon">
            <IPhoto />
          </span>
          <input
            type="text"
            placeholder="Aa"
            className="w-full rounded-full bg-gray-300 px-3 py-0.5"
          />
          <span className="span-icon">
            <ISend />
          </span>
        </form>
      </div>
    </div>
  );
}
