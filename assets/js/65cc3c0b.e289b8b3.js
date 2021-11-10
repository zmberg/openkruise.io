"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9471],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9722:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),r=["components"],o={title:"Advanced StatefulSet"},d=void 0,p={unversionedId:"user-manuals/advancedstatefulset",id:"user-manuals/advancedstatefulset",isDocsHomePage:!1,title:"Advanced StatefulSet",description:"This controller enhances the rolling update workflow of default StatefulSet",source:"@site/docs/user-manuals/advancedstatefulset.md",sourceDirName:"user-manuals",slug:"/user-manuals/advancedstatefulset",permalink:"/docs/next/user-manuals/advancedstatefulset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advancedstatefulset.md",tags:[],version:"current",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1635231470,formattedLastUpdatedAt:"10/26/2021",frontMatter:{title:"Advanced StatefulSet"},sidebar:"docs",previous:{title:"CloneSet",permalink:"/docs/next/user-manuals/cloneset"},next:{title:"Advanced DaemonSet",permalink:"/docs/next/user-manuals/advanceddaemonset"}},s=[{value:"MaxUnavailable",id:"maxunavailable",children:[],level:2},{value:"In-Place Update",id:"in-place-update",children:[],level:2},{value:"Update sequence",id:"update-sequence",children:[{value:"Priority strategy",id:"priority-strategy",children:[],level:3}],level:2},{value:"Paused update",id:"paused-update",children:[],level:2},{value:"Pre-download image for in-place update",id:"pre-download-image-for-in-place-update",children:[],level:2},{value:"Ordinals reserve(skip)",id:"ordinals-reserveskip",children:[],level:2},{value:"Scaling with rate limiting",id:"scaling-with-rate-limiting",children:[],level:2}],u={toc:s};function c(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This controller enhances the rolling update workflow of default ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet"),"\ncontroller from aspects, such as adding maxUnavailable and introducing in-place update strategy."),(0,i.kt)("p",null,"Note that Advanced StatefulSet extends the same CRD schema of default StatefulSet with newly added fields.\nThe CRD kind name is still ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),".\nThis is done on purpose so that user can easily migrate workload to the Advanced StatefulSet from the\ndefault StatefulSet. For example, one may simply replace the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"apiVersion")," in the StatefulSet yaml\nfile from ",(0,i.kt)("inlineCode",{parentName:"p"},"apps/v1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/v1beta1")," after installing Kruise manager."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"-  apiVersion: apps/v1\n+  apiVersion: apps.kruise.io/v1beta1\n   kind: StatefulSet\n   metadata:\n     name: sample\n   spec:\n     #...\n")),(0,i.kt)("p",null,"Note that since Kruise v0.7.0, Advanced StatefulSet has been promoted to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1beta1"),", which is compatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"v1alpha1"),".\nAnd for Kruise version lower than v0.7.0, you can only use ",(0,i.kt)("inlineCode",{parentName:"p"},"v1alpha1"),"."),(0,i.kt)("h2",{id:"maxunavailable"},"MaxUnavailable"),(0,i.kt)("p",null,"Advanced StatefulSet adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," capability in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingUpdateStatefulSetStrategy")," to allow parallel Pod\nupdates with the guarantee that the number of unavailable pods during the update cannot exceed this value.\nIt is only allowed to use when the podManagementPolicy is ",(0,i.kt)("inlineCode",{parentName:"p"},"Parallel"),"."),(0,i.kt)("p",null,"This feature achieves similar update efficiency like Deployment for cases where the order of\nupdate is not critical to the workload. Without this feature, the native ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," controller can only\nupdate Pods one by one even if the podManagementPolicy is ",(0,i.kt)("inlineCode",{parentName:"p"},"Parallel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  podManagementPolicy: Parallel\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 20%\n")),(0,i.kt)("p",null,"For example, assuming an Advanced StatefulSet has five Pods named P0 to P4, and the appplication can\ntolerate losing three replicas temporally. If we want to update the StatefulSet Pod spec from v1 to\nv2, we can perform the following steps using the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxUnavailable")," feature for fast update."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"MaxUnavailable")," to 3 to allow three unavailable Pods maximally."),(0,i.kt)("li",{parentName:"ol"},"Optionally, Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Partition")," to 4 in case canary update is needed. Partition means all Pods with an ordinal that is\ngreater than or equal to the partition will be updated. In this case P4 will be updated even though ",(0,i.kt)("inlineCode",{parentName:"li"},"MaxUnavailable"),"\nis 3."),(0,i.kt)("li",{parentName:"ol"},"After P4 finish update, change ",(0,i.kt)("inlineCode",{parentName:"li"},"Partition")," to 0. The controller will update P1,P2 and P3 concurrently.\nNote that with default StatefulSet, the Pods will be updated sequentially in the order of P3, P2, P1."),(0,i.kt)("li",{parentName:"ol"},"Once one of P1, P2 and P3 finishes update, P0 will be updated immediately.")),(0,i.kt)("h2",{id:"in-place-update"},"In-Place Update"),(0,i.kt)("p",null,"Advanced StatefulSet adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"podUpdatePolicy")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate"),"\nwhich controls recreate or in-place update for Pods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReCreate")," controller will delete old Pods and create new ones. This is the same behavior as default StatefulSet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceIfPossible")," controller will try to in-place update Pod instead of recreating them if possible. Please ready the concept doc below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceOnly")," controller will in-place update Pod instead of recreating them. With ",(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceOnly")," policy, user cannot modify any fields other than the fields that supported to in-place update.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You may need to read the ",(0,i.kt)("a",{parentName:"strong",href:"../core-concepts/inplace-update"},"concept doc")," for more details of in-place update.")),(0,i.kt)("p",null,"We also bring ",(0,i.kt)("strong",{parentName:"p"},"graceful period")," into in-place update. Advanced StatefulSet has supported ",(0,i.kt)("inlineCode",{parentName:"p"},"gracePeriodSeconds"),", which is a period\nduration between controller update pod status and update pod images.\nSo that endpoints-controller could have enough time to remove this Pod from endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  podManagementPolicy: Parallel\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n      inPlaceUpdateStrategy:\n        gracePeriodSeconds: 10\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More importantly"),", a readiness-gate named ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceUpdateReady")," must be  added into ",(0,i.kt)("inlineCode",{parentName:"p"},"template.spec.readinessGates"),"\nwhen using ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceOnly"),". The condition ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceUpdateReady")," in podStatus will be updated to False before in-place\nupdate and updated to True after the update is finished. This ensures that pod remain at NotReady state while the in-place\nupdate is happening."),(0,i.kt)("p",null,"An example for StatefulSet using in-place update:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nmetadata:\n  name: sample\nspec:\n  replicas: 3\n  serviceName: fake-service\n  selector:\n    matchLabels:\n      app: sample\n  template:\n    metadata:\n      labels:\n        app: sample\n    spec:\n      readinessGates:\n         # A new condition that ensures the pod remains at NotReady state while the in-place update is happening\n      - conditionType: InPlaceUpdateReady\n      containers:\n      - name: main\n        image: nginx:alpine\n  podManagementPolicy: Parallel # allow parallel updates, works together with maxUnavailable\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      # Do in-place update if possible, currently only image update is supported for in-place update\n      podUpdatePolicy: InPlaceIfPossible\n      # Allow parallel updates with max number of unavailable instances equals to 2\n      maxUnavailable: 2\n")),(0,i.kt)("h2",{id:"update-sequence"},"Update sequence"),(0,i.kt)("p",null,"Advanced StatefulSet adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate"),", which contains strategies for non-ordered update.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," is not nil, pods will be updated with non-ordered sequence. Noted that UnorderedUpdate can only be allowed to work with Parallel podManagementPolicy."),(0,i.kt)("p",null,"Currently ",(0,i.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," only contains one field: ",(0,i.kt)("inlineCode",{parentName:"p"},"priorityStrategy"),"."),(0,i.kt)("h3",{id:"priority-strategy"},"Priority strategy"),(0,i.kt)("p",null,"This strategy defines rules for calculating the priority of updating pods.\nAll update candidates will be applied with the priority terms.\n",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," can be calculated either by weight or by order."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight"),": Priority is determined by the sum of weights for terms that match selector. For example,")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      unorderedUpdate:\n        priorityStrategy:\n          weightPriority:\n          - weight: 50\n            matchSelector:\n              matchLabels:\n                test-key: foo\n          - weight: 30\n            matchSelector:\n              matchLabels:\n                test-key: bar\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order"),': Priority will be determined by the value of the orderKey. The update candidates are sorted based on the "int" part of the value string. For example, 5 in string "5" and 10 in string "sts-10".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      unorderedUpdate:\n        priorityStrategy:\n          orderPriority:\n            - orderedKey: some-label-key\n")),(0,i.kt)("h2",{id:"paused-update"},"Paused update"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"paused")," indicates that Pods updating is paused, controller will not update Pods but just maintain the number of replicas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      paused: true\n")),(0,i.kt)("h2",{id:"pre-download-image-for-in-place-update"},"Pre-download image for in-place update"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,i.kt)("p",null,"If you have enabled the ",(0,i.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," feature-gate during ",(0,i.kt)("a",{parentName:"p",href:"../installation#optional-feature-gate"},"Kruise installation or upgrade"),",\nAdvanced StatefulSet controller will automatically pre-download the image you want to update to the nodes of all old Pods.\nIt is quite useful to accelerate the progress of applications upgrade."),(0,i.kt)("p",null,"The parallelism of each new image pre-downloading by Advanced StatefulSet is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", which means the image is downloaded on nodes one by one.\nYou can change the parallelism using the annotation on Advanced StatefulSet according to the capability of image registry,\nfor registries with more bandwidth and P2P image downloading ability, a larger parallelism can speed up the pre-download process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,i.kt)("p",null,"Note that to avoid most unnecessary image downloading, now controller will only pre-download images for Advanced StatefulSet with replicas > ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("h2",{id:"ordinals-reserveskip"},"Ordinals reserve(skip)"),(0,i.kt)("p",null,"Since Advanced StatefulSet ",(0,i.kt)("inlineCode",{parentName:"p"},"v1beta1")," (Kruise >= v0.7.0), it supports ordinals reserve."),(0,i.kt)("p",null,"By adding the ordinals to reserve into ",(0,i.kt)("inlineCode",{parentName:"p"},"reserveOrdinals")," fields, Advanced StatefulSet will skip to create Pods with those ordinals.\nIf these Pods have already existed, controller will delete them.\nNote that ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.replicas")," is the expectation number of running Pods and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.reserveOrdinals")," is the ordinals that should be skipped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 4\n  reserveOrdinals:\n  - 1\n")),(0,i.kt)("p",null,"For an Advanced StatefulSet with ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas=4, reserveOrdinals=[1]"),", the ordinals of running Pods will be ",(0,i.kt)("inlineCode",{parentName:"p"},"[0,2,3,4]"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to migrate Pod-3 and reserve this ordinal, just append ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"reserveOrdinals")," list.\nThen controller will delete Pod-3 and create Pod-5 (existing Pods will be ",(0,i.kt)("inlineCode",{parentName:"li"},"[0,2,4,5]"),")."),(0,i.kt)("li",{parentName:"ul"},"If you just want to delete Pod-3, you should append ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"reserveOrdinals")," list and set ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),".\nThen controller will delete Pod-3 (existing Pods will be ",(0,i.kt)("inlineCode",{parentName:"li"},"[0,2,4]"),").")),(0,i.kt)("h2",{id:"scaling-with-rate-limiting"},"Scaling with rate limiting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,i.kt)("p",null,"To avoid creating all failure pods at once when a new CloneSet applied, a ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," field for scale strategy has been added since Kruise ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.10.0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 100\n  scaleStrategy:\n    maxUnavailable: 10% # percentage or absolute number\n")),(0,i.kt)("p",null,"When this field has been set, Advanced StatefulSet will create pods with the guarantee that the number of unavailable pods during the update cannot exceed this value."),(0,i.kt)("p",null,"For example, the StatefulSet will firstly create 10 pods. After that, it will create one more pod only if one pod created has been running and ready."),(0,i.kt)("p",null,"Note that it can just be allowed to work with Parallel podManagementPolicy."))}c.isMDXComponent=!0}}]);