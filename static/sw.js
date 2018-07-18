importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dce9ac6d4334f0b23b80.js",
    "revision": "43af60a1c50e8697ee89c46267d3804c"
  },
  {
    "url": "/_nuxt/layouts_agent.a6ea0d48c0136c462fbb.js",
    "revision": "a13d167047bfaae5ab3060d10d60c5b7"
  },
  {
    "url": "/_nuxt/layouts_agentwithtab.b382b5e32e91fd77dee9.js",
    "revision": "b41636b93562d3d63e92eb89903adec0"
  },
  {
    "url": "/_nuxt/layouts_auth.9f58f7358864c7b976b4.js",
    "revision": "dc8ce1d8a2698f2d45603f816755e884"
  },
  {
    "url": "/_nuxt/layouts_default.b521c4fc5c2a35f1e2b4.js",
    "revision": "7d96a737f06664b1088f4b0877e09fa4"
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
    "url": "/_nuxt/manifest.c8bd3376b586639ef772.js",
    "revision": "f6d06e6c68f2a7b760199db8903a64f3"
  },
  {
    "url": "/_nuxt/pages_agent_create.258c34c51128f6581529.js",
    "revision": "acc896590d6b55c1d47f98d06abf6a41"
  },
  {
    "url": "/_nuxt/pages_agent_createform.fe65def88c1da7273187.js",
    "revision": "36d3f627b6e89e9f8beae03324d128ec"
  },
  {
    "url": "/_nuxt/pages_agent_createprofile.07c938fba932d0675d48.js",
    "revision": "8ec32afa8c0a5ffaff68e0923ac7b1de"
  },
  {
    "url": "/_nuxt/pages_agent_createprofilefirst.fdd96b8b0bbdc40ddb83.js",
    "revision": "433dc68a22145538915c8cfd03a8d66d"
  },
  {
    "url": "/_nuxt/pages_agent_myjob.1503f776b4976b0e2258.js",
    "revision": "5c9928a907bbca4ffac72e3c66ae62bc"
  },
  {
    "url": "/_nuxt/pages_agent_seeall.1405f55e78b827fa43d4.js",
    "revision": "d421a90e009d633b9efc79923a81c9ed"
  },
  {
    "url": "/_nuxt/pages_agent_signup.9baa631e94bd8c5cb9f9.js",
    "revision": "cb5f68ff7ab9df4efbd7eacd07f54a69"
  },
  {
    "url": "/_nuxt/pages_agent_status_1.252c0315517b1d8a0ce3.js",
    "revision": "3b748ad7b6ad9c41f67738af9a1d6f4f"
  },
  {
    "url": "/_nuxt/pages_agent_status_2.4645eddfa5714548687c.js",
    "revision": "5dc2a504b53a54f8e343d578ebe7275f"
  },
  {
    "url": "/_nuxt/pages_agent_status_3.896633b8dde10772de4e.js",
    "revision": "6a52fbb6d0215e55a58f3db5836b0b19"
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
    "url": "/_nuxt/pages_index.ee78e82e51b2652736d3.js",
    "revision": "8d742601b1deb4e24c9bb8171e775a3d"
  },
  {
    "url": "/_nuxt/pages_student_login.7894dbdcb2025b767d0e.js",
    "revision": "c0c290b3e548ff8888356223c64e1e01"
  },
  {
    "url": "/_nuxt/pages_tutor_givelink.7802291d902eb70e9670.js",
    "revision": "3d950c06300661f2d4f71d56b784bdef"
  },
  {
    "url": "/_nuxt/pages_tutor_job.02f534a71d551a55a8a8.js",
    "revision": "42e0d869ecb4d8f8c7adef02f177f638"
  },
  {
    "url": "/_nuxt/pages_tutor_profile_edit.0a5236df8a70d15931a7.js",
    "revision": "139c9c21de53d2b7a91c8fa2da4f82a5"
  },
  {
    "url": "/_nuxt/pages_tutor_profile_index.340fa8f214a561c5417f.js",
    "revision": "0452f065e5562f5e6a4074adc9d0f440"
  },
  {
    "url": "/_nuxt/pages_user__id.ce061115e443fbffbcf0.js",
    "revision": "67190fba81760a61c5144d43902e110b"
  },
  {
    "url": "/_nuxt/pages_user_alltutor.0af87695196f7be659ca.js",
    "revision": "6bf6fded63b487936ec770a212378402"
  },
  {
    "url": "/_nuxt/pages_user_create.e6ba41c6f9a5c2f92313.js",
    "revision": "7de37ab4c1396a08f43ac59e4340c07d"
  },
  {
    "url": "/_nuxt/pages_user_createform.79e203935c47ecbfbce3.js",
    "revision": "bd0c0406f1c7e752e75e92aa013d19c9"
  },
  {
    "url": "/_nuxt/pages_user_fblogin.db25dcacf2b6408e5338.js",
    "revision": "b92b9ff4df6ca16728ce4c77a24b08d2"
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
    "url": "/_nuxt/pages_user_seeall.78d9442e4bad02505348.js",
    "revision": "77fa27ebfa3c9ab70d92cbaf431d5a08"
  },
  {
    "url": "/_nuxt/pages_user_suggest.4ceb38cb7fbd4d1eb619.js",
    "revision": "97d709724b235454ece227dfb474c110"
  },
  {
    "url": "/_nuxt/pages_user_test.0806a3ac7a60a1a51119.js",
    "revision": "124748fc01f41af16272adfb8a34d0cf"
  },
  {
    "url": "/_nuxt/vendor.3c9915e1a3edef62a8d0.js",
    "revision": "f46bfd9ecd3ed7d8750d588a2c91b6d9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

