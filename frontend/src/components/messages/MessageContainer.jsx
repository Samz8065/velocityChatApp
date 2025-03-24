import MessageInput from "./MessageInput";
import MessageHolder from "./MessageHolder";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full sm:flex-1 flex flex-col h-full max-h-[100vh] overflow-hidden">
      {!selectedConversation ? (
        <NoChatSelected authUser={authUser} />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            {/* <span className="label-text ">To:</span>{" "} */}
            <span className="text-white font-bold block sm:inline sm:ml-0 ml-6">
              {selectedConversation.fullName}
            </span>
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

const NoChatSelected = ({ authUser }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome back, {authUser?.fullName || "stranger"}! 👋</p>
        <p>Pick a chat and start the conversation.</p>
        {/* <TiMessages className="text-3xl md:text-6xl text-center" /> */}
      </div>
    </div>
  );
};
