(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(1),c=n.n(u),l=(n(15),n(8)),o=n(2),i=n(3),s=n(5),f=n(4),d=n(6),m=Object(a.forwardRef)(function(e,t){var n=e.addAlert,a=e.value,u=e.onChangeValue;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:a,onChange:function(e){return u(e)},ref:t}),r.a.createElement("button",{onClick:function(){return n(a)},disabled:!a},"Add Alert"))}),p=function(e){var t=e.message;return r.a.createElement("div",null,t)},v=function(e){return e.alerts.map(function(e,t){return r.a.createElement("div",{key:t,className:"alerts-list__item"},r.a.createElement(p,{message:e}))})},h=function(e){return function(t){return function(n){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,n),Object(i.a)(a,[{key:"render",value:function(){return c.a.createPortal(r.a.createElement(t,this.props),e)}}]),a}(r.a.Component)}}(document.querySelector(".alerts-list"))(v),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={value:"",alerts:[]},n.setFocusInput=function(){n.inputRef.current.focus()},n.addAlert=function(e){n.setState(function(t){return{alerts:[].concat(Object(l.a)(t.alerts),[e]),value:""}}),n.setFocusInput()},n.onChangeValue=function(e){var t=e.target;n.setState({value:t.value})},n.inputRef=r.a.createRef(),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setFocusInput()}},{key:"render",value:function(){return r.a.createElement("div",{className:"repos-container"},r.a.createElement(m,{ref:this.inputRef,addAlert:this.addAlert,value:this.state.value,onChangeValue:this.onChangeValue}),r.a.createElement(h,{alerts:this.state.alerts}))}}]),t}(a.Component),j=document.getElementById("root");c.a.render(r.a.createElement(b,null),j)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac850c52.chunk.js.map