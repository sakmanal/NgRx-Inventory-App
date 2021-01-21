(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{WLUK:function(e,t,r){"use strict";r.r(t),r.d(t,"ProductsModule",function(){return me});var c={};r.r(c),r.d(c,"toggleProductCode",function(){return n}),r.d(c,"setCurrentProduct",function(){return u}),r.d(c,"clearCurrentProduct",function(){return a}),r.d(c,"initializeCurrentProduct",function(){return l}),r.d(c,"loadProducts",function(){return p}),r.d(c,"updateProduct",function(){return b}),r.d(c,"createProduct",function(){return h}),r.d(c,"deleteProduct",function(){return P});var o={};r.r(o),r.d(o,"loadProductsSuccess",function(){return g}),r.d(o,"loadProductsFailure",function(){return f}),r.d(o,"updateProductSuccess",function(){return O}),r.d(o,"updateProductFailure",function(){return j}),r.d(o,"createProductSuccess",function(){return m}),r.d(o,"createProductFailure",function(){return C}),r.d(o,"deleteProductSuccess",function(){return y}),r.d(o,"deleteProductFailure",function(){return S});var d=r("tyNb"),s=r("PCNd"),i=r("l7P3");const n=Object(i.n)("[Product Page] Toggle Product Code"),u=Object(i.n)("[Product Page] Set Current Product",Object(i.s)()),a=Object(i.n)("[Product Page] Clear Current Product"),l=Object(i.n)("[Product Page] Initialize Current Product"),p=Object(i.n)("[Product Page] Load"),b=Object(i.n)("[Product Page] Update Product",Object(i.s)()),h=Object(i.n)("[Product Page] Create Product",Object(i.s)()),P=Object(i.n)("[Product Page] Delete Product",Object(i.s)()),g=Object(i.n)("[Product API] Load Success",Object(i.s)()),f=Object(i.n)("[Product API] Load Fail",Object(i.s)()),O=Object(i.n)("[Product API] Update Product Success",Object(i.s)()),j=Object(i.n)("[Product API] Update Product Fail",Object(i.s)()),m=Object(i.n)("[Product API] Create Product Success",Object(i.s)()),C=Object(i.n)("[Product API] Create Product Fail",Object(i.s)()),y=Object(i.n)("[Product API] Delete Product Success",Object(i.s)()),S=Object(i.n)("[Product API] Delete Product Fail",Object(i.s)()),v=Object(i.p)({showProductCode:!0,currentProductId:null,products:[],error:""},Object(i.r)(c.toggleProductCode,e=>Object.assign(Object.assign({},e),{showProductCode:!e.showProductCode})),Object(i.r)(c.setCurrentProduct,(e,t)=>Object.assign(Object.assign({},e),{currentProductId:t.currentProductId})),Object(i.r)(c.clearCurrentProduct,e=>Object.assign(Object.assign({},e),{currentProductId:null})),Object(i.r)(c.initializeCurrentProduct,e=>Object.assign(Object.assign({},e),{currentProductId:0})),Object(i.r)(o.loadProductsSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:t.products,error:""})),Object(i.r)(o.loadProductsFailure,(e,t)=>Object.assign(Object.assign({},e),{products:[],error:t.error})),Object(i.r)(o.updateProductSuccess,(e,t)=>{const r=e.products.map(e=>t.product.id===e.id?t.product:e);return Object.assign(Object.assign({},e),{products:r,currentProductId:t.product.id,error:""})}),Object(i.r)(o.updateProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(i.r)(o.createProductSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:[...e.products,t.product],currentProductId:t.product.id,error:""})),Object(i.r)(o.createProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(i.r)(o.deleteProductSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:e.products.filter(e=>e.id!==t.productId),currentProductId:null,error:""})),Object(i.r)(o.deleteProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})));var w=r("9jGm"),I=r("5+tZ"),R=r("lJxs"),M=r("JIr8"),N=r("bOdf"),F=r("LRne"),B=r("fXoL"),x=r("tk/3"),$=r("z6cu"),k=r("vkgz");let z=(()=>{class e{constructor(e){this.http=e,this.productsUrl="api/products"}getProducts(){return this.http.get(this.productsUrl).pipe(Object(k.a)(e=>console.log(JSON.stringify(e))),Object(M.a)(this.handleError))}createProduct(e){const t=new x.d({"Content-Type":"application/json"}),r=Object.assign(Object.assign({},e),{id:null});return this.http.post(this.productsUrl,r,{headers:t}).pipe(Object(k.a)(e=>console.log("createProduct: "+JSON.stringify(e))),Object(M.a)(this.handleError))}deleteProduct(e){const t=new x.d({"Content-Type":"application/json"});return this.http.delete(`${this.productsUrl}/${e}`,{headers:t}).pipe(Object(k.a)(t=>console.log("deleteProduct: "+e)),Object(M.a)(this.handleError))}updateProduct(e){const t=new x.d({"Content-Type":"application/json"});return this.http.put(`${this.productsUrl}/${e.id}`,e,{headers:t}).pipe(Object(k.a)(()=>console.log("updateProduct: "+e.id)),Object(R.a)(()=>e),Object(M.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?"An error occurred: "+e.error.message:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object($.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(B.Wb(x.b))},e.\u0275prov=B.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),T=(()=>{class e{constructor(e,t){this.actions$=e,this.productService=t,this.loadProducts$=Object(w.c)(()=>this.actions$.pipe(Object(w.d)(c.loadProducts),Object(I.a)(()=>this.productService.getProducts().pipe(Object(R.a)(e=>o.loadProductsSuccess({products:e})),Object(M.a)(e=>Object(F.a)(o.loadProductsFailure({error:e}))))))),this.updateProduct$=Object(w.c)(()=>this.actions$.pipe(Object(w.d)(c.updateProduct),Object(N.a)(e=>this.productService.updateProduct(e.product).pipe(Object(R.a)(e=>o.updateProductSuccess({product:e})),Object(M.a)(e=>Object(F.a)(o.updateProductFailure({error:e}))))))),this.createProduct$=Object(w.c)(()=>this.actions$.pipe(Object(w.d)(c.createProduct),Object(N.a)(e=>this.productService.createProduct(e.product).pipe(Object(R.a)(e=>o.createProductSuccess({product:e})),Object(M.a)(e=>Object(F.a)(o.createProductFailure({error:e}))))))),this.deleteProduct$=Object(w.c)(()=>this.actions$.pipe(Object(w.d)(c.deleteProduct),Object(I.a)(e=>this.productService.deleteProduct(e.productId).pipe(Object(R.a)(()=>o.deleteProductSuccess({productId:e.productId})),Object(M.a)(e=>Object(F.a)(o.deleteProductFailure({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(B.Wb(w.a),B.Wb(z))},e.\u0275prov=B.Ib({token:e,factory:e.\u0275fac}),e})();const q=Object(i.o)("products"),A=Object(i.q)(q,e=>e.showProductCode),Z=Object(i.q)(q,e=>e.currentProductId),E=Object(i.q)(q,Z,(e,t)=>0===t?{id:0,productName:"",productCode:"New",description:"",starRating:0}:t?e.products.find(e=>e.id===t):null),U=Object(i.q)(q,e=>[...e.products]),J=Object(i.q)(q,e=>e.error);var W=r("ofXK"),L=r("cQJI"),D=r("7zfz"),G=r("jIHw"),_=r("dts7");function V(e,t){if(1&e&&(B.Sb(0,"div"),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.xc(e.errorMessage)}}function K(e,t){1&e&&(B.Sb(0,"p-messages",6),B.uc(1,V,2,1,"ng-template",7),B.Rb())}function Q(e,t){if(1&e&&(B.Qb(0),B.wc(1),B.Pb()),2&e){const e=B.cc().$implicit;B.Bb(1),B.yc(" (",e.productCode,") ")}}function X(e,t){if(1&e&&(B.Sb(0,"div"),B.wc(1),B.uc(2,Q,2,1,"ng-container",8),B.Rb()),2&e){const e=t.$implicit,r=B.cc();B.Bb(1),B.yc(" ",e.productName," "),B.Bb(1),B.hc("ngIf",r.displayCode)}}const H=function(){return{height:"auto"}},Y=function(e){return[e]};let ee=(()=>{class e{constructor(){this.pageTitle="Products",this.displayCodeChanged=new B.n,this.initializeNewProduct=new B.n,this.productWasSelected=new B.n}checkChanged(){this.displayCodeChanged.emit()}newProduct(){this.initializeNewProduct.emit()}productSelected(e){e?this.productWasSelected.emit(e):this.newProduct()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=B.Gb({type:e,selectors:[["app-product-list"]],inputs:{errorMessage:"errorMessage",products:"products",displayCode:"displayCode",selectedProduct:"selectedProduct"},outputs:{displayCodeChanged:"displayCodeChanged",initializeNewProduct:"initializeNewProduct",productWasSelected:"productWasSelected"},decls:8,vars:9,consts:[["severity","error",4,"ngIf"],["filterBy","productName","filterPlaceholder","Filter by name","metaKeySelection","false","controlsPosition","right",3,"value","listStyle","header","selection","onSelectionChange"],["pTemplate","item"],[1,"bottom-actions","p-d-flex","p-ai-center"],["type","button","pButton","","label","Add","icon","pi pi-plus",2,"margin","0.25em",3,"click"],["type","checkbox",3,"checked","change"],["severity","error"],["pTemplate",""],[4,"ngIf"]],template:function(e,t){1&e&&(B.uc(0,K,2,0,"p-messages",0),B.Sb(1,"p-orderList",1),B.Zb("onSelectionChange",function(e){return t.productSelected(e.value[0])}),B.uc(2,X,3,2,"ng-template",2),B.Rb(),B.Sb(3,"div",3),B.Sb(4,"button",4),B.Zb("click",function(){return t.newProduct()}),B.Rb(),B.Sb(5,"label"),B.Sb(6,"input",5),B.Zb("change",function(){return t.checkChanged()}),B.Rb(),B.wc(7," Display Product Code "),B.Rb(),B.Rb()),2&e&&(B.hc("ngIf",t.errorMessage),B.Bb(1),B.hc("value",t.products)("listStyle",B.ic(6,H))("header",t.pageTitle)("selection",B.jc(7,Y,t.selectedProduct)),B.Bb(5),B.hc("checked",t.displayCode))},directives:[W.k,L.a,D.f,G.a,_.a],styles:["input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.5);padding:10px}.bottom-actions[_ngcontent-%COMP%]{padding-top:10px}@media screen and (max-width:576px){.product-item[_ngcontent-%COMP%]{flex-wrap:wrap}}"],changeDetection:0}),e})();var te=r("3Pt+");class re{constructor(e){this.validationMessages=e}processMessages(e){const t={};for(const r in e.controls)if(e.controls.hasOwnProperty(r)){const c=e.controls[r];if(c instanceof te.d){const e=this.processMessages(c);Object.assign(t,e)}else this.validationMessages[r]&&(t[r]="",(c.dirty||c.touched)&&c.errors&&Object.keys(c.errors).map(e=>{this.validationMessages[r][e]&&(t[r]+=this.validationMessages[r][e]+" ")}))}return t}}class ce{static range(e,t){return r=>r.value&&(isNaN(r.value)||r.value<e||r.value>t)?{range:!0}:null}}var oe=r("QIUk"),de=r("7kUa"),se=r("Js94"),ie=r("zFJ7");function ne(e,t){if(1&e&&(B.Sb(0,"div"),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.xc(e.errorMessage)}}function ue(e,t){1&e&&(B.Sb(0,"p-messages",3),B.uc(1,ne,2,1,"ng-template",4),B.Rb())}function ae(e,t){if(1&e&&(B.Sb(0,"small",24),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.yc("",e.displayMessage.productName," ")}}function le(e,t){if(1&e&&(B.Sb(0,"small",25),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.yc("",e.displayMessage.productCode," ")}}function pe(e,t){if(1&e&&(B.Sb(0,"small",26),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.yc(" ",e.displayMessage.starRating," ")}}function be(e,t){if(1&e&&(B.Sb(0,"small",27),B.wc(1),B.Rb()),2&e){const e=B.cc(2);B.Bb(1),B.yc("",e.displayMessage.description," ")}}const he=function(e){return{"p-invalid":e}};function Pe(e,t){if(1&e){const e=B.Tb();B.Sb(0,"p-card",5),B.Sb(1,"form",6),B.Zb("ngSubmit",function(){return B.oc(e),B.cc().saveProduct()}),B.Sb(2,"div",7),B.Sb(3,"div",8),B.Sb(4,"label",9),B.wc(5,"Product Name"),B.Rb(),B.Sb(6,"input",10),B.Zb("blur",function(){return B.oc(e),B.cc().blur()}),B.Rb(),B.uc(7,ae,2,1,"small",11),B.Rb(),B.Sb(8,"div",8),B.Sb(9,"label",12),B.wc(10,"Product Code"),B.Rb(),B.Sb(11,"input",13),B.Zb("blur",function(){return B.oc(e),B.cc().blur()}),B.Rb(),B.uc(12,le,2,1,"small",14),B.Rb(),B.Sb(13,"div",8),B.Sb(14,"label",15),B.wc(15,"Star Rating (1-5)"),B.Rb(),B.Nb(16,"p-rating",16),B.uc(17,pe,2,1,"small",17),B.Rb(),B.Sb(18,"div",8),B.Sb(19,"label",18),B.wc(20,"Product Description"),B.Rb(),B.Sb(21,"textarea",19),B.Zb("blur",function(){return B.oc(e),B.cc().blur()}),B.Rb(),B.uc(22,be,2,1,"small",20),B.Rb(),B.Rb(),B.Nb(23,"button",21),B.Sb(24,"button",22),B.Zb("click",function(){return B.oc(e),B.cc().cancelEdit()}),B.Rb(),B.Sb(25,"button",23),B.Zb("click",function(){return B.oc(e),B.cc().deleteProduct()}),B.Rb(),B.Rb(),B.Rb()}if(2&e){const e=B.cc();B.hc("header",e.pageTitle),B.Bb(1),B.hc("formGroup",e.productForm),B.Bb(5),B.hc("ngClass",B.jc(11,he,e.displayMessage.productName)),B.Bb(1),B.hc("ngIf",e.displayMessage.productName),B.Bb(4),B.hc("ngClass",B.jc(13,he,e.displayMessage.productCode)),B.Bb(1),B.hc("ngIf",e.displayMessage.productCode),B.Bb(5),B.hc("ngIf",e.displayMessage.starRating),B.Bb(4),B.hc("ngClass",B.jc(15,he,e.displayMessage.description))("rows",3),B.Bb(1),B.hc("ngIf",e.displayMessage.description),B.Bb(1),B.hc("disabled",!e.productForm.valid||!e.productForm.dirty)}}let ge=(()=>{class e{constructor(e){this.fb=e,this.pageTitle="Product Edit",this.create=new B.n,this.update=new B.n,this.delete=new B.n,this.clearCurrent=new B.n,this.displayMessage={},this.validationMessages={productName:{required:"Product name is required.",minlength:"Product name must be at least three characters.",maxlength:"Product name cannot exceed 50 characters."},productCode:{required:"Product code is required."},starRating:{range:"Rate the product between 1 (lowest) and 5 (highest)."}},this.genericValidator=new re(this.validationMessages)}ngOnInit(){this.productForm=this.fb.group({productName:["",[te.o.required,te.o.minLength(3),te.o.maxLength(50)]],productCode:["",te.o.required],starRating:["",ce.range(1,5)],description:""}),this.productForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.productForm))}ngOnChanges(e){e.selectedProduct&&this.displayProduct(e.selectedProduct.currentValue)}blur(){this.displayMessage=this.genericValidator.processMessages(this.productForm)}displayProduct(e){e&&this.productForm&&(this.productForm.reset(),this.pageTitle=0===e.id?"Add Product":"Edit Product: "+e.productName,this.productForm.patchValue({productName:e.productName,productCode:e.productCode,starRating:e.starRating,description:e.description}))}cancelEdit(){this.displayProduct(this.selectedProduct)}deleteProduct(){this.selectedProduct&&this.selectedProduct.id?confirm(`Really delete the product: ${this.selectedProduct.productName}?`)&&this.delete.emit(this.selectedProduct):this.clearCurrent.emit()}saveProduct(){if(this.productForm.valid&&this.productForm.dirty){const e=Object.assign(Object.assign({},this.selectedProduct),this.productForm.value);0===e.id?this.create.emit(e):this.update.emit(e)}}}return e.\u0275fac=function(t){return new(t||e)(B.Mb(te.b))},e.\u0275cmp=B.Gb({type:e,selectors:[["app-product-edit"]],inputs:{errorMessage:"errorMessage",selectedProduct:"selectedProduct"},outputs:{create:"create",update:"update",delete:"delete",clearCurrent:"clearCurrent"},features:[B.zb],decls:3,vars:2,consts:[[1,"edit-container"],["severity","error",4,"ngIf"],[3,"header",4,"ngIf"],["severity","error"],["pTemplate",""],[3,"header"],["novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-field"],["for","productNameId"],["id","productNameId","type","text","placeholder","Name (required)","formControlName","productName","pInputText","","aria-describedby","productName-help",3,"ngClass","blur"],["id","productName-help","class","p-invalid",4,"ngIf"],["for","productCodeId"],["id","productCodeId","type","text","placeholder","Code (required)","formControlName","productCode","pInputText","","aria-describedby","productCode-help",3,"ngClass","blur"],["id","productCode-help","class","p-invalid",4,"ngIf"],["for","starRatingId"],["formControlName","starRating","id","starRatingId"],["class","p-invalid",4,"ngIf"],["for","descriptionId"],["id","descriptionId","placeholder","Description","formControlName","description","pInputTextarea","","autoResize","autoResize","aria-describedby","description-help",3,"ngClass","rows","blur"],["id","description-help","class","p-invalid",4,"ngIf"],["pButton","","pRipple","","type","submit","label","Save",3,"disabled"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-secondary","p-ml-2",3,"click"],["pButton","","pRipple","","type","button","label","Delete",1,"p-button-danger","p-ml-2","p-mt-2",3,"click"],["id","productName-help",1,"p-invalid"],["id","productCode-help",1,"p-invalid"],[1,"p-invalid"],["id","description-help",1,"p-invalid"]],template:function(e,t){1&e&&(B.Sb(0,"div",0),B.uc(1,ue,2,0,"p-messages",1),B.uc(2,Pe,26,17,"p-card",2),B.Rb()),2&e&&(B.Bb(1),B.hc("ngIf",t.errorMessage),B.Bb(1),B.hc("ngIf",t.selectedProduct))},directives:[W.k,_.a,D.f,oe.a,te.p,te.j,te.e,te.a,te.i,te.c,de.a,W.i,se.a,ie.a,G.a],styles:[".edit-container[_ngcontent-%COMP%]{margin-left:20px}input[_ngcontent-%COMP%]{min-width:250px}"]}),e})(),fe=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.products$=this.store.select(U),this.errorMessage$=this.store.select(J),this.store.dispatch(c.loadProducts()),this.selectedProduct$=this.store.select(E),this.displayCode$=this.store.select(A)}checkChanged(){this.store.dispatch(c.toggleProductCode())}newProduct(){this.store.dispatch(c.initializeCurrentProduct())}productSelected(e){this.store.dispatch(c.setCurrentProduct({currentProductId:e.id}))}deleteProduct(e){this.store.dispatch(c.deleteProduct({productId:e.id}))}clearProduct(){this.store.dispatch(c.clearCurrentProduct())}saveProduct(e){this.store.dispatch(c.createProduct({product:e}))}updateProduct(e){this.store.dispatch(c.updateProduct({product:e}))}}return e.\u0275fac=function(t){return new(t||e)(B.Mb(i.h))},e.\u0275cmp=B.Gb({type:e,selectors:[["app-product-shell"]],decls:9,vars:18,consts:[[1,"p-d-flex","p-flex-wrap","shell"],[2,"flex","1",3,"displayCode","products","selectedProduct","errorMessage","displayCodeChanged","initializeNewProduct","productWasSelected"],[2,"flex","2",3,"selectedProduct","errorMessage","clearCurrent","update","delete","create"]],template:function(e,t){1&e&&(B.Sb(0,"div",0),B.Sb(1,"app-product-list",1),B.Zb("displayCodeChanged",function(){return t.checkChanged()})("initializeNewProduct",function(){return t.newProduct()})("productWasSelected",function(e){return t.productSelected(e)}),B.dc(2,"async"),B.dc(3,"async"),B.dc(4,"async"),B.dc(5,"async"),B.Rb(),B.Sb(6,"app-product-edit",2),B.Zb("clearCurrent",function(){return t.clearProduct()})("update",function(e){return t.updateProduct(e)})("delete",function(e){return t.deleteProduct(e)})("create",function(e){return t.saveProduct(e)}),B.dc(7,"async"),B.dc(8,"async"),B.Rb(),B.Rb()),2&e&&(B.Bb(1),B.hc("displayCode",B.ec(2,6,t.displayCode$))("products",B.ec(3,8,t.products$))("selectedProduct",B.ec(4,10,t.selectedProduct$))("errorMessage",B.ec(5,12,t.errorMessage$)),B.Bb(5),B.hc("selectedProduct",B.ec(7,14,t.selectedProduct$))("errorMessage",B.ec(8,16,t.errorMessage$)))},directives:[ee,ge],pipes:[W.b],styles:[".shell[_ngcontent-%COMP%]{height:calc(100vh - 58px - 58px - 2rem);width:100%}"]}),e})();var Oe=r("ThbA");const je=[{path:"",component:fe}];let me=(()=>{class e{}return e.\u0275mod=B.Kb({type:e}),e.\u0275inj=B.Jb({factory:function(t){return new(t||e)},imports:[[s.a,d.e.forChild(je),i.j.forFeature("products",v),w.b.forFeature([T]),Oe.a]]}),e})()}}]);