import ConversationsHolder from "./ConversationsHolder";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import RefreshButton from "./RefreshButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col min-h-screen relative">
      <SearchInput />
      <div className="divider px-3"></div>
      <ConversationsHolder />
      <LogoutButton />
      <RefreshButton/>
    </div>
  );
};

export default Sidebar;
