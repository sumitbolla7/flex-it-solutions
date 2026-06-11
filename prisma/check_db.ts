import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

// Manually load .env file
try {
  const envPath = path.resolve(process.cwd(), '.env')
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf-8')
    envFile.split('\n').forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) return
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx !== -1) {
        const key = trimmed.substring(0, eqIdx).trim()
        let val = trimmed.substring(eqIdx + 1).trim()
        if (val.startsWith('"') && val.endsWith('"')) {
          val = val.substring(1, val.length - 1)
        } else if (val.startsWith("'") && val.endsWith("'")) {
          val = val.substring(1, val.length - 1)
        }
        process.env[key] = val
      }
    })
  }
} catch (e) {
  console.error('Error loading env file:', e)
}

const prisma = new PrismaClient()

async function main() {
  console.log('DATABASE_URL is:', process.env.DATABASE_URL)
  try {
    const portfolios = await prisma.portfolio.findMany()
    console.log('Portfolios in database:', portfolios.length)
    console.log(JSON.stringify(portfolios, null, 2))
  } catch (e) {
    console.error('Error connecting or querying:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
