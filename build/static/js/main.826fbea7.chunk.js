(this["webpackJsonpcrud-validation"]=this["webpackJsonpcrud-validation"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),o=a.n(s),c=a(2),i=a(3),l=a(5),d=a(4),h=a(8),m=(a(13),a(0)),u={name:"",email:"",password:"",nameError:"",emailError:"",passwordError:""},b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=u,e.handleChange=function(t){var a="checkbox"===t.target.type;e.setState(Object(h.a)({},t.target.name,a?t.target.checked:t.target.value))},e.validate=function(){var t="",a="",n="";return e.state.name||(t="Enter Your Name \ud83d\udc81"),e.state.email.includes("@")||(a="Invalid E-mail \ud83d\udce7"),e.state.passwordError||(n="Password Cannot Be Blank \ud83d\udd10"),!(a||t||n)||(e.setState({emailError:a,nameError:t,passwordError:n}),!1)},e.handleSubmit=function(t){t.preventDefault(),e.validate()&&(console.log(e.state),e.setState(u))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:" mt-5 mx-auto form-control",style:{backgroundColor:"#028371",width:"30%"},onSubmit:this.handleSubmit,children:[Object(m.jsx)("h4",{style:{fontFamily:"verdana",textAlign:"center"},children:"Form-Validation"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:" mt-3 form-control ",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleChange}),Object(m.jsx)("div",{style:{fontSize:12,color:"black"},children:this.state.nameError})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:" mt-3 form-control",name:"email",placeholder:"email",value:this.state.email,onChange:this.handleChange}),Object(m.jsx)("div",{style:{fontSize:12,color:"black"},children:this.state.emailError})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:" mt-3 form-control",type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),Object(m.jsx)("div",{style:{fontSize:12,color:"black"},children:this.state.passwordError})]}),Object(m.jsx)("button",{className:" mt-3 btn btn-dark",type:"submit",children:"submit"})]})}}]),a}(r.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={visible:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b,{})})}}]),a}(n.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.826fbea7.chunk.js.map