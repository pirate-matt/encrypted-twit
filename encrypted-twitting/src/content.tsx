import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  alert("PlasmoOverlay")
  return (
    <div className="twit-z-50 twit-flex twit-fixed twit-top-32 twit-right-8">
      <CountButton />
    </div>
  )
}

export default PlasmoOverlay
