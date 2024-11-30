export const paths = {
  menu: {
    main: '/',
    withId: ':company_id',
    param: 'company_id'
  },

  stripe: {
    main: '/stripe',
    single: 'stripe',
    success: {
      main: '/stripe/success',
      single: 'success'
    },
    cancel: {
      main: '/stripe/cancel',
      single: 'cancel'
    }
  },

  auth: {
    main: '/dash/auth',

    login: {
      main: '/dash/auth/login',
      single: 'login'
    },

    signup: {
      main: '/dash/auth/signup',
      single: 'signup'
    },

    validation: {
      main: '/dash/auth/validation',
      single: 'validation'
    }
  },

  notFound: {
    main: '/not-found'
  },

  subscription: {
    main: '/dash/subs',
    inactive: {
      main: '/dash/subs/inactive',
      single: 'inactive'
    },

    subscribe: {
      main: '/dash/subs/subscribe',
      single: 'subscribe'
    }
  },

  dash: {
    main: '/dash',

    manager: {
      main: '/dash/manager',
      single: 'manager'
    },

    company: {
      main: '/dash/company',
      single: 'company',
      withId: 'company/:company_id',
      param: 'company_id'
    },

    options: {
      main: '/dash/options',
      single: 'options'
    },

    user: {
      main: '/dash/user',
      single: 'user'
    }
  }
};
