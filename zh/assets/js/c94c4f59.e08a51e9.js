"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2562],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(b,c(c({ref:n},u),{},{components:t})):r.createElement(b,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],i={title:"AdvancedCronJob"},l=void 0,s={unversionedId:"user-manuals/advancedcronjob",id:"version-v0.10.0/user-manuals/advancedcronjob",isDocsHomePage:!1,title:"AdvancedCronJob",description:"AdvancedCronJob \u662f\u5bf9\u4e8e\u539f\u751f CronJob \u7684\u6269\u5c55\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.10.0/user-manuals/advancedcronjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/advancedcronjob",permalink:"/zh/docs/user-manuals/advancedcronjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advancedcronjob.md",tags:[],version:"v0.10.0",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"AdvancedCronJob"},sidebar:"version-v0.10.0/docs",previous:{title:"BroadcastJob",permalink:"/zh/docs/user-manuals/broadcastjob"},next:{title:"SidecarSet",permalink:"/zh/docs/user-manuals/sidecarset"}},u=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",children:[],level:2}],p={toc:u};function d(e){var n=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AdvancedCronJob \u662f\u5bf9\u4e8e\u539f\u751f CronJob \u7684\u6269\u5c55\u7248\u672c\u3002\n\u540e\u8005\u6839\u636e\u7528\u6237\u8bbe\u7f6e\u7684 schedule \u89c4\u5219\uff0c\u5468\u671f\u6027\u521b\u5efa Job \u6267\u884c\u4efb\u52a1\uff0c\u800c AdvancedCronJob \u7684 template \u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684 job \u8d44\u6e90\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nspec:\n  template:\n\n    # Option 1: use jobTemplate, which is equivalent to original CronJob\n    jobTemplate:\n      # ...\n\n    # Option 2: use broadcastJobTemplate, which will create a BroadcastJob object when cron schedule triggers\n    broadcastJobTemplate:\n      # ...\n\n    # Options 3(future): ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jobTemplate\uff1a\u4e0e\u539f\u751f CronJob \u4e00\u6837\u521b\u5efa Job \u6267\u884c\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"broadcastJobTemplate\uff1a\u5468\u671f\u6027\u521b\u5efa ",(0,a.kt)("a",{parentName:"li",href:"./broadcastjob"},"BroadcastJob")," \u6267\u884c\u4efb\u52a1")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AdvancedCronjob",src:t(3748).Z})),(0,a.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nmetadata:\n  name: acj-test\nspec:\n  schedule: "*/1 * * * *"\n  template:\n    broadcastJobTemplate:\n      spec:\n        template:\n          spec:\n            containers:\n              - name: pi\n                image: perl\n                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n            restartPolicy: Never\n        completionPolicy:\n          type: Always\n          ttlSecondsAfterFinished: 30\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0 YAML \u5b9a\u4e49\u4e86\u4e00\u4e2a AdvancedCronJob\uff0c\u6bcf\u5206\u949f\u521b\u5efa\u4e00\u4e2a BroadcastJob \u5bf9\u8c61\uff0c\u8fd9\u4e2a BroadcastJob \u4f1a\u5728\u6240\u6709\u8282\u70b9\u4e0a\u8fd0\u884c\u4e00\u4e2a job \u4efb\u52a1\u3002"))}d.isMDXComponent=!0},3748:function(e,n,t){n.Z=t.p+"assets/images/advancedcronjob-2667633566977804a6b7e323ef3d3139.png"}}]);