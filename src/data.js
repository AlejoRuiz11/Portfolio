/** ============================================================
 *  Single source of truth lives in ./data.jsx
 *  (vite.config.js resolves .jsx before .js, so data.jsx is
 *  what the app actually imports). This file just re-exports
 *  it so the two can never drift out of sync.
 * ============================================================ */
export * from './data.jsx'
