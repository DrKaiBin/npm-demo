import { Fragment as Tt, isVNode as zr, Comment as Gr, Text as Bn, defineComponent as K, inject as Hn, computed as L, createVNode as m, reactive as fe, provide as _t, watch as je, Transition as Vr, onMounted as qe, onUnmounted as Wr, Teleport as Ur, ref as ge, TransitionGroup as Yr, render as Wt, h as Ut, nextTick as Et, watchEffect as Je, getCurrentInstance as qr, onBeforeUnmount as zn, onUpdated as Jr, openBlock as Qr, createBlock as Zr, unref as Xr, withCtx as Kr, createTextVNode as ea } from "vue";
function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yt(Object(n), !0).forEach(function(r) {
      F(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(this, arguments);
}
function Ve(e) {
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ve(e);
}
var ta = Array.isArray, na = function(t) {
  return typeof t == "string";
}, ra = function(t) {
  return t !== null && Ve(t) === "object";
};
function Te(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e != null ? e : n;
}
function Ie() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (!!n) {
      if (na(n))
        e.push(n);
      else if (ta(n))
        for (var r = 0; r < n.length; r++) {
          var a = Ie(n[r]);
          a && e.push(a);
        }
      else if (ra(n))
        for (var o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
function aa(e) {
  if (Array.isArray(e))
    return e;
}
function oa(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, c, i;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Gn(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ut(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ut(e, t);
  }
}
function ia() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qt(e, t) {
  return aa(e) || oa(e, t) || Gn(e, t) || ia();
}
function ca(e) {
  if (Array.isArray(e))
    return ut(e);
}
function la(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ua() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function We(e) {
  return ca(e) || la(e) || Gn(e) || ua();
}
var fa = function(t) {
  return t != null && t !== "";
};
const sa = fa;
var da = function(t, n) {
  var r = j({}, t);
  return Object.keys(n).forEach(function(a) {
    var o = r[a];
    if (o)
      o.type || o.default ? o.default = n[a] : o.def ? o.def(n[a]) : r[a] = {
        type: o,
        default: n[a]
      };
    else
      throw new Error("not have ".concat(a, " prop"));
  }), r;
};
const pa = da;
var Vn = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Array.isArray(t) ? t : [t], a = [];
  return r.forEach(function(o) {
    Array.isArray(o) ? a.push.apply(a, We(e(o, n))) : o && o.type === Tt ? a.push.apply(a, We(e(o.children, n))) : o && zr(o) ? n && !Wn(o) ? a.push(o) : n || a.push(o) : sa(o) && a.push(o);
  }), a;
}, Jt = function(t) {
  for (var n, r = ((n = t == null ? void 0 : t.vnode) === null || n === void 0 ? void 0 : n.el) || t && (t.$el || t); r && !r.tagName; )
    r = r.nextSibling;
  return r;
};
function Wn(e) {
  return e && (e.type === Gr || e.type === Tt && e.children.length === 0 || e.type === Bn && e.children.trim() === "");
}
function va() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, We(n)) : n.type === Tt ? t.push.apply(t, We(n.children)) : t.push(n);
  }), t.filter(function(n) {
    return !Wn(n);
  });
}
var Un = function(t) {
  return setTimeout(t, 16);
}, Yn = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Un = function(t) {
  return window.requestAnimationFrame(t);
}, Yn = function(t) {
  return window.cancelAnimationFrame(t);
});
var Qt = 0, At = /* @__PURE__ */ new Map();
function qn(e) {
  At.delete(e);
}
function ft(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Qt += 1;
  var n = Qt;
  function r(a) {
    if (a === 0)
      qn(n), e();
    else {
      var o = Un(function() {
        r(a - 1);
      });
      At.set(n, o);
    }
  }
  return r(t), n;
}
ft.cancel = function(e) {
  var t = At.get(e);
  return qn(t), Yn(t);
};
var ha = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n;
}, Jn = function(t) {
  var n = t;
  return n.install = function(r) {
    r.component(n.displayName || n.name, t);
  }, t;
};
const ga = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var ma = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const ya = ma;
var ba = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const Qn = ba;
var Ca = {
  lang: j({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, ya),
  timePickerLocale: j({}, Qn)
};
const Zt = Ca;
var U = "${label} is not a valid ${type}", xa = {
  locale: "en",
  Pagination: ga,
  DatePicker: Zt,
  TimePicker: Qn,
  Calendar: Zt,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: U,
        method: U,
        array: U,
        object: U,
        number: U,
        date: U,
        boolean: U,
        integer: U,
        float: U,
        regexp: U,
        email: U,
        url: U,
        hex: U
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const st = xa, Zn = K({
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function(t, n) {
    var r = n.slots, a = Hn("localeData", {}), o = L(function() {
      var i = t.componentName, u = i === void 0 ? "global" : i, s = t.defaultLocale, f = s || st[u || "global"], l = a.antLocale, d = u && l ? l[u] : {};
      return j(j({}, typeof f == "function" ? f() : f), d || {});
    }), c = L(function() {
      var i = a.antLocale, u = i && i.locale;
      return i && i.exist && !u ? st.locale : u;
    });
    return function() {
      var i = t.children || r.default, u = a.antLocale;
      return i == null ? void 0 : i(o.value, c.value, u);
    };
  }
});
var Xn = function() {
  var t = de("empty", {}), n = t.getPrefixCls, r = n("empty-img-default");
  return m("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [m("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [m("g", {
    transform: "translate(24 31.67)"
  }, [m("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), m("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), m("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), m("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), m("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), m("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), m("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [m("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), m("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Xn.PRESENTED_IMAGE_DEFAULT = !0;
const Oa = Xn;
var Kn = function() {
  var t = de("empty", {}), n = t.getPrefixCls, r = n("empty-img-simple");
  return m("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [m("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [m("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), m("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [m("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), m("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
Kn.PRESENTED_IMAGE_SIMPLE = !0;
const wa = Kn;
function Xt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function er(e, t, n) {
  return t && Xt(e.prototype, t), n && Xt(e, n), e;
}
function He() {
  return (He = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function tr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function nr(e, t) {
  if (e == null)
    return {};
  var n, r, a = {}, o = Object.keys(e);
  for (r = 0; r < o.length; r++)
    t.indexOf(n = o[r]) >= 0 || (a[n] = e[n]);
  return a;
}
function Kt(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var rr = Object.prototype, ar = rr.toString, Sa = rr.hasOwnProperty, or = /^\s*function (\w+)/;
function en(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(or);
    return r ? r[1] : "";
  }
  return "";
}
var ue = function(e) {
  var t, n;
  return Kt(e) !== !1 && typeof (t = e.constructor) == "function" && Kt(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, ir = function(e) {
  return e;
}, H = ir;
if (process.env.NODE_ENV !== "production") {
  var Pa = typeof console < "u";
  H = Pa ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : ir;
}
var ke = function(e, t) {
  return Sa.call(e, t);
}, Ta = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, ye = Array.isArray || function(e) {
  return ar.call(e) === "[object Array]";
}, be = function(e) {
  return ar.call(e) === "[object Function]";
}, Ue = function(e) {
  return ue(e) && ke(e, "_vueTypes_name");
}, cr = function(e) {
  return ue(e) && (ke(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return ke(e, t);
  }));
};
function jt(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function se(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var a = !0, o = "";
  r = ue(e) ? e : { type: e };
  var c = Ue(r) ? r._vueTypes_name + " - " : "";
  if (cr(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return a;
    ye(r.type) ? (a = r.type.some(function(l) {
      return se(l, t, !0) === !0;
    }), o = r.type.map(function(l) {
      return en(l);
    }).join(" or ")) : a = (o = en(r)) === "Array" ? ye(t) : o === "Object" ? ue(t) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(l) {
      if (l == null)
        return "";
      var d = l.constructor.toString().match(or);
      return d ? d[1] : "";
    }(t) === o : t instanceof r.type;
  }
  if (!a) {
    var i = c + 'value "' + t + '" should be of type "' + o + '"';
    return n === !1 ? (H(i), !1) : i;
  }
  if (ke(r, "validator") && be(r.validator)) {
    var u = H, s = [];
    if (H = function(l) {
      s.push(l);
    }, a = r.validator(t), H = u, !a) {
      var f = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, n === !1 ? (H(f), a) : f;
    }
  }
  return a;
}
function q(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? be(a) || se(this, a, !0) === !0 ? (this.default = ye(a) ? function() {
      return [].concat(a);
    } : ue(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (H(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), r = n.validator;
  return be(r) && (n.validator = jt(r, n)), n;
}
function ne(e, t) {
  var n = q(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return be(this.validator) && H(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = jt(r, this), this;
  } });
}
function tn(e, t, n) {
  var r, a, o = (r = t, a = {}, Object.getOwnPropertyNames(r).forEach(function(l) {
    a[l] = Object.getOwnPropertyDescriptor(r, l);
  }), Object.defineProperties({}, a));
  if (o._vueTypes_name = e, !ue(n))
    return o;
  var c, i, u = n.validator, s = nr(n, ["validator"]);
  if (be(u)) {
    var f = o.validator;
    f && (f = (i = (c = f).__original) !== null && i !== void 0 ? i : c), o.validator = jt(f ? function(l) {
      return f.call(this, l) && u.call(this, l);
    } : u, o);
  }
  return Object.assign(o, s);
}
function Qe(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var _a = function() {
  return ne("any", {});
}, Ea = function() {
  return ne("function", { type: Function });
}, Aa = function() {
  return ne("boolean", { type: Boolean });
}, ja = function() {
  return ne("string", { type: String });
}, ka = function() {
  return ne("number", { type: Number });
}, Ma = function() {
  return ne("array", { type: Array });
}, $a = function() {
  return ne("object", { type: Object });
}, Ia = function() {
  return q("integer", { type: Number, validator: function(e) {
    return Ta(e);
  } });
}, Na = function() {
  return q("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function La(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return q(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || H(this._vueTypes_name + " - " + t), r;
  } });
}
function Fa(e) {
  if (!ye(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, a) {
    if (a != null) {
      var o = a.constructor;
      r.indexOf(o) === -1 && r.push(o);
    }
    return r;
  }, []);
  return q("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var a = e.indexOf(r) !== -1;
    return a || H(t), a;
  } });
}
function Ra(e) {
  if (!ye(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var a = e[r];
    if (cr(a)) {
      if (Ue(a) && a._vueTypes_name === "oneOf") {
        n = n.concat(a.type);
        continue;
      }
      if (be(a.validator) && (t = !0), a.type !== !0 && a.type) {
        n = n.concat(a.type);
        continue;
      }
    }
    n.push(a);
  }
  return n = n.filter(function(o, c) {
    return n.indexOf(o) === c;
  }), q("oneOfType", t ? { type: n, validator: function(o) {
    var c = [], i = e.some(function(u) {
      var s = se(Ue(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, o, !0);
      return typeof s == "string" && c.push(s), s === !0;
    });
    return i || H("oneOfType - provided value does not match any of the " + c.length + ` passed-in validators:
` + Qe(c.join(`
`))), i;
  } } : { type: n });
}
function Da(e) {
  return q("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(a) {
      return (n = se(e, a, !0)) === !0;
    });
    return r || H(`arrayOf - value validation error:
` + Qe(n)), r;
  } });
}
function Ba(e) {
  return q("instanceOf", { type: e });
}
function Ha(e) {
  return q("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(a) {
      return (n = se(e, t[a], !0)) === !0;
    });
    return r || H(`objectOf - value validation error:
` + Qe(n)), r;
  } });
}
function za(e) {
  var t = Object.keys(e), n = t.filter(function(a) {
    var o;
    return !!(!((o = e[a]) === null || o === void 0) && o.required);
  }), r = q("shape", { type: Object, validator: function(a) {
    var o = this;
    if (!ue(a))
      return !1;
    var c = Object.keys(a);
    if (n.length > 0 && n.some(function(u) {
      return c.indexOf(u) === -1;
    })) {
      var i = n.filter(function(u) {
        return c.indexOf(u) === -1;
      });
      return H(i.length === 1 ? 'shape - required property "' + i[0] + '" is not defined.' : 'shape - required properties "' + i.join('", "') + '" are not defined.'), !1;
    }
    return c.every(function(u) {
      if (t.indexOf(u) === -1)
        return o._vueTypes_isLoose === !0 || (H('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var s = se(e[u], a[u], !0);
      return typeof s == "string" && H('shape - "' + u + `" property validation error:
 ` + Qe(s)), s === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var te = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (ye(t))
      return t.forEach(function(l) {
        return n.extend(l);
      }), this;
    var r = t.name, a = t.validate, o = a !== void 0 && a, c = t.getter, i = c !== void 0 && c, u = nr(t, ["name", "validate", "getter"]);
    if (ke(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var s, f = u.type;
    return Ue(f) ? (delete u.type, Object.defineProperty(this, r, i ? { get: function() {
      return tn(r, f, u);
    } } : { value: function() {
      var l, d = tn(r, f, u);
      return d.validator && (d.validator = (l = d.validator).bind.apply(l, [d].concat([].slice.call(arguments)))), d;
    } })) : (s = i ? { get: function() {
      var l = Object.assign({}, u);
      return o ? ne(r, l) : q(r, l);
    }, enumerable: !0 } : { value: function() {
      var l, d, v = Object.assign({}, u);
      return l = o ? ne(r, v) : q(r, v), v.validator && (l.validator = (d = v.validator).bind.apply(d, [l].concat([].slice.call(arguments)))), l;
    }, enumerable: !0 }, Object.defineProperty(this, r, s));
  }, er(e, null, [{ key: "any", get: function() {
    return _a();
  } }, { key: "func", get: function() {
    return Ea().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Aa().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return ja().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return ka().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Ma().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return $a().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Ia().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Na();
  } }]), e;
}();
function lr(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return tr(r, n), er(r, null, [{ key: "sensibleDefaults", get: function() {
      return He({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? He({}, a !== !0 ? a : e) : {};
    } }]), r;
  }(te)).defaults = He({}, e), t;
}
te.defaults = {}, te.custom = La, te.oneOf = Fa, te.instanceOf = Ba, te.oneOfType = Ra, te.arrayOf = Da, te.objectOf = Ha, te.shape = za, te.utils = { validate: function(e, t) {
  return se(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? ne(e, t) : q(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return tr(t, e), t;
})(lr());
var ur = lr({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
ur.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const dt = ur;
var Ga = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, fr = m(Oa, null, null), sr = m(wa, null, null), Ce = function(t, n) {
  var r = n.slots, a = r === void 0 ? {} : r, o = n.attrs, c, i = de("empty", t), u = i.direction, s = i.prefixCls, f = s.value, l = j(j({}, t), o), d = l.image, v = d === void 0 ? fr : d, y = l.description, w = y === void 0 ? ((c = a.description) === null || c === void 0 ? void 0 : c.call(a)) || void 0 : y, T = l.imageStyle, k = l.class, O = k === void 0 ? "" : k, I = Ga(l, ["image", "description", "imageStyle", "class"]);
  return m(Zn, {
    componentName: "Empty",
    children: function(A) {
      var g, b = typeof w < "u" ? w : A.description, P = typeof b == "string" ? b : "empty", E = null;
      return typeof v == "string" ? E = m("img", {
        alt: P,
        src: v
      }, null) : E = v, m("div", X({
        class: Ie(f, O, (g = {}, F(g, "".concat(f, "-normal"), v === sr), F(g, "".concat(f, "-rtl"), u.value === "rtl"), g))
      }, I), [m("div", {
        class: "".concat(f, "-image"),
        style: T
      }, [E]), b && m("p", {
        class: "".concat(f, "-description")
      }, [b]), a.default && m("div", {
        class: "".concat(f, "-footer")
      }, [va(a.default())])]);
    }
  }, null);
};
Ce.displayName = "AEmpty";
Ce.PRESENTED_IMAGE_DEFAULT = fr;
Ce.PRESENTED_IMAGE_SIMPLE = sr;
Ce.inheritAttrs = !1;
Ce.props = {
  prefixCls: String,
  image: dt.any,
  description: dt.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const Se = Jn(Ce);
var Va = function(t) {
  var n = de("empty", t), r = n.prefixCls, a = function(c) {
    switch (c) {
      case "Table":
      case "List":
        return m(Se, {
          image: Se.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return m(Se, {
          image: Se.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(r.value, "-small")
        }, null);
      default:
        return m(Se, null, null);
    }
  };
  return a(t.componentName);
};
function dr(e) {
  return m(Va, {
    componentName: e
  }, null);
}
var nn = {};
function Wa(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Ua(e, t, n) {
  !t && !nn[n] && (e(!1, n), nn[n] = !0);
}
function pr(e, t) {
  Ua(Wa, e, t);
}
const Ya = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  pr(e, "[antdv: ".concat(t, "] ").concat(n));
};
var pt = "internalMark", ze = K({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function(t, n) {
    var r = n.slots;
    Ya(t.ANT_MARK__ === pt, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = fe({
      antLocale: j(j({}, t.locale), {
        exist: !0
      }),
      ANT_MARK__: pt
    });
    return _t("localeData", a), je(function() {
      return t.locale;
    }, function() {
      a.antLocale = j(j({}, t.locale), {
        exist: !0
      });
    }, {
      immediate: !0
    }), function() {
      var o;
      return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
    };
  }
});
ze.install = function(e) {
  return e.component(ze.name, ze), e;
};
const qa = Jn(ze);
ha("bottomLeft", "bottomRight", "topLeft", "topRight");
var Ja = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = j(t ? {
    name: t,
    appear: !0,
    appearActiveClass: "".concat(t),
    appearToClass: "".concat(t, "-appear ").concat(t, "-appear-active"),
    enterFromClass: "".concat(t, "-appear ").concat(t, "-enter ").concat(t, "-appear-prepare ").concat(t, "-enter-prepare"),
    enterActiveClass: "".concat(t),
    enterToClass: "".concat(t, "-enter ").concat(t, "-appear ").concat(t, "-appear-active ").concat(t, "-enter-active"),
    leaveActiveClass: "".concat(t, " ").concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
};
const Qa = K({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(t, n) {
    var r = n.attrs, a = n.slots, o, c = L(function() {
      return t.duration === void 0 ? 1.5 : t.duration;
    }), i = function() {
      c.value && (o = setTimeout(function() {
        s();
      }, c.value * 1e3));
    }, u = function() {
      o && (clearTimeout(o), o = null);
    }, s = function(d) {
      d && d.stopPropagation(), u();
      var v = t.onClose, y = t.noticeKey;
      v && v(y);
    }, f = function() {
      u(), i();
    };
    return qe(function() {
      i();
    }), Wr(function() {
      u();
    }), je([c, function() {
      return t.updateMark;
    }, function() {
      return t.visible;
    }], function(l, d) {
      var v = qt(l, 3), y = v[0], w = v[1], T = v[2], k = qt(d, 3), O = k[0], I = k[1], M = k[2];
      (y !== O || w !== I || T !== M && M) && f();
    }, {
      flush: "post"
    }), function() {
      var l, d, v = t.prefixCls, y = t.closable, w = t.closeIcon, T = w === void 0 ? (l = a.closeIcon) === null || l === void 0 ? void 0 : l.call(a) : w, k = t.onClick, O = t.holder, I = r.class, M = r.style, A = "".concat(v, "-notice"), g = Object.keys(r).reduce(function(P, E) {
        return (E.substr(0, 5) === "data-" || E.substr(0, 5) === "aria-" || E === "role") && (P[E] = r[E]), P;
      }, {}), b = m("div", X({
        class: Ie(A, I, F({}, "".concat(A, "-closable"), y)),
        style: M,
        onMouseenter: u,
        onMouseleave: i,
        onClick: k
      }, g), [m("div", {
        class: "".concat(A, "-content")
      }, [(d = a.default) === null || d === void 0 ? void 0 : d.call(a)]), y ? m("a", {
        tabindex: 0,
        onClick: s,
        class: "".concat(A, "-close")
      }, [T || m("span", {
        class: "".concat(A, "-close-x")
      }, null)]) : null]);
      return O ? m(Ur, {
        to: O
      }, {
        default: function() {
          return b;
        }
      }) : b;
    };
  }
});
var Za = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, rn = 0, Xa = Date.now();
function an() {
  var e = rn;
  return rn += 1, "rcNotification_".concat(Xa, "_").concat(e);
}
var vt = K({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(t, n) {
    var r = n.attrs, a = n.expose, o = n.slots, c = /* @__PURE__ */ new Map(), i = ge([]), u = L(function() {
      var l = t.prefixCls, d = t.animation, v = d === void 0 ? "fade" : d, y = t.transitionName;
      return !y && v && (y = "".concat(l, "-").concat(v)), Ja(y);
    }), s = function(d, v) {
      var y = d.key || an(), w = j(j({}, d), {
        key: y
      }), T = t.maxCount, k = i.value.map(function(I) {
        return I.notice.key;
      }).indexOf(y), O = i.value.concat();
      k !== -1 ? O.splice(k, 1, {
        notice: w,
        holderCallback: v
      }) : (T && i.value.length >= T && (w.key = O[0].notice.key, w.updateMark = an(), w.userPassKey = y, O.shift()), O.push({
        notice: w,
        holderCallback: v
      })), i.value = O;
    }, f = function(d) {
      i.value = i.value.filter(function(v) {
        var y = v.notice, w = y.key, T = y.userPassKey, k = T || w;
        return k !== d;
      });
    };
    return a({
      add: s,
      remove: f,
      notices: i
    }), function() {
      var l, d, v = t.prefixCls, y = t.closeIcon, w = y === void 0 ? (d = o.closeIcon) === null || d === void 0 ? void 0 : d.call(o, {
        prefixCls: v
      }) : y, T = i.value.map(function(O, I) {
        var M = O.notice, A = O.holderCallback, g = I === i.value.length - 1 ? M.updateMark : void 0, b = M.key, P = M.userPassKey, E = M.content, R = j(j(j({
          prefixCls: v,
          closeIcon: typeof w == "function" ? w({
            prefixCls: v
          }) : w
        }, M), M.props), {
          key: b,
          noticeKey: P || b,
          updateMark: g,
          onClose: function(J) {
            var h;
            f(J), (h = M.onClose) === null || h === void 0 || h.call(M);
          },
          onClick: M.onClick
        });
        return A ? m("div", {
          key: b,
          class: "".concat(v, "-hook-holder"),
          ref: function(J) {
            typeof b > "u" || (J ? (c.set(b, J), A(J, R)) : c.delete(b));
          }
        }, null) : m(Qa, R, {
          default: function() {
            return [typeof E == "function" ? E({
              prefixCls: v
            }) : E];
          }
        });
      }), k = (l = {}, F(l, v, 1), F(l, r.class, !!r.class), l);
      return m("div", {
        class: k,
        style: r.style || {
          top: "65px",
          left: "50%"
        }
      }, [m(Yr, X({
        tag: "div"
      }, u.value), {
        default: function() {
          return [T];
        }
      })]);
    };
  }
});
vt.newInstance = function(t, n) {
  var r = t || {}, a = r.name, o = a === void 0 ? "notification" : a, c = r.getContainer, i = r.appContext, u = r.prefixCls, s = r.rootPrefixCls, f = r.transitionName, l = r.hasTransitionName, d = Za(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"]), v = document.createElement("div");
  if (c) {
    var y = c();
    y.appendChild(v);
  } else
    document.body.appendChild(v);
  var w = K({
    name: "NotificationWrapper",
    setup: function(O, I) {
      var M = I.attrs, A = ge();
      return qe(function() {
        n({
          notice: function(b) {
            var P;
            (P = A.value) === null || P === void 0 || P.add(b);
          },
          removeNotice: function(b) {
            var P;
            (P = A.value) === null || P === void 0 || P.remove(b);
          },
          destroy: function() {
            Wt(null, v), v.parentNode && v.parentNode.removeChild(v);
          },
          component: A
        });
      }), function() {
        var g = Q, b = g.getPrefixCls(o, u), P = g.getRootPrefixCls(s, b), E = l ? f : "".concat(P, "-").concat(f);
        return m(Ee, X(X({}, g), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: P
        }), {
          default: function() {
            return [m(vt, X(X({
              ref: A
            }, M), {}, {
              prefixCls: b,
              transitionName: E
            }), null)];
          }
        });
      };
    }
  }), T = m(w, d);
  T.appContext = i || T.appContext, Wt(T, v);
};
const vr = vt;
var Ka = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const eo = Ka;
function B(e, t) {
  to(e) && (e = "100%");
  var n = no(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ne(e) {
  return Math.min(1, Math.max(0, e));
}
function to(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function no(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function hr(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Le(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function le(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ro(e, t, n) {
  return {
    r: B(e, 255) * 255,
    g: B(t, 255) * 255,
    b: B(n, 255) * 255
  };
}
function on(e, t, n) {
  e = B(e, 255), t = B(t, 255), n = B(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, c = 0, i = (r + a) / 2;
  if (r === a)
    c = 0, o = 0;
  else {
    var u = r - a;
    switch (c = i > 0.5 ? u / (2 - r - a) : u / (r + a), r) {
      case e:
        o = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / u + 2;
        break;
      case n:
        o = (e - t) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: c, l: i };
}
function Xe(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ao(e, t, n) {
  var r, a, o;
  if (e = B(e, 360), t = B(t, 100), n = B(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var c = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - c;
    r = Xe(i, c, e + 1 / 3), a = Xe(i, c, e), o = Xe(i, c, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function ht(e, t, n) {
  e = B(e, 255), t = B(t, 255), n = B(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, c = r, i = r - a, u = r === 0 ? 0 : i / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / i + 2;
        break;
      case n:
        o = (e - t) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: c };
}
function oo(e, t, n) {
  e = B(e, 360) * 6, t = B(t, 100), n = B(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), c = n * (1 - a * t), i = n * (1 - (1 - a) * t), u = r % 6, s = [n, c, o, o, i, n][u], f = [i, n, n, c, o, o][u], l = [o, o, i, n, n, c][u];
  return { r: s * 255, g: f * 255, b: l * 255 };
}
function gt(e, t, n, r) {
  var a = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function io(e, t, n, r, a) {
  var o = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16)),
    le(co(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function co(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function cn(e) {
  return Y(e) / 255;
}
function Y(e) {
  return parseInt(e, 16);
}
function lo(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var mt = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function pe(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, c = !1, i = !1;
  return typeof e == "string" && (e = so(e)), typeof e == "object" && (ae(e.r) && ae(e.g) && ae(e.b) ? (t = ro(e.r, e.g, e.b), c = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ae(e.h) && ae(e.s) && ae(e.v) ? (r = Le(e.s), a = Le(e.v), t = oo(e.h, r, a), c = !0, i = "hsv") : ae(e.h) && ae(e.s) && ae(e.l) && (r = Le(e.s), o = Le(e.l), t = ao(e.h, r, o), c = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = hr(n), {
    ok: c,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var uo = "[-\\+]?\\d+%?", fo = "[-\\+]?\\d*\\.\\d+%?", ie = "(?:".concat(fo, ")|(?:").concat(uo, ")"), Ke = "[\\s|\\(]+(".concat(ie, ")[,|\\s]+(").concat(ie, ")[,|\\s]+(").concat(ie, ")\\s*\\)?"), et = "[\\s|\\(]+(".concat(ie, ")[,|\\s]+(").concat(ie, ")[,|\\s]+(").concat(ie, ")[,|\\s]+(").concat(ie, ")\\s*\\)?"), Z = {
  CSS_UNIT: new RegExp(ie),
  rgb: new RegExp("rgb" + Ke),
  rgba: new RegExp("rgba" + et),
  hsl: new RegExp("hsl" + Ke),
  hsla: new RegExp("hsla" + et),
  hsv: new RegExp("hsv" + Ke),
  hsva: new RegExp("hsva" + et),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function so(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (mt[e])
    e = mt[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Z.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Z.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Z.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Z.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Z.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Z.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Z.hex8.exec(e), n ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    a: cn(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Z.hex6.exec(e), n ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    format: t ? "name" : "hex"
  } : (n = Z.hex4.exec(e), n ? {
    r: Y(n[1] + n[1]),
    g: Y(n[2] + n[2]),
    b: Y(n[3] + n[3]),
    a: cn(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Z.hex3.exec(e), n ? {
    r: Y(n[1] + n[1]),
    g: Y(n[2] + n[2]),
    b: Y(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function ae(e) {
  return Boolean(Z.CSS_UNIT.exec(String(e)));
}
var tt = function() {
  function e(t, n) {
    t === void 0 && (t = ""), n === void 0 && (n = {});
    var r;
    if (t instanceof e)
      return t;
    typeof t == "number" && (t = lo(t)), this.originalInput = t;
    var a = pe(t);
    this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
  }
  return e.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, e.prototype.isLight = function() {
    return !this.isDark();
  }, e.prototype.getBrightness = function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }, e.prototype.getLuminance = function() {
    var t = this.toRgb(), n, r, a, o = t.r / 255, c = t.g / 255, i = t.b / 255;
    return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), c <= 0.03928 ? r = c / 12.92 : r = Math.pow((c + 0.055) / 1.055, 2.4), i <= 0.03928 ? a = i / 12.92 : a = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }, e.prototype.getAlpha = function() {
    return this.a;
  }, e.prototype.setAlpha = function(t) {
    return this.a = hr(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var t = ht(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var t = ht(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var t = on(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var t = on(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(t) {
    return t === void 0 && (t = !1), gt(this.r, this.g, this.b, t);
  }, e.prototype.toHexString = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex(t);
  }, e.prototype.toHex8 = function(t) {
    return t === void 0 && (t = !1), io(this.r, this.g, this.b, this.a, t);
  }, e.prototype.toHex8String = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex8(t);
  }, e.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, e.prototype.toRgbString = function() {
    var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
  }, e.prototype.toPercentageRgb = function() {
    var t = function(n) {
      return "".concat(Math.round(B(n, 255) * 100), "%");
    };
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var t = function(n) {
      return Math.round(B(n, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var t = "#" + gt(this.r, this.g, this.b, !1), n = 0, r = Object.entries(mt); n < r.length; n++) {
      var a = r[n], o = a[0], c = a[1];
      if (t === c)
        return o;
    }
    return !1;
  }, e.prototype.toString = function(t) {
    var n = Boolean(t);
    t = t != null ? t : this.format;
    var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
    return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  }, e.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, e.prototype.clone = function() {
    return new e(this.toString());
  }, e.prototype.lighten = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.l += t / 100, n.l = Ne(n.l), new e(n);
  }, e.prototype.brighten = function(t) {
    t === void 0 && (t = 10);
    var n = this.toRgb();
    return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
  }, e.prototype.darken = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.l -= t / 100, n.l = Ne(n.l), new e(n);
  }, e.prototype.tint = function(t) {
    return t === void 0 && (t = 10), this.mix("white", t);
  }, e.prototype.shade = function(t) {
    return t === void 0 && (t = 10), this.mix("black", t);
  }, e.prototype.desaturate = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.s -= t / 100, n.s = Ne(n.s), new e(n);
  }, e.prototype.saturate = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.s += t / 100, n.s = Ne(n.s), new e(n);
  }, e.prototype.greyscale = function() {
    return this.desaturate(100);
  }, e.prototype.spin = function(t) {
    var n = this.toHsl(), r = (n.h + t) % 360;
    return n.h = r < 0 ? 360 + r : r, new e(n);
  }, e.prototype.mix = function(t, n) {
    n === void 0 && (n = 50);
    var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, c = {
      r: (a.r - r.r) * o + r.r,
      g: (a.g - r.g) * o + r.g,
      b: (a.b - r.b) * o + r.b,
      a: (a.a - r.a) * o + r.a
    };
    return new e(c);
  }, e.prototype.analogous = function(t, n) {
    t === void 0 && (t = 6), n === void 0 && (n = 30);
    var r = this.toHsl(), a = 360 / n, o = [this];
    for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
      r.h = (r.h + a) % 360, o.push(new e(r));
    return o;
  }, e.prototype.complement = function() {
    var t = this.toHsl();
    return t.h = (t.h + 180) % 360, new e(t);
  }, e.prototype.monochromatic = function(t) {
    t === void 0 && (t = 6);
    for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, c = [], i = 1 / t; t--; )
      c.push(new e({ h: r, s: a, v: o })), o = (o + i) % 1;
    return c;
  }, e.prototype.splitcomplement = function() {
    var t = this.toHsl(), n = t.h;
    return [
      this,
      new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
      new e({ h: (n + 216) % 360, s: t.s, l: t.l })
    ];
  }, e.prototype.onBackground = function(t) {
    var n = this.toRgb(), r = new e(t).toRgb();
    return new e({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    });
  }, e.prototype.triad = function() {
    return this.polyad(3);
  }, e.prototype.tetrad = function() {
    return this.polyad(4);
  }, e.prototype.polyad = function(t) {
    for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, c = 1; c < t; c++)
      a.push(new e({ h: (r + c * o) % 360, s: n.s, l: n.l }));
    return a;
  }, e.prototype.equals = function(t) {
    return this.toRgbString() === new e(t).toRgbString();
  }, e;
}(), Fe = 2, ln = 0.16, po = 0.05, vo = 0.05, ho = 0.15, gr = 5, mr = 4, go = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function un(e) {
  var t = e.r, n = e.g, r = e.b, a = ht(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Re(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(gt(t, n, r, !1));
}
function mo(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function fn(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Fe * t : Math.round(e.h) + Fe * t : r = n ? Math.round(e.h) + Fe * t : Math.round(e.h) - Fe * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function sn(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - ln * t : t === mr ? r = e.s + ln : r = e.s + po * t, r > 1 && (r = 1), n && t === gr && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function dn(e, t, n) {
  var r;
  return n ? r = e.v + vo * t : r = e.v - ho * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Me(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = pe(e), a = gr; a > 0; a -= 1) {
    var o = un(r), c = Re(pe({
      h: fn(o, a, !0),
      s: sn(o, a, !0),
      v: dn(o, a, !0)
    }));
    n.push(c);
  }
  n.push(Re(r));
  for (var i = 1; i <= mr; i += 1) {
    var u = un(r), s = Re(pe({
      h: fn(u, i),
      s: sn(u, i),
      v: dn(u, i)
    }));
    n.push(s);
  }
  return t.theme === "dark" ? go.map(function(f) {
    var l = f.index, d = f.opacity, v = Re(mo(pe(t.backgroundColor || "#141414"), pe(n[l]), d * 100));
    return v;
  }) : n;
}
var nt = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, rt = {}, at = {};
Object.keys(nt).forEach(function(e) {
  rt[e] = Me(nt[e]), rt[e].primary = rt[e][5], at[e] = Me(nt[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), at[e].primary = at[e][5];
});
var pn = [], Pe = [], yo = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function bo() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function Co(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(yo);
  var n = t.prepend === !0 ? "prepend" : "append", r = t.container !== void 0 ? t.container : document.querySelector("head"), a = pn.indexOf(r);
  a === -1 && (a = pn.push(r) - 1, Pe[a] = {});
  var o;
  return Pe[a] !== void 0 && Pe[a][n] !== void 0 ? o = Pe[a][n] : (o = Pe[a][n] = bo(), n === "prepend" ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), o.styleSheet ? o.styleSheet.cssText += e : o.textContent += e, o;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      xo(e, a, n[a]);
    });
  }
  return e;
}
function xo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oo(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function wo(e, t) {
  Oo(e, "[@ant-design/icons-vue] ".concat(t));
}
function hn(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function yt(e, t, n) {
  return n ? Ut(e.tag, vn({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, a) {
    return yt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : Ut(e.tag, vn({
    key: t
  }, e.attrs), (e.children || []).map(function(r, a) {
    return yt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function yr(e) {
  return Me(e)[0];
}
function br(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var So = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, gn = !1, Po = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : So;
  Et(function() {
    gn || (typeof window < "u" && window.document && window.document.documentElement && Co(t, {
      prepend: !0
    }), gn = !0);
  });
}, To = ["icon", "primaryColor", "secondaryColor"];
function _o(e, t) {
  if (e == null)
    return {};
  var n = Eo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Eo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ao(e, a, n[a]);
    });
  }
  return e;
}
function Ao(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _e = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function jo(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  _e.primaryColor = t, _e.secondaryColor = n || yr(t), _e.calculated = !!n;
}
function ko() {
  return Ge({}, _e);
}
var xe = function(t, n) {
  var r = Ge({}, t, n.attrs), a = r.icon, o = r.primaryColor, c = r.secondaryColor, i = _o(r, To), u = _e;
  if (o && (u = {
    primaryColor: o,
    secondaryColor: c || yr(o)
  }), Po(), wo(hn(a), "icon should be icon definiton, but got ".concat(a)), !hn(a))
    return null;
  var s = a;
  return s && typeof s.icon == "function" && (s = Ge({}, s, {
    icon: s.icon(u.primaryColor, u.secondaryColor)
  })), yt(s.icon, "svg-".concat(s.name), Ge({}, i, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
xe.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
xe.inheritAttrs = !1;
xe.displayName = "IconBase";
xe.getTwoToneColors = ko;
xe.setTwoToneColors = jo;
const kt = xe;
function Mo(e, t) {
  return Lo(e) || No(e, t) || Io(e, t) || $o();
}
function $o() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Io(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return mn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return mn(e, t);
  }
}
function mn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function No(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, c, i;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Lo(e) {
  if (Array.isArray(e))
    return e;
}
function Cr(e) {
  var t = br(e), n = Mo(t, 2), r = n[0], a = n[1];
  return kt.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Fo() {
  var e = kt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ro = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Do(e, t) {
  return Go(e) || zo(e, t) || Ho(e, t) || Bo();
}
function Bo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return yn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return yn(e, t);
  }
}
function yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function zo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, c, i;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Go(e) {
  if (Array.isArray(e))
    return e;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      bt(e, a, n[a]);
    });
  }
  return e;
}
function bt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vo(e, t) {
  if (e == null)
    return {};
  var n = Wo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Wo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
Cr("#1890ff");
var Oe = function(t, n) {
  var r, a = bn({}, t, n.attrs), o = a.class, c = a.icon, i = a.spin, u = a.rotate, s = a.tabindex, f = a.twoToneColor, l = a.onClick, d = Vo(a, Ro), v = (r = {
    anticon: !0
  }, bt(r, "anticon-".concat(c.name), Boolean(c.name)), bt(r, o, o), r), y = i === "" || !!i || c.name === "loading" ? "anticon-spin" : "", w = s;
  w === void 0 && l && (w = -1, d.tabindex = w);
  var T = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, k = br(f), O = Do(k, 2), I = O[0], M = O[1];
  return m("span", bn({
    role: "img",
    "aria-label": c.name
  }, d, {
    onClick: l,
    class: v
  }), [m(kt, {
    class: y,
    icon: c,
    primaryColor: I,
    secondaryColor: M,
    style: T
  }, null)]);
};
Oe.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Oe.displayName = "AntdIcon";
Oe.inheritAttrs = !1;
Oe.getTwoToneColor = Fo;
Oe.setTwoToneColor = Cr;
const re = Oe;
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Uo(e, a, n[a]);
    });
  }
  return e;
}
function Uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mt = function(t, n) {
  var r = Cn({}, t, n.attrs);
  return m(re, Cn({}, r, {
    icon: eo
  }), null);
};
Mt.displayName = "LoadingOutlined";
Mt.inheritAttrs = !1;
const Ct = Mt;
var Yo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const qo = Yo;
function xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Jo(e, a, n[a]);
    });
  }
  return e;
}
function Jo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $t = function(t, n) {
  var r = xn({}, t, n.attrs);
  return m(re, xn({}, r, {
    icon: qo
  }), null);
};
$t.displayName = "ExclamationCircleFilled";
$t.inheritAttrs = !1;
const Qo = $t;
var Zo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Xo = Zo;
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ko(e, a, n[a]);
    });
  }
  return e;
}
function Ko(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var It = function(t, n) {
  var r = On({}, t, n.attrs);
  return m(re, On({}, r, {
    icon: Xo
  }), null);
};
It.displayName = "CloseCircleFilled";
It.inheritAttrs = !1;
const ei = It;
var ti = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const ni = ti;
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ri(e, a, n[a]);
    });
  }
  return e;
}
function ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nt = function(t, n) {
  var r = wn({}, t, n.attrs);
  return m(re, wn({}, r, {
    icon: ni
  }), null);
};
Nt.displayName = "CheckCircleFilled";
Nt.inheritAttrs = !1;
const ai = Nt;
var oi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const ii = oi;
function Sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ci(e, a, n[a]);
    });
  }
  return e;
}
function ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lt = function(t, n) {
  var r = Sn({}, t, n.attrs);
  return m(re, Sn({}, r, {
    icon: ii
  }), null);
};
Lt.displayName = "InfoCircleFilled";
Lt.inheritAttrs = !1;
const li = Lt;
var xr = 3, Or, z, ui = 1, wr = "", Sr = "move-up", Pr = !1, Tr = function() {
  return document.body;
}, _r, Er = !1;
function fi() {
  return ui++;
}
function si(e) {
  e.top !== void 0 && (Or = e.top, z = null), e.duration !== void 0 && (xr = e.duration), e.prefixCls !== void 0 && (wr = e.prefixCls), e.getContainer !== void 0 && (Tr = e.getContainer, z = null), e.transitionName !== void 0 && (Sr = e.transitionName, z = null, Pr = !0), e.maxCount !== void 0 && (_r = e.maxCount, z = null), e.rtl !== void 0 && (Er = e.rtl);
}
function di(e, t) {
  if (z) {
    t(z);
    return;
  }
  vr.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || wr,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Sr,
    hasTransitionName: Pr,
    style: {
      top: Or
    },
    getContainer: Tr || e.getPopupContainer,
    maxCount: _r,
    name: "message"
  }, function(n) {
    if (z) {
      t(z);
      return;
    }
    z = n, t(n);
  });
}
var pi = {
  info: li,
  success: ai,
  error: ei,
  warning: Qo,
  loading: Ct
};
function vi(e) {
  var t = e.duration !== void 0 ? e.duration : xr, n = e.key || fi(), r = new Promise(function(o) {
    var c = function() {
      return typeof e.onClose == "function" && e.onClose(), o(!0);
    };
    di(e, function(i) {
      i.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: function(s) {
          var f, l = s.prefixCls, d = pi[e.type], v = d ? m(d, null, null) : "", y = Ie("".concat(l, "-custom-content"), (f = {}, F(f, "".concat(l, "-").concat(e.type), e.type), F(f, "".concat(l, "-rtl"), Er === !0), f));
          return m("div", {
            class: y
          }, [typeof e.icon == "function" ? e.icon() : e.icon || v, m("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: c,
        onClick: e.onClick
      });
    });
  }), a = function() {
    z && z.removeNotice(n);
  };
  return a.then = function(o, c) {
    return r.then(o, c);
  }, a.promise = r, a;
}
function hi(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var Ye = {
  open: vi,
  config: si,
  destroy: function(t) {
    if (z)
      if (t) {
        var n = z, r = n.removeNotice;
        r(t);
      } else {
        var a = z, o = a.destroy;
        o(), z = null;
      }
  }
};
function gi(e, t) {
  e[t] = function(n, r, a) {
    return hi(n) ? e.open(j(j({}, n), {
      type: t
    })) : (typeof r == "function" && (a = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  return gi(Ye, e);
});
Ye.warn = Ye.warning;
const mi = Ye;
var Ar = { exports: {} }, jr = { exports: {} };
(function(e) {
  function t(n) {
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(jr);
(function(e) {
  var t = jr.exports.default;
  function n() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    e.exports = n = function() {
      return r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports;
    var r = {}, a = Object.prototype, o = a.hasOwnProperty, c = typeof Symbol == "function" ? Symbol : {}, i = c.iterator || "@@iterator", u = c.asyncIterator || "@@asyncIterator", s = c.toStringTag || "@@toStringTag";
    function f(h, p, C) {
      return Object.defineProperty(h, p, {
        value: C,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), h[p];
    }
    try {
      f({}, "");
    } catch {
      f = function(C, x, S) {
        return C[x] = S;
      };
    }
    function l(h, p, C, x) {
      var S = p && p.prototype instanceof y ? p : y, _ = Object.create(S.prototype), N = new R(x || []);
      return _._invoke = function(G, W, $) {
        var D = "suspendedStart";
        return function(ee, Gt) {
          if (D === "executing")
            throw new Error("Generator is already running");
          if (D === "completed") {
            if (ee === "throw")
              throw Gt;
            return J();
          }
          for ($.method = ee, $.arg = Gt; ; ) {
            var Vt = $.delegate;
            if (Vt) {
              var Ze = b(Vt, $);
              if (Ze) {
                if (Ze === v)
                  continue;
                return Ze;
              }
            }
            if ($.method === "next")
              $.sent = $._sent = $.arg;
            else if ($.method === "throw") {
              if (D === "suspendedStart")
                throw D = "completed", $.arg;
              $.dispatchException($.arg);
            } else
              $.method === "return" && $.abrupt("return", $.arg);
            D = "executing";
            var we = d(G, W, $);
            if (we.type === "normal") {
              if (D = $.done ? "completed" : "suspendedYield", we.arg === v)
                continue;
              return {
                value: we.arg,
                done: $.done
              };
            }
            we.type === "throw" && (D = "completed", $.method = "throw", $.arg = we.arg);
          }
        };
      }(h, C, N), _;
    }
    function d(h, p, C) {
      try {
        return {
          type: "normal",
          arg: h.call(p, C)
        };
      } catch (x) {
        return {
          type: "throw",
          arg: x
        };
      }
    }
    r.wrap = l;
    var v = {};
    function y() {
    }
    function w() {
    }
    function T() {
    }
    var k = {};
    f(k, i, function() {
      return this;
    });
    var O = Object.getPrototypeOf, I = O && O(O(V([])));
    I && I !== a && o.call(I, i) && (k = I);
    var M = T.prototype = y.prototype = Object.create(k);
    function A(h) {
      ["next", "throw", "return"].forEach(function(p) {
        f(h, p, function(C) {
          return this._invoke(p, C);
        });
      });
    }
    function g(h, p) {
      function C(S, _, N, G) {
        var W = d(h[S], h, _);
        if (W.type !== "throw") {
          var $ = W.arg, D = $.value;
          return D && t(D) == "object" && o.call(D, "__await") ? p.resolve(D.__await).then(function(ee) {
            C("next", ee, N, G);
          }, function(ee) {
            C("throw", ee, N, G);
          }) : p.resolve(D).then(function(ee) {
            $.value = ee, N($);
          }, function(ee) {
            return C("throw", ee, N, G);
          });
        }
        G(W.arg);
      }
      var x;
      this._invoke = function(S, _) {
        function N() {
          return new p(function(G, W) {
            C(S, _, G, W);
          });
        }
        return x = x ? x.then(N, N) : N();
      };
    }
    function b(h, p) {
      var C = h.iterator[p.method];
      if (C === void 0) {
        if (p.delegate = null, p.method === "throw") {
          if (h.iterator.return && (p.method = "return", p.arg = void 0, b(h, p), p.method === "throw"))
            return v;
          p.method = "throw", p.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return v;
      }
      var x = d(C, h.iterator, p.arg);
      if (x.type === "throw")
        return p.method = "throw", p.arg = x.arg, p.delegate = null, v;
      var S = x.arg;
      return S ? S.done ? (p[h.resultName] = S.value, p.next = h.nextLoc, p.method !== "return" && (p.method = "next", p.arg = void 0), p.delegate = null, v) : S : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, v);
    }
    function P(h) {
      var p = {
        tryLoc: h[0]
      };
      1 in h && (p.catchLoc = h[1]), 2 in h && (p.finallyLoc = h[2], p.afterLoc = h[3]), this.tryEntries.push(p);
    }
    function E(h) {
      var p = h.completion || {};
      p.type = "normal", delete p.arg, h.completion = p;
    }
    function R(h) {
      this.tryEntries = [{
        tryLoc: "root"
      }], h.forEach(P, this), this.reset(!0);
    }
    function V(h) {
      if (h) {
        var p = h[i];
        if (p)
          return p.call(h);
        if (typeof h.next == "function")
          return h;
        if (!isNaN(h.length)) {
          var C = -1, x = function S() {
            for (; ++C < h.length; )
              if (o.call(h, C))
                return S.value = h[C], S.done = !1, S;
            return S.value = void 0, S.done = !0, S;
          };
          return x.next = x;
        }
      }
      return {
        next: J
      };
    }
    function J() {
      return {
        value: void 0,
        done: !0
      };
    }
    return w.prototype = T, f(M, "constructor", T), f(T, "constructor", w), w.displayName = f(T, s, "GeneratorFunction"), r.isGeneratorFunction = function(h) {
      var p = typeof h == "function" && h.constructor;
      return !!p && (p === w || (p.displayName || p.name) === "GeneratorFunction");
    }, r.mark = function(h) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(h, T) : (h.__proto__ = T, f(h, s, "GeneratorFunction")), h.prototype = Object.create(M), h;
    }, r.awrap = function(h) {
      return {
        __await: h
      };
    }, A(g.prototype), f(g.prototype, u, function() {
      return this;
    }), r.AsyncIterator = g, r.async = function(h, p, C, x, S) {
      S === void 0 && (S = Promise);
      var _ = new g(l(h, p, C, x), S);
      return r.isGeneratorFunction(p) ? _ : _.next().then(function(N) {
        return N.done ? N.value : _.next();
      });
    }, A(M), f(M, s, "Generator"), f(M, i, function() {
      return this;
    }), f(M, "toString", function() {
      return "[object Generator]";
    }), r.keys = function(h) {
      var p = [];
      for (var C in h)
        p.push(C);
      return p.reverse(), function x() {
        for (; p.length; ) {
          var S = p.pop();
          if (S in h)
            return x.value = S, x.done = !1, x;
        }
        return x.done = !0, x;
      };
    }, r.values = V, R.prototype = {
      constructor: R,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !p)
          for (var C in this)
            C.charAt(0) === "t" && o.call(this, C) && !isNaN(+C.slice(1)) && (this[C] = void 0);
      },
      stop: function() {
        this.done = !0;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw")
          throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done)
          throw p;
        var C = this;
        function x($, D) {
          return N.type = "throw", N.arg = p, C.next = $, D && (C.method = "next", C.arg = void 0), !!D;
        }
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var _ = this.tryEntries[S], N = _.completion;
          if (_.tryLoc === "root")
            return x("end");
          if (_.tryLoc <= this.prev) {
            var G = o.call(_, "catchLoc"), W = o.call(_, "finallyLoc");
            if (G && W) {
              if (this.prev < _.catchLoc)
                return x(_.catchLoc, !0);
              if (this.prev < _.finallyLoc)
                return x(_.finallyLoc);
            } else if (G) {
              if (this.prev < _.catchLoc)
                return x(_.catchLoc, !0);
            } else {
              if (!W)
                throw new Error("try statement without catch or finally");
              if (this.prev < _.finallyLoc)
                return x(_.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, C) {
        for (var x = this.tryEntries.length - 1; x >= 0; --x) {
          var S = this.tryEntries[x];
          if (S.tryLoc <= this.prev && o.call(S, "finallyLoc") && this.prev < S.finallyLoc) {
            var _ = S;
            break;
          }
        }
        _ && (p === "break" || p === "continue") && _.tryLoc <= C && C <= _.finallyLoc && (_ = null);
        var N = _ ? _.completion : {};
        return N.type = p, N.arg = C, _ ? (this.method = "next", this.next = _.finallyLoc, v) : this.complete(N);
      },
      complete: function(p, C) {
        if (p.type === "throw")
          throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && C && (this.next = C), v;
      },
      finish: function(p) {
        for (var C = this.tryEntries.length - 1; C >= 0; --C) {
          var x = this.tryEntries[C];
          if (x.finallyLoc === p)
            return this.complete(x.completion, x.afterLoc), E(x), v;
        }
      },
      catch: function(p) {
        for (var C = this.tryEntries.length - 1; C >= 0; --C) {
          var x = this.tryEntries[C];
          if (x.tryLoc === p) {
            var S = x.completion;
            if (S.type === "throw") {
              var _ = S.arg;
              E(x);
            }
            return _;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(p, C, x) {
        return this.delegate = {
          iterator: V(p),
          resultName: C,
          nextLoc: x
        }, this.method === "next" && (this.arg = void 0), v;
      }
    }, r;
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ar);
var ot = Ar.exports();
try {
  regeneratorRuntime = ot;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = ot : Function("r", "regeneratorRuntime = r")(ot);
}
var yi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const bi = yi;
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ci(e, a, n[a]);
    });
  }
  return e;
}
function Ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ft = function(t, n) {
  var r = Pn({}, t, n.attrs);
  return m(re, Pn({}, r, {
    icon: bi
  }), null);
};
Ft.displayName = "CheckCircleOutlined";
Ft.inheritAttrs = !1;
const xi = Ft;
var Oi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const wi = Oi;
function Tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Si(e, a, n[a]);
    });
  }
  return e;
}
function Si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rt = function(t, n) {
  var r = Tn({}, t, n.attrs);
  return m(re, Tn({}, r, {
    icon: wi
  }), null);
};
Rt.displayName = "InfoCircleOutlined";
Rt.inheritAttrs = !1;
const Pi = Rt;
var Ti = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const _i = Ti;
function _n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Ei(e, a, n[a]);
    });
  }
  return e;
}
function Ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dt = function(t, n) {
  var r = _n({}, t, n.attrs);
  return m(re, _n({}, r, {
    icon: _i
  }), null);
};
Dt.displayName = "CloseCircleOutlined";
Dt.inheritAttrs = !1;
const Ai = Dt;
var ji = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const ki = ji;
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Mi(e, a, n[a]);
    });
  }
  return e;
}
function Mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bt = function(t, n) {
  var r = En({}, t, n.attrs);
  return m(re, En({}, r, {
    icon: ki
  }), null);
};
Bt.displayName = "ExclamationCircleOutlined";
Bt.inheritAttrs = !1;
const $i = Bt;
var Ii = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const Ni = Ii;
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Li(e, a, n[a]);
    });
  }
  return e;
}
function Li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ht = function(t, n) {
  var r = An({}, t, n.attrs);
  return m(re, An({}, r, {
    icon: Ni
  }), null);
};
Ht.displayName = "CloseOutlined";
Ht.inheritAttrs = !1;
const Fi = Ht;
globalThis && globalThis.__awaiter;
var ce = {}, kr = 4.5, Mr = "24px", $r = "24px", xt = "", Ir = "topRight", Nr = function() {
  return document.body;
}, Lr = null, Ot = !1, Fr;
function Ri(e) {
  var t = e.duration, n = e.placement, r = e.bottom, a = e.top, o = e.getContainer, c = e.closeIcon, i = e.prefixCls;
  i !== void 0 && (xt = i), t !== void 0 && (kr = t), n !== void 0 && (Ir = n), r !== void 0 && ($r = typeof r == "number" ? "".concat(r, "px") : r), a !== void 0 && (Mr = typeof a == "number" ? "".concat(a, "px") : a), o !== void 0 && (Nr = o), c !== void 0 && (Lr = c), e.rtl !== void 0 && (Ot = e.rtl), e.maxCount !== void 0 && (Fr = e.maxCount);
}
function Di(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mr, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $r, r;
  switch (e) {
    case "topLeft":
      r = {
        left: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      r = {
        left: "0px",
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: "0px",
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function Bi(e, t) {
  var n = e.prefixCls, r = e.placement, a = r === void 0 ? Ir : r, o = e.getContainer, c = o === void 0 ? Nr : o, i = e.top, u = e.bottom, s = e.closeIcon, f = s === void 0 ? Lr : s, l = e.appContext, d = tc(), v = d.getPrefixCls, y = v("notification", n || xt), w = "".concat(y, "-").concat(a, "-").concat(Ot), T = ce[w];
  if (T) {
    Promise.resolve(T).then(function(O) {
      t(O);
    });
    return;
  }
  var k = Ie("".concat(y, "-").concat(a), F({}, "".concat(y, "-rtl"), Ot === !0));
  vr.newInstance({
    name: "notification",
    prefixCls: n || xt,
    class: k,
    style: Di(a, i, u),
    appContext: l,
    getContainer: c,
    closeIcon: function(I) {
      var M = I.prefixCls, A = m("span", {
        class: "".concat(M, "-close-x")
      }, [Te(f, {}, m(Fi, {
        class: "".concat(M, "-close-icon")
      }, null))]);
      return A;
    },
    maxCount: Fr,
    hasTransitionName: !0
  }, function(O) {
    ce[w] = O, t(O);
  });
}
var Hi = {
  success: xi,
  info: Pi,
  error: Ai,
  warning: $i
};
function zi(e) {
  var t = e.icon, n = e.type, r = e.description, a = e.message, o = e.btn, c = e.duration === void 0 ? kr : e.duration;
  Bi(e, function(i) {
    i.notice({
      content: function(s) {
        var f = s.prefixCls, l = "".concat(f, "-notice"), d = null;
        if (t)
          d = function() {
            return m("span", {
              class: "".concat(l, "-icon")
            }, [Te(t)]);
          };
        else if (n) {
          var v = Hi[n];
          d = function() {
            return m(v, {
              class: "".concat(l, "-icon ").concat(l, "-icon-").concat(n)
            }, null);
          };
        }
        return m("div", {
          class: d ? "".concat(l, "-with-icon") : ""
        }, [d && d(), m("div", {
          class: "".concat(l, "-message")
        }, [!r && d ? m("span", {
          class: "".concat(l, "-message-single-line-auto-margin")
        }, null) : null, Te(a)]), m("div", {
          class: "".concat(l, "-description")
        }, [Te(r)]), o ? m("span", {
          class: "".concat(l, "-btn")
        }, [Te(o)]) : null]);
      },
      duration: c,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var $e = {
  open: zi,
  close: function(t) {
    Object.keys(ce).forEach(function(n) {
      return Promise.resolve(ce[n]).then(function(r) {
        r.removeNotice(t);
      });
    });
  },
  config: Ri,
  destroy: function() {
    Object.keys(ce).forEach(function(t) {
      Promise.resolve(ce[t]).then(function(n) {
        n.destroy();
      }), delete ce[t];
    });
  }
}, Gi = ["success", "info", "warning", "error"];
Gi.forEach(function(e) {
  $e[e] = function(t) {
    return $e.open(j(j({}, t), {
      type: e
    }));
  };
});
$e.warn = $e.warning;
const Vi = $e;
function Rr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Wi = "vc-util-key";
function Dr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Wi;
}
function zt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, r;
  if (!Rr())
    return null;
  var a = document.createElement("style");
  !((n = t.csp) === null || n === void 0) && n.nonce && (a.nonce = (r = t.csp) === null || r === void 0 ? void 0 : r.nonce), a.innerHTML = e;
  var o = zt(t), c = o.firstChild;
  return t.prepend && o.prepend ? o.prepend(a) : t.prepend && c ? o.insertBefore(a, c) : o.appendChild(a), a;
}
var wt = /* @__PURE__ */ new Map();
function Ui(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = zt(t);
  return Array.from(wt.get(n).children).find(function(r) {
    return r.tagName === "STYLE" && r.getAttribute(Dr(t)) === e;
  });
}
function Yi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, o, c = zt(n);
  if (!wt.has(c)) {
    var i = jn("", n), u = i.parentNode;
    wt.set(c, u), u.removeChild(i);
  }
  var s = Ui(t, n);
  if (s)
    return ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && s.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce) && (s.nonce = (o = n.csp) === null || o === void 0 ? void 0 : o.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  var f = jn(e, n);
  return f.setAttribute(Dr(n), t), f;
}
const Br = function(e, t, n) {
  pr(e, "[ant-design-vue: ".concat(t, "] ").concat(n));
};
var qi = "-ant-".concat(Date.now(), "-").concat(Math.random());
function Ji(e, t) {
  var n = {}, r = function(f, l) {
    var d = f.clone();
    return d = (l == null ? void 0 : l(d)) || d, d.toRgbString();
  }, a = function(f, l) {
    var d = new tt(f), v = Me(d.toRgbString());
    n["".concat(l, "-color")] = r(d), n["".concat(l, "-color-disabled")] = v[1], n["".concat(l, "-color-hover")] = v[4], n["".concat(l, "-color-active")] = v[7], n["".concat(l, "-color-outline")] = d.clone().setAlpha(0.2).toRgbString(), n["".concat(l, "-color-deprecated-bg")] = v[1], n["".concat(l, "-color-deprecated-border")] = v[3];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    var o = new tt(t.primaryColor), c = Me(o.toRgbString());
    c.forEach(function(s, f) {
      n["primary-".concat(f + 1)] = s;
    }), n["primary-color-deprecated-l-35"] = r(o, function(s) {
      return s.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(o, function(s) {
      return s.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(o, function(s) {
      return s.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(o, function(s) {
      return s.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(o, function(s) {
      return s.setAlpha(s.getAlpha() * 0.12);
    });
    var i = new tt(c[0]);
    n["primary-color-active-deprecated-f-30"] = r(i, function(s) {
      return s.setAlpha(s.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(i, function(s) {
      return s.darken(2);
    });
  }
  t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info");
  var u = Object.keys(n).map(function(s) {
    return "--".concat(e, "-").concat(s, ": ").concat(n[s], ";");
  });
  Rr() ? Yi(`
  :root {
    `.concat(u.join(`
`), `
  }
  `), "".concat(qi, "-dynamic-theme")) : Br(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var Qi = Symbol("GlobalFormContextKey"), Zi = function(t) {
  _t(Qi, t);
}, Xi = function() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: !0
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
}, Ki = "ant";
function me() {
  return Q.prefixCls || Ki;
}
var St = fe({}), Hr = fe({}), Q = fe({});
Je(function() {
  j(Q, St, Hr), Q.prefixCls = me(), Q.getPrefixCls = function(e, t) {
    return t || (e ? "".concat(Q.prefixCls, "-").concat(e) : Q.prefixCls);
  }, Q.getRootPrefixCls = function(e, t) {
    return e || (Q.prefixCls ? Q.prefixCls : t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : me());
  };
});
var it, ec = function(t) {
  it && it(), it = Je(function() {
    j(Hr, fe(t));
  }), t.theme && Ji(me(), t.theme);
}, tc = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(me(), "-").concat(n) : me());
    },
    getRootPrefixCls: function(n, r) {
      return n || (Q.prefixCls ? Q.prefixCls : r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : me());
    }
  };
}, Ee = K({
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Xi(),
  setup: function(t, n) {
    var r = n.slots, a = function(l, d) {
      var v = t.prefixCls, y = v === void 0 ? "ant" : v;
      return d || (l ? "".concat(y, "-").concat(l) : y);
    }, o = function(l) {
      var d = t.renderEmpty || r.renderEmpty || dr;
      return d(l);
    }, c = function(l, d) {
      var v = t.prefixCls;
      if (d)
        return d;
      var y = v || a("");
      return l ? "".concat(y, "-").concat(l) : y;
    }, i = fe(j(j({}, t), {
      getPrefixCls: c,
      renderEmpty: o
    }));
    Object.keys(t).forEach(function(f) {
      je(function() {
        return t[f];
      }, function() {
        i[f] = t[f];
      });
    }), t.notUpdateGlobalConfig || (j(St, i), je(i, function() {
      j(St, i);
    }));
    var u = L(function() {
      var f, l, d = {};
      return t.locale && (d = ((f = t.locale.Form) === null || f === void 0 ? void 0 : f.defaultValidateMessages) || ((l = st.Form) === null || l === void 0 ? void 0 : l.defaultValidateMessages) || {}), t.form && t.form.validateMessages && (d = j(j({}, d), t.form.validateMessages)), d;
    });
    Zi({
      validateMessages: u
    }), _t("configProvider", i);
    var s = function(l) {
      var d;
      return m(qa, {
        locale: t.locale || l,
        ANT_MARK__: pt
      }, {
        default: function() {
          return [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)];
        }
      });
    };
    return Je(function() {
      t.direction && (mi.config({
        rtl: t.direction === "rtl"
      }), Vi.config({
        rtl: t.direction === "rtl"
      }));
    }), function() {
      return m(Zn, {
        children: function(l, d, v) {
          return s(v);
        }
      }, null);
    };
  }
}), nc = fe({
  getPrefixCls: function(t, n) {
    return n || (t ? "ant-".concat(t) : "ant");
  },
  renderEmpty: dr,
  direction: "ltr"
});
Ee.config = ec;
Ee.install = function(e) {
  e.component(Ee.name, Ee);
};
const de = function(e, t) {
  var n = Hn("configProvider", nc), r = L(function() {
    return n.getPrefixCls(e, t.prefixCls);
  }), a = L(function() {
    var O;
    return (O = t.direction) !== null && O !== void 0 ? O : n.direction;
  }), o = L(function() {
    return n.getPrefixCls();
  }), c = L(function() {
    return n.autoInsertSpaceInButton;
  }), i = L(function() {
    return n.renderEmpty;
  }), u = L(function() {
    return n.space;
  }), s = L(function() {
    return n.pageHeader;
  }), f = L(function() {
    return n.form;
  }), l = L(function() {
    return t.getTargetContainer || n.getTargetContainer;
  }), d = L(function() {
    return t.getPopupContainer || n.getPopupContainer;
  }), v = L(function() {
    var O;
    return (O = t.dropdownMatchSelectWidth) !== null && O !== void 0 ? O : n.dropdownMatchSelectWidth;
  }), y = L(function() {
    return (t.virtual === void 0 ? n.virtual !== !1 : t.virtual !== !1) && v.value !== !1;
  }), w = L(function() {
    return t.size || n.componentSize;
  }), T = L(function() {
    var O;
    return t.autocomplete || ((O = n.input) === null || O === void 0 ? void 0 : O.autocomplete);
  }), k = L(function() {
    return n.csp;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: w,
    getTargetContainer: l,
    getPopupContainer: d,
    space: u,
    pageHeader: s,
    form: f,
    autoInsertSpaceInButton: c,
    renderEmpty: i,
    virtual: y,
    dropdownMatchSelectWidth: v,
    rootPrefixCls: o,
    getPrefixCls: n.getPrefixCls,
    autocomplete: T,
    csp: k
  };
};
var ct = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
}, lt = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
}, ve = [], he = [];
function rc() {
  var e = document.createElement("div"), t = e.style;
  "AnimationEvent" in window || (delete ct.animationstart.animation, delete lt.animationend.animation), "TransitionEvent" in window || (delete ct.transitionstart.transition, delete lt.transitionend.transition);
  function n(r, a) {
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = r[o];
        for (var i in c)
          if (i in t) {
            a.push(c[i]);
            break;
          }
      }
  }
  n(ct, ve), n(lt, he);
}
typeof window < "u" && typeof document < "u" && rc();
function kn(e, t, n) {
  e.addEventListener(t, n, !1);
}
function Mn(e, t, n) {
  e.removeEventListener(t, n, !1);
}
var ac = {
  startEvents: ve,
  addStartEventListener: function(t, n) {
    if (ve.length === 0) {
      setTimeout(n, 0);
      return;
    }
    ve.forEach(function(r) {
      kn(t, r, n);
    });
  },
  removeStartEventListener: function(t, n) {
    ve.length !== 0 && ve.forEach(function(r) {
      Mn(t, r, n);
    });
  },
  endEvents: he,
  addEndEventListener: function(t, n) {
    if (he.length === 0) {
      setTimeout(n, 0);
      return;
    }
    he.forEach(function(r) {
      kn(t, r, n);
    });
  },
  removeEndEventListener: function(t, n) {
    he.length !== 0 && he.forEach(function(r) {
      Mn(t, r, n);
    });
  }
};
const De = ac;
var oe;
function $n(e) {
  return process.env.NODE_ENV === "test" ? !1 : !e || e.offsetParent === null;
}
function oc(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
const ic = K({
  name: "Wave",
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function(t, n) {
    var r = n.slots, a = n.expose, o = qr(), c = de("", t), i = c.csp, u = c.prefixCls;
    a({
      csp: i
    });
    var s = null, f = null, l = null, d = !1, v = null, y = !1, w = function(g) {
      if (!y) {
        var b = Jt(o);
        !g || g.target !== b || d || I(b);
      }
    }, T = function(g) {
      !g || g.animationName !== "fadeEffect" || I(g.target);
    }, k = function() {
      var g = t.insertExtraNode;
      return g ? "".concat(u.value, "-click-animating") : "".concat(u.value, "-click-animating-without-extra-node");
    }, O = function(g, b) {
      var P, E = t.insertExtraNode, R = t.disabled;
      if (!(R || !g || $n(g) || g.className.indexOf("-leave") >= 0)) {
        v = document.createElement("div"), v.className = "".concat(u.value, "-click-animating-node");
        var V = k();
        g.removeAttribute(V), g.setAttribute(V, "true"), oe = oe || document.createElement("style"), b && b !== "#ffffff" && b !== "rgb(255, 255, 255)" && oc(b) && !/rgba\(\d*, \d*, \d*, 0\)/.test(b) && b !== "transparent" && (!((P = i.value) === null || P === void 0) && P.nonce && (oe.nonce = i.value.nonce), v.style.borderColor = b, oe.innerHTML = `
        [`.concat(u.value, "-click-animating-without-extra-node='true']::after, .").concat(u.value, `-click-animating-node {
          --antd-wave-shadow-color: `).concat(b, `;
        }`), document.body.contains(oe) || document.body.appendChild(oe)), E && g.appendChild(v), De.addStartEventListener(g, w), De.addEndEventListener(g, T);
      }
    }, I = function(g) {
      if (!(!g || g === v || !(g instanceof Element))) {
        var b = t.insertExtraNode, P = k();
        g.setAttribute(P, "false"), oe && (oe.innerHTML = ""), b && v && g.contains(v) && g.removeChild(v), De.removeStartEventListener(g, w), De.removeEndEventListener(g, T);
      }
    }, M = function(g) {
      if (!(!g || !g.getAttribute || g.getAttribute("disabled") || g.className.indexOf("disabled") >= 0)) {
        var b = function(E) {
          if (!(E.target.tagName === "INPUT" || $n(E.target))) {
            I(g);
            var R = getComputedStyle(g).getPropertyValue("border-top-color") || getComputedStyle(g).getPropertyValue("border-color") || getComputedStyle(g).getPropertyValue("background-color");
            f = setTimeout(function() {
              return O(g, R);
            }, 0), ft.cancel(l), d = !0, l = ft(function() {
              d = !1;
            }, 10);
          }
        };
        return g.addEventListener("click", b, !0), {
          cancel: function() {
            g.removeEventListener("click", b, !0);
          }
        };
      }
    };
    return qe(function() {
      Et(function() {
        var A = Jt(o);
        A.nodeType === 1 && (s = M(A));
      });
    }), zn(function() {
      s && s.cancel(), clearTimeout(f), y = !0;
    }), function() {
      var A;
      return (A = r.default) === null || A === void 0 ? void 0 : A.call(r)[0];
    };
  }
});
var cc = function() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function() {
        return !1;
      }
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: dt.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
const lc = cc;
var In = function(t) {
  t && (t.style.width = "0px", t.style.opacity = "0", t.style.transform = "scale(0)");
}, Nn = function(t) {
  Et(function() {
    t && (t.style.width = "".concat(t.scrollWidth, "px"), t.style.opacity = "1", t.style.transform = "scale(1)");
  });
}, Ln = function(t) {
  t && t.style && (t.style.width = null, t.style.opacity = null, t.style.transform = null);
};
const uc = K({
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function(t) {
    return function() {
      var n = t.existIcon, r = t.prefixCls, a = t.loading;
      if (n)
        return m("span", {
          class: "".concat(r, "-loading-icon")
        }, [m(Ct, null, null)]);
      var o = !!a;
      return m(Vr, {
        name: "".concat(r, "-loading-icon-motion"),
        onBeforeEnter: In,
        onEnter: Nn,
        onAfterEnter: Ln,
        onBeforeLeave: Nn,
        onLeave: function(i) {
          setTimeout(function() {
            In(i);
          });
        },
        onAfterLeave: Ln
      }, {
        default: function() {
          return [o ? m("span", {
            class: "".concat(r, "-loading-icon")
          }, [m(Ct, null, null)]) : null];
        }
      });
    };
  }
});
var Fn = /^[\u4e00-\u9fa5]{2}$/, Rn = Fn.test.bind(Fn);
function Be(e) {
  return e === "text" || e === "link";
}
const Ae = K({
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: pa(lc(), {
    type: "default"
  }),
  slots: ["icon"],
  setup: function(t, n) {
    var r = n.slots, a = n.attrs, o = n.emit, c = de("btn", t), i = c.prefixCls, u = c.autoInsertSpaceInButton, s = c.direction, f = c.size, l = ge(null), d = ge(void 0), v = !1, y = ge(!1), w = ge(!1), T = L(function() {
      return u.value !== !1;
    }), k = L(function() {
      return Ve(t.loading) === "object" && t.loading.delay ? t.loading.delay || !0 : !!t.loading;
    });
    je(k, function(g) {
      clearTimeout(d.value), typeof k.value == "number" ? d.value = setTimeout(function() {
        y.value = g;
      }, k.value) : y.value = g;
    }, {
      immediate: !0
    });
    var O = L(function() {
      var g, b = t.type, P = t.shape, E = P === void 0 ? "default" : P, R = t.ghost, V = t.block, J = t.danger, h = i.value, p = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, C = f.value, x = C && p[C] || "";
      return g = {}, F(g, "".concat(h), !0), F(g, "".concat(h, "-").concat(b), b), F(g, "".concat(h, "-").concat(E), E !== "default" && E), F(g, "".concat(h, "-").concat(x), x), F(g, "".concat(h, "-loading"), y.value), F(g, "".concat(h, "-background-ghost"), R && !Be(b)), F(g, "".concat(h, "-two-chinese-chars"), w.value && T.value), F(g, "".concat(h, "-block"), V), F(g, "".concat(h, "-dangerous"), !!J), F(g, "".concat(h, "-rtl"), s.value === "rtl"), g;
    }), I = function() {
      var b = l.value;
      if (!(!b || u.value === !1)) {
        var P = b.textContent;
        v && Rn(P) ? w.value || (w.value = !0) : w.value && (w.value = !1);
      }
    }, M = function(b) {
      if (y.value || t.disabled) {
        b.preventDefault();
        return;
      }
      o("click", b);
    }, A = function(b, P) {
      var E = P ? " " : "";
      if (b.type === Bn) {
        var R = b.children.trim();
        return Rn(R) && (R = R.split("").join(E)), m("span", null, [R]);
      }
      return b;
    };
    return Je(function() {
      Br(!(t.ghost && Be(t.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), qe(I), Jr(I), zn(function() {
      d.value && clearTimeout(d.value);
    }), function() {
      var g, b, P = t.icon, E = P === void 0 ? (g = r.icon) === null || g === void 0 ? void 0 : g.call(r) : P, R = Vn((b = r.default) === null || b === void 0 ? void 0 : b.call(r));
      v = R.length === 1 && !E && !Be(t.type);
      var V = t.type, J = t.htmlType, h = t.disabled, p = t.href, C = t.title, x = t.target, S = t.onMousedown, _ = y.value ? "loading" : E, N = j(j({}, a), {
        title: C,
        disabled: h,
        class: [O.value, a.class, F({}, "".concat(i.value, "-icon-only"), R.length === 0 && !!_)],
        onClick: M,
        onMousedown: S
      });
      h || delete N.disabled;
      var G = E && !y.value ? E : m(uc, {
        existIcon: !!E,
        prefixCls: i.value,
        loading: !!y.value
      }, null), W = R.map(function(D) {
        return A(D, v && T.value);
      });
      if (p !== void 0)
        return m("a", X(X({}, N), {}, {
          href: p,
          target: x,
          ref: l
        }), [G, W]);
      var $ = m("button", X(X({}, N), {}, {
        ref: l,
        type: J
      }), [G, W]);
      return Be(V) ? $ : m(ic, {
        ref: "wave",
        disabled: !!y.value
      }, {
        default: function() {
          return [$];
        }
      });
    };
  }
});
function Dn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fc(e, t, n) {
  return t && Dn(e.prototype, t), n && Dn(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function sc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var dc = /* @__PURE__ */ fc(function e(t) {
  sc(this, e), this.error = new Error("unreachable case: ".concat(JSON.stringify(t)));
}), pc = function() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
const Pt = K({
  name: "AButtonGroup",
  props: pc(),
  setup: function(t, n) {
    var r = n.slots, a = de("btn-group", t), o = a.prefixCls, c = a.direction, i = L(function() {
      var u, s = t.size, f = "";
      switch (s) {
        case "large":
          f = "lg";
          break;
        case "small":
          f = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          console.warn(new dc(s).error);
      }
      return u = {}, F(u, "".concat(o.value), !0), F(u, "".concat(o.value, "-").concat(f), f), F(u, "".concat(o.value, "-rtl"), c.value === "rtl"), u;
    });
    return function() {
      var u;
      return m("div", {
        class: i.value
      }, [Vn((u = r.default) === null || u === void 0 ? void 0 : u.call(r))]);
    };
  }
});
Ae.Group = Pt;
Ae.install = function(e) {
  return e.component(Ae.name, Ae), e.component(Pt.name, Pt), e;
};
const vc = /* @__PURE__ */ ea("123123123"), hc = /* @__PURE__ */ K({
  __name: "Test",
  setup(e) {
    return (t, n) => (Qr(), Zr(Xr(Ae), { type: "primary" }, {
      default: Kr(() => [
        vc
      ]),
      _: 1
    }));
  }
}), gc = [hc], mc = (e) => {
  gc.forEach((t) => e.component((t.name, t)));
}, bc = {
  install: mc
};
export {
  hc as Test,
  bc as default
};
