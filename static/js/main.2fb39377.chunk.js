(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),i=n.n(o),s=n(2),a=n(0),u=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Good:",t]}),Object(a.jsxs)("p",{children:["Neutral:",n]}),Object(a.jsxs)("p",{children:["Bad:",c]}),Object(a.jsxs)("p",{children:["Total:",r]}),Object(a.jsxs)("p",{children:["Positive feedback: ",o]})]})},b=n(5),d=n.n(b),j=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(a.jsx)("button",{onClick:function(){return n(e)},className:d.a.option__button,children:e},e)}))},l=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.message;return Object(a.jsx)("p",{children:t})};function h(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(0),i=Object(s.a)(o,2),b=i[0],d=i[1],h=Object(c.useState)(0),f=Object(s.a)(h,2),p=f[0],x=f[1],v={good:n,neutral:b,bad:p},k=Object.keys(v),g=function(){return Object.values(v).reduce((function(e,t){return e+t}),0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{title:"Please leave feedback",children:Object(a.jsx)(j,{options:k,onLeaveFeedback:function(e){switch(e){case"good":return void r((function(e){return e+1}));case"neutral":return void d((function(e){return e+1}));case"bad":return void x((function(e){return e+1}));default:return}}})}),Object(a.jsx)(l,{title:"Statistical",children:n||b||p>0?Object(a.jsx)(u,{good:n,neutral:b,bad:p,total:g(),positivePercentage:n>0?(n/g()*100).toFixed()+"%":0}):Object(a.jsx)(O,{message:"No feedback given"})})]})}i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={option__button:"feedbackOptions_option__button__2HAoF"}}},[[11,1,2]]]);
//# sourceMappingURL=main.2fb39377.chunk.js.map