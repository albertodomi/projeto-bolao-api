export function normalizeCpf(value: string) {
  return value.replace(/\D/g, "")
}

export function parseDecimalInput(value: unknown, fieldName: string) {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error(`${fieldName} inválido`)
    return value.toString()
  }
  if (typeof value === "string") {
    const trimmed = value.trim()
    if (!/^\d+(\.\d+)?$/.test(trimmed)) throw new Error(`${fieldName} inválido`)
    return trimmed
  }
  throw new Error(`${fieldName} inválido`)
}
