if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "首页");
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/index/index.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 分类 ");
  }
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/category/category.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 阅读 ");
  }
  const PagesArticleArticle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/article/article.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 问答 ");
  }
  const PagesQuestionQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/question/question.vue"]]);
  const _sfc_main$2 = {
    __name: "my",
    setup(__props) {
      const handleToLogin = () => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createTextVNode(" 我的 "),
          vue.createElementVNode("view", { onClick: handleToLogin }, "请登录")
        ]);
      };
    }
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/my/my.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _imports_0 = "/static/share/weixin.png";
  const _imports_1 = "/static/share/qq.png";
  const _sfc_main$1 = {
    __name: "login",
    setup(__props) {
      const mobile = vue.ref("");
      const code = vue.ref("");
      const loading = vue.ref(false);
      const handleLogin = async () => {
        loading.value = true;
        try {
        } catch (e) {
          formatAppLog("log", "at pages/login/login.vue:69", e);
        } finally {
          loading.value = false;
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "app" }, [
          vue.createCommentVNode(" 关闭图标 "),
          vue.createElementVNode("text", { class: "back-btn iconfont icon-close" }),
          vue.createCommentVNode(" logo "),
          vue.createElementVNode("view", { class: "left-top-sign" }, "LOGIN"),
          vue.createElementVNode("view", { class: "welcome" }, "欢迎回来!"),
          vue.createCommentVNode(" 手机号登录表单 "),
          vue.createElementVNode("view", { class: "input-content" }, [
            vue.createCommentVNode(" 手机号码 "),
            vue.createElementVNode("view", { class: "input-item" }, [
              vue.createElementVNode("text", { class: "tit" }, "手机号码"),
              vue.createElementVNode("view", { class: "row" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    maxlength: "11",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mobile.value = $event),
                    type: "number",
                    placeholder: "请输入手机号码",
                    "placeholder-style": "color: #909399"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    vue.vModelText,
                    mobile.value,
                    void 0,
                    { trim: true }
                  ]
                ])
              ])
            ]),
            vue.createCommentVNode(" 验证码 "),
            vue.createElementVNode("view", { class: "input-item" }, [
              vue.createElementVNode("text", { class: "tit" }, "验证码"),
              vue.createElementVNode("view", { class: "row" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => code.value = $event),
                    type: "number",
                    maxlength: "6",
                    placeholder: "请输入手机验证码",
                    "placeholder-style": "color: #909399"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, code.value]
                ]),
                vue.createCommentVNode(" 倒计时按钮 "),
                vue.createCommentVNode(" 倒计时封装组件 ")
              ])
            ]),
            vue.createCommentVNode(" 登录按钮 "),
            vue.createElementVNode("button", {
              type: "primary",
              loading: loading.value,
              onClick: handleLogin
            }, "登录", 8, ["loading"]),
            vue.createElementVNode("view", { class: "other-wrapper" }, [
              vue.createCommentVNode(" 标题 "),
              vue.createElementVNode("view", { class: "center line" }, [
                vue.createElementVNode("text", { class: "tit" }, "社交账号登录")
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createCommentVNode(" 微信登录 "),
                vue.createElementVNode("image", {
                  class: "icon",
                  src: _imports_0,
                  mode: "widthFix"
                }),
                vue.createCommentVNode(" qq登录 只在app端显示"),
                vue.createElementVNode("image", {
                  class: "icon",
                  src: _imports_1,
                  mode: "widthFix"
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/pages/login/login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/article/article", PagesArticleArticle);
  __definePage("pages/question/question", PagesQuestionQuestion);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/login/login", PagesLoginLogin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/yangling/Downloads/班级/2307B实训三/usian_edu_app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
