


module.exports = function(web) {
  async () =>
    web.chat.postMessage({
      ok: true,
      channel: "DP71AR7FC",
      ts: "1571974624.005900",
      message: {
        text: "Here's a message for you",
        type: "message",
        subtype: "im",
        ts: "1503435956.000247"
      }
    });
};
