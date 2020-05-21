// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const util = require('util')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    let urlTpl = 'https://shenxianpeng.github.io/api/site.json'
    request(util.format(urlTpl), function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let result = JSON.parse(body)
          resolve(result)
        } else {
          reject()
        }
      })
  })
}