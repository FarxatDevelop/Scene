const mainKeyboard = [
  [{ text: "🛍 Buyurtma berish", callback_data: "order" }],
  [
    { text: "📋 Mening buyurtmalarim", callback_data: "myOrder" },
    { text: "🏘 Barcha filiallar", callback_data: "all_branch" },
  ],
];

const orderKeyboard = [
  [
    { text: "🏃 Olib ketish", callback_data: "getmyself" },
    { text: "🚖 Yetkazib berish", callback_data: "delivery" },
  ],
  [{ text: "⬅️ Orqaga", callback_data: "back" }],
];

const allBranch = [
  [{ text: "⬅️ Orqaga", callback_data: "back" }],
  [
    { text: "Toshkent", callback_data: "toshkent" },
    { text: "Xorazim", callback_data: "xorazim" },
  ],
  [
    { text: "Nukus", callback_data: "nukus" },
    { text: "Navoiy", callback_data: "navoiy" },
  ],
  [
    { text: "Toshkent", callback_data: "toshkent" },
    { text: "Xorazim", callback_data: "xorazim" },
  ],
  [
    { text: "Nukus", callback_data: "nukus" },
    { text: "Navoiy", callback_data: "navoiy" },
  ],
  [{ text: "Keyingi", callback_data: "all_branch" }],
];

module.exports = { mainKeyboard, orderKeyboard, allBranch };
