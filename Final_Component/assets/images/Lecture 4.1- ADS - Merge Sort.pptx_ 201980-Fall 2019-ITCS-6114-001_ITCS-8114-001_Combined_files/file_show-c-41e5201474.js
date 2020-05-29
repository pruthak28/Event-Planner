(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[316],{"7LJr":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
a.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
var t=this.filter(":first")
var n
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
n.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
var i=n.pop()
i&&i.remove()
t.data("loading_images",n)
return this}"register_image"==e&&3==arguments.length&&(a.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=a.a.extend({},a.a.fn.loadingImg.defaults,e)
var s=a.a.fn.loadingImg.image_files["normal"]
e.image_size&&a.a.fn.loadingImg.image_files[e.image_size]&&(s=a.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
var r=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)r=t.outerHeight()
else if("middle"==e.vertical)r=t.outerHeight()/2-s.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}var o=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)o=t.outerWidth()-s.width
else if("middle"==e.horizontal)o=t.outerWidth()/2-s.width/2
else{o=parseInt(e.horizontal,10)
isNaN(o)&&(o=0)}var c=t.zIndex()+1
var l=a()(document.createElement("div")).addClass("loading_image_holder")
var u=a()(document.createElement("img")).attr("src",s.url)
l.append(u)
n=t.data("loading_images")||[]
n.push(l)
t.data("loading_images",n)
if(t.css("position")&&"static"!=t.css("position")){l.css({zIndex:c,position:"absolute",top:r,left:o})
t.append(l)}else{var d=t.offset()
var _=d.top,m=d.left
e.vertical&&(_+=r)
e.horizontal&&(m+=o)
l.css({zIndex:c,position:"absolute",top:_,left:m})
a()("body").append(l)}return a()(this)}
a.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
a.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
a.a.fn.loadingImage=a.a.fn.loadingImg},B1vq:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){var t={}
var n=a()(e)
if(0===n.length)return
var i=n.offset(),s=n.outerWidth(),r=n.outerHeight(),o=i.top,c=o+r,l=i.left,u=l+s,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),_=this.scrollLeft(),m=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){var v=a()("body").offset()
this.each(function(){try{v=a()(this).offset()
return false}catch(e){}})
o-=v.top
c-=v.top
l-=v.left
u-=v.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){m=a()(window).height()
a()("#wizard_box:visible").length>0&&(m-=a()("#wizard_box:visible").height())
p=a()(window).width()
o-=d
l-=_
c-=d
u-=_}o<0||m<r&&c>m?t.scrollTop=o+d:c>m&&(t.scrollTop=c+d-m+20)
l<0?t.scrollLeft=l+_:u>p&&(t.scrollLeft=u+_-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},EII2:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var a=n.n(i)
n("fy7k")
n("p6Wi")
const s={height:"100%",scribdParams:{auto_size:true}}
const r=a()("#doc_preview")
r.fillWindowWithMe()
r.loadDocPreview(a.a.merge(s,r.data()))},"Vj0+":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
function i(e){const t=/javascript:/
if(e.match(t))return"about:blank"
return e}},fy7k:function(e,t,n){"use strict"
var i=n("u7Gu")
var a=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"لا يمكن عرض هذا المستند في Canvas.","document_preview_processing":"تجري معالجة معاينة المستند حاليًا. الرجاء إعادة المحاولة لاحقًا."}}},"cy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Does dim modd dangos y ddogfen hon yn Canvas.","document_preview_processing":"Mae’r rhagolwg o’r ddogfen wrthi’n cael ei brosesu ar hyn o bryd. Rhowch gynnig arall arni rywbryd eto."}}},"da":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokument kan ikke vises i Canvas.","document_preview_processing":"Dokumentets forhåndsvisning bliver behandlet i øjeblikket. Prøv igen senere."}}},"de":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dieses Dokument kann in Canvas nicht angezeigt werden.","document_preview_processing":"Die Dokumentvorschau wird gerade ausgeführt. Versuchen Sie es später noch einmal."}}},"el":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Αυτό το έγγραφο δεν μπορεί να εμφανιστεί μέσα στο Canvas.","document_preview_processing":"\\u003cmrk mid=\\"5994\\" mtype=\\"seg\\"\\u003eΗ προεπισκόπηση του εγγράφου δημιουργείται αυτή τη στιγμή.\\u003c/mrk\\u003e \\u003cmrk mid=\\"5995\\" mtype=\\"seg\\"\\u003eΠαρακαλώ δοκιμάστε ξανά αργότερα.\\u003c/mrk\\u003e"}}},"en-AU":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-AU-x-unimelb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB-x-ukhe":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"es":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Este documento no se puede mostrar en Canvas.","document_preview_processing":"Todavía se está procesando la vista previa del documento. Inténtelo de nuevo más tarde."}}},"fa":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"این سند نمی تواند در کانواس نمایش داده شود.","document_preview_processing":"پیش نمایش سند در حال پردازش است. لطفا بعدا دوباره تلاش کنید."}}},"fi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Tätä asiakirjaa ei voi näyttää Canvasissa.","document_preview_processing":"Asiakirjan esikatselua käsitellään parhaillaan. Yritä myöhemmin uudelleen."}}},"fr":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ce document ne peut pas être affiché dans Canvas.","document_preview_processing":"Traitement en cours de l’aperçu du document. Veuillez réessayer plus tard."}}},"fr-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ce document ne peut pas être affiché dans Canvas.","document_preview_processing":"Traitement en cours de l’aperçu du document. Veuillez essayer de nouveau plus tard."}}},"he":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"מסמך זה לא ניתן להצגה בתוך קנבס.","document_preview_processing":"התצוגה המוקדמת של מסמך זה מעובדת כעת. יש לנסות מאוחר יותר"}}},"ht":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dokiman sa a pa kapab afiche nan Canvas.","document_preview_processing":"Afichaj dokiman an pwosesis pou kounye a. Tanpri eseye ankò."}}},"hu":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ezt a dokumentumot nem lehet megtekinteni a Canvasban. ","document_preview_processing":"A dokumentum előnézete feldolgozás alatt. Kérjük, próbálja újra később."}}},"hy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Այս փաստաթուղթը չի կարող ցուցադրվել Canvas-ի ներսում:","document_preview_processing":"Փաստաթղթի նախնական դիտումը այժմ մշակման փուլում է: Փորձեք կրկին ավելի ուշ:"}}},"is":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ekki hægt að sýna þetta skjal í Canvas.","document_preview_processing":"Forskoðun skjala er í vinnslu. Vinsamlegast reyndu aftur seinna."}}},"it":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Questo documento non può essere visualizzato in Canvas.","document_preview_processing":"L\'anteprima del documento è attualmente in elaborazione. Riprova in seguito."}}},"ja":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"この文書は Canvas 内で表示できません。","document_preview_processing":"文書のプレビューは現在処理中です。後ほどもういちど試してください。"}}},"ko":{"jquery_doc_previews":{"errors":{"document_preview_processing":"문서 미리 보기를 처리 중입니다. 나중에 다시 시도하시기 바랍니다."}}},"mi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"E kore e taea te whakaatu i tēnei tuhinga i roto i Canvas.","document_preview_processing":"Kei te tukatuka i tēnei wā te arokite tuhinga. Tēnā koa ngana anō i muri mai."}}},"nb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikke vises i Canvas.","document_preview_processing":"Dokumentforhåndsvisningen behandles. Forsøk igjen senere."}}},"nl":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dit document kan niet in Canvas weergegeven worden.","document_preview_processing":"Het voorbeeld van het document wordt momenteel verwerkt. Probeer het later opnieuw."}}},"nn":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikkje visast i Canvas.","document_preview_processing":"Førehandsvisinga av dokumentet blir behandla no. Prøv på nytt seinare."}}},"pl":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Nie można wyświetlić tego dokumentu w systemie Canvas.","document_preview_processing":"Podgląd dokumentu jest teraz przetwarzany. Spróbuj ponownie później."}}},"pt":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Não é possível visualizar este documento dentro do Canvas.","document_preview_processing":"A pré-visualização do documento está a ser processada. É favor, tentar novamente mais tarde."}}},"pt-BR":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Esse documento não pode ser exibido dentro do Canvas.","document_preview_processing":"No momento, a pré-visualização do documento está sendo processada. Por favor, tente novamente mais tarde."}}},"ru":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Этот документ нельзя отобразить внутри Canvas.","document_preview_processing":"Предварительный просмотр документа в данный момент обрабатывается. Попробуйте еще раз позже."}}},"sv":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Det här dokumentet kan inte visas i Canvas.","document_preview_processing":"Förhandsvisningen av dokumentet bearbetas. Försök igen senare."}}},"tr":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Bu belge Canvas içinde görüntülenemez.","document_preview_processing":"Döküman ön izlemesi hala işleniyor. Lütfen daha sonra tekrar deneyin."}}},"zh-Hans":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"无法在 Canvas 中显示此文档。","document_preview_processing":"目前正在处理文档预览。请稍后再试。"}}},"zh-Hant":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"在 Canvas 中無法顯示此文件。","document_preview_processing":"文件預覽目前正在處理中。請稍後重試。"}}}}'))
n("jQeR")
n("0sPK")
var r=a["default"].scoped("jquery_doc_previews")
var o=n("ouhR")
var c=n.n(o)
n("GLiE")
var l=n("5Ky4")
n("jYyc")
var u=n("hiU6")
n("JI1W")
n("7LJr")
var d=n("Vj0+")
var _={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
c.a.filePreviewsEnabled=function(){return!(i["a"].disableCrocodocPreviews&&i["a"].disableGooglePreviews)}
c.a.isPreviewable=function(e,t){return c.a.filePreviewsEnabled()&&_[e]&&(!t||!i["a"]["disable"+c.a.capitalize(t)+"Previews"]&&_[e][{scribd:0,google:1}[t]])}
c.a.fn.loadDocPreview=function(e){return this.each(function(){var t=c()(this),n=c.a.extend({width:"100%",height:"400px"},t.data(),e)
function a(e){if(n.attachment_view_inline_ping_url){c.a.ajaxJSON(n.attachment_view_inline_ping_url,"POST",{},()=>{},()=>{})
Object(u["a"])("Doc Previews",e,JSON.stringify(n,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!i["a"].disableCrocodocPreviews&&n.crocodoc_session_url){const e=Object(d["a"])(n.crocodoc_session_url)
var s=c()("<iframe/>",{src:e,width:n.width,height:n.height,allowfullscreen:"1",id:n.id})
s.appendTo(t)
s.load(()=>{a("crocodoc")
c.a.isFunction(n.ready)&&n.ready()})}else if(n.canvadoc_session_url){const e=c()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
e.appendTo(t)
const i=void 0!==n.iframe_min_height?n.iframe_min_height:"800px"
const r=Object(d["a"])(n.canvadoc_session_url)
s=c()("<iframe/>",{src:r,width:n.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":i},id:n.id})
s.appendTo(e)
s.load(()=>{a("canvadocs")
c.a.isFunction(n.ready)&&n.ready()})}else if(!i["a"].disableGooglePreviews&&(!n.mimetype||c.a.isPreviewable(n.mimetype,"google"))&&n.attachment_id||n.public_url){var o=function(){var e="//docs.google.com/viewer?"+c.a.param({embedded:true,url:n.public_url})
n.ajax_valid&&!n.ajax_valid()||c()('<iframe src="'+Object(l["a"])(e)+'" height="'+n.height+'" width="100%" />').appendTo(t).load(()=>{a("google")
c.a.isFunction(n.ready)&&n.ready()})}
if(n.public_url)o()
else if(n.attachment_id){var _="/api/v1/files/"+n.attachment_id+"/public_url.json"
n.submission_id&&(_+="?"+c.a.param({submission_id:n.submission_id}))
t.loadingImage()
c.a.ajaxJSON(_,"GET",{},e=>{t.loadingImage("remove")
if(e&&e.public_url){c.a.extend(n,e)
o()}})}}else c.a.filePreviewsEnabled()&&(n.attachment_preview_processing?t.html("<p>"+Object(l["a"])(r.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(l["a"])(r.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))})}},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Är du säker på att du vill radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var s=i["default"].scoped("instructure_misc_plugins")
var r=n("ouhR")
var o=n.n(r)
var c=n("5Ky4")
var l=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
o.a.fn.setOptions=function(e,t){var n=e?"<option value=''>"+Object(c["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{var t=Object(c["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){var e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
var n=t.innerWidth()
e.css("overflow-y","scroll")
var i=t.innerWidth()
e.remove()
return n-i}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
var t=this
var n=null
var i=true
e.noMessage=e.noMessage||e.no_message
var a=function(){if(!i){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
var a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(l["a"])()
o.a.ajaxJSON(e.url,"DELETE",a,n=>{e.success.call(t,n)},(n,i,a,s)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,n,i,a,s):o.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){i=false
var r="object"==typeof e.dialog?e.dialog:{}
n=o()(e.message).dialog(o.a.extend({},{modal:true,close:a,buttons:[{text:s.t("#buttons.cancel","Cancel"),click:function(){o()(this).dialog("close")}},{text:s.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){i=true
o()(this).dialog("close")}}]},r))
return}i=confirm(e.message)}a()}
o.a.fn.confirmDelete.defaults={get message(){return s.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){var t=(window.location.search||"").replace(/^\?/,"").split("&")
var n=null
for(var i=0;i<t.length;i++){var a=t[i]
a&&0===a.indexOf("hash=")&&(n="#"+a.substring(5))}this.bind("document_fragment_change",e)
var s=this
var r=false
for(i=0;i<o.a._checkFragments.fragmentList.length;i++){var c=o.a._checkFragments.fragmentList[i]
c.doc[0]==s[0]&&(r=true)}r||o.a._checkFragments.fragmentList.push({doc:s,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{n&&n.length>0?s.triggerHandler("document_fragment_change",n):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){var e=o.a._checkFragments.fragmentList
for(var t=0;t<e.length;t++){var n=e[t]
var i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
o.a._checkFragments.fragmentList[t]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){var e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each(function(t){o()(this).showIf(e.call(this))})
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
var t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
var n=this.offset()
e&&e.offset&&(n=e.offset)
var i=this.width()
var a=this.height()
var s=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover(function(){o()(this).stop().fadeOut("fast",function(){o()(this).remove()})})
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",function(){o()(this).remove()}):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",function(){o()(this).remove()})
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){var t=o.a.extend({minHeight:400},e),n=o()(this),i=o()("#wrapper"),a=o()("#main"),s=o()("#not_right_side"),r=o()(window),c=o()(this).add(t.alsoResize)
function l(){c.height(0)
var e=r.height()-(i.offset().top+i.outerHeight())+(a.height()-s.height()),l=Math.max(400,e)
c.height(l)
o.a.isFunction(t.onResize)&&t.onResize.call(n,l)}l()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each(function(){var t=e.minWidth||o()(this).width(),n="",i=o()(this),a=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
var s=a.width(),r=s+e.comfortZone>=t?s+e.comfortZone:t,o=i.width(),c=r<o&&r>=t||r>t&&r<e.maxWidth
c&&i.width(r)})}
a.insertAfter(i)
o()(this).bind("keyup keydown blur update change",s)})
return this}
o.a}}])

//# sourceMappingURL=file_show-c-41e5201474.js.map