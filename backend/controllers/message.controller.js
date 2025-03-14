import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let converstation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!converstation) {
      converstation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      converstation.messages.push(newMessage._id);
    }

    // await converstation.save();
    // await newMessage.save();
    //takes too much time as it occurs one after the other

    //runs in parallel
    await Promise.all([converstation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; //id of user id like to chat with
    const senderId = req.user._id; //my userid

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // not reference but actual messages are returned

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
