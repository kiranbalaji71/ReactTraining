import axios from "axios";

const DiscordServer = () => {
  const Send = async (data) => {
    const body = {
      content: "Message Received",
      embeds: [
        {
          description: data,
          color: 1127128,
        },
      ],
    };
    try {
      await axios.post(
        "https://discord.com/api/webhooks/1161244265838542858/0keTh3x-q2hcS2EC1bj9IpyZ1G7qtgpKuhXa9W9QuWJ6HFFZJiCNyjzsFD8usrcSLeLd",
        body
      );
    } catch (error) {
      console.error(error);
    }
  };
  return Send;
};

export default DiscordServer;
