importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2f0da89a447f4577f9de.js",
    "revision": "bf0a446f59787885cc3a75e264b4dd04"
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
    "url": "/_nuxt/manifest.bd420b2bb168d643fbc8.js",
    "revision": "493cfcd68fa8c90436df57ad0c99face"
  },
  {
    "url": "/_nuxt/pages_agent_create.956424730f732d98d9c4.js",
    "revision": "2a73a8a333c2d1335e6761b6e009129c"
  },
  {
    "url": "/_nuxt/pages_agent_createform.fc096fe2f399f527f226.js",
    "revision": "b5d2ac19c47109fe1ca26b9d7fc49aca"
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
    "url": "/_nuxt/pages_agent_seeall.6b525979f37fa17db4fc.js",
    "revision": "50a4a306ed28923066a8431f2ef2c757"
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
    "url": "/_nuxt/pages_user_create.cd2b726fe249d9bdd661.js",
    "revision": "2a827a152eedd4374cc926d79eab5c24"
  },
  {
    "url": "/_nuxt/pages_user_createform.aa974f935c0e6d06b7f2.js",
    "revision": "16ce78743b57bea548fc484d7c90b8ff"
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

