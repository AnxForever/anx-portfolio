export const MECHANICAL_PROFILE = {
  name: "林维",
  role: "机械工程 / 2026",
  location: "上海，中国",
  bio: "机械设计方向。毕业设计做柔性夹爪，也在实验室做减速箱台架。SolidWorks 和 ANSYS 用得多，加工靠学校 CNC 和 3D 打印。",
  focus: ["CAD", "FEA", "制造", "机电一体化"],
}

export const MECHANICAL_PROJECTS = [
  {
    title: "柔性夹爪",
    kind: "毕业设计",
    summary:
      "PA12 打印的柔性铰链夹爪，替代原来的装配式方案。做了三轮 FEA，夹持力做到 12 N，零件从 17 个减到 5 个。",
    specs: ["PA12", "3-DOF", "FEA", "12 g"],
  },
  {
    title: "减速箱测试台",
    kind: "实验室",
    summary:
      "两级减速箱的台架。测扭矩、温升和背隙；第一次跑的时候联轴器没对中，振动数据全废了。",
    specs: ["2-stage", "5 N·m", "DAQ", "backlash"],
  },
  {
    title: "钣金机箱",
    kind: "产品",
    summary:
      "给实验室设备做的钣金机箱。展开图改了四版，折弯补偿按实际试折重新标定。",
    specs: ["SPCC", "DFM", "折弯", "IP54"],
  },
]
