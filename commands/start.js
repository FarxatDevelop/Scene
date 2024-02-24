const { bot } = require("../core/bot");
const { mainKeyboard, orderKeyboard, allBranch } = require("../utils/keyboard");

bot.start(async (msg) => {
  const first_name = msg.from.first_name;
  msg.reply(`👋 Botimizga xush kelibsiz <b>${first_name}</b>`, {
    parse_mode: "HTML",
  });

  msg.reply("Bizning bot xizmatlari", {
    reply_markup: {
      inline_keyboard: mainKeyboard,
    },
  });
});

bot.action("order", (ctx) => {
  ctx.deleteMessage();
  ctx.reply("Buyurtma turini tanlang", {
    reply_markup: {
      inline_keyboard: orderKeyboard,
    },
  });
});

bot.action("back", (ctx) => {
  ctx.deleteMessage();
  ctx.reply("Bizning bot xizmatlari", {
    reply_markup: {
      inline_keyboard: mainKeyboard,
    },
  });
});

bot.action("myOrder", (ctx) => {
  ctx.deleteMessage();
  ctx.reply("Sizda buyurtmalar yo'q", {
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Orqaga", callback_data: "back" }]],
    },
  });
});
bot.action("all_branch", (ctx) => {
  ctx.deleteMessage();
  ctx.reply("Bizning filiallarimiz :", {
    reply_markup: {
      inline_keyboard: allBranch,
    },
  });
});
