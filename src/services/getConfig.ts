export async function getConfig() {
  try {
    const res = await fetch(`./config.json`)
    const configData = await res.json()

    return configData
  } catch (e) {
    throw new Error(`fetchError- ${e}`)
  }
}
