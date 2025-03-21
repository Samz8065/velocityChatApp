import ConversationsHolder from "./ConversationsHolder";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col min-h-screen">
      <SearchInput />
      <div className="divider px-3"></div>
      <ConversationsHolder />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
