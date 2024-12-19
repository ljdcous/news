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
var tMenu={m1:function(obj){var tid=util.queryString('typeid');if(!tid){return;}
var active=obj.find('li[data-tid='+tid+']:first');if(active.length==0){var ids=String(obj.children('ul').data('curparents')).split(',');for(var i=0;i<ids.length;i++){if(!ids[i]){continue;}
active=obj.find('li[data-tid='+ids[i]+']:first');if(active.length>0){break;}}}
var cssText='';while(active.length>0){if(active.is('li')){var c=active.attr('class')+'-select';active.addClass(c);if(active.css('color')){cssText+='.'+c+' a{color:'+active.css('color')+';}';}}
active=active.parent();if(active.is('.xg_tMenu')||active.is('.xg_menu')){break;}}
tMenu.aCss(cssText);},m2:function(obj){var tid=util.queryString('typeid');if(!tid){return;}
var active=obj.children('ul').children('li[data-tid='+tid+']');if(active.length==0){var ids=String(obj.children('ul').data('curparents')).split(',');for(var i=0;i<ids.length;i++){if(!ids[i]){continue;}
active=obj.find('li[data-tid='+ids[i]+']:first');if(active.length>0){active=active.find('li[data-tid='+tid+']:first');}}}
var cssText='';while(active.length>0){if(active.is('li')){var c=active.attr('class')+'-select';active.addClass(c);if(active.css('color')){cssText+='.'+c+' a{color:'+active.css('color')+';}';}}
active=active.parent();if(active.is('.xg_tMenu')||active.is('.xg_menu')){break;}}
tMenu.aCss(cssText);},m3:function(obj){if(obj.data('urlinlastlevel')=='1'){obj.find('li div').on('click',function(){var thisUl=$(this).siblings('ul');var p=$(this).parent();var className='';p.get(0).className.split(' ').forEach(function(item){if(item.indexOf('xg_')==0){className=item+'-select';}});obj.find('li').each(function(){var _this=$(this);if(this.className.indexOf('-select')>0){this.className.split(' ').forEach(function(item){if(item.indexOf('-select')==-1){return;}
_this.removeClass(item);});}});if(thisUl.length==0){p.removeClass(className).addClass(className);return;}
p.siblings('li').children('ul').slideUp();thisUl.slideToggle();p.removeClass(className).addClass(className);});};var tid=util.queryString('typeid');if(!tid){return;}
var active=obj.find('li[data-tid='+tid+']:first');if(active.length==0){var ids=String(obj.children('ul').data('curparents')).split(',');for(var i=0;i<ids.length;i++){if(!ids[i]){continue;}
active=obj.find('li[data-tid='+ids[i]+']:first');if(active.length>0){break;}}}
var cssText='';while(active.length>0){if(active.is('li')){var c=active.attr('class')+'-select';active.addClass(c);if(active.css('color')){cssText+='.'+c+' a{color:'+active.css('color')+';}';}
active.children('ul').show();}
active=active.parent();if(active.is('.xg_tMenu')||active.is('.xg_menu')){break;}}
tMenu.aCss(cssText);},aCss:function(cssText){if(!cssText){return;}
var c=document.createElement('style');c.type='text/css';c.innerText=cssText;document.head.appendChild(c);}}
if (!util.inToolBox()) {
//5g通信
$("li[data-tid='148']").on("click",function(){
    var url="/Article_complex.aspx?nid=26"
   /* if (util.inToolBox()) {
      url="/AI-Design"+url;
    }*/
    util.openUrl(url, "_self");	
    return false;
})

//应急管理
$("li[data-tid='13']").on("click",function(){
    var url="/help_complex.aspx?nid=30"
   /* if (util.inToolBox()) {
      url="/AI-Design"+url;
    }*/
    util.openUrl(url, "_self");	
    return false;
})

//智慧矿山
$("li[data-tid='373']").on("click",function(){
    var url="/enrollment_complex.aspx?nid=27"
  /*  if (util.inToolBox()) {
      url="/AI-Design"+url;
    }*/
    util.openUrl(url, "_self");	
    return false;
})

//智慧城市
$("li[data-tid='374']").on("click",function(){
    var url="/solution_complex.aspx?nid=25"
  /*  if (util.inToolBox()) {
      url="/AI-Design"+url;
    }*/
    util.openUrl(url, "_self");	
    return false;
})
//智慧光网

$("li[data-tid='375']").on("click",function(){
    var url="/contact_complex.aspx?nid=7"
    /*if (util.inToolBox()) {
      url="/AI-Design"+url;
    }*/
    util.openUrl(url, "_self");	
    return false;
})
}



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
banner.init($('#ie339333656d4c2fc'));
$(function(){tMenu.m3($('#id1bab6a788507ae7'))});
;(function(root){root.find(".xg_tMenuLi1:nth-child(1)").css({"border-bottom":"2px solid #e8382c"})
})($('#r5000400010001'));
animation.config['an688']={"id":"688","clientIndex":"a61c4872b6ceb113","timingFunction":"","duration":"1.7","delay":"0","type":1,"name":"688_产品2_向左飞入","anName":"an_tran_688","library":"fadeInRight","device":1,"loop":1,"resume":1,"clear":1};
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
