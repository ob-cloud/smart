/*
 * @Author: eamiear
 * @Date: 2019-08-07 16:43:10
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-08-15 17:33:49
 */

import {request} from '@/common/request'

const RoomAPI = {
  getRoomList (params) {
    const page = params.pageNo
    const pageSize = params.pageSize
    delete params.pageNo
    delete params.pageSize
    return request.get('/consumer/common', {
      CMD: 'query_location',
      start: page,
      count: pageSize,
      ...params
    })
  },
  getRoomDeviceList (params) {
    return request.postForm('/consumer/common', {
      CMD: 'query_device_location',
      start: params.pageNo,
      count: params.pageSize,
      location: params.room
    })
  },
  getRoomSceneList (params) {
    return request.postForm('/consumer/common', {
      CMD: 'query_scene_location',
      start: params.pageNo,
      count: params.pageSize,
      location: params.room
    })
  },
  createRoom (params) {
    return request.postForm('/consumer/common', {
      CMD: 'create_location',
      action: '01',
      building: params.room,
      room: params.room,
      layer: params.layer
    })
  },
  editRoom (params) {

  },
  deleteRoom (params) {
    return request.get('/consumer/common', {
      CMD: 'create_location',
      action: '00',
      location: params.location,
      building: params.room,
      room: params.room,
      layer: params.layer
    })
  },
  // 添加设备到房间
  setRoomDevice (params) {
    return request.postForm('/consumer/common', {
      CMD: 'set_device_location',
      device_type: params.device_type,
      serialId: params.serialId,
      location: params.location,
      x_axis: 0,
      y_axis: 0
    })
  },
  removeRoomDevice (params) {
    return request.postForm('/consumer/common', {
      CMD: 'delete_device_location',
      device_type: params.device_type,
      serialId: params.serialId,
      location: params.location
    })
  },
  // 绑定场景到房间
  setRoomScene (params) {
    return request.postForm('/consumer/common', {
      CMD: 'set_scene_location',
      action: '01',
      scene_number: params.scene_number,
      location: params.location
    })
  },
  // 删除房间场景
  removeRoomScene (location, sceneNumber) {
    return request.postForm('/consumer/common', {
      CMD: 'delete_scene_location',
      location,
      scene_number: sceneNumber
    })
  }
}
export default RoomAPI
