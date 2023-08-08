import React, { useEffect, useState } from "react";
import { Layout, Skeleton, Menu } from "antd";
import Icon, { LeftOutlined } from "@ant-design/icons";
import Garfish from "garfish";
import { Link, useLocation, matchRoutes } from "react-router-dom"
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import useGlobalStore from "@store/global";
import styles from "./Sider.less";

export const Sider = () => {

  const {
    navCode,
    microActiveApps,
    siderRoutes
  } = useGlobalStore()
  const [menuItems, setMenuItems] = useState<any>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const [siderOpenKeys, setSiderOpenKeys] = useState<any>([]);
  const [activeApp, setActiveApp] = useState({
    routes: [],
    name: "",
  });
  const location = useLocation();

  useEffect(() => {
    const completeResult = renderCompleteMenuItems(activeApp?.routes, activeApp?.name)
    const result = renderMenuItems(activeApp?.routes, activeApp?.name)

    setMenuItems(result)

    const fullPath = "/" + location.pathname.split(`/${activeApp?.name}/`).join("")
    const newRoutes = matchRoutes(completeResult, fullPath)
    if (newRoutes && newRoutes.length > 0) {
      const keyList: any[] = []
      newRoutes.forEach(item => {
        keyList.push(item.route.key)
      })
      setSiderOpenKeys([...keyList])
      setSelectedKeys([...keyList])
    }

  }, [location, activeApp])

  const renderCompleteMenuItems = (router: any, parentKey: any) => {
    const res: any[] = []
    if (!!!Array.isArray(router) || router.length === 0) return res
    router.forEach(item => {
      const obj = { ...item }
      obj["url"] = parentKey + "/" + item.path
      if (item && item.children && item.children.length > 0) {
        const child = renderCompleteMenuItems(item.children, obj["url"])
        if (child.length > 0) {
          obj.children = child
        } else {
          delete obj["children"]
        }
      }

      const keyName = `${item.id}_${item.path}_${item.name}|${obj["url"]}`
      obj["key"] = keyName
      obj["label"] = item.name
      if (item.icon) {
        const IconElement = (props: any) => <Icon component={item.icon} {...props} />
        obj["icon"] = <IconElement />
      }
      res.push(obj)
    })

    return res
  }

  /**
   * 根据路由表生成 menu所需的ItemList
   * @param {[]} router 
   * @returns menuItems
   */
  const renderMenuItems = (router: any[], parentKey: string) => {
    const res: any[] = []
    if (!!!Array.isArray(router) || router.length === 0) return res
    router.forEach(item => {
      const obj = { ...item }
      // 判断用户是否拥有该路由的权限
      if (!navCode.find(o => o === item.id)) {
        return []
      }
      if (item.hideInMenu === true) {
        return []
      }
      obj["url"] = parentKey + "/" + item.path
      if (item && item.children && item.children.length > 0) {
        const child = renderMenuItems(item.children, obj["url"])
        if (child.length > 0) {
          obj.children = child
        } else {
          delete obj["children"]
        }
      }

      const keyName = `${item.id}_${item.path}_${item.name}|${obj["url"]}`
      obj["key"] = keyName
      obj["label"] = <Link to={`/${obj["url"]}`} style={{ color: "inherit" }}>{item.name}</Link>
      if (item.icon) {
        const IconElement = (props: JSX.IntrinsicAttributes & Pick<IconComponentProps, "data" | "name" | "id" | "children" | "key" | "label" | "href" | "download" | "hrefLang" | "media" | "target" | "type" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "nonce" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "cite" | "form" | "span" | "summary" | "pattern" | "width" | "max" | "required" | "default" | "high" | "low" | "height" | "start" | "open" | "rotate" | "value" | "acceptCharset" | "action" | "method" | "noValidate" | "ariaLabel" | "async" | "disabled" | "multiple" | "size" | "manifest" | "wrap" | "accept" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "defer" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "min" | "minLength" | "muted" | "optimum" | "viewBox" | "playsInline" | "poster" | "preload" | "readOnly" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "step" | "useMap" | "wmode" | "spin" | "component"> & React.RefAttributes<HTMLSpanElement>) => <Icon component={item.icon} {...props} />
        obj["icon"] = <IconElement />
      }
      res.push(obj)
    })

    return res
  }

  useEffect(() => {
    setActiveApp(siderRoutes)
  }, [siderRoutes])

  /**
   * 控制侧边栏是否折叠
   */
  const controlSiderStatus = () => {
    setCollapsed(e => !!!e)
  }

  /**
   * 侧边栏被选中的时调用
   * @param param0 
   */
  const handleSelectSiderItem = ({ keyPath }) => {
    setSelectedKeys(keyPath)
  }

  /**
   * 处理侧边栏 展开/关闭的回调函数
   * @param openKeys 
   */
  const handleSiderOnOpenChange = (openKeys) => {
    setSiderOpenKeys(openKeys)
  }

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      style={{
        boxShadow: "0 4px 8px rgb(32 45 64 / 5%), 0 1px 4px rgb(32 45 64 / 8%)",
      }}
    >
      <Skeleton
        active
        title={false}
        loading={microActiveApps.find(o => o.loading)}
        className={"p-2"}
        paragraph={{
          rows: 18,
          width: "100%"
        }}
      >
        <div className="flex flex-column min-h-[calc(100vh_-_50px)] ">
          <div className="flex-1 flex flex-col bg-white relative">
            <Menu
              mode="inline"
              theme={"light"}
              selectedKeys={selectedKeys}
              openKeys={siderOpenKeys}
              items={microActiveApps.find(o => o.loading) ? [] : menuItems}
              onSelect={handleSelectSiderItem}
              onOpenChange={handleSiderOnOpenChange}
              className={`py-4 ${styles["siderMenu"]}`}
            />
            <div
              style={{ boxShadow: "0 4px 8px rgb(32 45 64 / 5%), 0 1px 4px rgb(32 45 64 / 8%)" }}
              className="flex absolute top-[10px] right-[-12px] items-center justify-center w-6 h-6 z-10 rounded-2xl cursor-pointer bg-white"
              onClick={controlSiderStatus}
            >
              <LeftOutlined rotate={collapsed ? 180 : 0} style={{ color: "#1677ff", fontSize: 12 }} />
            </div>
          </div>
        </div>
      </Skeleton>
    </Layout.Sider >
  )
}