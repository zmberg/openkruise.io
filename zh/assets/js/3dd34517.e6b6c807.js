"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9404],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,d=k["".concat(u,".").concat(m)]||k[m]||c[m]||a;return n?l.createElement(d,o(o({ref:t},p),{},{components:n})):l.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var l=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],i={title:"Kubectl Plugin"},u=void 0,s={unversionedId:"cli-tool/kubectl-plugin",id:"cli-tool/kubectl-plugin",isDocsHomePage:!1,title:"Kubectl Plugin",description:"Kruise-tools \u4e3a Kruise \u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5305\u62ec kubectl-kruise\uff0c\u5b83\u7684\u662f kubectl \u7684\u6807\u51c6\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli-tool/kubectl-plugin.md",sourceDirName:"cli-tool",slug:"/cli-tool/kubectl-plugin",permalink:"/zh/docs/next/cli-tool/kubectl-plugin",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/cli-tool/kubectl-plugin.md",tags:[],version:"current",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1636538055,formattedLastUpdatedAt:"2021/11/10",frontMatter:{title:"Kubectl Plugin"},sidebar:"docs",previous:{title:"Other languages",permalink:"/zh/docs/next/developer-manuals/other-languages"},next:{title:"FAQ",permalink:"/zh/docs/next/faq"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"expose",id:"expose",children:[],level:3},{value:"scale",id:"scale",children:[],level:3},{value:"rollout",id:"rollout",children:[],level:3},{value:"set",id:"set",children:[],level:3},{value:"migrate",id:"migrate",children:[],level:3},{value:"scaledown",id:"scaledown",children:[],level:3}],level:2}],c={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"Kruise-tools")," \u4e3a Kruise \u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl-kruise"),"\uff0c\u5b83\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7684\u6807\u51c6\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools/releases"},"releases")," \u9875\u9762\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u76ee\u524d\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"linux"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"darwin"),"\uff08OS X\uff09\u7cfb\u7edf ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"arm64")," \u67b6\u6784\u3002\u5982\u679c\u4f60\u5728\u4f7f\u7528\u5176\u4ed6\u7684\u64cd\u4f5c\u7cfb\u7edf\u6216\u67b6\u6784\uff0c\u9700\u8981\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"kruise-tools")," \u6e90\u7801\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"make build")," \u6253\u5305\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\uff0c\u91cd\u547d\u540d\u5e76\u79fb\u52a8\u5230\u7cfb\u7edf PATH \u8def\u5f84\u4e2d\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x kubectl-kruise_darwin_amd64\n$ mv kubectl-kruise_darwin_amd64 /usr/local/bin/kubectl-kruise\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl-kruise")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl kruise")," \u547d\u4ee4\u6765\u4f7f\u7528.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise --help\n\n# or\n$ kubectl kruise --help\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"expose"},"expose"),(0,a.kt)("p",null,"\u6839\u636e\u4e00\u4e2a workload\uff08\u5982 Deployment\u3001CloneSet\uff09\u3001Service \u6216 Pod \u6765\u751f\u6210\u4e00\u4e2a\u65b0\u7684 service \u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise expose cloneset nginx --port=80 --target-port=8000\n")),(0,a.kt)("h3",{id:"scale"},"scale"),(0,a.kt)("p",null,"\u4e3a workload\uff08\u5982 Deployment, ReplicaSet, CloneSet, or Advanced StatefulSet\uff09 \u8bbe\u7f6e\u65b0\u7684\u526f\u672c\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise scale --replicas=3 cloneset nginx\n")),(0,a.kt)("p",null,"\u5b83\u7684\u6548\u679c\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl scale --replicas=3 cloneset nginx")," \u76f8\u540c\uff0c\u5373\u539f\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl scale")," \u4e5f\u9002\u7528\u3002"),(0,a.kt)("h3",{id:"rollout"},"rollout"),(0,a.kt)("p",null,"\u53ef\u7528\u7684\u5b50\u547d\u4ee4: ",(0,a.kt)("inlineCode",{parentName:"p"},"history"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pause"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"restart"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resume"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise rollout undo cloneset/nginx\n\n# built-in statefulsets\n$ kubectl kruise rollout status statefulsets/sts1\n\n# kruise statefulsets\n$ kubectl kruise rollout status statefulsets.apps.kruise.io/sts2\n")),(0,a.kt)("h3",{id:"set"},"set"),(0,a.kt)("p",null,"\u53ef\u7528\u7684\u5b50\u547d\u4ee4: ",(0,a.kt)("inlineCode",{parentName:"p"},"env"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceaccount"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"subject"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise set env cloneset/nginx STORAGE_DIR=/local\n\n$ kubectl kruise set image cloneset/nginx busybox=busybox nginx=nginx:1.9.1\n")),(0,a.kt)("h3",{id:"migrate"},"migrate"),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u4ece Deployment \u8fc1\u79fb\u5230 CloneSet\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create an empty CloneSet from an existing Deployment.\n$ kubectl kruise migrate CloneSet --from Deployment -n default --dst-name deployment-name --create\n\n# Create a same replicas CloneSet from an existing Deployment.\n$ kubectl kruise migrate CloneSet --from Deployment -n default --dst-name deployment-name --create --copy\n\n# Migrate replicas from an existing Deployment to an existing CloneSet.\n$ kubectl-kruise migrate CloneSet --from Deployment -n default --src-name cloneset-name --dst-name deployment-name --replicas 10 --max-surge=2\n")),(0,a.kt)("h3",{id:"scaledown"},"scaledown"),(0,a.kt)("p",null,"\u5bf9 cloneset \u6307\u5b9a pod \u7f29\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Scale down 2 with  selective pods\n$ kubectl kruise scaledown cloneset/nginx --pods pod-a,pod-b\n")),(0,a.kt)("p",null,"\u5b83\u4f1a\u5c06 cloneset \u8bbe\u7f6e ",(0,a.kt)("strong",{parentName:"p"},"replicas=replicas-2"),"\uff0c\u5e76\u5220\u9664\u6307\u5b9a\u7684\u4e24\u4e2a pod\u3002"))}k.isMDXComponent=!0}}]);