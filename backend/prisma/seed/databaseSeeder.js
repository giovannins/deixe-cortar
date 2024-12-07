import prisma from '../prismaClient.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import bycrypt from 'bcryptjs'

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.barbershop.create({
      data: {
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        banner: faker.image.url({width: 1280, height: 720}),
        color: faker.internet.color(),
        icon: faker.image.avatar(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        employees: {
          create: [
            {
              name: faker.person.fullName(),
              phone: faker.phone.number(),
              note: faker.lorem.sentence(),
            },
            {
              name: faker.person.fullName(),
              phone: faker.phone.number(),
              note: faker.lorem.sentence(),
            },
          ],
        },
        services: {
          create: [
            {
              title: faker.commerce.productName(),
              description: faker.lorem.paragraph(),
              price: parseFloat(faker.commerce.price()),
              photo: faker.image.url({width: 1280, height: 720}),
              time: faker.number.int({ min: 15, max: 120 }),
            },
            {
              title: faker.commerce.productName(),
              description: faker.lorem.paragraph(),
              price: parseFloat(faker.commerce.price()),
              photo: faker.image.url({width: 1280, height: 720}),
              time: faker.number.int({ min: 15, max: 120 }),
            },
          ],
        },
      },
    })
  }

  await prisma.user.createMany({
    data: [
      {
        email: 'superadmin@example.com',
        password: await bycrypt.hash('password', 10),
        role: 'SUPERADMIN',
      },
      {
        email: 'admin@example.com',
        password: await bycrypt.hash('password', 10),
        role: 'ADMIN',
        barbershopId: 1,
      },
      {
        email: 'employee@example.com',
        password: await bycrypt.hash('password', 10),
        role: 'EMPLOYEE',
        barbershopId: 1
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
