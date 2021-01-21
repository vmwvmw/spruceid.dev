(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(93)),o={id:"intro",title:"Introduction to DIDKit",sidebar_label:"Introduction",slug:"/didkit/"},l={unversionedId:"didkit/intro",id:"didkit/intro",isDocsHomePage:!1,title:"Introduction to DIDKit",description:"DIDKit is a lightweight set of libraries containing a command-line interface and an HTTP interface. Both interfaces expose the core Verifiable Credential functionality of Spruce\u2019s core \u201cssi\u201d library. This means that shell scripts, sysadmins, cross-application automations, and even web servers can log events, store data, and communicate between themselves in signed and verifiable W3C-compliant JSON-LD credentials rather than simple clear-text JSON objects.",source:"@site/docs\\didkit\\intro.md",slug:"/didkit/",permalink:"/docs/didkit/",editUrl:"https://github.com/spruceid/docs/didkit/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"didkitSidebar",next:{title:"Core Concepts",permalink:"/docs/didkit/concepts"}},c=[{value:"Features",id:"features",children:[]},{value:"Coming soon",id:"coming-soon",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DIDKit is a lightweight set of libraries containing a command-line interface and an HTTP interface. Both interfaces expose the core Verifiable Credential functionality of Spruce\u2019s core \u201cssi\u201d library. This means that shell scripts, sysadmins, cross-application automations, and even web servers can log events, store data, and communicate between themselves in signed and verifiable W3C-compliant JSON-LD credentials rather than simple clear-text JSON objects."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,"The core featureset of DIDKit is expanding steadily over time and in the open, so feel free to engage with the repository directly on github. Currently, DID-Kit supports the following features:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generating keys"),Object(a.b)("li",{parentName:"ol"},"Wrapping keys in a DID:Key "),Object(a.b)("li",{parentName:"ol"},"Issuing W3C specification-compliant, JSON-LD verifiable credentials, signed by a local and/or passed key"),Object(a.b)("li",{parentName:"ol"},"Verifying W3C specification-compliant, JSON-LD verifiable credentials")),Object(a.b)("p",null,"DID Methods supported so far: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"did:tezos1")),Object(a.b)("p",null,"Proof types verifiable so far:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"RSASignature2018"),Object(a.b)("li",{parentName:"ul"},"Ed25519VerificationKeys")),Object(a.b)("p",null,"Libraries binding all of the above functionality for the following development languages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"C"),Object(a.b)("li",{parentName:"ul"},"Java"),Object(a.b)("li",{parentName:"ul"},"Android"),Object(a.b)("li",{parentName:"ul"},"Flutter")),Object(a.b)("h2",{id:"coming-soon"},"Coming soon"),Object(a.b)("p",null,"The following features have been tentatively roadmapped for the next major release:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"JSON Schema editor"),Object(a.b)("li",{parentName:"ol"},"Built-in validation for JSON-LD Schema")))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);