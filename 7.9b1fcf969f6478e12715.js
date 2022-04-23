(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VLs4:function(e,t,r){var s,a,c;!function(n){if("object"==typeof e.exports){var o=n(0,t);void 0!==o&&(e.exports=o)}else a=[r,t],void 0===(c="function"==typeof(s=n)?s.apply(t,a):s)||(e.exports=c)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=void 0;t.default=["de",[["AM","PM"],r,r],r,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xe4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],r,r],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",r,"{1} 'um' {0}",r],[",",".",";","%","+","-","E","\xb7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","Euro",{ATS:["\xf6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],CUC:[r,"Cub$"],DEM:["DM"],FKP:[r,"Fl\xa3"],GNF:[r,"F.G."],KMF:[r,"FC"],RON:[r,"L"],RWF:[r,"F.Rw"],SYP:[],THB:["\u0e3f"],TWD:["NT$"],XXX:[],ZMW:[r,"K"]},"ltr",function(e){var t=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===r?1:5}]})},vfUp:function(e,t,r){"use strict";r.r(t),r.d(t,"CustomersModule",function(){return Fe});var s={};r.r(s),r.d(s,"setCurrentCustomer",function(){return d}),r.d(s,"clearCurrentCustomer",function(){return p}),r.d(s,"initializeCurrentCustomer",function(){return C}),r.d(s,"loadCustomers",function(){return h}),r.d(s,"updateCustomer",function(){return f}),r.d(s,"createCustomer",function(){return g}),r.d(s,"deleteCustomer",function(){return y});var a={};r.r(a),r.d(a,"loadCustomersSuccess",function(){return S}),r.d(a,"loadCustomersFailure",function(){return O}),r.d(a,"updateCustomerSuccess",function(){return j}),r.d(a,"updateCustomerFailure",function(){return v}),r.d(a,"createCustomerSuccess",function(){return M}),r.d(a,"createCustomerFailure",function(){return T}),r.d(a,"deleteCustomerSuccess",function(){return w}),r.d(a,"deleteCustomerFailure",function(){return F});var c=r("fXoL"),n=r("tyNb"),o=r("PCNd"),i=r("ofXK"),u=r("VLs4"),l=r.n(u),b=r("l7P3"),m=r("9jGm");const d=Object(b.n)("[Customer Page] Set Current Customer",Object(b.s)()),p=Object(b.n)("[Customer Page] Clear Current Customer"),C=Object(b.n)("[Customer Page] Initialize Current Customer"),h=Object(b.n)("[Customer Page] Load"),f=Object(b.n)("[Customer Page] Update Customer",Object(b.s)()),g=Object(b.n)("[Customer Page] Create Customer",Object(b.s)()),y=Object(b.n)("[Customer Page] Delete Customer",Object(b.s)()),S=Object(b.n)("[Customer API] Load Success",Object(b.s)()),O=Object(b.n)("[Customer API] Load Fail",Object(b.s)()),j=Object(b.n)("[Customer API] Update Customer Success",Object(b.s)()),v=Object(b.n)("[Customer API] Update Customer Fail",Object(b.s)()),M=Object(b.n)("[Customer API] Create Customer Success",Object(b.s)()),T=Object(b.n)("[Customer API] Create Customer Fail",Object(b.s)()),w=Object(b.n)("[Customer API] Delete Customer Success",Object(b.s)()),F=Object(b.n)("[Customer API] Delete Customer Fail",Object(b.s)()),I=Object(b.p)({currentCustomerId:null,customers:[],error:""},Object(b.r)(s.setCurrentCustomer,(e,t)=>Object.assign(Object.assign({},e),{currentCustomerId:t.currentCustomerId})),Object(b.r)(s.clearCurrentCustomer,e=>Object.assign(Object.assign({},e),{currentCustomerId:null})),Object(b.r)(s.initializeCurrentCustomer,e=>Object.assign(Object.assign({},e),{currentCustomerId:0})),Object(b.r)(a.loadCustomersSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:t.customers,error:""})),Object(b.r)(a.loadCustomersFailure,(e,t)=>Object.assign(Object.assign({},e),{customers:[],error:t.error})),Object(b.r)(a.updateCustomerSuccess,(e,t)=>{const r=e.customers.map(e=>t.customer.id===e.id?t.customer:e);return Object.assign(Object.assign({},e),{customers:r,currentCustomerId:t.customer.id,error:""})}),Object(b.r)(a.updateCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(b.r)(a.createCustomerSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:[...e.customers,t.customer],currentCustomerId:t.customer.id,error:""})),Object(b.r)(a.createCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(b.r)(a.deleteCustomerSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:e.customers.filter(e=>e.id!==t.customerId),currentCustomerId:null,error:""})),Object(b.r)(a.deleteCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})));var x=r("5+tZ"),P=r("lJxs"),N=r("JIr8"),H=r("bOdf"),D=r("vkgz"),J=r("LRne"),$=r("tk/3"),k=r("z6cu");let A=(()=>{class e{constructor(e){this.http=e,this.customersUrl="api/customers",this.initialCustomer={id:0,name:"",country:null,status:"new",company:null,lifetimeValue:0}}getCustomers(){return this.http.get(this.customersUrl).pipe(Object(N.a)(this.handleError))}createCustomer(e){const t=new $.d({"Content-Type":"application/json"}),r=Object.assign(Object.assign({},e),{id:null});return this.http.post(this.customersUrl,r,{headers:t}).pipe(Object(N.a)(this.handleError))}deleteCustomer(e){const t=new $.d({"Content-Type":"application/json"});return this.http.delete(`${this.customersUrl}/${e}`,{headers:t}).pipe(Object(N.a)(this.handleError))}updateCustomer(e){const t=new $.d({"Content-Type":"application/json"});return this.http.put(`${this.customersUrl}/${e.id}`,e,{headers:t}).pipe(Object(P.a)(()=>e),Object(N.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?"An error occurred: "+e.error.message:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(k.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(c.Xb($.b))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var E=r("7zfz"),q=r("sYmb");let _=(()=>{class e{constructor(e,t,r,c){this.actions$=e,this.customerService=t,this.messageService=r,this.translate=c,this.loadCustomers$=Object(m.c)(()=>this.actions$.pipe(Object(m.d)(s.loadCustomers),Object(x.a)(()=>this.customerService.getCustomers().pipe(Object(P.a)(e=>a.loadCustomersSuccess({customers:e})),Object(N.a)(e=>Object(J.a)(a.loadCustomersFailure({error:e}))))))),this.updateCustomer$=Object(m.c)(()=>this.actions$.pipe(Object(m.d)(s.updateCustomer),Object(H.a)(e=>this.customerService.updateCustomer(e.customer).pipe(Object(D.a)(e=>{this.messageService.add({severity:"success",summary:this.translate.instant("Success"),detail:`${e.name} ${this.translate.instant("updated successfully")}`})}),Object(P.a)(e=>a.updateCustomerSuccess({customer:e})),Object(N.a)(e=>Object(J.a)(a.updateCustomerFailure({error:e}))))))),this.createCustomer$=Object(m.c)(()=>this.actions$.pipe(Object(m.d)(s.createCustomer),Object(H.a)(e=>this.customerService.createCustomer(e.customer).pipe(Object(D.a)(e=>this.messageService.add({severity:"success",summary:this.translate.instant("Success"),detail:`${e.name} ${this.translate.instant("created successfully")}`})),Object(P.a)(e=>a.createCustomerSuccess({customer:e})),Object(N.a)(e=>Object(J.a)(a.createCustomerFailure({error:e}))))))),this.deleteCustomer$=Object(m.c)(()=>this.actions$.pipe(Object(m.d)(s.deleteCustomer),Object(x.a)(e=>this.customerService.deleteCustomer(e.customerId).pipe(Object(D.a)(()=>this.messageService.add({severity:"success",summary:this.translate.instant("Success"),detail:this.translate.instant("Deleted successfully")})),Object(P.a)(()=>a.deleteCustomerSuccess({customerId:e.customerId})),Object(N.a)(e=>Object(J.a)(a.deleteCustomerFailure({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(m.a),c.Xb(A),c.Xb(E.g),c.Xb(q.d))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac}),e})();var z=r("ThbA");const U=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}],V=[{name:"Greece",code:"GR"},{name:"Brazil",code:"BR"},{name:"Switzerland",code:"CH"},{name:"Argentina",code:"AR"},{name:"Germany",code:"DE"},{name:"Norway",code:"NO"},{name:"Czech Republic",code:"CZ"},{name:"United Kingdom",code:"GB"},{name:"Cyprus",code:"CY"},{name:"Finland",code:"FI"}];var B=r("3Pt+"),L=r("1rnB"),R=r("J7/z"),G=r("7kUa"),X=r("arFO"),K=r("Ks7X"),W=r("jIHw");function Z(e,t){if(1&e&&(c.Tb(0,"small",20),c.Hc(1),c.Sb()),2&e){const e=c.dc();c.Cb(1),c.Jc("",e.displayMessage.name," ")}}function Y(e,t){if(1&e&&(c.Tb(0,"small",21),c.Hc(1),c.Sb()),2&e){const e=c.dc();c.Cb(1),c.Jc("",e.displayMessage.company," ")}}function Q(e,t){if(1&e&&(c.Tb(0,"div",22),c.Ob(1,"img",23),c.Tb(2,"span"),c.Hc(3),c.Sb(),c.Sb()),2&e){const e=t.$implicit;c.Cb(1),c.nc("src","https://catamphetamine.gitlab.io/country-flag-icons/1x1/",e.code,".svg",c.Ac),c.Cb(2),c.Ic(e.name)}}function ee(e,t){if(1&e&&(c.Tb(0,"small",24),c.Hc(1),c.Sb()),2&e){const e=c.dc();c.Cb(1),c.Jc("",e.displayMessage.country," ")}}function te(e,t){if(1&e&&(c.Tb(0,"small",25),c.Hc(1),c.Sb()),2&e){const e=c.dc();c.Cb(1),c.Jc("",e.displayMessage.status," ")}}const re=function(e){return{"p-invalid":e}};let se=(()=>{class e{constructor(e,t,r,s){this.fb=e,this.ref=t,this.config=r,this.translate=s,this.statuses=U,this.countries=V,this.displayMessage={},this.validationMessages={name:{required:this.translate.instant("Customer name is required."),minlength:this.translate.instant("Customer name must be at least three characters."),maxlength:this.translate.instant("Customer name cannot exceed 50 characters.")},country:{required:this.translate.instant("Customer's country is required.")},company:{required:this.translate.instant("Customer's company is required.")},status:{required:this.translate.instant("Customer's status is required.")}},this.genericValidator=new L.a}ngOnInit(){this.customerForm=this.fb.group({name:["",[B.p.required,B.p.minLength(3),B.p.maxLength(50)]],country:["",B.p.required],company:["",B.p.required],status:["",B.p.required],lifetimeValue:""}),this.customerForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.customerForm,this.validationMessages)),this.selectedCustomer=this.config.data.customer,this.customerForm.patchValue(this.selectedCustomer)}blur(){this.displayMessage=this.genericValidator.processMessages(this.customerForm,this.validationMessages)}submitCustomer(){if(this.customerForm.valid&&this.customerForm.dirty){const e=Object.assign(Object.assign({},this.selectedCustomer),this.customerForm.value);this.ref.close(e)}}cancel(){this.ref.close()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(B.c),c.Nb(R.d),c.Nb(R.b),c.Nb(q.d))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-customer-edit-dialog"]],decls:41,vars:51,consts:[["novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-field"],["for","CustomerName"],["id","CustomerName","type","text","formControlName","name","pInputText","","aria-describedby","CustomerName-help","autofocus","",3,"ngClass","placeholder","blur"],["id","CustomerName-help","class","p-invalid",4,"ngIf"],["for","CustomerCompany"],["id","CustomerCompany","type","text","formControlName","company","pInputText","","aria-describedby","CustomerCompany-help",3,"ngClass","placeholder","blur"],["id","CustomerCompany-help","class","p-invalid",4,"ngIf"],["for","CustomerCountry"],["id","CustomerCountry","optionLabel","name","filterBy","name","formControlName","country","aria-describedby","CustomerCountry-help",3,"options","filter","placeholder","onBlur"],["pTemplate","item"],["id","CustomerCountry-help","class","p-invalid",4,"ngIf"],["for","CustomerStatus"],["id","CustomerStatus","formControlName","status","aria-describedby","CustomerStatus-help",3,"options","placeholder","onBlur"],["id","CustomerStatus-help","class","p-invalid",4,"ngIf"],["for","lifetimeValue"],["id","lifetimeValue","mode","currency","currency","EUR","formControlName","lifetimeValue","locale","de-DE",3,"placeholder"],["pButton","","type","button","pRipple","","icon","pi pi-check",3,"label","disabled","click"],["pButton","","type","button","pRipple","","icon","pi pi-times",1,"p-button-text",3,"label","click"],["id","CustomerName-help",1,"p-invalid"],["id","CustomerCompany-help",1,"p-invalid"],[1,"p-d-flex","p-ai-center"],[2,"width","20px","margin-right","3px","border-radius","20%",3,"src"],["id","CustomerCountry-help",1,"p-invalid"],["id","CustomerStatus-help",1,"p-invalid"]],template:function(e,t){1&e&&(c.Tb(0,"form",0),c.ac("ngSubmit",function(){return t.submitCustomer()}),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"label",3),c.Hc(4),c.ec(5,"translate"),c.Sb(),c.Tb(6,"input",4),c.ac("blur",function(){return t.blur()}),c.ec(7,"translate"),c.Sb(),c.Fc(8,Z,2,1,"small",5),c.Sb(),c.Tb(9,"div",2),c.Tb(10,"label",6),c.Hc(11),c.ec(12,"translate"),c.Sb(),c.Tb(13,"input",7),c.ac("blur",function(){return t.blur()}),c.ec(14,"translate"),c.Sb(),c.Fc(15,Y,2,1,"small",8),c.Sb(),c.Tb(16,"div",2),c.Tb(17,"label",9),c.Hc(18),c.ec(19,"translate"),c.Sb(),c.Tb(20,"p-dropdown",10),c.ac("onBlur",function(){return t.blur()}),c.ec(21,"translate"),c.Fc(22,Q,4,2,"ng-template",11),c.Sb(),c.Fc(23,ee,2,1,"small",12),c.Sb(),c.Tb(24,"div",2),c.Tb(25,"label",13),c.Hc(26),c.ec(27,"translate"),c.Sb(),c.Tb(28,"p-dropdown",14),c.ac("onBlur",function(){return t.blur()}),c.ec(29,"translate"),c.Sb(),c.Fc(30,te,2,1,"small",15),c.Sb(),c.Tb(31,"div",2),c.Tb(32,"label",16),c.Hc(33),c.ec(34,"translate"),c.Sb(),c.Ob(35,"p-inputNumber",17),c.ec(36,"translate"),c.Sb(),c.Sb(),c.Tb(37,"button",18),c.ac("click",function(){return t.submitCustomer()}),c.ec(38,"translate"),c.Sb(),c.Tb(39,"button",19),c.ac("click",function(){return t.cancel()}),c.ec(40,"translate"),c.Sb(),c.Sb()),2&e&&(c.lc("formGroup",t.customerForm),c.Cb(4),c.Ic(c.fc(5,23,"Customer Name")),c.Cb(2),c.mc("placeholder",c.fc(7,25,"Name (required)")),c.lc("ngClass",c.pc(47,re,t.displayMessage.name)),c.Cb(2),c.lc("ngIf",t.displayMessage.name),c.Cb(3),c.Ic(c.fc(12,27,"Customer's Company")),c.Cb(2),c.mc("placeholder",c.fc(14,29,"Company (required)")),c.lc("ngClass",c.pc(49,re,t.displayMessage.company)),c.Cb(2),c.lc("ngIf",t.displayMessage.company),c.Cb(3),c.Ic(c.fc(19,31,"Customer's Country")),c.Cb(2),c.mc("placeholder",c.fc(21,33,"Country (required)")),c.lc("options",t.countries)("filter",!0),c.Cb(3),c.lc("ngIf",t.displayMessage.country),c.Cb(3),c.Ic(c.fc(27,35,"Customer's Status")),c.Cb(2),c.mc("placeholder",c.fc(29,37,"Status (required)")),c.lc("options",t.statuses),c.Cb(2),c.lc("ngIf",t.displayMessage.status),c.Cb(3),c.Ic(c.fc(34,39,"Lifetime Value")),c.Cb(2),c.mc("placeholder",c.fc(36,41,"Lifetime Value")),c.Cb(2),c.mc("label",c.fc(38,43,"Save")),c.lc("disabled",!t.customerForm.valid||!t.customerForm.dirty),c.Cb(2),c.mc("label",c.fc(40,45,"Cancel")))},directives:[B.q,B.k,B.f,B.b,B.j,B.d,G.a,i.j,i.l,X.a,E.i,K.a,W.a],pipes:[q.c],styles:[""],changeDetection:0}),e})();const ae=Object(b.o)("customers"),ce=Object(b.q)(ae,e=>e.currentCustomerId),ne=(Object(b.q)(ae,ce,(e,t)=>0===t?{id:0,name:"",country:null,status:"new",company:null,lifetimeValue:0}:t?e.customers.find(e=>e.id===t):null),Object(b.q)(ae,e=>[...e.customers])),oe=Object(b.q)(ae,e=>e.error);var ie=r("pLZG"),ue=r("rEr+"),le=r("dts7"),be=r("lVkt");let me=(()=>{class e{transform(e,t=!1){let r="";return r=e||"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",t&&-1===r.indexOf("https")&&(r=r.replace("http","https")),r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Mb({name:"defaultImage",type:e,pure:!0}),e})();const de=["dt"];function pe(e,t){if(1&e&&(c.Tb(0,"div"),c.Hc(1),c.Sb()),2&e){const e=c.dc(2);c.Cb(1),c.Ic(e.errorMessage)}}function Ce(e,t){1&e&&(c.Tb(0,"p-messages",7),c.Fc(1,pe,2,1,"ng-template",8),c.Sb())}function he(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",9),c.Hc(1),c.ec(2,"translate"),c.Tb(3,"button",10),c.ac("click",function(){return c.yc(e),c.dc().newCustomer()}),c.ec(4,"translate"),c.Sb(),c.Tb(5,"span",11),c.Ob(6,"i",12),c.Tb(7,"input",13),c.ac("input",function(t){return c.yc(e),c.dc(),c.xc(2).filterGlobal(t.target.value,"contains")}),c.ec(8,"translate"),c.Sb(),c.Sb(),c.Sb()}2&e&&(c.Cb(1),c.Jc(" ",c.fc(2,3,"List of Customers")," "),c.Cb(2),c.mc("label",c.fc(4,5,"New Customer")),c.Cb(4),c.mc("placeholder",c.fc(8,7,"Global Search")))}function fe(e,t){if(1&e&&(c.Tb(0,"div",29),c.Ob(1,"img",30),c.Tb(2,"span"),c.Hc(3),c.Sb(),c.Sb()),2&e){const e=t.$implicit,r=c.dc(2);c.Cb(1),c.lc("src",r.getCountryFlagUrl(e.code),c.Ac),c.Cb(2),c.Ic(e.name)}}function ge(e,t){if(1&e){const e=c.Ub();c.Tb(0,"tr"),c.Tb(1,"th",14),c.Hc(2),c.ec(3,"translate"),c.Ob(4,"p-sortIcon",15),c.Sb(),c.Tb(5,"th",16),c.Hc(6),c.ec(7,"translate"),c.Ob(8,"p-sortIcon",17),c.Sb(),c.Tb(9,"th",18),c.Hc(10),c.ec(11,"translate"),c.Ob(12,"p-sortIcon",19),c.Sb(),c.Tb(13,"th",20),c.Hc(14),c.ec(15,"translate"),c.Ob(16,"p-sortIcon",21),c.Sb(),c.Tb(17,"th",22),c.Hc(18),c.ec(19,"translate"),c.Ob(20,"p-sortIcon",23),c.Sb(),c.Ob(21,"th",24),c.Sb(),c.Tb(22,"tr"),c.Tb(23,"th"),c.Tb(24,"input",25),c.ac("input",function(t){return c.yc(e),c.dc(),c.xc(2).filter(t.target.value,"name","startsWith")}),c.ec(25,"translate"),c.Sb(),c.Sb(),c.Tb(26,"th"),c.Tb(27,"p-multiSelect",26),c.ac("onChange",function(t){return c.yc(e),c.dc().onCountryChange(t)}),c.ec(28,"translate"),c.Fc(29,fe,4,2,"ng-template",27),c.Sb(),c.Sb(),c.Tb(30,"th"),c.Tb(31,"input",25),c.ac("input",function(t){return c.yc(e),c.dc(),c.xc(2).filter(t.target.value,"company","contains")}),c.ec(32,"translate"),c.Sb(),c.Sb(),c.Tb(33,"th"),c.Tb(34,"p-dropdown",28),c.ac("onChange",function(t){return c.yc(e),c.dc(),c.xc(2).filter(t.value,"status","equals")}),c.ec(35,"translate"),c.Sb(),c.Sb(),c.Tb(36,"th"),c.Tb(37,"input",25),c.ac("input",function(t){return c.yc(e),c.dc(),c.xc(2).filter(t.target.value,"lifetimeValue","startsWith")}),c.ec(38,"translate"),c.Sb(),c.Sb(),c.Ob(39,"th"),c.Sb()}if(2&e){const e=c.dc();c.Cb(2),c.Jc(" ",c.fc(3,13,"Name")," "),c.Cb(4),c.Jc(" ",c.fc(7,15,"Country")," "),c.Cb(4),c.Jc(" ",c.fc(11,17,"Company")," "),c.Cb(4),c.Jc(" ",c.fc(15,19,"Status")," "),c.Cb(4),c.Jc(" ",c.fc(19,21,"Lifetime Value")," "),c.Cb(6),c.mc("placeholder",c.fc(25,23,"Search by Name")),c.Cb(3),c.mc("placeholder",c.fc(28,25,"Select Country")),c.lc("options",e.countries),c.Cb(4),c.mc("placeholder",c.fc(32,27,"Search by Company")),c.Cb(3),c.mc("placeholder",c.fc(35,29,"Select a Status")),c.lc("options",e.statuses)("showClear",!0),c.Cb(3),c.nc("placeholder","",c.fc(38,31,"Search by Value")," \u20ac")}}const ye=function(e){return[e,"EUR","symbol",void 0,"de-DE"]};function Se(e,t){if(1&e){const e=c.Ub();c.Tb(0,"tr",31),c.Tb(1,"td"),c.Tb(2,"span",32),c.Hc(3),c.ec(4,"translate"),c.Sb(),c.Tb(5,"div",29),c.Ob(6,"img",33),c.ec(7,"defaultImage"),c.Tb(8,"span",34),c.Hc(9),c.Sb(),c.Sb(),c.Sb(),c.Tb(10,"td"),c.Tb(11,"span",32),c.Hc(12),c.ec(13,"translate"),c.Sb(),c.Tb(14,"div",29),c.Ob(15,"img",35),c.Tb(16,"span",36),c.Hc(17),c.Sb(),c.Sb(),c.Sb(),c.Tb(18,"td"),c.Tb(19,"span",32),c.Hc(20),c.ec(21,"translate"),c.Sb(),c.Tb(22,"span",36),c.Hc(23),c.Sb(),c.Sb(),c.Tb(24,"td"),c.Tb(25,"span",32),c.Hc(26),c.ec(27,"translate"),c.Sb(),c.Tb(28,"span"),c.Hc(29),c.Sb(),c.Sb(),c.Tb(30,"td"),c.Tb(31,"span",32),c.Hc(32),c.ec(33,"translate"),c.Sb(),c.Tb(34,"span",36),c.Hc(35),c.ec(36,"currency"),c.Sb(),c.Sb(),c.Tb(37,"td"),c.Tb(38,"button",37),c.ac("click",function(){c.yc(e);const r=t.$implicit;return c.dc().editCustomer(r)}),c.Sb(),c.Tb(39,"button",38),c.ac("click",function(){c.yc(e);const r=t.$implicit;return c.dc().deleteCustomer(r)}),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=t.$implicit,r=c.dc();c.Cb(3),c.Ic(c.fc(4,16,"Name")),c.Cb(3),c.lc("alt",e.name)("src",c.gc(7,18,e.image,!0),c.Ac),c.Cb(3),c.Ic(e.name),c.Cb(3),c.Ic(c.fc(13,21,"Country")),c.Cb(3),c.lc("alt",e.country.name)("src",r.getCountryFlagUrl(e.country.code),c.Ac),c.Cb(2),c.Ic(e.country.name),c.Cb(3),c.Ic(c.fc(21,23,"Company")),c.Cb(3),c.Ic(e.company),c.Cb(3),c.Ic(c.fc(27,25,"Status")),c.Cb(2),c.Eb("customer-badge status-"+e.status),c.Cb(1),c.Ic(e.status),c.Cb(3),c.Ic(c.fc(33,27,"Lifetime Value")),c.Cb(3),c.Ic(c.ic(36,29,c.pc(35,ye,e.lifetimeValue)))}}function Oe(e,t){1&e&&(c.Tb(0,"tr"),c.Tb(1,"td",39),c.Hc(2),c.ec(3,"translate"),c.Sb(),c.Sb()),2&e&&(c.Cb(2),c.Jc('"',c.fc(3,1,"No customers found."),'"'))}const je=function(e){return[5,e]},ve=function(){return["name","country.name","company","status"]};let Me=(()=>{class e{constructor(){this.pageTitle="Customers",this.countries=V,this.statuses=U,this.delete=new c.n,this.edit=new c.n,this.new=new c.n}onCountryChange(e){this.table.filter(e.value,"country.name","in")}getCountryFlagUrl(e){return`https://catamphetamine.gitlab.io/country-flag-icons/1x1/${e}.svg`}editCustomer(e){this.edit.emit(e)}deleteCustomer(e){this.delete.emit(e)}newCustomer(){this.new.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-customer-table"]],viewQuery:function(e,t){if(1&e&&c.Lc(de,!0),2&e){let e;c.wc(e=c.bc())&&(t.table=e.first)}},inputs:{errorMessage:"errorMessage",customers:"customers"},outputs:{delete:"delete",edit:"edit",new:"new"},decls:7,vars:12,consts:[["severity","error",4,"ngIf"],["dataKey","id","styleClass","p-datatable-customers",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["severity","error"],["pTemplate",""],[1,"table-header"],["type","button","pButton","","icon","pi pi-user-plus",1,"add-btn",3,"label","click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text",3,"placeholder","input"],["pSortableColumn","name"],["field","name"],["pSortableColumn","country.name"],["field","country.name"],["pSortableColumn","company"],["field","company"],["pSortableColumn","status"],["field","status"],["pSortableColumn","lifetimeValue"],["field","lifetimeValue"],[2,"width","8rem"],["pInputText","","type","text",1,"p-column-filter",3,"placeholder","input"],["styleClass","p-column-filter","optionValue","name","optionLabel","name","filterBy","name",3,"options","placeholder","onChange"],["pTemplate","item"],["styleClass","p-column-filter",3,"options","placeholder","showClear","onChange"],[1,"p-d-flex","p-ai-center"],[2,"width","20px","margin-right","3px","border-radius","20%",3,"src"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"avatar",3,"alt","src"],[1,"p-ml-2"],[1,"flag",3,"alt","src"],[1,"image-text"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],["colspan","8"]],template:function(e,t){1&e&&(c.Fc(0,Ce,2,0,"p-messages",0),c.Tb(1,"p-table",1,2),c.Fc(3,he,9,9,"ng-template",3),c.Fc(4,ge,40,33,"ng-template",4),c.Fc(5,Se,40,37,"ng-template",5),c.Fc(6,Oe,4,3,"ng-template",6),c.Sb()),2&e&&(c.lc("ngIf",t.errorMessage),c.Cb(1),c.lc("value",t.customers)("rowHover",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",c.pc(9,je,t.customers.length))("paginator",!0)("filterDelay",0)("globalFilterFields",c.oc(11,ve)))},directives:[i.l,ue.c,E.i,le.a,W.a,G.a,ue.b,ue.a,be.a,X.a],pipes:[q.c,me,i.d],styles:["[_nghost-%COMP%]     .p-paginator .p-paginator-current{margin-left:auto}[_nghost-%COMP%]     .table-header{display:flex;justify-content:space-between;flex-wrap:wrap}[_nghost-%COMP%]     .p-multiselect{min-width:12rem}[_nghost-%COMP%]     .avatar{vertical-align:middle;width:32px;height:32px;border-radius:50%}[_nghost-%COMP%]     .flag{vertical-align:middle;width:30px;height:25px;border-radius:20%;margin-right:5px}[_nghost-%COMP%]     .customer-badge{border-radius:2px;padding:.25em .5rem;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}[_nghost-%COMP%]     .customer-badge.status-unqualified{background-color:#ffcdd2;color:#c63737}[_nghost-%COMP%]     .customer-badge.status-proposal{background-color:#ffd8b2;color:#805b36}[_nghost-%COMP%]     .customer-badge.status-qualified{background-color:#c8e6c9;color:#256029}[_nghost-%COMP%]     .customer-badge.status-new{background-color:#b3e5fc;color:#23547b}[_nghost-%COMP%]     .customer-badge.status-renewal{background-color:#eccfff;color:#694382}[_nghost-%COMP%]     .customer-badge.status-negotiation{background-color:#feedaf;color:#8a5340}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header{padding:1rem;text-align:left;font-size:1.5rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator{padding:1rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{text-align:left}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{cursor:auto}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder){text-transform:uppercase}[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width:500px){.add-btn[_ngcontent-%COMP%]{margin-bottom:5px}}@media screen and (max-width:960px){[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr{border-bottom:1px solid var(--layer-2)}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{text-align:left;display:block;border:0!important;width:100%!important;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4rem 1rem -.4rem -.4rem;font-weight:700}}"]}),e})(),Te=(()=>{class e{constructor(e,t,r,s,a){this.store=e,this.dialogService=t,this.confirmationService=r,this.customerService=s,this.translate=a}ngOnInit(){this.customers$=this.store.select(ne),this.errorMessage$=this.store.select(oe),this.store.dispatch(s.loadCustomers())}deleteCustomer(e){this.confirmationService.confirm({message:this.translate.instant("Are you sure you want to delete the selected customer?"),header:this.translate.instant("Confirm"),acceptLabel:this.translate.instant("Yes"),rejectLabel:this.translate.instant("No"),icon:"pi pi-exclamation-triangle",accept:()=>{this.store.dispatch(s.deleteCustomer({customerId:e.id}))}})}editCustomer(e){this.openEditDialog(`${this.translate.instant("Edit Customer")}: ${e.name}`,e)}newCustomer(){this.openEditDialog(this.translate.instant("New Customer"),this.customerService.initialCustomer)}openEditDialog(e,t){this.ref=this.dialogService.open(se,{data:{customer:t},header:e,width:"400px",baseZIndex:1e4}),this.ref.onClose.pipe(Object(ie.a)(e=>e)).subscribe(e=>{this.store.dispatch(0===(null==e?void 0:e.id)?s.createCustomer({customer:e}):s.updateCustomer({customer:e}))})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(b.h),c.Nb(R.a),c.Nb(E.a),c.Nb(A),c.Nb(q.d))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-customer-shell"]],features:[c.Bb([R.a])],decls:3,vars:6,consts:[[3,"customers","errorMessage","delete","edit","new"]],template:function(e,t){1&e&&(c.Tb(0,"app-customer-table",0),c.ac("delete",function(e){return t.deleteCustomer(e)})("edit",function(e){return t.editCustomer(e)})("new",function(){return t.newCustomer()}),c.ec(1,"async"),c.ec(2,"async"),c.Sb()),2&e&&c.lc("customers",c.fc(1,2,t.customers$))("errorMessage",c.fc(2,4,t.errorMessage$))},directives:[Me],pipes:[i.b],styles:[""],changeDetection:0}),e})();Object(i.v)(l.a);const we=[{path:"",component:Te}];let Fe=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},providers:[{provide:c.v,useValue:"de-DE"}],imports:[[o.a,b.j.forFeature("customers",I),m.b.forFeature([_]),z.a,n.e.forChild(we),q.b]]}),e})()}}]);