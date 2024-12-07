import BarbershopsDash from '@/views/SuperAdmin/Barbershop/BarbershopsDash.vue'
import BarbershopsView from '@/views/SuperAdmin/Barbershop/BarbershopsView.vue'
import DashBoard from '@/views/SuperAdmin/DashBoard.vue'
import EmployeesView from '@/views/SuperAdmin/Employee/EmployeesView.vue'
import ServicesView from '@/views/SuperAdmin/Service/ServicesView.vue'

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
  },
  {
    path: '/superadmin/employee/:id',
    name: 'employee-detail',
    component: EmployeesView,
  },
  {
    path: '/superadmin/service/:id',
    name: 'service-detail',
    component: ServicesView,
  }
]
