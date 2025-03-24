export interface ITokenAdapter {
  verifyToken(token: string): Promise<{ isValid: boolean; payload: any | null }>
}
