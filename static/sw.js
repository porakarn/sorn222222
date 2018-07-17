importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.29662ab3dc72df838f55.js",
    "revision": "d8b525908840784ff8b7d2f9fe696948"
  },
  {
    "url": "/_nuxt/layouts_agent.d9e9e9a22067b18f407d.js",
    "revision": "a0f371ed3824db3076a3bc869095831c"
  },
  {
    "url": "/_nuxt/layouts_agentwithtab.ad9c328c3274fe2df48c.js",
    "revision": "4e91f9078e31b5fd904be91b8ffa74ef"
  },
  {
    "url": "/_nuxt/layouts_auth.7016f6cb1f1d5bf092fc.js",
    "revision": "7baa0798f54e1bbe619a3420ee11cebb"
  },
  {
    "url": "/_nuxt/layouts_default.b30b4fc6cbccceccb5ee.js",
    "revision": "443e2d1cdba6c6c0204a98c1ac634088"
  },
  {
    "url": "/_nuxt/layouts_nohead.2546de437b27d61b93c8.js",
    "revision": "fba653505a8fe4df787a2796b6a2bd54"
  },
  {
    "url": "/_nuxt/layouts_noheadtutor.9c7ee15213622efbbb2d.js",
    "revision": "bf1efea15cfdf7979d5725ebd88b56be"
  },
  {
    "url": "/_nuxt/manifest.9e1604370ab55e575aa7.js",
    "revision": "0224441a2ef218946aca1e2f29b8ff32"
  },
  {
    "url": "/_nuxt/pages_agent_create.b97ed1111ef530e4aa7c.js",
    "revision": "5961335f76298deaf8fcdd73bc5333df"
  },
  {
    "url": "/_nuxt/pages_agent_createform.6799e462fbf2c470a393.js",
    "revision": "dd17e7b66f0c90c71e3239df66c535c3"
  },
  {
    "url": "/_nuxt/pages_agent_createprofile.1d4f1aa74c433b2669c1.js",
    "revision": "c11426503da7a8d7e0bd7ece16b51fbe"
  },
  {
    "url": "/_nuxt/pages_agent_myjob.b77eb63923b392e891d1.js",
    "revision": "e5d992e545debc2316bcb30de135a46f"
  },
  {
    "url": "/_nuxt/pages_agent_seeall.053cd2a2d688ae29568c.js",
    "revision": "8d5f3ec8ec9aed62299ce04f6898fc15"
  },
  {
    "url": "/_nuxt/pages_agent_signup.fe9ccbb48739a3edf10d.js",
    "revision": "dbc526e9519b972ce1ef82e75e41384c"
  },
  {
    "url": "/_nuxt/pages_agent_status_1.e53eb5204ae21d8e11fc.js",
    "revision": "d301c4a1184e294534d15445d42a1434"
  },
  {
    "url": "/_nuxt/pages_agent_status_2.ac76e8b5c652e0306b04.js",
    "revision": "53e4f7451ec1beebdf5065f98126e693"
  },
  {
    "url": "/_nuxt/pages_agent_status_3.8d9ba4fbf92722c248df.js",
    "revision": "bd239e6e079056a331c1a841974e2c7f"
  },
  {
    "url": "/_nuxt/pages_agent_suggest.8a2047b7dbe415cc52ea.js",
    "revision": "c33154a3d7849dfef68126c1c21a78a1"
  },
  {
    "url": "/_nuxt/pages_choose.f5ac39fee027c8c02a0a.js",
    "revision": "6a033a0896036241ca529056f9f4d78d"
  },
  {
    "url": "/_nuxt/pages_index.950ef7c5627e36adfe72.js",
    "revision": "af45fabbd6561d7ebb8d6cc939ecf16d"
  },
  {
    "url": "/_nuxt/pages_student_login.8b586554c2d212c9ecf3.js",
    "revision": "008a1233fb56fd168a130ed18685d318"
  },
  {
    "url": "/_nuxt/pages_tutor_givelink.7802291d902eb70e9670.js",
    "revision": "3d950c06300661f2d4f71d56b784bdef"
  },
  {
    "url": "/_nuxt/pages_tutor_job.a0565b918da7487ace04.js",
    "revision": "81412e126f5320674be3af2168917b3f"
  },
  {
    "url": "/_nuxt/pages_tutor_profile_edit.0a5236df8a70d15931a7.js",
    "revision": "139c9c21de53d2b7a91c8fa2da4f82a5"
  },
  {
    "url": "/_nuxt/pages_tutor_profile_index.324556a6f3d5a62c5ddf.js",
    "revision": "70521ad89a5913cbe26b5d7ea1972c66"
  },
  {
    "url": "/_nuxt/pages_user__id.89a1adb890964509cdd1.js",
    "revision": "a25f0140d85ed081ae0526474bd2b106"
  },
  {
    "url": "/_nuxt/pages_user_alltutor.08814e3056f05260a8c9.js",
    "revision": "70de76bb3297c36a802f58a09ff6b6af"
  },
  {
    "url": "/_nuxt/pages_user_create.1e9c26ff16bb847cb079.js",
    "revision": "bb45fe9bb2753ceb0cf1444c60ee38d0"
  },
  {
    "url": "/_nuxt/pages_user_createform.a83d36ff5e4d2a9b0c1f.js",
    "revision": "d4d4c0dc810091c1cba75127f528c1c0"
  },
  {
    "url": "/_nuxt/pages_user_fblogin.4005917a304ab368298e.js",
    "revision": "d24136877296d7f191b55b1afab01b0a"
  },
  {
    "url": "/_nuxt/pages_user_form.f04489cdc47da402ef8a.js",
    "revision": "33e0803a86c7787c0af88059b5fe4d2f"
  },
  {
    "url": "/_nuxt/pages_user_rating__id.72743a9ab32e35179105.js",
    "revision": "1781d5dcdf632eccf667572c4881aabf"
  },
  {
    "url": "/_nuxt/pages_user_seeall.82a22bf754c7ed10f860.js",
    "revision": "949669f53eff22d9f2b1baaa3d8901c6"
  },
  {
    "url": "/_nuxt/pages_user_suggest.9056190f9e2221dbad49.js",
    "revision": "1d9fb716eed7c99d198ebfb06dc6f5df"
  },
  {
    "url": "/_nuxt/pages_user_test.853c4c509fc83f9420f4.js",
    "revision": "b251b49205ae1edcd84f9d4766f5d76c"
  },
  {
    "url": "/_nuxt/vendor.1c9646ad1d3e57932ff6.js",
    "revision": "11edbd6ba815ef19cd804409063fcab5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

