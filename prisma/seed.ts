import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@flexitsolutions.in'
  const password = process.env.ADMIN_PASSWORD || 'FlexAdmin@2024'
  const hashed = await bcrypt.hash(password, 12)

  await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: {
      email,
      password: hashed,
      name: 'Admin',
      role: 'admin',
    },
  })

  const settings = await prisma.siteSettings.findFirst()
  if (!settings) {
    await prisma.siteSettings.create({
      data: {
        companyName: 'FLEX IT SOLUTIONS',
        email: 'sumitdigitalpartner@gmail.com',
        phone: '+91 9527352323',
        address: 'Pune, Maharashtra, India',
        testimonialTitle: 'What Clients Say',
        testimonialSubtitle:
          "Hear directly from the clients whose businesses we've helped transform.",
      },
    })
  }

  console.log('✅ Seed complete')
  console.log(`   Admin email: ${email}`)
  console.log(`   Admin password: (from ADMIN_PASSWORD env or default)`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
