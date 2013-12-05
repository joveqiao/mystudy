//退出登录
function loginouttips() {

    art.dialog.confirm('您确定要退出当前登陆吗？', function () {
        location.href = "?action=loginout";
    }, function () {
        art.dialog.tips('继续正常使用~_~');
    });
};

function returnList() {
    var list = art.dialog.list;
    for (var i in list) {
        list[i].close();
    };
    if (window.parent['main']) {
        window.parent['main'].location.reload();
    } else { location.reload(); }
}

//删除、直接修改某个值的信息操作

function operCharPro(confirmMsg, failMsg, operID, method) {

    art.dialog.confirm(confirmMsg, function () {
        //执行ajax操作

        var bsDialog = art.dialog({
            content: "正在执行操作，请稍候...",
            id: 'EF893LD'
        });
        jQuery.ajax({
            type: "GET",
            dataType: "text",
            url: '/ajax/ajax.aspx?action=' + method + '&operID=' + operID + "&num=" + Math.round(Math.random() * 10000), //提交至ajax处理
            beforeSend: function () { bsDialog; },
            complete: function () { },
            success: function (json) {
                bsDialog.close();     //关闭提示层
                if (json == 1) {    //操作成功
                    art.dialog({
                        icon: 'succeed',
                        content: '恭喜您，操作成功，点击“确定”返回！',
                        lock: true,
                        background: '#000', // 背景色
                        opacity: 0.1, // 透明度
                        title: "操作提示",
                        fixed: true,
                        button: [{ name: '确定', callback: function () {
                            art.dialog({ id: 'operWindow' }).close();     //关闭操作层
                            if (window.parent['main']) {
                                window.parent['main'].location.reload();
                            } else { location.reload(); }
                        }, focus: true
                        }]
                    });
                }
                else if (json == 0) {  //操作失败
                    art.dialog.alert(failMsg);
                }
                else if (json == -1) {  //登陆超时
                    art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, function () { });
                }
            }
        });
    }, function () {
        art.dialog.tips('未执行操作');
    });
};

//直接执行一个操作，返回操作成功的记录数
function operCharProRes(confirmMsg, failMsg, operID, method) {

    art.dialog.confirm(confirmMsg, function () {
        //执行ajax操作

        var bsDialog = art.dialog({
            content: "正在执行操作，请稍候...",
            id: 'EF893LD'
        });
        jQuery.ajax({
            type: "GET",
            dataType: "text",
            url: '/ajax/ajax.aspx?action=' + method + '&operID=' + operID + "&num=" + Math.round(Math.random() * 10000), //提交至ajax处理
            beforeSend: function () { bsDialog; },
            complete: function () { },
            success: function (json) {
                bsDialog.close();     //关闭提示层
                if (json >0) {    //操作成功
                    art.dialog({
                        icon: 'succeed',
                        content: '操作成功！本次操作影响记录数：<font color=red>'+json+'</font> 条！',
                        lock: true,
                        background: '#000', // 背景色
                        opacity: 0.1, // 透明度
                        title: "操作提示",
                        fixed: true,
                        button: [{ name: '确定', callback: function () {
                            art.dialog({ id: 'operWindow' }).close();     //关闭操作层
                            if (window.parent['main']) {
                                window.parent['main'].location.reload();
                            } else { location.reload(); }
                        }, focus: true
                        }]
                    });
                }
                else if (json == 0) {
                    art.dialog.alert("本次操作未取消任何订单！");
                }
                else if (json == -1) {  //登陆超时
                    art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, function () { });
                }
            }
        });
    }, function () {
        art.dialog.tips('未执行操作');
    });
};

//删除、直接修改某个值的信息操作

function operCharProNoFra(confirmMsg, failMsg, operID, method) {

    art.dialog.confirm(confirmMsg, function () {
        //执行ajax操作
        var bsDialog = art.dialog({
            content: "正在执行操作，请稍候...",
            id: 'EF893LD'
        });
        jQuery.ajax({
            type: "GET",
            dataType: "text",
            url: '/ajax/ajax.aspx?action=' + method + '&operID=' + operID + "&num=" + Math.round(Math.random() * 10000), //提交至ajax处理
            beforeSend: function () { bsDialog; },
            complete: function () { },
            success: function (json) {
                bsDialog.close();     //关闭提示层
                if (json == 1){    //操作成功
                    art.dialog({
                        icon: 'succeed',
                        content: '恭喜您，操作成功，点击“确定”返回！',
                        lock: true,
                        background: '#000', // 背景色
                        opacity: 0.1, // 透明度
                        title: "操作提示",
                        fixed: true,
                        button: [{ name: '确定', callback: function () {
                            art.dialog({ id: 'operWindow' }).close();     //关闭操作层
                            window.location.reload();
                        }, focus: true
                        }]
                    });
                }
                else if (json == 0) {  //操作失败
                    art.dialog.alert(failMsg);
                }
                else if (json == -1) {  //登陆超时
                    art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, function () { });
                }
            }
        });

    }, function () {
        art.dialog.tips('未执行操作');
    });
};


//ajax加载弹出操作层
function openInWin(url, title) {
    var bsDialogload = art.dialog.through({
        content: "正在加载，请稍候...",
        id: 'EF893L1'
    });
    jQuery.ajax({
        type: "POST",
        dataType: "json",
        url: '/ajax/ajax.aspx',
        data: { action: "chklogin",
            num: Math.round(Math.random() * 10000)
        },
        beforeSend: function () { bsDialogload; },
        success: function (json) {
            if (json != -1) {
                jQuery.ajax({
                    url: url,
                    success: function (data) {
                        bsDialogload.close();
                        var throughBox = art.dialog.through;
                        throughBox({
                            id: 'operWindow',
                            title: title,
                            content: data,
                            lock: true,
                            background: '#000', // 背景色
                            opacity: 0.5, // 透明度
                            padding: 0
                        });
                    },
                    cache: false
                });
            }
            else {
                art.dialog({
                    icon: 'succeed',
                    content: '静置时间超时，请重新登陆后再操作！',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.1, // 透明度
                    title: "操作提示",
                    fixed: true,
                    button: [{ name: '确定', callback: function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, focus: true
                    }]
                });
            }
        }
    });
}

//ajax加载弹出操作层，弹出层之上弹出第二层
function openInWinMore(url, title) {
    var bsDialogload = art.dialog.through({
        content: "正在加载，请稍候...",
        id: 'EF893L1'
    });
    jQuery.ajax({
        type: "POST",
        dataType: "json",
        url: '/ajax/ajax.aspx',
        data: { action: "chklogin",
            num: Math.round(Math.random() * 10000)
        },
        beforeSend: function () { bsDialogload; },
        success: function (json) {
            if (json != -1) {
                jQuery.ajax({
                    url: url,
                    success: function (data) {
                        bsDialogload.close();
                        var throughBox = art.dialog.through;
                        throughBox({
                            id: 'operWindow2',
                            title: title,
                            content: data,
                            lock: true,
                            background: '#000', // 背景色
                            opacity: 0.5, // 透明度
                            padding: 0
                        });
                    },
                    cache: false
                });
            }
            else {
                art.dialog({
                    icon: 'succeed',
                    content: '静置时间超时，请重新登陆后再操作！',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.1, // 透明度
                    title: "操作提示",
                    fixed: true,
                    button: [{ name: '确定', callback: function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, focus: true
                    }]
                });
            }
        }
    });
}
//提交ajax数据操作，弹出层第二层数据操作
function execajaxMore(formName, types) {
    var bsDialog = art.dialog({
        content: "正在执行操作，请稍候...",
        id: 'EF893L11'
    });
    jQuery.ajax({
        type: "POST",
        dataType: "text",
        url: '/ajax/ajax.aspx?action=' + types + '&num=' + Math.round(Math.random() * 10000), //提交至ajax处理
        data: jQuery('#' + formName).serialize(),
        beforeSend: function () { bsDialog; },
        complete: function () { },
        success: function (json) {
            bsDialog.close();     //关闭提示层
            if (json == 1) {    //操作成功
                art.dialog({
                    icon: 'succeed',
                    content: '恭喜您，操作成功，点击“确定”返回！',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.1, // 透明度
                    title: "操作提示",
                    fixed: true,
                    button: [{ name: '确定', callback: function () {
                        art.dialog({ id: 'operWindow2' }).close();     //关闭操作层
                        if (window.parent['main']) {
                            window.parent['main'].location.reload();
                        } else { location.reload(); }
                    }, focus: true
                    }]
                });
            }
            else if (json == 0) {  //操作失败
                art.dialog.alert("操作失败，请检查输入是否正确，如仍有问题，请联系管理员！");
            }
            else if (json == -1) {  //登陆超时
                art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                    top.location.href = "/emcheckin/login.aspx";
                }, function () { });
            }
        }
    });
}

//提交ajax数据操作
function execajax(formName, types) {
    var bsDialog = art.dialog({
        content: "正在执行操作，请稍候...",
        id: 'EF893L'
    });
    jQuery.ajax({
        type: "POST",
        dataType: "text",
        url: '/ajax/ajax.aspx?action=' + types + '&num=' + Math.round(Math.random() * 10000), //提交至ajax处理
        data: jQuery('#' + formName).serialize(),
        beforeSend: function () { bsDialog; },
        complete: function () { },
        success: function (json) {
            bsDialog.close();     //关闭提示层
            if (json == 1) {    //操作成功
                art.dialog({
                    icon: 'succeed',
                    content: '恭喜您，操作成功，点击“确定”返回！',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.1, // 透明度
                    title: "操作提示",
                    fixed: true,
                    button: [{ name: '确定', callback: function () {
                        art.dialog({ id: 'operWindow' }).close();     //关闭操作层
                        if (window.parent['main']) {
                            window.parent['main'].location.reload();
                        } else { location.reload(); }
                    }, focus: true
                    }]
                });
            }
            else if (json == 0) {  //操作失败
                art.dialog.alert("操作失败，请检查输入是否正确，如仍有问题，请联系管理员！");
            }
            else if (json == -1) {  //登陆超时
                art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                    top.location.href = "/emcheckin/login.aspx";
                }, function () { });
            }
        }
    });
    ///
}

//提交ajax数据操作,成功后跳转到指定页面
function execajaxReturnURL(formName, types,orderID) {
    var bsDialog = art.dialog({
        content: "正在执行操作，请稍候...",
        id: 'EF893L'
    });
    jQuery.ajax({
        type: "POST",
        dataType: "text",
        url: '/ajax/ajax.aspx?action=' + types + '&num=' + Math.round(Math.random() * 10000), //提交至ajax处理
        data: jQuery('#' + formName).serialize(),
        beforeSend: function () { bsDialog; },
        complete: function () { },
        success: function (json) {
            bsDialog.close();     //关闭提示层
            if (json > 1) {    //操作成功,返回收款单ID，直接进行财务审核操作
                //执行ajax操作
                art.dialog({ id: 'operWindow' }).close();     //关闭操作层
                var bsDialog1 = art.dialog({
                    content: "已入账，正在审核，请稍候...",
                    id: 'EF893LDA'
                });
                jQuery.ajax({
                    type: "GET",
                    dataType: "text",
                    url: "/ajax/ajax.aspx?action=BursarCheckIn4&operID=" + json + "&num=" + Math.round(Math.random() * 10000), //提交至ajax处理
                    beforeSend: function () { bsDialog; },
                    complete: function () { },
                    success: function (data) {
                        bsDialog1.close();  //关闭提示层
                        if (data == 1) {    //操作成功
                            art.dialog({
                                icon: 'succeed',
                                content: '款项入账成功，状态已设置为“通过财务审核”！',
                                lock: true,
                                background: '#000', // 背景色
                                opacity: 0.1, // 透明度
                                title: "操作提示",
                                fixed: true,
                                button: [{ name: '确定', callback: function () {
                                    location.href = "/order/forms/advmoneyformin2.aspx?orderid=" + orderID + "&frID=" + json;
                                }, focus: true
                                }]
                            });
                        }
                        else if (data == 0) {  //操作失败
                            art.dialog.alert("入账成功，但审核失败，请到M单中手动审核！");
                        }
                    }
                });
                //====
            }
            else if (json == 0) {  //操作失败
                art.dialog.alert("入款操作失败，请联系电脑部！");
            }
            else if (json == -1) {  //登陆超时
                art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                    top.location.href = "/emcheckin/login.aspx";
                }, function () { });
            }
        }
    });
    ///
}

/////////////////////////////////////////////////////////////////////////////////////////////
//删除、直接修改某个值的信息操作后，再打开一个窗体

function operCharOpenWin(confirmMsg, failMsg, operID, method, nextURL, title) {

    art.dialog.confirm(confirmMsg, function () {
        //执行ajax操作
        var bsDialog = art.dialog({
            content: "正在执行操作，请稍候...",
            id: 'EF893LD'
        });
        jQuery.ajax({
            type: "GET",
            dataType: "text",
            url: '/ajax/ajax.aspx?action=' + method + '&operID=' + operID + "&num=" + Math.round(Math.random() * 10000), //提交至ajax处理
            beforeSend: function () { bsDialog; },
            complete: function () { },
            success: function (json) {
                if (json == 1) {    //操作成功
                    var list = art.dialog.list;
                    for (var i in list) {
                        list[i].close();
                    };
                    art.dialog({
                        icon: 'succeed',
                        content: '恭喜您，操作成功，点击“确定”返回查看操作结果！',
                        lock: true,
                        background: '#000', // 背景色
                        opacity: 0.1, // 透明度
                        title: "操作提示",
                        fixed: true,
                        button: [{ name: '查看结果', callback: function () {
                            openInWin(nextURL, title)

                        }, focus: true
                        }, { name: '返回列表', callback: function () {
                            if (window.parent['main']) {
                                window.parent['main'].location.reload();
                            } else { location.reload(); }
                        }, focus: true
                        }]
                    });
                }
                else if (json == 0) {  //操作失败
                    art.dialog.alert(failMsg);
                }
                else if (json == -1) {  //登陆超时
                    art.dialog.confirm('对不起，登陆超时，请重新登陆后再进行操作！', function () {
                        top.location.href = "/emcheckin/login.aspx";
                    }, function () { });
                }
            }
        });

    }, function () {
        art.dialog.tips('未执行操作');
    });
};


jQuery(document).ready(function () {
    //$("table tr:nth-child(even)").addClass("altrow");  //隔行变色 
    //鼠标移入该行和鼠标移除该行的事件
    jQuery("#mainTable .tr").mouseover(function () {
        jQuery(this).addClass("over");
    }).mouseout(function () {
        jQuery(this).removeClass("over");
    });

    //鼠标点击事件
    jQuery("#mainTable .tr").bind("click", function () {
        jQuery("table tr:gt(0)").removeClass("click");
        jQuery(this).addClass("click");
    });

});
