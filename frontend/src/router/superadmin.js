import BarbershopsDash from '@/views/SuperAdmin/Barbershop/BarbershopsDash.vue'
import BarbershopsView from '@/views/SuperAdmin/Barbershop/BarbershopsView.vue'
import DashBoard from '@/views/SuperAdmin/DashBoard.vue'

export default [
  {
    path: '/superadmin/dashboard',
    name: 'superadmin-dashboard',
    component: DashBoard,
  },
  {
    path: '/superadmin/barbershop',
    name: 'barbershop-dash',
    component: BarbershopsDash,
  },
  {
    path: '/superadmin/barbershop/:id',
    name: 'barbershop-detail',
    component: BarbershopsView,
  }
]
