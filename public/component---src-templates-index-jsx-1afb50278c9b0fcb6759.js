(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"07or":function(e,t,a){e.exports={paganation:"paganation-module--paganation--2bE_X",extend:"paganation-module--extend--2q4Qk",hide:"paganation-module--hide--wBlxP",pageNumber:"paganation-module--pageNumber--RUHS6",current:"paganation-module--current--39YZ4"}},"0r+/":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),l=a("tqEm"),i=a.n(l),c=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){(0,a("blUz").default)().reveal(this.refs.blogList,{distance:"150%",origin:"right",opacity:null})},r.render=function(){var e=this.props,t=e.children,a=e.title;return o.a.createElement("div",{key:"amache",className:"blogList",ref:"blogList"},o.a.createElement("span",null,o.a.createElement("article",{className:i.a.listWrapper},o.a.createElement("div",{className:i.a.listContent},o.a.createElement("div",null,a),t))))},t}(o.a.Component)},Q7Kf:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),l=a("Wbzz"),i=a("07or"),c=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.count,t=this.props.limit,a=this.props.currentIndex,n=this.props.baseUrl,r=Math.ceil(e/t);return console.log(n),1===r?null:o.a.createElement("div",{className:c.a.paganation},o.a.createElement(l.a,{className:""+(0===a?c.a.hide:c.a.extend),to:""+n+(a-1)},"« Prev"),Array.from({length:r}).map((function(e,t){return o.a.createElement(l.a,{to:""+n+(0===t?"":t+1),className:c.a.pageNumber+" "+(a===t?c.a.current:""),key:t},t+1)})),o.a.createElement(l.a,{className:""+(a<r-1?c.a.extend:c.a.hide),to:""+n+(a+1)},"Next »"))},t}(o.a.Component)},fXrY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("0r+/"),i=a("K5oc");t.a=function(e){var t=e.edges;return r.a.createElement("div",null,t.map((function(e,t){var a=e.node;return r.a.createElement(l.a,{key:t},r.a.createElement(o.a,{to:"/blog"+a.fields.slug},r.a.createElement("h1",{className:"article-title left"},a.frontmatter.title)),r.a.createElement("div",{className:"article-entry",dangerouslySetInnerHTML:{__html:a.html.split("\x3c!--more--\x3e")[0]}}),r.a.createElement("div",{className:"article-entry-bottom","data-flex":"box:last"},r.a.createElement(i.a,{categories:a.frontmatter.categories,tags:a.frontmatter.tags}),r.a.createElement("div",{className:"article-more-link"},r.a.createElement(o.a,{to:"/blog"+a.fields.slug},"阅读全文 >>"))))})))}},tqEm:function(e,t,a){e.exports={hide:"listWrapper-module--hide--2daIu",listWrapper:"listWrapper-module--listWrapper--FBSVx",listContent:"listWrapper-module--listContent--6okCO"}},wMyX:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s})),a.d(t,"query",(function(){return u}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),l=a("8k0H"),i=a("fXrY"),c=a("Q7Kf"),s=function(e){function t(t){var a;return a=e.call(this,t)||this,console.log(t),a.state={edges:t.data.allMarkdownRemark.edges,count:t.data.allMarkdownRemark.totalCount,limit:t.pageContext.limit,currentIndex:t.pageContext.currentIndex},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){var e=this.state.count,t=this.state.edges,a=this.state.currentIndex,n=this.state.limit;return console.log(e,a,n),o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{edges:t}),o.a.createElement(c.a,{limit:n,count:e,currentIndex:a,baseUrl:"/blog/"})))},t}(o.a.Component),u="3490808079"}}]);
//# sourceMappingURL=component---src-templates-index-jsx-1afb50278c9b0fcb6759.js.map