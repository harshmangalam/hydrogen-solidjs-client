import { Portal } from "solid-js/web";
import { createSignal, children as childrenHelper, Show } from "solid-js";

const POPUP_MARGIN = 8;
let wrapperRef = null;
let popupRef = null;

export default function Popup(props) {
  const [isMousedOver, setIsMousedOver] = createSignal(false);
  const [popupStyles, setPopupStyles] = createSignal({});
  const children = childrenHelper(() => props.children);

  /*
   * calculate popup element's position based on props.align
   *
   * popupRef is null when isMouseOver() is true, so we need a split
   * second for popupRef to be mounted before we can access it
   */
  function getPopupStyles() {
    const { left, top, right, bottom, height, width } = wrapperRef.getBoundingClientRect();
    const { height: popupHeight, width: popupWidth } = popupRef.getBoundingClientRect();

    const widthDiff = popupWidth - width;
    const heightDiff = popupHeight - height;

    let styles = {};

    switch (props.align) {
      case "top":
        styles.top = `${top - popupHeight - POPUP_MARGIN}px`;
        styles.left = `${left - widthDiff / 2}px`;
        break;
      case "left":
        styles.top = `${top - heightDiff / 2}px`;
        styles.left = `${left - popupWidth - POPUP_MARGIN}px`;
        break;
      default:
      case "bottom":
        styles.top = `${bottom + POPUP_MARGIN}px`;
        styles.left = `${left - widthDiff / 2}px`;
        break;
      case "right":
        styles.top = `${top - heightDiff / 2}px`;
        styles.left = `${right + POPUP_MARGIN}px`;
        break;
    }
    setPopupStyles(styles);
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => {
        setIsMousedOver(true);
        getPopupStyles();
      }}
      onMouseLeave={() => {
        setIsMousedOver(false);
      }}
    >
      {children()}
      <Show when={wrapperRef && isMousedOver()} fallback={null}>
        <Portal>
          <div ref={popupRef} className="fixed" style={popupStyles()}>
            {props.render}
          </div>
        </Portal>
      </Show>
    </div>
  );
}
