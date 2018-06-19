/**
 * 将 object 转换为 style 样式（http://mpvue.com/mpvue/#class-style）
 * @param obj
 */
export function toStyle (obj) {
  let objStr = JSON.stringify(obj)
  objStr = objStr.slice(1, objStr.length - 1).replace(/"/g, '')
  return objStr.replace(/,/g, ';')
}
