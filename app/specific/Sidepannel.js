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
var Sidepannel_PosFeed = 0;
var Sidepannel_Sidepannel_Pos = 2;
var Sidepannel_Callback;
var Sidepannel_IsMain = true;

var Sidepannel_OffsetMovelTransform = 1;
var Sidepannel_FixdefaultMargin = 5;
//See en_USLang() for this values
var Sidepannel_MoveldefaultMargin;

var Sidepannel_FixDiv;
var Sidepannel_MovelDiv;
var Sidepannel_ScroolDoc;
var Sidepannel_Html;

var Sidepannel_Opt_holder;
var Sidepannel_scenefeed;
var Sidepannel_SidepannelDoc;
var Sidepannel_SidepannelInnerDoc;
var Sidepannel_SidepannelRow_0;
var Sidepannel_SidepannelLoadingDialog;
var Sidepannel_UpdateThumbDoc;
var Sidepannel_ThumbDoc;
var Sidepannel_LastRefreshDiv;
var Sidepannel_PosCounter;

var Sidepannel_ChangeFocusAnimationFinished = true;
var Sidepannel_ChangeFocusAnimationFast = false;
var Sidepannel_Positions = {};

var Sidepannel_AnimationTimeout = 200; //Same value as side_panel_holder_ani

function Sidepannel_AddFocusMain() {
    Main_AddClass('side_panel_movel_new_' + Sidepannel_Sidepannel_Pos, 'side_panel_row_focus');
}

function Sidepannel_RemoveFocusMain() {
    Main_RemoveClass('side_panel_movel_new_' + Sidepannel_Sidepannel_Pos, 'side_panel_row_focus');
}

//Side menu icons, 24px grid with a 2px stroke, drawn in currentColor
var Sidepannel_IconPaths = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path>',
    home: '<path d="M3 10.5L12 3l9 7.5"></path><path d="M5 9.5V21h14V9.5"></path>',
    live:
        '<circle cx="12" cy="12" r="2"></circle>' +
        '<path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2"></path>',
    featured: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"></path>',
    games:
        '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect>' +
        '<rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect>',
    videos: '<rect x="2" y="5" width="14" height="14" rx="2.5"></rect><path d="M16 10l6-3.5v11L16 14"></path>',
    clips: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"></path>',
    follows: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>',
    channels: '<circle cx="9" cy="8" r="4"></circle><path d="M2 21a7 7 0 0 1 14 0M16 3.1a4 4 0 0 1 0 7.8M22 21a7 7 0 0 0-5-6.7"></path>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    history: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    blocked: '<circle cx="12" cy="12" r="9"></circle><path d="M5.6 5.6l12.8 12.8"></path>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"></path>',
    play: '<path d="M7 4.5v15l12-7.5z"></path>',
    settings: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4"></path>',
    exit: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5M21 12H9"></path>'
};

function Sidepannel_Icon(name) {
    return (
        '<svg class="side_panel_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        Sidepannel_IconPaths[name] +
        '</svg>'
    );
}

//Fills one menu entry: the row of the open menu and its tile on the collapsed rail
function Sidepannel_SetRow(pos, label, icon) {
    var svg = Sidepannel_Icon(icon);

    Main_innerHTML('side_panel_new_' + pos, svg);
    Main_innerHTML('side_panel_movel_new_' + pos, '<span class="side_panel_row_icon">' + svg + '</span><span class="side_panel_row_label">' + label + '</span>');
}

//Top to bottom order the remote walks, rows that are hidden in the current mode are skipped
//15 home (only with a user), 10 settings, 13 exit, 0 account card
//see Sidepannel_KeyEnter for what each row opens, rows hidden for the current user are skipped
var Sidepannel_MainOrder = [1, 15, 3, 4, 5, 6, 7, 8, 9, 10, 13, 0];
var Sidepannel_HomePos = 15;
var Sidepannel_UserOrder = [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 0];

function Sidepannel_MainMove(step) {
    //Follow what is drawn, not Main_values.Sidepannel_IsUser, some screens change that flag on their own
    var order = Main_A_includes_B(Sidepannel_MovelDiv.className, 'side_panel_user') ? Sidepannel_UserOrder : Sidepannel_MainOrder,
        next = order.indexOf(Sidepannel_Sidepannel_Pos) + step;

    while (next >= 0 && next < order.length && Main_A_includes_B(Main_getElementById('side_panel_movel_new_' + order[next]).className, 'hide')) {
        next += step;
    }

    if (next < 0 || next >= order.length) return;

    Sidepannel_RemoveFocusMain();
    Sidepannel_Sidepannel_Pos = order[next];
    Sidepannel_AddFocusMain();
}

//The follows menu puts its back row and section label on top, both columns follow the same class
function Sidepannel_SetUserMode(isUser) {
    if (isUser) {
        Main_AddClassWithEle(Sidepannel_MovelDiv, 'side_panel_user');
        Main_AddClassWithEle(Sidepannel_FixDiv, 'side_panel_user');
    } else {
        Main_RemoveClassWithEle(Sidepannel_MovelDiv, 'side_panel_user');
        Main_RemoveClassWithEle(Sidepannel_FixDiv, 'side_panel_user');
    }
}

function Sidepannel_ShowRow(pos, show) {
    if (show) {
        Main_ShowElement('side_panel_movel_new_' + pos);
        Main_ShowElement('side_panel_new_' + pos);
    } else {
        Main_HideElement('side_panel_movel_new_' + pos);
        Main_HideElement('side_panel_new_' + pos);
    }
}

function Sidepannel_AddFocusLiveFeed(skipAnimation) {
    var size = Sidepannel_GetSize();

    if (size) {
        Main_AddClass(UserLiveFeed_side_ids[0] + Sidepannel_PosFeed, 'side_panel_div_focused');
        Sidepannel_Scroll(skipAnimation);
        Sidepannel_UpdateThumb();
        Main_values.UserSidePannel_LastPositionId = UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][Sidepannel_PosFeed][14];

        var pos = Sidepannel_PosFeed + 1;

        if (pos < 10) pos = STR_SPACE_HTML + STR_SPACE_HTML + STR_SPACE_HTML + STR_SPACE_HTML + pos;
        else if (pos < 100) pos = STR_SPACE_HTML + STR_SPACE_HTML + pos;

        Main_innerHTMLWithEle(Sidepannel_PosCounter, pos + '/' + size);
    } else {
        if (!UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) {
            Main_getElementById('side_panel_warn').style.display = 'inline-block';
        }

        Main_AddClassWithEle(Sidepannel_ThumbDoc, 'opacity_zero');

        if (Sidepannel_isShowingUserLive()) {
            Sidepannel_CheckIfIsLiveSTop();
        }

        Main_textContentWithEle(Sidepannel_PosCounter, '');
    }

    Main_SaveValuesWithTimeout();
}

function Sidepannel_RemoveFocusFeed(PreventCleanQualities) {
    Sidepannel_CheckIfIsLiveSTop(PreventCleanQualities);

    if (Sidepannel_ObjNotNull() && !UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) {
        Main_RemoveClass(UserLiveFeed_side_ids[0] + Sidepannel_PosFeed, 'side_panel_div_focused');
    }
}

function Sidepannel_FindClosest() {
    if (UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][Main_values.UserSidePannel_LastPosition]) {
        Sidepannel_PosFeed = Main_values.UserSidePannel_LastPosition;
    } else if (Sidepannel_GetSize()) {
        var i = Main_values.UserSidePannel_LastPosition;

        for (i; i >= 0; i--) {
            if (UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][i]) {
                Sidepannel_PosFeed = i;
                break;
            }
        }
    }
}

function Sidepannel_isShowingUserLive() {
    return Sidepannel_isShowingUserLiveSide() && Main_isScene1DocVisible();
}

function Sidepannel_isShowingUserLiveSide() {
    return !Main_A_includes_B(Sidepannel_SidepannelDoc.className, 'side_panel_hide');
}

function Sidepannel_GetObj() {
    return Sidepannel_GetObjPos(Sidepannel_PosFeed);
}

function Sidepannel_GetObjPos(pos) {
    return Main_Slice(UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][pos]);
}

function Sidepannel_ObjNotNull() {
    return Sidepannel_ObjNotNullPos(Sidepannel_PosFeed);
}

function Sidepannel_ObjNotNullPos(Pos) {
    return Boolean(UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][Pos] && !UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][0].image);
}

var Sidepannel_UpdateThumbDivName;
var Sidepannel_UpdateThumbDivQuality;
var Sidepannel_UpdateThumbDivTitle;
var Sidepannel_UpdateThumbDivGame;
var Sidepannel_UpdateThumbDivViews;
var Sidepannel_UpdateThumbDivSince;
var Sidepannel_UpdateThumbDivThumb;

function Sidepannel_UpdateThumbDiv() {
    if (Sidepannel_ObjNotNull()) {
        var info = Sidepannel_GetObj();

        Sidepannel_UpdateThumbDoc.onerror = function () {
            this.onerror = null;
            this.src = IMG_404_VIDEO;
        };
        Sidepannel_UpdateThumbDoc.src = info[0].replace('{width}x{height}', Main_SidePannelSize) + Main_randomImg;

        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivName, Sidepannel_partnerIcon(Main_ReplaceLargeFont(info[1]), info[10], info[8]));
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivQuality, info[5]);
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivTitle, Main_ReplaceLargeFont(twemoji.parse(info[2])));
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivGame, info[3] !== '' ? STR_PLAYING + info[3] : '');
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivViews, STR_FOR + info[4] + STR_SPACE_HTML + Main_GetViewerStrings(info[13]));
        Play_LoadLogo(Sidepannel_UpdateThumbDivThumb, info[9]);
        Sidepannel_UpdateSince();
        Sidepannel_updateThumbInfo(info);
    }
}

var Sidepannel_UpdateSinceId;
function Sidepannel_UpdateSince() {
    if (!Sidepannel_isShowingUserLive() || Main_isStopped) return;

    if (Sidepannel_ObjNotNull() && !UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) {
        var info = Sidepannel_GetObj();

        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivSince, STR_SINCE + Play_streamLiveAtWitDate(new Date().getTime(), info[12]));
    }

    Sidepannel_UpdateSinceId = Main_setTimeout(Sidepannel_UpdateSince, 1000, Sidepannel_UpdateSinceId);
}

function Sidepannel_updateThumbInfo(obj) {
    ScreensObj_getStreamInfo(obj[14], Sidepannel_PosFeed, null, null, null, null, null, Sidepannel_ThumbInfoUpdate, noop_fun);
}

function Sidepannel_ThumbInfoUpdate(obj, checkResult) {
    if (!obj.data.length) {
        return;
    }

    var tempData = ScreensObj_LiveCellArray(obj.data[0]);

    var pos = parseInt(checkResult);

    if (!Sidepannel_ObjNotNullPos(pos)) {
        return;
    }

    var data = Sidepannel_GetObjPos(pos);

    if (data[3] !== tempData[3]) {
        Main_innerHTML(UserLiveFeed_side_ids[8] + pos, tempData[3] !== '' ? tempData[3] : '');
    }

    if (data[13] !== tempData[13]) {
        Main_innerHTML(UserLiveFeed_side_ids[12] + pos, tempData[4]);
    }

    if (pos !== Sidepannel_PosFeed) {
        return;
    }

    if (data[13] !== tempData[13]) {
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivViews, STR_FOR + tempData[4] + STR_SPACE_HTML + Main_GetViewerStrings(tempData[13]));
    }
    if (data[2] !== tempData[2]) {
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivTitle, Main_ReplaceLargeFont(twemoji.parse(tempData[2])));
    }
    if (data[3] !== tempData[3]) {
        Main_innerHTMLWithEle(Sidepannel_UpdateThumbDivGame, tempData[3] !== '' ? STR_PLAYING + tempData[3] : '');
    }
}

function Sidepannel_UpdateThumb() {
    Sidepannel_UpdateThumbDiv();

    if (Sidepannel_isShowingUserLive()) {
        Main_RemoveClassWithEle(Sidepannel_ThumbDoc, 'opacity_zero');

        if (!Main_isStopped && Settings_Obj_default('show_side_player')) {
            if (Sidepannel_ObjNotNull()) {
                var ChannelId = UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][Sidepannel_PosFeed][14];

                if ((!Play_PreviewId || !Main_A_equals_B(ChannelId, Play_PreviewId)) && !Play_PreviewVideoEnded) {
                    Sidepannel_CheckIfIsLiveStart();
                } else if (Play_PreviewId && Main_IsOn_OSInterface) {
                    Sidepannel_UpdateThumbDoc.src = IMG_404_BANNER;
                }

                Play_PreviewVideoEnded = false;
            }
        }
    }
}

function Sidepannel_CheckIfIsLiveSTop(PreventCleanQualities) {
    Main_clearTimeout(Sidepannel_CheckIfIsLiveStartId);
    Main_clearTimeout(Sidepannel_UpdateSinceId);

    if (Main_IsOn_OSInterface && !PreventCleanQualities) {
        OSInterface_ClearSidePanelPlayer();
        Play_CheckIfIsLiveCleanEnd();
    }
    Sidepannel_HideWarningDialog();
}

var Sidepannel_CheckIfIsLiveStartId;
function Sidepannel_CheckIfIsLiveStart() {
    Sidepannel_CheckIfIsLiveStartId = Main_setTimeout(
        function () {
            Sidepannel_CheckIfIsLive();
        },
        DefaultPreviewDelay + Settings_PreviewDelay[Settings_Obj_default('show_feed_player_delay')],
        Sidepannel_CheckIfIsLiveStartId
    );
}

function Sidepannel_CheckIfIsLive() {
    Play_CheckIfIsLiveCleanEnd();

    if (!Main_IsOn_OSInterface) {
        return;
    }

    if (!Main_isStopped && Sidepannel_ObjNotNull() && Sidepannel_isShowingUserLive()) {
        var channel = UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][Sidepannel_PosFeed][6];

        PlayHLS_GetPlayListAsync(true, channel, Sidepannel_PosFeed % 100, 0, Sidepannel_CheckIfIsLiveResult);
    }
}

var Sidepannel_PlayerViewSidePanelSet;
function Sidepannel_CheckIfIsLiveResult(StreamData, x, y) {
    //Called by Java

    if (
        !Main_isStopped &&
        Sidepannel_isShowingUserLive() &&
        x === 0 &&
        y === Sidepannel_PosFeed % 100 &&
        !Main_isUpdateDialogVisible() &&
        !Main_isChangeDialogVisible()
    ) {
        if (StreamData && Sidepannel_ObjNotNull()) {
            StreamData = JSON.parse(StreamData);

            var StreamInfo = Sidepannel_GetObj();

            if (StreamData.status === 200) {
                Play_PreviewURL = StreamData.url;
                Play_PreviewResponseText = StreamData.responseText;
                Play_PreviewId = StreamInfo[14];

                if (!Sidepannel_PlayerViewSidePanelSet) {
                    Sidepannel_SetPlayerViewSidePanel();
                }

                OSInterface_StartSidePanelPlayer(Play_PreviewURL, Play_PreviewResponseText);

                Sidepannel_UpdateThumbDoc.src = IMG_404_BANNER;

                Main_EventPreview('Preview_sidepanel', StreamInfo[6], StreamInfo[3], StreamInfo[15], 'sidepanel');
            } else {
                Sidepannel_CheckIfIsLiveWarn(
                    StreamInfo[1] +
                        STR_SPACE_HTML +
                        STR_LIVE +
                        STR_BR +
                        (StreamData.status === 1 || StreamData.status === 403 ? STR_FORBIDDEN : STR_IS_OFFLINE),
                    0
                );
            }
        }
    }
}

function Sidepannel_SetPlayerViewSidePanel() {
    var Rect = Sidepannel_UpdateThumbDoc.parentElement.getBoundingClientRect();
    OSInterface_SetPlayerViewSidePanel(Rect.bottom, Rect.right, Rect.left, window.innerHeight);
    Sidepannel_PlayerViewSidePanelSet = true;
}

function Sidepannel_CheckIfIsLiveWarn(ErroText, time) {
    OSInterface_ClearSidePanelPlayer();
    Play_CheckIfIsLiveCleanEnd();
    Sidepannel_UpdateThumbDiv();
    Sidepannel_showWarningDialog(ErroText, time);
}

var Sidepannel_showWarningDialogId;
function Sidepannel_showWarningDialog(text, timeout) {
    Main_ToastShow(Main_getElementById('sidepannel_dialog_warning'), Main_getElementById('sidepannel_dialog_warning_text'), text);

    if (timeout) {
        Sidepannel_showWarningDialogId = Main_setTimeout(Sidepannel_HideWarningDialog, timeout, Sidepannel_showWarningDialogId);
    }
}

function Sidepannel_HideWarningDialog() {
    Main_clearTimeout(Main_setHistoryItemId);
    Main_ToastHide(Main_getElementById('sidepannel_dialog_warning'));
}

function Sidepannel_partnerIcon(name, partner, isrerun) {
    return (
        '<div id="feed_thumb_partnericon" class="partnericon_div"> ' +
        name +
        STR_SPACE_HTML +
        STR_SPACE_HTML +
        '</div>' +
        (partner
            ? '<img id="feed_thumb_partnerimg" class="partnericon_img" alt="" src="' + IMG_PARTNER + '">' + STR_SPACE_HTML + STR_SPACE_HTML
            : '') +
        '<div id="feed_thumb_partnertext" class="partnericon_text" style="background: #' +
        (isrerun ? 'FFFFFF; color: #000000;' : 'E21212;') +
        '">' +
        STR_SPACE_HTML +
        STR_SPACE_HTML +
        (isrerun ? STR_RERUN : STR_LIVE) +
        STR_SPACE_HTML +
        STR_SPACE_HTML +
        '</div>'
    );
}

function Sidepannel_PreloadImgs() {
    if (!Sidepannel_isShowingUserLive()) return;

    if (UserLiveFeed_PreloadImgs[Sidepannel_PosFeed]) {
        Main_ImageLoaderWorker.postMessage(
            UserLiveFeed_PreloadImgs[Sidepannel_PosFeed].replace('{width}x{height}', Main_SidePannelSize) + Main_randomImg
        );
    }
    UserLiveFeed_PreloadImgs.splice(Sidepannel_PosFeed, 1);

    var i = 0,
        len = UserLiveFeed_PreloadImgs.length;
    for (i; i < len; i++) {
        Main_ImageLoaderWorker.postMessage(UserLiveFeed_PreloadImgs[i].replace('{width}x{height}', Main_SidePannelSize) + Main_randomImg);
    }
}

function Sidepannel_GetSize() {
    return Sidepannel_ScroolDoc.getElementsByClassName('side_panel_feed').length;
}

//The follows pages of the menu, called by Sidepannel_KeyEnter for rows 5 to 9 (the panel is already hidden)
function Sidepannel_KeyEnterUser() {
    if (Sidepannel_Sidepannel_Pos === 5) Sidepannel_Go(Main_usergames);
    else if (Sidepannel_Sidepannel_Pos === 6) Sidepannel_Go(Main_UserChannels);
    else if (Sidepannel_Sidepannel_Pos === 7) {
        Main_values.Main_selectedChannel_id = AddUser_UsernameArray[0].id;
        Main_values.Main_selectedChannelDisplayname = AddUser_UsernameArray[0].display_name
            ? AddUser_UsernameArray[0].display_name
            : AddUser_UsernameArray[0].name;
        Main_values.Main_selectedChannel = AddUser_UsernameArray[0].name;

        Main_values.Main_BeforeChannel = Main_values.Main_Go;
        Main_values.Main_Go = Main_ChannelContent;
        Main_values.Main_BeforeChannelisSet = true;
        AddCode_IsFollowing = false;
        ChannelContent_UserChannels = false;
        Main_ExitCurrent(Main_values.Main_BeforeChannel);
        Main_values.My_channel = true;
        Main_SwitchScreen();
    } else if (Sidepannel_Sidepannel_Pos === 8) {
        Sidepannel_Go(Main_History[Main_values.HistoryPos]);
    } else if (Sidepannel_Sidepannel_Pos === 9) {
        Sidepannel_Go(Main_Blocked);
    }
}

function Sidepannel_KeyEnterBase() {
    if (!Sidepannel_Sidepannel_Pos) {
        Main_values.Main_Before = Main_values.Main_Go;
        Main_ExitCurrent(Main_values.Main_Go);
        if (AddUser_UserIsSet()) Users_init();
        else AddUser_init();
    } else if (Sidepannel_Sidepannel_Pos === 1) {
        if (Main_values.Main_Go !== Main_Search) {
            if (
                !Main_values.Search_isSearching &&
                (Main_values.Main_Go === Main_ChannelContent || Main_values.Main_Go === Main_ChannelClip || Main_values.Main_Go === Main_ChannelVod)
            ) {
                ChannelContent_SetChannelValue();
            }

            Main_OpenSearch();
        } else {
            Main_addEventListener('keydown', Sidepannel_Callback);
        }
    } else if (Sidepannel_Sidepannel_Pos === 10) {
        Main_showSettings();
    } else if (Sidepannel_Sidepannel_Pos === 13) {
        Main_showExitDialog();
    }
}

//One menu for everything: the follows pages (categories, channels, my channel, history, blocked) live in it
//with a user, Live, Videos, Clips and the follows submenu are gone. Rows: 1 search, 15 home, 3 featured (no user),
//4 games, 5 followed categories, 6 followed channels, 7 my channel, 8 history, 9 blocked, 10 settings, 13 exit, 0 account
function Sidepannel_KeyEnter() {
    var pos = Sidepannel_Sidepannel_Pos;

    if (pos >= 5 && pos <= 6 && !AddUser_UserHasToken()) {
        Main_addEventListener('keydown', Sidepannel_Callback);
        Sidepannel_ShowNoUserWarning();
        return;
    }

    if (pos !== 13) Sidepannel_Hide();

    if (pos === Sidepannel_HomePos) Sidepannel_GoHome();
    else if (pos === 3) Sidepannel_Go(Main_Featured);
    else if (pos === 4) Sidepannel_Go(Main_games);
    else if (pos >= 5 && pos <= 9) Sidepannel_KeyEnterUser();
    else Sidepannel_KeyEnterBase();
}

//Home is the followed live screen shown from the main menu: main menu labels, "Home" title
function Sidepannel_GoHome() {
    if (!AddUser_UserHasToken()) {
        Main_addEventListener('keydown', Sidepannel_Callback);
        Sidepannel_ShowNoUserWarning();
        return;
    }

    Main_values.Main_Home = true;
    Sidepannel_Go(Main_UserLive);
}

function Sidepannel_Go(GoTo) {
    if (GoTo === Main_values.Main_Go) {
        Main_addEventListener('keydown', Sidepannel_Callback);
        Main_SwitchScreen();
    } else {
        Main_values.Search_isSearching = false;
        Main_values.Main_Before = Main_values.Main_Go;
        Main_values.Main_Go = GoTo;
        Main_ExitCurrent(Main_values.Main_Before);
        Main_SwitchScreen();
    }
}

function Sidepannel_Start(callback, forceFeed) {
    Sidepannel_Callback = callback;
    Main_removeEventListener('keydown', Sidepannel_Callback);
    if (!Sidepannel_IsMain || forceFeed) {
        if (AddUser_UserHasToken()) {
            Sidepannel_StartFeed();
        } else {
            Sidepannel_ShowNoUserWarning();
            Sidepannel_StartMain();
        }
    } else Sidepannel_StartMain();
}

function Sidepannel_StartFeed() {
    Main_HideLoadDialog();
    Sidepannel_IsMain = false;
    Main_addEventListener('keydown', Sidepannel_handleKeyDown);

    Main_RemoveClassWithEle(Sidepannel_SidepannelDoc, 'side_panel_hide');
    Main_RemoveClassWithEle(Sidepannel_SidepannelDoc, 'side_panel_hide_full');
    Main_RemoveClassWithEle(Sidepannel_SidepannelInnerDoc, 'side_panel_inner_hide');
    Main_RemoveClassWithEle(Sidepannel_SidepannelRow_0, 'opacity_zero');
    Main_RemoveClassWithEle(Sidepannel_SidepannelLoadingDialog, 'side_panel_dialog_hide');

    Sidepannel_ShowFeed();
    Sidepannel_HideMain(true);
}

function Sidepannel_ShowFeed() {
    var ForceRefresh = false;

    Sidepannel_Showscenefeed();

    if (
        UserLiveFeedobj_LiveFeedOldUserName !== AddUser_UsernameArray[0].name ||
        !UserLiveFeed_ObjNotNull(UserLiveFeedobj_UserLivePos) ||
        UserLiveFeed_DataObj[UserLiveFeedobj_UserLivePos][0].image ||
        new Date().getTime() > UserLiveFeed_lastRefresh[UserLiveFeedobj_UserLivePos] + Settings_GetAutoRefreshTimeout() ||
        !Main_A_equals_B(UserLiveFeed_obj[UserLiveFeedobj_UserLivePos].sorting, Settings_value.live_feed_sort.defaultValue) ||
        UserLiveFeed_obj[UserLiveFeedobj_UserLivePos].enable_mature !== Settings_value.enable_mature.defaultValue ||
        !Main_A_equals_B(UserLiveFeed_obj[UserLiveFeedobj_UserLivePos].Lang, Settings_AppLang)
    ) {
        ForceRefresh = true;
    }

    UserLiveFeedobj_LiveFeedOldUserName = AddUser_UsernameArray[0].name;

    if ((ForceRefresh || !UserLiveFeed_status[UserLiveFeedobj_UserLivePos]) && !UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) {
        UserLiveFeed_RefreshLive();
    } else if (Sidepannel_ObjNotNull()) {
        Sidepannel_PreloadImgs();
        Sidepannel_AddFocusLiveFeed(true);
        Sidepannel_SetLastRefresh();
    }

    Main_EventScreen('Side_panel_user_live');
}

function Sidepannel_Showscenefeed() {
    Main_AddClassWithEle(Sidepannel_scenefeed, Screens_SettingDoAnimations ? 'scenefeed_background' : 'scenefeed_background_no_ani');
    Main_RemoveClassWithEle(Sidepannel_scenefeed, 'feed_screen_input');
}

function Sidepannel_Hidecenefeed() {
    Main_RemoveClassWithEle(Sidepannel_scenefeed, Screens_SettingDoAnimations ? 'scenefeed_background' : 'scenefeed_background_no_ani');
    Main_AddClassWithEle(Sidepannel_scenefeed, 'feed_screen_input');
}

function Sidepannel_SetLastRefresh() {
    if (!UserLiveFeed_lastRefresh[UserLiveFeedobj_UserLivePos]) return;

    Sidepannel_SetLastRefreshUpDiv(new Date().getTime() - UserLiveFeed_lastRefresh[UserLiveFeedobj_UserLivePos]);
}

function Sidepannel_SetLastRefreshUpDiv(date) {
    Main_innerHTMLWithEle(Sidepannel_LastRefreshDiv, STR_REFRESH + STR_SPACE_HTML + '(' + STR_LAST_REFRESH + Play_timeDay(date) + ')');
}

function Sidepannel_StartMain() {
    Sidepannel_Hidecenefeed();
    Sidepannel_IsMain = true;
    Sidepannel_MovelDiv.style.transform = 'translateX(' + Sidepannel_FixdefaultMargin + '%)';
    Sidepannel_FixDiv.style.marginLeft = '';
    Main_AddClassWithEle(Sidepannel_FixDiv, 'side_panel_fix_open');
    Main_addEventListener('keydown', Sidepannel_handleKeyDownMain);
    Sidepannel_AddFocusMain();
    Main_EventScreen('Side_panel_main');
}

function Sidepannel_isShowingMenus() {
    return Main_A_equals_B(Sidepannel_MovelDiv.style.transform, 'translateX(' + Sidepannel_FixdefaultMargin + '%)');
}

function Sidepannel_HideMain(hideAll) {
    Main_RemoveClassWithEle(Sidepannel_FixDiv, 'side_panel_fix_open');
    if (hideAll) Sidepannel_FixDiv.style.marginLeft = '-' + Sidepannel_FixdefaultMargin + '%';

    var pos = hideAll ? Sidepannel_MovelDiv.offsetWidth : Sidepannel_MovelDiv.offsetWidth - Sidepannel_FixDiv.offsetWidth;

    Sidepannel_MovelDiv.style.transform = 'translateX(-' + (pos / BodyfontSize + Sidepannel_OffsetMovelTransform) + 'em)';
}

function Sidepannel_Hide(PreventCleanQualities) {
    if (!PreventCleanQualities) {
        Sidepannel_HideMain();
        Sidepannel_RemoveFocusMain();
        Sidepannel_FixDiv.style.marginLeft = '';
        Main_AddClassWithEle(Sidepannel_ThumbDoc, 'opacity_zero');
        Sidepannel_Hidecenefeed();
    }
    Sidepannel_HideEle(PreventCleanQualities);

    Main_removeEventListener('keydown', Sidepannel_handleKeyDown);
    Main_removeEventListener('keydown', Sidepannel_handleKeyDownMain);
}

function Sidepannel_HideEle(PreventCleanQualities, full) {
    Sidepannel_RemoveFocusFeed(PreventCleanQualities);

    if (!PreventCleanQualities) {
        Main_AddClassWithEle(Sidepannel_SidepannelDoc, full ? 'side_panel_hide_full' : 'side_panel_hide');
        Main_AddClassWithEle(Sidepannel_SidepannelInnerDoc, 'side_panel_inner_hide');
        Main_AddClassWithEle(Sidepannel_SidepannelRow_0, 'opacity_zero');
        Main_AddClassWithEle(Sidepannel_SidepannelLoadingDialog, 'side_panel_dialog_hide');
    }
}

function Sidepannel_SetTopOpacity(Main_Go) {
    if (Main_Go === Main_UserLive && Main_values.Main_Home) {
        Sidepannel_Sidepannel_Pos = Sidepannel_HomePos;
    } else if (Sidepannel_Pos_Screens[Main_Go]) {
        Sidepannel_Sidepannel_Pos = Sidepannel_Pos_Screens[Main_Go];
    }

    Sidepannel_UnSetTopOpacity();

    if (Sidepannel_Sidepannel_Pos && (Sidepannel_Sidepannel_Pos < 10 || Sidepannel_Sidepannel_Pos === Sidepannel_HomePos)) {
        Main_AddClass('side_panel_new_' + Sidepannel_Sidepannel_Pos, 'side_panel_new_icons_start');
        Main_AddClass('side_panel_movel_new_' + Sidepannel_Sidepannel_Pos, 'side_panel_row_current');
    }
}

//menu row of each screen, 0 for the screens without one (Live, Videos, Clips, followed videos were removed)
var Sidepannel_Pos_Screens = [
    1, //Main_Search 0
    0, //Main_Live 1
    0, //Main_Users 2
    3, //Main_Featured 3
    4, //Main_games 4
    0, //Main_Vod 5
    0, //Main_Clip 6
    15, //Main_UserLive 7
    5, //Main_usergames 8
    0, //Main_UserVod 9
    6, //Main_UserChannels 10
    1, // Main_SearchGames 11
    1, // Main_SearchLive 12
    1, // Main_SearchChannels 13
    0, // Main_ChannelContent 14
    0, // Main_ChannelVod 15
    0, // Main_ChannelClip 16
    0, // Main_addUser 17
    0, //Main_aGame 18
    0, //Main_AGameVod 19
    0, //Main_AGameClip 20
    8, //Main_AGameClip 21
    8, //Main_AGameClip 22
    8, //Main_AGameClip 23
    0, //Main_Password 24
    9, //Main_AGameClip 25
    1 // Main_SearchVod 26
];

function Sidepannel_UnSetTopOpacity() {
    for (var i = 1; i < 10; i++) {
        Main_RemoveClass('side_panel_new_' + i, 'side_panel_new_icons_start');
        Main_RemoveClass('side_panel_movel_new_' + i, 'side_panel_row_current');
    }

    Main_RemoveClass('side_panel_new_' + Sidepannel_HomePos, 'side_panel_new_icons_start');
    Main_RemoveClass('side_panel_movel_new_' + Sidepannel_HomePos, 'side_panel_row_current');
}

//There is no follows submenu any more, the screens that used to open it get the one menu
function Sidepannel_SetUserLabels() {
    Sidepannel_SetDefaultLabels();
}

function Sidepannel_SetDefaultLabels() {
    Main_values.Sidepannel_IsUser = false;

    //also shows or hides the rows that need a user, Sidepannel_ShowUserRows
    if (AddUser_UsernameArray[0]) Sidepannel_SetUserLabel(AddUser_UsernameArray[0].display_name);
    else Sidepannel_SetUserLabel(STR_USER_ADD);

    Sidepannel_SetUserMode(false);

    Sidepannel_ShowRow(1, true);
    Sidepannel_ShowRow(2, false);
    Sidepannel_ShowRow(4, true);

    Sidepannel_SetRow(1, STR_SEARCH, 'search');
    Sidepannel_SetRow(Sidepannel_HomePos, STR_HOME, 'home');
    Sidepannel_SetRow(3, STR_FEATURED, 'featured');
    Sidepannel_SetRow(4, STR_GAMES, 'games');
    Sidepannel_SetRow(5, STR_FOLLOWED_GAMES, 'follows');
    Sidepannel_SetRow(6, STR_CHANNELS, 'channels');
    Sidepannel_SetRow(7, STR_USER_MY_CHANNEL, 'user');
    Sidepannel_SetRow(8, STR_HISTORY, 'history');
    Sidepannel_SetRow(9, STR_BLOCKED, 'blocked');

    Sidepannel_SetRow(10, STR_SETTINGS, 'settings');
    Sidepannel_SetRow(13, STR_EXIT, 'exit');
}

//Without a user the menu has no follows part, its divider goes too (.side_panel_no_user in index.html)
function Sidepannel_SetHasUser(user) {
    if (!Sidepannel_MovelDiv) return;

    if (user) {
        Main_RemoveClassWithEle(Sidepannel_MovelDiv, 'side_panel_no_user');
        Main_RemoveClassWithEle(Sidepannel_FixDiv, 'side_panel_no_user');
    } else {
        Main_AddClassWithEle(Sidepannel_MovelDiv, 'side_panel_no_user');
        Main_AddClassWithEle(Sidepannel_FixDiv, 'side_panel_no_user');
    }
}

//Account card, the avatar img is put in icon_side_panel_imgholder_0 by AddUser_UpdateSidePanelSize
function Sidepannel_SetUserLabel(text) {
    Main_innerHTML(
        'side_panel_movel_new_0',
        '<span class="side_panel_row_avatar">' +
            Main_getElementById('icon_side_panel_imgholder_0').innerHTML.replace(/ id="[^"]*"/g, '') +
            '</span><span class="side_panel_row_label"><span class="side_panel_row_name">' +
            text +
            '</span><span class="side_panel_row_sub">' +
            STR_USER_EXTRAS +
            '</span></span>'
    );

    //Called on every user change, so Home and the follows pages appear and go with the account, Featured the other way around
    Sidepannel_ShowUserRows(AddUser_UserIsSet());
}

function Sidepannel_ShowUserRows(user) {
    Sidepannel_ShowRow(Sidepannel_HomePos, user);
    Sidepannel_ShowRow(3, !user);

    for (var i = 5; i < 10; i++) Sidepannel_ShowRow(i, user);

    Sidepannel_SetHasUser(user);
}

var Sidepannel_Scroll_Offset = 0;

function Sidepannel_Scroll(skipAnimation) {
    var value = '0', //default
        center = 6;

    if (Sidepannel_PosFeed > center) {
        //Start scrolling in the middle
        if (Sidepannel_PosFeed < Sidepannel_GetSize() - center) {
            value = Main_getElementById(UserLiveFeed_side_ids[3] + (Sidepannel_PosFeed - center)).offsetTop;
        } else if (Sidepannel_GetSize() - center - center > 0) {
            //if we are in the 7 left

            value = Main_getElementById(UserLiveFeed_side_ids[3] + (Sidepannel_GetSize() - center * 2 - Sidepannel_Scroll_Offset)).offsetTop;
        }
    }

    if (!skipAnimation && Sidepannel_ChangeFocusAnimationFinished && Screens_SettingDoAnimations && !Sidepannel_ChangeFocusAnimationFast) {
        Sidepannel_ChangeFocusAnimationFinished = false;
        Sidepannel_ChangeFocusAnimationFast = true;

        Sidepannel_ScroolDoc.style.transition = '';

        Main_setTimeout(
            function () {
                Sidepannel_ChangeFocusAnimationFinished = true;
            },
            Sidepannel_AnimationTimeout //Same value as side_panel_holder_ani
        );
    } else {
        if (skipAnimation) Sidepannel_ChangeFocusAnimationFast = false;
        Sidepannel_ScroolDoc.style.transition = 'none';
    }

    Sidepannel_ScroolDoc.style.transform = 'translateY(-' + value / BodyfontSize + 'em)';
}

function Sidepannel_userLiveKeyRight() {
    Sidepannel_HideEle(false, true);
    Sidepannel_Hidecenefeed();
    Main_AddClassWithEle(Sidepannel_ThumbDoc, 'opacity_zero');
    Main_removeEventListener('keydown', Sidepannel_handleKeyDown);
    Sidepannel_StartMain();
}

function Sidepannel_userLiveKeyEnter() {
    if (!UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos] && Sidepannel_ObjNotNull()) {
        Sidepannel_Hide(true);
        Main_values.Play_isHost = false;

        Main_OpenLiveStream(Sidepannel_GetObj(), Sidepannel_PosFeed, UserLiveFeed_side_ids, Sidepannel_handleKeyDown, false, 'Side_Panel');
    }
}

//followed controls
function Sidepannel_handleKeyDown(event) {
    switch (event.keyCode) {
        case KEY_KEYBOARD_BACKSPACE:
        case KEY_RETURN:
        case KEY_3:
            Sidepannel_Hide();
            Main_SwitchScreen();
            break;
        case KEY_RIGHT:
            Sidepannel_userLiveKeyRight();
            break;
        case KEY_2:
        case KEY_LEFT:
            if (!UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) UserLiveFeed_RefreshLive();
            break;
        case KEY_PG_UP:
        case KEY_UP:
            if (Sidepannel_ChangeFocusAnimationFinished && Sidepannel_PosFeed && !UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]) {
                Sidepannel_RemoveFocusFeed();
                Sidepannel_PosFeed--;
                Sidepannel_AddFocusLiveFeed();
            }
            break;
        case KEY_PG_DOWN:
        case KEY_DOWN:
            if (
                Sidepannel_ChangeFocusAnimationFinished &&
                Sidepannel_PosFeed < Sidepannel_GetSize() - 1 &&
                !UserLiveFeed_loadingData[UserLiveFeedobj_UserLivePos]
            ) {
                Sidepannel_RemoveFocusFeed();
                Sidepannel_PosFeed++;
                Sidepannel_AddFocusLiveFeed();
            }
            break;
        case KEY_1:
        case KEY_PLAY:
        case KEY_PLAYPAUSE:
        case KEY_KEYBOARD_SPACE:
        case KEY_ENTER:
            Sidepannel_userLiveKeyEnter();
            break;
        case KEY_PAUSE: //key s
        case KEY_6:
            Main_showSettings();
            Sidepannel_Hide();
            break;
        case KEY_A:
        case KEY_7:
            Main_showAboutDialog(Sidepannel_Callback, ScreenObj[Main_values.Main_Go].key_controls);
            Sidepannel_Hide();
            break;
        case KEY_C:
        case KEY_8:
            Main_showControlsDialog(Sidepannel_Callback, ScreenObj[Main_values.Main_Go].key_controls);
            Sidepannel_Hide();
            break;
        case KEY_E:
        case KEY_9:
            Main_showExitDialog();
            Sidepannel_Hide();
            break;
        case KEY_0:
        case KEY_U:
            Main_UpdateDialogShowCheck();
            break;
        default:
            break;
    }
}

function Sidepannel_MainKeyLeft() {
    if (AddUser_UserHasToken()) {
        Main_removeEventListener('keydown', Sidepannel_handleKeyDownMain);
        Sidepannel_StartFeed();
    } else {
        Sidepannel_ShowNoUserWarning();
    }
}

function Sidepannel_ShowNoUserWarning() {
    Main_showWarningDialog(STR_NOKUSER_WARNING, 5000);
}

//menu controls
function Sidepannel_handleKeyDownMain(event) {
    switch (event.keyCode) {
        case KEY_KEYBOARD_BACKSPACE:
        case KEY_RETURN:
        case KEY_RIGHT:
            Sidepannel_Hide();
            Main_SwitchScreen();
            break;
        case KEY_3:
        case KEY_LEFT:
            Sidepannel_MainKeyLeft();
            break;
        case KEY_PG_UP:
        case KEY_UP:
            Sidepannel_MainMove(-1);
            break;
        case KEY_PG_DOWN:
        case KEY_DOWN:
            Sidepannel_MainMove(1);
            break;
        case KEY_1:
        case KEY_PLAY:
        case KEY_PLAYPAUSE:
        case KEY_KEYBOARD_SPACE:
        case KEY_ENTER:
            Sidepannel_KeyEnter();
            break;
        case KEY_PAUSE: //key s
        case KEY_6:
            Main_showSettings();
            Sidepannel_Hide();
            break;
        case KEY_A:
        case KEY_7:
            Main_showAboutDialog(Sidepannel_Callback, ScreenObj[Main_values.Main_Go].key_controls);
            Sidepannel_Hide();
            break;
        case KEY_C:
        case KEY_8:
            Main_showControlsDialog(Sidepannel_Callback, ScreenObj[Main_values.Main_Go].key_controls);
            Sidepannel_Hide();
            break;
        case KEY_E:
        case KEY_9:
            Main_showExitDialog();
            Sidepannel_Hide();
            break;
        default:
            break;
    }
}
