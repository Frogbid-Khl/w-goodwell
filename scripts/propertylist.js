if (sessionStorage.getItem('propertyTypeAndRegion')) {
    var propertyTypeAndRegion = JSON.parse(sessionStorage.getItem('propertyTypeAndRegion'))
    if (propertyTypeAndRegion.propertyType == "瀏覽所有物業" || propertyTypeAndRegion.propertyType == "") {
        propertyTypeAndRegion.propertyType = "所有物業"
    }
    if (propertyTypeAndRegion.propertyType == "浏览所有物业" || propertyTypeAndRegion.propertyType == "") {
        propertyTypeAndRegion.propertyType = "所有物业"
    }

    if (sessionStorage.getItem('t2s')) {
        propertyTypeAndRegion = t2s(propertyTypeAndRegion)
    } else if (sessionStorage.getItem('s2t')) {
        propertyTypeAndRegion = s2t(propertyTypeAndRegion)
    }

    var propertyType = propertyTypeAndRegion.propertyType
    var region = propertyTypeAndRegion.region

    createdom(propertyType, region)
}

function t2s(propertyTypeAndRegion) {
    switch (propertyTypeAndRegion.propertyType) {
        case '所有物業':
            propertyTypeAndRegion.propertyType = "所有物业";
            break;
        case '住宅物業':
            propertyTypeAndRegion.propertyType = "住宅物业";
            break;
        case '工商物業':
            propertyTypeAndRegion.propertyType = "工商物业";
            break;
        case '購物商場':
            propertyTypeAndRegion.propertyType = "购物商场";
            break;
        case '種類':
            propertyTypeAndRegion.propertyType = "种类";
            break;
        case 'All Properties':
            propertyTypeAndRegion.propertyType = "所有物业";
            break;
        case 'Residential Properties':
            propertyTypeAndRegion.propertyType = "住宅物业";
            break;
        case 'Industrial and Commercial Properties':
            propertyTypeAndRegion.propertyType = "工商物业";
            break;
        case 'Shopping Malls':
            propertyTypeAndRegion.propertyType = "购物商场";
            break;
        case 'Property Types':
            propertyTypeAndRegion.propertyType = "种类";
            break;
    }
    switch (propertyTypeAndRegion.region) {
        case '地區':
            propertyTypeAndRegion.region = "地区";
            break;
        case '所有地區':
            propertyTypeAndRegion.region = "所有地区";
            break;
        case '新界':
            propertyTypeAndRegion.region = "新界";
            break;
        case '九龍':
            propertyTypeAndRegion.region = "九龙";
            break;
        case '香港島':
            propertyTypeAndRegion.region = "香港岛";
            break;
        case 'Regions':
            propertyTypeAndRegion.region = "地区";
            break;
        case 'All Regions':
            propertyTypeAndRegion.region = "所有地区";
            break;
        case 'New Territories':
            propertyTypeAndRegion.region = "新界";
            break;
        case 'Kowloon':
            propertyTypeAndRegion.region = "九龙";
            break;
        case 'Hong Kong Island':
            propertyTypeAndRegion.region = "香港岛";
            break;
    }

    return propertyTypeAndRegion
}

function s2t(propertyTypeAndRegion) {
    switch (propertyTypeAndRegion.propertyType) {
        case '所有物业':
            propertyTypeAndRegion.propertyType = "所有物業";
            break;
        case '住宅物业':
            propertyTypeAndRegion.propertyType = "住宅物業";
            break;
        case '工商物业':
            propertyTypeAndRegion.propertyType = "工商物業";
            break;
        case '购物商场':
            propertyTypeAndRegion.propertyType = "購物商場";
            break;
        case '种类':
            propertyTypeAndRegion.propertyType = "種類";
            break;
        case 'All Properties':
            propertyTypeAndRegion.propertyType = "所有物業";
            break;
        case 'Residential Properties':
            propertyTypeAndRegion.propertyType = "住宅物業";
            break;
        case 'Industrial and Commercial Properties':
            propertyTypeAndRegion.propertyType = "工商物業";
            break;
        case 'Shopping Malls':
            propertyTypeAndRegion.propertyType = "購物商場";
            break;
        case 'Property Types':
            propertyTypeAndRegion.propertyType = "種類";
            break;
    }
    switch (propertyTypeAndRegion.region) {
        case '地区':
            propertyTypeAndRegion.region = "地區";
            break;
        case '所有地区':
            propertyTypeAndRegion.region = "所有地區";
            break;
        case '新界':
            propertyTypeAndRegion.region = "新界";
            break;
        case '九龙':
            propertyTypeAndRegion.region = "九龍";
            break;
        case '香港岛':
            propertyTypeAndRegion.region = "香港島";
            break;
        case 'Regions':
            propertyTypeAndRegion.region = "地區";
            break;
        case 'All Regions':
            propertyTypeAndRegion.region = "所有地區";
            break;
        case 'New Territories':
            propertyTypeAndRegion.region = "新界";
            break;
        case 'Kowloon':
            propertyTypeAndRegion.region = "九龍";
            break;
        case 'Hong Kong Island':
            propertyTypeAndRegion.region = "香港島";
            break;
    }

    return propertyTypeAndRegion
}


function createdom(propertyType, region) {
    $.each($('.items .bottom .item'), function (index, value) {
        var p = $(value).attr('propertytype')
        var c = $(value).attr('region')

        if (propertyType == "所有物業" || propertyType == "所有物业") {
            if (region == "所有地區" || region == "所有地区") {
                $(value).attr('style', 'margin-right: 0;display:block;')
            } else {
                if (c == region) {
                    $(value).attr('style', 'margin-right: 0;display:block;')
                } else {
                    $(value).attr('style', 'margin-right: 0;display:none;')
                }
            }
        } else {
            if (p == propertyType) {
                if (region == "所有地區" || region == "所有地区") {
                    $(value).attr('style', 'margin-right: 0;display:block;')
                } else {
                    if (c == region) {
                        $(value).attr('style', 'margin-right: 0;display:block;')
                    } else {
                        $(value).attr('style', 'margin-right: 0;display:none;')
                    }
                }
            } else {
                $(value).attr('style', 'margin-right: 0;display:none;')
            }
        }
    });

    $('.area .type').text(propertyType)
    $('.area .typeselect .text').text(propertyType)
    $('.area .region .text').text(region)

    sessionStorage.setItem('propertyTypeAndRegion', JSON.stringify({ propertyType: propertyType, region: region }))
}

$('.typelist .item').click(function () {
    var propertyType = $(this).text().trim()

    if (propertyType == "購物商場" || propertyType == "购物商场") {
        $('.regionlist .item:contains(香港島)').css('display', 'none')
        $('.regionlist .item:contains(香港岛)').css('display', 'none')
    }
    else {
        $('.regionlist .item:contains(香港島)').css('display', 'block')
        $('.regionlist .item:contains(香港岛)').css('display', 'block')
    }

    var region = $('.area .region .text').text().trim()

    setTimeout(function () {
        createdom(propertyType, region)
    }, 100);
})

$('.regionlist .item').click(function () {
    var region = $(this).text().trim()
    var propertyType = $('.typeselect .text').text()

    if (propertyType == "購物商場" || propertyType == "购物商场") {
        $('.regionlist .item:contains(香港島)').css('display', 'none')
        $('.regionlist .item:contains(香港岛)').css('display', 'none')
    }
    else
    {
        $('.regionlist .item:contains(香港島)').css('display', 'block')
        $('.regionlist .item:contains(香港岛)').css('display', 'block')
    }

    setTimeout(function () {
        createdom(propertyType, region)
    }, 100)
})



$('.typelist .item').keypress(function (e) {
    if (e.which == 13) {
        var propertyType = $(this).text().trim()

        if (propertyType == "購物商場" || propertyType == "购物商场") {
            $('.regionlist .item:contains(香港島)').css('display', 'none')
            $('.regionlist .item:contains(香港岛)').css('display', 'none')
        }

        var region = $('.area .region .text').text().trim()

        setTimeout(function () {
            createdom(propertyType, region)
        }, 100);
    }
})

$('.regionlist .item').keypress(function (e) {
    if (e.which == 13) {
        var region = $(this).text().trim()
        var propertyType = $('.typeselect .text').text()

        if (propertyType == "購物商場" || propertyType == "购物商场") {
            $('.regionlist .item:contains(香港島)').css('display', 'none')
            $('.regionlist .item:contains(香港岛)').css('display', 'none')
        }

        setTimeout(function () {
            createdom(propertyType, region)
        }, 100)
    }
})