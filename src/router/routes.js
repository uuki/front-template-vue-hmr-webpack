import HelloWorld from '~/pages/HelloWorld'

export default [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '*',
    component: HelloWorld,
  },
];
