/*
 * Copyright (c) 2017–present Felipe de Leon <fglfgl27@gmail.com>
 *
 * This file is part of SmartTwitchTV <https://github.com/fgl27/SmartTwitchTV>
 *
 * SmartTwitchTV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SmartTwitchTV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartTwitchTV.  If not, see <https://github.com/fgl27/SmartTwitchTV/blob/master/LICENSE>.
 *
 */

//Spacing for release maker not trow errors from jshint
function ru_RULang() {
    // This is a false/true var change if day comes first in your language eg (27/12/2010) day 27 month 12 year 2010
    //Then copy this and set it to true, if doesn't don't copy it
    Main_IsDayFirst = true;

    // This is the size of side pannel a adjustments may be needed here so it can fit all words in the horizontal axis
    // If it need ajustment or yours language just copy the below line and change it value until it does
    Sidepannel_MoveldefaultMargin = 12.7;

    //Below are variables to translate
    STR_KEY_UP_DOWN = 'вверх/вниз';
    STR_KEY_MEDIA_FF = 'или кнопкой перемотки';
    STR_GUIDE_EXTRA = 'или 2';
    STR_GUIDE_EXTRA2 = 'или кнопку перемотки';
    STR_REFRESH = 'Обновить';
    STR_SEARCH = 'Поиск';
    STR_SETTINGS = 'Настройки';
    STR_CONTROLS = 'Управление';
    STR_ABOUT = 'О приложении';
    STR_HIDE = 'Скрыть';
    STR_SEARCH_EMPTY = 'Введите запрос';
    STR_SEARCH_RESULT_EMPTY = 'Ничего не найдено';
    STR_SWITCH = 'Сменить раздел';
    STR_SWITCH_USER = 'Сменить раздел';
    STR_SWITCH_VOD = 'Показать: записи или хайлайты';
    STR_SWITCH_CLIP = 'Период: 24 ч, 7 дней, 30 дней или всё время';
    STR_GO_TO = 'Перейти в раздел';
    STR_USER = 'Аккаунт';
    STR_LIVE = 'В эфире';
    STR_GAMES = 'Категории';
    STR_PLAYING = '';
    STR_FOR = '·';
    STR_WATCHING = 'Время просмотра';
    STR_WAITING = 'Время ожидания';
    STR_SINCE = 'В эфире';
    STR_AGAME = 'Категория';
    STR_PLACEHOLDER_PASS = 'Пароль';
    STR_PLACEHOLDER_SEARCH = 'Канал, категория или видео';
    STR_PLACEHOLDER_OAUTH = 'Ключ авторизации';
    STR_PLACEHOLDER_USER = 'Имя пользователя';
    STR_PLACEHOLDER_PRESS = 'Нажмите ОК,';
    STR_CHANNELS = 'Каналы';
    STR_CHANNEL = 'Канал';
    STR_GOBACK_START = 'Назад — на предыдущий экран';
    STR_IS_OFFLINE = 'закончился';
    STR_CHECK_HOST = ', проверяю рейд';
    STR_IS_SUB_ONLY = 'Это видео только для подписчиков канала';
    STR_IS_SUB_ONLY_ERROR = 'только для подписчиков';
    STR_NOKEY_GENERAL_WARN = '. Войдите в аккаунт: внизу меню выберите «Аккаунт» и нажмите ОК';
    STR_REFRESH_PROBLEM = 'Не удалось загрузить. Попробуйте обновить';
    STR_REFRESH_PROBLEM_ENTER = 'Здесь пока пусто или не удалось загрузить. Нажмите ОК, чтобы обновить';
    STR_REFRESH_PROBLEM_ENTER_LANG = 'Нет эфиров на выбранном языке или не удалось загрузить. Нажмите ОК, чтобы обновить, или смените язык (зажать влево)';
    STR_NO = 'Нет';
    STR_FOR_THIS = 'для';
    STR_PLAYER_PROBLEM = 'Не удалось загрузить видео, выхожу…';
    STR_VODS = 'Записи';
    STR_HIGHLIGHTS = 'Хайлайты';
    STR_CLIPS = 'Клипы';
    STR_CONTENT = 'Контент';
    STR_STREAM_ON = 'Эфир от';
    STR_DURATION = 'Длительность';
    STR_VIEW = 'просмотр';
    STR_VIEWS = 'просмотров';
    STR_VIEWER = 'зритель';
    STR_VIEWERS = 'зрителей';
    STR_EXIT_AGAIN = 'Нажмите ещё раз, чтобы выйти';
    STR_EXIT_AGAIN_PICTURE = 'Нажмите ещё раз, чтобы закрыть картинку в картинке';
    STR_EXIT_AGAIN_MULTI = 'Нажмите ещё раз, чтобы закрыть мультистрим';
    STR_EXIT_MESSAGE = 'Выйти из приложения?';
    STR_EXIT = 'Выход';
    STR_CHANGELOG = 'Изменения';
    STR_FULL_CHANGELOG = 'Изменения';
    STR_CHANGELOG_SUMMARY = 'Здесь только последние изменения, полный список — по ссылке ниже:';
    STR_UPDATE = 'Обновить';
    STR_UPDATE_CHECK = 'Проверить обновления';
    STR_UPDATE_CHECKING = 'Проверяю обновления…';
    STR_UPDATE_CHECKING_FAIL = 'Не удалось проверить обновления';
    STR_NO_UPDATES = 'У вас последняя версия';
    STR_UPDATE_CHANGELOG = 'Обновления';
    STR_UPDATE_LATEST = 'Что нового:';
    STR_UPDATE_FAIL = 'Не удалось обновить. Скачайте APK вручную со страницы релизов';
    STR_UPDATE_FAIL_DOWNLOAD = 'Не удалось скачать APK. Скачайте его вручную со страницы релизов';
    STR_UPDATE_AVAILABLE = 'Вышла новая версия приложения';
    STR_WEB_UPDATE_AVAILABLE = 'Вышло обновление интерфейса';
    STR_UPDATE_CHECK_SIDE = '. Подробности в меню «Обновления»';
    STR_UPDATE_LAST_CHECK = 'Проверено:';
    STR_UPDATE_OPT = 'Обновления';
    STR_UPDATE_CHECK_FOR = 'Проверять обновления в фоне';
    STR_UPDATE_SHOW = 'Когда вышло обновление';
    STR_UPDATE_SHOW_ARRAY = ['Да', 'Only a toast message', 'Нет'];
    STR_UPDATE_START = 'Скачиваю обновление, это займёт несколько секунд…';
    STR_UPDATE_PLAY = 'Если в Play Маркете нет обновления, попробуйте через несколько минут';
    STR_UPDATE_ERROR = 'Для этого нужна версия приложения 3.0.303 или новее, обновите его';
    STR_UPDATE_WARNING_OK = 'Приложение обновлено';
    STR_CLOSE = 'Закрыть';
    STR_MINIMIZE = 'Свернуть';
    STR_CANCEL = 'Отмена';
    STR_RERUN = 'Повтор';
    STR_LIVE_CHANNELS = 'Каналы в эфире';
    STR_HOME = 'Главная';
    STR_HOME_LIVE = 'Подписки в эфире';
    STR_FOLLOWED_GAMES = 'Мои категории';
    //Settings sections (Settings_Groups): title, hint
    STR_SETTINGS_GROUPS = [
        ['Основные', 'Язык, контент, запуск'],
        ['Плеер', 'Качество, кодеки, перемотка'],
        ['Интерфейс', 'Чат, внешний вид, экран'],
        ['Уведомления', 'Кто вышел в эфир, предупреждения'],
        ['Приложение', 'Резервная копия, обновления']
    ];
    STR_LIVE_HOSTS = 'Рейды';
    STR_LIVE_GAMES = 'Категории в эфире';
    STR_USER_CHANNEL = 'Подписки';
    STR_USER_MY_CHANNEL = 'Мой канал';
    STR_USER_ADD = 'Аккаунт';
    STR_USER_REMOVE = 'Удалить';
    STR_USER_ERROR = 'Такого пользователя нет';
    STR_USER_HOSTING = 'проводит рейд на';
    STR_USER_HOSTED_BY = 'рейд от';
    STR_USER_SET = 'уже добавлен';
    STR_USER_MAKE_ONE = 'Сменить';
    STR_USER_NUMBER_ONE = 'Первый аккаунт в списке используется для подписок и для эфиров из подписок по всему приложению';
    STR_ADD_USER_SH = 'Войдите в аккаунт Twitch, чтобы видеть свои подписки';
    STR_CLIP_DAY = '24ч';
    STR_CLIP_WEEK = '7д';
    STR_CLIP_MONTH = '30д';
    STR_CLIP_ALL = 'всё время';
    STR_JUMP_TIME = 'Перемотка';
    STR_JUMP_TIME_CLICK_AGAIN = 'Нажмите ещё раз, чтобы перемотать';
    STR_JUMP_T0 = 'на';
    STR_JUMP_CANCEL = 'Перемотка отменена';
    STR_JUMP_TIME_BIG = '— это дальше конца видео';
    STR_SEC = 'с';
    STR_MIN = 'мин';
    STR_MS = 'мс';
    STR_HR = 'ч';
    STR_SOURCE = 'Источник';
    STR_TWITCH_TV = 'SmartTwitchTV lite';
    STR_CLOSE_THIS = 'ОК или «Назад» — закрыть';
    STR_CLOSE_THIS2 = '«Назад» — закрыть';
    STR_CLOSE_THIS3 = '«Назад» — окно обновления, ОК — закрыть';
    STR_PLAYER = 'Плеер:';
    STR_CHAT = 'Чат:';
    STR_CHAT_SHOW = 'Показать чат';
    STR_CURRENT_VERSION = 'Установлена версия';
    STR_LATEST_VERSION = 'последняя версия';
    STR_CONTROLS_MAIN_2 = 'Открыть видео: выберите его стрелками и нажмите ОК, «Плей/пауза» или 1';
    STR_CONTROLS_MAIN_3 = 'Обновить экран:';
    STR_CONTROLS_MAIN_4 = 'Выйти: в меню выберите «Выход»';
    STR_CONTROLS_MAIN_5 = 'Закрыть приложение принудительно: зажмите «Назад»';
    STR_CONTROLS_MAIN_6 = 'Сменить экран: «Назад», затем вверх/вниз или кнопкой перемотки';
    STR_CONTROLS_MAIN_10 = 'Поиск: в меню выберите «Поиск», введите текст, нажмите ОК на клавиатуре и выберите, где искать';
    STR_CONTROLS_MAIN_14 = 'О приложении: в меню выберите «О приложении»';
    STR_ABOUT_INFO_1 = 'Клиент Twitch для Android TV, бесплатный для всех';
    STR_ABOUT_INFO_2 = 'Приложение не связано с Twitch. Оно работает через открытый API Twitch';
    STR_ABOUT_INFO_2_SOURCE = 'Это версия для проверки в браузере';
    STR_ABOUT_INFO_3 = 'Контакты:';
    STR_ABOUT_INFO_4 = 'Приложение с открытым кодом под лицензией GNU GPL v3.0, код на GitHub';

    STR_ABOUT_INFO_6 = 'Используемые библиотеки:';
    STR_ABOUT_INFO_18 = 'Телефоны и планшеты:';
    STR_ABOUT_INFO_19 = 'Приложением можно пользоваться на телефоне и планшете, но сделано оно для телевизора, поэтому поддержка ограничена. Скачайте APK по ссылке ниже и установите вручную';

    STR_CONTROLS_PLAY_0 = 'или кнопками под плеером';
    STR_CONTROLS_PLAY_1 = 'Показать панель: ОК или любая стрелка';
    STR_CONTROLS_PLAY_2 = 'Закрыть видео: дважды «Назад» или «Стоп»';
    STR_CONTROLS_PLAY_3 = 'Пауза: откройте панель и нажмите кнопку паузы';
    STR_CONTROLS_PLAY_4 = 'Лента под плеером: вверх';
    STR_CONTROLS_PLAY_5 = 'Качество: кнопка «Качество» под плеером';
    STR_CONTROLS_PLAY_6 = 'Если видео зависло, выберите то же качество ещё раз';
    STR_CONTROLS_PLAY_7 = 'Показать или скрыть чат: вниз или кнопка 3, или кнопками под плеером';
    STR_CONTROLS_PLAY_8 = 'Положение чата: влево или перемотка назад (записи и клипы), или кнопками под плеером';
    STR_CONTROLS_PLAY_9 = 'Размер чата: вправо, или кнопками под плеером';
    STR_CONTROLS_PLAY_10 = 'Яркость фона чата: кнопками под плеером';
    STR_CONTROLS_PLAY_11 = 'Если чат завис или не загрузился, перезапустите его кнопкой под плеером';
    STR_CONTROLS_PLAY_12 = 'Поиск: откройте панель, выберите «Поиск» и нажмите ОК';
    STR_CONTROLS_PLAY_13 = 'Работают все кнопки пульта: плей, пауза, стоп, перемотка';
    STR_CONTROLS_PLAY_14 = 'Чат и видео: кнопка 2 или перемотка вперёд переключает картинку в картинке и 50/50';
    STR_F_DISABLE_CHAT = 'Отключить чат';
    STR_OAUTH_IN = 'С ключом приложение может писать в чат от вашего имени, показывать ваши смайлы и подарочные подписки и быстрее загружать часть контента.<br><br>Ключ можно добавить в любой момент.<br><br>Подробнее:<br><br>%x<br><br>На некоторых устройствах для подтверждения нужна мышь.<br><br>для добавления ключа';
    STR_USER_CODE = 'Добавить ключ';
    STR_USER_CODE_OK = 'Ключ добавлен';
    STR_KEY_BAD = 'Ключ больше не работает, добавьте новый';
    STR_OAUTH_WRONG = 'Вы добавляете ключ для пользователя';
    STR_OAUTH_WRONG2 = 'но ключ принадлежит пользователю';
    STR_FOLLOWING = 'Вы подписаны';
    STR_FOLLOW = 'Подписаться';
    STR_IS_SUB_NOOAUTH = 'Ключ не добавлен, поэтому приложение не может проверить вашу подписку';
    STR_IS_SUB_NOT_SUB = 'Вы не подписчик этого канала';
    STR_IS_SUB_IS_SUB = 'Вы подписчик, но видео не запустилось по неизвестной причине';
    STR_OAUTH_FAIL = 'Не удалось проверить ключ, попробуйте ещё раз';
    STR_OAUTH_FAIL_USER = 'Ключ принадлежит другому пользователю';
    STR_NOKEY = 'Нет аккаунта';
    STR_NOKEY_WARN = 'Чтобы подписываться, войдите в аккаунт';
    STR_FOLLOW_ISSUE = 'Сторонние приложения больше не могут подписываться и отписываться (кнопка видна, только если вы уже подписаны)';
    STR_NOKUSER_WARN = 'Сначала войдите в аккаунт';
    STR_RESET = 'Перезапустить';
    STR_CLIP = 'Клип';
    STR_CHANNEL_CONT = 'Канал';
    STR_NET_DOWN = 'Нет интернета, без него приложение не работает';
    STR_NET_UP = 'Интернет снова есть';
    STR_FOLLOWERS = 'подписчиков';
    STR_FOLLOWER = ' подписчик';
    STR_CANT_FOLLOW = ', нельзя подписаться или отписаться';
    STR_GAME_CONT = 'Категория';
    STR_YES = 'Да';
    STR_REMOVE_USER = 'Удалить аккаунт';
    STR_PLACEHOLDER_PRESS_UP = 'Нажмите вверх, чтобы';
    STR_FOLLOW_GAMES = 'Мои категории';
    STR_USER_GAMES_CHANGE = 'Переключить';
    STR_GUIDE = 'зажать ОК';
    STR_MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    STR_DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    STR_STARTED = '';
    STR_VIDEOS = 'Видео';
    STR_REPLAY = 'Повтор';
    STR_STREAM_END = 'выход через';
    STR_STREAM_END_EXIT = '«Назад» — выйти';
    STR_FEATURED = 'Рекомендуемые';
    STR_CREATED_AT = 'Создано';
    STR_OPEN_BROADCAST = 'Открыть эфир';
    STR_OPEN_LAST_BROADCAST = 'Открыть последнюю запись';
    STR_IS_LIVE = 'В эфире';
    STR_OPEN_REWIND = 'Смотреть с начала';
    STR_OPEN_REWIND_SUMMARY = 'Открыть запись текущего эфира с перемоткой';
    STR_OPEN_REWIND_FAIL = 'Для этого эфира перемотка недоступна';
    STR_SHOW_ISLIVE_WARNING = 'Предупреждать, что стример в эфире';
    STR_SHOW_ISLIVE_WARNING_SUMMARY = 'Во время клипа или записи приложение проверяет, не в эфире ли стример, и сообщает об этом. Открыть эфир можно кнопкой под плеером';
    STR_OPEN_CHAT = 'Нажмите, чтобы открыть чат, или дождитесь, когда стример вернётся в эфир';
    STR_STAY_OPEN = 'Остаться на канале';
    STR_STAY_OPEN_SUMMARY = 'Проверять, не вернулся ли стример в эфир';
    STR_STAY_CHECK = 'Проверка эфира:';
    STR_STAY_CHECKING = 'Проверяю, идёт ли эфир…';
    STR_STAY_CHECK_LAST = 'Проверено:';
    STR_STAY_IS_OFFLINE = 'Эфир закончился';
    STR_NO_BROADCAST = 'Нет записи';
    STR_NO_BROADCAST_WARNING = 'У этого клипа нет записи эфира';
    STR_NO_CHAT = 'Поэтому чата нет';
    STR_IS_NOW = 'сейчас';
    STR_OPEN_HOST = 'Открыть рейд';
    STR_SETTINGS_PLAYER = 'Плеер';
    STR_SETTINGS_BUFFER_SIZE = 'Начальный буфер:';
    STR_SETTINGS_BUFFER_SIZE_SHORT_SUMMARY = 'Сколько загрузить до начала воспроизведения';
    STR_SETTINGS_BUFFER_SIZE_SUMMARY = 'Сколько видео загрузить перед стартом. Чем меньше, тем быстрее начинается воспроизведение — так и рекомендуется. Большое значение обычно ничего не улучшает';
    STR_SETTINGS_BUFFER_LIVE = 'Буфер эфиров';
    STR_SETTINGS_BUFFER_VOD = 'Буфер записей и хайлайтов';
    STR_SETTINGS_BUFFER_CLIP = 'Буфер клипов';
    STR_SETTINGS_LANG = 'Язык';
    STR_LOADING_CHAT = 'Чат: подключаюсь к';
    STR_LOADING_FAIL = 'Не удалось подключиться к чату…';
    STR_CHAT_CONNECTED = 'Чат подключён';
    STR_CHAT_SEND_DELAY = 'Сообщение отправлено. В чате включена задержка, оно появится через';
    STR_CHAT_DELAY = 'Задержка чата';
    STR_VOD_HISTORY_BASE = 'Начать с начала или с места, где вы остановились';
    STR_VOD_HISTORY = STR_VOD_HISTORY_BASE + ' Видео?';
    STR_VOD_HISTORY_FORM_LIVE = STR_VOD_HISTORY_BASE + ' Прямой эфир?';
    STR_FROM = 'С:' + STR_BR;
    STR_FROM_START = STR_FROM + 'Начало';
    STR_CHAT_END = 'Чат закончился';
    STR_RECENT = ', новые';
    STR_VIWES = ', популярные';
    STR_NOKEY_VIDEO_WARN = 'Войдите в аккаунт, чтобы видеть записи из подписок';
    STR_SWITCH_TYPE = 'Показать: новые или популярные';
    STR_ENABLE = 'Включить';
    STR_ENABLED = 'Включено';
    STR_DISABLE = 'Отключить';
    STR_DISABLED = 'Отключено';
    STR_DARK_MODE = 'Тёмная тема';
    STR_BRIGHT_MODE = 'Светлая тема';
    STR_RESTORE_PLAYBACK_WARN = 'Приложение закрылось во время просмотра, продолжаю';
    STR_RESTORE_PLAYBACK = 'Продолжать после закрытия';
    STR_RESTORE_PLAYBACK_SUMMARY = 'Если система или вы закрыли приложение во время просмотра, при следующем запуске оно продолжит с того же места';
    STR_CHAT_FONT = 'Размер текста чата';
    STR_VIDEOS_ANIMATION = 'Анимированные превью записей';
    STR_VIDEOS_ANIMATION_SUMMARY = 'Когда запись выбрана, её превью оживает, если у неё есть анимация (есть не у всех)';
    STR_SIDE_PANEL = 'Меню: влево или «Назад»';
    STR_SIZE = 'Размер';
    STR_BRIGHTNESS = 'Яркость';
    STR_FORBIDDEN = 'Видео недоступно: оно ограничено в вашем регионе или только для официального приложения Twitch';
    STR_JUMPING_STEP = 'Шаг перемотки';
    STR_SECOND = 'с';
    STR_SECONDS = 'с';
    STR_MINUTE = 'мин';
    STR_MINUTES = 'мин';
    STR_CLOCK_OFFSET = 'Поправка часов';
    STR_CLOCK_OFFSET_SUMMARY = 'Сдвинуть часы приложения под ваш часовой пояс';
    STR_CLOCK_AM_PM = 'Формат часов';
    STR_CLOCK_AM_PM_SUMMARY = '24 часа или 12 часов с AM/PM или без';
    STR_CONTENT_LANG = 'Язык контента';
    STR_CONTENT_LANG_SUMMARY = 'На каком языке показывать эфиры, видео и клипы';
    STR_APP_LANG = 'Язык приложения';
    STR_APP_LANG_SUMMARY = 'Язык интерфейса';
    STR_ENTER_TO_OPEN = 'Открыть';
    STR_LANG_ALL = 'Все';
    STR_NO_GAME = 'Не удалось загрузить категорию';
    STR_EMPTY = 'Пусто';
    STR_JUMP_BUFFER_WARNING = 'Нельзя перематывать во время загрузки';
    STR_CHAT_DISABLE = 'Чат отключён. Включить его можно кнопкой под плеером';
    STR_CLIP_FAIL = 'Не удалось загрузить клип или видео';
    STR_CHAT_BRIGHTNESS = 'Яркость фона чата';
    STR_PLAY_NEXT = 'Следующий';
    STR_PLAY_NEXT_IN = 'Следующий через';
    STR_PLAY_ALL = 'Играть все';
    STR_AUTO_PLAY_NEXT = 'Следующий клип автоматически';
    STR_SIDE_PANEL_BACK_MAIN_MENU = 'Назад в главное меню';
    STR_UP = 'Нажмите вверх';
    STR_HOLD_UP = 'Зажмите вверх';
    STR_LIVE_FEED = 'Эфиры';
    STR_VOD_DIALOG = 'Запуск записей';
    STR_VOD_DIALOG_SUMMARY = 'Откуда начинать запись, которую вы уже смотрели. «С начала» действует и на предпросмотр';
    STR_VOD_DIALOG_START = 'С начала';
    STR_VOD_DIALOG_LAST = 'С места остановки';
    STR_VOD_DIALOG_SHOW = 'Спрашивать';
    STR_END_DIALOG_OPT = 'Окно в конце видео';
    STR_END_DIALOG_SETTINGS = 'Время до действия по умолчанию';
    STR_END_DIALOG_SETTINGS_SUMMARY = 'Когда эфир, запись или клип закончились, появляется окно «что дальше». Через сколько секунд выполнить действие по умолчанию';
    STR_END_DIALOG_DISABLE = 'Без таймера';
    STR_CHAT_SIZE = 'Размер чата';
    STR_CHAT_POS = 'Положение чата';
    STR_CHAT_VIDEO_MODE = 'Режим видео';
    STR_CHAT_SIDE_FULL = 'Полный экран';
    STR_CHAT_PP_SIDE_FULL = 'Большое и маленькое видео';
    STR_CHAT_SIDE = 'Видео и чат';
    STR_CHAT_5050 = '50/50 и два чата';
    STR_SPEED = 'Скорость';
    STR_QUALITY = 'Качество';
    STR_NORMAL = 'Обычная';
    STR_AUTO = 'Авто';
    STR_VERY_LOW = 'Очень низкое';
    STR_LOW = 'Низкое';
    STR_HIGH = 'Высокое';
    STR_VERY_HIGH = 'Очень высокое';
    STR_THUMB_RESOLUTION = 'Качество превью';
    STR_THUMB_RESOLUTION_SUMMARY = 'Разрешение картинок у эфиров, записей и категорий (не у клипов). Ниже — быстрее грузится, но мыльнее';
    STR_PAYPAL_SUMMARY = 'Поддержать автора через PayPal:';
    STR_BITCOIN_SUMMARY = 'Поддержать автора биткоином, адрес или QR-код:';
    STR_PLAYER_PROBLEM_2 = 'не удалось загрузить данные эфира';
    STR_PLAYER_RESYNC = 'Перезапустить плеер';
    STR_PLAYER_MULTI_ALL = 'Все';
    STR_QUALITY_PP = ['Маленький', 'Большой', STR_PLAYER_MULTI_ALL];
    STR_QUALITY_MULTI = [STR_PLAYER_MULTI_ALL, 'Сверху слева', 'Сверху справа', 'Снизу слева', 'Снизу справа'];
    STR_QUALITY_MULTI_BIG = [STR_PLAYER_MULTI_ALL, 'Сверху', 'Снизу слева', 'Снизу центр', 'Снизу справа'];
    STR_PLAYER_BITRATE_UNLIMITED = 'Без ограничений';
    STR_PLAYER_BITRATE = 'Предел качества «Авто»';
    STR_PLAYER_BITRATE_SHORT_SUMMARY = 'Максимальное разрешение и битрейт для качества «Авто»';
    STR_PLAYER_BITRATE_SUMMARY = 'Помогает слабым устройствам, когда играет несколько видео сразу (они рассчитаны на одно и начинают терять кадры), и экономит трафик. Если включить ограничение, качество по умолчанию станет «Авто». Для слабых устройств: маленькие плееры 720p / 3 Мбит/с, основной без ограничений';
    STR_PLAYER_BITRATE_SUMMARY_ETC = 'Если у основного и маленького плеера разные значения, при смене окон в картинке в картинке (кнопка вниз) будет короткая загрузка. Чтобы её не было, поставьте одинаковые. Слишком высокий битрейт видно по растущим потерянным кадрам или постоянной загрузке';
    STR_PLAYER_MAIN = 'основной плеер: большое окно в картинке в картинке и верхнее в 50/50';
    STR_PLAYER_RES_SMALL = 'маленькие плееры: малое окно в картинке в картинке и все окна мультистрима';
    STR_PLAYER_BITRATE_MAIN = 'Битрейт - ' + STR_PLAYER_MAIN;
    STR_PLAYER_BITRATE_SMALL = 'Битрейт - ' + STR_PLAYER_RES_SMALL;
    STR_PLAYER_RES_MAIN = 'Разрешение - ' + STR_PLAYER_MAIN;
    STR_PLAYER_RES_SMALL = 'Разрешение - ' + STR_PLAYER_RES_SMALL;
    STR_BLOCK_RES = 'Запрещённые разрешения';
    STR_BLOCK_RES_SHORT_SUMMARY = 'Разрешения, которые плеер не будет использовать';
    STR_BLOCK_RES_SUMMARY = 'В режиме «Авто» плеер не будет использовать отмеченные разрешения. Полезно, если устройство тормозит на каком-то разрешении. Клипы не умеют «Авто», поэтому ограничение действует и на них';
    STR_BLOCK_RES_SUMMARY_EXTRA = 'Во время просмотра качество всё равно можно выбрать вручную.<br><br>XX означает все разрешения, которые начинаются с этих цифр';
    STR_BLOCKED = 'Заблокировано';
    STR_BLOCKED_NOT = 'Разрешено';
    STR_AUDIO_SOURCE = 'Источник звука';
    STR_VOLUME_CONTROLS = 'Звук и громкость';
    STR_AUDIO_ALL = 'Включить звук у всех';
    STR_AUDIO_ALL_ENA = 'Звук включён у всех окон';
    STR_AUDIO_ALL_100 = 'Громкость 100% у всех';
    STR_AUDIO_ALL_100_SET = 'Громкость всех окон — 100%';
    STR_VOLUME = 'Громкость —';
    STR_AUDIO = 'Звук —';
    STR_DEF_QUALITY = 'Качество по умолчанию';
    STR_DEF_QUALITY_SUMMARY = 'Для одного видео. Картинка в картинке и мультистрим всегда играют в «Авто», его предел задаётся ниже';
    STR_PICTURE_PICTURE = 'Картинка в картинке, 50/50 и мультистрим (только эфиры):';
    STR_PICTURE_CONTROLS1 = 'Картинка в картинке: во время просмотра нажмите вверх, выберите эфир в ленте и зажмите ОК';
    STR_PICTURE_CONTROLS2 = 'Сменить эфир в окне: в мультистриме — одно нажатие в ленте. В картинке в картинке и 50/50 нажатие меняет большое или верхнее окно, зажатый ОК или 1 — маленькое или нижнее';
    STR_PICTURE_CONTROLS3 = 'Включить звук у всех окон: зажмите вниз';
    STR_PICTURE_CONTROLS4 = 'Поменять окна местами (картинка в картинке): вниз';
    STR_PICTURE_CONTROLS5 = 'Переместить маленькое окно (картинка в картинке): влево';
    STR_PICTURE_CONTROLS6 = 'Размер маленького окна (картинка в картинке): вправо';
    STR_PICTURE_CONTROLS7 = 'Звук из окна: кнопка «Источник звука» под плеером. В 50/50 и мультистриме — влево/вправо, в картинке в картинке — кнопки «следующий/предыдущий трек»';
    STR_PICTURE_CONTROLS8 = 'Перезапуск плееров: кнопка «Перезапустить плеер» под плеером. Синхронизировать окна она не умеет';
    STR_PICTURE_CONTROLS9 = 'Синхронизировать окна вручную: кнопка «Скорость» — замедлите то, что спешит. Только в картинке в картинке';
    STR_PICTURE_CONTROLS10 = 'Качество в картинке в картинке: настройка «Предел качества «Авто»»';
    STR_PICTURE_CONTROLS11 = 'Закрыть маленькое или нижнее окно: дважды «Назад»';
    STR_PICTURE_CONTROLS12 = '50/50 (два эфира, два чата): в картинке в картинке нажмите 2 или перемотку вперёд, или кнопку «Режим видео» под плеером';
    STR_PICTURE_CONTROLS13 = 'Мультистрим: кнопкой под плеером или перемоткой вперёд';
    STR_PLAYER_INFO_VISIBILITY_ARRAY = ['Когда отображается информация о плеере', 'Показывать всегда', 'Не показывать'];
    STR_SINGLE_EXIT = 'Выход из плеера одним нажатием';
    STR_SINGLE_EXIT_SUMMARY = 'Одно нажатие «Назад» закрывает плеер, картинку в картинке, 50/50 и мультистрим';
    STR_NOTIFICATION_OPT = 'Уведомления';
    STR_NOW_LIVE_SHOW = 'Когда канал из подписок начал эфир';
    STR_TITLE_CHANGE_SHOW = 'Когда канал из подписок сменил название эфира';
    STR_GAME_CHANGE_SHOW = 'Когда канал из подписок сменил категорию';
    STR_NOW_LIVE_GAME_SHOW = 'Когда в моей категории начался эфир';
    STR_NOTIFICATION_BACKGROUND = 'Уведомления поверх других приложений';
    STR_NOTIFICATION_BACKGROUND_SUMMARY = 'Нужно разрешение на уведомления в настройках Android. На Android 11 и новее в фоне показывается короткое однострочное уведомление';
    STR_NOTIFICATION_BACKGROUND_WARNING = 'Нет разрешения на уведомления в настройках Android';
    STR_NOTIFICATION_REPEAT = 'Сколько раз показывать уведомление';
    STR_NOTIFICATION_REPEAT_SUMMARY = 'Одно уведомление висит около 3 секунд, это задаёт система. Здесь можно повторить его несколько раз';
    STR_NOTIFICATION_SINCE = 'Не сообщать об эфирах, которые идут давно';
    STR_NOTIFICATION_SINCE_SUMMARY = 'Чтобы после перерыва (телевизор был выключен) не сыпался длинный список уведомлений. С выключенным экраном уведомления не показываются';
    STR_GLOBAL_FONT = 'Размер текста';
    STR_GLOBAL_FONT_SUMMARY = 'Размер всего текста и большинства иконок (у чата своя настройка). Значение ограничено, чтобы текст не пропадал и не вылезал за края';
    STR_MAIN_MENU = 'Главное меню';
    STR_USER_MENU = 'Подписки';
    STR_CH_IS_OFFLINE = 'Не в эфире';
    STR_ROUND_IMAGES = 'Круглые аватары каналов';
    STR_ROUND_IMAGES_SUMMARY = 'Большинство аватаров квадратные, поэтому некоторые могут обрезаться некрасиво';
    STR_SCREEN_COUNTER = 'Скрыть счётчик позиции';
    STR_SCREEN_COUNTER_SUMMARY = 'Счётчик показывает номер выбранной карточки и сколько всего загружено';
    STR_SWITCH_POS = 'Начинать не с первого';
    STR_SWITCH_POS_SUMMARY = 'Начинать список с более поздней позиции, чтобы не листать долго до старых видео';
    STR_USER_OPTION = 'Что сделать с аккаунтом';
    STR_MAIN_USER = 'Основной аккаунт';
    STR_USER_TOP_LABEL = 'Выберите аккаунт, чтобы увидеть действия';
    STR_USER_EXTRAS = 'Сменить или добавить';
    STR_LOW_LATENCY = 'Низкая задержка';
    STR_LOW_LATENCY_SUMMARY = 'Если видео часто подгружается, выключите низкую задержку.<br>Работает, только если буфер эфиров 1 или меньше';
    STR_GAME_SORT = 'Сортировка категорий';
    STR_LIVE_FEED_SORT = 'Сортировка ленты эфиров';
    STR_LIVE_FEED_SORT_SUMMARY = 'Порядок эфиров в ленте под плеером и в меню. Для истории — сначала то, что смотрели, для записей — самые новые';
    STR_A_Z = 'По алфавиту А–Я';
    STR_Z_A = 'По алфавиту Я–А';
    STR_APP_ANIMATIONS = 'Анимации';
    STR_APP_ANIMATIONS_SUMMARY = 'Анимации меню, прокрутки и уведомлений';
    STR_UI_SETTINGS = 'Внешний вид и анимация';
    STR_GENERAL_CUSTOM = 'Сортировка, автообновление и таймеры';
    STR_RUNNINGTIME = 'Приложение работает:';
    STR_410_ERROR = 'Не удалось получить ссылку на видео';
    STR_PRESS_ENTER_TO_CHANGE = 'Нажмите ОК, чтобы сменить на';
    STR_CLICK_UNFOLLOW = '(ОК — отписаться)';
    STR_CLICK_FOLLOW = '(ОК — подписаться)';
    STR_TODAY = 'Сегодня';
    STR_DROOPED_FRAMES = 'Потеряно кадров:';
    STR_BUFFER_HEALT = 'Буфер (с):';
    STR_NET_ACT = 'Трафик (МБ):';
    STR_NET_SPEED = 'Скорость сети (МБ):';
    STR_LATENCY_TO_BROADCASTER = 'Задержка до стримера';
    STR_LATENCY = 'Задержка до стримера (с):';
    STR_CHAT_DELAY_LATENCY_TO_BROADCASTER = 'Исходя из ' + STR_LATENCY_TO_BROADCASTER;
    STR_PING = 'Пинг до Twitch (мс):';
    STR_WARNINGS = 'Предупреждения';
    STR_WELCOME = 'Добро пожаловать в';
    STR_WELCOME_SUMMARY = 'В приложении много настроек. Загляните в «Настройки» и «Управление», чтобы освоиться';
    STR_WARNING_PHONE = 'Для телефонов';
    STR_WARNING_PHONE_SUMMARY = 'Приложение сделано для телевизора, на телефоне работает не всё. Без клавиатуры или пульта пользуйтесь экранными кнопками: коснитесь экрана, чтобы их показать. Положение и прозрачность настраиваются в настройках';
    STR_DPAD_POSTION = 'Положение D-Pad';
    STR_DPAD_OPACITY = 'Прозрачность D-Pad';
    STR_DPAD_OPT = 'Экранный D-Pad';

    STR_MAX_RES = 'Макс. разрешение:';
    STR_MAX_BIT = 'Макс. битрейт:';
    STR_MAX_LEVEL = 'Макс. уровень:';
    STR_MAX_FPS = 'Макс. FPS:';
    STR_MAX_INSTANCES = 'Макс. плееров:';
    STR_UNKNOWN = 'Неизвестно';
    STR_USER_LIVE = 'Эфиры из подписок: в меню влево или кнопка 3 откуда угодно';
    STR_PP_WORKAROUND = 'Исправление чёрного экрана';
    STR_PP_WORKAROUND_SUMMARY = 'Включайте, только если в мультистриме или картинке в картинке одно из окон чёрное. Может снизить качество и плавность';

    STR_HISTORY = 'История';
    STR_WATCHED = 'Смотрели';
    STR_UNTIL = 'до';
    STR_SORTING = 'Сортировка';
    STR_DELETE_HISTORY = 'Очистить эту историю';
    STR_DELETE_UNREACHABLE = 'Убирать недоступное';
    STR_DELETE_UNREACHABLE_SUMMARY = 'Удалять из истории записи и клипы, которые стример удалил';
    STR_NAME_A_Z = 'Имя А–Я';
    STR_NAME_Z_A = 'Имя Я–А';
    STR_GAME_A_Z = 'Категория А–Я';
    STR_GAME_Z_A = 'Категория Я–А';
    STR_VIWES_MOST = 'Больше просмотров';
    STR_VIWES_LOWEST = 'Меньше просмотров';
    STR_CHANNELS_MOST = 'Больше каналов';
    STR_CHANNELS_LOWEST = 'Меньше каналов';
    STR_NEWEST = 'Недавно смотрели';
    STR_OLDEST = 'Давно смотрели';
    STR_PRESS_ENTER_D = 'Нажмите ОК, чтобы удалить';
    STR_LIVE_VOD = 'Этот эфир закончился и стал записью<br>Открыть её с места, где вы остановились:<br>';
    STR_DELETE_SURE = 'Удалить всё:';
    STR_CREATED_NEWEST = 'Сначала новые';
    STR_CREATED_OLDEST = 'Сначала старые';
    STR_THUMB_OPTIONS = 'Действия';
    STR_HISTORY_LIVE_DIS = 'Сохранять историю эфиров';
    STR_HISTORY_VOD_DIS = 'Сохранять историю записей';
    STR_HISTORY_CLIP_DIS = 'Сохранять историю клипов';
    STR_OPEN_GAME = 'Открыть категорию';
    STR_OPEN_CHANNEL = 'Открыть канал';
    STR_THUMB_OPTIONS_KEY = 'ОК — открыть или применить, «Назад» — выйти без изменений';
    STR_DELETE_FROM_HISTORY = 'Удалить из истории';
    STR_CHECK_FOLLOW = 'Проверяю подписку…';
    STR_REFRESH_DELETE = 'Обновите экран, чтобы увидеть изменения';
    STR_THUMB_OPTIONS_TOP = 'Опции: зажать влево';
    STR_REPLACE_MULTI = 'Каким окном заменить?';
    STR_REPLACE_MULTI_ENTER = 'ОК — заменить, «Назад» — отмена';
    STR_ALREDY_PLAYING = 'Уже играет';
    STR_STREAM_ERROR = 'Не удалось открыть предпросмотр';
    STR_PP_MODO = 'Картинка в картинке';
    STR_4_WAY_MULTI_INSTANCES = 'Ваше устройство тянет только %x плеера одновременно, мультистрим недоступен';
    STR_MULTI_EMPTY = 'Пусто или эфир закончился';
    STR_4_WAY_MULTI = 'Мультистрим';
    STR_CONTROLS_MULTI_0 = 'Подсказки по мультистриму';
    STR_CONTROLS_MULTI_1 = 'Если мультистрим тормозит, уменьшите битрейт маленьких плееров в настройках. Потерянные кадры или постоянная загрузка — значит, битрейт слишком высокий или интернет медленный';
    STR_CONTROLS_MULTI_2 = 'Добавить эфир: вверх и выберите эфир';
    STR_CONTROLS_MULTI_3 = 'Заменить эфир: вверх, выберите эфир и окно для замены';
    STR_CONTROLS_MULTI_4 = 'Звук: влево/вправо, зажмите вниз — звук у всех окон';
    STR_CONTROLS_MULTI_5 = 'Выйти из мультистрима: дважды «Назад»';
    STR_CONTROLS_MULTI_6 = 'Подсказка пропадёт, когда откроете 4 эфира';
    STR_PICTURE_LIVE_FEED = 'Картинка в картинке: зажмите ОК (влево — переместить, вправо — размер, вниз — поменять окна)';
    STR_MULTI_TITLE = '. Выберите эфир, чтобы открыть или заменить, влево/вправо — звук';
    STR_FEED_END_DIALOG = '. «Назад» — в главное меню';
    STR_BACK_USER_GAMES = '«Назад» — вернуться к';
    STR_SHOW_LIVE_PLAYER = 'Предпросмотр эфиров';
    STR_SHOW_VOD_PLAYER_WARNING = 'Продолжаю с места остановки:';
    STR_SHOW_VOD_PLAYER = 'Предпросмотр записей';
    STR_SHOW_CLIP_PLAYER = 'Предпросмотр клипов';
    STR_PREVIEW_CLIP_NEXT = 'Когда клип в предпросмотре закончился, включать следующий';
    STR_SHOW_SIDE_PLAYER = 'Предпросмотр в меню';
    STR_SHOW_FEED_PLAYER = 'Предпросмотр в ленте под плеером';
    STR_SHOW_FEED_PLAYER_SUMMARY = 'Выключите, если устройство тормозит, когда играет больше одного видео';
    STR_DISABLED_FEED_PLAYER_MULTI = 'Без предпросмотра в мультистриме';
    STR_DISABLED_FEED_PLAYER_MULTI_SUMMARY = 'Если мультистрим идёт нормально, но тормозит, когда открыт ещё и предпросмотр, включите это';
    STR_PREVIEW_ERROR_LOAD = 'Предпросмотр не загрузился:';
    STR_PREVIEW_ERROR_LINK = 'недоступен';
    STR_PREVIEW_VOD_DELETED = ', запись могла быть удалена';
    STR_PREVIEW_END = 'Предпросмотр закончился';
    STR_PLAYER_LAG_ERRO = 'Не удаётся воспроизвести: проблема с интернетом';
    STR_PLAYER_ERROR = 'Не удаётся воспроизвести: ошибка плеера';
    STR_PLAYER_ERROR_MULTI = ', попробуйте уменьшить битрейт маленьких плееров в настройках';
    STR_PREVIEW_SIZE = 'Размер предпросмотра в ленте';
    STR_PREVIEW_SIZE_SUMMARY = 'Размер окна предпросмотра над карточками ленты';
    STR_PREVIEW_SIZE_ARRAY = ['Маленький', 'Средний', 'Большой', 'Огромный'];
    STR_PREVIEW_SIZE_SCREEN = 'Размер предпросмотра на экранах';
    STR_PREVIEW_SIZE_SCREEN_SUMMARY = 'Размер окна предпросмотра';
    STR_PREVIEW_VOLUME_SCREEN = 'Громкость предпросмотра на экранах';
    STR_PREVIEW_VOLUME_SCREEN_SUMMARY = 'Громкость предпросмотра поверх экранов приложения и меню';
    STR_PREVIEW_SIZE_SCREEN_ARRAY = ['Маленький', 'Большой'];
    STR_SIDE_PANEL_PLAYER_DELAY = 'Задержка предпросмотра';
    STR_SIDE_PANEL_PLAYER_DELAY_SUMMARY = 'Через сколько начинать предпросмотр после выбора карточки. Помогает медленным устройствам, которые тормозят при прокрутке';
    STR_PREVIEW_VOLUME = 'Громкость предпросмотра в ленте';
    STR_PREVIEW_VOLUME_SUMMARY = 'Громкость предпросмотра в ленте под плеером';
    STR_PREVIEW_OTHERS_VOLUME = 'Громкость основного видео';
    STR_PREVIEW_OTHERS_VOLUME_SUMMARY = 'Насколько тише основное видео (и все окна картинки в картинке и мультистрима), пока открыт предпросмотр';
    STR_SIDE_PANEL_PLAYER = 'Предпросмотр';
    STR_START_AT_USER = 'Начинать с выбора аккаунта';
    STR_START_AT_USER_SUMMARY = 'При запуске открывать экран аккаунтов. Тогда приложение не продолжит то, что играло перед закрытием';
    STR_LAST_REFRESH = 'обновлено';
    STR_PP_VOD_ERROR = 'Чтобы открыть запись, выйдите из картинки в картинке или мультистрима';
    STR_SETTINGS_ACCESSIBILITY = 'Предупреждать о специальных возможностях';
    STR_SETTINGS_ACCESSIBILITY_SUMMARY = 'Если на устройстве включены специальные возможности Android, приложение предупредит: на некоторых устройствах из-за них всё тормозит';
    STR_ACCESSIBILITY_WARN = 'Включены специальные возможности';
    STR_ACCESSIBILITY_WARN_EXTRA = 'Подробнее по ссылке:';
    STR_ACCESSIBILITY_WARN_EXTRA2 = 'Если приложение тормозит или зависает, закройте его и выключите специальные возможности.<br>Отключить это предупреждение можно в настройках';
    STR_AUTO_REFRESH = 'Автообновление экранов';
    STR_AUTO_REFRESH_SUMMARY = 'Как часто обновлять открытый экран и ленту. Чтобы обновлялись и неоткрытые экраны, включите';
    STR_AUTO_REFRESH_BACKGROUND = 'Автообновление в фоне';
    STR_AUTO_REFRESH_BACKGROUND_SUMMARY = 'Обновлять и экраны, которые сейчас не открыты. На слабых устройствах может вызывать редкие подтормаживания';
    STR_MAIN_WINDOW = 'Основное окно';
    STR_MULTI_MAIN_WINDOW = 'Основное окно мультистрима';
    STR_MAIN_MULTI_BIG = STR_MULTI_MAIN_WINDOW + ' и чат: нажмите вниз, затем используйте влево/вправо, чтобы изменить.';
    STR_SOURCE_CHECK = 'Авто, если «Источник» тормозит';
    STR_SOURCE_CHECK_SUMMARY = 'Если плеер с качеством не «Авто» не может играть дольше 15 секунд, он переключится на «Авто» и скажет об этом. Со следующим видео вернётся прежнее качество';
    STR_PLAYER_LAG = 'Видео тормозило, качество переключено на «Авто»';
    STR_PLAYER_SOURCE = 'Видео тормозило, качество снижено';
    STR_TOO_ERRORS = 'или слишком много ошибок';
    STR_STREAM_ERROR_SMALL = 'Превью, трансляция завершена' + STR_TOO_ERRORS;
    STR_CONTROLS_MEDIA_FF = 'Перемотка (записи и клипы): влево/вправо или кнопками перемотки';
    STR_VOD_MUTED = 'Часть звука вырезана из-за авторских прав, эти места темнее на полосе прокрутки';
    STR_GIFT_SUB = 'подарил вам подписку!';
    STR_ANONYMOUS = 'Аноним';
    STR_CHAT_BANNED = 'Вы забанены на этом канале';
    STR_CHAT_WRITE = 'Написать в чат';
    STR_CHAT_EXTRA = 'Ещё настройки чата';
    STR_PLACEHOLDER_CHAT = 'Нажмите ОК, чтобы открыть клавиатуру. С физической клавиатурой «Назад» или Esc её скрывает';
    STR_CHAT_ROOMSTATE = 'Чат канала:';
    STR_CHAT_NO_RESTRICTIONS = 'Нет ограничений';
    STR_OPTIONS = 'Опции';
    STR_CHAT_DELL_ALL = 'Удалить все';
    STR_CHAT_UNICODE_EMOJI = 'Unicode Эмодзи';
    STR_CHAT_TW_EMOTES = 'Смайлы Twitch';
    STR_CHAT_BTTV_GLOBAL = 'BTTV глобальные';
    STR_CHAT_BTTV_STREAM = 'BTTV стримера';
    STR_CHAT_FFZ_GLOBAL = 'FFZ глобальные';
    STR_CHAT_FFZ_STREAM = 'FFZ стримера';
    STR_CHAT_SEVENTV_GLOBAL = '7TV глобальные';
    STR_CHAT_SEVENTV_STREAM = '7TV стримера';
    STR_CHAT_AT_STREAM = '@стример';
    STR_CHAT_RESULT = 'В чате будет:';
    STR_CHAT_SEND = 'Отправить';
    STR_CHAT_EMOTE_EMPTY = 'Здесь нет смайлов';
    STR_CHAT_FOLLOWER_ONLY = 'Чат только для подписчиков канала, а вы не подписаны';
    STR_CHAT_FOLLOWER_ONLY_USER_TIME = 'вы подписаны только';
    STR_CHAT_EMOTE_ONLY = 'Режим только смайлики';
    STR_CHAT_CHOOSE = 'Выберите чат, в который хотите написать, или нажмите кнопку назад, чтобы закрыть это';
    STR_CHAT_OPTIONS_TITLE = 'Написать для опций чата';
    STR_CHAT_OPTIONS_KEYBOARD = 'Авто скрытие клавиатуры';
    STR_CHAT_OPTIONS_KEYBOARD_SUMMARY =
        'Позволяет управлять поведением экранной клавиатуры, если у вас подключена физическая клавиатура, используйте ее, если не установлено Никогда';
    STR_CHAT_OPTIONS_KEYBOARD_1 = 'Никогда';
    STR_CHAT_OPTIONS_KEYBOARD_2 = 'Если клавиатура обнаружена';
    STR_CHAT_OPTIONS_KEYBOARD_3 = 'Всегда';
    STR_CHAT_OPTIONS_EMOTE_SORT = 'Сортировка смайлов';
    STR_CHAT_OPTIONS_EMOTE_SORT_SUMMARY = 'Если это отключено, списки смайлов будут отображаться по умолчанию.';
    STR_CHAT_OPTIONS_FORCE_SHOW = 'Принудительно показать чат';
    STR_CHAT_OPTIONS_FORCE_SHOW_SUMMARY = 'Если вы хотите видеть чат, когда пишите в чат, включите это';
    STR_NOKEY_CHAT_WARN = 'Добавьте ключ пользователя, чтобы иметь возможность входить и писать в чат';
    STR_CHAT_NOT_READY = 'Чат не готов! Попробуйте еще раз через несколько секунд.';
    STR_CHAT_REDEEMED_MESSAGE_HIGH = 'Активировано Выделите мое сообщение';
    STR_CHAT_FIRST_MESSAGE_HIGH = 'ПЕРВОЕ СООБЩЕНИЕ';
    STR_CHAT_REDEEMED_MESSAGE_SUB = 'Активировано Отправить сообщение в режиме для подписчиков';
    STR_CHAT_OPTIONS = 'Чат';
    STR_CHAT_HIGHLIGHT_STREAMER_MSG = 'Выделить сообщения от стримера (темно-розовый фон)';
    STR_CHAT_HIGHLIGHT_MOD_MSG = 'Выделить сообщения от модератора (темно-голубой фон)';
    STR_CHAT_HIGHLIGHT_REDEEMED = 'Выделить сообщения о наградах (только сообщение с фиолетовым фоном)';
    STR_CHAT_HIGHLIGHT_FIRST = 'Выделить Нового Участника Чата (Тёмно-розовый фон)';
    STR_CHAT_HIGHLIGHT_STREAMER = 'Выделить сообщения @streamer (темно-красный фон, @синий)';
    STR_CHAT_HIGHLIGHT_USER = 'Выделить сообщения вам @username (темно-зеленый фон, @синий)';
    STR_CHAT_HIGHLIGHT_USER_SEND = 'Выделить свои отправленные сообщения (темно-зеленый фон)';
    STR_CHAT_SHOW_SUB = 'Выделить сообщения подписчиков в чате (темно-оранжевый фон)';
    STR_CHAT_HIGHLIGHT_BIT = 'Выделить сообщения Bits (темно-желтый фон)';
    STR_CHAT_HIGHLIGHT_ACTIONS = 'Сообщения действий (обычно это сообщения ботов стрима)';
    STR_CHAT_HIGHLIGHT_ACTIONS_SUMMARY =
        'Эти сообщения обычно аналогичны сообщениям подписчиков, но отправляются через стрим бота, поэтому, если у вас включен параметр «Выделить сообщения подписчиков...», это не нужно.';
    STR_CHAT_INDIVIDUAL_BACKGROUND = 'Разница в цвете фона отдельных сообщений';
    STR_CHAT_INDIVIDUAL_BACKGROUND_SUMMARY =
        'Отключить, Включить (авто), Светлый или Темный, В автоматическом режиме, если чат находится над стримом, у нечетного сообщения будет более темный фоновый цвет по сравнению с четным, если чат не выше (например, рядом) цвет будет ярким';
    STR_CHAT_INDIVIDUAL_LINE = 'Вставить строку, чтобы разделить отдельные сообщения чата';
    STR_CHAT_LINE_ANIMATION = 'Анимированная прокрутка при добавлении нового сообщения в чат';
    STR_CHAT_LOGGING = 'Вход в чат с текущим пользователем';
    STR_CHAT_LOGGING_SUMMARY =
        'Приложение всегда будет входить в чат с использованием текущего пользователя, если предоставлен ключ авторизации (если только чат не отключен на нижних элементах управления плеера). Но если для этого параметра установлено значение НЕТ, это предотвратит вход с использованием текущего имени пользователя и вместо этого будет входить как анонимный, даже если предоставлен ключ авторизации. Это не препятствует отправке сообщений в чат (если добавлен ключ), но не позволяет узнать Twitch, заблокированы ли вы в чате, и не позволяет узнать нахождение в чате';
    STR_CHAT_BOTS = 'Скрывать ботов и их команды (!команда)';
    STR_CHAT_TIMESTAMP = 'Время сообщений';
    STR_CHAT_USER_NOTICE = 'Показывать служебные сообщения чата';
    STR_CHAT_USER_NOTICE_SUMMARY = 'Например: «Чат: теперь только смайлы»';
    STR_CHAT_NICK_COLOR = 'Читаемые цвета ников';
    STR_CHAT_NICK_COLOR_SUMMARY = 'Вместо цветов, которые плохо видно на тёмном фоне, использовать светлые читаемые';
    STR_CHAT_CLEAR_MSG = 'Убирать удалённые сообщения';
    STR_CHAT_SHOW_BADGES = 'Значки пользователей (кроме указанных ниже)';
    STR_CHAT_SHOW_BADGES_MOD = 'Значки модераторов';
    STR_CHAT_SHOW_BADGES_VIP = 'Значки VIP';
    STR_CHAT_SHOW_BADGES_SHARED = 'Значки общего чата';
    STR_CHAT_MESSAGE_DELETED = 'Это сообщение удалено';
    STR_CHAT_MESSAGE_DELETED_ALL = 'Все сообщения этого пользователя удалены';
    STR_CHAT_MESSAGE_DELETED_TIMEOUT = ', тайм-аут на';
    STR_CHAT_CLEAR_MSG_SUMMARY = 'Убирать сообщения пользователя после тайм-аута или бана. Если выключено, они остаются с синим фоном';
    STR_OPEN_HOST_SETTINGS = 'Открывать рейд в конце эфира';
    STR_ALWAYS_STAY = 'Оставаться на канале после конца эфира';
    STR_PING_WARNING = 'Предупреждать о проблемах связи с Twitch';
    STR_PING_WARNING_SUMMARY = 'Приложение постоянно проверяет связь с Twitch. Если сообщение появляется зря, выключите';
    STR_KEY_UP_TIMEOUT = 'Время зажатия кнопки (мс)';
    STR_KEY_UP_TIMEOUT_SUMMARY = 'Сколько держать кнопку для действий «зажать»: обновить экран, открыть действия у карточки и т. п.';
    STR_CURRENT_THUMB_STYLE = 'Текущий стиль';
    STR_NEW_THUMB_STYLE = 'Новый стиль';
    STR_COLOR_STYLE_TEXT = 'Вверх/вниз — выбрать, «Назад» — выйти';
    STR_SHADOWS = 'Тень';
    STR_SHADOWS_NONE = 'Без тени';
    STR_SHADOWS_WHITE = 'Белый';
    STR_SHADOWS_GRAY = 'Серый';
    STR_SHADOWS_BLACK = 'Чёрный';
    STR_COLORS = 'Цвета';
    STR_RESULT = 'Результат';
    STR_APPLY = 'Применить';
    STR_COLOR_TYPE = 'Что красить';
    STR_STYLES = 'Стили';
    STR_ENTER = 'Нажмите ОК';
    STR_COLOR_ARRAY = 'Фон,Текст,Рамка,Полоса просмотра';
    STR_STYLES_ARRAY = 'По умолчанию,Свой,Белый,Серый,Красный,Оранжевый,Жёлтый,Зелёный,Синий,Фиолетовый,Розовый';
    STR_ENTER_RGB = STR_ENTER + ' принять изменение RGB';
    STR_THUMB_STYLE = 'Стиль выделения карточек';
    STR_OPEN_EXTERNAL_PLAYER = 'Открыть во внешнем плеере';
    STR_CHAT_SIDE_ARRAY = ['Слева', 'Справа'];
    STR_CHAT_BASE_ARRAY = [
        'Внизу справа',
        'Центр справа',
        'Сверху справа',
        'Центр сверху',
        'Сверху слева',
        'Центр слева',
        'Снизу слева',
        'Центр снизу'
    ];
    STR_CHAT_100_ARRAY = ['Справа', 'Центр', 'Слева'];
    STR_NOTIFICATION_POS = 'Где показывать уведомления';
    STR_NOTIFICATION_POS_ARRAY = ['Правый верх', 'Центр верх', 'Левый верх', 'Левый низ', 'Центр снизу', 'Правый низ'];
    STR_LOWLATENCY_ARRAY = [
        STR_DISABLE,
        'Нормальный режим, может вызвать повторную буферизацию',
        'Минимальный режим, может вызвать еще большее количество повторных буферизаций'
    ];
    STR_LOWLATENCY_ENABLE_ARRAY = [
        STR_LOW_LATENCY + ' - ' + STR_DISABLED,
        STR_LOW_LATENCY + ' - Нормальный режим',
        STR_LOW_LATENCY + ' - Минимальный режим'
    ];
    STR_VOD_SEEK = 'Перемотка записей';
    STR_VOD_SEEK_SUMMARY = 'Как быстро перематываются записи. Если зажать влево или вправо, шаг постепенно растёт до максимума. Через секунду после отпускания шаг снова минимальный.<br><br>Вверх — перебрать все шаги вручную и закрепить, пока видна полоса.<br><br>Одиночные нажатия шаг не увеличивают.<br><br>Только для записей, у клипов шаг всегда 1 секунда';
    STR_VOD_SEEK_MIN = 'Начальный шаг';
    STR_VOD_SEEK_MAX = 'Максимальный шаг';
    STR_VOD_SEEK_TIME = 'Увеличивать шаг каждые';
    STR_UP_LOCKED = 'вверх — закрепить шаг';
    STR_LOCKED = 'закреплено, вверх — изменить';
    STR_IN_CHAT = 'в чате';
    STR_IN_SHARED_CHAT = 'в общем чате';
    STR_SHOW_IN_CHAT = 'Число зрителей или участников над чатом';
    STR_SHOW_IN_CHAT_SUMMARY = 'Видно, есть ли в чате с кем поговорить и сколько зрителей пишут';
    STR_SHOW_IN_CHAT_VIEWERS = 'Зрители';
    STR_SHOW_IN_CHAT_CHATTERS = 'Участники чата';
    STR_PLAYED = 'Просмотрено';
    STR_CHAPTERS = 'Главы';
    STR_FROM_SIMPLE = 'с';
    STR_HIDE_MAIN_CLOCK = 'Скрыть часы на экранах';
    STR_HIDE_PLAYER_CLOCK = 'Скрыть часы в плеере';
    STR_HIDE_MAIN_SCREEN_TITLE = 'Скрыть заголовок экрана';
    STR_HIDE_MAIN_SCREEN_TITLE_SUMMARY = 'Заголовок сверху: «Главная», «Настройки» и т. п.';
    STR_HIDE_ETC_HELP_INFO = 'Скрыть подсказки управления';
    STR_HIDE_ETC_HELP_INFO_SUMMARY = 'Подсказки сверху: что делает зажатие кнопок и т. п.';
    STR_INACTIVE_SETTINGS = 'Сворачивать, если никто не смотрит';
    STR_INACTIVE_SETTINGS_SUMMARY = 'Сворачивать приложение после долгого бездействия. Перед этим будет предупреждение на 15 секунд, любая кнопка его отменит';
    STR_INACTIVE_WARNING = 'Приложение скоро свернётся<br><br>%x<br><br>Нажмите любую кнопку, чтобы отменить';
    STR_REMAINING = 'Осталось:';
    STR_PLAYER_INFO_VISIBILITY = 'Окно диагностики плеера';
    STR_PREVIEW_SET = 'Настройки предпросмотра';
    STR_PREVIEW_SHOW = 'Показывать предпросмотр';
    STR_PREVIEW_SIZE_CONTROLS = 'Размер предпросмотра';
    STR_OLED_BURN_IN = 'Защита OLED от выгорания';
    STR_OLED_BURN_IN_SUMMARY = 'Раз в 20 минут экран на 50 мс становится чёрным. Нужно только для OLED-экранов, склонных к выгоранию';
    STR_AS = 'как';
    STR_MILLISECONDS = 'мс';
    STR_HOUR = 'ч';
    STR_HOURS = 'ч';
    STR_RIGHT = 'Справа';
    STR_LEFT = 'Слева';
    STR_BOTTOM = 'Снизу';
    STR_TOP = 'Сверху';
    STR_AVG = 'ср.';
    STR_OFFSET = 'Смещение';
    STR_HISTORY_EMPTY_CONTENT = 'История пуста. Здесь появится то, что вы смотрели, если история включена в настройках';
    STR_PREVIEW = 'предпросмотр';
    STR_EMBED = 'Встроенный плеер';
    STR_CLICK_EXIT = 'Нажмите, чтобы закрыть плеер';
    STR_GO_FULL = 'Во весь экран';
    STR_GO_FULL_HELP = 'Клик, 9 или F11';
    STR_NOT_SUPPORT_BROWSER = 'В браузере это не работает';
    STR_WARNING_BROWSER = 'Версия для браузера';
    STR_WARNING_BROWSER_SUMMARY = 'Приложение сделано для телевизора. Мышью пользоваться можно, но удобнее стрелками, Enter и Esc («Назад»)';
    STR_THUMB_OPTIONS_CLICK = 'Двойной клик по действию — открыть или применить, клик мимо окна — выйти без изменений';
    STR_CLOSE_THIS_BROWSER = 'ОК, «Назад» или клик мимо окна — закрыть';
    STR_DISABLE_EMBED = 'Плеер Twitch в браузере';
    STR_DISABLE_EMBED_SUMMARY = 'Только для проверки в браузере. Выключите, чтобы увидеть интерфейс плеера телевизора';
    STR_SPECIAL_FEATURE = 'Для этого нужна клавиатура';
    STR_FAIL_VOD_INFO = 'Не удалось загрузить данные записи';

    STR_PROXY_DONATE_SUMMARY = 'Подробнее о прокси или поблагодарить его автора:';

    STR_TTV_LOL = 'TTV LOL';
    STR_K_TWITCH = 'K-Twitch-Bypass';
    STR_T1080 = 'T1080';

    STR_PROXY_TIMEOUT = 'Ожидание прокси (с)';
    STR_PROXY_TIMEOUT_SUMMARY = 'Сколько ждать ответа прокси, прежде чем открыть видео обычным способом';

    PROXY_SERVICE = 'Прокси: ';
    PROXY_SERVICE_STATUS = 'Включён и работает';
    PROXY_SERVICE_OFF = 'Выключен в настройках';
    PROXY_SERVICE_FAIL = 'Не работает, ошибок: %x';

    PROXY_SETTINGS = 'Прокси';
    PROXY_SETTINGS_SUMMARY = 'Можно включить только один. Прокси получает ссылку на эфир через другой сервер: помогает с контентом, недоступным в вашем регионе, и с рекламой. Если эфиры часто подгружаются, зависают или идут в плохом качестве, выключите';
    SEEK_PREVIEW = 'Кадры при перемотке';
    SEEK_PREVIEW_SUMMARY = 'Показывать кадр записи над полосой при перемотке. Есть не у всех записей';
    SEEK_PREVIEW_SINGLE = 'Одно изображение';
    SEEK_PREVIEW_CAROUSEL = 'Карусель изображений';

    OPEN_NEW_ISSUE = '(нажмите, чтобы сообщить о проблеме)';

    STR_CONFIRM = 'Подтвердить';

    STR_MATURE_NO_CHANGES = 'Без пароля настройка 18+ не изменена';
    STR_MATURE_PROTECT = 'Защитить настройку 18+ паролем';
    STR_MATURE_HELP_SET_PASS = 'Придумайте пароль и нажмите «Подтвердить». Если выйти, настройка 18+ не сохранится';
    STR_MATURE_HELP_CHECK_PASS = 'Введите пароль и нажмите «Подтвердить». Если выйти, настройка 18+ не сохранится';

    STR_MATURE_DISABLED = 'Контент 18+ отключён в настройках';
    STR_ENABLE_MATURE = 'Контент 18+';
    STR_ENABLE_MATURE_SUMMARY = 'Если выключено, всё с пометкой 18+ скрыто: эфиры, записи и клипы, в том числе из подписок';

    STR_SCREEN_OFF = 'Экран выключен (только звук)';

    STR_UNBLOCK_CHANNEL = 'Разблокировать канал';
    STR_UNBLOCK_GAME = 'Разблокировать категорию';
    STR_BLOCK_CHANNEL = 'Заблокировать канал';
    STR_BLOCK_GAME = 'Заблокировать категорию';
    STR_BLOCK_NO_USER = 'Чтобы блокировать, войдите в аккаунт';
    STR_BLOCK_NO_CHANNEL = 'Не удалось определить канал';
    STR_BLOCK_OVERWRITE = 'Показать заблокированные';
    STR_BLOCK_SORT_DATE = 'по дате блокировки';
    STR_BLOCK_SORT_NAME = 'по имени';
    STR_BLOCK_EMPTY_CONTENT = 'Здесь пока ничего не заблокировано';

    STR_NO_TOKEN_WARNING = 'Без входа в аккаунт Twitch может не показать часть контента';
    STR_NO_TOKEN_WARNING_429 = 'Twitch ограничил запросы. Войдите в аккаунт, чтобы это исправить';

    STR_ADD_USER_TEXT = 'Откройте %site на телефоне или компьютере и введите код %code';
    STR_ADD_USER_TEXT_COUNTER = 'Ждём подтверждения, проверка через %d…';
    STR_ADD_USER_TEXT_COUNTER_NOW = 'Проверяем…';
    STR_ADD_ERROR = 'Сервис входа Twitch не отвечает';
    STR_USER_TOKEN_ERROR = 'Аккаунт отключился, проверьте его на экране аккаунтов';

    STR_WRONG_PASS = 'Неверный пароль';
    STR_PASS_MATURE_ENABLED = 'Контент 18+ включён, старый пароль удалён';

    STR_PLAYER_EXTRA_CODEC = 'HEVC, AV1, 1440p и 4K';
    STR_PLAYER_EXTRA_CODEC_SUMMARY = 'Обычно эфиры идут в AVC до 1080p60. Если стример включил и Twitch отдаёт в вашем регионе, будут доступны 1440p, 4K и больше 60 кадров';
    STR_PLAYER_EXTRA_CODEC_SUMMARY1 = 'Работает только с входом в аккаунт. Есть не у всех эфиров: стример должен включить это, а Twitch — отдавать в вашем регионе';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA = 'Приложение проверяет, поддерживает ли устройство HEVC или AV1';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA2 = 'Без поддержки устройством такие эфиры могут не играть';

    STR_PLAYER_CODEC_AV1 = 'AV1';
    STR_PLAYER_CODEC_HEVC = 'HEVC';

    STR_PLAYER_CODEC_SUPPORTED = 'поддерживается';
    STR_PLAYER_CODEC_NOT_SUPPORTED = 'Устройство не поддерживает! Если включить, видео может не играть';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA3 = 'Что умеет устройство, смотрите в настройке:';

    STR_BLOCKED_CODEC = 'Кодеки';
    STR_BLOCKED_CODEC_SUMMARY = 'Какие кодеки (AVC, HEVC, AV1) поддерживает устройство и какие из них не использовать';

    STR_CODEC_DIALOG_SUMMARY_1 = 'Кодеки AVC (H.264), HEVC (H.265) и AV1, которые есть на устройстве';

    STR_CODEC_DIALOG_SUMMARY_2 = 'Программные кодеки (OMX.google) выключены, если есть аппаратные. Если видео играет плохо (растут потерянные кадры), попробуйте поменять программный и аппаратный местами';

    STR_CODEC_DIALOG_SUMMARY_3 = 'Хотя бы один кодек каждого типа должен быть включён';

    STR_SPEED_ADJUST = 'Догонять эфир';
    STR_SPEED_ADJUST_SUMMARY = 'С низкой задержкой плеер чуть ускоряет или замедляет эфир, чтобы держать задержку. Звук может немного плыть';

    STR_SW_CODEC = 'Программный кодек';
    STR_HW_CODEC = 'Аппаратный кодек';

    STR_LOAD_ALL_LANG = 'Все языки, если пусто';
    STR_LOAD_ALL_LANG_SUMMARY = 'Если на выбранном языке ничего нет, показать эфиры на всех языках. Работает на экранах категорий и главной';
    STR_LOAD_ALL_LANG_WARNING = 'На выбранном языке ничего нет, показаны все языки';

    STR_DISABLE_SHARED_CHAT = 'Без общего чата';
    STR_DISABLE_SHARED_CHAT_SUMMARY = 'Показывать сообщения только из чата открытого канала';

    STR_BACKUP_ACCOUNT_REMOVE = 'Отключить Google Диск';
    STR_BACKUP_ACCOUNT_ADD = 'Подключить Google Диск для резервной копии';
    STR_BACKUP_ACCOUNT_ADD_SUMMARY = 'Чтобы восстановить копию, подключите аккаунт — приложение покажет, что можно восстановить';

    STR_BACKUP_ACCOUNT_DIALOG_TITLE = 'Google Диск подключён';
    STR_BACKUP_ACCOUNT_DIALOG_BODY = 'Получаю данные, подождите…';
    STR_BACKUP_ACCOUNT_DIALOG_CODE_FAIL = 'Доступ не выдан';
    STR_BACKUP_ACCOUNT_DIALOG_CODE_SUCCESS = 'Доступ получен, проверяю…';

    STR_BACKUP_ACCOUNT_DIALOG_CODE_SUCCESS_END = 'Сейчас всё восстановится, окно закроется само';
    STR_BACKUP_NO_BACKUP_FOUND = 'Старой копии не было, создана новая';
    STR_BACKUP_ACCOUNT_REFRESH_ERROR = 'Доступ к Google Диску потерян, аккаунт резервной копии отключён';

    STR_BACKUP_NAME = 'Название копии:';
    STR_BACKUP_SIZE = 'Размер копии:';
    STR_BACKUP_SYNC = 'Резервная копия и синхронизация';
    STR_BACKUP_SYNC_SUMMARY = 'Приложение видит, создаёт и меняет только свои файлы на Google Диске, остальные файлы ему недоступны.<br><br>Ещё оно читает ваш адрес почты и аватар, чтобы показать подключённый аккаунт, и ничего в них не меняет';
    STR_BACKUP_USER_INFO = '(аккаунты, история, заблокированное и настройки)';

    STR_BACKUP_SYNC_USER = 'Синхронизировать аккаунты';
    STR_BACKUP_SYNC_HISTORY = 'Синхронизировать историю и заблокированное';
    STR_BACKUP_SYNC_SETTINGS = 'Синхронизировать настройки';
    STR_BACKUP_RESTORE_USER = 'Восстановить аккаунты';
    STR_BACKUP_RESTORE_HISTORY = 'Восстановить историю и заблокированное';
    STR_BACKUP_RESTORE_SETTINGS = 'Восстановить настройки';
    STR_BACKUP_RESTORE_SUMMARY = 'Если после восстановления что-то не так, очистите данные приложения и восстановите заново, пропустив один из пунктов';

    STR_BACKUP_SYNC_SETTINGS_SUMMARY = 'Настройки в копии общие для всех устройств: изменения на одном применятся на других при следующем запуске';
    STR_BACKUP_SYNC_RESTORE = 'Найдена резервная копия';
    STR_BACKUP_SYNC_RESTORE_SUMMARY = 'Выберите, что восстановить, и нажмите ОК';
    STR_BACKUP_SYNC_RESTORE_SUCCESS = 'Восстановлено';
    STR_BACKUP_RESTORE_FAIL = 'Не удалось восстановить копию';

    STR_BACKUP_ENABLE = 'Резервная копия';
    STR_BACKUP_ENABLE_SUMMARY = 'Хранить копию данных на Google Диске (аккаунты, история, заблокированное и настройки)';

    STR_BACKUP_SYNC_ENABLE = 'Синхронизация';
    STR_BACKUP_SYNC_ENABLE_SUMMARY = 'Автоматически переносить данные между вашими устройствами';
}
