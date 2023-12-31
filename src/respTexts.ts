const linkToMyProfile = "https://t.me/@empflow";

const respTexts = {
  err: "Извините, произошла ошибка. Попробуйте ещё раз",

  duplicatePhoneNumErr: `Вы уже отправляли свой номер телефона. Если нужно, можете <a href="${linkToMyProfile}">написать мне</a> напрямую`,

  savingPhoneNumErr: `Извините, произошла ошибка. Если нужно, можете <a href="${linkToMyProfile}">написать мне</a> напрямую.`,

  start(name: string) {
    return `👋 <b>Привет, ${name}!</b> Меня зовут Матвей и я снимаю такие туры апартаментов, что гости выстраиваются в очередь и пересматривают их по несколько раз😎!

📌 Этот бот поможет вам посмотреть примеры моих работ, узнать подробности и рассчитать стоимость.`;
  },

  menu: "Нажмите одну из кнопок ниже, чтобы продолжить ⬇️",

  learnMore: `🎥 Stop-motion тур - это видео, которое создается из большого количества отдельных фотографий (обычно более 1000), благодаря чему можно создать эффект управления реальностью.

<b>Например:</b>
✅ Накрыть стол, протянув пальцем по нему
✅ Пройти сквозь дверь в другую комнату
✅ Расстелить постель щелчком пальца`,

  reasonsToBuy: `✅ <b>Мгновенно повысить доверие</b>.
Ваши гости прекрасно понимают, что мошенники или “любители” не стали бы заморачиваться со съемкой такого обзора.

✅ <b>Создать WOW-эффект</b>.
Всё, что нужно для продажи - это повысить эмоции клиента до необходимого уровня. Stop-motion туры справляются с этой задачей прекрасно!

✅ <b>Выделиться на фоне конкурентов</b>.
Если вы отправите гостям такое видео, то однозначно запомнитесь им лучше остальных. При мысли об аренде квартиры, они обязательно вспомнят вас.

✅ <b>Наглядно рассказать о преимуществах</b>.
Всего за ~1 минуту гости увидят не только оснащение квартиры, но и близость к магазинам, вид из окна, паркинг и другие преимущества, которых нет у конкурентов.

✅ <b>Создать Вирусный эффект</b>.
Потенциальные гости очень часто пересылают такие ролики своим друзьям и знакомым, ещё больше увеличивая вероятность бронирования.`,

  examples: `<b>Мои недавние работы:</b>
🎥 <a href="https://youtu.be/0Pbhzj9GVGk">Видео 1</a>
🎥 <a href="https://youtu.be/iUupUth09u4">Видео 2</a>`,

  buyTour: `✅ Отлично! Stop-motion тур - это великолепное вложение, которое обычно <b>окупает себя за несколько дней</b>!

💵 Уникальность обзоров состоит в том, что инвестируете вы один раз - а <b>приносить доход они вам будут годами</b>.
  
📌 Также, каждому заказчику я предоставляю четкую инструкцию по подготовке объекта к съёмке и по использованию видео, чтобы максимально увеличить прибыль.
`,

  seePrices: `👌 Хорошо, давайте сориентирую по стоимости:

Студия: 9.990₽ (самое популярное)
1-комн: 11.990₽
2-комн: 13.990₽
3-комн: 15.990₽

📞 Давайте я напишу вам, отвечу на вопросы и всё объясню

⬇️ Нажмите на кнопку на клавиатуре, чтобы отправить свой номер телефона или <a href="${linkToMyProfile}">напишите мне напрямую</a>`,

  messageDirectly: `📞 Вы можете отправить мне свой номер телефона, нажав на кнопку на клавиатуре, либо <a href="${linkToMyProfile}">написать мне напрямую</a>`,

  goToMenuOption: "Или можете вернуться в меню",

  contactReceived: "Я получил ваш контакт, скоро вам напишу!",
};

export default respTexts;
