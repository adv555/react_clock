(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0));function m(t){return t.toUTCString().slice(-12,-4)}var h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:m(new Date)},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:m(new Date)});var e=t.state.today;console.info(e)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName,n=this.props.clockName;e!==n&&console.debug("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(s.PureComponent);function k(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},t.clockId=0,t.handleDocumentRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleDocumentLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockId=window.setInterval((function(){t.setState({clockName:k()})}),3300),document.addEventListener("contextmenu",this.handleDocumentRightClick),document.addEventListener("click",this.handleDocumentLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.clockId),document.removeEventListener("contextmenu",this.handleDocumentRightClick),document.removeEventListener("click",this.handleDocumentLeftClick)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(h,{clockName:e})]})}}]),n}(u.a.Component);o.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9234877a.chunk.js.map