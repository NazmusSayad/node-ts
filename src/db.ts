import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export * from '@prisma/client'
export default db
