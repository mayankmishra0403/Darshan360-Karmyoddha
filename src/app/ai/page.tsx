import dynamic from 'next/dynamic';

const ChatUI = dynamic(() => import('@/components/ChatUI'), {
  ssr: false,
  loading: () => (
    <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8 text-center text-[#5C4F46]">
      Loading AI assistant...
    </div>
  ),
});

export default function AIPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center" data-aos="fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Main Feature</p>
        <h1 className="mt-3 font-['Playfair_Display'] text-5xl text-[#2D2420]">AI Heritage Assistant</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
          Ask history questions, get cultural insights, and plan a meaningful trip to Gwalior Fort or Orchha with your personal AI guide.
        </p>
      </div>
      <div className="mx-auto mt-10">
        <ChatUI />
      </div>
    </div>
  );
}
