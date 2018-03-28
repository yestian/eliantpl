mouseenter{
    itementerid//进入的id，同时在别的地方创建draghelper（此处的itemactive=0，不生成背景色和问号)
    itemactive=1//激活状态,=》在元素上生成的代码有背景和问号
}
mouseLeave{
    itementerid=0,itemactive=0
}
//-------------------------
addSubMark{
    clickEleId//点击的元素ID，根据ID显示解释
}
closeSubMark{
    clickEleId:0
}
//------------------------
dragstart{
    showAdds:0//关闭二级页面
    dragMode:1//开启drag状态
    dragId:id//dragMode同时激活状态下，根据ID在最右侧的第三栏显示ico和name
}
dragstop{
    dragmode=0,
    itemactive=0,//mouseleave失效，采用dragstop关闭此属性
}
dropover{
    //放置的时候
    右侧第三栏显示所有节点列表，节点的实时位置，和前一个节点的上下级关系
    if(可放置){
        父级节点的黄色边框(需要父级节点的width,height，left,top)
        父级节点名称
        右侧的实时位置
        dropstop:{}
    }else{
        //不可放置
        父级节点上方红色警告框
        右侧第三栏红色背景
        dropstop:{
            顶部弹窗提示失败
        }
    }
}

dropstop{
    dragMode:0//关闭最右侧的第三栏
    //返回第一栏，
    //如果drop成功{
        根据ID得到名称，图标，生成节点ID
        0.在iframe里面创建这个节点
        1.iframe里面显示选中drop的节点
        2.右侧第一栏显示选中的节点的详细信息
    }else{
        如果drop失败{
            原先有选中的节点，显示原先选中的节点
            原先没有选中节点，显示默认空白信息
        }
    }
}



节点：
属性：图标、中文名称、标签类型、类名、ID、可接收的类型、是否为空
右侧属性：布局、排版、背景、边框、阴影、扭曲、动画
定制属性、适配、
方法：删除、添加、移动、编辑、双击、右键
abstractNodeState: g,
contentEditorState: i,
siteDataState: j,
pageState: k,
collectionState: l,
ixState: m,
tabState: $,
styleBlockState: n,
swatchState: q,
canvasResizeState: r,
assetState: s,
canvasScrollState: t,
bindingContextState: I,
updateHoveredNode: ha,
updateSelectedNode: ia,
canvasBodyRendered: ja,
styleSheetRendered: ka,
notifySelectedNodeChange: ga,
focusSymbolNode: fa,
updateCanvasScrollPosition: ma,
updateCanvasScrollTop: na,
updateCanvasScrollSize: oa,
previewMode: S,
isReadOnly: T,
showEmpty: z,
contentEditorEnabled: db,
atomsIframeLoaded: v,
xray: A,
topBarHidden: w,
leftSidebarVisible: x,
symbolRoots: bb,
focusedSymbolIds: cb,
focusedSymbolInstanceId: E,
stopDragging: ra,
updateInitialDragInfo: ta,
onCanvasMouseMove: qa,
dragNodeId: aa,
anchorNodeId: da,
dropTargets: ca,
isDragging: ba,
alt: _,
timezone: J,
currentPageId: N,
editTargetNativeId: O,
editTargetInnerHtml: P,
editTargetNewNodeAbstractId: Q,
richTextFlux: R,
dispatch: f.dispatch,
apolloClient: K,
lastPublishedDomain: _a,
selectedNodeNativeId: F,
selectedNodeNativeIdPath: Va((0,
Na.getGuid)(F))(ab),
affectedNodeIds: Za,
uiActionCreators: f.getCreators(ua["default"]),
notificationActionCreators: f.getCreators(Aa["default"]),
showMiniSettings: Ua,
hideAllMiniSettings: Wa,
willStartTextEditingNode: xa,
didStartTextEditingNode: za,
stopTextEditingNode: Ba,
selectTextEditingNewNode: Da,
selectTab: Ia,
showEmbedEditor: Oa,
loadAtomsIframe: Xa,
pseudoMode: Ya,
mediaQuery: d,
isResizingImage: U,
isEphemeralChangeInProgress: W,
forceCanvasBodyRerender: Y,
isIndexed: Boolean(Z.lastSearchIndex),
classNameMap: (0,
