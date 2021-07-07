/**
 * msec ミリ秒後に解決する Promise を返す。
 * msec が負の値の場合 Promise は直ちに解決する。
 * @param {number} msec
 * @return {Promise<undefined>} promise
 */
export function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, msec)));
}
