/**
 * Returns the pixel density for a given zoom level
 * @param {number} zoom
 */
export const getPixelDensityForZoom = zoom => Math.exp(zoom)

/**
 *
 * @param {[number, number]} camPos Current camera position
 * @param {number} camZoom Current camera zoom level
 * @param {[number, number]} mousePos X and Y coordinate of the mouse (usually event.clientX and event.clientY)
 * @param {[number, number]} canvasSize width and height of the canvas
 */
export const getCanvasPosition = (camPos, camZoom, mousePos, canvasSize) => {
  const [camX, camY] = camPos
  const [clientX, clientY] = mousePos
  const [width, height] = canvasSize
  const [dx, dy] = [clientX - width / 2, clientY - height / 2]
  const pd = getPixelDensityForZoom(-camZoom)
  return [camX + dx * pd, -camY - dy * pd]
}

/**
 * Returns a Bounding Box based on a collection of cards
 */
export const getModelBoundingBox = cards => {
  const minX = cards.reduce(
    (acc, card) => Math.min(acc, card.position[0]),
    Infinity,
  )
  const maxX = cards.reduce(
    (acc, card) => Math.max(acc, card.position[0] + card.width),
    -Infinity,
  )
  const minY = cards.reduce(
    (acc, card) => Math.min(acc, card.position[1]),
    Infinity,
  )
  const maxY = cards.reduce(
    (acc, card) => Math.max(acc, card.position[1] + card.height),
    -Infinity,
  )
  return { minX, maxX, minY, maxY }
}

/**
 * Sets the global cursor type
 * @param {string} [cursor]
 */
export const setCursor = cursor => {
  if (cursor) {
    document.documentElement.style.cursor = cursor
  } else {
    document.documentElement.style.cursor = null
  }
}

const pToGrid = p => Math.round(p / 50) * 50
export const positionToGrid = pos => [pToGrid(pos[0]), pToGrid(pos[1]), pos[2]]

const getCubicBezier = (a1, a2, a3, a4) => t =>
  (1 - t) ** 3 * a1 +
  3 * (1 - t) ** 2 * t * a2 +
  3 * (1 - t) * t ** 2 * a3 +
  t ** 3 * a4

export const get2dCubicBezier = (p1, p2, p3, p4) => t => [
  getCubicBezier(p1[0], p2[0], p3[0], p4[0])(t),
  getCubicBezier(p1[1], p2[1], p3[1], p4[1])(t),
]
