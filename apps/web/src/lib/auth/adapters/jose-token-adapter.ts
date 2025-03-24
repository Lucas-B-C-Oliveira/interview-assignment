import { jwtVerify } from 'jose'
import { ITokenAdapter } from '../interfaces/token-adapter-interface'

export class JoseTokenAdapter implements ITokenAdapter {
  private secret: Uint8Array
  private issuer: string
  private audience: string

  constructor(secret: string, issuer: string, audience: string) {
    this.secret = new TextEncoder().encode(secret)
    this.issuer = issuer
    this.audience = audience
  }

  async verifyToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, this.secret, {
        issuer: this.issuer,
        audience: this.audience,
      })

      return { isValid: true, payload }
    } catch (err) {
      return { isValid: false, payload: null }
    }
  }
}
