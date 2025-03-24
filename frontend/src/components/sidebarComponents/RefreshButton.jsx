import React from "react";
import { BiRefresh } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import useLogout from "../../hooks/useLogout";
import useConversation from "../../store/useConversation";

const RefreshButton = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div title="close chat" className="absolute bottom-4 right-4">
      {!selectedConversation ? null : (
        <FaWindowClose
          className="w-6 h-6 text-white cursor-pointer"
          onClick={handleReload}
        />
      )}
    </div>
  );
};

export default RefreshButton;
