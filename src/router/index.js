import Vue from 'vue'
import Router from 'vue-router'
import Main from '../view/Main'
import Login from '../view/Login'
import Profile from '../view/teacher/user/Profile'
import List from '../view/teacher/user/List'
import NotFound from '../view/NotFound'
import StudentsList from '../view/teacher/student/StudentsList'
import Curriculum from '../view/teacher/curriculum/Curriculum'
import CurriculumsList from '../view/teacher/curriculum/CurriculumsList'
import AchievementAdd from '../view/teacher/achievement/AchievementAdd'
import AchievementAdd2 from '../view/teacher/achievement/achievementInto/AchievementAdd2'
import AchievementSelect from '../view/teacher/achievement/AchievementSelect'
import Register from '../view/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Main/:id',
      name: 'Main',
      props: true,
      component: Main,
      children: [
        {
          path: '/user/Profile/:id',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/user/List/:id',
          name: 'List',
          component: List
        }, {
          path: '/student/StudentsList/:id',
          name: 'StudentsList',
          component: StudentsList
        }, {
          path: '/curriculum/Curriculum/:id',
          name: 'Curriculum',
          component: Curriculum
        }, {
          path: '/curriculum/CurriculumsList/:id',
          name: 'CurriculumsList',
          component: CurriculumsList
        }, {
          path: '/achievement/AchievementAdd/:id',
          name: 'AchievementAdd',
          component: AchievementAdd
        }, {
          path: '/achievement/achievementInto/AchievementAdd2/:id',
          name: 'AchievementAdd2',
          component: AchievementAdd2
        }, {
          path: '/achievement/AchievementSelect/:id',
          name: 'AchievementSelect',
          component: AchievementSelect
        }
      ]
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Register',
      component: Register
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
