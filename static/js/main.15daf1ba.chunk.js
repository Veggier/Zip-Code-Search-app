(this["webpackJsonpzipcode-search"]=this["webpackJsonpzipcode-search"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=(a(22),a(2)),i=a(3),s=a(5),m=a(4),u=(a(23),a(16)),p=a.n(u),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),p.a.get("http://ctp-zip-api.herokuapp.com/zip/"+n.state.code).then((function(e){for(var t=e.data,a=[],c=0;c<t.length;c++)a[c]={locationText:t[c].LocationText,statename:t[c].State,lat:t[c].Lat,long:t[c].Long,population:t[c].EstimatedPopulation,totalWages:t[c].TotalWages};n.setState({zip:a})})).catch((function(e){return alert("this Zipcode is not exist")}))},n.state={zip:[],code:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.state.zip.length?c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Zipcode Search"),c.a.createElement("br",null),c.a.createElement("form",{className:"card  border-light mb-3 width mx-auto",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"input-group mx-auto"},c.a.createElement("span",{className:"input-group-text"},"Zip code:"),c.a.createElement("input",{type:"text",name:"zipcode",placeholder:"Try 10017",onChange:function(e){return t.setState({code:e.target.value})},value:this.state.code}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-info ",type:"submit"},"Search")))),c.a.createElement("div",{className:"row row-cols-3"},this.state.zip.map((function(e,t){return c.a.createElement("div",{className:"col",key:t},c.a.createElement("div",{className:"card bg-light mb-3 width mx-auto",key:t},c.a.createElement("div",{className:"card-header"},e.locationText),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"State:",e.statename),c.a.createElement("ul",null,c.a.createElement("li",null,"Location: (",e.lat,",",e.long,")"),c.a.createElement("li",null,"Population(estimated): ",e.population),c.a.createElement("li",null,"Total Wages: ",e.totalWages)))))})))):c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Zipcode Search"),c.a.createElement("br",null),c.a.createElement("form",{className:"card  border-light mb-3 width mx-auto",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"input-group mx-auto"},c.a.createElement("span",{className:"input-group-text"},"Zip code:"),c.a.createElement("input",{type:"text",name:"zipcode",placeholder:"Try 10017",onChange:function(e){return t.setState({code:e.target.value})},value:this.state.code}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-info ",type:"submit"},"Search"))),c.a.createElement("div",null,"No Result"))),c.a.createElement("div",{className:"zip"},e)}}]),a}(n.Component),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:""},c.a.createElement(d,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.15daf1ba.chunk.js.map