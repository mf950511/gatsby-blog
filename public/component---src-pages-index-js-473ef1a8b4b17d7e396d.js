(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"07or":function(e,t,a){e.exports={paganation:"paganation-module--paganation--2bE_X",extend:"paganation-module--extend--2q4Qk",hide:"paganation-module--hide--wBlxP",pageNumber:"paganation-module--pageNumber--RUHS6",current:"paganation-module--current--39YZ4"}},"0r+/":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("tqEm"),o=a.n(l),i=a("blUz"),c=r.a.useEffect,s=r.a.useRef;t.a=function(e){var t=e.children,a=e.title,n=s(null);return c((function(){Object(i.default)().reveal(n,{distance:"150%",origin:"right",opacity:null})})),r.a.createElement("div",{key:"amache",className:"blogList",ref:n},r.a.createElement("span",null,r.a.createElement("article",{className:o.a.listWrapper},r.a.createElement("div",{className:o.a.listContent},r.a.createElement("div",null,a),t))))}},Q7Kf:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),i=a("07or"),c=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.count,t=this.props.limit,a=this.props.currentIndex,n=this.props.baseUrl,r=Math.ceil(e/t);return console.log(n),1===r?null:l.a.createElement("div",{className:c.a.paganation},l.a.createElement(o.a,{className:""+(0===a?c.a.hide:c.a.extend),to:""+n+(a-1)},"« Prev"),Array.from({length:r}).map((function(e,t){return l.a.createElement(o.a,{to:""+n+(0===t?"":t+1),className:c.a.pageNumber+" "+(a===t?c.a.current:""),key:t},t+1)})),l.a.createElement(o.a,{className:""+(a<r-1?c.a.extend:c.a.hide),to:""+n+(a+1)},"Next »"))},t}(l.a.Component)},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s})),a.d(t,"query",(function(){return u}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),o=a("8k0H"),i=a("fXrY"),c=a("Q7Kf"),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={edges:t.data.allMarkdownRemark.edges,count:t.data.allMarkdownRemark.totalCount},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){var e=this.state.count;console.log(e);var t=this.state.edges;return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{edges:t}),l.a.createElement(c.a,{limit:10,count:e,currentIndex:0,baseUrl:"/blog/"})))},t}(l.a.Component),u="3568719779"},fXrY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("0r+/"),i=a("K5oc");t.a=function(e){var t=e.edges;return r.a.createElement("div",null,t.map((function(e,t){var a=e.node;return r.a.createElement(o.a,{key:t},r.a.createElement(l.a,{to:"/blog"+a.fields.slug},r.a.createElement("h1",{className:"article-title left"},a.frontmatter.title)),r.a.createElement("div",{className:"article-entry",dangerouslySetInnerHTML:{__html:a.html.split("\x3c!--more--\x3e")[0]}}),r.a.createElement("div",{className:"article-entry-bottom","data-flex":"box:last"},r.a.createElement(i.a,{categories:a.frontmatter.categories,tags:a.frontmatter.tags}),r.a.createElement("div",{className:"article-more-link"},r.a.createElement(l.a,{to:"/blog"+a.fields.slug},"阅读全文 >>"))))})))}},tqEm:function(e,t,a){e.exports={hide:"listWrapper-module--hide--2daIu",listWrapper:"listWrapper-module--listWrapper--FBSVx",listContent:"listWrapper-module--listContent--6okCO"}}}]);
//# sourceMappingURL=component---src-pages-index-js-473ef1a8b4b17d7e396d.js.map