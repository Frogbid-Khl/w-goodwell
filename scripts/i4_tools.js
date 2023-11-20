$(function () {
    $('input').on("input", function () {
        if ($(this).attr('type') == "number" && $(this).attr('max') && $(this).attr('min')) {
            var max = parseInt($(this).attr('max'));
            var min = parseInt($(this).attr('min'));
            var dInput = parseInt(this.value);
            if (dInput > max) {
                $(this).val(max);
            }
            else if (dInput < min) {
                $(this).val(min);
            } else {
                $(this).val(parseInt(dInput));
            }
        }

        if ($(this).attr('type') == "numberFloat" && $(this).attr('max') && $(this).attr('min')) {
            var place = parseInt($(this).attr('place'));
            var max = parseFloat($(this).attr('max'));
            var min = parseFloat($(this).attr('min'));
            var dInput = parseFloat(this.value);
            if (this.value.length <= 0)
                return;
            if (dInput > max) {
                $(this).val(max);
            }
            else if (dInput < min) {
                $(this).val(min);
            } else {
                if (parseFloat(dInput) < 10) {
                    if (this.value.length > 2) {
                        $(this).val(parseFloat(dInput.toString().substring(0, 2 + place)));
                    }
                }
                else {
                    if (this.value.length > 3) {
                        $(this).val(parseFloat(dInput.toString().substring(0, 3 + place)));
                    }
                }
            }
        }

    });
    //$('input').on("change", function () {
    //    if ($(this).attr('type') == "number") {
    //        var dInput = this.value;
    //        if (dInput == "") {
    //            $(this).val(1);
    //        }
            
    //    }

    //});
})

function controlInputNumber() {
    $('input').on("input", function () {
        if ($(this).attr('type') == "numberFloat" && $(this).attr('max') && $(this).attr('min')) {
            var place = parseInt($(this).attr('place'));
            var max = parseFloat($(this).attr('max'));
            var min = parseFloat($(this).attr('min'));
            var dInput = parseFloat(this.value);
            if (this.value.length <= 0)
                return;
            if (dInput > max) {
                $(this).val(max);
            }
            else if (dInput < min) {
                $(this).val(min);
            } else {
                if (parseFloat(dInput) < 10) {
                    if (this.value.length > 2) {
                        $(this).val(parseFloat(dInput.toString().substring(0, 2 + place)));
                    }
                }
                else {
                    if (this.value.length > 3) {
                        $(this).val(parseFloat(dInput.toString().substring(0, 3 + place)));
                    }
                }
            }
        }
    });
}

function i4_alertMsgDialog(amsg) {
    if ($("#PopUpMessage").length <= 0) {
        $("body").append("<div id='PopUpMessage'></div>");
    }
    if (typeof amsg != "undefined") { $("#PopUpMessage").html('<ul class="u-error-list">' + amsg + '</ul>'); }
    $('#PopUpMessage').dialog({
        resizable: false,
        width: $(window).width() > 600 ? 600 : 'auto',
        maxHeight: $(window).height() - 50,
        modal: true,
        draggable: false,
        autoOpen: true,
        title: "系統訊息",
        open: function (event, ui) {            
            $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            $('.ui-dialog').attr("id", "PopUpMessageWindowId");
            //Goodwell 繁转简
            if (window.localStorage.getItem('t2s')) {
                $('#PopUpMessage .u-error-list font').t2s()
                $('#PopUpMessageWindowId .ui-dialog-titlebar .ui-dialog-title').t2s()
                $('#PopUpMessageWindowId .ui-dialog-buttonset button').t2s()
            }
            //Goodwell 繁转简
        },
        buttons: [
            {
                text: "關閉",
                class: 'WED_btnList_btn WED_dialog_btn',
                click: function () {
                    $(this).dialog("close");
                    //$("input:text:visible:first,select:visible:first").focus();
                    $("input:text,select").focus().filter(':enabled:visible:first')
                        .focus();

                    focusFirst();
                }
            }
        ]
    }).prev(".ui-dialog-titlebar").css("background", "#15422B");

    var div = document.getElementById("PopUpMessageWindowId");
    div.tabIndex = -1;
    div.focus();
}


function i4_alertMsgDialog_en(amsg) {
    if ($("#PopUpMessage").length <= 0) {
        $("body").append("<div id='PopUpMessage'></div>");
    }
    if (typeof amsg != "undefined") { $("#PopUpMessage").html('<ul class="u-error-list">' + amsg + '</ul>'); }
    $('#PopUpMessage').dialog({
        resizable: false,
        width: $(window).width() > 600 ? 600 : 'auto',
        maxHeight: $(window).height() - 50,
        modal: true,
        draggable: false,
        autoOpen: true,
        title: "System Message",
        open: function (event, ui) {
            $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            $('.ui-dialog').attr("id", "PopUpMessageWindowId");
            
        },
        buttons: [
            {
                text: "Close",
                class: 'WED_btnList_btn WED_dialog_btn',
                click: function () {
                    $(this).dialog("close");
                    //$("input:text:visible:first,select:visible:first").focus();
                    $("input:text,select").focus().filter(':enabled:visible:first')
                        .focus();

                    focusFirst();
                }
            }
        ]
    }).prev(".ui-dialog-titlebar").css("background", "#15422B");

    var div = document.getElementById("PopUpMessageWindowId");
    div.tabIndex = -1;
    div.focus();
}


function focusFirst() {
    $('input, textarea, select')
        .not('input[type=hidden],input[type=button],input[type=submit],input[type=reset],input[type=image],button')
        .filter(':enabled:visible:first')
        .focus();
}

function initalNumericFields() {
    $('input[type="text"][fieldType="num"]').each(function () {
        if ($(this).attr('numType') == 'year') {
            $(this).autoNumeric('init', { vMax: '9999', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'month') {
            $(this).autoNumeric('init', { vMax: '12', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'day') {
            $(this).autoNumeric('init', { vMax: '31', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'hour') {
            $(this).autoNumeric('init', { vMax: '23', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'min') {
            $(this).autoNumeric('init', { vMax: '59', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'int') {
            $(this).autoNumeric('init', { vMax: '999999999', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'decimal') {
            $(this).autoNumeric('init', { vMax: '999999999.9', aSep: '', dGroup: '0', mDec: '1', wEmpty: '' });
        } else if ($(this).attr('numType') == 'age') {
            $(this).autoNumeric('init', { vMax: '150', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'num') {
            $(this).autoNumeric('init', { vMax: '999999999', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        } else if ($(this).attr('numType') == 'money') {
            $(this).autoNumeric('init', { vMax: '999999999999.99', aSep: '', dGroup: '0', mDec: '2', wEmpty: '' });
        } else if ($(this).attr('numType') == 'percent') {
            $(this).autoNumeric('init', { vMax: '100', aSep: '', dGroup: '0', mDec: '2', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'Seq') {
            $(this).autoNumeric('init', { vMax: '9999', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'Amount') {
            $(this).autoNumeric('init', { vMax: '999999999.99', aSep: '', dGroup: '0', mDec: '2', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'No') {
            $(this).autoNumeric('init', { vMax: '99', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'positiveNo1') {
            $(this).autoNumeric('init', { vMax: '10', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'positiveNo2') {
            $(this).autoNumeric('init', { vMax: '999', aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        }
        else if ($(this).attr('numType') == '999') {
            $(this).autoNumeric('init', { vMax: '999', vMin:'1',aSep: '', dGroup: '0', mDec: '0', wEmpty: '' });
        }
        else if ($(this).attr('numType') == 'custom') {
            var Max = $(this).attr('numMax');
            var Min = $(this).attr('numMin');
            var Dec = $(this).attr('numDec');

            var myOptions = { vMax: '', vMin: '', aSep: '', dGroup: '0', mDec: '0', wEmpty: 'empty' };
            if (typeof Max != "undefined")
                myOptions.vMax = Max;
            if (typeof Min != "undefined")
                myOptions.vMin = Min;
            if (typeof Dec != "undefined")
                myOptions.mDec = Dec;

            $(this).autoNumeric('init', myOptions);
        }
        else {
            $(this).autoNumeric('init');
        }
    });
}
function i4_convertDateStringToints(value, seperator) {
    var intDay = null;
    var intMonth = null;
    var intYear = null;

    var strValue = value.replace(/[^0-9]+/g, '');
    var tempValue = strValue.split(seperator);
    if (tempValue.length == 3) {
        intDay = ((tempValue[0] == '') ? null : tempValue[0]);
        intMonth = ((tempValue[1] == '') ? null : tempValue[1]);
        intYear = ((tempValue[2] == '') ? null : tempValue[2]);
    }
    else {
        strValue = strValue.replace(/[^0-9]+/g, '');
        if (strValue.length > 8) strValue = strValue.substring(0, 8);
        if (strValue.length > 0) {
            if (strValue.length > 1)
                intDay = strValue.substring(0, 2);
            else
                intDay = strValue.substring(0, 1);
        }
        if (strValue.length > 2) {
            if (strValue.length > 3)
                intMonth = strValue.substring(2, 4);
            else
                intMonth = strValue.substring(2, 3);
        }
        if (strValue.length > 4)
            intYear = strValue.substring(4, strValue.length);
    }
    return new Array(intDay, intMonth, intYear);
}

// Extend Function
jQuery.fn.extend({
    i4_Date_OnBlur: function () {
        return this.blur(function (evt) {
            var value = $(this).val();
            var seperator = "/";
            var dateIntArray = i4_convertDateStringToints(value, seperator);
            var intDay = dateIntArray[0];
            var intMonth = dateIntArray[1];
            var intYear = dateIntArray[2];

            strValue = "";
            if (intDay != null) {
                if (intDay.length == 2) {
                    if (parseInt(intDay) > 31)
                        strValue += "31" + seperator;
                    else
                        strValue += intDay + seperator;
                } else if (parseInt(intDay) > 3)
                    strValue += "0" + intDay + seperator;
                else {
                    strValue += intDay;
                    if (intMonth != null || intYear != null)
                        strValue += seperator;
                }
            }
            if (intMonth != null) {
                if (intMonth.length == 2) {
                    if (parseInt(intMonth) > 12)
                        strValue += "12" + seperator;
                    else
                        strValue += intMonth + seperator;
                } else if (parseInt(intMonth) > 1)
                    strValue += "0" + intMonth + seperator;
                else {
                    strValue += intMonth
                    if (intYear != null)
                        strValue += seperator;
                }
            }
            if (intYear != null) {
                if (intYear.length == 4) {
                    if (parseInt(intYear) > 1900)
                        strValue += intYear;
                    else {
                        strValue += "1900";
                        intYear = 1900;
                    }
                }
                else {
                    strValue += "1900";
                    intYear = 1900;
                }
            }
            if (intDay != null && intMonth != null && intYear != null) {
                if (intDay > 28 && intYear > 999) {
                    for (var i = 0; i < 3; i++) {
                        var date;
                        try {
                            date = $.datepicker.parseDate("dd" + seperator + "mm" + seperator + "yy", intDay + seperator + intMonth + seperator + intYear);
                        }
                        catch (ex) { }
                        if (date != null) {
                            strValue = $.datepicker.formatDate("dd" + seperator + "mm" + seperator + "yy", date);
                            break;
                        } else {
                            intDay--;
                        }
                    }
                }
            }
            this.value = strValue;
        });
    },

    i4_Date_KeyUp: function () {
        return this.bind('keyup', function (evt) {
            var value = $(this).val();
            if (evt.keyCode != 37 && evt.keyCode != 39 &&
		            evt.keyCode != 8 && evt.keyCode != 46 &&
		            evt.keyCode != 13 && evt.keyCode != 9
	            ) {

                var seperator = "/";
                var dateIntArray = i4_convertDateStringToints(value, seperator);
                var intDay = dateIntArray[0];
                var intMonth = dateIntArray[1];
                var intYear = dateIntArray[2];

                strValue = "";
                if (intDay != null) {
                    if (intDay.length == 2) {
                        if (parseInt(intDay) > 31)
                            strValue += "31" + seperator;
                        else
                            strValue += intDay + seperator;
                    } else if (parseInt(intDay) > 3)
                        strValue += "0" + intDay + seperator;
                    else {
                        strValue += intDay;
                        if (intMonth != null || intYear != null)
                            strValue += seperator;
                    }
                }
                if (intMonth != null) {
                    if (intMonth.length == 2) {
                        if (parseInt(intMonth) > 12)
                            strValue += "12" + seperator;
                        else
                            strValue += intMonth + seperator;
                    } else if (parseInt(intMonth) > 1)
                        strValue += "0" + intMonth + seperator;
                    else {
                        strValue += intMonth
                        if (intYear != null)
                            strValue += seperator;
                    }
                }
                if (intYear != null) {
                    if (intYear.length == 4) {
                        if (parseInt(intYear) > 1900)
                            strValue += intYear;
                        else
                            strValue += "1900";
                    }
                    else {
                        strValue += intYear;
                    }
                }
                if (intDay != null && intMonth != null && intYear != null) {
                    if (intDay > 28 && intYear > 999) {
                        for (var i = 0; i < 3; i++) {
                            var date;
                            try {
                                date = $.datepicker.parseDate("dd" + seperator + "mm" + seperator + "yy", intDay + seperator + intMonth + seperator + intYear);
                            }
                            catch (ex) { }
                            if (date != null) {
                                strValue = $.datepicker.formatDate("dd" + seperator + "mm" + seperator + "yy", date);
                                break;
                            } else {
                                intDay--;
                            }
                        }
                    }
                }
                this.value = strValue;
            }

        });
    }
});

function isValidTime(formElem) {
    var time = formatTime(formElem.value);
    if (time != formElem.value && time == false) {
        alert("Invalid time format.\r\nCorrect format HH:mm.");
        formElem.select();
        formElem.focus();
    }
    else if (time != false) formElem.value = time;
}

function formatTime(time) {
    var result = false, m;
    var re = /^\s*([01]?\d|2[0-3])(:?([0-5]\d))?\s*$/;
    if ((m = time.match(re))) {
        result = (m[1].length == 2 ? "" : "0") + m[1] + (time.indexOf(":") == -1 ? ":" : "") + (m[2] || "00");
    }
    return result;
}

function i4focusFirstInput() {
    var input = $("input[type!='hidden']").first();
    if (input.length > 0) {
        if (input.attr("disabled") != "disabled") {
            var parent = input.parents('div:eq(0)');
            if (parent.length > 0) {
                if (!parent.is(":hidden")) {
                    if (typeof ($('input#focus_ready').val()) == 'undefined')
                        input.focus();
                }
            }
        }
    }
}

function loadingImage() {
    $.blockUI({ message: '<image src="images/ajax-loader.gif" alt="" style="width=50px;height:50px" border="0"></image>' });
}

function askConfirm(msg) {
    if (confirm(msg)) {
        loadingImage();
        return true;
    }
    else
        return false;
}


function highlightSubNav(id) {
    $("#" + id).parent().parent().children('div').css('color', 'white');
    $("#" + id).parent().parent().children('div').css('background-color', '#15422B');
    $("#" + id).siblings().css('border-left', '5px solid')
    $("#" + id).css("background-color", "white");
    $("#" + id).addClass("nav-border"); 
}


function highlightNav(id) {
    $("#" + id).addClass("nav-border");
    $("#" + id).css("background-color", "white");
}