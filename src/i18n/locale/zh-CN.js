import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
  system: {
    title: '校园节能中控平台',
    reset: '{FIELD, select, title{重设密码} oldpwd{旧密码} newpwd{新密码} confirm{确认新密码} resetsuccess{重置成功，即将退出重新登录} fail{重置失败} other{}}',
    rules: '{FIELD, select, length{密码长度不能小于6位} erroldpwd{旧密码不正确} empty{密码不能为空} errconfirm{两次输入密码不一致} other{}}',
    resetpwd: '重置密码',
    logout: '退出登录',
    login: '登录',
    logintext: '{FIELD, select, account{账户} pwd{密码} erraccount{请输入正确的用户名} invalidMobile{手机号码有误} loginfail{登录失败，账号或密码错误} other{}}',
    route: '{FIELD, select, devicemgr{设备管理} scenemgr{场景管理} roommgr{房间管理} usrmgr{用户管理} logmgr{日记管理} other{}}'
  },
  message: {
    refresh: '刷新',
    edit: '编辑',
    create: '添加',
    delete: '刪除',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    fail: '失败',
    rename: '重命名',
    success: '成功',
    exception: '服务异常',
    tips: '确认提示',
    exports: '导出',
    upload: '上传配置图',
    uploading: '图片上传中...',
    uploadFail: '图片上传失败，请重新上传',
    search: '查询',
    power: '电源',
    bind: '绑定',
    unbind: '解绑',
    binddev: '绑定设备',
    unbinddev: '解绑设备',
    switchControl: '开关总闸',
    prev: '上一屏',
    next: '下一屏',
    building: '栋',
    floor: '层',
    room: '房',
    none: '无',
    action: '操作',
    actionFail: '操作失败',
    actionSuccess: '操作成功',
    placeholder: '请{TYPE, select, input{输入} choose{选择} other{输入}}{PLACEHOLDER, select, build{楼栋} floor{楼层} room{房间} deviceName{设备名称} deviceType{设备类型} other{}}',
    rules: '{RULE, select, build{楼栋} floor{楼层} room{房间} user{用户名} phone{手机号} pwd{密码} role{角色} roleName{角色名称} deviceName{设备名称} other{}} 不能为空',
    status: '{STATUS, select, open{打开} close{关闭} online{在线} offline{离线} on{开} off{关} noDev{无设备} other{}}',
    switchStatus: '{SWITCH, select, label{开关} open{打开} close{关闭} on{开} off{关} noDev{无设备} other{}}',
    image: '{IMAGE, select, pixel{请上传规格为1080x720的图片} type{图片格式仅支持jpg/jpeg/png} other{}}',
    device: '{DEVICE_TEXT, select, temperature{温度} humidifier{湿度} switch{开关} humitemp{温湿度} Infrared{红外转发} other{}}'
  },
  smart: {
    roommodule: '房间管理',
    map: {
      title: '地图',
      message: '{MESSAGE, select, delRoom{删除房间} setLocation{位置设置中...} setLocSuccess{设置成功} roomExist{该房间已存在} delLocAction{确认删除节点？} delLoc{位置删除中...} other{}}'
    },
    room: {
      title: '房间',
      device: '房间设备',
      label: '{LABEL, select, build{楼栋} floor{楼层} room{房间} other{}}名称',
      dialogTitle: '{TITLE, select, device{房间设备列表} scene{房间场景列表} edit{房间编辑} create{创建房间} other{提示框}}',
      message: '{MESSAGE, select, fail{房间获取失败} err{服务出错} switchConfirm{所有房间开关} loading{教室开关...} switchFail{开关操作失败} rmRoomConfirm{确认删除房间？} fetchRoomDev{获取房间设备} binding{设备绑定中...} unbinding{设备解绑中...} unbindConfirm{确认解绑设备？} other{}}',
      tableField: '{FIELD, select, option{选项} obxSerial{obox序列号} serial{设备序列号} name{设备名称} status{设备状态} type{设备类型} subtype{子设备类型} version{设备版本} action{操作} other{}}',
    },
    building: {
      title: '楼栋',
      dialogTitle: '{TITLE, select, edit{编辑楼栋} create{创建楼栋} other{提示框}}',
      message: '{MESSAGE, select, switchConfirm{楼栋开关} switchGlobConfirm{所有楼栋开关} loading{教室开关...} switchFail{开关操作失败} rmRoomConfirm{确认删除楼栋？} other{}}',
    },
    floor: {
      title: '楼层',
      dialogTitle: '{TITLE, select, edit{编辑楼层} create{创建楼层} other{提示框}}',
      message: '{MESSAGE, select, switchConfirm{楼层开关} switchGlobConfirm{所有楼层开关} loading{教室开关...} switchFail{开关操作失败} rmRoomConfirm{确认删除楼层？} other{}}',
    },
    devicemodule: '设备管理',
    obox: {
      title: 'OBOX设备',
      search: '{FIELD, select, serial{设备序列号} devices{所有网关设备} type{设备类型} name{设备名称} other{}}',
      tableField: '{FIELD, select, temperature{溫度} humidifier{湿度} date{时间} serial{设备序列号} name{设备名称} status{设备状态} type{设备类型} subtype{子设备类型} version{设备版本} action{操作} other{}}',
      slide: '{FIELD, select, panel{三键开关控制面板} humidifier{温湿度} other{}}',
      placeholder: '{FIELD, select, lamp{开关} humidifier{温湿度} other{}}',
      message: '{MESSAGE, select, powerswitch{电源开关已} direct{操作指令发送成功} fetchFail{设备获取失败} loading{设备删除中...} delConfirm{确认删除设备？} delDevice{设备删除} setSuccess{设置成功} setFail{设置失败} history{历史数据} nowadays{今日数据} other{}}',
      ac: '{FIELD, select, temperature{温度} humidifier{湿度} auto{自动} speed{风速} fans{风扇} weak{弱风} medium{中风} strong{强风} cold{制冷} hot{制热} dehum{抽湿} supply{送风} mode{模式} switch{开关} type{设备类型} subtype{子设备类型} version{设备版本} action{操作} other{无数据}}'
    },
    wifi: {
      title: 'WIFI设备',
      search: '{FIELD, select, serial{设备序列号} status{所有状态} type{设备类型} name{设备名称} other{}}',
      tableField: '{FIELD, select, serial{设备序列号} name{设备名称} status{设备状态} type{设备类型} action{操作} other{}}',
      slide: '{FIELD, select, panel{三键开关控制面板} humidifier{温湿度} other{}}',
      placeholder: '{FIELD, select, infrated{红外控制} other{}}',
    },
    gateway: {
      title: '网关管理',
      search: '{FIELD, select, serial{序列号} status{全部状态} name{名称} other{}}',
      tableField: '{FIELD, select, serial{序列号} name{名称} status{状态} version{版本} action{操作} other{}}',
      message: '{MESSAGE, select, fetchFail{网关设备获取失败} loading{网关设备删除中...} delConfirm{确认删除网关？} delDevice{网关删除} other{}}',
    },
    scenemodule: '场景管理',
    scene: {
      search: '{FIELD, select, build{全部楼栋} floor{全部楼层} room{全部房间} name{场景名称} other{}}',
      action: '{FIELD, select, create{创建场景} excute{执行场景} edit{编辑场景} delete{刪除} other{}}',
      tableField: '{FIELD, select, name{场景名称} build{楼栋} floor{楼层} room{房间} status{场景状态} action{操作} other{}}',
      message: '{MESSAGE, select, fetchFail{场景获取失败} loading{场景删除中...} delConfirm{确认删除场景？} delDevice{场景删除} update{场景状态更新} excute{场景执行} excuting{场景执行中...} other{}}',
      create: '{FIELD, select, inputNameTip{输入场景名称(英文字母数字_组合)} empty{场景名称不能为空} invalid{名称应满足长度为6的英文字母数字_组合} deviceCon{设备条件} cons1{条件1} cons2{条件2} cons3{条件3} behavior{设备行为} actionTips{行为执行时间(单位秒)} devAction{配置设备动作} setDevAct{设备行为配置} conType{条件类型} conTip{一组最多三个条件} other{}}',
      condition: '{FIELD, select, timing{定时} timeCon{定时条件} date{日期} selDate{选择日期} selTime{选择时间} week{星期} chain{联动} chainCon{联动条件} selConTip{请正确选择条件} other{}}',
    },
    usermodule: '用户管理',
    account: {
      title: '账户管理',
      search: '{FIELD, select, name{输入用户名} phone{输入手机号码} other{}}',
      form: '{FIELD, select, name{输入用户名} phone{输入手机号码} pwd{输入密码} role{请选择角色} mobile{手机号} roleName{角色} other{}}',
      action: '{FIELD, select, create{添加账户} edit{编辑账户} other{}}',
      tableField: '{FIELD, select, name{用户名} phone{手机号码} pwd{密码} action{操作} other{}}',
      message: '{MESSAGE, select, fetchFail{用户获取失败} loading{账户删除中...} delConfirm{确认删除账户？} delDevice{账户删除} other{}}',
    },
    role: {
      title: '角色管理',
      search: '{FIELD, select, name{输入角色名} status{全部状态} other{}}',
      form: '{FIELD, select, label{角色名称} name{请输入角色名称} auth{角色权限} other{}}',
      action: '{FIELD, select, create{创建角色} edit{编辑角色} enable{启动} disable{停用} other{}}',
      tableField: '{FIELD, select, serial{序号} name{角色名} status{状态} action{操作} other{}}',
      message: '{MESSAGE, select, fetchFail{角色获取失败} loading{角色删除中...} statusUpdate{状态更新成功} delConfirm{确认删除角色？} delDevice{角色刪除} other{}}',
    },
    logmodule: '日记管理',
    logrecords: {
      title: '日记记录',
      search: '{FIELD, select, operator{执行人} description{输入描述内容} type{日记类型} device{设备管理} scene{场景管理} user{用户管理} other{}}',
      tableField: '{FIELD, select, serial{序号} type{类型} action{操作行为} datetime{操作时间} operator{执行人} other{}}',
      message: '{MESSAGE, select, fetchFail{日记获取失败} other{}}',
    },
    exportrecords: {
      title: '导出日记',
      search: '{FIELD, select, start{开始日期} end{结束日期} week{最近一周} month{最近一个月} months{最近三个月} other{}}',
      tableField: '{FIELD, select, serial{序号} name{文件名} daterange{日期区间} datetime{操作时间} operator{执行人} other{}}',
    }
  },
  ...zhLocale
}
