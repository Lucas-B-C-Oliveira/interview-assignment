import { ITokenAdapter } from './interfaces/token-adapter-interface'

export class TokenValidator {
  private tokenAdapter: ITokenAdapter

  constructor(adapter: ITokenAdapter) {
    this.tokenAdapter = adapter
  }

  async validateToken(token: string) {
    return await this.tokenAdapter.verifyToken(token)
  }
}
