const { Liveblocks } = require("@liveblocks/node");

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY,
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const userId = body.userId || "jogador-" + Math.random().toString(36).slice(2, 7);

  const session = liveblocks.prepareSession(userId, {
    userInfo: { name: userId },
  });

  session.allow("*", session.FULL_ACCESS);

  const { body: responseBody, status } = await session.authorize();

  return {
    statusCode: status,
    body: responseBody,
  };
};
