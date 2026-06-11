import {_ as _v,V as oe$1,l as le$2,G as Go,z as zv,O as Of,N as Nf,i as ic,H as HI,X as Xm,Q as Qv,W as Bf,M as Mf,$ as wn,a0 as ur,a1 as pI,a2 as hI,s as sc,k as ac,Y as Yv,Z as Zv,p as zf,K as Kv,d as ir,a3 as lm,a4 as Hf,g as dI,a5 as S,a6 as Zs,a7 as y,a8 as Cr,a9 as de$1,aa as An,ab as ue,ac as Hp,ad as Xp,w,ae as x,af as Ot$1,ag as Nv,ah as al,ai as Tn,aj as SI,U as wd,ak as _i,al as Gt,am as Si$1,an as $p,ao as ya,ap as Qn,aq as Xs,ar as Re,as as mg,at as Ef,au as wf,L as Rf,T as _f,av as Rl,aw as go,ax as K,ay as Ot$2,az as cu,aA as sr,aB as Fy,aC as Zn,aD as G$1,aE as sn,aF as kh,aG as ne,aH as $,aI as Sm,aJ as yu,aK as vr,aL as Xn,aM as xl,aN as Rs,aO as br,aP as sP,aQ as _s,F as Ff,m as mI,e as yI,aR as Ps,aS as ws,aT as fn,aU as ii$1,aV as Av,aW as Up,aX as fP,aY as et$1,aZ as ou,a_ as _,B as Mp,a$ as Et,b0 as Kn,b1 as dc,b2 as vm,b3 as wm,b4 as _m,b5 as ym,a as wn$1,b6 as WI,b7 as Oo,b8 as el,b9 as Er,ba as eh,bb as lP,bc as uP,bd as Lf,be as tP,bf as Ia,bg as Sa,bh as Ma,bi as ua,bj as QI,bk as B,bl as rE}from'./main-NZMH25SZ.js';import {HighlightLineNumbers as le$1}from'./chunk-CL4nvtZP.js';function Di$1(n,t){if(n&1&&(Go(0,"span",2),HI(1),ic()),n&2){let e=dI();Xm(),zf(e.fileName);}}var qt=class n{code="";language="text";fileName;showLineNumbers=true;wrapLines=true;toggleWrap(){this.wrapLines=!this.wrapLines;}copyCode(){this.code&&navigator.clipboard.writeText(this.code).then(()=>{}).catch(t=>{console.error("Failed to copy code: ",t);});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_v({type:n,selectors:[["app-code-block"]],inputs:{code:"code",language:"language",fileName:"fileName",showLineNumbers:"showLineNumbers"},decls:11,vars:8,consts:[[1,"code-block-container"],[1,"code-header"],[1,"file-name"],[1,"header-buttons"],["title","Copy code",1,"header-btn","copy-btn",3,"click"],["name","matContentCopy","size","16"],[1,"header-btn","wrap-toggle-btn",3,"click","title"],["name","matWrapText","size","16"],["lineNumbers","",3,"highlight","language"]],template:function(e,i){e&1&&(Go(0,"div",0)(1,"div",1),zv(2,Di$1,2,1,"span",2),Go(3,"div",3)(4,"button",4),Of("click",function(){return i.copyCode()}),Nf(5,"ng-icon",5),ic(),Go(6,"button",6),Of("click",function(){return i.toggleWrap()}),Nf(7,"ng-icon",7),ic()()(),Go(8,"pre")(9,"code",8),HI(10,`
  `),ic()()()),e&2&&(Xm(2),Qv(i.fileName?2:-1),Xm(4),Bf("active",i.wrapLines),Mf("title",i.wrapLines?"Switch to horizontal scroll":"Wrap long lines"),Xm(2),Bf("wrap-lines",i.wrapLines),Xm(),Mf("highlight",i.code)("language",i.language));},dependencies:[oe$1,le$1,le$2],styles:[".code-block-container[_ngcontent-%COMP%]{border-radius:8px;overflow:hidden;background:#0d1117;border:1px solid #30363D;margin:1rem 0}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]{background:#161b22;padding:.75rem 1rem;border-bottom:1px solid #30363D;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;display:flex;justify-content:space-between;align-items:center}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{color:#f0f6fc;font-size:.875rem;font-weight:500}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]{display:flex;gap:.5rem}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%]{background:#21262d;border:1px solid #30363D;color:#7d8590;border-radius:4px;padding:.25rem;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;justify-content:center;min-width:24px;height:24px}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%]:hover{background:#30363d;color:#f0f6fc}.code-block-container[_ngcontent-%COMP%]   .code-header[_ngcontent-%COMP%]   .header-btn.active[_ngcontent-%COMP%]{background:#238636;border-color:#238636;color:#fff}.code-block-container[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;border-radius:0;overflow-x:auto}.code-block-container[_ngcontent-%COMP%]   pre.wrap-lines[_ngcontent-%COMP%]{overflow-x:visible;white-space:pre-wrap;word-break:break-all}.code-block-container[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{border-radius:0;white-space:inherit}"],changeDetection:1})};var Pi=20,mt=(()=>{class n{_ngZone=y(G$1);_platform=y(K);_renderer=y(Zn).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ue;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=Pi){return this._platform.isBrowser?new _(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Up(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);}}):Mp()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete();}ancestorScrolled(e,i){let o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Gt(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&i.push(r);}),i}_targetContainsElement(e,i){let o=Et(i),r=e.getElementRef().nativeElement;do if(o==r)return  true;while(o=o.parentElement);return  false}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();var Ri$1=20,ye=(()=>{class n{_platform=y(K);_listeners;_viewportSize=null;_change=new ue;_document=y(go);constructor(){let e=y(G$1),i=y(Zn).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen("window","resize",o),i.listen("window","orientationchange",o)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return {top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return {top:0,left:0};let e=this._document,i=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||i.scrollY||o.scrollTop||0,a=-r.left||e.body?.scrollLeft||i.scrollX||o.scrollLeft||0;return {top:s,left:a}}change(e=Ri$1){return e>0?this._change.pipe(Up(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();var Kt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({})}return n})(),_t=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({imports:[Tn,Kt,Tn,Kt]})}return n})();var be=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach());}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t;}},oe=class extends be{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,o,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=o,this.bindings=r||null,this.directives=s||null;}},re=class extends be{templateRef;viewContainerRef;context;injector;constructor(t,e,i,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=o;}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},vt=class extends be{element;constructor(t){super(),this.element=t instanceof Xn?t.nativeElement:t;}},se=class{_attachedPortal=null;_disposeFn=null;_isDisposed=false;hasAttached(){return !!this._attachedPortal}attach(t){if(t instanceof oe)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof re)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof vt)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=true;}setDisposeFn(t){this._disposeFn=t;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},ze=class extends se{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i;}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,o=i.get(fn,null,{optional:true})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy());}else {let i=this._appRef,o=t.injector||this._defaultInjector||de$1.NULL,r=o.get(ne,i.injector);e=fP(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(i);o!==-1&&e.remove(o);}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Ce=(()=>{class n extends se{_moduleRef=y(fn,{optional:true});_document=y(go);_viewContainerRef=y(ii$1);_isInitialized=false;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null);}attached=new Re;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=true;}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null;}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(i,o);});};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(o){return (e||(e=mg(n)))(o||n)}})();static \u0275dir=Av({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ef]})}return n})(),Q=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({})}return n})();var Jt=ou();function ce(n){return new je(n.get(ye),n.get(go))}var je=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=false;_document;constructor(t,e){this._viewportRuler=t,this._document=e;}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=yu(-this._previousScrollPosition.left),t.style.top=yu(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=true;}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,o=e.style,r=i.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=false,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),Jt&&(i.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Jt&&(i.scrollBehavior=r,o.scrollBehavior=s);}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return  false;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function si(n,t){return new We(n.get(mt),n.get(G$1),n.get(ye),t)}var We=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=o;}attach(t){this._overlayRef,this._overlayRef=t;}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Gt(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition();})):this._scrollSubscription=t.subscribe(this._detach);}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach());}};var we=class{enable(){}disable(){}attach(){}};function yt(n,t){return t.some(e=>{let i=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,s=n.left>e.right;return i||o||r||s})}function ei(n,t){return t.some(e=>{let i=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,s=n.right>e.right;return i||o||r||s})}function ai(n,t){return new He(n.get(mt),n.get(ye),n.get(G$1),t)}var He=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=o;}attach(t){this._overlayRef,this._overlayRef=t;}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();yt(e,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}},li=(()=>{class n{_injector=y(de$1);noop=()=>new we;close=e=>si(this._injector,e);block=()=>ce(this._injector);reposition=e=>ai(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})(),ae=class{positionStrategy;scrollStrategy=new we;panelClass="";hasBackdrop=false;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=false;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i]);}}};var Ye=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e;}};var ci=(()=>{class n{_attachedOverlays=[];_document=y(go);_isAttached=false;ngOnDestroy(){this.detach();}add(e){this.remove(e),this._attachedOverlays.push(e);}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(e,i,o){return o.observers.length<1?false:e.eventPredicate?e.eventPredicate(i):true}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})(),di=(()=>{class n extends ci{_ngZone=y(G$1);_renderer=y(Zn).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=true);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=false);}_keydownListener=e=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})(),hi=(()=>{class n extends ci{_platform=y(K);_ngZone=y(G$1);_renderer=y(Zn).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=false;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,o={capture:true},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,"pointerdown",this._pointerDownListener,o),r.listen(i,"click",this._clickListener,o),r.listen(i,"auxclick",this._clickListener,o),r.listen(i,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=true),this._isAttached=true;}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=false),this._isAttached=false);}_pointerDownListener=e=>{this._pointerDownEventTarget=et$1(e);};_clickListener=e=>{let i=et$1(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(ti(a.overlayElement,i)||ti(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e);}}};static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();function ti(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return  true;i=e&&i instanceof ShadowRoot?i.host:i.parentNode;}return  false}var pi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_v({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Ue=(()=>{class n{_platform=y(K);_containerElement;_document=y(go);_styleLoader=y(Ot$2);ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||cu()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove();}let i=this._document.createElement("div");i.classList.add(e),cu()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i;}_loadStyles(){this._styleLoader.load(pi);}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})(),bt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,o){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o);}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();}};function Ct(n){return n&&n.nodeType===1}var le=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ue;_attachments=new ue;_detachments=new ue;_positionStrategy;_scrollStrategy;_locationChanges=$.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=false;_previousHostParent;_keydownEvents=new ue;_outsidePointerEvents=new ue;_afterNextRenderRef;constructor(t,e,i,o,r,s,a,c,h,d=false,p,C){this._portalOutlet=t,this._host=e,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=p,this._renderer=C,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy;}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Sm(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(true),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,true),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(false),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=true;}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()));}updateSize(t){this._config=w(w({},this._config),t),this._updateElementSize();}setDirection(t){this._config=x(w({},this._config),{direction:t}),this._updateElementDirection();}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,true);}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,false);}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=yu(this._config.width),t.height=yu(this._config.height),t.minWidth=yu(this._config.minWidth),t.minHeight=yu(this._config.minHeight),t.maxWidth=yu(this._config.maxWidth),t.maxHeight=yu(this._config.maxHeight);}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none";}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ct(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch(t){}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new bt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,true),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t));}):this._backdropRef.element.classList.add(t);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(t,e,i){let o=vr(e||[]).filter(r=>!!r);o.length&&(i?t.classList.add(...o):t.classList.remove(...o));}_detachContentWhenEmpty(){let t=false;try{this._detachContentAfterRenderRef=Sm(()=>{t=!0,this._detachContent();},{injector:this._injector});}catch(e){if(t)throw e;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:true}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,false),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.();}},ii="cdk-overlay-connected-position-bounding-box",Ei$1=/([A-Za-z%]+)$/;function ui(n,t){return new Xe(t,n.get(ye),n.get(go),n.get(K),n.get(Ue))}var Xe=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=false;_lastBoundingBoxSize={width:0,height:0};_isPushed=false;_canPush=true;_growAfterOpen=false;_hasFlexibleDimensions=true;_positionLocked=false;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=false;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ue;_resizeSubscription=$.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(t);}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(ii),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=false,this._isInitialRender=true,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=true,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,o,a),h=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(h,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=false,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,h,i)){r.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:h,originPoint:c,position:a,overlayRect:e});}if(r.length){let a=null,c=-1;for(let h of r){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>c&&(c=d,a=h);}this._isPushed=false,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=true,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&J(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ii),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=true);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply();}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=true){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=true){return this._growAfterOpen=t,this}withPush(t=true){return this._canPush=t,this}withLockedPosition(t=true){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof Xn?this._origin.nativeElement:Ct(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let o;if(i.originX=="center")o=t.left+t.width/2;else {let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;o=i.originX=="start"?s:a;}e.left<0&&(o-=e.left);let r;return i.originY=="center"?r=t.top+t.height/2:r=i.originY=="top"?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,i){let o;i.overlayX=="center"?o=-e.width/2:i.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return i.overlayY=="center"?r=-e.height/2:r=i.overlayY=="top"?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,i,o){let r=oi(e),{x:s,y:a}=t,c=this._getOffset(o,"x"),h=this._getOffset(o,"y");c&&(s+=c),h&&(a+=h);let d=0-s,p=s+r.width-i.width,C=0-a,R=a+r.height-i.height,O=this._subtractOverflows(r.width,d,p),F=this._subtractOverflows(r.height,C,R),Pt=O*F;return {visibleArea:Pt,isCompletelyWithinViewport:r.width*r.height===Pt,fitsInViewportVertically:F===r.height,fitsInViewportHorizontally:O==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let o=i.bottom-e.y,r=i.right-e.x,s=ni(this._overlayRef.getConfig().minHeight),a=ni(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=o,h=t.fitsInViewportHorizontally||a!=null&&a<=r;return c&&h}return  false}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return {x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=oi(e),r=this._viewportRect,s=Math.max(t.x+o.width-r.width,0),a=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),h=Math.max(r.left-i.left-t.x,0),d=0,p=0;return o.width<=r.width?d=h||-s:d=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,o.height<=r.height?p=c||-a:p=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:d,y:p},{x:t.x+d,y:t.y+p}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Mi$1(this._lastScrollVisibility,i)){let o=new Ye(t,i);this._positionChanges.next(o);}this._lastScrollVisibility=i;}this._lastPosition=t,this._isInitialRender=false;}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${o}`;}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(e.overlayY==="top")s=t.y,r=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else {let R=Math.min(i.bottom-t.y+i.top,t.y),O=this._lastBoundingBoxSize.height;r=R*2,s=t.y-R,r>O&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-O/2);}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,h=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,d,p,C;if(h)C=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=t.x-this._getViewportMarginStart();else if(c)p=t.x,d=i.right-t.x-this._getViewportMarginEnd();else {let R=Math.min(i.right-t.x+i.left,t.x),O=this._lastBoundingBoxSize.width;d=R*2,p=t.x-R,d>O&&!this._isInitialRender&&!this._growAfterOpen&&(p=t.x-O/2);}return {top:s,left:p,bottom:a,right:C,width:d,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else {let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=yu(i.width),o.height=yu(i.height),o.top=yu(i.top)||"auto",o.bottom=yu(i.bottom)||"auto",o.left=yu(i.left)||"auto",o.right=yu(i.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=yu(r)),s&&(o.maxWidth=yu(s));}this._lastBoundingBoxSize=i,J(this._boundingBox.style,o);}_resetBoundingBoxStyles(){J(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){J(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(t,e){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();J(i,this._getExactOverlayY(e,t,d)),J(i,this._getExactOverlayX(e,t,d));}else i.position="static";let a="",c=this._getOffset(e,"x"),h=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),h&&(a+=`translateY(${h}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=yu(s.maxHeight):r&&(i.maxHeight="")),s.maxWidth&&(o?i.maxWidth=yu(s.maxWidth):r&&(i.maxWidth="")),J(this._pane.style,i);}_getExactOverlayY(t,e,i){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(r.y+this._overlayRect.height)}px`;}else o.top=yu(r.y);return o}_getExactOverlayX(t,e,i){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX==="end"?"left":"right":s=t.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;o.right=`${a-(r.x+this._overlayRect.width)}px`;}else o.left=yu(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return {isOriginClipped:ei(t,i),isOriginOutsideView:yt(t,i),isOverlayClipped:ei(e,i),isOverlayOutsideView:yt(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,o)=>i-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return {top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return !this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&vr(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof Xn)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return {top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function J(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function ni(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(Ei$1);return !e||e==="px"?parseFloat(t):null}return n||null}function oi(n){return {top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Mi$1(n,t){return n===t?true:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var ri="cdk-global-overlay-wrapper";function de(n){return new Ge}var Ge=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=false;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(ri),this._isDisposed=false;}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:a}=i,c=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),h=(r==="100%"||r==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,p=this._xOffset,C=this._overlayRef.getConfig().direction==="rtl",R="",O="",F="";c?F="flex-start":d==="center"?(F="center",C?O=p:R=p):C?d==="left"||d==="end"?(F="flex-end",R=p):(d==="right"||d==="start")&&(F="flex-start",O=p):d==="left"||d==="start"?(F="flex-start",R=p):(d==="right"||d==="end")&&(F="flex-end",O=p),t.position=this._cssPosition,t.marginLeft=c?"0":R,t.marginTop=h?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":O,e.justifyContent=F,e.alignItems=h?"flex-start":this._alignItems;}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(ri),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=true;}},fi=(()=>{class n{_injector=y(de$1);global(){return de()}flexibleConnectedTo(e){return ui(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})(),gi=new S("OVERLAY_DEFAULT_CONFIG");function Ze(n,t){n.get(Ot$2).load(pi);let e=n.get(Ue),i=n.get(go),o=n.get(Cr),r=n.get(sr),s=n.get(Xs),a=n.get(Fy,null,{optional:true})||n.get(Zn).createRenderer(null,null),c=new ae(t),h=n.get(gi,null,{optional:true})?.usePopover??true;c.direction=c.direction||s.value,"showPopover"in i.body?c.usePopover=t?.usePopover??h:c.usePopover=false;let d=i.createElement("div"),p=i.createElement("div");d.id=o.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),p.appendChild(d),c.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let C=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Ct(C)?C.after(p):C?.type==="parent"?C.element.appendChild(p):e.getContainerElement().appendChild(p),new le(new ze(d,r,n),p,d,c,n.get(G$1),n.get(di),i,n.get(sn),n.get(hi),t?.disableAnimations??n.get(kh,null,{optional:true})==="NoopAnimations",n.get(ne),a)}var mi=(()=>{class n{scrollStrategies=y(li);_positionBuilder=y(fi);_injector=y(de$1);create(e){return Ze(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();var Se=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({providers:[mi],imports:[Tn,Q,_t,_t]})}return n})();function Ai$1(n,t){}var Z=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=true;backdropClass="";disableClose=false;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=false;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;closeOnNavigation=true;closeOnDestroy=true;closeOnOverlayDetachments=true;disableAnimations=false;providers;container;templateContext;bindings};var St=(()=>{class n extends se{_elementRef=y(Xn);_focusTrapFactory=y(xl);_config;_interactivityChecker=y(Rs);_ngZone=y(G$1);_focusMonitor=y(br);_renderer=y(Fy);_changeDetectorRef=y(sP);_injector=y(de$1);_platform=y(K);_document=y(go);_portalOutlet;_focusTrapped=new ue;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=false;constructor(){super(),this._config=y(Z,{optional:true})||new Z,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck();}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck());}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus();}_captureInitialFocus(){this._trapFocus();}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=true,this._restoreFocus();}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus();}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),s(),e.removeAttribute("tabindex");},r=this._renderer.listen(e,"blur",o),s=this._renderer.listen(e,"mousedown",o);})),e.focus(i);}_focusByCssSelector(e,i){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,i);}_trapFocus(e){this._isDestroyed||Sm(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case  false:case "dialog":this._containsFocus()||i.focus(e);break;case  true:case "first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next();},{injector:this._injector});}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let o=_s(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus());}this._focusTrap&&this._focusTrap.destroy();}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e);}_containsFocus(){let e=this._elementRef.nativeElement,i=_s();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=_s()));}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_v({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(i,o){if(i&1&&Ff(Ce,7),i&2){let r;mI(r=yI())&&(o._portalOutlet=r.first);}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,o){i&2&&_f("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null);},features:[Ef],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,o){i&1&&wf(0,Ai$1,0,0,"ng-template",0);},dependencies:[Ce],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),Oe=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new ue;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!ya(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}));}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.();}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==false&&this.close();});}close(t,e){if(this._canClose(t)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(t),i.complete(),this.componentInstance=this.containerInstance=null;}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",e=""){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return !!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}},Ii=new S("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=y(de$1);return ()=>ce(n)}}),Ti=new S("DialogData"),Fi$1=new S("DefaultDialogConfig");function Bi$1(n){let t=Ps(n),e=new Re;return {valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete();}}}var Ot=(()=>{class n{_injector=y(de$1);_defaultOptions=y(Fi$1,{optional:true});_parentDialog=y(n,{optional:true,skipSelf:true});_overlayContainer=y(Ue);_idGenerator=y(Cr);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ue;_afterOpenedAtThisLevel=new ue;_ariaHiddenElements=new Map;_scrollStrategy=y(Ii);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Hp(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Xp(void 0)));open(e,i){let o=this._defaultOptions||new Z;i=w(w({},o),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let r=this._getOverlayConfig(i),s=Ze(this._injector,r),a=new Oe(s,i),c=this._attachContainer(s,a,i);if(a.containerInstance=c,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Si$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h);}):this._hideNonDialogContentFromAssistiveTechnology(h);}return this._attachDialogContent(e,a,c,i),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,true)),this.afterOpened.next(a),a}closeAll(){wt(this.openDialogs,e=>e.close());}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){wt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===false&&this._removeOpenDialog(e,false);}),wt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[];}_getOverlayConfig(e){let i=new ae({positionStrategy:e.positionStrategy||de().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,o){let r=o.injector||o.viewContainerRef?.injector,s=[{provide:Z,useValue:o},{provide:Oe,useValue:i},{provide:le,useValue:e}],a;o.container?typeof o.container=="function"?a=o.container:(a=o.container.type,s.push(...o.container.providers(o))):a=St;let c=new oe(a,o.viewContainerRef,de$1.create({parent:r||this._injector,providers:s}));return e.attach(c).instance}_attachDialogContent(e,i,o,r){if(e instanceof Qn){let s=this._createInjector(r,i,o,void 0),a={$implicit:r.data,dialogRef:i};r.templateContext&&(a=w(w({},a),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new re(e,null,a,s));}else {let s=this._createInjector(r,i,o,this._injector),a=o.attachComponentPortal(new oe(e,r.viewContainerRef,s,null,r.bindings));i.componentRef=a,i.componentInstance=a.instance;}}_createInjector(e,i,o,r){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:Ti,useValue:e.data},{provide:Oe,useValue:i}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(i,e,o)):a.push(...e.providers)),e.direction&&(!s||!s.get(Xs,null,{optional:true}))&&a.push({provide:Xs,useValue:Bi$1(e.direction)}),de$1.create({parent:s||r,providers:a})}_removeOpenDialog(e,i){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute("aria-hidden",r):s.removeAttribute("aria-hidden");}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()));}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let o=i.length-1;o>-1;o--){let r=i[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"));}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();function wt(n,t){let e=n.length;for(;e--;)t(n[e]);}var vi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({providers:[Ot],imports:[Se,Q,Rl,Q]})}return n})();function Li$1(n,t){}var qe=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=true;backdropClass="";disableClose=false;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=false;autoFocus="first-tabbable";restoreFocus=true;delayFocusTrap=true;scrollStrategy;closeOnNavigation=true;enterAnimationDuration;exitAnimationDuration;bindings},kt="mdc-dialog--open",yi="mdc-dialog--opening",bi="mdc-dialog--closing",Ni=150,Vi$1=75,zi$1=(()=>{class n extends St{_animationStateChanged=new Re;_animationsEnabled=!An();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?wi(this._config.enterAnimationDuration)??Ni:0;_exitAnimationDuration=this._animationsEnabled?wi(this._config.exitAnimationDuration)??Vi$1:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation();}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(yi,kt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(kt),Promise.resolve().then(()=>this._finishDialogOpen()));}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(kt),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(bi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose());}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck();}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration);};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration});};_clearAnimationClasses(){this._hostElement.classList.remove(yi,bi);}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e);}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e();});}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus();}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e});}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer);}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(o){return (e||(e=mg(n)))(o||n)}})();static \u0275cmp=_v({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,o){i&2&&(Rf("id",o._config.id),_f("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),Bf("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0));},features:[Ef],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){i&1&&(Go(0,"div",0)(1,"div",1),wf(2,Li$1,0,0,"ng-template",2),ic()());},dependencies:[Ce],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ci="--mat-dialog-transition-duration";function wi(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?ws(n.substring(0,n.length-2)):n.endsWith("s")?ws(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var $e=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})($e||{}),ke=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _i(1);_beforeClosed=new _i(1);_result;_closeFallbackTimeout;_state=$e.OPEN;_closeInteractionType;constructor(t,e,i){this._ref=t,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(Gt(o=>o.state==="opened"),Si$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),i._animationStateChanged.pipe(Gt(o=>o.state==="closed"),Si$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose();}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose();}),$p(this.backdropClick(),this.keydownEvents().pipe(Gt(o=>o.keyCode===27&&!this.disableClose&&!ya(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),ji$1(this,o.type==="keydown"?"keyboard":"mouse"));});}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(Gt(i=>i.state==="closing"),Si$1(1)).subscribe(i=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100);}),this._state=$e.CLOSING,this._containerInstance._startExitAnimation());}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",e=""){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=$e.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null;}};function ji$1(n,t,e){return n._closeInteractionType=t,n.close(e)}var Dt=new S("MatMdcDialogData"),Wi=new S("mat-mdc-dialog-default-options"),Hi$1=new S("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=y(de$1);return ()=>ce(n)}}),xt=(()=>{class n{_defaultOptions=y(Wi,{optional:true});_scrollStrategy=y(Hi$1);_parentDialog=y(n,{optional:true,skipSelf:true});_idGenerator=y(Cr);_injector=y(de$1);_dialog=y(Ot);_animationsDisabled=An();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ue;_afterOpenedAtThisLevel=new ue;dialogConfigClass=qe;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Hp(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Xp(void 0)));constructor(){this._dialogRefConstructor=ke,this._dialogContainerType=zi$1,this._dialogDataToken=Dt;}open(e,i){let o;i=w(w({},this._defaultOptions||new qe),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,x(w({},i),{positionStrategy:de(this._injector).centerHorizontally().centerVertically(),disableClose:true,closePredicate:void 0,closeOnDestroy:false,closeOnOverlayDetachments:false,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Z,useValue:i}]},templateContext:()=>({dialogRef:o}),providers:(s,a,c)=>(o=new this._dialogRefConstructor(s,i,c),o.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next());}),o}closeAll(){this._closeDialogs(this.openDialogs);}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete();}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close();}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ot$1({token:n,factory:n.\u0275fac})}return n})();var Ke=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({providers:[xt],imports:[vi,Se,Q,Tn]})}return n})();var Qe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Nv({type:n});static \u0275inj=al({imports:[Tn]})}return n})();function Yi(n,t){if(n&1&&(Go(0,"video",6),Nf(1,"source",7),HI(2," Your browser does not support the video tag. "),ic()),n&2){let e=dI();Hf("background",e.data.backgroundColor||"transparent"),Xm(),Mf("src",e.data.src);}}function Xi(n,t){if(n&1&&Nf(0,"img",8),n&2){let e=dI();Hf("background",e.data.backgroundColor||"transparent"),Mf("alt",e.data.alt)("src",e.data.src,wd);}}var Je=class n{constructor(t,e){this.dialogRef=t;this.data=e;}dialogRef;data;isVideo(){return this.data.src.endsWith(".webm")||this.data.src.endsWith(".mp4")}close(){this.dialogRef.close();}static \u0275fac=function(e){return new(e||n)(ir(ke),ir(Dt))};static \u0275cmp=_v({type:n,selectors:[["app-fullscreen-image-dialog"]],decls:6,vars:1,consts:[[1,"fullscreen-container"],["aria-label","Close fullscreen image","mat-icon-button","",1,"close-button",3,"click"],["name","matClose","size","32"],[1,"image-wrapper",3,"click"],["autoplay","","controls","","loop","","playsinline","",1,"fullscreen-image",3,"background"],[1,"fullscreen-image",3,"alt","src","background"],["autoplay","","controls","","loop","","playsinline","",1,"fullscreen-image"],["type","video/webm",3,"src"],[1,"fullscreen-image",3,"alt","src"]],template:function(e,i){e&1&&(Go(0,"div",0)(1,"button",1),Of("click",function(){return i.close()}),Nf(2,"ng-icon",2),ic(),Go(3,"div",3),Of("click",function(){return i.close()}),zv(4,Yi,3,3,"video",4)(5,Xi,1,4,"img",5),ic()()),e&2&&(Xm(4),Qv(i.isVideo()?4:5));},dependencies:[Qe,lm,Zs,Ke,le$2],styles:[".fullscreen-container[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.close-button[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1000;background:#ffffff1a;color:#fff;width:48px;height:48px}.close-button[_ngcontent-%COMP%]:hover{background:#fff3}.close-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.image-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;cursor:pointer}.fullscreen-image[_ngcontent-%COMP%]{max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px}"],changeDetection:1})};function Gi$1(n,t){if(n&1&&(Go(0,"video",5),Nf(1,"source",6),HI(2," Your browser does not support the video tag. "),ic()),n&2){let e=dI();Hf("height",e.height)("object-fit",e.objectFit)("width",e.width),Xm(),Mf("src",e.src);}}function Ui(n,t){if(n&1&&Nf(0,"img",7),n&2){let e=dI();SI(e.imageClass),Hf("height",e.height)("object-fit",e.objectFit)("width",e.width),Mf("alt",e.alt)("src",e.src,wd);}}var et=class n{constructor(t){this.dialog=t;}dialog;src="";alt="";width="auto";height="auto";objectFit="cover";imageClass="";backgroundColor="transparent";isVideo(){return this.src.endsWith(".webm")||this.src.endsWith(".mp4")}openFullscreen(){this.dialog.open(Je,{data:{src:this.src,alt:this.alt,backgroundColor:this.backgroundColor},panelClass:"fullscreen-dialog",maxWidth:"100vw",maxHeight:"100vh",hasBackdrop:true,backdropClass:"fullscreen-backdrop"});}static \u0275fac=function(e){return new(e||n)(ir(xt))};static \u0275cmp=_v({type:n,selectors:[["app-image-wrapper"]],inputs:{src:"src",alt:"alt",width:"width",height:"height",objectFit:"objectFit",imageClass:"imageClass",backgroundColor:"backgroundColor"},decls:5,vars:7,consts:[[1,"image-container",3,"click"],["autoplay","","loop","","muted","","playsinline","",1,"clickable-image",3,"height","object-fit","width"],[1,"clickable-image",3,"alt","class","src","height","object-fit","width"],[1,"overlay"],["name","matFullscreen","size","64"],["autoplay","","loop","","muted","","playsinline","",1,"clickable-image"],["type","video/webm",3,"src"],[1,"clickable-image",3,"alt","src"]],template:function(e,i){e&1&&(Go(0,"div",0),Of("click",function(){return i.openFullscreen()}),zv(1,Gi$1,3,7,"video",1)(2,Ui,1,10,"img",2),Go(3,"div",3),Nf(4,"ng-icon",4),ic()()),e&2&&(Hf("background",i.backgroundColor)("height",i.height)("width",i.width),Xm(),Qv(i.isVideo()?1:2));},dependencies:[Qe,lm,Ke,le$2],styles:[".image-container[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer;overflow:hidden;border-radius:8px}.clickable-image[_ngcontent-%COMP%]{transition:transform .3s ease;display:block}.image-container[_ngcontent-%COMP%]:hover   .clickable-image[_ngcontent-%COMP%]{transform:scale(.95)}.overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000004d;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s ease}.image-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.expand-icon[_ngcontent-%COMP%]{color:#fff;font-size:48px;width:48px;height:48px}"],changeDetection:1})};var Zi=["*"],Oi$1=class n{imageSrc="";imageAlt="";imageHeight="400px";imageObjectFit="cover";ratio="50-50";imagePosition="left";imageClass="";imageBackgroundColor="transparent";get containerClasses(){return {[`ratio-${this.ratio}`]:true,[`image-${this.imagePosition}`]:true}}get imageSectionClasses(){return {"image-section":true}}get contentSectionClasses(){return {"content-section":true}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_v({type:n,selectors:[["app-image-content-layout"]],inputs:{imageSrc:"imageSrc",imageAlt:"imageAlt",imageHeight:"imageHeight",imageObjectFit:"imageObjectFit",ratio:"ratio",imagePosition:"imagePosition",imageClass:"imageClass",imageBackgroundColor:"imageBackgroundColor"},ngContentSelectors:Zi,decls:6,vars:10,consts:[[1,"layout-container",3,"ngClass"],[1,"image-section",3,"ngClass"],[3,"alt","backgroundColor","height","imageClass","objectFit","src","width"],[1,"content-section",3,"ngClass"],[1,"content-wrapper"]],template:function(e,i){e&1&&(pI(),Go(0,"div",0)(1,"div",1),Nf(2,"app-image-wrapper",2),ic(),Go(3,"div",3)(4,"div",4),hI(5),ic()()()),e&2&&(Mf("ngClass",i.containerClasses),Xm(),Mf("ngClass",i.imageSectionClasses),Xm(),Mf("alt",i.imageAlt)("backgroundColor",i.imageBackgroundColor)("height",i.imageHeight)("imageClass",i.imageClass)("objectFit",i.imageObjectFit)("src",i.imageSrc)("width","100%"),Xm(),Mf("ngClass",i.contentSectionClasses));},dependencies:[wn,ur,et],styles:[".layout-container[_ngcontent-%COMP%]{display:flex;width:100%;max-width:1200px;margin:0 auto;gap:15px;align-items:stretch}.layout-container.ratio-2img-1text[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{flex:2}.layout-container.ratio-2img-1text[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%], .layout-container.ratio-50-50[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%], .layout-container.ratio-50-50[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%], .layout-container.ratio-1img-2text[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{flex:1}.layout-container.ratio-1img-2text[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{flex:2}.layout-container.image-right[_ngcontent-%COMP%]{flex-direction:row-reverse}.layout-container.image-left[_ngcontent-%COMP%]{flex-direction:row}.image-section[_ngcontent-%COMP%]{display:flex;align-items:center}.content-section[_ngcontent-%COMP%]{display:flex;align-items:center;padding:20px}.content-wrapper[_ngcontent-%COMP%]{width:100%}.responsive-image[_ngcontent-%COMP%]{border-radius:8px;cursor:pointer;transition:transform .3s ease}.responsive-image[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.content-wrapper[_ngcontent-%COMP%]     h1, .content-wrapper[_ngcontent-%COMP%]     h2, .content-wrapper[_ngcontent-%COMP%]     h3, .content-wrapper[_ngcontent-%COMP%]     h4, .content-wrapper[_ngcontent-%COMP%]     h5, .content-wrapper[_ngcontent-%COMP%]     h6{margin-top:0;margin-bottom:16px;color:#333}.content-wrapper[_ngcontent-%COMP%]     p{margin-bottom:16px;line-height:1.6}.content-wrapper[_ngcontent-%COMP%]     ul, .content-wrapper[_ngcontent-%COMP%]     ol{margin-bottom:16px;padding-left:24px}.content-wrapper[_ngcontent-%COMP%]     li{margin-bottom:8px;line-height:1.5}@media(max-width:768px){.layout-container[_ngcontent-%COMP%]{flex-direction:column!important;gap:20px}.layout-container[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%], .layout-container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{flex:none!important}.content-section[_ngcontent-%COMP%]{padding:0 16px}.content-wrapper[_ngcontent-%COMP%]     h1, .content-wrapper[_ngcontent-%COMP%]     h2, .content-wrapper[_ngcontent-%COMP%]     h3{font-size:1.2em}}@media(max-width:480px){.content-section[_ngcontent-%COMP%]{padding:0 12px}}"],changeDetection:1})};function $i(n,t){if(n&1&&(sc(0,"p"),HI(1),ac()),n&2){let e=dI();Xm(),zf(e.subtitle);}}function qi(n,t){if(n&1&&(sc(0,"span",8),HI(1),ac()),n&2){let e=dI().$implicit;Xm(),zf(e.timestamp);}}function Ki(n,t){if(n&1&&(sc(0,"article",5)(1,"div",6)(2,"span",7),HI(3),ac(),zv(4,qi,2,1,"span",8),ac(),sc(5,"div",9)(6,"p"),HI(7),ac()()()),n&2){let e=t.$implicit,i=t.$index,o=t.$count;Bf("last-message",i===o-1),Xm(3),zf(e.sender),Xm(),Qv(e.timestamp?4:-1),Xm(3),zf(e.text);}}var ki$1=class n{title="Chat";subtitle;messages=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_v({type:n,selectors:[["app-chat-window"]],inputs:{title:"title",subtitle:"subtitle",messages:"messages"},decls:11,vars:2,consts:[[1,"chat-window"],[1,"chat-header"],[1,"chat-badge"],[1,"chat-messages"],[1,"chat-message",3,"last-message"],[1,"chat-message"],[1,"message-meta"],[1,"sender"],[1,"timestamp"],[1,"message-bubble"]],template:function(e,i){e&1&&(sc(0,"section",0)(1,"header",1)(2,"div")(3,"h3"),HI(4),ac(),zv(5,$i,2,1,"p"),ac(),sc(6,"span",2),HI(7,"Group chat"),ac()(),sc(8,"div",3),Yv(9,Ki,8,5,"article",4,Zv),ac()()),e&2&&(Xm(4),zf(i.title),Xm(),Qv(i.subtitle?5:-1),Xm(4),Kv(i.messages));},styles:[".chat-window[_ngcontent-%COMP%]{background:#0f141b;border:1px solid #273241;border-radius:18px;box-shadow:0 16px 40px #00000040;overflow:hidden;margin:1rem 0}.chat-header[_ngcontent-%COMP%]{align-items:center;background:linear-gradient(180deg,#18212b,#121820);border-bottom:1px solid #273241;display:flex;justify-content:space-between;gap:1rem;padding:1rem 1.25rem}.chat-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#eff7f2;font-size:1.1rem;margin:0}.chat-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#9fb0c0;font-size:.875rem;margin:.25rem 0 0}.chat-badge[_ngcontent-%COMP%]{background:#00ff871f;border:1px solid rgba(0,255,135,.3);border-radius:999px;color:#9ef0bc;font-size:.75rem;font-weight:600;padding:.35rem .75rem;white-space:nowrap}.chat-messages[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.9rem;padding:1rem 1.25rem 1.25rem}.chat-message[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem}.message-meta[_ngcontent-%COMP%]{align-items:baseline;display:flex;flex-wrap:wrap;gap:.65rem}.sender[_ngcontent-%COMP%]{color:#dcffe9;font-size:.95rem;font-weight:700}.timestamp[_ngcontent-%COMP%]{color:#7e93a6;font-size:.75rem}.message-bubble[_ngcontent-%COMP%]{background:#16202b;border-left:3px solid #00ff87;border-radius:14px;color:#e8f3ec;padding:.8rem .95rem}.message-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;white-space:pre-wrap;word-break:break-word}.last-message[_ngcontent-%COMP%]{margin-bottom:.15rem}"],changeDetection:1})};var Bi=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Li=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Oi(n,p){n&1&&(Go(0,"span",3),hI(1,1),ic());}function ji(n,p){n&1&&(Go(0,"span",6),hI(1,2),ic());}var Hi=["*"];var ki=new S("MatChipAvatar"),Ei=new S("MatChipTrailingIcon"),Si=new S("MatChipEdit"),Mi=new S("MatChipRemove"),Di=new S("MatChip"),Ai=(()=>{class n{_elementRef=y(Xn);_parentChip=y(Di);_isPrimary=true;_isLeading=false;get disabled(){return this._disabled||this._parentChip?.disabled||false}set disabled(i){this._disabled=i;}_disabled=false;tabIndex=-1;_allowFocusWhenDisabled=false;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){y(Ot$2).load(Ma),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button");}focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Av({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,e){t&2&&(_f("disabled",e._getDisabledAttribute())("aria-disabled",e.disabled),Bf("mdc-evolution-chip__action--primary",e._isPrimary)("mdc-evolution-chip__action--secondary",!e._isPrimary)("mdc-evolution-chip__action--trailing",!e._isPrimary&&!e._isLeading));},inputs:{disabled:[2,"disabled","disabled",lP],tabIndex:[2,"tabIndex","tabIndex",i=>i==null?-1:uP(i)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),zi=(()=>{class n extends Ai{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(i){!this.disabled&&this._isPrimary&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}_handleKeydown(i){(i.keyCode===13||i.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}static \u0275fac=(()=>{let i;return function(e){return (i||(i=mg(n)))(e||n)}})();static \u0275dir=Av({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,e){t&1&&Of("click",function(a){return e._handleClick(a)})("keydown",function(a){return e._handleKeydown(a)}),t&2&&(_f("tabindex",e._getTabindex()),Bf("mdc-evolution-chip__action--presentational",false));},features:[Ef]})}return n})();var G=(()=>{class n{_changeDetectorRef=y(sP);_elementRef=y(Xn);_tagName=y(tP);_ngZone=y(G$1);_focusMonitor=y(br);_globalRippleOptions=y(Ia,{optional:true});_document=y(go);_onFocus=new ue;_onBlur=new ue;_isBasicChip=false;role=null;_hasFocusInternal=false;_pendingFocus=false;_actionChanges;_animationsDisabled=An();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(Cr).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=false;_hadFocusOnRemove=false;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(i){this._value=i;}_value;color;removable=true;highlighted=false;disableRipple=false;get disabled(){return this._disabled||this._chipListDisabled}set disabled(i){this._disabled=i;}_disabled=false;removed=new Re;destroyed=new Re;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(Sa);_injector=y(de$1);constructor(){let i=y(Ot$2);i.load(Ma),i.load(ua),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()});}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName;}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=false,this.focus());}ngAfterContentInit(){this._actionChanges=$p(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck());}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled());}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete();}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}));}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return !!(this.trailingIcon||this.removeIcon)}_handleKeydown(i){(i.keyCode===8&&!i.repeat||i.keyCode===46)&&(i.preventDefault(),this.remove());}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=true);}_getSourceAction(i){return this._getActions().find(t=>{let e=t._elementRef.nativeElement;return e===i||e.contains(i)})}_getActions(){let i=[];return this.editIcon&&i.push(this.editIcon),this.primaryAction&&i.push(this.primaryAction),this.removeIcon&&i.push(this.removeIcon),i}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(i){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,true).subscribe(i=>{let t=i!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))));});}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_v({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,e,c){if(t&1&&Lf(c,ki,5)(c,Si,5)(c,Ei,5)(c,Mi,5)(c,ki,5)(c,Ei,5)(c,Si,5)(c,Mi,5),t&2){let a;mI(a=yI())&&(e.leadingIcon=a.first),mI(a=yI())&&(e.editIcon=a.first),mI(a=yI())&&(e.trailingIcon=a.first),mI(a=yI())&&(e.removeIcon=a.first),mI(a=yI())&&(e._allLeadingIcons=a),mI(a=yI())&&(e._allTrailingIcons=a),mI(a=yI())&&(e._allEditIcons=a),mI(a=yI())&&(e._allRemoveIcons=a);}},viewQuery:function(t,e){if(t&1&&Ff(zi,5),t&2){let c;mI(c=yI())&&(e.primaryAction=c.first);}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,e){t&1&&Of("keydown",function(a){return e._handleKeydown(a)}),t&2&&(Rf("id",e.id),_f("role",e.role)("aria-label",e.ariaLabel),SI("mat-"+(e.color||"primary")),Bf("mdc-evolution-chip",!e._isBasicChip)("mdc-evolution-chip--disabled",e.disabled)("mdc-evolution-chip--with-trailing-action",e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",e.leadingIcon)("mdc-evolution-chip--with-primary-icon",e.leadingIcon)("mdc-evolution-chip--with-avatar",e.leadingIcon)("mat-mdc-chip-with-avatar",e.leadingIcon)("mat-mdc-chip-highlighted",e.highlighted)("mat-mdc-chip-disabled",e.disabled)("mat-mdc-basic-chip",e._isBasicChip)("mat-mdc-standard-chip",!e._isBasicChip)("mat-mdc-chip-with-trailing-icon",e._hasTrailingIcon())("_mat-animation-noopable",e._animationsDisabled));},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",lP],highlighted:[2,"highlighted","highlighted",lP],disableRipple:[2,"disableRipple","disableRipple",lP],disabled:[2,"disabled","disabled",lP]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[QI([{provide:Di,useExisting:n}])],ngContentSelectors:Li,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,e){t&1&&(pI(Bi),Nf(0,"span",0),Go(1,"span",1)(2,"span",2),zv(3,Oi,2,0,"span",3),Go(4,"span",4),hI(5),Nf(6,"span",5),ic()()(),zv(7,ji,2,0,"span",6)),t&2&&(Xm(3),Qv(e.leadingIcon?3:-1),Xm(4),Qv(e._hasTrailingIcon()?7:-1));},dependencies:[Ai],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Fi=(()=>{class n{_elementRef=y(Xn);_changeDetectorRef=y(sP);_dir=y(Xs,{optional:true});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new ue;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(i=>i._onFocus)}get chipDestroyedChanges(){return this._getChipStream(i=>i.destroyed)}get chipRemovedChanges(){return this._getChipStream(i=>i.removed)}get disabled(){return this._disabled}set disabled(i){this._disabled=i,this._syncChipsState();}_disabled=false;get empty(){return !this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(i){this._explicitRole=i;}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Oo;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip();}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete();}_hasFocusedChip(){return this._chips&&this._chips.some(i=>i._hasFocus())}_syncChipsState(){this._chips?.forEach(i=>{i._chipListDisabled=this._disabled,i._changeDetectorRef.markForCheck();});}focus(){}_handleKeydown(i){this._originatesFromChip(i)&&this._keyManager.onKeydown(i);}_isValidIndex(i){return i>=0&&i<this._chips.length}_allowFocusEscape(){let i=this._elementRef.nativeElement.tabIndex;i!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=i));}_getChipStream(i){return this._chips.changes.pipe(Xp(null),el(()=>$p(...this._chips.map(i))))}_originatesFromChip(i){let t=i.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return  true;t=t.parentElement;}return  false}_setUpFocusManagement(){this._chips.changes.pipe(Xp(this._chips)).subscribe(i=>{let t=[];i.forEach(e=>e._getActions().forEach(c=>t.push(c))),this._chipActions.reset(t),this._chipActions.notifyOnChanges();}),this._keyManager=new Er(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(i=>this._skipPredicate(i)),this.chipFocusChanges.pipe(eh(this._destroyed)).subscribe(({chip:i})=>{let t=i._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t);}),this._dir?.change.pipe(eh(this._destroyed)).subscribe(i=>this._keyManager.withHorizontalOrientation(i));}_skipPredicate(i){return i.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Xp(null),eh(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus();});}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(eh(this._destroyed)).subscribe(i=>{let e=this._chips.toArray().indexOf(i.chip),c=i.chip._hasFocus(),a=i.chip._hadFocusOnRemove&&this._keyManager.activeItem&&i.chip._getActions().includes(this._keyManager.activeItem),Ti=c||a;this._isValidIndex(e)&&Ti&&(this._lastDestroyedFocusedChipIndex=e);});}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let i=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[i];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus();}else this.focus();this._lastDestroyedFocusedChipIndex=null;}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_v({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,e,c){if(t&1&&Lf(c,G,5),t&2){let a;mI(a=yI())&&(e._chips=a);}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,e){t&1&&Of("keydown",function(a){return e._handleKeydown(a)}),t&2&&_f("role",e.role);},inputs:{disabled:[2,"disabled","disabled",lP],role:"role",tabIndex:[2,"tabIndex","tabIndex",i=>i==null?0:uP(i)]},ngContentSelectors:Hi,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,e){t&1&&(pI(),sc(0,"div",0),hI(1),ac());},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();function Vi(n,p){if(n&1&&Nf(0,"img",1),n&2){let i=dI();Mf("src",WI(i.project.image),wd);}}function Gi(n,p){if(n&1&&(Go(0,"mat-chip",4),HI(1),ic()),n&2){let i=p.$implicit;Xm(),zf(i.name);}}var k=class k{constructor(p){this.locale=p;}locale;project;dateString="";ngOnInit(){this.project?.date?this.dateString=Kn(this.project.date,"yyyy-MM-dd",this.locale):this.dateString="";}static \u0275fac=function(i){return new(i||k)(ir(dc))};static \u0275cmp=_v({type:k,selectors:[["app-project-card"]],inputs:{project:"project"},decls:13,vars:7,consts:[[1,"project-card",3,"routerLink"],["alt","",3,"src"],[1,"card-date"],["aria-label","Project Tags"],["disableRipple",""]],template:function(i,t){i&1&&(Go(0,"mat-card",0),zv(1,Vi,1,2,"img",1),Go(2,"mat-card-header")(3,"mat-card-title"),HI(4),ic()(),Go(5,"div",2),HI(6),ic(),Go(7,"mat-card-content")(8,"p"),HI(9),ic(),Go(10,"mat-chip-set",3),Yv(11,Gi,2,1,"mat-chip",4,Zv),ic()()()),i&2&&(Mf("routerLink",WI(t.project.tag)),Xm(),Qv(t.project.image!=""||t.project.image==null?1:-1),Xm(3),zf(t.project.name),Xm(),Mf("@If",t.project.date),Xm(),zf(t.dateString),Xm(3),zf(t.project.description),Xm(2),Kv(t.project.chips));},dependencies:[Fi,G,vm,wm,_m,ym,wn$1],encapsulation:2,changeDetection:1})};B([rE()],k.prototype,"project");var Ri=k;export{Oi$1 as O,Ri as R,et as e,ki$1 as k,qt as q};