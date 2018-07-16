importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.45e24e4b663d4b0ead13.js",
    "revision": "5322da1e5ade9c533123afe47fe5c0a3"
  },
  {
    "url": "/_nuxt/layouts_agent.cdafe71f4d75e7cde4f3.js",
    "revision": "278489ac79a878e08ea8ef2f7f256ce4"
  },
  {
    "url": "/_nuxt/layouts_agentwithtab.e82d8a8e744183841b85.js",
    "revision": "3e6f4a069a30c2c8f4148f092501bb60"
  },
  {
    "url": "/_nuxt/layouts_auth.7016f6cb1f1d5bf092fc.js",
    "revision": "7baa0798f54e1bbe619a3420ee11cebb"
  },
  {
    "url": "/_nuxt/layouts_default.189d34ce56c2beff3e6e.js",
    "revision": "2be75baf80575d193b68b35efa07dc1c"
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
    "url": "/_nuxt/manifest.cfb31bc49094d2fdcf46.js",
    "revision": "a9e893f021e45e0e90fa4fa4a0313418"
  },
  {
    "url": "/_nuxt/pages_agent_create.3c0f0364adb583c21bae.js",
    "revision": "1b51f9d73e9950a305a49f6355f84235"
  },
  {
    "url": "/_nuxt/pages_agent_createform.c7182d1f433698f9fae8.js",
    "revision": "21d020e14e979f29f6b789be6418a17e"
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
    "url": "/_nuxt/pages_agent_seeall.b18197edf06dadb0c645.js",
    "revision": "a8e206e4c99d037b7d0dd8dfe218bdbd"
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
    "url": "/_nuxt/pages_agent_suggest.d9255b423b07b1fc4037.js",
    "revision": "9039b4757659da36ef11624d6cc4409d"
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
    "url": "/_nuxt/pages_tutor_profile_edit.6783d54b35e923ca5584.js",
    "revision": "452247931f9f9a9b64978cf7b1a6c19b"
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
    "url": "/_nuxt/pages_user_create.a21275745c511bb81ade.js",
    "revision": "a6ac55faa63084120e090a66d1f5cde4"
  },
  {
    "url": "/_nuxt/pages_user_createform.e3b44c1fc9ebd8b19473.js",
    "revision": "fcf1985bbf767f03c81b8fa535f1af23"
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
    "url": "/_nuxt/pages_user_seeall.259a69d0a0e70aac0ed2.js",
    "revision": "36b15a09e5a3b0c84fa16417c073dbbe"
  },
  {
    "url": "/_nuxt/pages_user_suggest.d4a483743b20888ff823.js",
    "revision": "1c4780daefd4bcb16c20e6ac465036b4"
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

