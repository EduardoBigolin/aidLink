// import { PrismaClient } from '@prisma/client'
// import { hash } from '../../src/utils/hash'

// const ClientPrisma = new PrismaClient()

// async function main() {
//     ClientPrisma.user.create({
//         data: {
//             name: 'Admin',
//             email: 'admin@admin.com',
//             password: await hash('admin')
//         }
//     })
//         .then(() => {
//             console.log('User created successfully')
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .finally(async () => {
//             await ClientPrisma.$disconnect()
//         })


// }

// await main()