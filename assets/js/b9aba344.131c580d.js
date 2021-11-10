"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8714],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},964:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),l=["components"],i={title:"Advanced DaemonSet"},p=void 0,s={unversionedId:"user-manuals/advanceddaemonset",id:"version-v0.10.0/user-manuals/advanceddaemonset",isDocsHomePage:!1,title:"Advanced DaemonSet",description:"This controller enhances the rolling update workflow of default DaemonSet",source:"@site/versioned_docs/version-v0.10.0/user-manuals/advanceddaemonset.md",sourceDirName:"user-manuals",slug:"/user-manuals/advanceddaemonset",permalink:"/docs/user-manuals/advanceddaemonset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advanceddaemonset.md",tags:[],version:"v0.10.0",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"Advanced DaemonSet"},sidebar:"version-v0.10.0/docs",previous:{title:"Advanced StatefulSet",permalink:"/docs/user-manuals/advancedstatefulset"},next:{title:"BroadcastJob",permalink:"/docs/user-manuals/broadcastjob"}},d=[{value:"Enhanced strategies",id:"enhanced-strategies",children:[{value:"Type for rolling update",id:"type-for-rolling-update",children:[],level:3},{value:"Selector for rolling update",id:"selector-for-rolling-update",children:[],level:3},{value:"Partition for rolling update",id:"partition-for-rolling-update",children:[],level:3},{value:"MaxSurge for rolling update",id:"maxsurge-for-rolling-update",children:[],level:3},{value:"Paused for rolling update",id:"paused-for-rolling-update",children:[],level:3}],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This controller enhances the rolling update workflow of default ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),"\ncontroller from aspects, such as partition, selector, pause and surging strategies."),(0,r.kt)("p",null,"Note that Advanced DaemonSet extends the same CRD schema of default DaemonSet with newly added fields.\nThe CRD kind name is still ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),".\nThis is done on purpose so that user can easily migrate workload to the Advanced DaemonSet from the\ndefault DaemonSet. For example, one may simply replace the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," in the DaemonSet yaml\nfile from ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/v1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/v1alpha1")," after installing Kruise manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"-  apiVersion: apps/v1\n+  apiVersion: apps.kruise.io/v1alpha1\n   kind: DaemonSet\n   metadata:\n     name: sample-ds\n   spec:\n     #...\n")),(0,r.kt)("h2",{id:"enhanced-strategies"},"Enhanced strategies"),(0,r.kt)("p",null,"These new fields have been added into RollingUpdateDaemonSet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\n+    // StandardRollingUpdateType replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.\n+    // this is the default type for RollingUpdate.\n+    StandardRollingUpdateType RollingUpdateType = "Standard"\n\n+    // SurgingRollingUpdateType replaces the old daemons by new ones using rolling update i.e replace them on each node one\n+    // after the other, creating the new pod and then killing the old one.\n+    SurgingRollingUpdateType RollingUpdateType = "Surging"\n)\n\n// Spec to control the desired behavior of daemon set rolling update.\ntype RollingUpdateDaemonSet struct {\n+    // Type is to specify which kind of rollingUpdate.\n+    Type RollingUpdateType `json:"rollingUpdateType,omitempty" protobuf:"bytes,1,opt,name=rollingUpdateType"`\n\n    // ...\n    MaxUnavailable *intstr.IntOrString `json:"maxUnavailable,omitempty" protobuf:"bytes,2,opt,name=maxUnavailable"`\n\n+    // A label query over nodes that are managed by the daemon set RollingUpdate.\n+    // Must match in order to be controlled.\n+    // It must match the node\'s labels.\n+    Selector *metav1.LabelSelector `json:"selector,omitempty" protobuf:"bytes,3,opt,name=selector"`\n\n+    // The number of DaemonSet pods remained to be old version.\n+    // Default value is 0.\n+    // Maximum value is status.DesiredNumberScheduled, which means no pod will be updated.\n+    // +optional\n+    Partition *int32 `json:"partition,omitempty" protobuf:"varint,4,opt,name=partition"`\n\n+    // Indicates that the daemon set is paused and will not be processed by the\n+    // daemon set controller.\n+    // +optional\n+    Paused *bool `json:"paused,omitempty" protobuf:"varint,5,opt,name=paused"`\n\n+    // ...\n+    MaxSurge *intstr.IntOrString `json:"maxSurge,omitempty" protobuf:"bytes,7,opt,name=maxSurge"`\n}\n')),(0,r.kt)("h3",{id:"type-for-rolling-update"},"Type for rolling update"),(0,r.kt)("p",null,"Advanced DaemonSet has a ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdateType")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate"),"\nwhich controls the way to rolling update."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Standard"),": controller will replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.\nIt is the same behavior as default DaemonSet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Surging"),": controller will replace the old daemons by new ones using rolling update i.e replace them on each node one\nafter the other, creating the new pod and then killing the old one.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      rollingUpdateType: Standard\n")),(0,r.kt)("h3",{id:"selector-for-rolling-update"},"Selector for rolling update"),(0,r.kt)("p",null,"It helps users to update Pods on specific nodes whose labels could be matched with the selector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      selector:\n        matchLabels:\n          nodeType: canary\n")),(0,r.kt)("h3",{id:"partition-for-rolling-update"},"Partition for rolling update"),(0,r.kt)("p",null,"This strategy defines rules for calculating the priority of updating pods.\nPartition is the number of DaemonSet pods that should be remained to be old version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      partition: 10\n")),(0,r.kt)("h3",{id:"maxsurge-for-rolling-update"},"MaxSurge for rolling update"),(0,r.kt)("p",null,"MaxSurge is the maximum number of DaemonSet pods that can be scheduled above the desired number of pods during the update.\nOnly when ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdateType=Surging"),", it works."),(0,r.kt)("p",null,"Value can be an absolute number (ex: 5) or a percentage of the total number of DaemonSet pods at the start of the update (ex: 10%).\nThe absolute number is calculated from the percentage by rounding up. This cannot be 0. The default value is 1."),(0,r.kt)("p",null,"Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have 2 pods running at any given time.\nThe update starts by starting replacements for at most 30% of those DaemonSet pods.\nOnce the new pods are available it then stops the existing pods before proceeding onto other DaemonSet pods,\nthus ensuring that at most 130% of the desired final number of DaemonSet pods are running at all times during the update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      rollingUpdateType: Surging\n      maxSurge: 30%\n")),(0,r.kt)("h3",{id:"paused-for-rolling-update"},"Paused for rolling update"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"paused")," indicates that Pods updating is paused, controller will not update Pods but just maintain the number of replicas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      paused: true\n")))}c.isMDXComponent=!0}}]);