const { Liveblocks } = require("@liveblocks/node");

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY,
});

exports.handler = async (event) => {
  const { room, userId } = JSON.parse(event.body || "{}");

  const { body, status } = await liveblocks.identifyUser(
    { userId: userId || "anonymous" },
    { userInfo: { name: userId || "Jogador" } }
  );

  return {
    statusCode: status,
    body,
  };
};
