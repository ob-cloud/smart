# Smart功能模块

## 系统搭建

## 登录

1. 登录
2. 登出

## 用户管理

1. 修改密码

## 设备管理

1. 设备列表
2. 设备查询

# 场景管理

1. 场景列表
2. 场景状态切换
3. 场景查询[接口查询条件需调整]
4. 场景执行[接口待商量]
5. 场景删除[接口有异议]

## 房间管理

1. 房间列表
2. 查询条件
   -> 接口查询条件需调整

3. 查询房间设备列表


4. 查询房间场景列表
   -> 接口传参异常

5. [x] 绑定场景
6. [x] 执行场景
7. [x] 删除场景

8. 创建房间
   -> 对外公开接口，action应为0或1
   -> 缺少“层”字段
   -> 创建接口参数异常，serialId?

9. 编辑更新房间
   -> 接口<无?>

10. 删除房间
   -> 接口异常

## OBOX管理

1. obox列表
2. obox查询
   -> 接口查询条件字段缺失

3. obox 升级接口<无>


## 其他一些问题

1. 接口响应体状态码不统一
2. 接口响应体数据字段不统一
3. 接口不区分get/post/...，目前貌似均为get