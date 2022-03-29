(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{DDsH:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t("8o2o"),l=(t("q1tI"),t("7ljp")),o=t("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link (in package dir)\nnpm link [<@scope>/]<pkg>[@<version>]\n\nalias: npm ln\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This is handy for installing your own stuff, so that you can work on it and\ntest iteratively without having to continually rebuild."),Object(l.b)("p",null,"Package linking is a two-step process."),Object(l.b)("p",null,"First, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," in a package folder will create a symlink in the global\nfolder ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/<package>")," that links to the package\nwhere the ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," command was executed. It will also link any bins in\nthe package to ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/bin/{name}"),".  Note that ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," uses the global\nprefix (see ",Object(l.b)("inlineCode",{parentName:"p"},"npm prefix -g")," for its value)."),Object(l.b)("p",null,"Next, in some other location, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link package-name")," will create a\nsymbolic link from globally-installed ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," to ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/")," of\nthe current folder."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," is taken from ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("em",{parentName:"p"},"not")," from the\ndirectory name."),Object(l.b)("p",null,"The package name can be optionally prefixed with a scope. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v7/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),".  The scope must be preceded by an @-symbol and\nfollowed by a slash."),Object(l.b)("p",null,"When creating tarballs for ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish"),', the linked packages are\n"snapshotted" to their current state by resolving the symbolic links, if\nthey are included in ',Object(l.b)("inlineCode",{parentName:"p"},"bundleDependencies"),"."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/projects/node-redis    # go into the package directory\nnpm link                    # creates global link\ncd ~/projects/node-bloggy   # go into some other package directory.\nnpm link redis              # link-install the package\n")),Object(l.b)("p",null,"Now, any changes to ",Object(l.b)("inlineCode",{parentName:"p"},"~/projects/node-redis")," will be reflected in\n",Object(l.b)("inlineCode",{parentName:"p"},"~/projects/node-bloggy/node_modules/node-redis/"),". Note that the link\nshould be to the package name, not the directory name for that package."),Object(l.b)("p",null,"You may also shortcut the two steps in one.  For example, to do the\nabove use-case in a shorter way:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/projects/node-bloggy  # go into the dir of your main project\nnpm link ../node-redis     # link the dir of your dependency\n")),Object(l.b)("p",null,"The second line is the equivalent of doing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"(cd ../node-redis; npm link)\nnpm link redis\n")),Object(l.b)("p",null,"That is, it first creates a global link, and then links the global\ninstallation target into your project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(l.b)("p",null,"Note that in this case, you are referring to the directory name,\n",Object(l.b)("inlineCode",{parentName:"p"},"node-redis"),", rather than the package name ",Object(l.b)("inlineCode",{parentName:"p"},"redis"),"."),Object(l.b)("p",null,"If your linked package is scoped (see ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),") your\nlink command must include that scope, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link @myorg/privatepackage\n")),Object(l.b)("h3",null,"Caveat"),Object(l.b)("p",null,"Note that package dependencies linked in this way are ",Object(l.b)("em",{parentName:"p"},"not")," saved to\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," by default, on the assumption that the intention is to have\na link stand in for a regular non-link dependency.  Otherwise, for example,\nif you depend on ",Object(l.b)("inlineCode",{parentName:"p"},"redis@^3.0.1"),", and ran ",Object(l.b)("inlineCode",{parentName:"p"},"npm link redis"),", it would replace\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"^3.0.1")," dependency with ",Object(l.b)("inlineCode",{parentName:"p"},"file:../path/to/node-redis"),", which you\nprobably don't want!  Additionally, other users or developers on your\nproject would run into issues if they do not have their folders set up\nexactly the same as yours."),Object(l.b)("p",null,"If you are adding a ",Object(l.b)("em",{parentName:"p"},"new")," dependency as a link, you should add it to the\nrelevant metadata by running ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <dep> --package-lock-only"),"."),Object(l.b)("p",null,"If you ",Object(l.b)("em",{parentName:"p"},"want")," to save the ",Object(l.b)("inlineCode",{parentName:"p"},"file:")," reference in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"npm link <dep> --save")," to do so."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/developers"},"npm developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),o=t("aOgs"),i=t("q1tI"),r=t.n(i),c=t("7ljp"),p=t("pD55"),m=t("8Aig"),s=t("ReZb"),b=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},g=t("gnlW"),f=t("mwnC"),y=t("/Rw0"),j=t("dVM4"),O=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var n=e.items,t=e.depth;return r.a.createElement(O,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:t+1}):null)})))}k.defaultProps={depth:0};var N=k,v=t("MfeC");function C(e){var n=v.a.getPath(e.location.pathname),t=v.a.getVariantAndPage(e.root,n);if(!t)return null;var a=v.a.getVariantsForPage(e.root,t.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},o)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,i=t.frontmatter,O=i.title,k=i.description,C=i.status,T=i.source,W=i.additionalContributors,z=void 0===W?[]:W,A=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:O,description:k}),r.a.createElement(m.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},O),k))),null!=A?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),t.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:t.tableOfContents.items})):null,r.a.createElement(D,null,C||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(j.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(y.a,{href:T}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(d.a,{editUrl:t.editUrl,contributors:t.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-link-md-ee57f906e513d1ae011c.js.map