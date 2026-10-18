import { StretchArt } from "./art"
import { Plate } from "./kit/react/draw"

import "./kit/iso.css"
import "./stretch.css"

export function TestRigFigure() {
  return (
    <Plate
      fig="Fig 1"
      title="测试台"
      readout="120.0 × 32.0 · lean 0.0 px"
      keys={[
        { mark: "raised", label: "被按住时的玻璃" },
        { mark: "dotted", label: "静止时的位置" },
        { mark: "edge", label: "从按压处到探针的拉力" },
      ]}
      caption="两根导轨上的滑座、四组弹簧、探针和读数表。机构语言可以替换成夹爪、减速箱或夹具。"
    >
      <StretchArt />
    </Plate>
  )
}
