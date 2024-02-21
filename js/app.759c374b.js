(function(){var e={8580:function(e,t,o){"use strict";o.r(t),t["default"]=o.p+"assets/YH_Resume.pdf"},222:function(e,t,o){"use strict";var n=o(9242),i=o(3396);function s(e,t,o,n,s,l){const r=(0,i.up)("NavBar"),a=(0,i.up)("router-view"),c=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r),(0,i.Wm)(a,{class:"gradient-bg py-4"}),(0,i.Wm)(c,{class:"sticky bottom-0 z-40"})])}var l=o(7139),r=o.p+"img/YH_Picture.e8932a66.jpg";const a={class:"sticky top-0 z-50"},c={class:"bg-gray-800"},d={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},u={class:"relative flex h-16 items-center justify-between"},m={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},f=(0,i._)("svg",{class:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),g=[f],p={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},h=(0,i._)("img",{class:"h-10 w-10 rounded-full object-cover",src:r,alt:"My Picture"},null,-1),v=[h],b={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"},x={class:"hidden sm:ml-6 sm:block ml-auto"},w={class:"flex space-x-4"},y={class:"sm:hidden"},_={class:"space-y-1 px-2 pb-3 pt-2"};function k(e,t,o,s,r,f){const h=(0,i.up)("router-link"),k=(0,i.up)("ProfilePicture");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("nav",c,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("button",{type:"button",class:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[0]||(t[0]=(...e)=>f.toggleMobileMenu&&f.toggleMobileMenu(...e))},g)]),(0,i._)("div",p,[(0,i._)("a",{onClick:t[1]||(t[1]=(...e)=>f.openProfilePicture&&f.openProfilePicture(...e))},v)]),(0,i._)("div",b,[(0,i._)("div",x,[(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.routes,((e,t)=>((0,i.wg)(),(0,i.j4)(h,{key:t,to:e.path,class:(0,l.C_)(f.buttonStyle(e.path)),"aria-current":f.isCurrentRoute(e.path)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.label),1)])),_:2},1032,["to","class","aria-current"])))),128))])])])])]),(0,i.wy)((0,i._)("div",y,[(0,i._)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.routes,((e,t)=>((0,i.wg)(),(0,i.j4)(h,{key:t,to:e.path,class:(0,l.C_)(f.buttonStyle(e.path)),"aria-current":f.isCurrentRoute(e.path)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.label),1)])),_:2},1032,["to","class","aria-current"])))),128))])],512),[[n.F8,r.isMobileMenuOpen]])]),(0,i.Wm)(k,{isOpen:r.isProfilePictureOpen,onClose:f.closeProfilePicture},null,8,["isOpen","onClose"])])}const P=e=>((0,i.dD)("data-v-9659e042"),e=e(),(0,i.Cn)(),e),C=P((()=>(0,i._)("img",{src:r,alt:"Large Image",class:"picture-image"},null,-1)));function S(e,t,o,s,l,r){const a=(0,i.up)("XIconSolid");return o.isOpen?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"picture-overlay",onClick:t[2]||(t[2]=(...e)=>r.closePicture&&r.closePicture(...e))},[(0,i._)("div",{class:"picture-container",onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>r.closePicture&&r.closePicture(...e)),class:"picture-close-button"},[(0,i.Wm)(a,{class:"w-6 h-5"})]),C])])):(0,i.kq)("",!0)}var j=o(6674),I={name:"ProfilePicture",components:{XIconSolid:j.Z},props:{isOpen:Boolean},methods:{closePicture(){this.$emit("close")}}},D=o(89);const z=(0,D.Z)(I,[["render",S],["__scopeId","data-v-9659e042"]]);var M=z,T={name:"NavBar",components:{ProfilePicture:M},data(){return{isProfilePictureOpen:!1,isMobileMenuOpen:!1,routes:[{path:"/",label:"Home"},{path:"/about",label:"About Me"},{path:"/projects",label:"Projects"},{path:"/contact",label:"Contact Me"}]}},methods:{openProfilePicture(){this.isProfilePictureOpen=!0},closeProfilePicture(){this.isProfilePictureOpen=!1},toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},isCurrentRoute(e){return this.$route.path===e?"page":null},buttonStyle(e){return this.$route.path===e?"bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium":"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"}}};const O=(0,D.Z)(T,[["render",k]]);var A=O;const E={class:"bg-gray-800 text-white p-4"},L={class:"flex justify-center"},H=["href"],U=["d"],W={class:"sr-only"},N=(0,i._)("div",{class:"container mx-auto text-center mt-2"},[(0,i._)("p",null,"© 2024 Alvin Lim. All rights reserved.")],-1);function F(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("footer",E,[(0,i._)("div",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.socialMedia,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"w-8 ml-2 text-gray-500"},[(0,i._)("a",{href:e.link,target:"_blank",class:"hover:text-gray-700"},[((0,i.wg)(),(0,i.iD)("svg",{class:"h-7 w-7",fill:"currentColor",style:(0,l.j5)({color:e.color}),viewBox:"0 0 24 24"},[(0,i._)("path",{d:e.icon},null,8,U)],4)),(0,i._)("span",W,(0,l.zw)(e.name),1)],8,H)])))),128))]),N])}var Z={name:"PageFooter",data(){return{socialMedia:[{name:"GitHub",link:"https://github.com/AlvinLim1010",color:"#808080",icon:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{name:"LinkedIn",link:"https://www.linkedin.com/in/yi-hong-lim-895892220/",color:"#0077b5",icon:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}]}}};const R=(0,D.Z)(Z,[["render",F]]);var V=R,B={components:{NavBar:A,Footer:V}};const Y=(0,D.Z)(B,[["render",s],["__scopeId","data-v-a1278744"]]);var q=Y,K=o(2483);const $=e=>((0,i.dD)("data-v-c91b6d9e"),e=e(),(0,i.Cn)(),e),G={class:"flex-row sm:flex-row"},J={class:"flex flex-col sm:flex-row"},Q={class:"w-full sm:w-3/5 p-10 mt-10"},X={class:"p-4 flex flex-col items-center justify-center"},ee=$((()=>(0,i._)("div",{class:"gradient-text"}," Hello, I'm Alvin ",-1))),te={class:"mt-5 text-3xl font-bold tracking-wide"},oe=$((()=>(0,i._)("div",{class:"text-gray-900 inline"}," I am into ",-1))),ne={class:"text-red-400 inline"},ie={ref:"typewriter"},se={class:"flex flex-col sm:flex-row mt-10 h-1/6 items-center justify-center"},le={class:"flex items-center justify-center"},re=$((()=>(0,i._)("span",null,"Download CV",-1))),ae=$((()=>(0,i._)("div",{class:"w-full sm:w-3/5 text-sm text-gray-700 sm:ml-5 ml-2"}," Please browse through the website to learn more about me using the Navigation Bar. ",-1))),ce=$((()=>(0,i._)("div",{class:"w-full sm:w-2/5 p-10",style:{height:"calc(100vh - 380px)"}},null,-1))),de={class:"flex sm:flex-row"};function ue(e,t,o,s,l,r){const a=(0,i.up)("DownloadIconSolid"),c=(0,i.up)("AwardsInfo");return(0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("div",J,[(0,i._)("div",Q,[(0,i._)("div",X,[ee,(0,i._)("div",te,[oe,(0,i._)("div",ne,[(0,i._)("span",ie,null,512)])])]),(0,i._)("div",se,[(0,i._)("button",{type:"submit",class:"w-1/2 h-full md:w-1/4 rounded-full border border-4 border-indigo-600 bg-transparent sm:text-sm text-xl font-semibold text-indigo-600 button-border-hover hover:border-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>r.downloadResume&&r.downloadResume(...e)),["prevent"]))},[(0,i._)("span",le,[re,(0,i.Wm)(a,{class:"w-6 h-5"})])]),ae])]),ce]),(0,i._)("div",de,[(0,i.Wm)(c)])])}var me=o(6523),fe=o(2738);const ge={class:"flex flex-col sm:flex-row rounded shadow-2xl w-full p-12 mx-20 mb-2 border border-gray-600 border-2"},pe={class:"text-5xl mb-3 font-bold"},he={class:"text-sm text-gray-200 font-semibold"};function ve(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",ge,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.awardInfo,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"sm:w-1/4 text-center"},[(0,i._)("p",pe,(0,l.zw)(e.result),1),(0,i._)("span",he,(0,l.zw)(e.title),1)])))),128))])}var be={name:"AwardInfo",data(){return{awardInfo:[{title:"EXPERIENCES (YRS)",result:"0.5"},{title:"AWARDS",result:"2"},{title:"PROJECTS",result:"10+"},{title:"USERS",result:"~10"}]}}};const xe=(0,D.Z)(be,[["render",ve]]);var we=xe,ye={name:"HomePage",components:{DownloadIconSolid:fe.Z,AwardsInfo:we},mounted(){this.initTyped()},beforeUnmount(){this.destroyTyped()},data(){return{jobRoles:["Software Engineering!","AI Development!","Full-Stack Development!","Machine Learning Engineering!"]}},methods:{initTyped(){const e={strings:this.jobRoles,typeSpeed:50,backSpeed:30,backDelay:1e3,loop:!0};new me.Z(this.$refs.typewriter,e)},destroyTyped(){this.typed&&this.typed.destroy()},downloadResume(){const e=o(8580);console.log(e);const t=document.createElement("a");t.href=e.default,t.download="downloaded_resume.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};const _e=(0,D.Z)(ye,[["render",ue],["__scopeId","data-v-c91b6d9e"]]);var ke=_e;const Pe=(0,i._)("div",{class:"text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"}," About Me ",-1),Ce={class:"flex flex-col sm:flex-row"},Se={class:"w-full sm:w-3/5 sm:ml-8"},je=(0,i._)("div",{class:"w-full sm:w-2/5 p-10"},null,-1),Ie=(0,i._)("div",{class:"text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"}," Work & Voluntary Timeline ",-1),De=(0,i._)("div",{class:"text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"}," Testimonials ",-1);function ze(e,t,o,n,s,l){const r=(0,i.up)("AboutMe"),a=(0,i.up)("Timeline"),c=(0,i.up)("Testimonials");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[Pe,(0,i._)("div",Ce,[(0,i._)("div",Se,[(0,i.Wm)(r)]),je])]),(0,i._)("div",null,[Ie,(0,i.Wm)(a)]),(0,i._)("div",null,[De,(0,i.Wm)(c)])])}const Me={class:"min-h-screen"},Te={class:"min-h-screen flex justify-center"},Oe={class:"w-2/3 mx-auto"},Ae={class:"w-0 hidden px-2 py-10 left-card-transition sm:w-2/5 sm:block"},Ee={key:0,class:"flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"},Le={class:"text-gray-800 flex justify-between text-xl font-bold"},He={class:"text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black"},Ue={class:"text-gray-500"},We={class:"w-1/5 flex justify-center"},Ne={class:"relative flex h-full w-1 bg-green-300 items-center justify-center"},Fe={class:"absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin"},Ze={class:"w-0 hidden px-2 py-10 right-card-transition sm:w-2/5 sm:block"},Re={key:0,class:"flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"},Ve={class:"text-gray-800 flex justify-between text-xl font-bold"},Be={class:"text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black"},Ye={class:"text-gray-500"},qe={class:"w-4/5 px-4 py-10 right-card-transition sm:hidden"},Ke={class:"flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"},$e={class:"text-gray-800 flex justify-between text-xl font-bold"},Ge={class:"text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black"},Je={class:"text-gray-500"};function Qe(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",Me,[(0,i._)("div",Te,[(0,i._)("div",Oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.timelineInfo,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"flex flex-row w-full"},[(0,i._)("div",Ae,[t%2===0?((0,i.wg)(),(0,i.iD)("div",Ee,[(0,i._)("div",Le,(0,l.zw)(e.role),1),(0,i._)("div",He,(0,l.zw)(e.place),1),(0,i._)("div",Ue,(0,l.zw)(e.text),1)])):(0,i.kq)("",!0)]),(0,i._)("div",We,[(0,i._)("div",Ne,[(0,i._)("div",Fe,[(0,i._)("div",null,(0,l.zw)(e.date),1)])])]),(0,i._)("div",Ze,[t%2!==0?((0,i.wg)(),(0,i.iD)("div",Re,[(0,i._)("div",Ve,(0,l.zw)(e.role),1),(0,i._)("div",Be,(0,l.zw)(e.place),1),(0,i._)("div",Ye,(0,l.zw)(e.text),1)])):(0,i.kq)("",!0)]),(0,i._)("div",qe,[(0,i._)("div",Ke,[(0,i._)("div",$e,(0,l.zw)(e.role),1),(0,i._)("div",Ge,(0,l.zw)(e.place),1),(0,i._)("div",Je,(0,l.zw)(e.text),1)])])])))),128))])])])}var Xe={name:"ExperienceTimeline",mounted(){const e=new IntersectionObserver(this.handleIntersection,{threshold:.15,rootMargin:"-170px 0px -170px 0px"}),t=new IntersectionObserver(this.handleIntersection,{threshold:.15,rootMargin:"-170px 0px -170px 0px"});document.querySelectorAll(".left-card-transition").forEach((t=>{e.observe(t)})),document.querySelectorAll(".right-card-transition").forEach((e=>{t.observe(e)}))},data(){return{timelineInfo:[{date:"Sept 2023 - Present",role:"Software Engineer",place:"Pingspace",text:"Working on backend using Flask-RESTX and OAuth2 authentication. Developed OAuth2-based login, chat box \n          feature, and visualizations for real-time insights into robotic fleet movements for the UI. Contributes \n          to the team by implementing intelligent job assignment, optimizing task allocation while ensuring the \n          robots does not collide for enhanced robotic efficiency."},{date:"March 2022",role:"Shopee Code League (Competitions)",place:"Remote Online",text:"Teamed up with two others for a high-intensity coding challenge in the Shopee Code League, showcasing \n          our problem-solving skills and reinforcing my passion for using technology to address real-world challenges."},{date:"Sept 2021",role:"AI Hackathon (Competitions)",place:"Remote Online",text:"Participated a distinctive AI Hackathon, centered on Multiple Choice Questions (MCQs), with a team of four. \n          The event offered a valuable opportunity to test and enhance our theoretical understanding of AI, reinforcing \n          my dedication to continuous learning in this dynamic field."},{date:"Sept 2020 - Jun 2021",role:"Vice President (Archery Club)",place:"University of Nottingham Malaysia",text:"Led and organized events, fostering a thriving community for archery enthusiasts. Played a key role in skill \n          development programs, contributing to the overall success of the club. This experience sharpened my leadership \n          and organizational skills, reinforcing my commitment to fostering inclusive communities united by shared passions."},{date:"Feb 2017 - April 2019",role:"House Captain",place:"Crescendo HELP International School",text:"Led and organized events, fostering unity and a positive atmosphere within our house. Strengthened my leadership \n          through a focus on collaboration and teamwork. Played a crucial role in coordinating diverse initiatives, \n          contributing significantly to our house's success and leaving a positive impact on the wider school community."}]}},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting?(e.target.classList.add("is-visible"),e.target.classList.remove("is-leaving")):(e.target.classList.remove("is-visible"),e.target.classList.add("is-leaving"))}))}}};const et=(0,D.Z)(Xe,[["render",Qe],["__scopeId","data-v-4943eb16"]]);var tt=et;const ot={class:"relative w-1/2 mx-auto overflow-hidden"},nt={class:"flex flex-col w-full rounded-lg shadow bg-white px-10 py-5"},it={class:"mt-4 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6"},st={class:"lg:col-span-1 ml-5"},lt={key:0,class:"text-gray-800 flex justify-between text-xl font-bold"},rt={key:1,class:"relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full"},at=(0,i._)("svg",{class:"absolute w-12 h-12 text-gray-400 -left-1",fill:"currentColor",viewBox:"0 0 20 20"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})],-1),ct=[at],dt={class:"lg:col-span-5"},ut={class:"text-gray-800 flex justify-between text-xl font-bold"},mt={class:"text-gray-600 flex justify-between text-sm font-semibold"},ft={class:"text-gray-600 flex justify-between text-sm font-semibold mt-2"},gt={key:0},pt=(0,i._)("div",{class:"flex flex-col w-full rounded-lg shadow bg-white px-10 py-5"},[(0,i._)("div",{class:"mt-4 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6"},[(0,i._)("div",{class:"text-gray-600 flex justify-between text-sm font-semibold mt-2"}," No Testimonials ")])],-1),ht=[pt],vt={class:"flex justify-center mt-3"},bt=["onClick"],xt=(0,i._)("span",{class:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-400"},[(0,i._)("svg",{class:"w-3 h-3 text-white",fill:"none",viewBox:"0 0 6 10"},[(0,i._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 1 1 5l4 4"})]),(0,i._)("span",{class:"sr-only"},"Previous")],-1),wt=[xt],yt=(0,i._)("span",{class:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-400"},[(0,i._)("svg",{class:"w-3 h-3 text-white",fill:"none",viewBox:"0 0 6 10"},[(0,i._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})]),(0,i._)("span",{class:"sr-only"},"Next")],-1),_t=[yt];function kt(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",ot,[(0,i._)("div",{class:"flex transition-transform duration-500 ease-in-out",style:(0,l.j5)({transform:`translateX(-${100*s.currentIndex}%)`})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.testimonials,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"flex-none w-full border border-solid border-gray-300 rounded-lg overflow-hidden shadow-md"},[(0,i._)("div",nt,[(0,i._)("div",it,[(0,i._)("div",st,[e.image?((0,i.wg)(),(0,i.iD)("div",lt,(0,l.zw)(e.image),1)):((0,i.wg)(),(0,i.iD)("div",rt,ct))]),(0,i._)("div",dt,[(0,i._)("div",ut,(0,l.zw)(e.author),1),(0,i._)("div",mt,(0,l.zw)(e.place),1)])]),(0,i._)("div",ft,(0,l.zw)(e.text),1)])])))),128)),0===s.testimonials.length?((0,i.wg)(),(0,i.iD)("div",gt,ht)):(0,i.kq)("",!0)],4),(0,i._)("div",vt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.testimonials,((e,t)=>((0,i.wg)(),(0,i.iD)("span",{key:t,class:(0,l.C_)({"w-4 h-4 mx-1 bg-gray-300 rounded-full cursor-pointer":!0,"bg-gray-700":t===s.currentIndex}),onClick:e=>r.goToSlide(t)},null,10,bt)))),128))]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>r.prevSlide&&r.prevSlide(...e)),class:"absolute top-1/4 left-1"},wt),(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>r.nextSlide&&r.nextSlide(...e)),class:"absolute top-1/4 right-1"},_t)])}var Pt={name:"TestimonialCarousel",data(){return{currentIndex:0,testimonials:[]}},methods:{nextSlide(){this.currentIndex=(this.currentIndex+1)%this.testimonials.length},prevSlide(){this.currentIndex=(this.currentIndex-1+this.testimonials.length)%this.testimonials.length},goToSlide(e){this.currentIndex=e}}};const Ct=(0,D.Z)(Pt,[["render",kt]]);var St=Ct;const jt={class:"p-2"},It={class:"mb-6"},Dt={class:"text-lg"},zt=(0,i._)("h2",{class:"text-2xl font-bold mb-1"},"Skills & Technologies",-1),Mt=(0,i._)("p",{class:"text-md mb-4"}," Here are a few technologies I've been working with recently: ",-1),Tt={class:"flex flex-col sm:flex-row"},Ot={class:"flex flex-col sm:flex-row"},At={class:"flex flex-col sm:flex-row"},Et=(0,i._)("h2",{class:"text-2xl font-bold mb-1 mt-2"},"Education",-1),Lt={class:"text-md mb-2"},Ht=(0,i._)("h2",{class:"text-2xl font-bold mb-1"},"Certifications",-1),Ut={class:"text-md mb-2"},Wt=(0,i._)("h2",{class:"text-2xl font-bold mb-1"},"Passions and Interests",-1),Nt=(0,i._)("p",{class:"text-md mb-6"}," Outside of coding, I prioritize staying active through regular exercise, which not only keeps me physically fit but also serves as a powerful stress reliever. Playing the piano is another passion that offers a delightful escape and enhances my focus and creativity. As a dedicated Formula One enthusiast, I eagerly follow the excitement of each race, marveling at the precision and strategy involved. These varied interests, from exercise and piano to Formula One, not only shape my personality outside programming but also infuse a unique vibrancy into my professional life. ",-1),Ft=(0,i._)("p",{class:"text-lg mb-10"}," Thank you for visiting my portfolio, and I look forward to the opportunity to contribute my skills and passion to the team or project. Let's embark on the journey of building something remarkable together! As a continuous learner, I am committed to ongoing self-improvement, staying abreast of emerging technologies, and refining my skills to meet the evolving demands of the software engineering landscape. ",-1);function Zt(e,t,o,n,s,r){const a=(0,i.up)("SkillSection");return(0,i.wg)(),(0,i.iD)("div",jt,[(0,i._)("div",It,[(0,i._)("p",Dt," Hello, I'm "+(0,l.zw)(s.overall.name)+", but you can call me "+(0,l.zw)(s.overall.callName)+". I am a dedicated "+(0,l.zw)(s.overall.role)+" motivated to create innovative and excellent solutions in the ever-evolving world of technology. Currently serving as a "+(0,l.zw)(s.overall.currentRole)+" in "+(0,l.zw)(s.overall.workPlace)+", I bring "+(0,l.zw)(s.overall.experience)+" years of hands-on experience and a passion for crafting impactful solutions through programming. ",1)]),zt,Mt,(0,i._)("div",Tt,[(0,i.Wm)(a,{sectionTitle:"Programming Languages",skills:s.skills.programmingLanguages},null,8,["skills"]),(0,i.Wm)(a,{sectionTitle:"Web Development",skills:s.skills.webDevelopment},null,8,["skills"])]),(0,i._)("div",Ot,[(0,i.Wm)(a,{sectionTitle:"Database Systems",skills:s.skills.databaseSystems},null,8,["skills"]),(0,i.Wm)(a,{sectionTitle:"Dev Ops",skills:s.skills.devOps},null,8,["skills"])]),(0,i._)("div",At,[(0,i.Wm)(a,{sectionTitle:"Version Control",skills:s.skills.versionControl},null,8,["skills"])]),Et,(0,i._)("p",Lt," I successfully earned my "+(0,l.zw)(s.education.degree)+" in "+(0,l.zw)(s.education.field)+" from the "+(0,l.zw)(s.education.where)+". This foundational education has been instrumental in shaping my extensive career in software engineering. Equipped with a solid understanding of computer science principles and artificial intelligence, I continuously apply these skills to contribute effectively to various projects and technological advancements. ",1),Ht,(0,i._)("p",Ut," I am honoured to have been awarded the prestigious "+(0,l.zw)(s.certifications.award)+" from the "+(0,l.zw)(s.certifications.where)+", an honor bestowed upon the top 2% of the cohort. This recognition not only reflects my academic dedication but also underscores my commitment to achieving excellence in every aspect of my professional journey. ",1),Wt,Nt,Ft])}const Rt={class:"w-full sm:w-2/4"},Vt={class:"text-lg font-bold mb-1"},Bt={class:"border-b-2 border-black"},Yt={class:"list-disc pl-4 mb-2"};function qt(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",Rt,[(0,i._)("h3",Vt,[(0,i._)("span",Bt,(0,l.zw)(o.sectionTitle),1)]),(0,i._)("ul",Yt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.skills,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:"text-md"},(0,l.zw)(e),1)))),128))])])}var Kt={props:{sectionTitle:String,skills:Array}};const $t=(0,D.Z)(Kt,[["render",qt]]);var Gt=$t,Jt={name:"AboutMe",components:{SkillSection:Gt},data(){return{overall:{name:"Lim Yi Hong",callName:"(Alvin)",workPlace:"Pingspace",role:"Software Engineer",currentRole:"Software Engineer",field:"Software Engineering",experience:.5},education:{degree:"Bachelor's degree",field:"Computer Science with a specialization in Artificial Intelligence",where:"University of Nottingham"},certifications:{award:"Dean's Excellence Scholarship",where:"University of Nottingham Malaysia"},skills:{programmingLanguages:["Python","JavaScript","Java","C"],webDevelopment:["Vue (JavaScript library for building user interfaces)","Tailwind CSS (Utility-first CSS framework)","Vuetify (Material Design component framework)","Flask (Python web framework)"],databaseSystems:["PostgreSQL","MongoDB","MySQL","Redis"],devOps:["Docker"],versionControl:["Git","GitHub","GitLab"]}}}};const Qt=(0,D.Z)(Jt,[["render",Zt]]);var Xt=Qt,eo={name:"AboutPage",components:{AboutMe:Xt,Timeline:tt,Testimonials:St}};const to=(0,D.Z)(eo,[["render",ze]]);var oo=to;const no=(0,i._)("div",{class:"text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-12"}," Personal Projects ",-1),io={class:"flex flex-wrap"};function so(e,t,o,n,s,r){const a=(0,i.up)("ProjectCards");return(0,i.wg)(),(0,i.iD)("div",null,[no,(0,i._)("div",io,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.personalProjects,((e,t)=>((0,i.wg)(),(0,i.j4)(a,{key:t,class:(0,l.C_)({"w-full":!0,"sm:w-[calc(50%-3rem)]":!0,"md:w-[calc(33.33333%-2rem)]":t%3===0,"md:w-[calc(33.33333%-3rem)]":t%3===1||t%3===2,"mb-12":!0}),image:e.image,title:e.title,text:e.text,code:e.code,video:e.video},null,8,["class","image","title","text","code","video"])))),128))])])}const lo={class:"mx-4 sm:ml-8 sm:mx-0"},ro={class:"flex justify-between"};function ao(e,t,o,n,s,l){const r=(0,i.up)("CardSlideUp"),a=(0,i.up)("VideoPopUp");return(0,i.wg)(),(0,i.iD)("div",lo,[(0,i.Wm)(r,{imagePath:o.image,title:o.title,text:o.text},null,8,["imagePath","title","text"]),(0,i._)("div",ro,[(0,i._)("button",{class:"bg-gray text-black bg-gray-500 font-bold rounded-lg h-12 w-32 ml-6 mt-5",onClick:t[0]||(t[0]=(...e)=>l.goToCode&&l.goToCode(...e))}," Go To Code "),(0,i._)("button",{class:"bg-gray text-black bg-gray-500 font-bold rounded-lg h-12 w-32 mr-6 mt-5",onClick:t[1]||(t[1]=(...e)=>l.videoDemo&&l.videoDemo(...e))}," Video Demo "),(0,i.Wm)(a,{title:o.title,"is-open":s.showPopup,videoSrc:o.video,onClose:l.videoDemo},null,8,["title","is-open","videoSrc","onClose"])])])}const co={class:"relative group h-96 overflow-hidden bg-black"},uo=["src"],mo=(0,i._)("div",{class:"absolute h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"},null,-1),fo={class:"absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0"},go={class:"absolute w-full flex place-content-center"},po={class:"capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10"},ho={class:"absolute w-full flex place-content-center mt-20"},vo={class:"font-sans text-center w-4/5 text-white mt-5"};function bo(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",co,[(0,i._)("img",{class:"object-cover w-full h-full transform duration-700 backdrop-opacity-100",src:r.getImagePath(o.imagePath)},null,8,uo),mo,(0,i._)("div",fo,[(0,i._)("div",go,[(0,i._)("p",po,(0,l.zw)(o.title),1)]),(0,i._)("div",ho,[(0,i._)("p",vo,(0,l.zw)(o.text),1)])])])])}var xo={name:"CardSlideUp",props:{imagePath:String,title:String,text:String},methods:{getImagePath(e){return o(262)(`./${e}.png`)}}};const wo=(0,D.Z)(xo,[["render",bo]]);var yo=wo;const _o={class:"bg-white rounded-lg w-3/4 h-3/5 p-8"},ko={class:"flex justify-between items-center mb-10"},Po={class:"text-center"},Co=["src"],So={key:1,class:"text-2xl text-gray-600"},jo=(0,i._)("div",{class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"},[(0,i._)("div",null,"Video Unavailable!"),(0,i._)("div",null,"Please Contact Me for more Information")],-1),Io=[jo];function Do(e,t,o,s,r,a){return o.isOpen?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50",onClick:t[1]||(t[1]=(...e)=>a.closePopup&&a.closePopup(...e))},[(0,i._)("div",_o,[(0,i._)("div",ko,[(0,i._)("h2",null,(0,l.zw)(o.title)+" Demo Video",1),(0,i._)("span",{class:"cursor-pointer text-2xl",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>a.closePopup&&a.closePopup(...e)),["stop"]))},"×")]),(0,i._)("div",Po,[o.videoSrc?((0,i.wg)(),(0,i.iD)("video",{key:0,controls:"",autoplay:"",src:o.videoSrc,class:"w-full max-w-96"},null,8,Co)):((0,i.wg)(),(0,i.iD)("div",So,Io))])])])):(0,i.kq)("",!0)}var zo={props:{title:{type:String,required:!0},isOpen:{type:Boolean,required:!0},videoSrc:{type:String,required:!0}},methods:{closePopup(){this.$emit("close")}}};const Mo=(0,D.Z)(zo,[["render",Do]]);var To=Mo,Oo={name:"ProjectCards",props:{image:String,title:String,text:String,code:String,video:String},components:{CardSlideUp:yo,VideoPopUp:To},data(){return{showPopup:!1}},methods:{goToCode(){window.open(this.code,"_blank")},videoDemo(){this.showPopup=!this.showPopup}}};const Ao=(0,D.Z)(Oo,[["render",ao]]);var Eo=Ao,Lo={name:"ProjectsPage",components:{ProjectCards:Eo},data(){return{personalProjects:[{title:"Portfolio Website",text:"Personal portfolio website developed with Vue.js and Tailwind CSS to showcase skills, projects, \n          and  resume. Implemented a modern and responsive design for optimal user experience.",code:"https://github.com/AlvinLim1010/portfolio",video:"",image:"portfolio"},{title:"Finance Recording",text:"Comprehensive  Financial Bookkeeping system developed with Python for backend and Vue.js for frontend design. \n          The backend, uses FastAPI to create multiple API routes ensuring efficient communication and PostgreSQL as database.. \n          The frontend interface consists of five key pages offering users a user-friendly and visually intuitive UI.",code:"https://github.com/AlvinLim1010/Bookkeeping-frontend",video:"",image:"bookkeeping"},{title:"Simple Calculator",text:"A versatile calculator GUI has been developed with 'Single Operator' and 'Multiple Operator' \n          modes, complemented by a history box to display user-entered expressions.",code:"https://github.com/AlvinLim1010/CalculatorProject",video:"",image:"calculator"}]}}};const Ho=(0,D.Z)(Lo,[["render",so]]);var Uo=Ho;const Wo={class:"flex flex-col sm:flex-row"},No={class:"w-full sm:w-3/5 p-10"},Fo={class:"w-full sm:w-2/5 p-10"},Zo=(0,i._)("div",{class:"p-4 mb-4",style:{height:"calc(70vh - 205px)"}},null,-1),Ro={class:"p-4",style:{height:"20vh"}};function Vo(e,t,o,n,s,l){const r=(0,i.up)("ContactForm"),a=(0,i.up)("ContactInfo");return(0,i.wg)(),(0,i.iD)("div",Wo,[(0,i._)("div",No,[(0,i.Wm)(r)]),(0,i._)("div",Fo,[Zo,(0,i._)("div",Ro,[(0,i.Wm)(a)])])])}const Bo={class:"tracking-wide text-gray-900"},Yo=(0,i._)("div",{class:"text-xl font-bold inline"},"Email: ",-1),qo={class:"text-m font-semibold inline"},Ko=["href"],$o=(0,i._)("div",{class:"text-xl font-bold inline"},"Phone(MY): ",-1),Go={class:"text-md font-semibold inline"};function Jo(e,t,o,n,s,r){const a=(0,i.up)("MailIcon"),c=(0,i.up)("PhoneIcon");return(0,i.wg)(),(0,i.iD)("div",Bo,[(0,i._)("div",null,[(0,i.Wm)(a,{class:"w-16 inline"}),Yo,(0,i._)("div",qo,[(0,i._)("a",{href:r.emailLink,class:"text-indigo-600 hover:underline focus:underline focus:outline-indigo-600"},(0,l.zw)(s.myEmail),9,Ko)])]),(0,i._)("div",null,[(0,i.Wm)(c,{class:"w-16 inline"}),$o,(0,i._)("div",Go,(0,l.zw)(s.myPhone),1)])])}var Qo=o(9018),Xo=o(1344),en={name:"ContactInfo",components:{MailIcon:Qo.Z,PhoneIcon:Xo.Z},computed:{emailLink(){return`mailto:${this.myEmail}`}},data(){return{myEmail:"hong3842@gmail.com",myPhone:"+6011-1090 0031"}}};const tn=(0,D.Z)(en,[["render",Jo]]);var on=tn;const nn=e=>((0,i.dD)("data-v-bb1cc264"),e=e(),(0,i.Cn)(),e),sn={class:"bg-white p-4 rounded shadow-md"},ln={class:"border-b border-gray-900/10 pb-6"},rn=nn((()=>(0,i._)("h2",{class:"text-2xl font-bold leading-7 text-gray-900"}," GET IN TOUCH! ",-1))),an=nn((()=>(0,i._)("p",{class:"mt-2 text-sm text-gray-600"}," Connect with me for job opportunities, collaborations, or any inquiries. I look forward to hearing from you! ",-1))),cn={class:"mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},dn={class:"sm:col-span-3"},un=nn((()=>(0,i._)("label",{for:"first-name",class:"text-sm font-medium leading-6 text-gray-900"},"First name",-1))),mn={class:"mt-2"},fn={class:"sm:col-span-3"},gn=nn((()=>(0,i._)("label",{for:"last-name",class:"block text-sm font-medium leading-6 text-gray-900"},"Last name",-1))),pn={class:"mt-2"},hn={class:"sm:col-span-full"},vn=nn((()=>(0,i._)("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email address",-1))),bn={class:"mt-2"},xn={class:"col-span-full"},wn=nn((()=>(0,i._)("label",{for:"message",class:"block text-sm font-medium leading-4 text-gray-900"},"Message",-1))),yn={class:"mt-2"},_n={class:"flex justify-between items-center gap-x-5 mt-3"},kn=nn((()=>(0,i._)("div",{class:"border border-1 border-black rounded-md"},[(0,i._)("div",{class:"bg-gray-400 rounded-md px-4 py-1"},[(0,i._)("div",{class:"text-xs md:text-base text-gray-900 font-semibold"},"The Contact Form is currently disabled. I apologize for any inconvenience.")])],-1))),Pn={class:"flex gap-x-5"},Cn=nn((()=>(0,i._)("button",{type:"submit",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Send ",-1)));function Sn(e,t,o,s,l,r){return(0,i.wg)(),(0,i.iD)("div",sn,[(0,i._)("form",null,[(0,i._)("div",null,[(0,i._)("div",ln,[rn,an,(0,i._)("div",cn,[(0,i._)("div",dn,[un,(0,i._)("div",mn,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.firstName=e),type:"text",id:"first-name",name:"first-name",autocomplete:"given-name",class:"w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"},null,512),[[n.nr,l.firstName]])])]),(0,i._)("div",fn,[gn,(0,i._)("div",pn,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.lastName=e),type:"text",id:"last-name",name:"last-name",autocomplete:"family-name",class:"w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"},null,512),[[n.nr,l.lastName]])])]),(0,i._)("div",hn,[vn,(0,i._)("div",bn,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e),id:"email",type:"email",name:"email",autocomplete:"email",class:"w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"},null,512),[[n.nr,l.email]])])]),(0,i._)("div",xn,[wn,(0,i._)("div",yn,[(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.message=e),placeholder:"Type your message here",id:"message",name:"message",rows:"4",class:"w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"},null,512),[[n.nr,l.message]])])])])])]),(0,i._)("div",_n,[kn,(0,i._)("div",Pn,[(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>r.cancelForm&&r.cancelForm(...e)),type:"button",class:"text-sm font-semibold leading-6 text-gray-900"}," Cancel "),Cn])])])])}var jn={data(){return{firstName:"",lastName:"",email:"",message:""}},methods:{submitForm(){console.log("Form submitted:",this.firstName,this.lastName,this.email,this.message)},cancelForm(){this.firstName="",this.lastName="",this.email="",this.message=""}}};const In=(0,D.Z)(jn,[["render",Sn],["__scopeId","data-v-bb1cc264"]]);var Dn=In,zn={name:"ContactPage",components:{ContactInfo:on,ContactForm:Dn}};const Mn=(0,D.Z)(zn,[["render",Vo]]);var Tn=Mn;const On={class:"grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",style:{height:"calc(81vh - 6px)"}},An={class:"text-center"},En=(0,i._)("h1",{class:"mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," Page not found ",-1),Ln=(0,i._)("p",{class:"mt-6 text-base leading-7 text-gray-600"}," Sorry, we couldn’t find the page you’re looking for. ",-1),Hn={class:"mt-10 flex items-center justify-center gap-x-6"},Un={"aria-hidden":"true"};function Wn(e,t,o,n,s,r){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("main",On,[(0,i._)("div",An,[En,Ln,(0,i._)("div",Hn,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.routes,((e,t)=>((0,i.wg)(),(0,i.j4)(a,{key:t,to:e.path,class:(0,l.C_)(e.class)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)("/"===e.path?"":` ${e.label}`)+" ",1),(0,i._)("span",Un,(0,l.zw)("/"===e.path?"←":"→"),1),(0,i.Uk)(" "+(0,l.zw)("/"===e.path?`${e.label} `:""),1)])),_:2},1032,["to","class"])))),128))])])])}var Nn={name:"Error404Page",data(){return{routes:[{path:"/",label:"Go back home",class:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{path:"/contact",label:"Contact support",class:"text-sm font-semibold text-gray-900"}]}}};const Fn=(0,D.Z)(Nn,[["render",Wn]]);var Zn=Fn;const Rn=[{path:"/",name:"Home",component:ke},{path:"/about",name:"About",component:oo},{path:"/projects",name:"Project",component:Uo},{path:"/contact",name:"Contact",component:Tn},{path:"/error404",name:"Error",component:Zn}],Vn=(0,K.p7)({history:(0,K.r5)(),routes:Rn});var Bn=Vn,Yn=o(65),qn=(0,Yn.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});Bn.beforeEach(((e,t,o)=>{const n=Bn.options.routes.some((t=>t.path===e.path));n?"/home"===e.path?o("/"):o():o("/error404")})),document.title="Alvin's Portfolio",(0,n.ri)(q).use(qn).use(Bn).mount("#app")},262:function(e,t,o){var n={"./bookkeeping.png":7830,"./calculator.png":1428,"./portfolio.png":3818};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=262},7830:function(e,t,o){"use strict";e.exports=o.p+"img/bookkeeping.a79d0915.png"},1428:function(e,t,o){"use strict";e.exports=o.p+"img/calculator.1b045e82.png"},3818:function(e,t,o){"use strict";e.exports=o.p+"img/portfolio.c989cc09.png"}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,s){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],s=e[d][2];for(var r=!0,a=0;a<n.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,i,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/portfolio/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,l=n[0],r=n[1],a=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(a)var d=a(o)}for(t&&t(n);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(222)}));n=o.O(n)})();
//# sourceMappingURL=app.759c374b.js.map