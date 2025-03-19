import Conversation from "./Conversation";

const ConversationsHolder = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
		</div>
	);
};
export default ConversationsHolder;