var n=0

//跳转

$('.logo').click(function(){
    window.location.href = "index.aspx"
})

$('.logo').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "index.aspx"
        return false;
    }
})
$('.aboutusli').click(function(){
    window.location.href = "about-us.aspx"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})

$('.aboutusli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.aboutusli1').click(function(){
    window.location.href = "about-us.aspx#introduce"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})
$('.aboutusli1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx#introduce"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.aboutusli2').click(function(){
    window.location.href = "about-us.aspx#pvalue"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})
$('.aboutusli2').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx#pvalue"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.aboutusli3').click(function(){
    window.location.href = "about-us.aspx#workrange"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})
$('.aboutusli3').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx#workrange"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.aboutusli4').click(function(){
    window.location.href = "about-us.aspx#property"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})
$('.aboutusli3').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx#property"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.aboutusli5').click(function(){
    window.location.href = "about-us.aspx#bestmanage"
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color', 'black')
    $('.phonenavitem').css('background-color', '#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
})
$('.aboutusli3').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "about-us.aspx#bestmanage"
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})
$('.Tonewsawards').click(function(){
    window.location.href = "news-awards.aspx"
    localStorage.removeItem("newsbackyear")
})
$('.newsawardli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "news-awards.aspx"
        localStorage.removeItem("newsbackyear")
        return false;
    }
})
$('.Toawardrecognition').click(function(){
    window.location.href = "award-recognition.aspx"
    localStorage.removeItem('awardbackyear')
})
$('.newsawardli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "award-recognition.aspx"
        localStorage.removeItem('awardbackyear')
        return false;
    }
})
$('.Tomultimediafiles').click(function(){
    window.location.href = "multimedia-files.aspx"
})
$('.Tomultimediafiles').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "multimedia-files.aspx"
        return false;
    }
})
$('.Toentertainment').click(function(){
    window.location.href = "entertainment.aspx"
})
$('.newsawardli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "entertainment.aspx"
        return false;
    }
})
$('.Toclubvideo').click(function(){
    window.location.href = "clubvideo.aspx"
})
$('.Toclubvideo').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "clubvideo.aspx"
        return false;
    }
})
$('.Topropertyact').click(function () {
    window.localStorage.removeItem("propertybackyear")
    window.location.href = "propertyactivity.aspx"
   
})
$('.Topropertyact').keypress(function (e) {
    if (e.which == 13) {
        window.localStorage.removeItem("propertybackyear")
        window.location.href = "propertyactivity.aspx"
        return false;
    }
})
$('.Backpropertyact').click(function () {
    window.location.href = "propertyactivity.aspx"

})
$('.Backpropertyact').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "propertyactivity.aspx"
        return false;
    }
})
$('.Topropertyactdetail').click(function () {
    var propertyUrl = $(this).find('img').attr('src')
    window.localStorage.setItem('propertyUrl',propertyUrl)
    window.localStorage.setItem('propertyUrl_en',propertyUrl)
    window.location.href = "propertyactdetail.aspx"
})
$('.Topropertyactdetail').keypress(function (e) {
    if (e.which == 13) {
        var propertyUrl = $(this).find('img').attr('src')
        window.localStorage.setItem('propertyUrl', propertyUrl)
        window.localStorage.setItem('propertyUrl_en', propertyUrl)
        window.location.href = "propertyactdetail.aspx"
        return false;
    }
})

$('.Tosocialdetail').click(function () {
    var propertyUrl = $(this).find('img').attr('src')
    window.localStorage.setItem('socialcareUrl', propertyUrl)
    window.localStorage.setItem('socialcareUrl_en', propertyUrl)
    window.location.href = "socialcaredetail.aspx"
   
})

$('.Tosocialdetail').keypress(function (e) {
    if (e.which == 13) {
        var propertyUrl = $(this).find('img').attr('src')
        window.localStorage.setItem('socialcareUrl', propertyUrl)
        window.localStorage.setItem('socialcareUrl_en', propertyUrl)
        window.location.href = "socialcaredetail.aspx"
        return false;
    }
})
$('.Tocontactus').click(function(){
    window.location.href = "contact-us.aspx"
})
$('.Tocontactus').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "contact-us.aspx"
        return false;
    }
})

$('.sustainabilityli').click(function(){
    window.location.href = "sustainability.aspx"
})

$('.sustainabilityli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "sustainability.aspx"
        return false;
    }
})

$('.Totalenttraining').click(function(){
    window.location.href = "talenttraining.aspx"
})

$('.Totalenttraining').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "talenttraining.aspx"
        return false;
    }
})

$('.Tostaffactivites').click(function(){
    window.location.href = "staffactivites.aspx"
    localStorage.removeItem("staffactbackyear")
})

$('.Tostaffactivites').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "staffactivites.aspx"
        localStorage.removeItem("staffactbackyear")
        return false;
    }
})

$('.Tojobvacancy').click(function(){
    window.location.href = "jobvacancy.aspx"
})

$('.Tojobvacancy').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "jobvacancy.aspx"
        return false;
    }
})

$('.toformdownload').click(function(){
    window.location.href = 'formdownload.aspx'
})

$('.toformdownload').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'formdownload.aspx'
        return false;
    }
})

$('.tocustomerinfo').click(function(){
    window.location.href = 'customerinfo.aspx'
})

$('.tocustomerinfo').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'customerinfo.aspx'
        return false;
    }
})

$('.tobillpayment').click(function(){
    window.location.href = 'billpayment.aspx'
})

$('.tobillpayment').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'billpayment.aspx'
        return false;
    }
})

$('.tohomebrocade').click(function(){
    window.location.href = 'homebrocade.aspx'
})

$('.tohomebrocade').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'homebrocade.aspx'
        return false;
    }
})

$('.toonlineapp').click(function(){
    window.location.href = 'onlineapplication.aspx'
})

$('.toonlineapp').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'onlineapplication.aspx'
        return false;
    }
})

$('.tojoinus').click(function(){
    window.location.href = 'join-us.aspx'
})

$('.tojoinus').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'join-us.aspx'
        return false;
    }
})



$('.topropertitylist').click(function () {
    var propertyType = $(this).find('.title').text().trim()

    sessionStorage.setItem('propertyTypeAndRegion', JSON.stringify({ propertyType: propertyType, region: '所有地區' }))
    window.location.href = 'propertylist.aspx'
})

$('.topropertitylist').keypress(function (e) {
    if (e.which == 13) {
        var propertyType = $(this).find('.title').text().trim()

        sessionStorage.setItem('propertyTypeAndRegion', JSON.stringify({ propertyType: propertyType, region: '所有地區' }))
        window.location.href = 'propertylist.aspx'
        return false;
    }
})


$('.topropertitylistdetail').click(function () {
    var template_id = $(this).attr('template_id')
    sessionStorage.setItem("propertyId", template_id)

    window.location.href = 'propertylistdetail.aspx'
})

$('.topropertitylistdetail').keypress(function (e) {
    if (e.which == 13) {
        var template_id = $(this).attr('template_id')
        sessionStorage.setItem("propertyId", template_id)

        window.location.href = 'propertylistdetail.aspx'
        return false;
    }
})


$('.tosocialcare').click(function () {
    localStorage.removeItem("socialcarebackyear")
    window.location.href = 'socialcare.aspx'
   
})

$('.topropertitylistdetail').keypress(function (e) {
    if (e.which == 13) {
        localStorage.removeItem("socialcarebackyear")
        window.location.href = 'socialcare.aspx'
        return false;
    }
})


$('.toenvironmentalefforts').click(function(){
    window.location.href = 'environmentalefforts.aspx'
})

$('.topropertitylistdetail').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'environmentalefforts.aspx'
        return false;
    }
})


$('.tooccupationalsafety').click(function(){
    window.location.href = 'occupationalsafety.aspx'
})

$('.tooccupationalsafety').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'occupationalsafety.aspx'
        return false;
    }
})


$('.Tonewsawards1').click(function () {
    localStorage.removeItem("newsbackyear")
    document.getElementById("btnClearNewsSession").click();
})

$('.Tonewsawards1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "news-awards.aspx#jump"
        localStorage.removeItem("newsbackyear")
        return false;
    }
})

$('.Toawardrecognition1').click(function () {
    document.getElementById("btnClearAwardsSession").click();
    localStorage.removeItem('awardbackyear')
})

$('.Toawardrecognition1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "award-recognition.aspx#jump"
        localStorage.removeItem('awardbackyear')
        return false;
    }
})
$('.Tomultimediafiles1').click(function () {
    window.location.href = "multimedia-files.aspx#jump"
})

$('.Tomultimediafiles1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "multimedia-files.aspx#jump"
        return false;
    }
})
$('.Toentertainment1').click(function () {
    document.getElementById("btnEntertainmentSession").click();
})

$('.Toentertainment1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "entertainment.aspx#jump"
        return false;
    }
})
$('.Toclubvideo1').click(function () {
    document.getElementById("btnClubVideoSession").click();

})
$('.Toclubvideo1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "clubvideo.aspx#jump"
        return false;
    }
})
$('.Topropertyact1').click(function () {
    window.localStorage.removeItem("propertybackyear")
    document.getElementById("btnActivitySession").click();

})
$('.Topropertyact1').keypress(function (e) {
    if (e.which == 13) {
        window.localStorage.removeItem("propertybackyear")
        window.location.href = "propertyactivity.aspx#jump"
        return false;
    }
})
$('.Tocontactus1').click(function () {
    window.location.href = "contact-us.aspx#jump"
})
$('.Tocontactus1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "contact-us.aspx#jump"
        return false;
    }
})

$('.sustainabilityli1').click(function () {
    window.location.href = "sustainability.aspx#jump"
})

$('.sustainabilityli1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "sustainability.aspx#jump"
        return false;
    }
})


$('.Totalenttraining1').click(function () {
    window.location.href = "talenttraining.aspx#jump"
})

$('.Totalenttraining1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "talenttraining.aspx#jump"
        return false;
    }
})

$('.Tostaffactivites1').click(function () {
    document.getElementById("btnStaffactivitesSession").click();
    localStorage.removeItem("staffactbackyear")
})

$('.Tostaffactivites1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "staffactivites.aspx#jump"
        localStorage.removeItem("staffactbackyear")
        return false;
    }
})

$('.Tojobvacancy1').click(function () {
    window.location.href = "jobvacancy.aspx#jump"
})

$('.Tojobvacancy1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "jobvacancy.aspx#jump"
        return false;
    }
})

$('.toformdownload1').click(function () {
    window.location.href = 'formdownload.aspx#jump'
})

$('.toformdownload1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'formdownload.aspx#jump'
        return false;
    }
})

$('.tocustomerinfo1').click(function () {
    window.location.href = 'customerinfo.aspx#jump'
})

$('.tocustomerinfo1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'customerinfo.aspx#jump'
        return false;
    }
})

$('.tobillpayment1').click(function () {
    window.location.href = 'billpayment.aspx#jump'
})

$('.tobillpayment1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'billpayment.aspx#jump'
        return false;
    }
})

$('.tohomebrocade1').click(function () {
    window.location.href = 'homebrocade.aspx#jump'
})

$('.tohomebrocade1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'homebrocade.aspx#jump'
        return false;
    }
})

$('.toonlineapp1').click(function () {
    window.location.href = 'onlineapplication.aspx#jump'
})

$('.toonlineapp1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'onlineapplication.aspx#jump'
        return false;
    }
})

$('.tojoinus1').click(function () {
    window.location.href = 'join-us.aspx#jump'
})

$('.tojoinus1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'join-us.aspx#jump'
        return false;
    }
})
$('.tosocialcare1').click(function () {
    document.getElementById("btnSocialCareSession").click();
    localStorage.removeItem("socialcarebackyear")
})

$('.tosocialcare1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'socialcare.aspx#jump'
        localStorage.removeItem("socialcarebackyear")
        return false;
    }
})


$('.toenvironmentalefforts1').click(function () {
    window.location.href = 'environmentalefforts.aspx#jump'
})

$('.toenvironmentalefforts1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'environmentalefforts.aspx#jump'
        return false;
    }
})

$('.tooccupationalsafety1').click(function () {
    window.location.href = 'occupationalsafety.aspx#jump'
})

$('.tooccupationalsafety1').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = 'occupationalsafety.aspx#jump'
        return false;
    }
})


$('.togoback').click(function(){
    window.history.go(-1)
})


$('.togoback').keypress(function (e) {
    if (e.which == 13) {
        window.history.go(-1)
        return false;
    }
})


$('.toprivacy').click(function(){
    $('#dialogDiv').dialog(
        {
            
            modal : true,
            resizable: true,
            width:1000,
            height:800,
           open:function(event,ui){
               $('.ui-dialog-titlebar-close').show()
            },
            position: {
                my: "top center",
                at: "top center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function (pos) {
                    
                    $('.ui-dialog').css('position', "fixed");
                    $('.ui-dialog').css('top', '75px');
                    $('.ui-dialog').css('left', pos.left);
                }
            },
        }
    )
})


$('.toprivacy').keypress(function (e) {
    if (e.which == 13) {
        $('#dialogDiv').dialog(
            {

                modal: true,
                resizable: true,
                width: 1000,
                height: 800,
                open: function (event, ui) {
                    $('.ui-dialog-titlebar-close').show()
                },
                position: {
                    my: "top center",
                    at: "top center",
                    of: window,
                    collision: "fit",
                    // Ensure the titlebar is always visible
                    using: function (pos) {

                        $('.ui-dialog').css('position', "fixed");
                        $('.ui-dialog').css('top', '75px');
                        $('.ui-dialog').css('left', pos.left);
                    }
                },
            }
        )
        return false;
    }
})




$('.todisclaimer').click(function(){
    $('#dialogDiv1').dialog(
        {
            modal : true,
            resizable: true,
            width:1000,
            height:800,
            position: {
                my: "top center",
                at: "top center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function (pos) {

                    $('.ui-dialog').css('position', "fixed");
                    $('.ui-dialog').css('top', '75px');
                    $('.ui-dialog').css('left', pos.left);
                }
            },
        }
    )
})



$('.todisclaimer').keypress(function (e) {
    if (e.which == 13) {
        $('#dialogDiv1').dialog(
            {
                modal: true,
                resizable: true,
                width: 1000,
                height: 800,
                position: {
                    my: "top center",
                    at: "top center",
                    of: window,
                    collision: "fit",
                    // Ensure the titlebar is always visible
                    using: function (pos) {

                        $('.ui-dialog').css('position', "fixed");
                        $('.ui-dialog').css('top', '75px');
                        $('.ui-dialog').css('left', pos.left);
                    }
                },
            }
        )
        return false;
    }
})

$('.totechnical').click(function () {
    $('#dialogDiv4').dialog(
        {
            modal: true,
            resizable: true,
            width: 1000,
            height: 800,
            position: {
                my: "top center",
                at: "top center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function (pos) {

                    $('.ui-dialog').css('position', "fixed");
                    $('.ui-dialog').css('top', '75px');
                    $('.ui-dialog').css('left', pos.left);
                }
            },
        }
    )
})

$('.totechnical').keypress(function (e) {
    if (e.which == 13) {
        $('#dialogDiv4').dialog(
            {
                modal: true,
                resizable: true,
                width: 1000,
                height: 800,
                position: {
                    my: "top center",
                    at: "top center",
                    of: window,
                    collision: "fit",
                    // Ensure the titlebar is always visible
                    using: function (pos) {

                        $('.ui-dialog').css('position', "fixed");
                        $('.ui-dialog').css('top', '75px');
                        $('.ui-dialog').css('left', pos.left);
                    }
                },
            }
        )
        return false;
    }
})


//跳转

$('.totop').click(function(){
    $('body,html').animate({scrollTop:0},200);
                return false;
})

$('.totop').keypress(function (e) {
    if (e.which == 13) {
        $('body,html').animate({ scrollTop: 0 }, 200);
        $('[tabindex=1]').focus();
        return false;
    }
})

$('.totop').mouseenter(function(){
    $('.totop').css('background-color','#2770b5')
    $('.totop').find('.triangle').css('border-top','24px solid #0b2c5f')
    $('.totop').css('cursor','pointer') 
})


$('.totop').mouseleave(function(){
    $('.totop').css('background-color','#f1f1f1') 
    $('.totop').find('.triangle').css('border-top','24px solid #0b2c5f')
})

$('.iconbutton').click(function(){
    $('.phonesnavbar').slideToggle()
    $('.phonenavitem').css('color','black')
    $('.phonenavitem').css('background-color','#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    if($(this).find('.glyphicon-align-justify').length>0){
        $(this).find('.glyphicon-align-justify').attr('class','glyphicon glyphicon-align-right')
    } else {
        $(this).find('.glyphicon-align-right').attr('class','glyphicon glyphicon-align-justify')
    }
})


$('.iconbutton').keypress(function (e) {
    if (e.which == 13) {
        $('.phonesnavbar').slideToggle()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        if ($(this).find('.glyphicon-align-justify').length > 0) {
            $(this).find('.glyphicon-align-justify').attr('class', 'glyphicon glyphicon-align-right')
        } else {
            $(this).find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        }
        return false;
    }
})

$('.phoneclose').click(function(){
    $('.phonesnavbar').slideUp()
    $('.phonenavitem').css('color','black')
    $('.phonenavitem').css('background-color','#ffffff')
    $('.phonenavitem').find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
    $('.phonesnavitem').slideUp()
    $('.iconbutton').find('.glyphicon-align-right').attr('class','glyphicon glyphicon-align-justify')
})

$('.phoneclose').keypress(function (e) {
    if (e.which == 13) {
        $('.phonesnavbar').slideUp()
        $('.phonenavitem').css('color', 'black')
        $('.phonenavitem').css('background-color', '#ffffff')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        $('.phonesnavitem').slideUp()
        $('.iconbutton').find('.glyphicon-align-right').attr('class', 'glyphicon glyphicon-align-justify')
        return false;
    }
})

$('.phonenavitem').click(function(){
    // console.log($('.phonenavitem').index(this))
    var index = $('.phonenavitem').index(this)
    var that = this
    if($(this).find('.glyphicon-menu-right').length>0){
        $('.phonenavitem').css('color','black')
        $('.phonenavitem').css('background-color','#ffffff')
        $(this).css('color','#806b26')
        $(this).css('background-color','#f1f1f1')
        $('.phonenavitem').find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
     $(that).find('.glyphicon-menu-right').attr('class','glyphicon glyphicon-menu-down')
     $('.phonesnavitem').slideUp()
    
     $('.phonesnavitem').eq(index).slideDown()
    } else {
        $(this).css('color','black')
        $(that).find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
        $('.phonesnavitem').eq(index).slideUp()
    }
   
})

$('.phonenavitem').keypress(function (e) {
    if (e.which == 13) {
        // console.log($('.phonenavitem').index(this))
        var index = $('.phonenavitem').index(this)
        var that = this
        if ($(this).find('.glyphicon-menu-right').length > 0) {
            $('.phonenavitem').css('color', 'black')
            $('.phonenavitem').css('background-color', '#ffffff')
            $(this).css('color', '#806b26')
            $(this).css('background-color', '#f1f1f1')
            $('.phonenavitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
            $(that).find('.glyphicon-menu-right').attr('class', 'glyphicon glyphicon-menu-down')
            $('.phonesnavitem').slideUp()

            $('.phonesnavitem').eq(index).slideDown()
        } else {
            $(this).css('color', 'black')
            $(that).find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
            $('.phonesnavitem').eq(index).slideUp()
        }
        return false;
    }
})



$('.selectlanguage').click(function(){
   
    if($(this).find('.glyphicon-menu-right').length>0){
        $(this).find('.glyphicon-menu-right').attr('class','glyphicon glyphicon-menu-down')
        $('.laguagelist').slideDown()
    } else {
        $('.laguagelist').slideUp()
        $(this).find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
    }
   
})


$('.selectlanguage').keypress(function (e) {
    if (e.which == 13) {
        if ($(this).find('.glyphicon-menu-right').length > 0) {
            $(this).find('.glyphicon-menu-right').attr('class', 'glyphicon glyphicon-menu-down')
            $('.laguagelist').slideDown()
        } else {
            $('.laguagelist').slideUp()
            $(this).find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
        }
        return false;
    }
})

$('.phonelanguage').find('.item').click(function(){
    console.log($(this))
    var langtype = $(this).text()
    console.log(langtype)
    $('.lang').text(langtype)
    $('.laguagelist').slideUp()
     $('.selectlanguage').find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')


})


$('.phonemenuitem').click(function(){
    // console.log($('.phonenavitem').index(this))
    var index = $('.phonemenuitem').index(this)
    var that = this
    if($(this).find('.glyphicon-menu-right').length>0){
        $('.phonemenuitem').find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
     $(that).find('.glyphicon-menu-right').attr('class','glyphicon glyphicon-menu-down')
     $('.phonesmenuitem').slideUp()
    
     $('.phonesmenuitem').eq(index).slideDown()
    } else {
        $(that).find('.glyphicon-menu-down').attr('class','glyphicon glyphicon-menu-right')
        $('.phonesmenuitem').eq(index).slideUp()
    }
   
})

$('.phonemenuitem').keypress(function (e) {
    if (e.which == 13) {
        // console.log($('.phonenavitem').index(this))
        var index = $('.phonemenuitem').index(this)
        var that = this
        if ($(this).find('.glyphicon-menu-right').length > 0) {
            $('.phonemenuitem').find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
            $(that).find('.glyphicon-menu-right').attr('class', 'glyphicon glyphicon-menu-down')
            $('.phonesmenuitem').slideUp()

            $('.phonesmenuitem').eq(index).slideDown()
        } else {
            $(that).find('.glyphicon-menu-down').attr('class', 'glyphicon glyphicon-menu-right')
            $('.phonesmenuitem').eq(index).slideUp()
        }

        return false;
    }
})

//导航栏
// $('.aboutusli').mouseenter(function(){
//     $('.aboutus').slideDown()
//     $('.newsawards').slideUp()
//     $('.entertainment').slideUp()
// })
// $('.logo').mouseenter(function(){
//     $('.newsawards').slideUp()
//     $('.entertainment').slideUp()
// })
// $('.newsawardli').mouseenter(function(){
//     $('.newsawards').slideDown()
//     $('.entertainment').hide()
//     $('.aboutus').hide()
// })


// subscribe to the keypress event of the form
    $('.newsawardli').keypress(function (e) {
        if (e.which == 13) {
            window.location.href = "news-awards.aspx"
            return false;
        }
    })

$('.newsawardli').click(function () {
    document.getElementById("btnClearNewsSession").click();
})
// $('.newsawards').mouseleave(function(){
//     $('.newsawards').slideUp()
// })
// $('.aboutus').mouseleave(function(){
//     $('.aboutus').slideUp()
// })
// $('.entertainmentli').mouseenter(function(){
//     $('.entertainment').slideDown()
//     $('.newsawards').hide()
//     $('.sustainabili').hide()
// })
$('.entertainmentli').click(function(){
    document.getElementById("btnEntertainmentSession").click();
})

$('.entertainmentli').keypress(function (e) {
    if (e.which == 13) {
        window.location.href = "entertainment.aspx"
        return false;
    }
})
// $('.entertainment').mouseleave(function(){
//     $('.entertainment').slideUp()
// })
// $('.sustainabili').mouseleave(function(){
//     $('.sustainabili').slideUp()
// })
// $('.talenttraining').mouseleave(function(){
//     $('.talenttraining').slideUp()
// })
// $('.careers').mouseleave(function(){
//     $('.careers').slideUp()
// })
// $('.contactus').mouseleave(function(){
//     $('.contactus').slideUp()
// })
// $('.sustainabilityli').mouseenter(function(){
//     $('.sustainabili').slideDown()
//     $('.entertainment').hide()
//     $('.talenttraining').hide()
// })
// $('.customerinfoli').mouseenter(function(){
//     $('.talenttraining').slideDown()
//     $('.sustainabili').hide()
//     $('.careers').hide()
// })
// $('.talenttrainingli').mouseenter(function(){
//     $('.careers').slideDown()
//     $('.talenttraining').hide()
//     $('.contactus').hide()
// })
// $('.contactusli').mouseenter(function(){
//     $('.contactus').slideDown()
//     $('.careers').hide()
   
// })



//导航栏


//  年份
$('.year').click(function(){
    n++
    if(n%2 == 1){
        if($('.year .triangle').hasClass("rotate2")){
　　　　　　　　$('.year .triangle').removeClass("rotate2")
　　　　　}
        $('.year').css('border-radius',"0")
        $('.year .triangle').addClass("rotate1")
        $('.yearlist').show()
    } else {
        if($('.year .triangle').hasClass("rotate1")){
　　　　　　　　$('.year .triangle').removeClass("rotate1")
　　　　　} 
       
        $('.year .triangle').addClass("rotate2")
        $('.yearlist').hide()
        $('.year').css('border-radius',"0 0 20px 20px")
    }
})

$('.year').keypress(function (e) {
    if (e.which == 13) {
        n++
        if (n % 2 == 1) {
            if ($('.year .triangle').hasClass("rotate2")) {
                $('.year .triangle').removeClass("rotate2")
            }
            $('.year').css('border-radius', "0")
            $('.year .triangle').addClass("rotate1")
            $('.yearlist').show()
        } else {
            if ($('.year .triangle').hasClass("rotate1")) {
                $('.year .triangle').removeClass("rotate1")
            }

            $('.year .triangle').addClass("rotate2")
            $('.yearlist').hide()
            $('.year').css('border-radius', "0 0 20px 20px")
        }
        return false;
    }
})

$('.yearlist .item').click(function(event){
    var getyear = $(this).text()
    $('.year .text').text(getyear)
    $('.yearlist').hide(1)
    
    $('.year').css('border-radius',"0 0 20px 20px")
    $('.triangle').addClass("rotate2")
    n++
    event.stopPropagation()
})

$('.yearlist .item').keypress(function (e) {
    if (e.which == 13) {
        var getyear = $(this).text()
        $('.year .text').text(getyear)
        $('.yearlist').hide(1)

        $('.year').css('border-radius', "0 0 20px 20px")
        $('.triangle').addClass("rotate2")
        n++
        event.stopPropagation()
        return false;
    }
})


$('.monthselect').click(function(){
    n++
    if(n%2 == 1){
        if($('.monthselect .triangle').hasClass("rotate2")){
　　　　　　　　$('.monthselect .triangle').removeClass("rotate2")
　　　　　}
        $('.monthselect').css('border-radius',"0")
        $('.monthselect .triangle').addClass("rotate1")
        $('.monthlist').show()
    } else {
        if($('.monthselect .triangle').hasClass("rotate1")){
　　　　　　　　$('.monthselect .triangle').removeClass("rotate1")
　　　　　} 
       
        $('.monthselect .triangle').addClass("rotate2")
        $('.monthlist').hide()
        $('.monthselect').css('border-radius',"0 0 20px 20px")
    }
})

$('.monthselect').keypress(function (e) {
    if (e.which == 13) {
        n++
        if (n % 2 == 1) {
            if ($('.monthselect .triangle').hasClass("rotate2")) {
                $('.monthselect .triangle').removeClass("rotate2")
            }
            $('.monthselect').css('border-radius', "0")
            $('.monthselect .triangle').addClass("rotate1")
            $('.monthlist').show()
        } else {
            if ($('.monthselect .triangle').hasClass("rotate1")) {
                $('.monthselect .triangle').removeClass("rotate1")
            }

            $('.monthselect .triangle').addClass("rotate2")
            $('.monthlist').hide()
            $('.monthselect').css('border-radius', "0 0 20px 20px")
        }
        return false;
    }
})


$('.monthlist .item').click(function(event){
    var getyear = $(this).text()
    $('.monthselect .text').text(getyear)
    $('.monthlist').hide(1)
    
    $('.monthselect').css('border-radius',"0 0 20px 20px")
    $('.monthselect .triangle').addClass("rotate2")
    n++
    event.stopPropagation()
})

$('.monthlist .item').keypress(function (e) {
    if (e.which == 13) {
        var getyear = $(this).text()
        $('.monthselect .text').text(getyear)
        $('.monthlist').hide(1)

        $('.monthselect').css('border-radius', "0 0 20px 20px")
        $('.monthselect .triangle').addClass("rotate2")
        n++
        event.stopPropagation()
        return false;
    }
})


$('.selectproperty').click(function(){
    n++
    if(n%2 == 1){
        if($('.typeselect .triangle').hasClass("rotate2")){
　　　　　　　　$('.typeselect .triangle').removeClass("rotate2")
　　　　　}
        $('.typeselect').css('border-radius',"0")
        $('.typeselect .triangle').addClass("rotate1")
        $('.typelist').show()
    } else {
        if($('.typeselect .triangle').hasClass("rotate1")){
　　　　　　　　$('.typeselect .triangle').removeClass("rotate1")
　　　　　} 
       
        $('.typeselect .triangle').addClass("rotate2")
        $('.typelist').hide()
        $('.typeselect').css('border-radius',"0 0 20px 20px")
    }
})

$('.selectproperty').keypress(function (e) {
    if (e.which == 13) {
        n++
        if (n % 2 == 1) {
            if ($('.typeselect .triangle').hasClass("rotate2")) {
                $('.typeselect .triangle').removeClass("rotate2")
            }
            $('.typeselect').css('border-radius', "0")
            $('.typeselect .triangle').addClass("rotate1")
            $('.typelist').show()
        } else {
            if ($('.typeselect .triangle').hasClass("rotate1")) {
                $('.typeselect .triangle').removeClass("rotate1")
            }

            $('.typeselect .triangle').addClass("rotate2")
            $('.typelist').hide()
            $('.typeselect').css('border-radius', "0 0 20px 20px")
        }
        return false;
    }
})

$('.selectproperty .item').click(function(event){
    var getyear = $(this).text()
    $('.typeselect .text').text(getyear)
    $('.typelist').hide(1)
    
    $('.typeselect').css('border-radius',"0 0 20px 20px")
    $('.typeselect .triangle').addClass("rotate2")
    n++
    event.stopPropagation()
})


$('.selectproperty .item').keypress(function (e) {
    if (e.which == 13) {
        var getyear = $(this).text()
        $('.typeselect .text').text(getyear)
        $('.typelist').hide(1)

        $('.typeselect').css('border-radius', "0 0 20px 20px")
        $('.typeselect .triangle').addClass("rotate2")
        n++
        event.stopPropagation()
        return false;
    }
})

$('.deptselect').click(function () {
    n++
    if (n % 2 == 1) {
        if ($('.typeselect .triangle').hasClass("rotate2")) {
            $('.typeselect .triangle').removeClass("rotate2")
        }
        $('.typeselect').css('border-radius', "0")
        $('.typeselect .triangle').addClass("rotate1")
        $('.deptlist').show()
    } else {
        if ($('.typeselect .triangle').hasClass("rotate1")) {
            $('.typeselect .triangle').removeClass("rotate1")
        }

        $('.typeselect .triangle').addClass("rotate2")
        $('.deptlist').hide()
        $('.typeselect').css('border-radius', "0 0 20px 20px")
    }
})

$('.deptselect').keypress(function (e) {
    if (e.which == 13) {
        n++
        if (n % 2 == 1) {
            if ($('.typeselect .triangle').hasClass("rotate2")) {
                $('.typeselect .triangle').removeClass("rotate2")
            }
            $('.typeselect').css('border-radius', "0")
            $('.typeselect .triangle').addClass("rotate1")
            $('.deptlist').show()
        } else {
            if ($('.typeselect .triangle').hasClass("rotate1")) {
                $('.typeselect .triangle').removeClass("rotate1")
            }

            $('.typeselect .triangle').addClass("rotate2")
            $('.deptlist').hide()
            $('.typeselect').css('border-radius', "0 0 20px 20px")
        }
        return false;
    }
})

$('.deptselect .item').click(function (event) {
    var getyear = $(this).text()
    $('.typeselect .text').text(getyear)
    $('.deptlist').hide(1)

    $('.typeselect').css('border-radius', "0 0 20px 20px")
    $('.typeselect .triangle').addClass("rotate2")
    n++
    event.stopPropagation()
})

$('.deptselect .item').keypress(function (e) {
    if (e.which == 13) {
        var getyear = $(this).text()
        $('.typeselect .text').text(getyear)
        $('.deptlist').hide(1)

        $('.typeselect').css('border-radius', "0 0 20px 20px")
        $('.typeselect .triangle').addClass("rotate2")
        n++
        event.stopPropagation()
        return false;
    }
})

//  年份


//地区
$('.region').click(function(){
    n++
    if(n%2 == 1){
        if($('.region .triangle').hasClass("rotate2")){
　　　　　　　　$('.region .triangle').removeClass("rotate2")
　　　　　}
        $('.region').css('border-radius',"0")
        $('.region .triangle').addClass("rotate1")
        $('.regionlist').show()
    } else {
        if($('.region .triangle').hasClass("rotate1")){
　　　　　　　　$('.region .triangle').removeClass("rotate1")
　　　　　} 
       
        $('.region .triangle').addClass("rotate2")
        $('.regionlist').hide()
        $('.region').css('border-radius',"0 0 20px 20px")
    }
})

$('.region').keypress(function (e) {
    if (e.which == 13) {
        n++
        if (n % 2 == 1) {
            if ($('.region .triangle').hasClass("rotate2")) {
                $('.region .triangle').removeClass("rotate2")
            }
            $('.region').css('border-radius', "0")
            $('.region .triangle').addClass("rotate1")
            $('.regionlist').show()
        } else {
            if ($('.region .triangle').hasClass("rotate1")) {
                $('.region .triangle').removeClass("rotate1")
            }

            $('.region .triangle').addClass("rotate2")
            $('.regionlist').hide()
            $('.region').css('border-radius', "0 0 20px 20px")
        }
        return false;
    }
})

$('.regionlist .item').click(function(event){
    var getyear = $(this).text()
    $('.region .text').text(getyear)
    $('.regionlist').hide(1)
    
    $('.region').css('border-radius',"0 0 20px 20px")
    $('.triangle').addClass("rotate2")
    n++
    event.stopPropagation()
})

$('.regionlist .item').keypress(function (e) {
    if (e.which == 13) {
        var getyear = $(this).text()
        $('.region .text').text(getyear)
        $('.regionlist').hide(1)

        $('.region').css('border-radius', "0 0 20px 20px")
        $('.triangle').addClass("rotate2")
        n++
        event.stopPropagation()
        return false;
    }
})



//地区

//  繁体简体切换
 //默认显示的语言




if (window.sessionStorage.getItem('t2s')){
    //$('.container1').t2s()
    $('.selectlanguage .lang').text('简')
}

if (window.sessionStorage.getItem('s2t')){
    //$('.container1').s2t()
    //$('.t2s').t2s()
    $('.selectlanguage .lang').text('繁')
}

$('.t2s').click(function(){
    // defaultLang = "cn",
    // languageSelect(defaultLang);
    // window.localStorage.setItem('defaultLang','cn')
    //$('.container1').t2s()
  

    var url = window.location.pathname

    var index = url.lastIndexOf('\/')
    url = url.substr(index + 1, url.length);
    console.log(url)
    url = url + '_sc.aspx'
    if (url === "_sc.aspx" || url === undefined || url === null) {
        url = 'index_sc.aspx'
    }
    console.log(url)
    window.location.href = url

    window.sessionStorage.setItem('t2s', 't2s')
    window.sessionStorage.removeItem('s2t')
   
})

$('.t2s').keypress(function (e) {
    if (e.which == 13) {
        // defaultLang = "cn",
        // languageSelect(defaultLang);
        // window.localStorage.setItem('defaultLang','cn')
        //$('.container1').t2s()


        var url = window.location.pathname

        var index = url.lastIndexOf('\/')
        url = url.substr(index + 1, url.length);
        console.log(url)
        url = url + '_sc.aspx'
        if (url === "_sc.aspx" || url === undefined || url === null) {
            url = 'index_sc.aspx'
        }
        console.log(url)
        window.location.href = url

        window.sessionStorage.setItem('t2s', 't2s')
        window.sessionStorage.removeItem('s2t')
        return false;
    }
})


//$('.s2t').click(function(){
//     defaultLang = "cn-hk",
//     languageSelect(defaultLang);
//     window.localStorage.setItem('defaultLang','cn-hk')
//    $('.container1').s2t()
//    window.localStorage.setItem('s2t','s2t')
//    window.localStorage.removeItem('t2s')
//    $('.t2s').t2s()
   
//})
//  繁体简体切换


//英语
 
    $('.tenglish').click(function(){
        var url = window.location.pathname
 
        var index = url.lastIndexOf('\/')
        url = url.substr(index + 1, url.length);
        console.log(url)
        url = url+'_en.aspx'
        if (url === "_en.aspx" || url === undefined || url === null) {
            url = 'index_en.aspx'
        }
        console.log(url)
        window.location.href =url
        window.sessionStorage.setItem('defaultLang','en')
})


$('.tenglish').keypress(function (e) {
    if (e.which == 13) {
        var url = window.location.pathname

        var index = url.lastIndexOf('\/')
        url = url.substr(index + 1, url.length);
        console.log(url)
        url = url + '_en.aspx'
        if (url === "_en.aspx" || url === undefined || url === null) {
            url = 'index_en.aspx'
        }
        console.log(url)
        window.location.href = url
        window.sessionStorage.setItem('defaultLang', 'en')
        return false;
    }
})


//英语

// dialog
//$(window).scroll(function () {
//    $('.ui-dialog').css('position', "fixed");
//    $('.ui-dialog').css('top','75px');
//});
// dialog