import { useEffect, useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebarComponents/Sidebar";
import useConversation from "../../store/useConversation";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { selectedConversation } = useConversation();

  useEffect(() => {
    if (selectedConversation && window.innerWidth < 640) {
      setIsSidebarOpen(false);
    }
  }, [selectedConversation]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      {/* Sidebar: Hide on mobile */}
      <button
        className="sm:hidden p-2 bg-blue-500 text-white fixed top-0 left-0 z-50 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed inset-0 bg-gray-800 transition-transform transform ${
          isSidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } sm:translate-x-0 sm:relative sm:w-1/4 sm:z-auto`}
      >
        <Sidebar />
        {/* Close button on mobile */}
        <button
          className="sm:hidden absolute top-5 right-3 text-white text-2xl"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>
      </div>

      {/* Message container takes the rest of the space */}
      <div className="flex-1">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
