/*
 * @Author: eamiear
 * @Date: 2019-02-06 18:37:25
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-11-26 11:24:14
 */

import {
  SET_TOKEN,
  SET_UID,
  SET_INTRODUCTION,
  SET_NAME,
  SET_AVATAR,
  SET_USER_INFO,
  SET_PWD
} from '../mutation-types'
// import UserAPI from '@/api/user'
import SystemAPI from '@/api/system'
import Storage, {cacher} from '@/common/cache'
import md5 from 'md5'

const user = {
  state: {
    user: '',
    token: Storage.getToken(),
    name: cacher.setStrategy('sessionStorage').get('name'),
    avatar: '',
    introduction: '',
    userInfo: null,
    pwd: cacher.setStrategy('sessionStorage').get('pk')
  },
  mutations: {
    [SET_TOKEN] (state, token) {
      state.token = token
    },
    [SET_UID] (state, uid) {
      state.uid = uid
    },
    [SET_INTRODUCTION] (state, introduction) {
      state.introduction = introduction
    },
    [SET_NAME] (state, name) {
      state.name = name
    },
    [SET_AVATAR] (state, avatar) {
      state.avatar = avatar
    },
    [SET_USER_INFO] (state, userInfo) {
      state.userInfo = userInfo
    },
    [SET_PWD] (state, pwd) {
      state.pwd = pwd
    }
  },
  actions: {
    loginByAccount ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        const password = md5(btoa(userInfo.password) + userInfo.password)
        SystemAPI.login(userInfo.account.trim(), password).then(data => {
          if (data) {
            const token = data.access_token
            Storage.setToken(token)
            cacher.setStrategy('sessionStorage').set('pk', password)
            cacher.setStrategy('sessionStorage').set('name', userInfo.account.trim())
            commit('SET_TOKEN', token)
            commit('SET_NAME', userInfo.account.trim())
            commit('SET_USER_INFO', data)
            commit('SET_PWD', password)
          }
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getPrivilege () {
      SystemAPI.getUserPrivilege().then(res => {
        // console.log('privilege ', res)
      })
    },

    // 登出
    logOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        SystemAPI.logout(state.token).then(res => {
          if (res.message.includes('success')) {
            commit('SET_TOKEN', '')
            commit('SET_USER_INFO', null)
            commit('SET_NAME', '')
            commit('SET_PWD', '')
            cacher.remove('permission')
            Storage.removeToken()
            cacher.setStrategy('sessionStorage').remove('pk')
            cacher.setStrategy('sessionStorage').remove('name')
            resolve()
          } else {
            reject(res.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    renewToken ({ commit }, accessToken) {
      return new Promise(resolve => {
        SystemAPI.reNewAcessToken(accessToken).then(({ data }) => {
          const result = data
          const renewRes = result.data
          if (result.code === 0) {
            const token = renewRes.accessToken
            Storage.setToken(token)
            commit('SET_TOKEN', token)
          }
          resolve()
        })
      })
    }
  }
}

export default user
