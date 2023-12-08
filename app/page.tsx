import { ChatList } from '@/components/layout';
import { IChatAddon, ISidebar } from '@/components/icons';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* header */}
      <div className="flex justify-between">
        <span>
          <ISidebar />
        </span>
        <span>Caram</span>
        <span>
          <IChatAddon />
        </span>
      </div>
      <ChatList />
    </main>
  );
}
