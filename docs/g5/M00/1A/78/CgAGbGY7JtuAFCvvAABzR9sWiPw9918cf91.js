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
var imgCode={init:function(img){var op=imgCode.getOpitons(img);imgCode.refresh(op);img.on('click',imgCode.click);},getOpitons:function(img){if(!img){if(typeof console!='undefined')
console.log('checkCode初始化失败');return{};}
var options={};var data=img.data('type');options.type=data;options.key=img.data('key');data=img.data('width');data&&(options.width=data);data=img.data('height');data&&(options.height=data);data=img.data('textcolor');data&&(options.textColor=data);data=img.data('backcolor');data&&(options.backColor=data);data=img.data('textsize');data&&(options.textSize=data);options.charSet=0;options.version=1;options.img=img;return options;},refresh:function(op){var img=op.img;op.img=null;util.ajaxMethod('Common','GetCheckCode',op,function(data){if(data&&data.result==1){img.attr('src',data.msg+'&t='+Math.random());}else if(typeof console!='undefined'){console.log('获取验证码失败');}});},click:function(){var op=imgCode.getOpitons($(this));imgCode.refresh(op);}}

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

var pattern_i01d65ed12a38155b=[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/(^1[0-9]{10}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,"msg":"手机号或邮箱格式不对"}];
var pattern_i8ea8df47df4d7da4=[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/\S{6,18}$/,"msg":"长度为6到18个字符"}];$(function(){var panel=$('#ie61c4818edfc78ca');var img=panel.find('img');imgCode.init(img);panel.find('.xg_check_tip').on('click',function(){img.trigger('click');});});
;(function(root){var userlogin={init:function(){var a=location.href;var b=a.split('/');var c=b.slice(b.length-1,b.length).toString(String).split('.');var currpagename=c.slice(0,1)+'.aspx?logout=1';var currdomain='';if(/^htts/.test(location.href))
currdomain='https%3a%2f%2f'+document.domain;else
currdomain='http%3a%2f%2f'+document.domain;root.find('div[form-field=Mobile]').find('input').attr('type','text');if(!util.inDesign()&&root.data('userlogined')=='1'){userlogin.loginSuccessBack(root.find('.xg_ibtn'));return;}
root.find('a').each(function(){if($(this).prop('href').indexOf('logout=1')>0){$(this).prop('href','/'+currpagename);if($(this).prop('href').indexOf('qq.com')>0){var qqappid=$(root).data('qqappid');var urls='https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id='+qqappid+'&redirect_uri='+currdomain+'%2fAdmin%2fShareLogin%2floginqq.aspx&state=login';$(this).prop('href',urls);}}
if($(this).prop('href').indexOf('weibo.cn')>0){var wbappid=$(root).data('wbappid');var urls='https://open.weibo.cn/oauth2/authorize?client_id='+wbappid+'&redirect_uri='+currdomain+'%2Fadmin%2Fsharelogin%2Floginwb.aspx&state=login';$(this).prop('href',urls);}});var id=root.data('btn');root.find('#'+id).on('click',userlogin.commit);if(page.currentDevice()==1){root.find('div[identify=enable-pcscanfocuslogin]').on('click',userlogin.scanLogin);root.find('div[identify=enable-sharelogin_weixin]').on('click',userlogin.shareLogin);}else{root.find('div[identify=enable-pcscanfocuslogin]').addClass('mobile_hide');root.find('div[identify=enable-sharelogin_weixin]').addClass('mobile_hide');}
root.find('div[form-field]').each(function(){var _this=$(this);_this.data('verify',function(){var val=userlogin.getValue(_this);return userlogin.verify(_this,val);});});var returnurl=util.queryString('ReturnUrl');if(/^http[s]{0,1}:\/\/[^\(\)\{\};\<\>]*$|^\/[^\(\)\{\};\<\>]*$/.test(returnurl)){sessionStorage.setItem('_return_url',returnurl);};},scanLogin:function(){var params={};var group='User';var cmd='GetQrCode';util.ajaxMethod(group,cmd,params,function(data){if(data.result==1){var html='<div class=\'xg_user_scanLogin\'><div class=\'xg_user_scanLogin_title\'>微信扫码登录<span style=\'float:right; padding-right:20px;cursor:pointer;\'>X</span></div>  <img src=\''+data.msg+'\' alt=\'微信扫码登录\' /></div>';root.append(html);$('.xg_user_scanLogin').show();var poll=setInterval(function(data){util.ajaxMethod('User','PollLogin',{},function(data){if(data.result==1){clearInterval(poll);if(typeof myLoginBack!='undefined'){myLoginBack(data,root);btn.removeAttr('disabled');return;}
userlogin.loginSuccessBack(root.find('.xg_ibtn'));}})},500);$('.xg_user_scanLogin').find('span').on('click',function(){clearInterval(poll);$(this).parent().parent().remove();})}else if(data.result==0){jAlert(data.msg);}});},shareLogin:function(){util.ajaxMethod('User','GetShareQrCode',{},function(data){if(data.result==1){util.open(data.msg,'_blank');}else{jAlert(data.msg);}});},commit:function(){var btn=$(this);if(btn.attr('disabled')=='disabled'||util.inDesign()){return;}
btn.attr('disabled','disabled');if(typeof myLoginBefore != 'undefined'){if(!myLoginBefore(root, btn)){btn.removeAttr('disabled');return;}}var content=[];var items=root.find('div[form-field]');var error=false;items.each(function(){if(error){return;}
var _this=$(this);var verify=_this.data('verify');if(!verify||!verify()){error=true;return;}
var item=userlogin.getValue(_this);if(util.isNullOrEmpty(item.value)){return;}
content.push(item);});if(error){btn.removeAttr('disabled');return;}
var params={};var code=root.find('input[data-validate=img]');if(code.length>0){params.CheckCode=code.val();}
var pwd=root.find('input[type=password]');if(pwd.length>0){params.Password=pwd.val();}
params.PageId='1711';params.ClientId='1711i82dd10191d3faf9d';var mobilecode=root.find('input[data-validate=mobile]');if(mobilecode.length>0){params.MobileCode=mobilecode.val();}
var mobile=root.find('div[form-field=Mobile]').find('input');if(mobile.length>0){params.Mobile=mobile.val();}
util.ajaxMethod('UserForm','Login',params,function(data){if(util.isNullOrEmpty(data)){btn.removeAttr('disabled');return;}
if(data.result!=1){$('.xg_mbcode_check .xg_fierror').text(data.msg).show();btn.removeAttr('disabled');if($('.xg_ipwd .xg_fierror').length>0){jAlert(data.msg,'错误');}
return;}
userlogin.loginSuccessBack(btn);});},validateInfo:function(field,params,content){var lField=field.toLowerCase();var code=root.find('input[data-validate='+lField+']');var label=code.parent().find('span').text();if(code.length>0){params[field]=code.parent().prev().val();params[field+'Code']=code.val();var hasField=false;for(var i=0;i<content.length;i++){if(content[i].field==field){content.value=params[field];hasField=true;break;}}
if(!hasField){content.push({'label':label,'field':field,'value':params[field]});}}else{code=root.find('input[type='+(lField=='mobile'?'tel':lField)+']');if(code.length>0){params[field]=code.eq(0).val();}}},verify:function(el,val){util.isNullOrEmpty(val)&&(val='');var col=el.attr('form-field');var tip=el.find('span.xg_fierror');var canempty=true;validate[col].forEach(function(item){if(item.reg.toString()=='/\\S{1,}/')
canempty=false;});var error=false;validate[col].forEach(function(item){if((!(canempty&&!util.isNullOrEmpty(val.value||''))&&!error&&!item.reg.test(val.value||''))||(!util.isNullOrEmpty(val.value||'')&&!item.reg.test(val.value||''))){error=true;tip.text(item.msg).show();return false;}else if(!error){tip.text('').hide();}});if(error){$('html,body').scrollTop(el.offset().top);}else{}
return!error;},getValue:function(el){var inputs=el.find('input');var textArea=el.find('textarea');var selects=el.find('select');var val='',col=el.attr('form-field');if(inputs.length>0){var hid=el.find('input[type=hidden]');if(hid.length>0){type='hidden';}else{type=inputs.eq(0).attr('type');}
if(type=='hidden'){val=hid.val();}else if(type=='radio'){inputs.each(function(){if($(this).is(':checked')){val=$(this).val();}});}else if(type=='checkbox'){inputs.each(function(){if($(this).is(':checked')){val+=$(this).val()+',';}});if(val.length>0){val=val.replace(/,$/g,'');}}else{val=inputs.eq(0).val();}}else if(textArea.length>0){val=textArea.val();}else if(selects.length>0){val=selects.find(':selected').val();}else{typeof console!='undefined'&&console.log('未能设别的内容');}
if(util.isNullOrEmpty(val)){return{};}
var labeltext='';var labeldata=el.find('label[data-label=name],span[data-label=name]');if($(labeldata).length>0)
labeltext=$(labeldata[0]).text();return{'label':labeltext,'field':col,'value':val};},blur:function(){var dom=$(this).parentsUntil(root,'div[form-field]');var item=userlogin.getValue(dom);userlogin.verify(dom,item);},loginSuccessBack:function(btn){if(typeof myLoginBack!='undefined'){myLoginBack(null,root,btn);btn.removeAttr('disabled');return;}
var returnurl=util.queryString('ReturnUrl');if(returnurl&&!/^http[s]{0,1}:\/\/[^\(\)\{\};\<\>]*$|^\/[^\(\)\{\};\<\>]*$/.test(returnurl)){userlogin.goUrl('/');return;};if(returnurl!=null){userlogin.goUrl(returnurl);return;}
var formUser=btn.parent().parent();var resultPage='';var refreshurl='';for(var i=0;i<10;i++){formUser=formUser.parent();if(formUser.is('.xg_userlogin')){resultPage=formUser.data('gourl');refreshurl=decodeURIComponent(formUser.data('refresh'));break;}}
if(refreshurl&&!/^http[s]{0,1}:\/\/[^\(\)\{\};\<\>]*$|^\/[^\(\)\{\};\<\>]*$/.test(refreshurl)){refreshurl='/';};if(resultPage=='0'){userlogin.goUrl('/index.aspx');}else if(resultPage=='-1'&&refreshurl){userlogin.goUrl(refreshurl);}else if(!util.isNullOrEmpty(resultPage)){if(resultPage.indexOf('member.aspx')>=0&&page.currentDevice()==1){userlogin.goUrl('/member_user.aspx');}else{userlogin.goUrl(resultPage);}}else{window.location.reload();}},goUrl:function(url){if(url.indexOf('DownloadsPage.aspx')>=0){url=document.referrer||'/member_user.aspx';}document.location.replace(url);}};var validate={"Mobile":[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/(^1[0-9]{10}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,"msg":"手机号或邮箱格式不对"}],"Password":[{"reg":/\S{1,}/,"msg":"不允许为空"},{"reg":/\S{6,18}$/,"msg":"长度为6到18个字符"}]}
$(userlogin.init);})($('#i82dd10191d3faf9d'));
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
