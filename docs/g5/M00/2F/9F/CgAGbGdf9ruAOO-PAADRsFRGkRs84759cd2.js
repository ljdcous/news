(function(op){var effect1=function(){var head=$('#xg_header');var an=function(){if(document.documentElement.scrollTop+document.body.scrollTop>head.height()){head.css('opacity',0);}else{head.css('opacity',1);}}
head.hover(function(){head.css('opacity',1);},an);page.scroll(an);head.on('mousemove',function(){$(this).css('opacity',1);});$(an);}
if(page.currentDevice()==1){if(op.pcEffect==2){effect1();}}else{}})({'pcEffect':0,'mobileEffect':0});
var menu=function(obj,options){var cssAColor='';var addClass=function(el,className){el.addClass(className);if(el.css('color')&&cssAColor.indexOf('.'+className)==-1){cssAColor+='.'+className+' a{color:'+el.css('color')+';}';}}
var nid=parseInt(util.queryString('nid'));if(isNaN(nid)){nid=0;}
if(nid>0){var navi=obj.find('li[data-nid='+nid+']');var tid=parseInt(util.queryString('typeid'));if(isNaN(tid)){tid=parseInt(util.queryString('tid'));}
var li=obj.children('.xg_menuUl').children('li[data-tid='+tid+']');if(li.length>0){addClass(li,li.attr('class').split(' ')[0]+'-select');}else if(navi.length>0){addClass(navi,navi.attr('class').split(' ')[0]+'-select');if(tid>0){var li=navi.find('li[data-tid='+tid+']');if(li.length>0){addClass(li,li.attr('class').split(' ')[0]+'-select');li.parentsUntil('.xg_menu','li').each(function(){addClass($(this),$(this).attr('class').split(' ')[0]+'-select');actived=true;return false;});}}}}else{var url=util.createUrl();if(url.replace(document.location.host,'').indexOf('.')==-1||url.indexOf('index.aspx')>0){var home=obj.find('li[home=1]');if(home.length>0){addClass(home,home.attr('class').split(' ')[0]+'-select');}}}
if(cssAColor){var style=document.createElement('style');style.type='text/css';style.innerText=cssAColor;document.head.appendChild(style);}
var showType=obj.data('mobileshoweffect');obj.find('.xg_menuMobile .xg_memu_btn').on('click',function(){options.mobileMenuEffect.show(obj);if(util.isNullOrEmpty($('body').attr('style'))||(!util.isNullOrEmpty($('body').attr('style')&&$('body').attr('style').indexOf('overflow-y')==-1))){$('body').css('overflow-y','hidden');$('body').attr('data-overflow',true);}else{$('body').attr('data-overflow',false);}
if(showType==0||showType==2){$(this).next().css({'left':'0px'});}else if(showType==1||showType==3){$(this).next().css({'top':'0px'});}
setTimeout(function(){obj.find('img').lazyload();},300);});obj.find('.xg_menuShade').on('click',function(){if($('body').data('overflow')){$('body').css('overflow-y','');}
$('body').removeAttr('data-overflow');var css={};if(showType==0){css={'left':'-100%'};}else if(showType==1){css={'top':'-100%'};}else if(showType==2){css={'left':'100%'};}else if(showType==3){css={'top':'100%'};}
$(this).parent().css(css);options.mobileMenuEffect.hide(obj);});var design=util.inDesign();if(design){if(obj.find('.xg_menutop').children().length==0){obj.find('.xg_menutop').html('<div class="no_content_add"><span class="no_content_add_span">可拖动行到此</span></div>');}
if(obj.find('.xg_menubottom').children().length==0){obj.find('.xg_menubottom').html('<div class="no_content_add"><span class="no_content_add_span">可拖动行到此</span></div>');}}
var device=page.currentDevice();if(device==2){options.mobileMenuEffect.init(obj);if(obj.data('mobilelisttype')==2){var mobile=obj.find('.xg_menuMobile');mobile.children('.xg_menuPanel').find('ul').show();mobile.find('.xg_menuUl').css({'height':'100%','overflow-y':'auto'});return;}}
obj.children('.xg_menuMobile').find('.xg_menuTitle1,.xg_menuTitle2,.xg_menuTitle3,.xg_menuTitle4').on('click',function(e){var ul=$(this).next();if(ul.length==0){return true;}
ul.slideToggle();return true;});if(device==1&&obj.data('droptype')=='1'){var ul=obj.children('.xg_menuUl');var needEffect=obj.data('effect');if(!needEffect){needEffect=0;}
var menulis=ul.children('li');var droplist=obj.children('.xg_dropdownlist');if(design){var html='';if(droplist.length==0){html='<div class=\'xg_dropdownlist\'>';}
obj.children('.xg_menuUl').children('li').each(function(){var id=$(this).data('nid');var type='n';if(!id){id=$(this).data('tid');type='t';}
if($(this).attr('home')||droplist.children('div[data-rid='+id+']').length>0){return;}
html+='<div class=\'xg_navi_template\' data-rid=\''+id+'\' data-type=\'element\' data-tag=\'NavigateItem\' client-index=\'{"clientIndex":"'+obj.attr('client-index')+'","cmd":1,"dataType":"'+type+'","nid":'+id+'}\'><div class=\'no_content_add\'><span>当前下拉菜单中无内容，访客访问将不显示当前下拉菜单</span></div></div>';});if(droplist.length==0){html+='</div>';obj.append(html);droplist=obj.children('.xg_dropdownlist');}else{droplist.append(html);}
menulis.on('click',function(){var _this=$(this);setTimeout(function(){if(!selector._element.innerSelect){return;}
var id=_this.data('nid');if(!id){id=_this.data('tid');}
if(!id){return;}
var mWidth=$(this).parents('.xg_header').width();droplist.css({'width':document.documentElement.clientWidth+'px','height':'auto','display':'block','min-width':mWidth+'px','position':'absolute','top':ul.height()+'px'});if(droplist.offset().left!=0){var mLeft=parseInt(droplist.css('margin-left'));isNaN(mLeft)&&(mLeft=0);var left=mLeft-droplist.offset().left;droplist.css({'margin-left':left+'px'});}
var list=droplist.children('[data-rid='+id+']');if(list.length==0){return;}
if(list.css('display')=='block'){list.hide();}else{list.show().siblings().hide();}},150);});}else if(droplist.length>0){menulis.hover(function(){clearTimeout($(this).data('menuHide'));var id=$(this).data('nid');if(!id){id=$(this).data('tid');}
if(!id){return;}
var mWidth=$(this).parents('.xg_header').width();droplist.css({'width':document.documentElement.clientWidth+'px','height':'auto','display':'block','min-width':mWidth+'px','position':'absolute','top':ul.height()+'px'});if(droplist.offset().left!=0){var mLeft=parseInt(droplist.css('margin-left'));isNaN(mLeft)&&(mLeft=0);var left=mLeft-droplist.offset().left;droplist.css({'margin-left':left+'px'});}
var list=droplist.children('[data-rid='+id+']');if(list.length==0){return;}
list.siblings().hide();if(needEffect==0){list.show();}else{list.stop().slideDown('fast');}},function(){var _this=$(this);var id=_this.data('nid');if(!id){id=_this.data('tid');}
if(!id){return;}
var list=droplist.children('[data-rid='+id+']');if(list.length==0){return;}
clearTimeout(_this.data('menuHide'));_this.data('menuHide',setTimeout(function(){if(needEffect==0){list.hide();}else{list.stop().slideUp('fast');}},120));});droplist.children('div').hover(function(){var id=$(this).data('rid');menulis.each(function(){var _that=$(this);var mid=_that.data('nid');if(!mid){mid=_that.data('tid');}
if(mid==id||mid==id){clearTimeout(_that.data('menuHide'));}});},function(){if(needEffect==0){$(this).hide();}else{$(this).stop().slideUp('fast');}});}}}
var h5video={init:function(obj){var video=obj.find('video');var btn=obj.find('.xg_video_button').find('img');var device=page.currentDevice();var showBtn=obj.data('mobilebutton')=='1'?true:false;if(device==1){btn.parent().remove();}else if(showBtn&&device==2){video.removeAttr('controls');}
if(showBtn){obj.find('.xg_video_button').show();var videoMove=function(){if(btn.parent().data('play')!='1'){video.get(0).play();return;}
video.get(0).pause();}
btn.parent().bind('click',videoMove);video.on('click',videoMove);}
video.bind('play',function(){if(showBtn){btn.attr('src','https://1.rc.xiniu.com/img/zh_toolbox/pc/video_stop.png');btn.parent().data('play','1').css({'opacity':'0','cursor':'pointer'}).hide();}
var slick=obj.parents('.slick-initialized');if(slick.length>0){slick.slick('slickPause');}});video.bind('pause',function(){if(showBtn){btn.attr('src','https://1.rc.xiniu.com/img/zh_toolbox/pc/video_play.png');btn.parent().data('play','0').css('opacity','0.5').show();}
var slick=obj.parents('.slick-initialized');if(slick.length>0&&slick.data('autoplay')){slick.slick('slickPlay');}});video.bind('ended',function(){var slick=obj.parents('.slick-initialized');if(slick.length>0&&slick.data('autoplay')){slick.slick('slickPlay');}});if(page.currentDevice()==1){if(video.data('autoplay')=='autoplay'){video.get(0).play();}}}}
var banner={init:function(panel){banner.autoChange(panel);var adaptive=panel.data('adaptive');var firstImg=panel.find('img:first');firstImg.addClass('lazyload');firstImg.one('animationend webkitAnimationEnd oAnimationEnd webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){firstImg.removeClass('lazyload');});firstImg.one('load',function(e){var maxWidth=e&&e.target?e.target.width:0;var op=banner.getOptions(panel);op.onAfterChange=banner.afterChange;op.centerPadding='0px';op.index=0;op.pcMouseTouch=true;if(typeof op.animaType=='undefined'||op.animaType==1){if(typeof myBannerOption!='undefined'){op=myBannerOption(op);}
var sc=panel.slick(op);panel.on('beforeChange',function(event,slick,currentSlide,nextSlide){slick.$slides.eq(currentSlide).find('[data-eventid]').trigger('screenout');if(typeof myBannerBeforeChange!='undefined'){myBannerBeforeChange(slick,currentSlide,nextSlide);}});panel.on('afterChange',function(event,slick,currentSlide,nextSlide){var container=slick.$slides.eq(currentSlide);var device=page.currentDevice();var hideClass=(device==1?'pc_an_hide':'mobile_an_hide');setTimeout(function(){container.find('[data-anids]').each(function(){var ok=false;String($(this).data('anids')).split(',').forEach(function(item){if(!ok&&animation.anFindEvent(item)){ok=true;}});if(ok){$(this).removeClass(hideClass);}});},17);container.find('[data-eventid]').trigger('screenin');container.siblings().find('[data-anids]').each(function(){animation.removeAllAn($(this));var ok=false;String($(this).data('anids')).split(',').forEach(function(item){if(!ok&&animation.anFindEvent(item)){ok=true;}});if(ok){$(this).removeClass(hideClass).addClass(hideClass);}});if(typeof myBannerAfterChange!='undefined'){myBannerAfterChange(slick,currentSlide,nextSlide);}});$(function(){setTimeout(function(){setTimeout(function(){sc.find('.slick-current').find('[data-anids]').each(function(){$(this).removeClass(hideClass);});},17);sc.find('.slick-current').find('[data-eventid]').trigger('screenin');},100);});}else{var relwidth=panel.data('width');var relheight=panel.data('height');var width=panel.width();var height=panel.height();if(width>relwidth){width=relwidth;op.Width=relwidth;}
if(height>relheight){height=relheight;op.Height=relheight;}
if(typeof myBannerOption!='undefined'){op=myBannerOption(op);}
banner.initshutter(op);panel.find('.xg_banner_item').addClass('xg_banner_show');if(width>relwidth){panel.find('.shutter').css({'width':width+'px','height':height+'px','margin-left':'auto','margin-right':'auto','overflow':'hidden'});}}
banner.resize(panel);var hideClass=(page.currentDevice()==1?'pc_an_hide':'mobile_an_hide');var ans=[];panel.find('[data-anids]').each(function(){var ok=false;String($(this).data('anids')).split(',').forEach(function(item){if(!ok&&animation.anFindEvent(item)){ok=true;}});if(ok){$(this).addClass(hideClass);ans.push($(this));}});panel.find('.container').on('click',function(e){if(util.inDesign()){return;}
var a=$(this).prev().find('a');util.openUrl(a.attr('href'),a.attr('target'));e.stopPropagation();});});if(firstImg.length>0&&firstImg.parent().is('picture')&&firstImg.get(0).complete){firstImg.trigger('load');};panel.find('img').each(function(){banner.loadImage($(this));});},documentWidth:function(container){if(page.currentDevice()==2){return document.documentElement.clientWidth;};var zoom=parseFloat($('html').get(0).style.zoom)||1;var width=document.documentElement.clientWidth/zoom;if(container.parents('#xg_banner').length==1){var bannerWidth=$('#xg_banner').attr('width');if(bannerWidth!='100%'&&(parseInt(bannerWidth)||0)>0){var bw=parseInt(bannerWidth);if(zoom!=1||document.documentElement.scrollWidth!=document.documentElement.clientWidth){width=bw;}else if(bw<width){width=bw;}
console.log('pc banner area fix width:'+width);}}
return width;},imgSrc:function(img){var data=$(img).data('src');if(data){var src=data.split(',');if(src.length==1){return src[0].split(' ')[0];}
if(page.currentDevice()==1){return src[0].split(' ')[0];}else{return src[1].split(' ')[0];}}else{return'';}},afterChange:function(){},loadImage:function(obj){var src=banner.imgSrc(obj);if(!src)
return;if(banner.imgCached(src)){$(obj).attr('src',src);}else{setTimeout(function(){$(obj).attr('src',src);},0);}},imgCached:function(src){var img=new Image();img.src=src;if(img.complete){return true;}
return false;},getOptions:function(panel){if(!panel){typeof console=='undefined'&&console.log('banner不存在');return;}
var op={};var data=panel.data('autoplay');if(data){op.autoplay=true;op.autoplaySpeed=data;}
if(!util.inDesign()){op.pauseOnHover=false;}
data=panel.data('loop');data&&(op.infinite=data=='1'?true:false);data=panel.data('dots');if(data=='1'){op.dots=true;}else{op.dots=false;}
data=panel.data('arrows');if(data=='1'){op.arrows=true;}else{op.arrows=false;}
data=panel.data('effect');op.animaType=data;op.speed=panel.data('speed')*1000==0?1000:panel.data('speed')*1000;if(typeof data=='undefined'||data=='1'){op.fade=false;op.cssEase='ease';}
op.variableWidth=true;op.centerMode=true;op.responsive=[{breakpoint:page.splitMobileWidth,settings:{arrows:false,variableWidth:false,centerMode:false}}];data=panel.data('mobilarrow');if(data=='1'){op.responsive[0].settings.arrows=true;op.mobilarrow=true;}
data=panel.data('width');if(typeof data=='undefined'){op.Width=1920;}else{op.Width=data;}
data=panel.data('height');if(typeof data=='undefined'){op.Height=600;}else{op.Height=data;}
return op;},autoChangeWidth:function(container){var device=page.currentDevice();if(device==2&&util.inDesign()){$('html').addClass('xg_scrollwidth');}
if(parent!=window){if(device==2){container.css({'width':container.parent().width()+'px'});}else{container.css({'width':''});}}else if(page.currentDevice()==1){container.css({'width':''});}},resize:function(container){var device=page.currentDevice();var relwidth=container.data('width');var relheight=container.data('height');var width=banner.getWidth(container);var height=container.height();var adaptive=container.data('adaptive');if(device==2){relwidth=width;height=relheight=container.width()/(parseInt(container.data('scalheight'))/100);}else{if(typeof relwidth=='undefined'){relwidth=1920;}
if(typeof relheight=='undefined'){relheight=600;}
if(!adaptive&&height>relheight){height=relheight;}}
if(device==2){height=width/(parseInt(container.data('scalheight'))/100);}else if(adaptive){height=relheight/relwidth*width;}
if(!adaptive&&device==1){container.css('height','');}else{if(device==2){container.css({'height':height+'px','width':width+'px'});}else{container.css({'height':(relheight/relwidth*width)+'px','width':width+'px'});}}
container.find('.xg_banner_item').css({'width':width+'px','height':height+'px','max-width':width+'px','max-height':height+'px','min-width':width+'px','min-height':height+'px'});if(parent.$('#preview_page').length>0){setTimeout(function(){container.find('.xg_banner_item').css({'width':width,'height':height,'max-width':width,'max-height':height,'min-width':width,'min-height':height});},40);}
if(device==1){if(container.data('effect')==1){container.find('.slick-list').css({'width':width+'px','height':height+'px','margin-left':'auto','margin-right':'auto','overflow':'hidden'});if(adaptive){container.find('.xg_banner_img').css({'max-width':'100%','height':'100%','margin-left':'auto','margin-right':'auto'});container.find('.xg_banner_img img').css({'width':'100%','height':'100%','min-width':'','max-width':'','min-height':'','left':'','margin-left':'','top':'','margin-top':''});}else{container.find('.xg_banner_img').css({'max-width':relwidth+'px','max-height':relheight+'px','margin-left':'auto','margin-right':'auto'});container.find('.xg_banner_img img').css({'width':relwidth+'px','height':relheight+'px','min-width':relwidth+'px','min-height':relheight+'px','max-width':'','left':'50%','position':'relative','margin-left':(-1*relwidth/2)+'px'});}}else if(adaptive){container.find('.xg_banner_img').css({'max-width':'100%','height':'100%','margin-left':'auto','margin-right':'auto'});container.find('.xg_banner_img img').css({'width':'100%','height':'100%','position':'relative','min-width':'','min-height':'','max-width':'','left':'','margin-left':'','top':'','margin-top':''});}else{container.find('.xg_banner_img').css({'max-width':relwidth+'px','max-height':relheight+'px','margin-left':'auto','margin-right':'auto'});container.find('.xg_banner_img img').css({'width':relwidth+'px','height':relheight+'px','min-width':relwidth+'px','min-height':relheight+'px','max-width':'','left':'50%','top':'50%','position':'relative','margin-left':(-1*relwidth/2)+'px','margin-top':(-1*relheight/2)+'px'});}}else{container.find('.xg_banner_img').css({'max-width':'100%','height':'100%','margin-left':'auto','margin-right':'auto'});container.find('.xg_banner_img img').css({'width':'100%','height':'100%','position':'relative','min-width':'','max-width':'100%','min-height':'','left':'','margin-left':'','top':'','margin-top':''});}},autoChange:function(container){var pcAdaptive=container.data('adaptive');if(parent!=window&&page.currentDevice()==2&&container.parent().width()==banner.getWidth(container)){var width=container.parent().width();width=screen.width<width?screen.width:width;container.css({'width':width+'px',});}
container.data('device',page.currentDevice());var resize=function(){var device=page.currentDevice();var changedDeivce=device!=container.data('device');banner.autoChangeWidth(container);banner.resize(container);if(device==1){container.slick&&container.slick('unload');container.slick&&container.slick('reinit');}
if(!changedDeivce){return;}
container.data('device',device);container.find('.xg_banner_img img').each(function(i){banner.loadImage($(this));});setTimeout(resize,150);}
$(window).on('resize',resize);resize();},getWidth:function(container){if(page.currentDevice()==2){return banner.documentWidth(container);}
var width=0;if(container.parents('#xg_banner').length==0){container.parentsUntil(document.body).each(function(){var thisWidth=$(this).width();if(width==0&&thisWidth>0){width=thisWidth;}});console.log('pc banner width compute result:'+width);}else{width=banner.documentWidth(container);}
return width;},initshutter:function(option){option.shutterW=option.Width;option.shutterH=option.Height;option.isAutoPlay=option.autoplay;option.playInterval=option.autoplaySpeed;option.curDisplay=0;option.fullPage=false;option.dotsNav=option.dots;option.arrows=option.arrows;option.animaType=option.animaType;option.duration=option.speed;option.mobilarrow=option.mobilarrow;option.currentDevice=page.currentDevice();$('.shutter').shutter(option);}}
var configc31b626217045103={"autoPlay":"true","pc_slidesToShow":"4","pc_slidesToScroll":"4","arrows":"true","m_slidesToShow":"12","m_slidesToScroll":"12","dots":"true","m_arrows":"false","row":"1","slidesPerRow":"3","m_row":"4","m_slidesPerRow":"3","speed":"1000","infinite":"true","pc_mouseTouch":"false","centerMode":"false","centerPadding":"150px","m_centerPadding":"80px","onBeforeChange":" ","onAfterChange":" ","pauseOnHover":"true"};(function(root,config){var container = root.find(".xg_list:first");
var slick = root.find(".data_row:first");
root.find(".row").css("visibility", "hidden");
slick.data("currentDevice", 0);
function main() {
	setTimeout(function () {
		play();
	}, 2000);
}

var play = function () {
	if (config.autoPlay) {
		slick.slick('slickPlay');
	}
}

function init() {
	config.autoPlay = util.toBool(config.autoPlay);
	config.infinite = util.toBool(config.infinite);
	config.speed = util.toInt(config.speed) == 0 ? 1000 : util.toInt(config.speed);
	config.autoplaySpeed = util.toInt(config.autoplaySpeed) == 0 ? 3000 : util.toInt(config.autoplaySpeed);
	config.centerPadding = config.centerPadding ? config.centerPadding : "150px";
	config.m_centerPadding = config.m_centerPadding ? config.m_centerPadding : "80px";
	config.pauseOnHover = util.inDesign() ? true : util.toBool(config.pauseOnHover);
	if (slick.children().length > 0 && slick.data("currentDevice") != 0 && slick.find(".slick-list").length > 0) {
		slick.slick('destroy');
	}

	var loaded = false;
	var load = function () {
		if (loaded) {
			return;
		}

		var options = {
			autoplay: false, //自动播放
			autoplaySpeed: config.autoplaySpeed, //自动播放速度
			arrows: config.arrows, //上一页下一页箭头
			infinite: config.infinite, //循环播放
			speed: config.speed, //滑动时间
			adaptiveHeight: false,
			pauseOnHover: config.pauseOnHover, //鼠标悬停暂停
			cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.950)',
			onBeforeChange: config.onBeforeChange,
			onAfterChange: config.onAfterChange,
			syncloadImage: true
		};
		if (typeof mySlickOption != 'undefined') {
			options = mySlickOption(options,root);
		}
		if (options.syncloadImage) {
			root.find("img").each(function () {
				var src = $(this).data("src");
				if (!$(this).attr("src")) {
					$(this).attr("src", src);
				}
			});
		}
		options.dots = util.toBool(config.dots); //隐藏点点
		options.pcMouseTouch = util.toBool(config.pc_mouseTouch);
		options.centerMode = util.toBool(config.centerMode);
		var device = page.currentDevice();
		if (device == 2) {
			options.arrows = util.toBool(config.m_arrows); //上一页下一页箭头
			options.centerPadding = config.m_centerPadding;
		} else {
			options.arrows = util.toBool(config.arrows); //上一页下一页箭头
			options.centerPadding = config.centerPadding;
		}
		var rows = device == 2 ? config.m_row : config.row;
		if (rows <= 1) {
			if (device == 2) {
				options.slidesToShow = util.toInt(config.m_slidesToShow) == 0 ? 3 : util.toInt(config.m_slidesToShow); //幻灯片每屏显示个数
				options.slidesToScroll = util.toInt(config.m_slidesToScroll) == 0 ? 3 : util.toInt(config.m_slidesToScroll); //	幻灯片每次滑动个数
			} else {
				options.slidesToShow = util.toInt(config.pc_slidesToShow) == 0 ? 4 : util.toInt(config.pc_slidesToShow); //幻灯片每屏显示个数
				options.slidesToScroll = util.toInt(config.pc_slidesToScroll) == 0 ? 4 : util.toInt(config.pc_slidesToScroll); //	幻灯片每次滑动个数
			}
		} else {
			if (device == 2) {
				if (config.m_slidesPerRow) {
					options.slidesPerRow = config.m_slidesPerRow;
				}
			} else {
				if (config.slidesPerRow) {
					options.slidesPerRow = config.slidesPerRow;
				}
			}

			options.rows = rows;
		}

		loaded = true;
		slick.on('init', function (s) {
			slick.find(".slick-dots li").addClass("slick-dots-point");
			$(slick.currentTarget).show();
			setTimeout(function () {
				root.find(".row").css("visibility", "visible");
			}, 100);
		}).slick(options);
		slick.data("currentDevice", page.currentDevice());
	}
	load();
}

function reloadSlick() {
	container.data("tabload", "0");
	if (slick.data("currentDevice") && slick.data("currentDevice") != page.currentDevice()) {
		init();
		main();
	}
	slick.slick('unload');
	slick.slick('reinit');
}

page.resize(reloadSlick);

page.registeTabReload.push(function (tabItem, index) {
	var find = false;
	var isInTab = false;//是否同一TAB里
	container.parents().each(function () {
		if ($(this).is(tabItem)) {
			find = true;
		} else if ($(this).is(tabItem.parent())) {
			isInTab = true;
		}
	});

	if (find) {
		if (container.data("tabload") == "1") {
			if (config.autoPlay) {
				slick.slick('slickPlay'); //继续播放
			}
		} else {
			container.data("tabload", "1");
			init();
			main();
		}
	} else if (isInTab) {
		setTimeout(function () {
			slick.slick('slickPause'); //暂停
		}, 1000);
	}
});
var inTab = false;
container.parents().each(function () {
	if ($(this).hasClass("xg_tab_tt") && $(this).data("index") != 0) {
		inTab = true;
	}
});
if (!inTab) {
	init();
}
$(main);})($('#cc31b626217045103'),configc31b626217045103);
var myplayer={play:function(video){myplayer.debug=false;var config=video.data('config');if(!config){return;}
var op=eval('('+config+')');var preview=video.data('preview');if(preview){var images=[];preview.split(',').forEach(function(item){images.push(item);});op.preview={file:images,scale:1};}
var promptSpot=video.data('promptspot');try{promptSpot&&(op.promptSpot=eval('('+promptSpot+')'));}catch(er){util.log('提示点配置错误');}
if(op.video&&op.video.indexOf('.flv')>0&&!/^http/.test(op.video)){var url=util.createUrl(null,false,[],[]);if(/^\//.test(op.video)){op.video=url.substr(0,url.indexOf('/',8))+op.video;}else{op.video=url.substr(0,url.indexOf('/',8)+1)+op.video;}}
myplayer.init(op);},init:function(config){var id='ckplayer'+Math.random().toString().replace('0.','');typeof window.players=='undefined'&&(window.players={});var current=window.players[id]={};current.loadedHandler=function(){current.player.addListener('error',myplayer.errorHandler);current.player.addListener('ended',myplayer.endedHandler);current.player.addListener('duration',myplayer.durationHandler);current.player.addListener('time',myplayer.timeHandler);current.player.addListener('full',myplayer.fullHandler);current.player.addListener('play',myplayer.playHandler);current.player.addListener('pause',myplayer.pauseHandler);current.player.addListener('buffer',myplayer.bufferHandler);}
current.config={playerID:id,variable:'player',loaded:'myplayer.loadedHandler',loop:false,autoplay:false,config:'',debug:false,flashplayer:false,drag:'start',seek:0,live:false,mobileCkControls:true,};$.extend(current.config,config);if(page.currentDevice()==2){current.config.autoplay=false;}
current.config.loaded='players[\''+id+'\'].loadedHandler';current.player=new ckplayer(current.config);if((page.currentDevice()==1&&!config.showControl)||(page.currentDevice()==2&&!config.mobileCkControls)){setTimeout(function(){current.player.changeControlBarShow(false)},20);}},tabChange:function(id){var video=$('#'+id);var first=video.children().first();if(first.attr('class').indexOf('ckplayer')==-1){return;}
var left=first.width()/2;var top=first.height()/2;first.children('div').each(function(){if($(this).attr('class').indexOf('pausecenter')==0){$(this).css({'left':(left-$(this).width()/2)+'px','top':(top-$(this).height()/2)+'px'});}});},prev:function(){myplayer.msg('上一集,config配置：front属性');},next:function(){myplayer.msg('下一集,config配置：next属性');},errorHandler:function(){myplayer.msg('状态：视频加载错误，停止执行其它动作，等待其它操作');},endedHandler:function(){myplayer.msg('状态：播放结束');},durationHandler:function(duration){myplayer.msg('视频总时间'+duration);},timeHandler:function(time){myplayer.msg('当前时间'+time);},fullHandler:function(b){window.fullscrren=b;if(b){html='全屏';}else{html='非全屏';}
myplayer.msg('切换到'+html);},playHandler:function(){myplayer.msg('开始播放');},pauseHandler:function(){myplayer.msg('暂停播放');},bufferHandler:function(buffer){myplayer.msg('已缓冲百分之'+buffer);},msg:function(message){if(!myplayer.debug)
return;util.log(message);}}
$(function(){
  
  
    
    var $xl1 = $('#i13e2a5d2bb2cb449');  
    var $xl1_xx = $('#i13e2a5d2bb2cb449').siblings().children().children().children('p');
    var $xl1_text = ''; 
    
    $('.p1700m37dce485e33d059a>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl1.siblings('.row').children().hide();
    $xl1.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl1_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700m37dce485e33d059a>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl1_text = $(this).text().trim();
      $xl1.children('p').text($xl1_text);
      $xl1.siblings().children().hide();
      return false;
    })
    
    
    var $xl2 = $('#idd98bd4984a6cd80');  
    var $xl2_xx = $('#idd98bd4984a6cd80').siblings().children().children().children('p');
    var $xl2_text = ''; 
    
    $('.p1700m1117749af4a8525a>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl2.siblings('.row').children().hide();
    $xl2.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl2_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700m1117749af4a8525a>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl2_text = $(this).text().trim();
      $xl2.children('p').text($xl2_text);
      $xl2.siblings().children().hide();
      return false;
    })
    
    
    var $xl3 = $('#i43aab51c551287c5');  
    var $xl3_xx = $('#i43aab51c551287c5').siblings().children().children().children('p');
    var $xl3_text = ''; 
    
    $('.p1700mcb2fa30192a4b990>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl3.siblings('.row').children().hide();
    $xl3.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl3_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700mcb2fa30192a4b990>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl3_text = $(this).text().trim();
      $xl3.children('p').text($xl3_text);
      $xl3.siblings().children().hide();
      return false;
    })
    
    
    var $xl4 = $('#i75b983885b8a18c3');  
    var $xl4_xx = $('#i75b983885b8a18c3').siblings().children().children().children('p');
    var $xl4_text = ''; 
    
    $('.p1700m8c7bc3d2626ac142>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl4.siblings('.row').children().hide();
    $xl4.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl4_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700m8c7bc3d2626ac142>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl4_text = $(this).text().trim();
      $xl4.children('p').text($xl4_text);
      $xl4.siblings().children().hide();
      return false;
    })
    
    
    var $xl5 = $('#i34b0ffe8ed86fec3');  
    var $xl5_xx = $('#i34b0ffe8ed86fec3').siblings().children().children().children('p');
    var $xl5_text = ''; 
    
    $('.p1700m045213870665209f>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl5.siblings('.row').children().hide();
    $xl5.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl5_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700m045213870665209f>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl5_text = $(this).text().trim();
      $xl5.children('p').text($xl5_text);
      $xl5.siblings().children().hide();
      return false;
    })
    
    
    var $xl6 = $('#i68ee03171bfcc44e');  
    var $xl6_xx = $('#i68ee03171bfcc44e').siblings().children().children().children('p');
    var $xl6_text = ''; 
    
    $('.p1700mb7639172f460655d>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl6.siblings('.row').children().hide();
    $xl6.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl6_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700mb7639172f460655d>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl6_text = $(this).text().trim();
      $xl6.children('p').text($xl6_text);
      $xl6.siblings().children().hide();
      return false;
    })
    
    
    var $xl7 = $('#i6b91b2b24e01b208');  
    var $xl7_xx = $('#i6b91b2b24e01b208').siblings().children().children().children('p');
    var $xl7_text = ''; 
    
    $('.p1700ma6b39ad710a85ce4>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl7.siblings('.row').children().hide();
    $xl7.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl7_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700ma6b39ad710a85ce4>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl7_text = $(this).text().trim();
      $xl7.children('p').text($xl7_text);
      $xl7.siblings().children().hide();
      return false;
    })
    
    
    var $xl8 = $('#i05f98bfa0fc98e0e');  
    var $xl8_xx = $('#i05f98bfa0fc98e0e').siblings().children().children().children('p');
    var $xl8_text = ''; 
    
    $('.p1700m2d6d4cad8d726b48>div.xg_img').eq(0).show().siblings('.xg_img').hide();
    $xl8.siblings('.row').children().hide();
    $xl8.click(function(){
      $(this).siblings().children().toggle();
      return false;
    })
    $xl8_xx.click(function(){
      var _index = $(this).parent().index()+1;
      $('.p1700m2d6d4cad8d726b48>div.xg_img').eq(_index).show().siblings('.xg_img').hide();
      $xl8_text = $(this).text().trim();
      $xl8.children('p').text($xl8_text);
      $xl8.siblings().children().hide();
      return false;
    })
    
    var price = 0;
    var key1 = '请选择';
    var key2 = '无'
    $('#i12c1362fde87eb22').click(function(){
      var j1 = $('#i13e2a5d2bb2cb449 p').text().trim();
      var j2 = $('#idd98bd4984a6cd80 p').text().trim();
      var j3 = $('#i43aab51c551287c5 p').text().trim();
      var j4 = $('#i75b983885b8a18c3 p').text().trim();
      var j5 = $('#i34b0ffe8ed86fec3 p').text().trim();
      var j6 = $('#i68ee03171bfcc44e p').text().trim();
      var j7 = $('#i6b91b2b24e01b208 p').text().trim();
      var j8 = $('#i05f98bfa0fc98e0e p').text().trim();
      
      
      if( j1 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j1 == key2){
        j1 = 0;
      }else{
        j1 = parseInt(j1);
      }
      
      
      if( j2 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j2 == key2){
        j2 = 0;
      }else{
        j2 = parseInt(j2);
      }
      
      
      if( j3 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j3 == key2){
        j3 = 0;
      }else{
        j3 = parseInt(j3);
      }
      
      
      if( j4 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j4 == key2){
        j4 = 0;
      }else{
        j4 = parseInt(j4);
      }
      
      
      if( j5 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j5 == key2){
        j5 = 0;
      }else{
        j5 = parseInt(j5);
      }
      
      
      if( j6 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j6 == key2){
        j6 = 0;
      }else{
        j6 = parseInt(j6);
      }
      
      
      if( j7 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j7 == key2){
        j7 = 0;
      }else{
        j7 = parseInt(j7);
      }
      
      
      if( j8 == key1){
        jAlert('请选择正确的数值')
        return;
      }else if( j8 == key2){
        j8 = 0;
      }else{
        j8 = parseInt(j8);
      }
      
      price = j1 + j2 + j3 + j4 + j5 + j6 + j7 + j8
      
      $('#i1b2b80bcaba5a5db p').text(price)
    })
  })
  
  
  
  
  
  var device = page.currentDevice();
  if (device == 2) {
      $("#i3907bc531995dce6").on("click","video",function(){
          return false;
      })
      setTimeout(function(){
              $("#slick-slide20 .container").css("left","0");
              $("#slick-slide20 .container").css("margin-left","0");
              $("#slick-slide20 .container").css("width","100%");
              $("#i3907bc531995dce6").parent().css("width","100%");
              $("#i3907bc531995dce6").parent().css("left","0%");
              $("#i3907bc531995dce6").parent().css("margin-left","0px");
              $("#i3907bc531995dce6").css("width","100%");
              $("#i3907bc531995dce6").css("left","0");
          },500);
  }
  $("#i82938d9a30dc67e0 video").attr("controls","controls")
  $("#i82938d9a30dc67e0").on("click","video",function(){
      return false;
  })
  
  var ref = "";
  ref = setInterval(function(){
      $("#i6d4bef526313b8fa").slick('slickNext');
  },4000);
  $("button[aria-label=Previous]:eq(0)").click(function(){
      clearInterval(ref);
      ref = setInterval(function(){
          $("#i6d4bef526313b8fa").slick('slickNext');
      },4000);
  })
  $("button[aria-label=Next]:eq(0)").click(function(){
      clearInterval(ref);
      ref = setInterval(function(){
          $("#i6d4bef526313b8fa").slick('slickNext');
      },4000);
  })  

//隐藏第一帧视频
  $("#i82938d9a30dc67e0").hide();
  $("#i620fd150e95e99ab").hide();
var configf1721_09c7b9eac72cb303e={"logintext":"登录","registertext":"注册","companyname":"股票代码：688418","companyurl":"javascript:void(0)","welcome":"您好，","userurl":"member_user.aspx","exittext":"退出"};(function(root,config){
function main(){
        
        var userurl = config.userurl;
        var welcome = config.welcome;
        var exittext = config.exittext;
       
        root.find(".company a").text(config.companyname).attr("href",config.companyurl);
        root.find("#loginedName").attr("href",userurl);
        root.find(".f409_img a").attr('userurl',userurl);
        if(page.currentDevice()==1){
		     root.find(".f409_img a").attr("href",userurl);
		}else{
          root.find(".f409_img a").removeAttr("href");
        }
       

        root.find("#loginout").text(config.exittext).click(function () {
           
               if(util.inDesign()) return;
                var params = {};
                var group = "User";
                var cmd = "Logout";
                util.ajaxMethod(group, cmd, params, function (data) {
                    if (data == "ok") {
                        util.openUrl("login.aspx","_self");
                        return;
                    }
                    if (util.isNullOrEmpty(data)) { return 0; }
                    if (data.result != 1) {
                        jAlert(data.msg, '');
                    } else {

                    }
                    return data.result;
                });
        });

        root.find(".onlogin1").text(config.welcome);
        root.find(".rllogin a").text(config.logintext).click(function(){
                if(!util.inDesign()){
                     util.openUrl("login.aspx","_self");
                }
        });
        root.find(".rlreg a").text(config.registertext).click(function(){
                if(!util.inDesign()){
                     util.openUrl("reg.aspx","_self");
                }
        });

        root.find(".f409_img").click(function(){
		    if(page.currentDevice()==2){
			     root.find(".phone_box").slideToggle();
		    }
	    })

        root.find("#loginedName").click(function(){
            if(page.currentDevice()!=1){
               util.openUrl("member.aspx","_self");
               return false;
               }
                else{
               return true;
             }
        });
 

        var params = {};
        var group = "User";
        var cmd = "IsLogin";
        util.ajaxMethod(group, cmd, params, function (data) {
            if (util.isNullOrEmpty(data)) { return 0; }
               $(".f409").find("#loginedName").text(data.msg.name);
                $(".f409").find(".f409_img").find('img').attr('src',data.msg.profileurl).attr('title',data.msg.name);
            if (data.result != 1) {
                //jAlert(data.msg, '未登录');
                 $(".f409").find(".onlogin").hide();
	             $(".f409").find(".reglogin").show();
	             $(".f409").find(".xian").show();
            } else {
				 $(".f409").find(".onlogin").show();
	             $(".f409").find(".reglogin").hide();
	             $(".f409").find(".xian").hide();
            }
            return data.result;
        });


}

 


$(main);})($('#cf1721-09c7b9eac72cb303e'),configf1721_09c7b9eac72cb303e);animation.config['an276']={"id":"276","clientIndex":"f1721-0b5dc320f0969c0e5","timingFunction":"","duration":"1","delay":"0","type":1,"name":"文化-导航下拉_向下飞入","anName":"an_tran_276","library":"fadeInDown","device":1,"loop":1,"resume":1,"clear":1};
menu($('#'+'if17210d46af989fd47cef0'),{mobileMenuEffect:{init:function(root){},show:function(root){var lis=root.find('.xg_menuMobile').find('li');var count=0;for(var index=0;index<lis.length;index++){if(lis.eq(index).parent().css('display')=='none'){continue;}
lis.eq(index).css({'transition':'left 0.5s '+(count++ *0.08)+'s','left':(-1*lis.width())+'px'});}
setTimeout(function(){lis.css('left','0px');},50);},hide:function(root){setTimeout(function(){var lis=root.find('.xg_menuMobile').find('li');lis.css({'transition':'','left':(-1*lis.width())+'px'});},100);}}});
animation.config['an629']={"id":"629","clientIndex":"f1721-0a0c8ed5294bc7ff6","timingFunction":"","duration":"1","delay":"0","type":10,"name":"语言下拉消失_语言下拉消失","anName":"an_tran_629","device":1,"resume":1,"clear":1};animation.config['an630']={"id":"630","clientIndex":"f1721-0a0c8ed5294bc7ff6","timingFunction":"","duration":"1","delay":"0","type":10,"name":"语言下拉消失_语言下拉显示","anName":"an_tran_630","device":1,"resume":1,"clear":1};

var pattern_if1721045660fc75f4b35b7=[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/^\S{1,11}$/,"msg":"允许输入字符数范围是：1到11位"}];;(function(root){
var search={init:function(){var id=root.data('btn');var type=root.data('searchtype');root.find('#'+id).on('click',search.siteSearch);var inputText=root.find('input[type=text]');inputText.on('keydown',function(e){if(e.keyCode==13){util.stopEvent();search.siteSearch();}});var _this=inputText.parent();_this.data('verify',function(){return search.verify(_this,search.getValue(_this));});if(/search.aspx$/i.test(window.location.pathname)){    var paras = window.location.search.substr(1).match(/(^|&)key=([^&]*)(&|$)/); if($(paras).length>0){   $("#if172106c2a2395624215a0 input[type=text]").val(decodeURIComponent(paras[2]));   }  }},verify:function(el,val){util.isNullOrEmpty(val)&&(val='');var col='Key';var span=el.find('span.xg_fierror');var error=false;if(!validate[col]){return true;}
validate[col].forEach(function(item){if(!error&&!item.reg.test(val)){error=true;span.text(item.msg).show();return false;}});if(error){return!error;$('html,body').scrollTop(el.offset().top);}else{span.text('');}
return!error;},getValue:function(el){var inputs=el.find('input[type=text]');var textArea=el.find('textarea');var selects=el.find('select');var val='';if(inputs.length>0){var hid=el.find('input[type=hidden]');if(hid.length>0){type='hidden';}else{type=inputs.eq(0).attr('type');}
if(type=='hidden'){val=hid.val();}else if(type=='radio'){inputs.each(function(){if($(this).is(':checked')){val=$(this).val();}});}else if(type=='checkbox'){inputs.each(function(){if($(this).is(':checked')){val+=$(this).val()+',';}});if(val.length>0){val=val.replace(/,$/g,'');}}else{val=inputs.eq(0).val();}}else if(textArea.length>0){val=textArea.val();}else if(selects.length>0){val=selects.find(':selected').val();}else{util.log('未能设别的内容');}
if(util.isNullOrEmpty(val)){return val;}
return val;},siteSearch:function(){if(util.inDesign())
return;var btn=root.find('#'+root.data('btn'));var inKey=root.find('input[type=text]');if(inKey.length<1){return;}
var div=inKey.parent();var verify=div.data('verify');if(!verify||!verify()){return;}
var searchVal=encodeURIComponent(inKey.val());search.openUrl(searchVal);},openUrl:function(key){var goUrl=root.data('go');if(goUrl){goUrl=util.createUrl(goUrl,false,['key'],[key]);}else{goUrl=util.createUrl(null,false,['key'],[key]);}
if(typeof mySiteSearch!='undefined'){mySiteSearch(root,goUrl);return;}
util.openUrl(goUrl,root.data('target'));}}
;var validate={"Key":[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/^\S{1,11}$/,"msg":"允许输入字符数范围是：1到11位"}]}
$(search.init);})($('#if172106c2a2395624215a0'));
$(function(){h5video.init($('#i82938d9a30dc67e0'));});
$(function(){h5video.init($('#i620fd150e95e99ab'));});
banner.init($('#i6d4bef526313b8fa'));
$(function(){h5video.init($('#i3907bc531995dce6'));});
banner.init($('#i8a6fcda8c7eecf58'));

function jqCounter(el,config){var options=$.extend({durationTime:3000,repeatTriggerScrollIn:false,easing:'swing',beginNumber:0},config);options.scrollIn=el.parents(".xg_section");var run=function(){var _this=el;var sub=_this.children().length==1?_this.children():_this;var num=_this.text();if(_this.data("num")){num=_this.data("num");}else{_this.data("num",num);}
if(isNaN(parseInt(num))){return;}
var haspercent=num.indexOf("%")>0?"%":"";var hasdou=num.indexOf(",")>0?true:false;var hasJia=num.indexOf("+")>0?"+":"";_this.prop('Counter',0).stop().animate({Counter:parseInt(num.replace(/,/g,""))-options.beginNumber},{duration:options.durationTime,easing:options.easing,step:function(now){now=Math.ceil(now)+options.beginNumber;if(hasdou){var str=String(now),text="";while(str.length>2){text=str.substr(str.length-3)+(text.length==0?"":","+text);str=str.substr(0,str.length-3);}
if(str){text=str+","+text;}
sub.text(text+haspercent+hasJia);}else{sub.text(now+haspercent+hasJia);}}});}
if(!options.scrollIn){run();return;}
if(options.scrollIn.length==0){util.log("scrollIn参数不正确");}
var counted=false;$(window).on("scroll",function(){var ele=options.scrollIn;var top=ele.offset().top;var windowTop=document.body.scrollTop+document.documentElement.scrollTop+document.documentElement.clientHeight;if(windowTop>top){if(counted){return;}
counted=true;run();}else if(options.repeatTriggerScrollIn){counted=false;}});$(window).trigger("scroll");$(window).on("myScreenLeave",function(){setTimeout(function(){if($(".fp-completely").is(options.scrollIn)||$(".fp-completely").find("#c500210001").length==0){if(options.repeatTriggerScrollIn){counted=false;}
if(counted){return;}
run();counted=true;}},300);});}
jqCounter($("#iecff3592b3654f88"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: true, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#ib8a6cca6b4fdedd6"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: false, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#i57e1f59511102ffd"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: true, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#i631cbc5e147261d8"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: false, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#id788110af0c151a0"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: true, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#i9e89856027e9ce30"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: false, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#i3e1aec71ff3dc86f"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: true, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
jqCounter($("#i762f453080336603"), {
	durationTime: 3000, //计数总时间,单位毫秒
	repeatTriggerScrollIn: false, //(true/false)重复触发执行滚动到此事件
	easing: 'swing', //计数曲线
	beginNumber: 0 //计数起始数
});
$(function(){h5video.init($('#i220efd2f35b58364'));});
$(function(){var video=$('#i9112c107691ec727');if(video.length==0){video=$('.p1700m9112c107691ec727');}if(video.length==1){myplayer.play(video);};});
$(function(){h5video.init($('#i386e17452ce59bef'));});
$(function(){(function(root){if(root.length==0){return;}
var config={shrinkBtn:parseInt(root.data('shrinkbtn'))}
if(config.shrinkBtn){config.position=root.data('btnpos');config.hideImg=root.data('bhimg');config.showImg=root.data('bsimg');config.defaultStat=util.toInt(root.data('bstate'));}
root.find('#WhatsApppage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();showPopup('WhatsappPopup');});root.find('#Facebookpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();showPopup('FacebookPopup');});root.find('#Twitterpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();showPopup('TwitterPopup');});root.find('#MAILpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();showPopup('MAILPopup');});root.find('#TELpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();if($('#TELPopup ul li').length==1){location.href='tel:'+$('#TELPopup ul li .xg_mpl-right a').text().trim();return;}
showPopup('TELPopup');});root.find('#WXpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();showPopup('WXPopup');});root.find('#Miccardpage').on('click', function() {if(util.inDesign()){return;}closeAllDialog();showPopup('MiccardPopup');});root.find('#QQpage').on('click',function(){if(util.inDesign()){return;}
closeAllDialog();if(root.find('#QQPopup ul li').length==1){root.find('#QQPopup ul li').find('.xg_mptxtfen').trigger('click');return;}
showPopup('QQPopup');});$('.xg_closePopup').on('click',function(){hidePopip()});function showPopup(idName){$('.xg_popupBox').fadeIn(200);$('#'+idName).fadeIn(200);}
function hidePopip(idName){$('.xg_popupBox,#MAILPopup,#WXPopup,#MiccardPopup').fadeOut();$('#TELPopup,#QQPopup,#WhatsappPopup,#FacebookPopup,#TwitterPopup').fadeOut(150);}
function closeAllDialog(){$('#MAILPopup,#TELPopup,#WXPopup,#QQPopup,#WhatsappPopup,#FacebookPopup,#TwitterPopup,#MiccardPopup').hide();}
function resetQQLink(alink){var href=alink.attr('href');var qq=util.queryString('uin',href);var host=util.queryString('site',href);var menu=util.queryString('menu',href);if(!qq||!host){return;}
if(!menu){menu='yes';}
var u=window.navigator.userAgent;var device=page.currentDevice();if(device==2&&/HuaweiBrowser|HeyTapBrowser|iPhone.*Safari/i.test(u)){alink.attr('href','mqqwpa://im/chat?chat_type=wpa&uin='+qq+'&version=1&src_type=web&web_src='+host);}else if(device==2&&(/UCBrowser/i.test(u)||/MicroMessenger/i.test(u))){alink.attr('href','javascript:void(0)');alink.on('click',function(){jAlert('不支持该浏览器请使用系统内置浏览器或者微信或QQ中打开');});}else{alink.attr('href','https://wpa.qq.com/msgrd?v=3&uin='+qq+'&site='+host+'&menu='+menu);}}
function load(){var btn=root.find('.xg_shbtn');btn.data('show',true);var top=0;var left=0;var img=btn.find('img').get(0);if(config.position=='top'){top=0;}else if(config.position=='middle'){top=root.height()/2-img.naturalHeight/2;}else if(config.position=='bottom'){top=root.height()-img.naturalHeight;}
if($(window).width()/2<root.offset().left){left=-1*img.naturalWidth;btn.data('position',root.css('right'));btn.css({'position':'absolute','top':top+'px','left':left+'px','cursor':'pointer','visibility':'visible'});}else{left=root.width();btn.data('position',root.css('left'));btn.css({'position':'relative','top':(-1*root.height()+btn.height())+'px','left':left+'px','cursor':'pointer','visibility':'visible'});}
btn.on('click',function(){var show=btn.data('show');if(show){var css=left<0?{right:(-1*root.width())+'px'}:{left:(-1*root.width())+'px'};root.stop().animate(css,'fast','swing',function(){btn.find('img').attr('src',config.showImg);btn.removeClass('xg_shbtn').addClass('xg_hshbtn');});}else{var css=left<0?{right:btn.data('position')}:{left:btn.data('position')};root.stop().animate(css,'fast','swing',function(){btn.find('img').attr('src',config.hideImg);btn.removeClass('xg_hshbtn').addClass('xg_shbtn');});}
btn.data('show',!show);});img.style.display='block';}
if(page.currentDevice()==1){root.find('.xg_hf-list:first').find('.xg_pcIcon').each(function(){var _this=$(this);if(_this.attr('class').indexOf('qqimg')>=0){resetQQLink(_this);}});var init=function(){if(root.offset().left<($(window).width()/2)){root.find('.xg_rnp-tips-ewm').css({'left':'125px','right':'auto','top':' 70%'});root.find('.xg_rnp-tips-tel,.xg_rnp-tips-qq').css({'left':'125px','right':'auto',});$('<style style=\'text/css\'>#xg_marketing .xg_rnp-tips-ewm:after{ border-right: 10px solid #fff !important;border-left:0px solid #fff!important;left: -10px;right: auto;}#xg_marketing .xg_rnp-tips-tel:after,.xg_rnp-tips-qq:after{ border-right: 10px solid #fff !important;border-left:0px solid #fff!important;left: -10px;right: auto;}</style>').appendTo('head');}
if(config.shrinkBtn){var html=$('<div class=\'xg_shbtn\' style=\'visibility:hidden;\'><img src=\''+config.hideImg+'\' style=\'display:none;\'></div>');html.find('img').one('load',function(){load();if(config.defaultStat==1){root.find('.xg_shbtn').trigger('click');}});root.append(html);}}
setTimeout(init,(util.inToolBox()?410:0));root.find('.xg_hf-list:first').find('.xg_hfl-txt').on('click',function(){if($(this).parent().find('a').length>0){$(this).parent().find('a').get(0).click();}});}else{root.parent().find('#QQPopup').find('.xg_mpqqList').each(function(){resetQQLink($(this).children('a'));});}})($('#xg_marketing').children('.xg_marketform'));});
