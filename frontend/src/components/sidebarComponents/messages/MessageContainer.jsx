import MessageInput from "./MessageInput";
import MessageHolder from "./MessageHolder";

const MessageContainer = () => {
  const nochatselected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col h-full max-h-[100vh] overflow-hidden">
      {nochatselected? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <MessageHolder />
          </div>
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 User ❄</p>
        <p>Select a chat to start messaging</p>
        {/* <TiMessages className="text-3xl md:text-6xl text-center" /> */}
      </div>
    </div>
  );
};
