import crypto from "node:crypto"

const authSecret = process.env["AUTH_SECRET"]?.trim() || crypto.randomBytes(32).toString("hex")

export function base64UrlEncode(input: string | Buffer) {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input
  return buf.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "")
}

export function base64UrlDecodeToString(input: string) {
  const padded = input.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((input.length + 3) % 4)
  return Buffer.from(padded, "base64").toString("utf8")
}

export function signToken(payload: Record<string, unknown>) {
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  const body = base64UrlEncode(JSON.stringify(payload))
  const data = `${header}.${body}`
  const signature = crypto.createHmac("sha256", authSecret).update(data).digest()
  return `${data}.${base64UrlEncode(signature)}`
}

export function verifyToken(token: string) {
  const parts = token.split(".")
  if (parts.length !== 3) return null
  const [header, body, signature] = parts
  if (!header || !body || !signature) return null
  const data = `${header}.${body}`
  const expected = crypto.createHmac("sha256", authSecret).update(data).digest()
  const provided = Buffer.from(signature.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((signature.length + 3) % 4), "base64")
  if (provided.length !== expected.length) return null
  if (!crypto.timingSafeEqual(provided, expected)) return null

  try {
    const payload = JSON.parse(base64UrlDecodeToString(body)) as Record<string, unknown>
    const exp = typeof payload["exp"] === "number" ? payload["exp"] : null
    if (exp && Date.now() > exp) return null
    return payload
  } catch {
    return null
  }
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex")
  const iterations = 210_000
  const hash = crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex")
  return `pbkdf2_sha256$${iterations}$${salt}$${hash}`
}

export function verifyPassword(password: string, stored: string) {
  const parts = stored.split("$")
  if (parts.length !== 4) return false
  const alg = parts[0]
  const iterationsStr = parts[1]
  const salt = parts[2]
  const hashHex = parts[3]
  if (!alg || !iterationsStr || !salt || !hashHex) return false
  if (alg !== "pbkdf2_sha256") return false
  const iterations = Number(iterationsStr)
  if (!Number.isFinite(iterations) || iterations <= 0) return false
  const computed = crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex")
  const a = Buffer.from(computed, "hex")
  const b = Buffer.from(hashHex, "hex")
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}

export function getRoleFromUsuario(tipoUsuario: string | null) {
  if (tipoUsuario === "ADMIN") return "ADMIN" as const
  return "USER" as const
}
