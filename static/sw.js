importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.5024b27360067e80d0b9.js",
    "revision": "b6a25c1cf1fc585ca7a76194ff050f5b"
  },
  {
    "url": "/_nuxt/layouts_agent.8a3a39fa6df388bd759d.js",
    "revision": "9d7cb1b9b037eb014a9a65c21587b3ea"
  },
  {
    "url": "/_nuxt/layouts_agentwithtab.ce63d6fd32f07839ee83.js",
    "revision": "cc19ec1254f4c1e472ee2b4041167216"
  },
  {
    "url": "/_nuxt/layouts_auth.7016f6cb1f1d5bf092fc.js",
    "revision": "7baa0798f54e1bbe619a3420ee11cebb"
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
    "url": "/_nuxt/manifest.fd1e0cbcb9011de64c3f.js",
    "revision": "96e760218fe5dee459f65ab3678329b7"
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
    "url": "/_nuxt/pages_agent_createprofile.d9bd7df76c4276e37b01.js",
    "revision": "4b774dc73e25bae5c76a1b9e9ede7d0a"
  },
  {
    "url": "/_nuxt/pages_agent_myjob.1503f776b4976b0e2258.js",
    "revision": "5c9928a907bbca4ffac72e3c66ae62bc"
  },
  {
    "url": "/_nuxt/pages_agent_seeall.0b7a14025df3e416bbe3.js",
    "revision": "0bb7022c1ebad87adf2b575ea0bd7c08"
  },
  {
    "url": "/_nuxt/pages_agent_signup.fe9ccbb48739a3edf10d.js",
    "revision": "dbc526e9519b972ce1ef82e75e41384c"
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
    "url": "/_nuxt/pages_tutor_profile_index.e72b02fb61f216a774ea.js",
    "revision": "2f81edf2ebe85a032c5567ff5bde370e"
  },
  {
    "url": "/_nuxt/pages_user__id.89a1adb890964509cdd1.js",
    "revision": "a25f0140d85ed081ae0526474bd2b106"
  },
  {
    "url": "/_nuxt/pages_user_alltutor.7fa749179f34add8dc7d.js",
    "revision": "7f19b32e08dbb677c4fb5661effe991f"
  },
  {
    "url": "/_nuxt/pages_user_create.66033c2d59d9da1e2f08.js",
    "revision": "1ff561932c14b1b9b334d928a4b13efa"
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
    "url": "/_nuxt/pages_user_seeall.f0a0987530fe51f97b77.js",
    "revision": "d42188c0683fab4bc23b3cc8866ffff3"
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

