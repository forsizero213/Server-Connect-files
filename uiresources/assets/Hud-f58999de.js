import {
    _ as Xe,
    a as je,
    b as Je,
    c as se,
    d as ke,
    e as Qe,
    f as Ie,
    g as Oe,
    h as Le,
    i as Pe,
    j as Ae,
    k as De,
    l as He,
    m as xe,
    n as Be,
    o as Re,
    p as et,
    q as Fe,
    r as tt,
    s as st,
    t as at,
    u as it,
    v as nt,
    w as ot,
    x as rt,
    y as lt,
    z as dt,
    A as ht,
    B as ut,
    C as ct,
    D as _t,
    E as mt,
    F as ft,
    G as gt,
    H as pt,
    I as Ct,
    J as vt,
    K as yt,
    L as wt,
    M as bt,
    N as St,
    O as Et,
    P as Tt,
    Q as Mt,
    R as kt,
    S as It,
    T as Ot,
    U as Lt,
    V as Pt,
    W as At,
    X as Dt,
    Y as Ht,
    Z as xt,
    $ as Bt,
    a0 as Rt,
    a1 as Ft,
    a2 as Nt,
    a3 as Yt,
    a4 as Kt,
    a5 as $t,
    a6 as Zt,
    a7 as Ut,
    a8 as Vt,
    a9 as Wt,
    aa as Gt,
    ab as zt,
    ac as qt,
    ad as Xt,
    ae as jt,
    af as Jt,
    ag as Qt,
    ah as es,
    ai as ts,
    aj as ss,
    ak as as,
    al as is,
    am as ns,
    an as os,
    ao as rs
} from "./hint-e68ab3ae.js";
import {
    w as A
} from "./dom-6a33ced9.js";
import {
    S as ls
} from "./ScrollableContainer-8adc03a1.js";
import {
    r as m,
    o as n,
    c as o,
    b as u,
    w as C,
    i as ae,
    n as v,
    _ as g,
    a as i,
    F as E,
    h as M,
    d as f,
    j as N,
    v as Ne,
    f as c,
    t as p,
    e as k,
    k as Ye,
    g as w,
    T,
    l as ie,
    m as ds,
    p as hs,
    D as us
} from "./index-c5642422.js";
import {
    C as cs,
    a as _s
} from "./index-044e9acb.js";
import {
    C as ms
} from "./index-ae185f78.js";
import {
    C as K,
    _ as Ke
} from "./Button-6dbaf91b.js";
import {
    C as ne
} from "./ButtonContainer-55219207.js";
import {
    f as $e
} from "./numbers-294a250e.js";
import {
    U as $
} from "./MobileButton-2894c590.js";
import {
    N as fs
} from "./index-5c9e7d48.js";
import {
    _ as gs,
    a as ps,
    b as Cs,
    c as vs,
    d as ys,
    e as ws
} from "./logo-28492b36.js";
import {
    R as bs
} from "./RangeSlider-104ea648.js";
import "./rouble_sign_grey-d1dc82b5.js";
import "./close-82e1f011.js";
import "./donate-c608c9e2.js";
import "./money-f487a6aa.js";

function Ss(e, t, s, l, r, a) {
    const d = m("ScrollableContainer");
    return n(), o("div", {
        class: v(["scrolling-container", a.classes]),
        ref: "scrolling",
        style: {
            overflow: "auto"
        }
    }, [u(d, {
        type: 1,
        requiredVerticalScroll: r.requiredScroll,
        onContentScroll: a.onScroll
    }, {
        default: C(() => [ae(e.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 8, ["requiredVerticalScroll", "onContentScroll"])], 2)
}
const Es = {
        props: {
            chatIsOpened: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            ScrollableContainer: ls
        },
        computed: {
            classes() {
                return {
                    "scrolling-container_hidden": !this.chatIsOpened
                }
            }
        },
        data() {
            return {
                requiredScroll: -1
            }
        },
        methods: {
            scrollToTop() {
                A(() => {
                    this.requiredScroll = 0
                })
            },
            scrollToBottom() {
                A(() => {
                    this.scrollableWrapper && (this.requiredScroll = this.scrollableWrapper.scrollHeight)
                })
            },
            scrollByStep(e, t) {
                A(() => {
                    this.scrollableWrapper && (t === "down" ? this.requiredScroll = this.scrollableWrapper.scrollTop + e : t === "up" && (this.requiredScroll = this.scrollableWrapper.scrollTop - e))
                })
            },
            onScroll(e) {
                this.scrollableWrapper = e.scrollableWrapper
            }
        }
    },
    Ts = g(Es, [
        ["render", Ss],
        ["__scopeId", "data-v-dadf1dfa"]
    ]),
    le = {
        й: "q",
        ц: "w",
        у: "e",
        к: "r",
        е: "t",
        н: "y",
        г: "u",
        ш: "i",
        щ: "o",
        з: "p",
        х: "[",
        ъ: "]",
        ф: "a",
        ы: "s",
        в: "d",
        а: "f",
        п: "g",
        р: "h",
        о: "j",
        л: "k",
        д: "l",
        ж: ";",
        э: "'",
        я: "z",
        ч: "x",
        с: "c",
        м: "v",
        и: "b",
        т: "n",
        ь: "m",
        б: ",",
        ю: ".",
        ".": "/"
    };

function Ze(e) {
    return Array.from(e).map(s => le[s] ? le[s] : s).join("")
}
const de = 100,
    Ms = 1500,
    ks = 3,
    Ue = {
        components: {
            Scrolling: Ts
        },
        data() {
            return {
                images: Object.assign({
                    "/src/assets/images/hud/chat/message-icons/0.svg": Xe,
                    "/src/assets/images/hud/chat/message-icons/1.svg": je,
                    "/src/assets/images/hud/chat/message-icons/2.svg": Je
                }),
                messages: [],
                messageCounter: 0,
                isOpen: !1,
                canOpen: !0,
                inputText: "",
                connectStatusCodes: cs,
                connectStatusInfo: _s,
                currentHistoryItem: -1,
                currentBind: null,
                currentBindMessage: -1,
                isBindSent: !1
            }
        },
        methods: {
            onMessage(e, t) {},
            onOpenChat() {},
            onCloseChat() {},
            parseActions(e) {
                return e.match(/(\{btn:[0-9]+\:[0-9]+\:[0-9]+\})/g)
            },
            deleteChatMessage(e) {
                return this.messages = this.messages.filter(t => t.id != e), !1
            },
            parseMessage(e) {
                const t = this.parseActions(e);
                let s = 0;
                if (t)
                    for (let l of t) {
                        let r = l.replace("{", "").replace("}", "").split(":"),
                            [a, d, h, _] = r;
                        if (a === "btn") {
                            if (h != ks) {
                                let S = ` <img class="chat__message-action-image" src="${this.images[`/src/assets/images/hud/chat/message-icons/${d}.svg`]}" />`,
                                    b = `onclick="window.onChatMessageAction('${d}', '${h}', '${_}')"`;
                                e = e.split(l).join(`<span class="chat__message-action" ${b}><img class="chat__message-action-background" src="/src/assets/images/hud/chat/message-icons/background.png" />${S}</span>`)
                            } else e = e.split(l).join("");
                            s = _
                        }
                    }
                return {
                    message: e,
                    valueId: s
                }
            },
            add(e, t) {
                e = String.escapeHtml(e);
                let s = e.match(/(\{[a-zA-Z0-9]{6}\})/g);
                s && s.forEach((a, d) => {
                    let h = a.replace("{", "").replace("}", "");
                    const _ = e.indexOf(a),
                        y = [e.slice(0, _), e.slice(_ + 8)].map(S => S.replace(/^\s/, "&nbsp;").replace(/\s$/, "&nbsp;"));
                    if (d < s.length - 1) {
                        const S = y[1].indexOf(s[d + 1]),
                            b = [y[1].slice(0, S), y[1].slice(S)];
                        e = y[0] + `<span style="color: #${h}">${b[0]}</span>` + b[1]
                    } else e = y[0] + `<span style="color: #${h}">${y[1]}</span>`
                });
                let l = this.parseMessage(e);
                e = l.message;
                let r = !0;
                if (this.isOpen) {
                    if (!this.$refs.scrolling) return;
                    let a = this.$refs.scrolling.scrollableWrapper;
                    a && a.scrollHeight - a.offsetHeight - a.scrollTop > 0 && (r = !1)
                }
                window.getInterfaceStatus("Connect") || this.messages.push({
                    text: e,
                    color: t,
                    time: Date.now(),
                    id: l.valueId,
                    key: Date.now() + this.messageCounter++
                }), this.onMessage(e, t), this.setConnectStatus(e), this.$nextTick(() => {
                    r && this.$refs.scrolling.scrollToBottom()
                })
            },
            clearAll() {
                this.messages = []
            },
            open() {
                this.isOpen || (this.onOpenChat(), window.stopVoiceRecord(0), this.isOpen = !0, !this.isMobile && window.setCursorStatus("Chat", !0), this.$nextTick(() => {
                    this.$refs.scrolling.scrollToBottom(), this.$refs.input.focus(), this.inputText && this.moveCursorToEnd()
                }))
            },
            close() {
                this.isOpen && (this.isOpen = !1, this.onCloseChat(), !this.isMobile && window.setCursorStatus("Chat", !1), this.$nextTick(() => {
                    this.$refs.scrolling.scrollToBottom(), this.$refs.input && this.$refs.input.blur()
                }))
            },
            prevHistory() {
                if (this.currentHistoryItem + 1 < this.history.length) {
                    let e = this.history[++this.currentHistoryItem];
                    this.inputText = e
                }
                this.moveCursorToEnd()
            },
            nextHistory() {
                if (this.currentHistoryItem - 1 >= 0) {
                    let e = this.history[--this.currentHistoryItem];
                    this.inputText = e
                } else this.history.includes(this.inputText) && (this.currentHistoryItem = -1, this.inputText = "");
                this.moveCursorToEnd()
            },
            moveCursorToEnd() {
                this.$nextTick(() => {
                    const e = this.$refs.input;
                    e.selectionStart = e.selectionEnd = e.value.length
                })
            },
            addHistory() {
                this.inputText && this.inputText.trim().length > 0 && this.$store.commit("keyboard/addHistory", this.inputText)
            },
            waitForNextBind() {
                return new Promise(e => {
                    setTimeout(() => {
                        e()
                    }, Ms)
                })
            },
            waitForBindSent() {
                this.isBindSent = !0
            },
            async playBind() {
                const {
                    currentBind: e
                } = this, t = e.messages[++this.currentBindMessage];
                if (!t) {
                    this.currentBindMessage = -1, this.currentBind = null;
                    return
                }
                if (t.disabled) {
                    this.inputText = (t.text + " ").trim(), this.open();
                    return
                }
                window.sendChatInput(this.processInputText(t.text)), await this.waitForNextBind(), await this.playBind()
            },
            async useBinder(e) {
                const t = await this.$store.dispatch("binder/checkMessage", e);
                return t ? (this.currentBind = t, await this.playBind(), !0) : !1
            },
            clearInput() {
                this.inputText = ""
            },
            sendChatInput(e) {
                return window.sendChatInput(this.processInputText(e))
            },
            async send() {
                if (!this.isOpen) return;
                if (this.$refs.hints) {
                    let s = this.$refs.hints;
                    if (s.currentHintIndex > -1) {
                        s.currentHintIndex = -1;
                        return
                    }
                }
                this.currentHistoryItem = -1;
                const e = this.inputText;
                if (this.addHistory(), this.clearInput(), this.close(), this.currentBind) {
                    this.sendChatInput(e), await this.waitForNextBind(), await this.playBind();
                    return
                }
                await this.useBinder(e) || this.sendChatInput(e)
            },
            processInputText(e) {
                if (this.engine === "legacy" && e.length > 1 && e[0] === ".") {
                    let t = e.split(" ");
                    if (t.length > 0) return t[0] = Ze(t[0]), t.join(" ")
                }
                return e
            },
            setConnectStatus(e) {
                if (window.getInterfaceStatus("Connect") && window.interface("Connect").setStatus) {
                    let t = this.getConnectStatus(e);
                    t && window.interface("Connect").setStatus(t, e)
                }
            },
            getConnectStatus(e) {
                for (let t in this.connectStatusInfo)
                    if (e.search(this.connectStatusInfo[t].text) != -1) return this.connectStatusInfo[t].id;
                return 0
            }
        },
        computed: {
            isMobile() {
                return this.$root.isMobile
            },
            engine() {
                return this.$root.engine
            },
            filteredMessages() {
                return this.messages.length >= de ? this.messages.slice(this.messages.length - de, this.messages.length) : this.messages
            },
            history() {
                return [...this.$store.getters["keyboard/history"]].reverse()
            }
        },
        mounted() {
            setTimeout(() => {
                this.$refs.scrolling.scrollToBottom()
            }, 100), this.close()
        }
    },
    Is = {},
    Os = {
        width: "47",
        height: "47",
        viewBox: "0 0 47 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Ls(e, t) {
    return n(), o("svg", Os, t[0] || (t[0] = [i("circle", {
        cx: "23.5",
        cy: "23.5",
        r: "23.5",
        fill: "#0D73FD"
    }, null, -1), i("path", {
        d: "M24 16V32M24 16L19 20.8M24 16L29 20.8",
        stroke: "white",
        "stroke-width": "2",
        "stroke-linecap": "round"
    }, null, -1)]))
}
const Ps = g(Is, [
        ["render", Ls]
    ]),
    As = ["innerHTML"],
    Ds = {
        key: 0,
        class: "chat-input"
    };

function Hs(e, t, s, l, r, a) {
    const d = m("scrolling");
    return n(), o("div", {
        class: v(["chat-container", {
            chat_opened: e.isOpen
        }])
    }, [i("div", {
        class: "chat",
        style: f({
            transform: `scale(${s.ratioScale})`,
            left: `${47*s.ratioScale}vh`
        })
    }, [u(d, {
        class: "messages-list",
        onClick: e.open,
        ref: "scrolling"
    }, {
        default: C(() => [(n(!0), o(E, null, M(e.filteredMessages, (h, _) => (n(), o("p", {
            class: "message",
            cohinline: "",
            style: f({
                color: "#" + h.color
            }),
            innerHTML: h.text
        }, null, 12, As))), 256))]),
        _: 1
    }, 8, ["onClick"]), e.isOpen ? (n(), o("div", Ds, [N(i("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = h => e.inputText = h)
    }, null, 512), [
        [Ne, e.inputText]
    ])])) : c("", !0)], 4)], 2)
}
const xs = {
        props: {
            chatStatus: {
                type: Boolean
            },
            ratioScale: {
                type: Number
            }
        },
        components: {
            ChatSend: Ps
        },
        mixins: [Ue],
        data: () => ({
            KEY_CODE_ARROW_TOP: window.KEY_CODE_ARROW_TOP,
            KEY_CODE_ARROW_BOTTOM: window.KEY_CODE_ARROW_BOTTOM,
            currentScale: 1
        }),
        created() {
            document.addEventListener("click", e => {
                !this.$el.contains(e.target) && !window.App.showKeyboard && this.close()
            })
        },
        computed: {
            deviceScreen() {
                return this.$root.deviceScreen
            }
        },
        mounted() {
            document.addEventListener("keydown", this.onKeyDown), document.addEventListener("keyup", this.onKeyUp)
        },
        beforeUnmount() {
            document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("keyup", this.onKeyUp)
        },
        methods: {
            scrollOnChange() {
                this.$nextTick(function () {
                    this.$refs.scrolling.scrollToBottom()
                })
            },
            onKeyUp(e) {
                e.code == "Enter" && this.isOpen && this.send(e)
            },
            onKeyDown(e) {
                let {
                    keyCode: t
                } = e;
                [this.KEY_CODE_ARROW_TOP, this.KEY_CODE_ARROW_BOTTOM].includes(t) && e.preventDefault(), t === this.KEY_CODE_ARROW_TOP && this.isOpen && this.prevHistory(), t === this.KEY_CODE_ARROW_BOTTOM && this.isOpen && this.nextHistory()
            }
        },
        watch: {
            chatStatus(e) {
                e && this.scrollOnChange()
            }
        }
    },
    Bs = g(xs, [
        ["render", Hs]
    ]),
    Rs = {
        class: "radmir-chat-hints"
    },
    Fs = ["onClick"],
    Ns = {
        class: "radmir-chat-hints__item-overlap"
    };

function Ys(e, t, s, l, r, a) {
    return n(), o("div", Rs, [(n(!0), o(E, null, M(a.hints, (d, h) => (n(), o("div", {
        class: v(["radmir-chat-hints__item", {
            "radmir-chat-hints__item_active": h === r.currentHintIndex
        }]),
        key: h,
        onClick: _ => a.sendInput(d, _)
    }, [i("div", Ns, p(d.slice(0, s.input.length)), 1), k(p(d.slice(s.input.length)), 1)], 10, Fs))), 128))])
}
const Ks = 5,
    $s = {
        props: {
            input: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                KEY_CODE_ENTER: window.KEY_CODE_ENTER,
                KEY_CODE_ARROW_BOTTOM: window.KEY_CODE_ARROW_BOTTOM,
                KEY_CODE_ARROW_LEFT: window.KEY_CODE_ARROW_LEFT,
                KEY_CODE_ARROW_RIGHT: window.KEY_CODE_ARROW_RIGHT,
                currentHintIndex: -1
            }
        },
        created() {
            document.addEventListener("keydown", this.onKeyDown)
        },
        unmounted() {
            document.removeEventListener("keydown", this.onKeyDown)
        },
        methods: {
            sendInput(e, t) {
                t && t.stopPropagation(), this.$emit("input", e)
            },
            onKeyDown({
                keyCode: e
            }) {
                e === this.KEY_CODE_ARROW_BOTTOM && this.hints.length > 0 && (this.currentHintIndex = 0), e === this.KEY_CODE_ARROW_RIGHT && (this.currentHintIndex + 1 < this.hints.length ? this.currentHintIndex++ : this.currentHintIndex = 0), e === this.KEY_CODE_ARROW_LEFT && (this.currentHintIndex - 1 >= 0 ? this.currentHintIndex-- : this.currentHintIndex = this.hints.length - 1), e === this.KEY_CODE_ENTER && this.currentHint && this.sendInput(this.currentHint)
            }
        },
        computed: {
            hints() {
                return this.input.length > 1 && (this.input[0] === "/" || this.input[0] === ".") ? ms.filter(e => e.indexOf(Ze(this.input.toLowerCase())) === 0).slice(0, Ks) : []
            },
            currentHint() {
                return this.hints[this.currentHintIndex]
            }
        },
        watch: {
            hints(e) {
                e.length === 0 && (this.currentHintIndex = -1)
            }
        }
    },
    Zs = g($s, [
        ["render", Ys]
    ]),
    Us = {
        class: "hud-radmir-controls"
    },
    Vs = {
        key: 0,
        class: "hud-radmir-controls__row"
    };

function Ws(e, t, s, l, r, a) {
    const d = m("ControlsButton"),
        h = m("ControlsButtonContainer");
    return n(), o("div", Us, [s.isHudControls ? (n(), o("div", Vs, [u(h, {
        text: "Чат"
    }, {
        default: C(() => [u(d, {
            keyCode: e.KEY_CODE_T,
            text: "T"
        }, null, 8, ["keyCode"])]),
        _: 1
    }), u(h, {
        text: "Управление"
    }, {
        default: C(() => [u(d, {
            keyCode: e.KEY_CODE_F1,
            text: "F1"
        }, null, 8, ["keyCode"])]),
        _: 1
    })])) : c("", !0)])
}
const Gs = {
        components: {
            ControlsButton: K,
            ControlsButtonContainer: ne
        },
        props: {
            isHudControls: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            KEY_CODE_T: window.KEY_CODE_T,
            KEY_CODE_X: window.KEY_CODE_X,
            KEY_CODE_F1: window.KEY_CODE_F1
        })
    },
    zs = g(Gs, [
        ["render", Ws]
    ]),
    Q = .15,
    qs = 1.51,
    ee = 2.22,
    Xs = {
        class: "radmir-chat__container",
        ref: "container"
    },
    js = ["innerHTML"],
    Js = {
        key: 0,
        class: "radmir-chat-input"
    },
    Qs = {
        class: "radmir-chat-input__input"
    },
    ea = {
        class: "radmir-chat-input__input-lang"
    },
    ta = {
        class: "radmir-chat-input__hints"
    };

function sa(e, t, s, l, r, a) {
    const d = m("scrolling"),
        h = m("HudControls"),
        _ = m("ChatHints"),
        y = m("ControlsButton");
    return n(), o("div", {
        class: v(["radmir-chat", {
            "radmir-chat_opened": e.isOpen,
            "radmir-chat_inactive": r.isInactive
        }])
    }, [t[2] || (t[2] = i("div", {
        class: "radmir-chat__before"
    }, null, -1)), i("div", Xs, [u(d, {
        class: v(["radmir-chat__messages", {
            "radmir-chat__messages_hidden": !s.chatStatus
        }]),
        ref: "scrolling",
        chatIsOpened: e.isOpen,
        style: f({
            height: a.chatHeight
        })
    }, {
        default: C(() => [u(Ye, {
            name: "chat-message",
            css: s.useChatAnimation
        }, {
            default: C(() => [(n(!0), o(E, null, M(e.filteredMessages, (S, b) => (n(), o("p", {
                class: "radmir-chat__messages-item",
                cohinline: "",
                key: S.key,
                style: f({
                    color: "#" + S.color,
                    fontSize: `${r.DEFAULT_FONT_SIZE+r.FONT_SIZE_STEP*a.fontSize}vh`,
                    lineHeight: `${r.DEFAULT_LINE_HEIGHT+r.FONT_SIZE_STEP*a.fontSize}vh`
                }),
                innerHTML: a.formatMessage(S)
            }, null, 12, js))), 128))]),
            _: 1
        }, 8, ["css"])]),
        _: 1
    }, 8, ["chatIsOpened", "style", "class"]), u(T, {
        name: "fade"
    }, {
        default: C(() => [!e.isOpen && s.chatStatus ? (n(), w(h, {
            key: 0,
            class: "radmir-chat__controls",
            isHudControls: s.isHudControls,
            style: f({
                top: a.chatHeight
            })
        }, null, 8, ["isHudControls", "style"])) : c("", !0)]),
        _: 1
    }), e.isOpen ? (n(), o("div", Js, [i("div", Qs, [N(i("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = S => e.inputText = S),
        onKeydown: t[1] || (t[1] = (...S) => a.onInputKeyDown && a.onInputKeyDown(...S))
    }, null, 544), [
        [Ne, e.inputText]
    ]), i("div", ea, p(a.keyboardLayout), 1)]), i("div", ta, [u(_, {
        input: e.inputText,
        onInput: a.inputHint,
        ref: "hints"
    }, null, 8, ["input", "onInput"]), u(y, {
        keyCode: r.KEY_CODE_ENTER,
        text: "Enter",
        onPressed: e.send
    }, null, 8, ["keyCode", "onPressed"])])])) : c("", !0)], 512)], 2)
}
const he = 2e4,
    ue = 100,
    aa = .05,
    ia = .02,
    na = 1e-4,
    oa = 3e-4,
    ra = {
        components: {
            ChatHints: Zs,
            ControlsButton: K,
            HudControls: zs
        },
        props: {
            isHudControls: {
                type: Boolean,
                default: !1
            },
            chatStatus: {
                type: Boolean
            },
            canChatFadeout: {
                type: Boolean
            },
            useChatAnimation: {
                type: Boolean,
                default: !0
            }
        },
        mixins: [Ue],
        data() {
            return {
                CHAT_INACTIVE_MAX_TIME: he,
                FONT_SIZE_STEP: Q,
                DEFAULT_FONT_SIZE: qs,
                DEFAULT_LINE_HEIGHT: ee,
                KEY_CODE_ENTER: window.KEY_CODE_ENTER,
                KEY_CODE_T: window.KEY_CODE_T,
                KEY_CODE_F6: window.KEY_CODE_F6,
                KEY_CODE_F1: window.KEY_CODE_F1,
                KEY_CODE_ESC: window.KEY_CODE_ESC,
                KEY_CODE_ARROW_TOP: window.KEY_CODE_ARROW_TOP,
                KEY_CODE_ARROW_BOTTOM: window.KEY_CODE_ARROW_BOTTOM,
                KEY_CODE_PAGE_UP: window.KEY_CODE_PAGE_UP,
                KEY_CODE_PAGE_DOWN: window.KEY_CODE_PAGE_DOWN,
                KEY_CODE_X: window.KEY_CODE_X,
                KEY_CODE_U: window.KEY_CODE_U,
                isInactive: !1,
                activeTimeout: null,
                pointerIsDown: !1,
                pointerX: 0,
                scrollAnimationFrame: null
            }
        },
        computed: {
            keyboardLayout() {
                return this.$root.keyboardLayout
            },
            pageSize() {
                return this.$root.chatPageSize
            },
            fontSize() {
                return this.$root.chatFontSize
            },
            timestamps() {
                return this.$root.chatTimestamps
            },
            chatHeight() {
                return `calc(${ee+Q*this.fontSize}vh * ${this.pageSize})`
            }
        },
        methods: {
            eraseWord() {
                const e = this.$refs.input,
                    t = e.value,
                    s = Math.min(e.selectionStart, t.length),
                    l = " ";
                let r = s;
                t[s] === l && r--;
                for (let a = r; a >= 0; a--)
                    if (!(t[a] !== l && a > 0)) {
                        this.inputText = t.slice(0, a) + t.slice(s), e.setSelectionRange(a, a);
                        return
                    }
            },
            onInputKeyDown(e) {
                const {
                    keyCode: t,
                    ctrlKey: s
                } = e;
                if (t === window.KEY_CODE_BACKSPACE && s) {
                    if (!this.$refs.input || this.$refs.input.selectionStart !== this.$refs.input.selectionEnd) return;
                    e.preventDefault(), this.eraseWord()
                }
            },
            onMessage(e, t) {
                window.getInterfaceStatus("PlayerInteraction") || this.setInactiveTimeout()
            },
            onOpenChat() {
                this.$emit("openChat"), this.clearInactiveTimeout(), this.isInactive = !1, window.setChatInputStatus(!0)
            },
            onCloseChat() {
                this.setInactiveTimeout(), window.setChatInputStatus(!1)
            },
            setInactiveTimeout() {
                this.isInactive = !1, !this.isOpen && (this.clearInactiveTimeout(), this.canChatFadeout && (this.activeTimeout = setTimeout(() => {
                    this.isInactive = !0
                }, he)))
            },
            clearInactiveTimeout() {
                this.activeTimeout && clearTimeout(this.activeTimeout)
            },
            setIsInactive(e) {
                this.clearInactiveTimeout(), this.isInactive = e, e || this.setInactiveTimeout()
            },
            onKeyDown(e) {
                if (e.repeat) return;
                let {
                    keyCode: t
                } = e;
                (t == this.KEY_CODE_X || t == this.KEY_CODE_U) && !this.isOpen && window.onVoiceRecordChange(t, !0)
            },
            onKeyUp(e) {
                let {
                    keyCode: t
                } = e;
                t === this.KEY_CODE_ESC && this.close(), t === this.KEY_CODE_F1 && this.$emit("help:open"), t === this.KEY_CODE_F6 && !this.getOnboardingOrPauseStatus() && (this.isOpen ? this.close() : this.open()), t === this.KEY_CODE_T && window.isBluredInput && !this.isOpen && this.canOpen && !this.getOnboardingOrPauseStatus() && this.open(), t === this.KEY_CODE_ARROW_TOP && this.isOpen && (this.$refs.hints && this.$refs.hints.currentHintIndex > -1 ? this.$refs.hints.currentHintIndex = -1 : this.prevHistory()), t === this.KEY_CODE_ARROW_BOTTOM && this.isOpen && this.nextHistory();
                let s = this.$refs.scrolling;
                t === this.KEY_CODE_PAGE_UP && A(() => {
                    s.scrollByStep(ue, "up")
                }), t === this.KEY_CODE_PAGE_DOWN && A(() => {
                    s.scrollByStep(ue, "down")
                }), (t == this.KEY_CODE_X || t == this.KEY_CODE_U) && !this.isOpen && !this.getOnboardingOrPauseStatus() && window.onVoiceRecordChange(t, !1), [this.KEY_CODE_PAGE_UP, this.KEY_CODE_PAGE_DOWN].includes(t) && (this.isInactive = !1, this.clearInactiveTimeout())
            },
            onClickOutside(e) {
                this.$refs.container.contains(e.target) || this.close()
            },
            inputHint(e) {
                const t = document.activeElement;
                this.inputText = e, A(() => {
                    t && t.setSelectionRange(e.length, e.length)
                })
            },
            formatMessage(e) {
                let t = e.text;
                if (this.timestamps) {
                    const s = new Date(e.time);
                    t = `[${this.formatTime(s)}]&nbsp;${e.text}`
                }
                return t
            },
            formatTime(e) {
                const t = a => String(a).padStart(2, "0"),
                    s = t(e.getHours()),
                    l = t(e.getMinutes()),
                    r = t(e.getSeconds());
                return `${s}:${l}:${r}`
            },
            scrollOnChange() {
                this.$nextTick(function () {
                    this.$refs.scrolling.scrollToBottom()
                })
            },
            getOnboardingOrPauseStatus() {
                return window.getInterfaceStatus("TrainingOnboarding") || window.getInterfaceStatus("PauseMenu")
            },
            onMouseDown() {
                this.pointerIsDown = !0
            },
            onMouseUp() {
                this.pointerIsDown = !1
            },
            onMouseMove(e) {
                this.pointerX = e.clientX
            },
            handleInputScroll(e) {
                const t = this.$refs.input;
                if (!t) return;
                const s = t.getBoundingClientRect(),
                    l = s.width * aa,
                    r = s.width * ia,
                    a = t.scrollWidth * na,
                    d = t.scrollWidth * oa;
                this.pointerX < s.left + l ? t.scrollLeft -= (this.pointerX < s.left + r ? d : a) * e : this.pointerX > s.right - l && (t.scrollLeft += (this.pointerX > s.left - r ? d : a) * e)
            },
            clearScrollRequestAnimation() {
                this.scrollAnimationFrame && (cancelAnimationFrame(this.scrollAnimationFrame), this.scrollAnimationFrame = null)
            },
            startUpdatingScroll() {
                this.clearScrollRequestAnimation();
                let e;
                const t = s => {
                    e || (e = s);
                    const l = s - e;
                    this.handleInputScroll(l), e = s, this.scrollAnimationFrame = requestAnimationFrame(t)
                };
                this.scrollAnimationFrame = requestAnimationFrame(t)
            }
        },
        mounted() {
            document.addEventListener("keyup", this.onKeyUp), document.addEventListener("keydown", this.onKeyDown), document.addEventListener("click", this.onClickOutside), document.addEventListener("mousedown", this.onMouseDown), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("mousemove", this.onMouseMove)
        },
        beforeUnmount() {
            document.removeEventListener("keyup", this.onKeyUp), document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("click", this.onClickOutside), document.removeEventListener("mousedown", this.onMouseDown), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove)
        },
        watch: {
            pageSize() {
                this.scrollOnChange()
            },
            fontSize() {
                this.scrollOnChange()
            },
            chatStatus(e) {
                e && this.scrollOnChange()
            },
            canChatFadeout(e) {
                this.setInactiveTimeout()
            },
            pointerIsDown(e) {
                e ? this.startUpdatingScroll() : this.clearScrollRequestAnimation()
            }
        }
    },
    la = g(ra, [
        ["render", sa]
    ]),
    da = "" + new URL("patrons-bg-9eb1272d.svg",
        import.meta.url).href,
    ha = "" + new URL("patrons-helloween-bg-2ca3fe54.svg",
        import.meta.url).href,
    Ve = "" + new URL("patrons-line-helloween-f07b065f.svg",
        import.meta.url).href;

function ua(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["hud-radmir-info-wanted", {
            "hud-radmir-info-wanted_hidden": s.value === 0
        }])
    }, [(n(!0), o(E, null, M(e.MAX_STARS_COUNT, (d, h) => (n(), o("img", {
        class: v(["hud-radmir-info-wanted__star", {
            "hud-radmir-info-wanted__star_active": e.MAX_STARS_COUNT - d < s.value
        }]),
        key: h,
        src: se
    }, null, 2))), 128))], 2)
}
const ca = 6,
    _a = {
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            MAX_STARS_COUNT: ca
        })
    },
    ma = g(_a, [
        ["render", ua],
        ["__scopeId", "data-v-08d0c7de"]
    ]),
    fa = {
        class: "hud-radmir-info-data__bars"
    },
    ga = {
        class: "hud-radmir-info-data__bar hud-radmir-info-data__bar_two"
    },
    pa = {
        key: 0,
        class: "hud-radmir-info-data__bar-content hud-radmir-info-data__bar_armour"
    },
    Ca = {
        key: 0,
        class: "hud-radmir-info-data__bar-value"
    },
    va = {
        key: 1,
        class: "hud-radmir-info-data__lamps hud-radmir-info-data__lamps_armour"
    },
    ya = {
        class: "hud-radmir-info-data__bar-content hud-radmir-info-data__bar_health"
    },
    wa = {
        class: "hud-radmir-info-data__bar-icon"
    },
    ba = {
        key: 0,
        class: "hud-radmir-info-data__bar-value"
    },
    Sa = {
        key: 1,
        class: "hud-radmir-info-data__bar hud-radmir-info-data__bar_freeze"
    },
    Ea = {
        key: 0,
        class: "hud-radmir-info-data__lamps hud-radmir-info-data__lamps_freeze"
    },
    Ta = {
        class: "hud-radmir-info-data__bar hud-radmir-info-data__bar-content hud-radmir-info-data__bar_hunger"
    },
    Ma = {
        key: 0,
        class: "hud-radmir-info-data__bar-value"
    },
    ka = {
        key: 1,
        class: "hud-radmir-info-data__lamps hud-radmir-info-data__lamps_hunger"
    },
    Ia = {
        class: "hud-radmir-info-data__money"
    };

function Oa(e, t, s, l, r, a) {
    const d = m("InfoWanted");
    return n(), o("div", {
        class: v(["hud-radmir-info-data", {
            "hud-radmir-info-data_helloween": s.isHelloween,
            "hud-radmir-info-data_with-values": a.isShowValues
        }])
    }, [i("div", fa, [i("div", ga, [u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.armour ? (n(), o("div", pa, [t[0] || (t[0] = i("div", {
            class: "hud-radmir-info-data__bar__before"
        }, null, -1)), t[1] || (t[1] = i("div", {
            class: "hud-radmir-info-data__bar__after"
        }, null, -1)), i("div", {
            class: "hud-radmir-info-data__progress-bar hud-radmir-info-data__progress-bar_armour",
            style: f({
                width: `${s.info.armour}%`,
                ...r.STYLES.ARMOUR.bar
            })
        }, null, 4), i("div", {
            class: "hud-radmir-info-data__bar-icon",
            style: f(r.STYLES.ARMOUR.icon)
        }, [i("img", {
            src: ke,
            style: f(r.STYLES.ARMOUR.img)
        }, null, 4)], 4), a.isShowValues ? (n(), o("div", Ca, p(s.info.armour), 1)) : c("", !0), s.isNewYear ? (n(), o("div", va)) : c("", !0)])) : c("", !0)]),
        _: 1
    }), i("div", ya, [t[3] || (t[3] = i("div", {
        class: "hud-radmir-info-data__bar__before"
    }, null, -1)), i("div", {
        class: "hud-radmir-info-data__progress-bar",
        style: f({
            width: `${17.31*(Math.min(s.info.health,100)/100)}vh`,
            ...r.STYLES.HEALTH.bar
        })
    }, null, 4), i("div", {
        class: "hud-radmir-info-data__progress-bar__bg",
        style: f(r.STYLES.HEALTH.barBg)
    }, null, 4), i("div", wa, [s.isNewYear ? (n(), o("img", {
        key: 0,
        src: Qe,
        style: f(r.STYLES.HEALTH.newYearImg)
    }, null, 4)) : (n(), o("img", {
        key: 1,
        src: Ie,
        style: f(r.STYLES.HEALTH.img)
    }, null, 4))]), a.isShowValues ? (n(), o("div", ba, p(s.info.health), 1)) : c("", !0), s.info.isShowFreeze ? (n(), o("div", Sa, [t[2] || (t[2] = i("div", {
        class: "hud-radmir-info-data__bar_freeze__before"
    }, null, -1)), i("div", {
        class: "hud-radmir-info-data__progress-bar hud-radmir-info-data__progress-bar_freeze",
        style: f({
            marginLeft: `${11.67*(1-s.info.freeze/100)}vh`,
            width: `${11.67*(s.info.freeze/100)}vh`,
            ...r.STYLES.FREEZE.bar
        })
    }, null, 4), i("div", {
        class: "hud-radmir-info-data__progress-bar__bg",
        style: f(r.STYLES.FREEZE.barBg)
    }, null, 4), s.isNewYear ? (n(), o("div", Ea)) : c("", !0)])) : c("", !0)])]), i("div", Ta, [t[4] || (t[4] = i("div", {
        class: "hud-radmir-info-data__bar__before"
    }, null, -1)), i("div", {
        class: "hud-radmir-info-data__progress-bar hud-radmir-info-data__progress-bar_hunger",
        style: f({
            marginLeft: `${6.67*(1-s.info.hunger/100)}vh`,
            width: `${6.67*(s.info.hunger/100)}vh`,
            ...r.STYLES.HUNGER.bar
        })
    }, null, 4), i("div", {
        class: "hud-radmir-info-data__progress-bar__bg hud-radmir-info-data__progress-bar_hunger",
        style: f(r.STYLES.HUNGER.barBg)
    }, null, 4), i("div", {
        class: "hud-radmir-info-data__bar-icon",
        style: f(r.STYLES.HUNGER.icon)
    }, [i("img", {
        src: Oe,
        style: f(r.STYLES.HUNGER.img)
    }, null, 4)], 4), a.isShowValues ? (n(), o("div", Ma, p(s.info.hunger), 1)) : c("", !0), s.isNewYear ? (n(), o("div", ka)) : c("", !0)])]), i("div", Ia, [t[5] || (t[5] = i("img", {
        src: Ke
    }, null, -1)), k(p(a.formatNumberWithSpaces(s.info.money)), 1)]), u(d, {
        class: "hud-radmir-info-data__wanted",
        value: s.info.wanted
    }, null, 8, ["value"])], 2)
}
const La = {
        ARMOUR: {
            icon: {
                right: "-0.93vh"
            },
            img: {
                width: "2.41vh",
                height: "2.96vh"
            },
            bar: {
                height: "1.11vh",
                background: "#2e87ff"
            }
        },
        HEALTH: {
            img: {
                width: "4.3vh",
                height: "3.56vh"
            },
            newYearImg: {
                width: "3.24vh",
                height: "3.8vh",
                marginTop: "0.93vh"
            },
            bar: {
                height: "1.11vh",
                background: "#EAD57C"
            },
            barBg: {
                width: "17.31vh",
                height: "1.11vh",
                background: "#beb58c"
            }
        },
        FREEZE: {
            bar: {
                height: "0.56vh",
                background: "#71CCDF"
            },
            barBg: {
                width: "11.67vh",
                height: "0.56vh",
                background: "#81a5ab"
            }
        },
        HUNGER: {
            icon: {
                right: "-1.85vh"
            },
            img: {
                width: "3.06vh",
                height: "2.78vh"
            },
            bar: {
                height: "1.11vh",
                background: "#F8F6ED"
            },
            barBg: {
                width: "6.67vh",
                height: "1.11vh",
                background: "#b5b5b2"
            }
        }
    },
    Pa = {
        props: {
            info: {
                type: Object,
                required: !0
            },
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            InfoWanted: ma
        },
        data() {
            return {
                STYLES: La
            }
        },
        computed: {
            isShowValues() {
                return this.info.isShowValues
            }
        },
        methods: {
            formatNumberWithSpaces: $e
        }
    },
    Aa = g(Pa, [
        ["render", Oa],
        ["__scopeId", "data-v-a4475c76"]
    ]),
    Da = {},
    Ha = {
        width: "252",
        height: "233",
        viewBox: "0 0 252 233",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function xa(e, t) {
    return n(), o("svg", Ha, t[0] || (t[0] = [i("path", {
        d: "M127.231 61.647C46.7883 23.0149 25.1726 64.5008 3.28339 76.8302L0 108.884L3.28339 219.027L211.779 233L252 140.943C251.726 87.2417 246.747 -15.7225 229.016 2.03184C206.853 24.2248 179.781 86.8834 127.231 61.647Z",
        fill: "#F4F1E1"
    }, null, -1)]))
}
const Ba = g(Da, [
        ["render", xa]
    ]),
    Ra = {
        key: 0,
        class: "hud-radmir-info__content"
    },
    Fa = {
        class: "hud-radmir-info__fist"
    },
    Na = ["src"],
    Ya = {
        class: "hud-radmir-info__fist-content"
    },
    Ka = {
        key: 0,
        class: "hud-radmir-info__breath"
    },
    $a = ["src"],
    Za = {
        key: 2,
        class: "hud-radmir-info__fist-border",
        src: Ae
    },
    Ua = {
        class: "hud-radmir-info__server"
    },
    Va = {
        class: "hud-radmir-info__server-value"
    },
    Wa = {
        key: 1,
        class: "hud-radmir-info__patrons"
    },
    Ga = ["src"],
    za = {
        class: "hud-radmir-info__patrons-content"
    },
    qa = {
        class: "hud-radmir-info__patrons-value"
    },
    Xa = {
        class: "hud-radmir-info__patrons-value__total"
    },
    ja = {
        key: 0,
        src: Ve
    };

function Ja(e, t, s, l, r, a) {
    const d = m("InfoData"),
        h = m("IconBreathFill");
    return n(), o("div", {
        class: v(["hud-radmir-info", {
            "hud-radmir-info_helloween": s.isHelloween,
            "hud-radmir-info_new-year": s.isNewYear,
            "hud-radmir-info_easter": s.isEaster
        }])
    }, [s.bonus > 1 ? (n(), o("div", {
        key: 0,
        class: "hud-radmir-info__bonus",
        style: f({
            backgroundImage: `url('${e.bonuseImage[`/src/assets/images/hud/bonus/${s.bonus}.png`]}')`
        })
    }, null, 4)) : c("", !0), t[2] || (t[2] = i("div", {
        class: "hud-radmir-info__bg"
    }, null, -1)), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.showBars ? (n(), o("div", Ra, [u(d, {
            info: s.info,
            isHelloween: s.isHelloween,
            isNewYear: s.isNewYear
        }, null, 8, ["info", "isHelloween", "isNewYear"])])) : c("", !0)]),
        _: 1
    }), i("div", Fa, [s.info.weapon && s.info.breath >= 99 ? (n(), o("img", {
        key: 0,
        class: "hud-radmir-info__logo",
        src: "https://i.imgur.com/C2cHmMF.jpeg"
    }, null, 8, Na)) : c("", !0), i("div", Ya, [u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.breath < 99 ? (n(), o("div", Ka, [t[0] || (t[0] = i("img", {
            src: Le
        }, null, -1)), i("div", {
            class: "hud-radmir-info__breath-fill",
            style: f({
                top: `${100-s.info.breath}%`
            })
        }, [u(h)], 4)])) : c("", !0)]),
        _: 1
    }), !s.info.weapon || s.info.breath < 99 ? (n(), o("img", {
        key: 0,
        class: "hud-radmir-info__fist-logo",
        src: "https://i.imgur.com/C2cHmMF.jpeg",
        style: f({
            opacity: s.info.breath < 99 ? .25 : 1
        })
    }, null, 12, $a)) : (n(), o("div", {
        key: 1,
        class: "hud-radmir-info__fist-weapon",
        style: f({
            backgroundImage: `url('/images/hud/${s.info.weapon}.png')`
        })
    }, null, 4)), s.isNewYear ? (n(), o("img", Za)) : c("", !0), i("div", Ua, [i("div", Va, p(s.server), 1)])]), s.info.weapon ? (n(), o("div", Wa, [i("img", {
        class: "hud-radmir-info__patrons-bg",
        src: a.patronsBackground
    }, null, 8, Ga), i("div", za, [t[1] || (t[1] = i("img", {
        src: Pe
    }, null, -1)), i("div", qa, [i("div", Xa, p(s.info.ammoInClip), 1), s.isHelloween ? (n(), o("img", ja)) : (n(), o(E, {
        key: 1
    }, [k("|")], 64)), k(p(s.info.totalAmmo), 1)])])])) : c("", !0)])], 2)
}
const Qa = {
        props: {
            info: {
                type: Object,
                required: !0
            },
            server: {
                type: Number,
                default: 1
            },
            bonus: {
                type: Number,
                default: 1
            },
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            },
            isEaster: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            InfoData: Aa,
            IconBreathFill: Ba
        },
        data: () => ({
            bonuseImage: Object.assign({
                "/src/assets/images/hud/bonus/2.png": De,
                "/src/assets/images/hud/bonus/3.png": He
            }),
            patronIcons: Object.assign({
                "./assets/patrons-bg.svg": da,
                "./assets/patrons-helloween-bg.svg": ha,
                "./assets/patrons-line-helloween.svg": Ve
            }),
            logo: Object.assign({
                "/src/assets/images/hud/radmir-logo-helloween.png": xe,
                "/src/assets/images/hud/radmir-logo-new-year.png": Be,
                "/src/assets/images/hud/radmir-logo.png": Re
            })
        }),
        computed: {
            logoImage() {
                let e = null;
                return this.isHelloween && (e = "helloween"), this.isNewYear && (e = "new-year"), this.logo[`/src/assets/images/hud/radmir-logo${e?"-"+e:""}.png`]
            },
            patronsBackground() {
                let e = null;
                return this.isHelloween && (e = "helloween"), this.patronIcons[`./assets/patrons${e?"-"+e:""}-bg.svg`]
            }
        }
    },
    ei = g(Qa, [
        ["render", Ja],
        ["__scopeId", "data-v-9fbddfdb"]
    ]),
    ti = {},
    si = {
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function ai(e, t) {
    return n(), o("svg", si, t[0] || (t[0] = [i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 0H12.9231V12.0001H13.4615C15.2458 12.0001 16.6923 13.3432 16.6923 15.0001C16.6923 15.5524 17.1745 16.0001 17.7692 16.0001C18.364 16.0001 18.8462 15.5524 18.8462 15.0001V6.41429L14.8539 2.70718L16.3769 1.29297L21 5.58586V15.0001C21 16.6569 19.5535 18.0001 17.7692 18.0001C15.9849 18.0001 14.5385 16.6569 14.5385 15.0001C14.5385 14.4478 14.0563 14.0001 13.4615 14.0001H12.9231V20H0V0ZM2.15385 2H10.7692V8H2.15385V2Z",
        fill: "#F2EFDC"
    }, null, -1)]))
}
const ii = g(ti, [
        ["render", ai]
    ]),
    ni = {},
    oi = {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function ri(e, t) {
    return n(), o("svg", oi, t[0] || (t[0] = [i("path", {
        render: !0,
        d: "M26.6823 11.5405C26.1562 11.4154 25.5537 11.4715 24.9937 11.7086C24.4294 11.9458 23.9627 12.3339 23.6785 12.8082C23.373 13.3128 23.3094 13.8777 23.5045 14.3563C23.6997 14.835 24.1367 15.1886 24.7052 15.3266C24.8876 15.374 25.0786 15.3955 25.2737 15.3955C25.6428 15.3955 26.0289 15.3179 26.398 15.1627C27.6242 14.6452 28.2776 13.4809 27.8872 12.515C27.6921 12.0364 27.2508 11.6828 26.6823 11.5405Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M26.6823 11.5405C26.1562 11.4154 25.5537 11.4715 24.9937 11.7086C24.4294 11.9458 23.9627 12.3339 23.6785 12.8082C23.373 13.3128 23.3094 13.8777 23.5045 14.3563C23.6997 14.835 24.1367 15.1886 24.7052 15.3266C24.8876 15.374 25.0786 15.3955 25.2737 15.3955C25.6428 15.3955 26.0289 15.3179 26.398 15.1627C27.6242 14.6452 28.2776 13.4809 27.8872 12.515C27.6921 12.0364 27.2508 11.6828 26.6823 11.5405Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M26.6823 11.5405C26.1562 11.4154 25.5537 11.4715 24.9937 11.7086C24.4294 11.9458 23.9627 12.3339 23.6785 12.8082C23.373 13.3128 23.3094 13.8777 23.5045 14.3563C23.6997 14.835 24.1367 15.1886 24.7052 15.3266C24.8876 15.374 25.0786 15.3955 25.2737 15.3955C25.6428 15.3955 26.0289 15.3179 26.398 15.1627C27.6242 14.6452 28.2776 13.4809 27.8872 12.515C27.6921 12.0364 27.2508 11.6828 26.6823 11.5405Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M26.6823 11.5405C26.1562 11.4154 25.5537 11.4715 24.9937 11.7086C24.4294 11.9458 23.9627 12.3339 23.6785 12.8082C23.373 13.3128 23.3094 13.8777 23.5045 14.3563C23.6997 14.835 24.1367 15.1886 24.7052 15.3266C24.8876 15.374 25.0786 15.3955 25.2737 15.3955C25.6428 15.3955 26.0289 15.3179 26.398 15.1627C27.6242 14.6452 28.2776 13.4809 27.8872 12.515C27.6921 12.0364 27.2508 11.6828 26.6823 11.5405Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M14.6331 24.1449C14.1027 24.0156 13.5045 24.0759 12.9402 24.3131C12.3759 24.5503 11.9135 24.9384 11.6292 25.4084C11.3195 25.9172 11.2559 26.4821 11.451 26.9608C11.7226 27.6248 12.4099 28 13.216 28C13.5766 28 13.9627 27.9267 14.3445 27.7628C15.5749 27.2497 16.2283 26.0854 15.8337 25.1152C15.6386 24.6365 15.2016 24.2829 14.6331 24.1449Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M14.6331 24.1449C14.1027 24.0156 13.5045 24.0759 12.9402 24.3131C12.3759 24.5503 11.9135 24.9384 11.6292 25.4084C11.3195 25.9172 11.2559 26.4821 11.451 26.9608C11.7226 27.6248 12.4099 28 13.216 28C13.5766 28 13.9627 27.9267 14.3445 27.7628C15.5749 27.2497 16.2283 26.0854 15.8337 25.1152C15.6386 24.6365 15.2016 24.2829 14.6331 24.1449Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M14.6331 24.1449C14.1027 24.0156 13.5045 24.0759 12.9402 24.3131C12.3759 24.5503 11.9135 24.9384 11.6292 25.4084C11.3195 25.9172 11.2559 26.4821 11.451 26.9608C11.7226 27.6248 12.4099 28 13.216 28C13.5766 28 13.9627 27.9267 14.3445 27.7628C15.5749 27.2497 16.2283 26.0854 15.8337 25.1152C15.6386 24.6365 15.2016 24.2829 14.6331 24.1449Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M14.6331 24.1449C14.1027 24.0156 13.5045 24.0759 12.9402 24.3131C12.3759 24.5503 11.9135 24.9384 11.6292 25.4084C11.3195 25.9172 11.2559 26.4821 11.451 26.9608C11.7226 27.6248 12.4099 28 13.216 28C13.5766 28 13.9627 27.9267 14.3445 27.7628C15.5749 27.2497 16.2283 26.0854 15.8337 25.1152C15.6386 24.6365 15.2016 24.2829 14.6331 24.1449Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.16081 6.43918C3.50446 6.43918 3.83115 6.35294 4.12814 6.18045C5.26094 5.51638 5.4858 3.74839 4.62878 2.24345C3.77175 0.734188 2.15105 0.0485541 1.02249 0.712627C0.352143 1.10503 0 1.88122 0 2.76091C0 3.37323 0.169708 4.03731 0.521851 4.65394C0.924907 5.36114 1.50616 5.9131 2.15953 6.21064C2.4947 6.36156 2.83412 6.43918 3.16081 6.43918Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.16081 6.43918C3.50446 6.43918 3.83115 6.35294 4.12814 6.18045C5.26094 5.51638 5.4858 3.74839 4.62878 2.24345C3.77175 0.734188 2.15105 0.0485541 1.02249 0.712627C0.352143 1.10503 0 1.88122 0 2.76091C0 3.37323 0.169708 4.03731 0.521851 4.65394C0.924907 5.36114 1.50616 5.9131 2.15953 6.21064C2.4947 6.36156 2.83412 6.43918 3.16081 6.43918Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.16081 6.43918C3.50446 6.43918 3.83115 6.35294 4.12814 6.18045C5.26094 5.51638 5.4858 3.74839 4.62878 2.24345C3.77175 0.734188 2.15105 0.0485541 1.02249 0.712627C0.352143 1.10503 0 1.88122 0 2.76091C0 3.37323 0.169708 4.03731 0.521851 4.65394C0.924907 5.36114 1.50616 5.9131 2.15953 6.21064C2.4947 6.36156 2.83412 6.43918 3.16081 6.43918Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.16081 6.43918C3.50446 6.43918 3.83115 6.35294 4.12814 6.18045C5.26094 5.51638 5.4858 3.74839 4.62878 2.24345C3.77175 0.734188 2.15105 0.0485541 1.02249 0.712627C0.352143 1.10503 0 1.88122 0 2.76091C0 3.37323 0.169708 4.03731 0.521851 4.65394C0.924907 5.36114 1.50616 5.9131 2.15953 6.21064C2.4947 6.36156 2.83412 6.43918 3.16081 6.43918Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M21.8117 23.3041C21.5571 23.7525 21.5486 24.3217 21.7862 24.8651C22.0068 25.3696 22.4184 25.818 22.9487 26.1285C23.4154 26.4045 23.9076 26.5382 24.3658 26.5382C25.0319 26.5382 25.6131 26.2536 25.9186 25.7146C26.4362 24.809 25.9356 23.5671 24.7858 22.8944C23.6318 22.2174 22.3293 22.3985 21.8117 23.3041Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M21.8117 23.3041C21.5571 23.7525 21.5486 24.3217 21.7862 24.8651C22.0068 25.3696 22.4184 25.818 22.9487 26.1285C23.4154 26.4045 23.9076 26.5382 24.3658 26.5382C25.0319 26.5382 25.6131 26.2536 25.9186 25.7146C26.4362 24.809 25.9356 23.5671 24.7858 22.8944C23.6318 22.2174 22.3293 22.3985 21.8117 23.3041Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M21.8117 23.3041C21.5571 23.7525 21.5486 24.3217 21.7862 24.8651C22.0068 25.3696 22.4184 25.818 22.9487 26.1285C23.4154 26.4045 23.9076 26.5382 24.3658 26.5382C25.0319 26.5382 25.6131 26.2536 25.9186 25.7146C26.4362 24.809 25.9356 23.5671 24.7858 22.8944C23.6318 22.2174 22.3293 22.3985 21.8117 23.3041Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M21.8117 23.3041C21.5571 23.7525 21.5486 24.3217 21.7862 24.8651C22.0068 25.3696 22.4184 25.818 22.9487 26.1285C23.4154 26.4045 23.9076 26.5382 24.3658 26.5382C25.0319 26.5382 25.6131 26.2536 25.9186 25.7146C26.4362 24.809 25.9356 23.5671 24.7858 22.8944C23.6318 22.2174 22.3293 22.3985 21.8117 23.3041Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M22.9402 2.8299C22.5329 2.51942 21.9772 2.44612 21.4171 2.62723C20.8995 2.7954 20.4158 3.16194 20.0552 3.65784C19.6946 4.15805 19.4909 4.73588 19.4867 5.28783C19.4825 5.88291 19.7158 6.40037 20.1273 6.70654C20.3904 6.90489 20.7128 7.00407 21.0565 7.00407C21.2474 7.00407 21.4468 6.97389 21.6505 6.90921C22.1681 6.74103 22.6517 6.3745 23.0124 5.87429C23.373 5.37839 23.5767 4.80056 23.5809 4.2486C23.5851 3.65352 23.3518 3.13606 22.9402 2.8299Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M22.9402 2.8299C22.5329 2.51942 21.9772 2.44612 21.4171 2.62723C20.8995 2.7954 20.4158 3.16194 20.0552 3.65784C19.6946 4.15805 19.4909 4.73588 19.4867 5.28783C19.4825 5.88291 19.7158 6.40037 20.1273 6.70654C20.3904 6.90489 20.7128 7.00407 21.0565 7.00407C21.2474 7.00407 21.4468 6.97389 21.6505 6.90921C22.1681 6.74103 22.6517 6.3745 23.0124 5.87429C23.373 5.37839 23.5767 4.80056 23.5809 4.2486C23.5851 3.65352 23.3518 3.13606 22.9402 2.8299Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M22.9402 2.8299C22.5329 2.51942 21.9772 2.44612 21.4171 2.62723C20.8995 2.7954 20.4158 3.16194 20.0552 3.65784C19.6946 4.15805 19.4909 4.73588 19.4867 5.28783C19.4825 5.88291 19.7158 6.40037 20.1273 6.70654C20.3904 6.90489 20.7128 7.00407 21.0565 7.00407C21.2474 7.00407 21.4468 6.97389 21.6505 6.90921C22.1681 6.74103 22.6517 6.3745 23.0124 5.87429C23.373 5.37839 23.5767 4.80056 23.5809 4.2486C23.5851 3.65352 23.3518 3.13606 22.9402 2.8299Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M22.9402 2.8299C22.5329 2.51942 21.9772 2.44612 21.4171 2.62723C20.8995 2.7954 20.4158 3.16194 20.0552 3.65784C19.6946 4.15805 19.4909 4.73588 19.4867 5.28783C19.4825 5.88291 19.7158 6.40037 20.1273 6.70654C20.3904 6.90489 20.7128 7.00407 21.0565 7.00407C21.2474 7.00407 21.4468 6.97389 21.6505 6.90921C22.1681 6.74103 22.6517 6.3745 23.0124 5.87429C23.373 5.37839 23.5767 4.80056 23.5809 4.2486C23.5851 3.65352 23.3518 3.13606 22.9402 2.8299Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.30506 14.2614L4.56938 14.973C4.95547 15.1886 5.33731 15.4257 5.42216 15.7491C5.50702 16.0898 5.26518 16.4865 5.00638 16.9005C4.95122 16.991 4.89607 17.0773 4.84516 17.1635C3.8057 18.9272 4.04753 21.3075 5.40519 22.7003C6.16039 23.4722 7.20409 23.8603 8.23507 23.8603C9.18543 23.8603 10.1273 23.5283 10.8104 22.8513C11.2219 22.4459 11.5316 21.95 11.8329 21.4757C12.2784 20.7599 12.7026 20.0872 13.3772 19.8586C14.1282 19.6085 14.9767 20.0052 15.5537 20.3804C15.7871 20.5356 16.0162 20.6995 16.241 20.8634C16.7502 21.2385 17.2805 21.6266 17.8999 21.8681C19.3043 22.4287 21.3492 22.2389 22.376 20.7944C22.779 20.2252 22.6008 19.2894 22.2954 18.8668C22.0111 18.4701 21.5741 18.1553 21.1583 17.8492C20.7425 17.5516 20.314 17.2411 20.1231 16.9048C19.7031 16.1717 19.3 15.3222 19.4994 14.559C19.5715 14.283 19.7243 14.02 19.8855 13.7397L19.9364 13.6534C20.0382 13.4723 20.2461 13.2265 20.4625 12.9721C20.9207 12.4374 21.3917 11.8854 21.4553 11.3292C21.5656 10.4366 21.2686 9.57844 20.6874 9.09116C20.0467 8.55214 19.2618 8.52627 18.5024 8.50039C18.0357 8.48315 17.5902 8.47021 17.2041 8.33653C17.0641 8.2891 17.0344 8.2546 17.0302 8.24598C17.0217 8.23735 17.009 8.20286 16.9962 8.0778C16.958 7.6509 17.0471 7.20675 17.2381 6.82296C17.2932 6.71516 17.3526 6.60304 17.412 6.49093C17.7429 5.8786 18.1163 5.18434 17.9127 4.51596C17.7981 4.13649 17.5181 3.83032 17.0768 3.60609C16.6738 3.39479 15.9483 3.01964 15.1804 3.01964C14.633 3.01964 14.0603 3.20937 13.5639 3.78289C13.0717 4.35209 12.7917 5.15847 12.7578 6.12439L12.7535 6.28826C12.7451 6.6246 12.7366 6.93939 12.5923 7.13775C12.3505 7.4741 11.7268 7.4396 11.2474 7.34905C10.7552 7.25849 10.2673 7.13775 9.77941 6.99114C9.57152 6.92646 9.31271 6.84884 9.02845 6.89627C8.8248 6.93077 8.6254 7.02564 8.43872 7.18087C7.80231 7.70696 7.60291 8.67288 7.98899 9.38008C8.13324 9.64312 8.33689 9.84148 8.51509 10.0183L8.60418 10.1131C8.93936 10.4538 9.32544 10.967 9.25331 11.4758C9.21089 11.782 9.00724 11.9846 8.84602 12.1011C8.48963 12.3555 7.97626 12.4546 7.53078 12.3598C6.85619 12.2132 6.26222 11.7863 5.63854 11.3378C5.49429 11.23 5.35004 11.1265 5.20154 11.023C4.70515 10.678 4.10268 10.3201 3.40688 10.2598C2.57956 10.1908 1.80739 10.6134 1.52737 11.2904C1.27705 11.8854 1.42979 12.6487 1.90921 13.2265C2.30378 13.7052 2.83412 14.0027 3.30506 14.2614Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.30506 14.2614L4.56938 14.973C4.95547 15.1886 5.33731 15.4257 5.42216 15.7491C5.50702 16.0898 5.26518 16.4865 5.00638 16.9005C4.95122 16.991 4.89607 17.0773 4.84516 17.1635C3.8057 18.9272 4.04753 21.3075 5.40519 22.7003C6.16039 23.4722 7.20409 23.8603 8.23507 23.8603C9.18543 23.8603 10.1273 23.5283 10.8104 22.8513C11.2219 22.4459 11.5316 21.95 11.8329 21.4757C12.2784 20.7599 12.7026 20.0872 13.3772 19.8586C14.1282 19.6085 14.9767 20.0052 15.5537 20.3804C15.7871 20.5356 16.0162 20.6995 16.241 20.8634C16.7502 21.2385 17.2805 21.6266 17.8999 21.8681C19.3043 22.4287 21.3492 22.2389 22.376 20.7944C22.779 20.2252 22.6008 19.2894 22.2954 18.8668C22.0111 18.4701 21.5741 18.1553 21.1583 17.8492C20.7425 17.5516 20.314 17.2411 20.1231 16.9048C19.7031 16.1717 19.3 15.3222 19.4994 14.559C19.5715 14.283 19.7243 14.02 19.8855 13.7397L19.9364 13.6534C20.0382 13.4723 20.2461 13.2265 20.4625 12.9721C20.9207 12.4374 21.3917 11.8854 21.4553 11.3292C21.5656 10.4366 21.2686 9.57844 20.6874 9.09116C20.0467 8.55214 19.2618 8.52627 18.5024 8.50039C18.0357 8.48315 17.5902 8.47021 17.2041 8.33653C17.0641 8.2891 17.0344 8.2546 17.0302 8.24598C17.0217 8.23735 17.009 8.20286 16.9962 8.0778C16.958 7.6509 17.0471 7.20675 17.2381 6.82296C17.2932 6.71516 17.3526 6.60304 17.412 6.49093C17.7429 5.8786 18.1163 5.18434 17.9127 4.51596C17.7981 4.13649 17.5181 3.83032 17.0768 3.60609C16.6738 3.39479 15.9483 3.01964 15.1804 3.01964C14.633 3.01964 14.0603 3.20937 13.5639 3.78289C13.0717 4.35209 12.7917 5.15847 12.7578 6.12439L12.7535 6.28826C12.7451 6.6246 12.7366 6.93939 12.5923 7.13775C12.3505 7.4741 11.7268 7.4396 11.2474 7.34905C10.7552 7.25849 10.2673 7.13775 9.77941 6.99114C9.57152 6.92646 9.31271 6.84884 9.02845 6.89627C8.8248 6.93077 8.6254 7.02564 8.43872 7.18087C7.80231 7.70696 7.60291 8.67288 7.98899 9.38008C8.13324 9.64312 8.33689 9.84148 8.51509 10.0183L8.60418 10.1131C8.93936 10.4538 9.32544 10.967 9.25331 11.4758C9.21089 11.782 9.00724 11.9846 8.84602 12.1011C8.48963 12.3555 7.97626 12.4546 7.53078 12.3598C6.85619 12.2132 6.26222 11.7863 5.63854 11.3378C5.49429 11.23 5.35004 11.1265 5.20154 11.023C4.70515 10.678 4.10268 10.3201 3.40688 10.2598C2.57956 10.1908 1.80739 10.6134 1.52737 11.2904C1.27705 11.8854 1.42979 12.6487 1.90921 13.2265C2.30378 13.7052 2.83412 14.0027 3.30506 14.2614Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.30506 14.2614L4.56938 14.973C4.95547 15.1886 5.33731 15.4257 5.42216 15.7491C5.50702 16.0898 5.26518 16.4865 5.00638 16.9005C4.95122 16.991 4.89607 17.0773 4.84516 17.1635C3.8057 18.9272 4.04753 21.3075 5.40519 22.7003C6.16039 23.4722 7.20409 23.8603 8.23507 23.8603C9.18543 23.8603 10.1273 23.5283 10.8104 22.8513C11.2219 22.4459 11.5316 21.95 11.8329 21.4757C12.2784 20.7599 12.7026 20.0872 13.3772 19.8586C14.1282 19.6085 14.9767 20.0052 15.5537 20.3804C15.7871 20.5356 16.0162 20.6995 16.241 20.8634C16.7502 21.2385 17.2805 21.6266 17.8999 21.8681C19.3043 22.4287 21.3492 22.2389 22.376 20.7944C22.779 20.2252 22.6008 19.2894 22.2954 18.8668C22.0111 18.4701 21.5741 18.1553 21.1583 17.8492C20.7425 17.5516 20.314 17.2411 20.1231 16.9048C19.7031 16.1717 19.3 15.3222 19.4994 14.559C19.5715 14.283 19.7243 14.02 19.8855 13.7397L19.9364 13.6534C20.0382 13.4723 20.2461 13.2265 20.4625 12.9721C20.9207 12.4374 21.3917 11.8854 21.4553 11.3292C21.5656 10.4366 21.2686 9.57844 20.6874 9.09116C20.0467 8.55214 19.2618 8.52627 18.5024 8.50039C18.0357 8.48315 17.5902 8.47021 17.2041 8.33653C17.0641 8.2891 17.0344 8.2546 17.0302 8.24598C17.0217 8.23735 17.009 8.20286 16.9962 8.0778C16.958 7.6509 17.0471 7.20675 17.2381 6.82296C17.2932 6.71516 17.3526 6.60304 17.412 6.49093C17.7429 5.8786 18.1163 5.18434 17.9127 4.51596C17.7981 4.13649 17.5181 3.83032 17.0768 3.60609C16.6738 3.39479 15.9483 3.01964 15.1804 3.01964C14.633 3.01964 14.0603 3.20937 13.5639 3.78289C13.0717 4.35209 12.7917 5.15847 12.7578 6.12439L12.7535 6.28826C12.7451 6.6246 12.7366 6.93939 12.5923 7.13775C12.3505 7.4741 11.7268 7.4396 11.2474 7.34905C10.7552 7.25849 10.2673 7.13775 9.77941 6.99114C9.57152 6.92646 9.31271 6.84884 9.02845 6.89627C8.8248 6.93077 8.6254 7.02564 8.43872 7.18087C7.80231 7.70696 7.60291 8.67288 7.98899 9.38008C8.13324 9.64312 8.33689 9.84148 8.51509 10.0183L8.60418 10.1131C8.93936 10.4538 9.32544 10.967 9.25331 11.4758C9.21089 11.782 9.00724 11.9846 8.84602 12.1011C8.48963 12.3555 7.97626 12.4546 7.53078 12.3598C6.85619 12.2132 6.26222 11.7863 5.63854 11.3378C5.49429 11.23 5.35004 11.1265 5.20154 11.023C4.70515 10.678 4.10268 10.3201 3.40688 10.2598C2.57956 10.1908 1.80739 10.6134 1.52737 11.2904C1.27705 11.8854 1.42979 12.6487 1.90921 13.2265C2.30378 13.7052 2.83412 14.0027 3.30506 14.2614Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M3.30506 14.2614L4.56938 14.973C4.95547 15.1886 5.33731 15.4257 5.42216 15.7491C5.50702 16.0898 5.26518 16.4865 5.00638 16.9005C4.95122 16.991 4.89607 17.0773 4.84516 17.1635C3.8057 18.9272 4.04753 21.3075 5.40519 22.7003C6.16039 23.4722 7.20409 23.8603 8.23507 23.8603C9.18543 23.8603 10.1273 23.5283 10.8104 22.8513C11.2219 22.4459 11.5316 21.95 11.8329 21.4757C12.2784 20.7599 12.7026 20.0872 13.3772 19.8586C14.1282 19.6085 14.9767 20.0052 15.5537 20.3804C15.7871 20.5356 16.0162 20.6995 16.241 20.8634C16.7502 21.2385 17.2805 21.6266 17.8999 21.8681C19.3043 22.4287 21.3492 22.2389 22.376 20.7944C22.779 20.2252 22.6008 19.2894 22.2954 18.8668C22.0111 18.4701 21.5741 18.1553 21.1583 17.8492C20.7425 17.5516 20.314 17.2411 20.1231 16.9048C19.7031 16.1717 19.3 15.3222 19.4994 14.559C19.5715 14.283 19.7243 14.02 19.8855 13.7397L19.9364 13.6534C20.0382 13.4723 20.2461 13.2265 20.4625 12.9721C20.9207 12.4374 21.3917 11.8854 21.4553 11.3292C21.5656 10.4366 21.2686 9.57844 20.6874 9.09116C20.0467 8.55214 19.2618 8.52627 18.5024 8.50039C18.0357 8.48315 17.5902 8.47021 17.2041 8.33653C17.0641 8.2891 17.0344 8.2546 17.0302 8.24598C17.0217 8.23735 17.009 8.20286 16.9962 8.0778C16.958 7.6509 17.0471 7.20675 17.2381 6.82296C17.2932 6.71516 17.3526 6.60304 17.412 6.49093C17.7429 5.8786 18.1163 5.18434 17.9127 4.51596C17.7981 4.13649 17.5181 3.83032 17.0768 3.60609C16.6738 3.39479 15.9483 3.01964 15.1804 3.01964C14.633 3.01964 14.0603 3.20937 13.5639 3.78289C13.0717 4.35209 12.7917 5.15847 12.7578 6.12439L12.7535 6.28826C12.7451 6.6246 12.7366 6.93939 12.5923 7.13775C12.3505 7.4741 11.7268 7.4396 11.2474 7.34905C10.7552 7.25849 10.2673 7.13775 9.77941 6.99114C9.57152 6.92646 9.31271 6.84884 9.02845 6.89627C8.8248 6.93077 8.6254 7.02564 8.43872 7.18087C7.80231 7.70696 7.60291 8.67288 7.98899 9.38008C8.13324 9.64312 8.33689 9.84148 8.51509 10.0183L8.60418 10.1131C8.93936 10.4538 9.32544 10.967 9.25331 11.4758C9.21089 11.782 9.00724 11.9846 8.84602 12.1011C8.48963 12.3555 7.97626 12.4546 7.53078 12.3598C6.85619 12.2132 6.26222 11.7863 5.63854 11.3378C5.49429 11.23 5.35004 11.1265 5.20154 11.023C4.70515 10.678 4.10268 10.3201 3.40688 10.2598C2.57956 10.1908 1.80739 10.6134 1.52737 11.2904C1.27705 11.8854 1.42979 12.6487 1.90921 13.2265C2.30378 13.7052 2.83412 14.0027 3.30506 14.2614Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M9.93215 4.71431C10.1019 4.71431 10.2716 4.68413 10.437 4.62376C10.9165 4.45127 11.2856 4.02437 11.451 3.45516C11.6038 2.92477 11.5741 2.31244 11.3704 1.7303C11.1668 1.14384 10.8061 0.652257 10.3607 0.341782C9.87699 0.0054328 9.32544 -0.0894348 8.84177 0.0873639C8.36235 0.25985 7.99324 0.686754 7.82777 1.25596C7.67503 1.78636 7.70473 2.39868 7.90838 2.98083C8.2775 4.03731 9.10482 4.71431 9.93215 4.71431Z",
        fill: "#F2EFDC"
    }, null, -1), i("path", {
        render: !0,
        d: "M9.93215 4.71431C10.1019 4.71431 10.2716 4.68413 10.437 4.62376C10.9165 4.45127 11.2856 4.02437 11.451 3.45516C11.6038 2.92477 11.5741 2.31244 11.3704 1.7303C11.1668 1.14384 10.8061 0.652257 10.3607 0.341782C9.87699 0.0054328 9.32544 -0.0894348 8.84177 0.0873639C8.36235 0.25985 7.99324 0.686754 7.82777 1.25596C7.67503 1.78636 7.70473 2.39868 7.90838 2.98083C8.2775 4.03731 9.10482 4.71431 9.93215 4.71431Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1), i("path", {
        render: !0,
        d: "M9.93215 4.71431C10.1019 4.71431 10.2716 4.68413 10.437 4.62376C10.9165 4.45127 11.2856 4.02437 11.451 3.45516C11.6038 2.92477 11.5741 2.31244 11.3704 1.7303C11.1668 1.14384 10.8061 0.652257 10.3607 0.341782C9.87699 0.0054328 9.32544 -0.0894348 8.84177 0.0873639C8.36235 0.25985 7.99324 0.686754 7.82777 1.25596C7.67503 1.78636 7.70473 2.39868 7.90838 2.98083C8.2775 4.03731 9.10482 4.71431 9.93215 4.71431Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.25"
    }, null, -1), i("path", {
        render: !0,
        d: "M9.93215 4.71431C10.1019 4.71431 10.2716 4.68413 10.437 4.62376C10.9165 4.45127 11.2856 4.02437 11.451 3.45516C11.6038 2.92477 11.5741 2.31244 11.3704 1.7303C11.1668 1.14384 10.8061 0.652257 10.3607 0.341782C9.87699 0.0054328 9.32544 -0.0894348 8.84177 0.0873639C8.36235 0.25985 7.99324 0.686754 7.82777 1.25596C7.67503 1.78636 7.70473 2.39868 7.90838 2.98083C8.2775 4.03731 9.10482 4.71431 9.93215 4.71431Z",
        fill: "#F2EFDC",
        "fill-opacity": "0.7"
    }, null, -1)]))
}
const li = g(ni, [
        ["render", ri]
    ]),
    di = {
        class: "hud-radmir-speedometer-secondary__fuel"
    },
    hi = ["stroke-dashoffset"],
    ui = {
        class: "hud-radmir-speedometer-secondary__data-container"
    },
    ci = {
        class: "hud-radmir-speedometer-secondary__data-value"
    },
    _i = {
        class: "hud-radmir-speedometer-secondary__data-text"
    },
    mi = {
        class: "hud-radmir-speedometer-secondary__wash"
    },
    fi = ["stroke-dashoffset"],
    gi = {
        class: "hud-radmir-speedometer-secondary__data-container"
    },
    pi = {
        class: "hud-radmir-speedometer-secondary__data-value"
    };

function Ci(e, t, s, l, r, a) {
    const d = m("IconFuel"),
        h = m("IconWash");
    return n(), o("div", {
        class: v(["hud-radmir-speedometer-secondary", {
            "hud-radmir-speedometer-secondary_helloween": s.isHelloween
        }])
    }, [i("div", di, [(n(), o("svg", {
        class: v(["hud-radmir-speedometer-secondary__fill", {
            "hud-radmir-speedometer-secondary__fill_danger": a.isFuelDanger
        }]),
        style: {
            width: "13.80vh",
            height: "6.94vh"
        },
        viewBox: "0 0 149 75",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t[0] || (t[0] = i("path", {
        d: "M1.41822 74.55C23.7597 15.6868 89.5892 -13.9199 148.452 8.42162",
        stroke: "#F4F1E1",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-dasharray": "1 8"
    }, null, -1)), i("path", {
        class: "hud-radmir-speedometer-secondary__fill__fill",
        d: "M1.41822 74.55C23.7597 15.6868 89.5892 -13.9199 148.452 8.42162",
        stroke: "#F4F1E1",
        "stroke-width": "4",
        "stroke-dasharray": "300",
        "stroke-dashoffset": 300 - 180 * (s.speedometer.fuel / s.speedometer.maxFuel)
    }, null, 8, hi)], 2)), i("div", {
        class: v(["hud-radmir-speedometer-secondary__data", {
            "hud-radmir-speedometer-secondary__data_danger": a.isFuelDanger
        }])
    }, [t[1] || (t[1] = i("div", {
        class: "hud-radmir-speedometer-secondary__data__before"
    }, null, -1)), i("div", ui, [i("div", ci, [u(d), k(p(s.speedometer.fuel > 0 ? s.speedometer.fuel : 0), 1)]), i("div", _i, p(s.speedometer.isElectro ? "%" : "л"), 1)])], 2)]), i("div", mi, [(n(), o("svg", {
        class: v(["hud-radmir-speedometer-secondary__fill", {
            "hud-radmir-speedometer-secondary__fill_danger": a.isWashDanger
        }]),
        style: {
            width: "8.89vh",
            height: "9.44vh"
        },
        viewBox: "0 0 96 102",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t[2] || (t[2] = i("path", {
        d: "M95.2706 133.051C33.2653 122.126 -8.14356 63.0043 2.7814 0.998895",
        stroke: "#F4F1E1",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-dasharray": "1 8"
    }, null, -1)), i("path", {
        class: "hud-radmir-speedometer-secondary__fill__fill",
        d: "M95.2706 133.051C33.2653 122.126 -8.14356 63.0043 2.7814 0.998895",
        stroke: "#F4F1E1",
        "stroke-width": "4",
        "stroke-dasharray": "300",
        "stroke-dashoffset": 235 - 115 * s.speedometer.params.wash
    }, null, 8, fi)], 2)), i("div", {
        class: v(["hud-radmir-speedometer-secondary__data", {
            "hud-radmir-speedometer-secondary__data_danger": a.isWashDanger
        }])
    }, [t[4] || (t[4] = i("div", {
        class: "hud-radmir-speedometer-secondary__data__before"
    }, null, -1)), i("div", gi, [i("div", pi, [u(h), k(p((s.speedometer.params.wash * 100).toFixed(0)), 1)]), t[3] || (t[3] = i("div", {
        class: "hud-radmir-speedometer-secondary__data-text"
    }, "загрязнение", -1))])], 2)])], 2)
}
const vi = {
        props: {
            speedometer: {
                type: Object,
                required: !0
            },
            isHelloween: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            IconFuel: ii,
            IconWash: li
        },
        computed: {
            isWashDanger() {
                return 1 - this.speedometer.params.wash < .25
            },
            isFuelDanger() {
                return this.speedometer.fuel / this.speedometer.maxFuel * 100 < 10
            }
        }
    },
    yi = g(vi, [
        ["render", Ci]
    ]),
    wi = {},
    bi = {
        width: "38",
        height: "13",
        viewBox: "0 0 38 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Si(e, t) {
    return n(), o("svg", bi, t[0] || (t[0] = [i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M30.875 13C34.8101 13 38 10.0898 38 6.5C38 2.91022 34.8101 0 30.875 0C28.0914 0 25.6799 1.45669 24.5077 3.58008L24.5417 3.61111L23.75 6.86111L23.2019 3.61111H2.375L0 5.41667L3.5424 8.3246L5.54167 6.5L7.91667 8.66667H8.70833L10.2917 7.22222L11.875 8.66667H13.4583L15.0417 7.22222L16.625 8.66667H17.4167L19.7917 6.5L22.1667 8.66667H24.1551C25.1339 11.1913 27.7733 13 30.875 13ZM34.0417 7.94444C34.9161 7.94444 35.625 7.29774 35.625 6.5C35.625 5.70225 34.9161 5.05556 34.0417 5.05556C33.1672 5.05556 32.4583 5.70225 32.4583 6.5C32.4583 7.29774 33.1672 7.94444 34.0417 7.94444Z",
        fill: "#F8F6ED"
    }, null, -1)]))
}
const We = g(wi, [
        ["render", Si]
    ]),
    Ei = {},
    Ti = {
        width: "40",
        height: "25",
        viewBox: "0 0 40 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Mi(e, t) {
    return n(), o("svg", Ti, t[0] || (t[0] = [i("path", {
        d: "M14.5455 3.57143V0H29.0909V3.57143H23.6364V5.35714L20 7.14286V3.57143H14.5455Z",
        fill: "#F8F6ED"
    }, null, -1), i("path", {
        d: "M20 7.14286H10.9091L9.09091 10.7143H5.45455V21.4286H9.09091L10.9091 25H32.7273L34.5455 21.4286V10.7143L32.7273 7.14286H20Z",
        fill: "#F8F6ED"
    }, null, -1), i("path", {
        d: "M0 8.92857H3.63636V23.2143H0V8.92857Z",
        fill: "#F8F6ED"
    }, null, -1), i("path", {
        d: "M40 8.92857H36.3636V23.2143H40V8.92857Z",
        fill: "#F8F6ED"
    }, null, -1)]))
}
const ki = g(Ei, [
        ["render", Mi]
    ]),
    Ii = {},
    Oi = {
        width: "19",
        height: "26",
        viewBox: "0 0 19 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Li(e, t) {
    return n(), o("svg", Oi, t[0] || (t[0] = [i("path", {
        d: "M7 5.07031C7.50705 1.68141 9.84258 -0.463552 12.9465 0.0855578C16.0262 0.630379 17.9604 2.21279 17.5 5.57028L15.7561 11.9648L12.981 11.7769L14.4889 6.14426L14.5 6.07028C14.7379 4.48018 14.2306 3.37592 12.5 3.06976C10.7694 2.7636 9.98231 3.96572 9.7444 5.55582L8.83418 9.31615L16.6829 11.9648L19 13.9804L4.63415 8.94136L1.39024 21.539L0 20.0273L3.2439 7.42965L6.15253 8.41119L7 5.07031Z",
        fill: "#F8F6ED"
    }, null, -1), i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M1.39024 21.539L5.56098 9.94918L19 13.9804L15.7561 25.5703L1.39024 21.539ZM12.0488 17.5078C12.0488 18.621 11.2189 19.5234 10.1951 19.5234C9.17137 19.5234 8.34146 18.621 8.34146 17.5078C8.34146 16.3946 9.17137 15.4922 10.1951 15.4922C11.2189 15.4922 12.0488 16.3946 12.0488 17.5078Z",
        fill: "#F8F6ED"
    }, null, -1)]))
}
const Pi = g(Ii, [
        ["render", Li]
    ]),
    Ai = {},
    Di = {
        width: "28",
        height: "17",
        viewBox: "0 0 28 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Hi(e, t) {
    return n(), o("svg", Di, t[0] || (t[0] = [i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.3409 0.0806263C9.82644 2.71501 7.70617 9.74003 11.3409 16.765C12.1561 16.8725 13.091 16.9521 14.0929 16.9843C12.4851 14.0246 10.6648 9.17071 11.9996 5.5C12.2988 8.63993 13.6711 14.8382 16.8385 16.9467C22.1648 16.6214 28.0007 14.718 28.0007 8.8619C28.0007 0.783128 16.8942 -0.358437 11.3409 0.0806263Z",
        fill: "#F8F6ED"
    }, null, -1), i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 16.5796L8.15634 14.3903C7.99544 13.8279 7.86097 13.2695 7.75054 12.7165L0 14.7969V16.5796ZM0 13.1796L7.49998 11.1665C7.42664 10.5761 7.37921 9.99418 7.35454 9.42278L0 11.3969V13.1796ZM0 9.77965L7.3437 7.80844C7.36205 7.18561 7.40582 6.57898 7.47047 5.99167L0 7.9969V9.77965ZM0 6.37965L7.71931 4.30762C7.84365 3.63864 7.99254 3.00327 8.1576 2.40723L0 4.5969V6.37965Z",
        fill: "#F8F6ED",
        "fill-opacity": "0.85"
    }, null, -1)]))
}
const xi = g(Ai, [
        ["render", Hi]
    ]),
    Bi = {},
    Ri = {
        width: "35",
        height: "26",
        viewBox: "0 0 35 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Fi(e, t) {
    return n(), o("svg", Ri, t[0] || (t[0] = [i("path", {
        render: !0,
        d: "M11.7434 10.2143H13.8158L12.4342 11.6071L10.1316 12.0714L6.90789 14.3929L8.51974 11.6071L11.2829 11.1429L11.7434 10.2143Z",
        fill: "white"
    }, null, -1), i("path", {
        render: !0,
        d: "M30.9402 0L35 7.34393L27.9681 11.5839L23.9083 4.24002L30.9402 0Z",
        fill: "white"
    }, null, -1), i("path", {
        render: !0,
        d: "M5.62548 15.2641L11.0917 21.76L4.05984 26L0 18.6561L5.62548 15.2641Z",
        fill: "white"
    }, null, -1), i("path", {
        render: !0,
        d: "M14.0637 10.176L18.1235 17.52L15.9596 17.8456L14.6076 19.64L11.0917 21.76L7.03185 14.4161L10.5478 12.296L12.7117 11.9704L14.0637 10.176Z",
        fill: "white"
    }, null, -1), i("path", {
        render: !0,
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M28.3741 12.3183L22.6903 2.03684L15.6585 6.27686L22.1542 18.0271L29.1861 13.7871L28.3741 12.3183ZM28.3741 12.3183L22.7486 15.7103L17.8768 6.89764L22.0959 4.35363L28.3741 12.3183Z",
        fill: "white"
    }, null, -1), i("path", {
        render: !0,
        d: "M24.4079 2.32143L23.0263 1.85714L24.4079 3.71429L30.8553 0L24.4079 2.32143Z",
        fill: "white"
    }, null, -1)]))
}
const Ni = g(Bi, [
        ["render", Fi]
    ]),
    Yi = {
        class: "hud-radmir-speedometer-indicators"
    };

function Ki(e, t, s, l, r, a) {
    return n(), o("div", Yi, [(n(!0), o(E, null, M(e.indicators, (d, h) => (n(), o("div", {
        class: v(["hud-radmir-speedometer-indicators__item", {
            "hud-radmir-speedometer-indicators__item_disabled": !s.speedometer.params[d]
        }]),
        key: h
    }, [(n(), w(ie(`Icon${h}`)))], 2))), 128))])
}
const $i = {
        props: {
            speedometer: {
                type: Object,
                required: !0
            }
        },
        data: () => ({
            indicators: {
                Lock: "doors",
                Lights: "lights",
                Rem: "rem",
                Key: "key"
            }
        }),
        components: {
            IconLock: Pi,
            IconLights: xi,
            IconRem: Ni,
            IconKey: We
        }
    },
    Zi = g($i, [
        ["render", Ki]
    ]),
    Ui = {
        class: "hud-radmir-speedometer-mileage"
    },
    Vi = {
        class: "hud-radmir-speedometer-mileage__container"
    };

function Wi(e, t, s, l, r, a) {
    return n(), o("div", Ui, [i("div", Vi, [(n(!0), o(E, null, M(e.DIGITS_COUNT, (d, h) => (n(), o("div", {
        class: "hud-radmir-speedometer-mileage__item",
        key: h
    }, [(n(!0), o(E, null, M(a.digits, _ => (n(), o("div", {
        class: "hud-radmir-speedometer-mileage__item-value",
        style: f({
            marginTop: _ === e.MAX_DIGIT ? `${(e.MAX_DIGIT-Number(a.mileage[h]))*-2.04}vh` : 0
        }),
        key: _
    }, p(_), 5))), 128))]))), 128))])])
}
const ce = 7,
    _e = 9,
    Gi = {
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            DIGITS_COUNT: ce,
            MAX_DIGIT: _e
        }),
        computed: {
            digits() {
                let e = [];
                for (let t = _e; t >= 0; --t) e.push(t);
                return e
            },
            mileage() {
                let e = this.value.toString(),
                    t = "";
                for (let s = 0; s < ce - e.length; ++s) t += "0";
                return t + e
            }
        }
    },
    zi = g(Gi, [
        ["render", Wi],
        ["__scopeId", "data-v-9101ac8b"]
    ]),
    qi = {
        class: "hud-radmir-speedometer-hint"
    },
    Xi = {
        class: "hud-radmir-speedometer-hint__content"
    },
    ji = {
        class: "hud-radmir-speedometer-hint__icon"
    },
    Ji = {
        class: "hud-radmir-speedometer-hint__text"
    };

function Qi(e, t, s, l, r, a) {
    const d = m("ControlsButton"),
        h = m("ControlsButtonContainer");
    return n(), o("div", qi, [i("div", Xi, [i("div", ji, [ae(e.$slots, "default")]), i("div", Ji, [u(h, {
        text: s.text
    }, {
        default: C(() => [u(d, {
            text: s.keyText,
            keyCode: s.keyCode
        }, null, 8, ["text", "keyCode"])]),
        _: 1
    }, 8, ["text"])])])])
}
const en = {
        props: {
            text: {
                type: String,
                required: !0
            },
            keyText: {
                type: String,
                required: !0
            },
            keyCode: {
                type: Number,
                required: !0
            }
        },
        components: {
            ControlsButtonContainer: ne,
            ControlsButton: K
        }
    },
    tn = g(en, [
        ["render", Qi]
    ]),
    sn = {},
    an = {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function nn(e, t) {
    return n(), o("svg", an, t[0] || (t[0] = [i("path", {
        d: "M14.8618 0L0 12.5L14.8618 25V15.3869L25 15.3869L14.8618 9.61339L14.8618 0Z",
        fill: "#F4F1E1"
    }, null, -1)]))
}
const on = g(sn, [
        ["render", nn]
    ]),
    rn = {},
    ln = {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function dn(e, t) {
    return n(), o("svg", ln, t[0] || (t[0] = [i("path", {
        d: "M10.1382 0L25 12.5L10.1382 25V15.3869L0 15.3869L10.1382 9.61339L10.1382 0Z",
        fill: "#F4F1E1"
    }, null, -1)]))
}
const hn = g(rn, [
        ["render", dn]
    ]),
    un = "" + new URL("speedometer-data-bg-b468c95c.svg",
        import.meta.url).href,
    cn = {
        class: "hud-radmir-speedometer-main"
    },
    _n = {
        class: "hud-radmir-speedometer-main__speed-fill",
        style: {
            width: "25.65vh",
            height: "27.04vh"
        },
        viewBox: "0 0 277 292",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    mn = ["stroke-dashoffset"],
    fn = {
        key: 0,
        class: "hud-radmir-speedometer-main__data-bg",
        src: un
    },
    gn = {
        class: "hud-radmir-speedometer-main__data-value"
    };

function pn(e, t, s, l, r, a) {
    const d = m("SpeedometerMileage"),
        h = m("IconKey"),
        _ = m("SpeedometerHint"),
        y = m("IconEngine"),
        S = m("SpeedometerIndicators");
    return n(), o("div", cn, [i("div", {
        class: v(["hud-radmir-speedometer-main__speed", {
            "hud-radmir-speedometer-main__speed_helloween": s.isHelloween
        }])
    }, [(n(), o("svg", _n, [t[0] || (t[0] = i("path", {
        d: "M163.888 327C73.9277 327 1 253.98 1 163.906C1 76.4798 69.7028 5.12014 156 1M276 45.5886C248.739 19.6833 212.532 3.12391 172.5 1.03611",
        stroke: "#F4F1E1",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-dasharray": "0.1 8"
    }, null, -1)), i("path", {
        d: "M163.888 327C73.9277 327 1 253.98 1 163.906C1 76.4798 69.7028 5.12014 156 1L172.5 1.03611C212.532 3.12391 248.739 19.6833 276 45.5886",
        stroke: "#F4F1E1",
        "stroke-width": "4",
        "stroke-dasharray": "800",
        "stroke-dashoffset": 695 - 535 * (a.speedBar < 1 ? a.speedBar : 1)
    }, null, 8, mn)])), i("div", {
        class: v(["hud-radmir-speedometer-main__data", {
            "hud-radmir-speedometer-main__hidden": a.showKeyHint || a.showEngineHint
        }])
    }, [s.isHelloween ? (n(), o("img", fn)) : c("", !0), i("div", gn, p(s.speedometer.speed), 1), t[1] || (t[1] = i("div", {
        class: "hud-radmir-speedometer-main__data-text"
    }, "км/ч", -1))], 2), u(d, {
        class: v(["hud-radmir-speedometer-main__mileage", {
            "hud-radmir-speedometer-main__hidden": a.showKeyHint || a.showEngineHint
        }]),
        value: s.speedometer.mileage
    }, null, 8, ["value", "class"]), i("div", {
        class: v(["hud-radmir-speedometer-main__turns", {
            "hud-radmir-speedometer-main__hidden": a.showKeyHint || a.showEngineHint
        }])
    }, [(n(), o(E, null, M(["Left", "Right"], (b, O) => u(ie(`IconTurn${b}`), {
        class: v(["hud-radmir-speedometer-main__turn", {
            "hud-radmir-speedometer-main__turn_active": s.speedometer.params.turns[b.toLowerCase()]
        }]),
        key: O
    }, null, 8, ["class"])), 64))], 2), u(T, {
        name: "fade"
    }, {
        default: C(() => [a.showKeyHint ? (n(), w(_, {
            key: 0,
            text: "Вставить ключ",
            keyText: "G",
            keyCode: e.KEY_CODE_G
        }, {
            default: C(() => [u(h, {
                style: {
                    width: "5.56vh",
                    height: "1.94vh"
                }
            })]),
            _: 1
        }, 8, ["keyCode"])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "fade"
    }, {
        default: C(() => [a.showEngineHint ? (n(), w(_, {
            key: 0,
            text: "Запустить двигатель",
            keyText: "Ctrl",
            keyCode: e.KEY_CODE_CTRL
        }, {
            default: C(() => [u(y, {
                style: {
                    width: "5.56vh",
                    height: "2.78vh"
                }
            })]),
            _: 1
        }, 8, ["keyCode"])) : c("", !0)]),
        _: 1
    })], 2), u(S, {
        speedometer: s.speedometer
    }, null, 8, ["speedometer"])])
}
const Cn = {
        props: {
            speedometer: {
                type: Object,
                required: !0
            },
            isHelloween: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            SpeedometerHint: tn,
            SpeedometerIndicators: Zi,
            SpeedometerMileage: zi,
            IconTurnLeft: on,
            IconTurnRight: hn,
            IconKey: We,
            IconEngine: ki
        },
        data: () => ({
            KEY_CODE_G: window.KEY_CODE_G,
            KEY_CODE_CTRL: window.KEY_CODE_CTRL
        }),
        computed: {
            speedBar() {
                return this.speedometer.speed / this.speedometer.maxSpeed
            },
            showKeyHint() {
                return !this.speedometer.params.key
            },
            showEngineHint() {
                return this.speedometer.params.key && !this.speedometer.params.temperature
            }
        }
    },
    vn = g(Cn, [
        ["render", pn],
        ["__scopeId", "data-v-b88ef658"]
    ]),
    yn = {
        class: "hud-radmir-speedometer-tachometer__fill",
        width: "106",
        height: "83",
        viewbox: "0 0 106 83",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    wn = ["stroke-dashoffset"],
    bn = {
        class: "hud-radmir-speedometer-tachometer__data"
    },
    Sn = {
        class: "hud-radmir-speedometer-tachometer__data-text"
    },
    En = {
        class: "hud-radmir-speedometer-tachometer__data-value"
    };

function Tn(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["hud-radmir-speedometer-tachometer", {
            "hud-radmir-speedometer-tachometer_glow": s.speedometer.tachometer.rpm / s.speedometer.tachometer.maxRpm > .5
        }])
    }, [t[1] || (t[1] = i("div", {
        class: "hud-radmir-speedometer-tachometer__before"
    }, null, -1)), (n(), o("svg", yn, [t[0] || (t[0] = i("path", {
        d: "M104.318 24.7554C93.9198 10.3537 77.1167 1 58.1575 1C26.5903 1 1 26.9309 1 58.9184C1 67.1224 2.68334 74.9281 5.71913 82",
        stroke: "#F4F1E1",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-dasharray": "1 8"
    }, null, -1)), i("path", {
        d: "M104.318 24.7554C93.9198 10.3537 77.1167 1 58.1575 1C26.5903 1 1 26.9309 1 58.9184C1 67.1224 2.68334 74.9281 5.71913 82",
        stroke: "#F4F1E1",
        "stroke-width": "4",
        "stroke-dasharray": "300",
        "stroke-dashoffset": 600 - 170 * (1 - s.speedometer.tachometer.rpm / s.speedometer.tachometer.maxRpm)
    }, null, 8, wn)])), i("div", bn, [i("div", Sn, p(s.speedometer.tachometer.gear), 1), i("div", En, p(s.speedometer.tachometer.rpm), 1)])], 2)
}
const Mn = {
        props: {
            speedometer: {
                type: Object,
                required: !0
            }
        }
    },
    kn = g(Mn, [
        ["render", Tn]
    ]),
    In = {
        key: 0,
        class: "hud-radmir-speedometer__new-year"
    };

function On(e, t, s, l, r, a) {
    const d = m("SpeedometerTachometer"),
        h = m("SpeedometerSecondary"),
        _ = m("SpeedometerMain");
    return n(), o("div", {
        class: v(["hud-radmir-speedometer", {
            "hud-radmir-speedometer_helloween": s.isHelloween
        }])
    }, [t[0] || (t[0] = i("div", {
        class: "hud-radmir-speedometer__after"
    }, null, -1)), s.isNewYear ? (n(), o("div", In)) : c("", !0), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.speedometer.tachometer.show ? (n(), w(d, {
            key: 0,
            speedometer: s.speedometer
        }, null, 8, ["speedometer"])) : c("", !0)]),
        _: 1
    }), u(h, {
        speedometer: s.speedometer,
        isHelloween: s.isHelloween
    }, null, 8, ["speedometer", "isHelloween"]), u(_, {
        speedometer: s.speedometer,
        isHelloween: s.isHelloween
    }, null, 8, ["speedometer", "isHelloween"])], 2)
}
const Ln = {
        props: {
            speedometer: {
                type: Object,
                required: !0
            },
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            SpeedometerSecondary: yi,
            SpeedometerMain: vn,
            SpeedometerTachometer: kn
        },
        data: () => ({
            KEY_CODE_G: window.KEY_CODE_G
        }),
        mounted() {
            document.addEventListener("keyup", this.onKeyUp)
        },
        unmounted() {
            document.removeEventListener("keyup", this.onKeyUp)
        },
        methods: {
            onKeyUp({
                keyCode: e
            }) {
                e === this.KEY_CODE_G && window.isBluredInput && sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "Speed_OnPlayerToggleKey")
            }
        }
    },
    Pn = g(Ln, [
        ["render", On],
        ["__scopeId", "data-v-899fea6f"]
    ]),
    An = [{
        title: "Управление автомобилем",
        buttons: [{
            buttons: ["Alt+1"],
            label: "Открыть/закрыть автомобиль"
        }, {
            buttons: ["Shift"],
            label: "Ремень безопасности"
        }, {
            buttons: ["L.Ctrl"],
            label: "Запустить двигатель"
        }, {
            buttons: ["R.Ctrl"],
            label: "Закрыть машину"
        }, {
            buttons: ["Q", "E"],
            label: "Поворотники"
        }, {
            buttons: ["L.Alt"],
            label: "Фары"
        }, {
            buttons: ["G"],
            label: "Вставить ключ"
        }, {
            buttons: ["B"],
            label: "Включить/выключить сирену"
        }]
    }, {
        title: "Общее управление",
        buttons: [{
            buttons: ["ALT"],
            label: "Взаимодействие"
        }, {
            buttons: ["Z"],
            label: "Анимации"
        }, {
            buttons: ["TAB"],
            label: "Список игроков"
        }, {
            buttons: ["X"],
            label: "Микрофон"
        }, {
            buttons: ["F3"],
            label: "Персональные настройки голосового чата"
        }, {
            buttons: ["G"],
            label: "Сесть на пассажирское"
        }, {
            buttons: ["F"],
            label: "Сесть за руль"
        }, {
            buttons: ["O"],
            label: "Меню крафта"
        }, {
            buttons: ["F2"],
            label: "Подать жалобу"
        }, {
            buttons: ["M"],
            label: "Меню"
        }, {
            buttons: ["M"],
            label: "Быстрая карта (Зажать)"
        }, {
            buttons: ["F1"],
            label: "Быстрая помощь по управлению"
        }, {
            buttons: ["R"],
            label: "Радиальное меню"
        }, {
            buttons: ["J"],
            label: "Меню заданий"
        }, {
            buttons: ["I"],
            label: "Инвентарь"
        }, {
            buttons: ["P"],
            label: "Телефон"
        }, {
            buttons: ["Esc"],
            label: "Настройки (АФК/ЗАКРЫТЬ ЛЮБОЙ ИНТЕРФЕЙС/НАЗАД)"
        }]
    }, {
        title: "Управление вертолетом",
        buttons: [{
            buttons: ["Alt+1"],
            label: "Открыть/закрыть вертолет"
        }, {
            buttons: ["Shift"],
            label: "Ремень безопасности"
        }, {
            buttons: ["L.Ctrl"],
            label: "Запустить двигатель"
        }, {
            buttons: ["R.Ctrl"],
            label: "Закрыть вертолет"
        }, {
            buttons: ["Q", "E"],
            label: "Поворотники"
        }, {
            buttons: ["L.Alt"],
            label: "Фары"
        }, {
            buttons: ["G"],
            label: "Вставить ключ"
        }]
    }, {
        title: "Управление лодкой",
        buttons: [{
            buttons: ["Alt+1"],
            label: "Открыть/закрыть лодку"
        }, {
            buttons: ["Shift"],
            label: "Ремень безопасности"
        }, {
            buttons: ["L.Ctrl"],
            label: "Запустить двигатель"
        }, {
            buttons: ["R.Ctrl"],
            label: "Закрыть лодку"
        }, {
            buttons: ["Q", "E"],
            label: "Поворотники"
        }, {
            buttons: ["L.Alt"],
            label: "Фары"
        }, {
            buttons: ["G"],
            label: "Вставить ключ"
        }]
    }],
    Dn = {
        class: "hud-radmir-help"
    },
    Hn = {
        class: "hud-radmir-help__content"
    },
    xn = {
        class: "hud-radmir-help__col-title"
    },
    Bn = {
        class: "hud-radmir-help__col-content"
    },
    Rn = {
        class: "hud-radmir-help__row-buttons"
    },
    Fn = {
        class: "hud-radmir-help__row-label"
    };

function Nn(e, t, s, l, r, a) {
    const d = m("ControlsButton");
    return n(), o("div", Dn, [t[0] || (t[0] = i("div", {
        class: "hud-radmir-help__title"
    }, "Помощь по управлению", -1)), i("div", Hn, [(n(!0), o(E, null, M(e.CONTROLS, (h, _) => (n(), o("div", {
        class: "hud-radmir-help__col",
        key: _
    }, [i("div", xn, p(h.title), 1), i("div", Bn, [(n(!0), o(E, null, M(h.buttons, (y, S) => (n(), o("div", {
        class: "hud-radmir-help__row",
        key: S
    }, [i("div", Rn, [(n(!0), o(E, null, M(y.buttons, (b, O) => (n(), w(d, {
        key: O,
        text: b
    }, null, 8, ["text"]))), 128))]), i("div", Fn, p(y.label), 1)]))), 128))])]))), 128))])])
}
const Yn = {
        components: {
            ControlsButton: K,
            ControlsButtonContainer: ne
        },
        data: () => ({
            CONTROLS: An
        })
    },
    Kn = g(Yn, [
        ["render", Nn]
    ]),
    $n = {},
    Zn = {
        width: "18",
        height: "23",
        viewBox: "0 0 18 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Un(e, t) {
    return n(), o("svg", Zn, t[0] || (t[0] = [i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M7.27199 6.33619L2.59961 4V16.8L8.99961 20L15.3996 16.8V4L8.99961 7.2L8.99935 7.19987V19.8672L7.27199 6.33619Z",
        fill: "#65C466"
    }, null, -1), i("path", {
        d: "M1 1.19922L9 5.19922L17 1.19922V17.9992L9 21.9992L1 17.9992V1.19922Z",
        stroke: "#65C466",
        "stroke-opacity": "0.25"
    }, null, -1)]))
}
const Vn = g($n, [
        ["render", Un]
    ]),
    Wn = {},
    Gn = {
        width: "15",
        height: "16",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function zn(e, t) {
    return n(), o("svg", Gn, t[0] || (t[0] = [i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.19798 0.0625C10.3989 0.373401 12.0284 1.11454 13.2456 2.46879C16.8837 6.51666 13.0916 13.7222 7.65305 13.9295C7.72842 14.5039 7.43144 15.7006 5.64057 15.8924H2.80469L3.33865 14.2402L6.16194 13.167L3.61012 13.3471L2.80469 10.7757H5.48056C6.04944 10.789 7.28037 11.1515 7.65305 12.4946C8.40795 12.6412 10.0377 12.4306 10.5174 10.4159C10.9971 8.4012 9.38475 7.07138 8.51863 6.65831L9.19798 0.0625Z",
        fill: "#0D73FD"
    }, null, -1), i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.29086 0.00315412V6.59061C8.19771 6.58128 8.09678 6.57184 7.98873 6.56173C6.27206 6.40116 2.75571 6.07225 0 3.33053C1.63174 1.88616 4.73854 -0.0896734 8.29086 0.00315412ZM5.51367 3.75037C5.99908 3.75037 6.39258 3.35687 6.39258 2.87146C6.39258 2.38605 5.99908 1.99255 5.51367 1.99255C5.02827 1.99255 4.63477 2.38605 4.63477 2.87146C4.63477 3.35687 5.02827 3.75037 5.51367 3.75037Z",
        fill: "#0D73FD"
    }, null, -1)]))
}
const qn = g(Wn, [
        ["render", zn]
    ]),
    Xn = {
        class: "map-mask"
    },
    jn = ["d", "stroke-width"],
    Jn = {
        class: "gang-zones",
        "data-bind-style-transform": "{{radarData.transform}}"
    },
    Qn = {
        class: "gang-zones__wrapper"
    },
    eo = {
        class: "nearby-players-container",
        "data-bind-style-transform": "{{radarData.transform}}"
    },
    to = {
        class: "nearby-player",
        "data-bind-for": "player: {{radarData.players}}"
    },
    so = {
        class: "markers-container",
        "data-bind-style-transform": "{{radarData.transform}}"
    },
    ao = {
        class: "player-icon"
    };

function io(e, t, s, l, r, a) {
    return n(), o("div", {
        class: "hud-hassle-map",
        style: f(a.mapStyle),
        "data-bind-style-transform": "{{radarData.rotate}}"
    }, [ae(e.$slots, "default", {}, void 0, !0), i("div", Xn, [i("div", {
        class: "tiles-container",
        style: f(a.tilesContainerStyle),
        "data-bind-style-transform": "{{radarData.transform}}"
    }, t[0] || (t[0] = [i("div", {
        class: "tile",
        "data-bind-for": "tile: {{radarData.visibleTiles}}",
        "data-bind-style-background-image": "{{tile.backgroundImage}}",
        "data-bind-style-transform": "{{tile.transform}}"
    }, null, -1)]), 4), (n(), o("svg", {
        class: "route",
        style: f(a.routeStyle),
        "data-bind-style-transform": "{{radarData.transform}}"
    }, [i("path", {
        d: a.routePath,
        stroke: "#FAB700",
        "stroke-width": a.routeWidth,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none"
    }, null, 8, jn)], 4)), i("div", Jn, [i("div", Qn, [(n(!0), o(E, null, M(Object.entries(a.gangZones), ([d, h]) => (n(), o("div", {
        class: "gang-zones__item",
        key: d,
        style: f(e.gangZonesStyles[d])
    }, null, 4))), 128))])])]), i("div", eo, [i("div", to, [i("div", {
        class: "nearby-player-icon",
        style: f(a.nearbyPlayerStyle),
        "data-bind-style-transform": "{{player.transform}}",
        "data-bind-style-background-color": "{{player.color}}"
    }, null, 4)])]), i("div", so, [i("div", {
        class: "marker",
        "data-bind-for": "marker: {{radarData.markers}}",
        style: f(a.markerStyle),
        "data-bind-style-transform": "{{marker.transform}}"
    }, [i("div", {
        class: "marker-icon",
        style: f(a.markerImageStyle),
        "data-bind-if": "{{marker.show}} && !{{marker.isCheckpoint}}",
        "data-bind-style-background-image": "{{marker.icon}}"
    }, null, 4), i("div", {
        class: "marker-checkpoint",
        "data-bind-if": "{{marker.show}} && {{marker.isCheckpoint}}",
        style: f(a.markerCheckpointStyle)
    }, null, 4)], 4)]), i("div", ao, [i("img", {
        style: f(a.playerIconStyle),
        "data-bind-style-transform": "{{radarData.playerTransform}}",
        src: "/images/gps/player_arrow.png"
    }, null, 4)])], 4)
}
const no = 1e3,
    oo = 12e3,
    te = 6144,
    D = te / oo,
    ro = .15,
    lo = .25,
    z = .08,
    ho = .1,
    q = .08,
    uo = .1,
    me = .25,
    fe = 21,
    ge = 24,
    co = 5,
    _o = 10,
    mo = "checkpoint",
    fo = {
        props: {
            isMobile: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            zoom: 1,
            scaledZoom: 1,
            rotationDegrees: 0,
            targetRotationDegrees: 0,
            visibleTiles: [],
            markers: {},
            nearbyPlayers: [],
            translate: {
                x: 0,
                y: 0
            },
            navigationMarker: null,
            checkpointMarker: null,
            gangZonesStyles: {},
            flashedTimers: []
        }),
        computed: {
            routeWidth() {
                return this.isMobile ? _o : co
            },
            mapWidth() {
                return this.isMobile ? ge : fe
            },
            mapHeight() {
                return this.isMobile ? ge : fe
            },
            playerPosition() {
                return this.$store.getters["player/position"]
            },
            playerIsInInterior() {
                return this.playerPosition.interior
            },
            mapStyle() {
                return {
                    width: `${this.mapWidth}vh`,
                    height: `${this.mapHeight}vh`
                }
            },
            tilesContainerStyle() {
                return {
                    ...this.playerIsInInterior && {
                        display: "none"
                    }
                }
            },
            markerToMapSizeRelation() {
                return this.isMobile ? lo : ro
            },
            markerImageStyle() {
                return {
                    width: `${this.mapWidth*this.markerToMapSizeRelation}vh`,
                    height: `${this.mapHeight*this.markerToMapSizeRelation}vh`
                }
            },
            markerCheckpointStyle() {
                return {
                    width: `${this.mapWidth*z}vh`,
                    height: `${this.mapHeight*z}vh`,
                    borderWidth: `${this.mapHeight*z*ho}vh`
                }
            },
            nearbyPlayerStyle() {
                return {
                    width: `${this.mapWidth*q}vh`,
                    height: `${this.mapHeight*q}vh`,
                    borderWidth: `${this.mapHeight*q*uo}vh`
                }
            },
            playerIconStyle() {
                return {
                    width: `${this.mapWidth*me}vh`,
                    height: `${this.mapHeight*me}vh`
                }
            },
            markerStyle() {
                return {
                    width: `${this.mapWidth*this.markerToMapSizeRelation}vh`,
                    height: `${this.mapHeight*this.markerToMapSizeRelation}vh`
                }
            },
            routeStyle() {
                return {
                    ...(this.playerIsInInterior || !this.route.length) && {
                        display: "none"
                    }
                }
            },
            routePath() {
                if (!this.route.length) return "";
                const e = {
                        x: te / 2,
                        y: te / 2
                    },
                    t = this.route[0];
                let s = `M${t[0]*D+e.x},${-t[1]*D+e.y}`;
                return this.route.slice(1).forEach(l => {
                    s += ` L${l[0]*D+e.x},${-l[1]*D+e.y}`
                }), s
            },
            route() {
                return this.$store.getters["player/route"]
            },
            gangZones() {
                return this.$store.getters["player/gangZones"]
            },
            flashedGangZones() {
                return this.$store.getters["player/flashedGangZones"]
            }
        },
        mounted() {
            engine.on("CreateRadarObject", this.addMarker), engine.on("RemoveRadarObject", this.removeMarker), engine.on("WaypointOnMapSet", this.waypointOnMapSet), engine.on("WaypointOnMapRemoved", this.waypointOnMapRemoved)
        },
        unmounted() {
            this.clearGangZonesFlash()
        },
        methods: {
            fixGangZonesBounds(e) {
                return e.map(([t, s]) => [t * D, s * D])
            },
            updateGangZonesStyles() {
                const e = {};
                this.clearGangZonesFlash();
                for (const [t, s] of Object.entries(this.gangZones)) {
                    const [l, ...r] = s, [a, d] = this.fixGangZonesBounds(r), h = d[0] - a[0], _ = d[1] - a[1];
                    e[t] = {
                        background: l,
                        transform: `translate(${a[0]+h/2}px, ${a[1]+_/2}px)`,
                        width: `${Math.abs(h)}px`,
                        height: `${Math.abs(_)}px`
                    }, this.flashedGangZones[t] !== void 0 && this.setGangZoneFlash(t, l, this.flashedGangZones[t])
                }
                this.gangZonesStyles = e
            },
            setGangZoneFlash(e, t, s) {
                const l = setInterval(() => {
                    const a = this.gangZonesStyles[e].background === s ? t : s;
                    this.gangZonesStyles[e].background = a
                }, no);
                this.flashedTimers.push(l)
            },
            clearGangZonesFlash() {
                for (const e of this.flashedTimers) clearInterval(e);
                this.flashedTimers = []
            },
            waypointOnMapSet(e, t) {
                window.startNavigationInterval(e, t)
            },
            waypointOnMapRemoved() {
                window.discardRoute(), window.disableWaypoint()
            },
            addMarker(e, t, s, l, r, a) {
                const d = a == 1 || a == 3;
                l === mo && (this.checkpointMarker = e, this.$store.commit("player/setCheckpoint", {
                    x: t,
                    y: s
                })), d && (this.navigationMarker = e, window.startNavigationInterval(t, s))
            },
            removeMarker(e) {
                e === this.checkpointMarker && (this.checkpointMarker = null, this.$store.commit("player/setCheckpoint", null)), e === this.navigationMarker && window.stopNavigationInterval()
            }
        },
        watch: {
            gangZones: {
                handler(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.updateGangZonesStyles()
                },
                deep: !0
            },
            flashedGangZones: {
                handler(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.updateGangZonesStyles()
                },
                deep: !0
            }
        }
    },
    Ge = g(fo, [
        ["render", io],
        ["__scopeId", "data-v-9d516809"]
    ]),
    go = {
        class: "hud-radmir-radar"
    },
    po = {
        key: 0,
        class: "hud-radmir-radar__safe-zone"
    },
    Co = {
        key: 0,
        class: "hud-radmir-radar__fishing-zone"
    },
    vo = {
        class: "hud-radmir-radar__radar"
    },
    yo = {
        key: 0,
        class: "hud-radmir-radar__radar-bats",
        src: et
    },
    wo = {
        key: 1,
        class: "hud-radmir-radar__radar-border_new-year",
        src: Fe
    },
    bo = ["src"];

function So(e, t, s, l, r, a) {
    const d = m("IconSafeZone"),
        h = m("IconFishingZone"),
        _ = m("HudMap");
    return n(), o("div", go, [u(T, {
        name: "hud-greenzone"
    }, {
        default: C(() => [s.radar.greenZone && !s.radar.fishingZone ? (n(), o("div", po, [t[0] || (t[0] = i("div", {
            class: "hud-radmir-radar__safe-zone__bg"
        }, null, -1)), u(d), t[1] || (t[1] = k("Вы в безопасности"))])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "hud-greenzone"
    }, {
        default: C(() => [s.radar.fishingZone ? (n(), o("div", Co, [t[2] || (t[2] = i("div", {
            class: "hud-radmir-radar__fishing-zone__bg"
        }, null, -1)), u(h), t[3] || (t[3] = k("Зона для рыбалки"))])) : c("", !0)]),
        _: 1
    }), i("div", vo, [i("div", {
        class: v(["hud-radmir-radar__map", {
            "hud-radmir-radar__map_hidden": !s.radar.show
        }])
    }, [u(_, null, {
        default: C(() => [s.isHelloween ? (n(), o("img", yo)) : c("", !0), s.isNewYear ? (n(), o("img", wo)) : c("", !0), i("img", {
            class: v(["hud-radmir-radar__radar-border", {
                "hud-radmir-radar__radar-border_helloween": s.isHelloween
            }]),
            src: e.borderIcons[`/src/assets/images/hud/radar/border${s.isHelloween?"-helloween":""}.png`]
        }, null, 10, bo)]),
        _: 1
    })], 2)])])
}
const Eo = {
        props: {
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            },
            radar: {
                type: Object,
                required: !0
            }
        },
        components: {
            HudMap: Ge,
            IconSafeZone: Vn,
            IconFishingZone: qn
        },
        data: () => ({
            borderIcons: Object.assign({
                "/src/assets/images/hud/radar/border-helloween.png": tt,
                "/src/assets/images/hud/radar/border-new-year.png": Fe,
                "/src/assets/images/hud/radar/border.png": st,
                "/src/assets/images/hud/radar/safe-zone-bg.png": at
            })
        })
    },
    To = g(Eo, [
        ["render", So],
        ["__scopeId", "data-v-464e4ec2"]
    ]),
    Mo = {
        class: "hud-radmir-wanted__content"
    },
    ko = {
        class: "hud-radmir-wanted__stars"
    },
    Io = {
        class: "hud-radmir-wanted__title"
    };

function Oo(e, t, s, l, r, a) {
    return n(), w(T, {
        name: "wanted-fade",
        appear: ""
    }, {
        default: C(() => [e.isShown ? (n(), o("div", {
            key: 0,
            class: v(["hud-radmir-wanted", {
                "hud-radmir-wanted_withdrawn": s.stars === 0
            }])
        }, [u(T, {
            name: "wanted-slide",
            appear: ""
        }, {
            default: C(() => [i("div", Mo, [i("div", ko, [(n(!0), o(E, null, M(s.stars, d => (n(), o("img", {
                class: "hud-radmir-wanted__star",
                key: d,
                src: se
            }))), 128))]), i("div", Io, p(s.stars > 0 ? "Вы объявлены в розыск" : "Розыск снят"), 1)])]),
            _: 1
        })], 2)) : c("", !0)]),
        _: 1
    })
}
const Lo = 5e3,
    Po = {
        props: {
            stars: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            isShown: !1,
            timeout: null
        }),
        watch: {
            stars(e, t) {
                e > t && (this.timeout !== null && clearTimeout(this.timeout), this.isShown = !0, this.timeout = setTimeout(() => this.isShown = !1, Lo))
            }
        }
    },
    Ao = g(Po, [
        ["render", Oo],
        ["__scopeId", "data-v-b408833f"]
    ]),
    Do = {
        key: 0,
        class: "hud-radmir-damage"
    };

function Ho(e, t, s, l, r, a) {
    return n(), w(T, {
        name: "damage-fade",
        appear: ""
    }, {
        default: C(() => [e.isShown ? (n(), o("div", Do)) : c("", !0)]),
        _: 1
    })
}
const pe = 3e3,
    xo = {
        props: {
            health: {
                type: Number,
                default: 0
            },
            armour: {
                type: Number,
                default: 0
            },
            isEnabled: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            isShown: !1,
            timeout: null
        }),
        methods: {
            handleDamageHealth(e, t) {
                t - e > 5 && (this.timeout !== null && clearTimeout(this.timeout), this.isShown = !0, this.timeout = setTimeout(() => this.isShown = !1, pe)), e > t && this.isShown && (this.isShown = !1)
            },
            handleDamageArmour(e, t) {
                t - e > 5 && (this.timeout !== null && clearTimeout(this.timeout), this.isShown = !0, this.timeout = setTimeout(() => this.isShown = !1, pe))
            }
        },
        watch: {
            health(e, t) {
                this.isEnabled && this.handleDamageHealth(e, t)
            },
            armour(e, t) {
                this.isEnabled && this.handleDamageArmour(e, t)
            }
        }
    },
    Bo = g(xo, [
        ["render", Ho]
    ]),
    Ro = {
        key: 0,
        class: "hud-radmir-drugs"
    };

function Fo(e, t, s, l, r, a) {
    return n(), w(T, {
        name: "drugs-fade",
        appear: ""
    }, {
        default: C(() => [s.isShown ? (n(), o("div", Ro)) : c("", !0)]),
        _: 1
    })
}
const No = {
        props: {
            isShown: {
                type: Boolean,
                default: !1
            }
        }
    },
    Yo = g(No, [
        ["render", Fo],
        ["__scopeId", "data-v-bcd3d886"]
    ]),
    Ko = {
        props: ["type"]
    },
    $o = {
        key: 0,
        src: it
    },
    Zo = {
        key: 1,
        src: nt
    };

function Uo(e, t, s, l, r, a) {
    return s.type ? (n(), o("img", Zo)) : (n(), o("img", $o))
}
const Vo = g(Ko, [
        ["render", Uo]
    ]),
    Wo = {
        VOICE: 0,
        CALL: 1
    },
    H = {
        MIC: 0,
        PHONE: 1
    },
    Go = {
        class: "voice-chat-entry"
    },
    zo = {
        class: "voice-chat-entry-info"
    },
    qo = {
        class: "voice-chat-entry__icon"
    },
    Xo = {
        class: "voice-chat-entry__name"
    },
    jo = {
        class: "voice-chat-entry__id"
    },
    Jo = {
        key: 0,
        class: "voice-chat-entry-channel"
    };

function Qo(e, t, s, l, r, a) {
    const d = m("SpeakerIcon");
    return n(), o("div", Go, [i("div", zo, [i("div", qo, [u(d, {
        type: s.entry.type
    }, null, 8, ["type"])]), i("div", Xo, p(s.entry.name), 1), i("div", jo, p(s.entry.id), 1)]), a.isChannel ? (n(), o("div", Jo, p(s.entry.channel), 1)) : c("", !0)])
}
const er = {
        props: ["entry"],
        components: {
            SpeakerIcon: Vo
        },
        computed: {
            isChannel() {
                return typeof this.entry.channel < "u" && String(this.entry.channel).length
            }
        },
        data() {
            return {
                ENTRY_TYPE: Wo
            }
        }
    },
    tr = g(er, [
        ["render", Qo],
        ["__scopeId", "data-v-9611eb7d"]
    ]),
    sr = {
        props: {
            isActive: {
                type: Boolean,
                default: !1
            },
            isMuted: {
                type: Boolean,
                default: !1
            }
        }
    },
    ar = {
        key: 0,
        src: ot
    },
    ir = {
        key: 1,
        src: rt
    },
    nr = {
        key: 2,
        src: lt
    };

function or(e, t, s, l, r, a) {
    return s.isMuted ? (n(), o("img", ar)) : s.isActive ? (n(), o("img", ir)) : (n(), o("img", nr))
}
const rr = g(sr, [
    ["render", or]
]);
const lr = {
        props: {
            isActive: {
                type: Boolean,
                default: !1
            },
            isMuted: {
                type: Boolean,
                default: !1
            }
        }
    },
    dr = {
        key: 0,
        src: dt
    },
    hr = {
        key: 1,
        src: ht
    },
    ur = {
        key: 2,
        src: ut
    };

function cr(e, t, s, l, r, a) {
    return s.isMuted ? (n(), o("img", dr)) : s.isActive ? (n(), o("img", hr)) : (n(), o("img", ur))
}
const _r = g(lr, [
        ["render", cr],
        ["__scopeId", "data-v-353ecfc3"]
    ]),
    mr = {
        class: "voice-chat-button__icon"
    },
    fr = {
        key: 0,
        class: "voice-chat-button__tip"
    };

function gr(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["voice-chat-button", {
            "voice-chat-button_active": s.isActive
        }])
    }, [i("div", mr, [(n(), w(ie(`${s.type===r.BUTTON_TYPE.MIC?"Mic":"Phone"}Icon`), {
        isActive: s.isActive,
        isMuted: s.isMuted
    }, null, 8, ["isActive", "isMuted"]))]), s.isMuted ? c("", !0) : (n(), o("div", fr, p(s.type === r.BUTTON_TYPE.MIC ? "X" : "U"), 1))], 2)
}
const pr = {
        props: ["type", "isActive", "isMuted"],
        components: {
            MicIcon: rr,
            PhoneIcon: _r
        },
        data() {
            return {
                BUTTON_TYPE: H
            }
        }
    },
    Cr = g(pr, [
        ["render", gr]
    ]),
    vr = {
        class: "voice-chat__buttons"
    },
    yr = {
        class: "voice-chat__entries"
    };

function wr(e, t, s, l, r, a) {
    const d = m("Button"),
        h = m("Entry");
    return n(), o("div", {
        class: v(["voice-chat", a.classes]),
        style: f(a.styles)
    }, [u(T, {
        name: "slide",
        appear: ""
    }, {
        default: C(() => [i("div", vr, [u(T, {
            name: "slide",
            appear: ""
        }, {
            default: C(() => [a.chatButtonStatus ? (n(), w(d, {
                key: 0,
                type: r.BUTTON_TYPE.MIC,
                isActive: a.micButtonIsActive,
                isMuted: a.isVoiceMuted
            }, null, 8, ["type", "isActive", "isMuted"])) : c("", !0)]),
            _: 1
        }), u(T, {
            name: "slide",
            appear: ""
        }, {
            default: C(() => [a.radioButtonStatus ? (n(), w(d, {
                key: 0,
                type: r.BUTTON_TYPE.PHONE,
                isActive: a.phoneButtonIsActive,
                isMuted: a.isVoiceMuted
            }, null, 8, ["type", "isActive", "isMuted"])) : c("", !0)]),
            _: 1
        })])]),
        _: 1
    }), i("div", yr, [u(Ye, {
        name: "slide",
        appear: ""
    }, {
        default: C(() => [(n(!0), o(E, null, M(s.entries, (_, y) => (n(), w(h, {
            entry: _,
            key: y
        }, null, 8, ["entry"]))), 128))]),
        _: 1
    })])], 6)
}
const br = {
        props: ["entries", "chatHeightPx", "isHudControls", "isTransparent", "isShowButtons"],
        components: {
            Entry: tr,
            Button: Cr
        },
        data() {
            return {
                BUTTON_TYPE: H,
                KEY_CODE_X: window.KEY_CODE_X,
                KEY_CODE_U: window.KEY_CODE_U
            }
        },
        computed: {
            classes() {
                return {
                    "voice-chat_controls": this.isHudControls,
                    "voice-chat_transparent": this.isTransparent,
                    "voice-chat_hidden-buttons": !this.isShowButtons
                }
            },
            styles() {
                return {
                    top: `${this.chatHeightPx}px`
                }
            },
            isVoiceActive() {
                return this.$store.getters["voiceChat/isActive"]
            },
            voiceKeyCode() {
                return this.$store.getters["voiceChat/keyCode"]
            },
            micButtonIsActive() {
                return this.isVoiceActive && this.voiceKeyCode === this.KEY_CODE_X
            },
            phoneButtonIsActive() {
                return this.isVoiceActive && this.voiceKeyCode === this.KEY_CODE_U
            },
            isVoiceMuted() {
                return this.$store.getters["voiceChat/isMuted"]
            },
            chatButtonStatus() {
                return this.$store.getters["voiceChat/chatButton"]
            },
            radioButtonStatus() {
                return this.$store.getters["voiceChat/radioButton"]
            }
        }
    },
    Sr = g(br, [
        ["render", wr],
        ["__scopeId", "data-v-005ebd1c"]
    ]),
    Er = {
        class: "voice-chat-hint"
    };

function Tr(e, t) {
    return n(), o("div", Er, t[0] || (t[0] = [i("div", {
        class: "voice-chat-hint__button"
    }, [i("div", {
        class: "voice-chat-hint__button-shadow"
    }), k("F3")], -1), i("div", {
        class: "voice-chat-hint__text"
    }, "Наст. Голосового чата", -1)]))
}
const Mr = {},
    kr = g(Mr, [
        ["render", Tr],
        ["__scopeId", "data-v-935a3a23"]
    ]),
    Ir = {
        class: "hud"
    };

function Or(e, t, s, l, r, a) {
    const d = m("HudWanted"),
        h = m("HudDamage"),
        _ = m("HudDrugs"),
        y = m("HudHelp"),
        S = m("HudInfo"),
        b = m("HudSpeedometer"),
        O = m("HudRadar"),
        Z = m("VoiceChat"),
        U = m("VoiceChatHint");
    return n(), o("div", Ir, [u(d, {
        stars: s.data.info.wanted,
        ref: "wanted"
    }, null, 8, ["stars"]), u(h, {
        isEnabled: s.data.isEffectEnabled,
        health: s.data.info.health,
        armour: s.data.info.armour,
        ref: "damage"
    }, null, 8, ["isEnabled", "health", "armour"]), u(_, {
        isShown: s.data.isUseDrugs && s.data.isEffectEnabled,
        ref: "drugs"
    }, null, 8, ["isShown"]), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.data.isOpenedHelp ? (n(), w(y, {
            key: 0
        })) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.data.info.show ? (n(), w(S, {
            key: 0,
            info: s.data.info,
            server: s.data.server,
            bonus: s.data.bonus,
            isHelloween: s.data.isHelloween,
            isNewYear: s.data.isNewYear,
            isEaster: s.data.isEaster,
            style: f({
                transform: `scale(${s.scale})`
            })
        }, null, 8, ["info", "server", "bonus", "isHelloween", "isNewYear", "isEaster", "style"])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "hud-speedometer"
    }, {
        default: C(() => [s.data.speedometer.show ? (n(), w(b, {
            key: 0,
            speedometer: s.data.speedometer,
            isHelloween: s.data.isHelloween,
            isNewYear: s.data.isNewYear,
            style: f({
                transform: `scale(${s.scale*.8523})`
            })
        }, null, 8, ["speedometer", "isHelloween", "isNewYear", "style"])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "fade"
    }, {
        default: C(() => [u(O, {
            class: v({
                "hud-radar_hidden": !s.data.radar.show
            }),
            radar: s.data.radar,
            isHelloween: s.data.isHelloween,
            isNewYear: s.data.isNewYear
        }, null, 8, ["class", "radar", "isHelloween", "isNewYear"])]),
        _: 1
    }), s.data.useChat && s.data.voiceChat.show ? (n(), w(Z, {
        key: 0,
        entries: s.data.voiceChat.entries,
        chatHeightPx: a.chatHeightPx,
        isHudControls: s.data.isHudControls,
        isShowButtons: s.data.voiceChat.showButtons,
        isTransparent: a.isOpenedChat()
    }, null, 8, ["entries", "chatHeightPx", "isHudControls", "isShowButtons", "isTransparent"])) : c("", !0), s.data.useChat && s.data.voiceChat.show && s.data.isHudControls ? (n(), w(U, {
        key: 1
    })) : c("", !0)])
}
const X = 5,
    Lr = {
        props: {
            data: {
                type: Object,
                required: !0
            },
            scale: {
                type: Number,
                default: 1
            }
        },
        components: {
            HudInfo: ei,
            HudSpeedometer: Pn,
            HudHelp: Kn,
            HudRadar: To,
            HudWanted: Ao,
            HudDamage: Bo,
            HudDrugs: Yo,
            VoiceChat: Sr,
            VoiceChatHint: kr
        },
        computed: {
            chatPageSize() {
                return this.$root.chatPageSize
            },
            chatFontSize() {
                return this.$root.chatFontSize
            },
            chatHeightPx() {
                return this.$root.vhToPx(ee + Q * this.chatFontSize) * this.chatPageSize
            }
        },
        methods: {
            onTurnsToggle() {
                const {
                    left: e,
                    right: t
                } = this.data.speedometer.params.turns;
                window.stopSound(X), e && !t || t && !e ? window.playSound("speedometer/turn.mp3", !0, X) : e && t && window.playSound("speedometer/alarm.mp3", !0, X)
            },
            isOpenedChat() {
                return window.isOpenedChat()
            }
        },
        watch: {
            "data.speedometer.params.turns.left"() {
                this.onTurnsToggle()
            },
            "data.speedometer.params.turns.right"() {
                this.onTurnsToggle()
            }
        }
    },
    Pr = g(Lr, [
        ["render", Or],
        ["__scopeId", "data-v-b2894feb"]
    ]),
    Ar = {
        class: "hud-hassle-info-data__meta"
    },
    Dr = {
        key: 0,
        class: "hud-hassle-info-data__meta__before"
    },
    Hr = {
        class: "hud-hassle-info-data__meta__item"
    },
    xr = {
        class: "hud-hassle-info-data__meta__item"
    },
    Br = {
        class: "hud-hassle-info-data__meta__server"
    },
    Rr = {
        class: "hud-hassle-info-data__meta__server-value"
    },
    Fr = {
        class: "hud-hassle-info-data__bar"
    },
    Nr = {
        class: "hud-hassle-info-data__bar-content hud-hassle-info-data__bar_health"
    },
    Yr = {
        key: 0,
        class: "hud-hassle-info-data__bar-value"
    },
    Kr = {
        key: 1,
        class: "hud-hassle-info-data__bar hud-hassle-info-data__bar_freeze"
    },
    $r = {
        class: "hud-hassle-info-data__bar hud-hassle-info-data__bar_two"
    },
    Zr = {
        key: 0,
        class: "hud-hassle-info-data__bar-content hud-hassle-info-data__bar_armour"
    },
    Ur = {
        key: 0,
        class: "hud-hassle-info-data__bar-value"
    },
    Vr = {
        class: "hud-hassle-info-data__bar-content hud-hassle-info-data__bar_hunger"
    },
    Wr = {
        key: 0,
        class: "hud-hassle-info-data__bar-value"
    },
    Gr = {
        class: "hud-hassle-info-data__money"
    };

function zr(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["hud-hassle-info-data", {
            "hud-hassle-info-data_helloween": s.isHelloween,
            "hud-hassle-info-data_with-values": a.isShowValues
        }])
    }, [i("div", Ar, [a.isEditableMode ? c("", !0) : (n(), o("div", Dr)), i("div", Hr, [t[0] || (t[0] = i("img", {
        src: ct
    }, null, -1)), k(p(s.info.online), 1), t[1] || (t[1] = i("div", {
        class: "hud-hassle-info-data__meta__item_gray"
    }, "в сети", -1))]), i("div", xr, "ID " + p(s.info.id), 1), i("div", Br, [i("div", Rr, p(s.server), 1)])]), i("div", {
        class: v(["hud-hassle-info-data__bars", {
            "hud-hassle-info-data__bars_editable": a.isEditableMode
        }])
    }, [i("div", Fr, [i("div", Nr, [t[3] || (t[3] = i("div", {
        class: "hud-hassle-info-data__bar-content__before"
    }, null, -1)), i("div", {
        class: "hud-hassle-info-data__progress-bar",
        style: f({
            marginLeft: `${.5+20*(1-Math.min(s.info.health,100)/100)}vh`,
            width: `${20*(Math.min(s.info.health,100)/100)}vh`,
            height: "1.6vh",
            background: "#EAD57C"
        })
    }, null, 4), t[4] || (t[4] = i("div", {
        class: "hud-hassle-info-data__bar-icon"
    }, [i("img", {
        src: Ie,
        style: {
            width: "5.5556vh",
            height: "5vh",
            "margin-right": "3vh"
        }
    })], -1)), a.isShowValues ? (n(), o("div", Yr, p(Math.ceil(s.info.health)), 1)) : c("", !0), t[5] || (t[5] = i("div", {
        class: "hud-hassle-info-data__bar-content__after"
    }, null, -1)), s.info.isShowFreeze ? (n(), o("div", Kr, [t[2] || (t[2] = i("div", {
        class: "hud-hassle-info-data__bar-content__before hud-hassle-info-data__bar-content__before_freeze"
    }, [i("div", {
        class: "hud-hassle-info-data__bar-content__before-bg"
    })], -1)), i("div", {
        class: "hud-hassle-info-data__progress-bar hud-hassle-info-data__progress-bar_freeze",
        style: f({
            marginLeft: `${12.1296*(1-s.info.freeze/100)}vh`,
            width: `${12.1296*(s.info.freeze/100)}vh`,
            height: "0.5556vh",
            background: "#71CCDF"
        })
    }, null, 4)])) : c("", !0)])]), i("div", $r, [u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.armour ? (n(), o("div", Zr, [t[7] || (t[7] = i("div", {
            class: "hud-hassle-info-data__bar-content__before"
        }, [i("div", {
            class: "hud-hassle-info-data__bar-content__before-bg"
        })], -1)), i("div", {
            class: "hud-hassle-info-data__progress-bar hud-hassle-info-data__progress-bar_armour",
            style: f({
                width: `${s.info.armour}%`
            })
        }, t[6] || (t[6] = [i("img", {
            src: _t
        }, null, -1)]), 4), t[8] || (t[8] = i("div", {
            class: "hud-hassle-info-data__bar-icon",
            style: {
                right: "-0.9259vh"
            }
        }, [i("img", {
            src: ke,
            style: {
                width: "3.5185vh",
                height: "5vh"
            }
        })], -1)), a.isShowValues ? (n(), o("div", Ur, p(Math.ceil(s.info.armour)), 1)) : c("", !0)])) : c("", !0)]),
        _: 1
    }), i("div", Vr, [t[9] || (t[9] = i("div", {
        class: "hud-hassle-info-data__bar-content__before"
    }, null, -1)), i("div", {
        class: "hud-hassle-info-data__progress-bar",
        style: f({
            marginLeft: `${10.6481*(1-s.info.hunger/100)}vh`,
            width: `${10.6481*(s.info.hunger/100)}vh`,
            height: "1.6vh",
            background: "#F8F6ED"
        })
    }, null, 4), t[10] || (t[10] = i("div", {
        class: "hud-hassle-info-data__bar-icon",
        style: {
            right: "-2.8519vh"
        }
    }, [i("img", {
        src: Oe,
        style: {
            width: "4.2593vh",
            height: "4.4vh"
        }
    })], -1)), a.isShowValues ? (n(), o("div", Wr, p(Math.ceil(s.info.hunger)), 1)) : c("", !0), t[11] || (t[11] = i("div", {
        class: "hud-hassle-info-data__bar-content__after"
    }, null, -1))])])], 2), i("div", Gr, [t[12] || (t[12] = i("img", {
        src: Ke
    }, null, -1)), k(p(a.formatNumberWithSpaces(s.info.money)), 1)])], 2)
}
const qr = {
        props: {
            info: {
                type: Object,
                required: !0
            },
            server: {
                type: Number,
                required: !0
            },
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            isShowValues() {
                return this.info.isShowValues
            },
            isEditableMode() {
                return this.$store.getters["settings/settings"].isControlsEditable
            }
        },
        methods: {
            formatNumberWithSpaces: $e
        }
    },
    Xr = g(qr, [
        ["render", zr],
        ["__scopeId", "data-v-5ba50c2c"]
    ]);

function jr(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["hud-hassle-info-wanted", {
            "hud-hassle-info-wanted_hidden": s.value === 0
        }])
    }, [(n(!0), o(E, null, M(e.MAX_STARS_COUNT, (d, h) => (n(), o("img", {
        class: v(["hud-hassle-info-wanted__star", {
            "hud-hassle-info-wanted__star_active": e.MAX_STARS_COUNT - d < s.value
        }]),
        key: h,
        src: se
    }, null, 2))), 128))], 2)
}
const Jr = 6,
    Qr = {
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            MAX_STARS_COUNT: Jr
        })
    },
    el = g(Qr, [
        ["render", jr],
        ["__scopeId", "data-v-da9d5a42"]
    ]),
    tl = {},
    sl = {
        width: "252",
        height: "233",
        viewBox: "0 0 252 233",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function al(e, t) {
    return n(), o("svg", sl, t[0] || (t[0] = [i("path", {
        d: "M127.231 61.647C46.7883 23.0149 25.1726 64.5008 3.28339 76.8302L0 108.884L3.28339 219.027L211.779 233L252 140.943C251.726 87.2417 246.747 -15.7225 229.016 2.03184C206.853 24.2248 179.781 86.8834 127.231 61.647Z",
        fill: "#F4F1E1"
    }, null, -1)]))
}
const il = g(tl, [
        ["render", al]
    ]),
    nl = "" + new URL("patrons-line-helloween-f07b065f.svg",
        import.meta.url).href,
    ol = {
        key: 0,
        class: "hud-hassle-info__content"
    },
    rl = {
        class: "hud-hassle-info__fist"
    },
    ll = {
        key: 0,
        class: "hud-hassle-info__fist__before"
    },
    dl = ["src"],
    hl = {
        key: 0,
        class: "hud-hassle-info__breath"
    },
    ul = ["src"],
    cl = ["src"],
    _l = {
        key: 2,
        class: "hud-hassle-info__fist-lamps",
        src: mt
    },
    ml = {
        key: 2,
        class: "hud-hassle-info__patrons"
    },
    fl = {
        class: "hud-hassle-info__patrons-content"
    },
    gl = {
        class: "hud-hassle-info__patrons-value"
    },
    pl = {
        class: "hud-hassle-info__patrons-value__total"
    },
    Cl = {
        key: 0,
        class: "divider",
        src: nl
    };

function vl(e, t, s, l, r, a) {
    const d = m("InfoData"),
        h = m("IconBreathFill"),
        _ = m("InfoWanted");
    return n(), o("div", {
        class: v(["hud-hassle-info", {
            "hud-hassle-info_helloween": s.isHelloween
        }])
    }, [s.bonus > 1 ? (n(), o("div", {
        key: 0,
        class: "hud-hassle-info__bonus",
        style: f({
            backgroundImage: `url('${e.bonuseImage[`/src/assets/images/hud/bonus/${s.bonus}.png`]}')`
        })
    }, null, 4)) : c("", !0), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.showBars ? (n(), o("div", ol, [u(d, {
            info: s.info,
            isHelloween: s.isHelloween,
            isNewYear: s.isNewYear,
            server: s.server
        }, null, 8, ["info", "isHelloween", "isNewYear", "server"])])) : c("", !0)]),
        _: 1
    }), i("div", rl, [a.isEditableMode ? c("", !0) : (n(), o("div", ll)), s.info.weapon && s.info.breath >= 99 ? (n(), o("img", {
        key: 1,
        class: "hud-hassle-info__logo",
        src: a.logoImage
    }, null, 8, dl)) : c("", !0), i("div", {
        class: "hud-hassle-info__fist-content",
        onClick: t[0] || (t[0] = (...y) => a.nextWeapon && a.nextWeapon(...y))
    }, [u(T, {
        name: "fade"
    }, {
        default: C(() => [s.info.breath < 99 ? (n(), o("div", hl, [t[1] || (t[1] = i("img", {
            src: Le
        }, null, -1)), i("div", {
            class: "hud-hassle-info__breath-fill",
            style: f({
                top: `${100-s.info.breath}%`
            })
        }, [u(h)], 4)])) : c("", !0)]),
        _: 1
    }), !s.info.weapon || s.info.breath < 99 ? (n(), o("img", {
        key: 0,
        class: "hud-hassle-info__fist-logo",
        src: a.logoImage,
        style: f({
            opacity: s.info.breath < 99 ? .25 : 1
        })
    }, null, 12, ul)) : (n(), o("img", {
        key: 1,
        class: "hud-hassle-info__fist-weapon",
        src: `/images/hud/${s.info.weapon}.png`
    }, null, 8, cl)), s.isNewYear ? (n(), o("img", _l)) : c("", !0)]), s.info.weapon ? (n(), o("div", ml, [i("div", fl, [t[2] || (t[2] = i("img", {
        src: Pe
    }, null, -1)), i("div", gl, [i("div", pl, p(s.info.ammoInClip), 1), s.isHelloween ? (n(), o("img", Cl)) : (n(), o(E, {
        key: 1
    }, [], 64)), k(p(s.info.totalAmmo), 1)])])])) : c("", !0), u(_, {
        class: "hud-hassle-info__wanted",
        value: s.info.wanted
    }, null, 8, ["value"])])], 2)
}
const yl = {
        props: {
            info: {
                type: Object,
                required: !0
            },
            server: {
                type: Number,
                default: 1
            },
            bonus: {
                type: Number,
                default: 1
            },
            isHelloween: {
                type: Boolean,
                default: !1
            },
            isNewYear: {
                type: Boolean,
                default: !1
            },
            isEaster: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            InfoData: Xr,
            InfoWanted: el,
            IconBreathFill: il
        },
        data: () => ({
            bonuseImage: Object.assign({
                "/src/assets/images/hud/bonus/2.png": De,
                "/src/assets/images/hud/bonus/3.png": He
            }),
            hassleLogo: Object.assign({
                "/src/assets/images/hud/aim-snipe.png": ft,
                "/src/assets/images/hud/armour.png": gt,
                "/src/assets/images/hud/bonus.png": pt,
                "/src/assets/images/hud/breath.png": Ct,
                "/src/assets/images/hud/circle.png": vt,
                "/src/assets/images/hud/drugs-effect.png": yt,
                "/src/assets/images/hud/fist-bg-easter.png": wt,
                "/src/assets/images/hud/fist-bg-new-year.png": Ae,
                "/src/assets/images/hud/fist-bg.png": bt,
                "/src/assets/images/hud/hassle-logo-helloween.png": St,
                "/src/assets/images/hud/hassle-logo.png": Et,
                "/src/assets/images/hud/health.png": Tt,
                "/src/assets/images/hud/hp-effect.png": Mt,
                "/src/assets/images/hud/lamps.png": kt,
                "/src/assets/images/hud/ny-particles.png": It,
                "/src/assets/images/hud/radmir-logo-helloween.png": xe,
                "/src/assets/images/hud/radmir-logo-new-year.png": Be,
                "/src/assets/images/hud/radmir-logo.png": Re,
                "/src/assets/images/hud/ruble.png": Ot,
                "/src/assets/images/hud/speedometer-bg-new-year.png": Lt,
                "/src/assets/images/hud/wanted-bg.png": Pt,
                "/src/assets/images/hud/wanted_active.png": At,
                "/src/assets/images/hud/wanted_back.png": Dt,
                "/src/assets/images/hud/wanted_inactive.png": Ht,
                "/src/assets/images/hud/weapon_back-helloween.png": xt,
                "/src/assets/images/hud/weapon_back-ny.png": Bt,
                "/src/assets/images/hud/weapon_back.png": Rt
            })
        }),
        computed: {
            logoImage() {
                return this.isHelloween ? this.hassleLogo["/src/assets/images/hud/hassle-logo-helloween.png"] : this.hassleLogo["/src/assets/images/hud/hassle-logo.png"]
            },
            isEditableMode() {
                return this.$store.getters["settings/settings"].isControlsEditable
            }
        },
        methods: {
            nextWeapon() {
                window.nextWeapon()
            }
        }
    },
    wl = g(yl, [
        ["render", vl],
        ["__scopeId", "data-v-d6958916"]
    ]),
    bl = {
        class: "hud-hassle-meta"
    },
    Sl = {
        class: "hud-hassle-meta__item"
    },
    El = {
        class: "hud-hassle-meta__item"
    },
    Tl = {
        class: "hud-hassle-meta__item"
    },
    Ml = {
        class: "hud-hassle-meta__item_gray"
    };

function kl(e, t, s, l, r, a) {
    return n(), o("div", bl, [i("div", Sl, [t[0] || (t[0] = i("img", {
        src: Ft
    }, null, -1)), k(p(s.ping), 1), t[1] || (t[1] = i("div", {
        class: "hud-hassle-meta__item_gray"
    }, "мс", -1))]), i("div", El, [t[2] || (t[2] = i("div", {
        class: "hud-hassle-meta__item_gray"
    }, "FPS", -1)), k(p(s.fps), 1)]), i("div", Tl, [k(p(a.formatedDate.day), 1), i("div", Ml, "/" + p(a.formatedDate.month), 1), k(p(a.formatedDate.time), 1)])])
}
const Il = {
        props: {
            ping: {
                type: Number,
                default: 0
            },
            fps: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            date: new Date,
            dateInterval: null
        }),
        computed: {
            formatedDate() {
                const e = this.date.getDate().toString().padStart(2, "0"),
                    t = this.date.getMonth().toString().padStart(2, "0"),
                    s = this.date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                return {
                    day: e,
                    month: t,
                    time: s
                }
            }
        },
        created() {
            this.startDateUpdate()
        },
        unmounted() {
            this.stopDateUpdate()
        },
        methods: {
            stopDateUpdate() {
                clearInterval(this.dateInterval)
            },
            startDateUpdate() {
                this.stopDateUpdate(), this.dateInterval = setInterval(() => this.updateDate(), 1e3 * 60)
            },
            updateDate() {
                this.date = new Date
            }
        }
    },
    Ol = g(Il, [
        ["render", kl],
        ["__scopeId", "data-v-5f7c47d7"]
    ]);
class Ll {
    static calculateDistance(t, s, l, r) {
        return Math.hypot(l - t, r - s)
    }
}
const Pl = {
        class: "map-mask"
    },
    Al = ["d", "stroke-width"],
    Dl = {
        class: "gang-zones__wrapper"
    },
    Hl = ["src"],
    xl = {
        class: "player-icon"
    };

function Bl(e, t, s, l, r, a) {
    return n(), o("div", {
        class: "hud-hassle-map",
        style: f(a.mapStyle)
    }, [i("div", Pl, [i("div", {
        class: "tiles-container",
        style: f(a.tilesContainerStyle)
    }, [(n(!0), o(E, null, M(e.visibleTiles, d => (n(), o("div", {
        class: "tile",
        key: d.id,
        style: f(a.tileStyle(d))
    }, null, 4))), 128))], 4), (n(), o("svg", {
        class: "route",
        style: f(a.routeStyle)
    }, [i("path", {
        d: a.routePath,
        stroke: "#FAB700",
        "stroke-width": a.routeWidth,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none"
    }, null, 8, Al)], 4)), i("div", {
        class: "gang-zones",
        style: f(a.gangZonesContainerStyle)
    }, [i("div", Dl, [(n(!0), o(E, null, M(Object.entries(a.gangZones), ([d, h]) => (n(), o("div", {
        class: "gang-zones__item",
        key: d,
        style: f(e.gangZonesStyles[d])
    }, null, 4))), 128))])], 4)]), i("div", {
        class: "nearby-players-container",
        style: f(a.nearbyPlayersContainerStyle)
    }, [(n(!0), o(E, null, M(e.nearbyPlayers, (d, h) => (n(), o("div", {
        class: "nearby-player",
        key: h
    }, [d.show ? (n(), o("div", {
        key: 0,
        class: "nearby-player-icon",
        style: f(a.getNearbyPlayerStyle(d))
    }, null, 4)) : c("", !0)]))), 128))], 4), i("div", {
        class: "markers-container",
        style: f(a.markersContainerStyle)
    }, [(n(!0), o(E, null, M(e.markers, d => (n(), o("div", {
        class: "marker",
        key: d.name,
        style: f(a.markerStyle(d))
    }, [d.show && !d.isCheckpoint ? (n(), o("img", {
        key: 0,
        style: f(a.markerImageStyle),
        src: d.icon
    }, null, 12, Hl)) : c("", !0), d.show && d.isCheckpoint ? (n(), o("div", {
        key: 1,
        class: "marker-checkpoint",
        style: f(a.markerCheckpointStyle)
    }, null, 4)) : c("", !0)], 4))), 128))], 4), i("div", xl, [i("img", {
        style: f(a.playerIconStyle),
        src: "/images/gps/player_arrow.png"
    }, null, 4)])], 4)
}
const Rl = 1e3,
    Fl = 12e3,
    Y = 6144,
    P = 256,
    Ce = Y / P,
    x = 512 / P,
    I = Y / Fl,
    Nl = 255,
    Yl = .5,
    Kl = .15,
    $l = .25,
    j = .08,
    Zl = .1,
    J = .08,
    Ul = .1,
    ve = .25,
    ye = 21,
    we = 24,
    Vl = .6,
    Wl = 5,
    Gl = 10,
    zl = {
        props: {
            isMobile: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            zoom: 1,
            scaledZoom: 1,
            rotationDegrees: 0,
            targetRotationDegrees: 0,
            visibleTiles: [],
            markers: {},
            nearbyPlayers: [],
            translate: {
                x: 0,
                y: 0
            },
            navigationMarker: null,
            gangZonesStyles: {},
            flashedTimers: []
        }),
        computed: {
            routeWidth() {
                return this.isMobile ? Gl : Wl
            },
            mapWidth() {
                return this.isMobile ? we : ye
            },
            mapHeight() {
                return this.isMobile ? we : ye
            },
            playerPosition() {
                return this.$store.getters["player/position"]
            },
            playerIsInInterior() {
                return this.playerPosition.interior
            },
            mapStyle() {
                return {
                    width: `${this.mapWidth}vh`,
                    height: `${this.mapHeight}vh`,
                    transform: `rotate(-${this.rotationDegrees}deg)`
                }
            },
            tilesContainerStyle() {
                return {
                    transform: `scale(${this.scaledZoom}) translate(${this.translate.x}px, ${this.translate.y}px)`,
                    ...this.playerIsInInterior && {
                        display: "none"
                    }
                }
            },
            markersContainerStyle() {
                return {
                    transform: `scale(${this.scaledZoom}) translate(${this.translate.x}px, ${this.translate.y}px)`
                }
            },
            gangZonesContainerStyle() {
                return {
                    transform: `scale(${this.scaledZoom}) translate(${this.translate.x}px, ${this.translate.y}px)`
                }
            },
            markerToMapSizeRelation() {
                return this.isMobile ? $l : Kl
            },
            markerImageStyle() {
                return {
                    width: `${this.mapWidth*this.markerToMapSizeRelation}vh`,
                    height: `${this.mapHeight*this.markerToMapSizeRelation}vh`
                }
            },
            markerCheckpointStyle() {
                return {
                    width: `${this.mapWidth*j}vh`,
                    height: `${this.mapHeight*j}vh`,
                    borderWidth: `${this.mapHeight*j*Zl}vh`
                }
            },
            nearbyPlayersContainerStyle() {
                return {
                    transform: `scale(${this.scaledZoom}) translate(${this.translate.x}px, ${this.translate.y}px)`
                }
            },
            playerIconStyle() {
                return {
                    width: `${this.mapWidth*ve}vh`,
                    height: `${this.mapHeight*ve}vh`,
                    transform: `scale(${this.zoom}) rotate(${this.targetRotationDegrees}deg)`
                }
            },
            routeStyle() {
                return {
                    transform: `scale(${this.scaledZoom}) translate(${this.translate.x}px, ${this.translate.y}px)`,
                    ...(this.playerIsInInterior || !this.route.length) && {
                        display: "none"
                    }
                }
            },
            routePath() {
                if (!this.route.length) return "";
                const e = {
                        x: Y / 2,
                        y: Y / 2
                    },
                    t = this.route[0];
                let s = `M${t[0]*I+e.x},${-t[1]*I+e.y}`;
                return this.route.slice(1).forEach(l => {
                    s += ` L${l[0]*I+e.x},${-l[1]*I+e.y}`
                }), s
            },
            route() {
                return this.$store.getters["player/route"]
            },
            gangZones() {
                return this.$store.getters["player/gangZones"]
            },
            flashedGangZones() {
                return this.$store.getters["player/flashedGangZones"]
            }
        },
        mounted() {
            engine.on("UpdateRadar", this.update), engine.on("CreateRadarObject", this.addMarker), engine.on("RemoveRadarObject", this.removeMarker), engine.on("WaypointOnMapSet", this.waypointOnMapSet), engine.on("WaypointOnMapRemoved", this.waypointOnMapRemoved)
        },
        unmounted() {
            this.clearGangZonesFlash()
        },
        methods: {
            fixGangZonesBounds(e) {
                return e.map(([t, s]) => [t * I, s * I])
            },
            updateGangZonesStyles() {
                const e = {};
                this.clearGangZonesFlash();
                for (const [t, s] of Object.entries(this.gangZones)) {
                    const [l, ...r] = s, [a, d] = this.fixGangZonesBounds(r), h = d[0] - a[0], _ = d[1] - a[1];
                    e[t] = {
                        background: l,
                        transform: `translate(${a[0]+h/2}px, ${a[1]+_/2}px)`,
                        width: `${Math.abs(h)}px`,
                        height: `${Math.abs(_)}px`
                    }, this.flashedGangZones[t] !== void 0 && this.setGangZoneFlash(t, l, this.flashedGangZones[t])
                }
                this.gangZonesStyles = e
            },
            setGangZoneFlash(e, t, s) {
                const l = setInterval(() => {
                    const a = this.gangZonesStyles[e].background === s ? t : s;
                    this.gangZonesStyles[e].background = a
                }, Rl);
                this.flashedTimers.push(l)
            },
            clearGangZonesFlash() {
                for (const e of this.flashedTimers) clearInterval(e);
                this.flashedTimers = []
            },
            tileStyle(e) {
                return {
                    backgroundImage: `url('images/hud/map/${Ce/2+e.x}_${Ce/2+e.y}.png')`,
                    transform: `translate(${e.tilePosX}px, ${e.tilePosY}px)`
                }
            },
            markerStyle(e) {
                const t = e.displayPosX && e.displayPosY ? `translate(${e.displayPosX}px, ${-e.displayPosY}px)` : "";
                return {
                    width: `${this.mapWidth*this.markerToMapSizeRelation}vh`,
                    height: `${this.mapHeight*this.markerToMapSizeRelation}vh`,
                    transform: `${t} rotate(${this.rotationDegrees}deg) scale(${1/this.scaledZoom}) `
                }
            },
            getNearbyPlayerStyle(e) {
                const t = e.displayPosX && e.displayPosY ? `translate(${e.displayPosX}px, ${-e.displayPosY}px)` : "";
                return {
                    width: `${this.mapWidth*J}vh`,
                    height: `${this.mapHeight*J}vh`,
                    borderWidth: `${this.mapHeight*J*Ul}vh`,
                    transform: `${t} rotate(${this.rotationDegrees}deg) scale(${1/this.scaledZoom}) `,
                    background: e.color,
                    opacity: Math.max(Yl, e.opacity)
                }
            },
            waypointOnMapSet(e, t) {
                window.startNavigationInterval(e, t)
            },
            waypointOnMapRemoved() {
                window.discardRoute(), window.disableWaypoint()
            },
            update(e, t, s, l, r, a) {
                a = JSON.parse(a), this.translate = {
                    x: -e * I,
                    y: t * I
                }, this.updateVisibleTiles(e, t), this.updateMarkers(e, t), this.updateNearbyPlayers(a, e, t), this.zoom = r, this.scaledZoom = Math.min(r * window.scale, this.isMobile ? Vl : r * window.scale), this.rotationDegrees = l, this.targetRotationDegrees = s
            },
            updateVisibleTiles(e, t) {
                const s = this.getTileIndex(e, t);
                let l = [];
                for (let r = s.x - x; r <= s.x + x; r++)
                    for (let a = s.y - x; a <= s.y + x; a++) l.push({
                        id: `tile-${r}-${a}`,
                        x: r,
                        y: a,
                        tilePosX: r * P + P / 2,
                        tilePosY: a * P + P / 2
                    });
                this.visibleTiles = l
            },
            getTileIndex(e, t) {
                return {
                    x: Math.floor(e * I / P),
                    y: Math.floor(-t * I / P)
                }
            },
            addMarker(e, t, s, l, r, a) {
                const d = a == 1 || a == 3;
                this.markers[e] = {
                    name: e,
                    icon: `images/gps/${l}.png`,
                    x: t * I,
                    y: s * I,
                    isGlobal: d,
                    isCheckpoint: l == "checkpoint",
                    show: !1
                }, d && (this.navigationMarker = e, window.startNavigationInterval(t, s))
            },
            removeMarker(e) {
                delete this.markers[e], e === this.navigationMarker && window.stopNavigationInterval()
            },
            updateMarkers(e, t) {
                for (const s in this.markers) this.adjustMarkerPosition(this.markers[s], e, t)
            },
            updateNearbyPlayers(e, t, s) {
                this.nearbyPlayers = e.map(([l, r, a, d, h, _, y]) => ({
                    ...this.adjustMarkerPosition({
                        x: l * I,
                        y: r * I
                    }, t, s),
                    angle: a,
                    color: `rgb(${d}, ${h}, ${_})`,
                    opacity: y / Nl
                }))
            },
            adjustMarkerPosition(e, t, s) {
                t *= I, s *= I;
                let l = Ll.calculateDistance(e.x, e.y, t, s);
                const r = Math.atan2(e.y - s, e.x - t),
                    d = this.mapWidth / 100 * window.innerHeight / (2 * this.scaledZoom);
                return l > d ? e.isGlobal ? (l = d, e.show = !0) : e.show = !1 : e.show = !0, e.displayPosX = t + l * Math.cos(r), e.displayPosY = s + l * Math.sin(r), e
            }
        },
        watch: {
            gangZones: {
                handler(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.updateGangZonesStyles()
                },
                deep: !0
            },
            flashedGangZones: {
                handler(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && this.updateGangZonesStyles()
                },
                deep: !0
            }
        }
    },
    ql = g(zl, [
        ["render", Bl],
        ["__scopeId", "data-v-dbe0d94a"]
    ]);

function Xl(e, t, s, l, r, a) {
    const d = m("LegacyHudMap"),
        h = m("HudMap"),
        _ = m("UIMobileButton");
    return n(), o("div", {
        class: "hud-hassle-radar",
        style: f({
            transform: `scale(${s.ratioScale})`
        })
    }, [i("div", {
        class: v(["hud-hassle-radar__map", {
            "hud-hassle-radar__map_hidden": !a.radarIsVisible
        }])
    }, [a.useLegacyMap ? (n(), w(d, {
        key: 0,
        isMobile: !0
    })) : (n(), w(h, {
        key: 1,
        isMobile: !0
    }))], 2), i("div", {
        class: v(["hud-hassle-radar__controls", {
            "hud-hassle-radar__controls_hidden": !s.isShowControllers && !s.isShowRadarButtons
        }])
    }, [u(_, {
        class: "mobile-button_1",
        key: "FAQ",
        size: 54,
        onTouchstart: a.openFAQ
    }, null, 8, ["onTouchstart"]), u(_, {
        class: "hud-hassle-radar__menu-button mobile-button_2",
        key: "Menu",
        size: 78,
        onTouchend: a.openMenu
    }, null, 8, ["onTouchend"]), u(_, {
        class: "hud-hassle-radar__inventory-button mobile-button_3",
        key: "Inventory",
        size: 78,
        onTouchstart: t[0] || (t[0] = y => a.keyDown(e.KEY_CODE_I))
    }), u(_, {
        class: "hud-hassle-radar__player-interaction-button mobile-button_4",
        key: "PlayerInteraction",
        size: 78,
        onTouchstart: t[1] || (t[1] = y => a.keyDown(e.KEY_CODE_R))
    }), u(_, {
        class: "mobile-button_5",
        key: "Phone",
        size: 78,
        onTouchstart: t[2] || (t[2] = y => a.keyDown(e.KEY_CODE_P))
    }), i("div", {
        class: "hud-hassle-radar__clickable-zone",
        onTouchend: t[3] || (t[3] = (...y) => a.openMap && a.openMap(...y))
    }, null, 32)], 2)], 4)
}
const jl = {
        props: ["ratioScale", "radar", "isShowControllers", "isShowRadarButtons", "isShowRadar"],
        components: {
            LegacyHudMap: ql,
            HudMap: Ge,
            UIMobileButton: $
        },
        data: () => ({
            KEY_CODE_P: window.KEY_CODE_P,
            KEY_CODE_R: window.KEY_CODE_R,
            KEY_CODE_I: window.KEY_CODE_I,
            KEY_CODE_M: window.KEY_CODE_M
        }),
        computed: {
            useLegacyMap() {
                return window.App.engine == "Unity"
            },
            radarIsVisible() {
                return this.radar.show && (this.isShowControllers || this.isShowRadar)
            }
        },
        methods: {
            openFAQ() {
                sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "OnReportOpenFaq")
            },
            openMap() {
                openInterface("MainMenu", `["${fs}"]`)
            },
            keyDown(e) {
                window.onKeyDown(e), setTimeout(() => {
                    window.onKeyUp(e)
                }, 100)
            },
            openMenu() {
                window.openPauseMenu()
            }
        }
    },
    Jl = g(jl, [
        ["render", Xl],
        ["__scopeId", "data-v-c7a49b9c"]
    ]),
    Ql = {},
    ed = {
        width: "50",
        height: "50",
        viewBox: "0 0 50 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function td(e, t) {
    return n(), o("svg", ed, t[0] || (t[0] = [ds('<g opacity="0.45"><path d="M1 1L49 49M1 49L49 1" stroke="url(#paint0_linear_3203_238)"></path><path d="M1 1L49 49M1 49L49 1" stroke="url(#paint1_radial_3203_238)" stroke-opacity="0.7"></path><path d="M1 1L49 49M1 49L49 1" stroke="url(#paint2_radial_3203_238)" stroke-opacity="0.25"></path><path d="M1 1L49 49M1 49L49 1" stroke="url(#paint3_radial_3203_238)" stroke-opacity="0.7"></path></g><defs><linearGradient id="paint0_linear_3203_238" x1="-42.222" y1="91.6506" x2="-42.5979" y2="91.2721" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F6ED"></stop><stop offset="1" stop-color="#C8C8C7"></stop></linearGradient><radialGradient id="paint1_radial_3203_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-13.6232 63.0012) rotate(-44.9931) scale(110.582 1.33285)"><stop stop-color="white"></stop><stop offset="0.485819" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint2_radial_3203_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.7712 22.0127) rotate(-45.2996) scale(52.3305 15.157)"><stop stop-color="white"></stop><stop offset="0.414616" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint3_radial_3203_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2003 39.4686) rotate(-45.1878) scale(28.5604 0.365781)"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient></defs>', 2)]))
}
const sd = g(Ql, [
        ["render", td]
    ]),
    ad = {
        key: 0,
        class: "joystick__sprint"
    },
    id = ["src"],
    nd = {
        class: "mobile-button__content",
        ref: "joystick_content"
    };

function od(e, t, s, l, r, a) {
    const d = m("UIMobileButton");
    return n(), o("div", {
        class: "joystick-container",
        onTouchstart: t[1] || (t[1] = (...h) => a.onStartTouchContainer && a.onStartTouchContainer(...h)),
        onTouchend: t[2] || (t[2] = (...h) => a.touchEnd && a.touchEnd(...h))
    }, [i("div", {
        class: "mobile-button joystick",
        ref: "joystick_button",
        onClick: t[0] || (t[0] = h => a.click()),
        style: f({
            width: a.buttonSize,
            height: a.buttonSize,
            opacity: r.show ? 1 : 0,
            left: r.position.x + "px",
            top: r.position.y + "px"
        })
    }, [u(T, {
        name: "fade"
    }, {
        default: C(() => [r.isShownSprint && s.useSprint ? (n(), o("div", ad, [u(d, {
            key: "Sprint",
            size: 78,
            active: r.isSprintActive,
            icon: "Sprint"
        }, null, 8, ["active"]), t[3] || (t[3] = i("img", {
            class: "joystick__sprint-hint",
            src: Nt
        }, null, -1))])) : c("", !0)]),
        _: 1
    }), i("img", {
        class: "joystick-bg",
        src: r.joystickBg["/src/assets/images/hud/mobile/joystick-bg.png"]
    }, null, 8, id), i("div", nd, [i("div", {
        class: "mobile-button__joystick",
        ref: "joystick",
        style: f({
            marginLeft: `${r.deltaX}px`,
            marginTop: `${r.deltaY}px`,
            ...a.squareMobileJoystickStyles
        })
    }, null, 4)], 512)], 4)], 32)
}
const rd = .4,
    ld = .7,
    dd = 1.3,
    B = "<Keyboard>/Space",
    hd = .8,
    ud = {
        components: {
            UIMobileButton: $,
            IconCross: sd
        },
        props: {
            size: {
                default: 222
            },
            useSprint: {
                default: !1
            },
            isSquareMobile: {
                default: !1
            }
        },
        data() {
            return {
                joystickBg: Object.assign({
                    "/src/assets/images/hud/mobile/bg.png": gs,
                    "/src/assets/images/hud/mobile/button-bg.png": ps,
                    "/src/assets/images/hud/mobile/info-bar-bg.png": Cs,
                    "/src/assets/images/hud/mobile/joystick-bg copy.png": vs,
                    "/src/assets/images/hud/mobile/joystick-bg.png": ys,
                    "/src/assets/images/hud/mobile/logo.png": ws
                }),
                SCREEN_RESOLUTION: 1080,
                isShownSprint: !1,
                isSprintActive: !1,
                show: !1,
                touchIdentifier: null,
                lastTouchTime: 0,
                isCrouch: !1,
                position: {
                    x: 0,
                    y: 0
                },
                minDeltaX: 0,
                minDeltaY: 0,
                maxDeltaX: 0,
                maxDeltaY: 0,
                baseJoystickPosition: null,
                positionUpdated: !1,
                deltaX: 0,
                deltaY: 0
            }
        },
        computed: {
            buttonSize() {
                return this.size / this.SCREEN_RESOLUTION * 100 + "vh"
            },
            stickValue() {
                return {
                    x: this.deltaX / this.maxDeltaX,
                    y: -this.deltaY / this.maxDeltaY
                }
            },
            maxDeltaOffset() {
                return this.useSprint ? Math.abs(this.maxDeltaY - this.minDeltaY) * rd : 0
            },
            squareMobileJoystickStyles() {
                return this.isSquareMobile ? {
                    transform: `scale(${hd})`
                } : {}
            }
        },
        methods: {
            onStartTouchContainer(e) {
                if (this.touchIdentifier != null) return;
                const s = e.currentTarget.getBoundingClientRect(),
                    l = this.$refs.joystick_button,
                    r = e.touches[e.touches.length - 1];
                this.position = {
                    x: r.clientX - s.left - l.offsetWidth / 2,
                    y: r.clientY - s.top - l.offsetHeight / 2
                }, this.touchIdentifier = r.identifier, this.baseJoystickPosition = {
                    left: r.clientX,
                    top: r.clientY
                }, this.touchStart()
            },
            click(e) {
                this.$emit("click", e)
            },
            touchStart() {
                this.updateLimits(), this.show = !0, window.onScreenControlTouchStart("<Gamepad>/leftStick"), Date.now() - this.lastTouchTime < 300 && (this.isCrouch = !0, window.onScreenControlTouchStart("<Keyboard>/c")), this.lastTouchTime = Date.now()
            },
            onSprintEnabled() {
                window.onScreenControlTouchStart(B)
            },
            onSprintDisabled() {
                window.onScreenControlTouchEnd(B)
            },
            onMoving() {
                if (!this.useSprint) return;
                const {
                    y: e
                } = this.stickValue;
                this.isShownSprint = e > ld, this.isSprintActive = e > dd, this.isSprintActive ? this.onSprintEnabled() : this.onSprintDisabled()
            },
            moving(e) {
                const {
                    maxDeltaOffset: t
                } = this;
                for (let s of e.touches) {
                    if (s.identifier != this.touchIdentifier) continue;
                    let l = s.clientY - this.baseJoystickPosition.top;
                    l > this.maxDeltaY + t ? l = this.maxDeltaY + t : l < this.minDeltaY - t && (l = this.minDeltaY - t), this.deltaY = l;
                    let r = s.clientX - this.baseJoystickPosition.left;
                    r > this.maxDeltaX + t ? r = this.maxDeltaX + t : r < this.minDeltaX - t && (r = this.minDeltaX - t), this.deltaX = r, this.positionUpdated = !0
                }
                this.onMoving()
            },
            touchEnd(e) {
                this.isShownSprint = !1, this.isSprintActive = !1, this.onSprintDisabled(), this.show = !1, this.touchIdentifier = null, this.deltaX = 0, this.deltaY = 0, this.isCrouch && (this.isCrouch = !1, window.onScreenControlTouchEnd("<Keyboard>/c")), A(() => {
                    window.onScreenControlTouchEnd("<Gamepad>/leftStick")
                })
            },
            updateLimits() {
                const e = this.$refs.joystick_content,
                    t = this.$refs.joystick,
                    s = e.getBoundingClientRect(),
                    l = t.getBoundingClientRect();
                this.maxDeltaX = e.offsetWidth - (l.left - s.left), this.maxDeltaY = e.offsetHeight - (l.top - s.top), this.minDeltaX = s.left - l.left - t.offsetWidth, this.minDeltaY = s.top - l.top - t.offsetHeight
            }
        },
        mounted() {
            this.$el.addEventListener("touchend", this.touchEnd), this.$el.addEventListener("touchmove", this.moving), window.onScreenButtonCreate("<Keyboard>/c"), window.onScreenJoystickCreate("<Gamepad>/leftStick")
        },
        created() {
            window.onScreenButtonCreate(B), this.moveInterval = setInterval(() => {
                if (this.positionUpdated) {
                    const {
                        x: e,
                        y: t
                    } = this.stickValue;
                    window.onScreenControlTouchMove("<Gamepad>/leftStick", e, t), this.positionUpdated = !1
                }
            }, 100)
        },
        unmounted() {
            window.onScreenControlRemove(B), this.show && (clearInterval(this.moveInterval), this.deltaX = 0, this.deltaY = 0, this.isCrouch && window.onScreenControlTouchEnd("<Keyboard>/c"), window.onScreenControlTouchEnd("<Gamepad>/leftStick"), window.onScreenControlRemove("<Gamepad>/leftStick"), window.onScreenControlRemove("<Keyboard>/c"))
        }
    },
    cd = g(ud, [
        ["render", od]
    ]),
    _d = {},
    md = {
        width: "40",
        height: "39",
        viewBox: "0 0 40 39",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

function fd(e, t) {
    return n(), o("svg", md, t[0] || (t[0] = [i("path", {
        d: "M39.023 0L23.7797 23.62L0 38.761L15.2434 15.141L39.023 0Z",
        fill: "#141414"
    }, null, -1), i("path", {
        d: "M39.0238 38.7619L15.2441 23.6209L0.000774298 0.000878883L23.7804 15.1419L39.0238 38.7619Z",
        fill: "#141414"
    }, null, -1)]))
}
const gd = g(_d, [
        ["render", fd]
    ]),
    pd = {
        class: "hud-hassle-controls__close__icon"
    },
    Cd = {
        class: "hud-hassle-controls__size"
    },
    vd = {
        class: "hud-hassle-controls__size__content"
    },
    yd = {
        key: 0,
        class: "hud-hassle-controls__size__content-value"
    },
    wd = ["data-native"];

function bd(e, t, s, l, r, a) {
    const d = m("IconClose"),
        h = m("RangeSlider"),
        _ = m("UIMobileButton"),
        y = m("UIMobileJoystick"),
        S = hs("touch");
    return n(), o("div", {
        class: v(["hud-hassle-controls", {
            "hud-hassle-controls_editable": a.isEditableMode
        }])
    }, [s.isShowControllers ? (n(), o(E, {
        key: 0
    }, [a.isEditableMode ? (n(), o("div", {
        key: 0,
        class: "hud-hassle-controls__close",
        onTouchend: t[0] || (t[0] = (...b) => a.closeEditable && a.closeEditable(...b))
    }, [i("div", pd, [u(d)])], 32)) : c("", !0), a.isEditableMode ? (n(), o("div", {
        key: 1,
        class: v(["hud-hassle-controls__current", {
            "hud-hassle-controls__current_disabled": !e.currentButton
        }])
    }, [i("div", Cd, [i("div", vd, [t[18] || (t[18] = i("div", {
        class: "hud-hassle-controls__size__content-title"
    }, "Размер кнопки", -1)), e.currentButton ? (n(), o("div", yd, p(Math.round(a.countButtonSize)) + " %", 1)) : c("", !0)]), u(h, {
        min: 20,
        max: 200,
        value: a.countButtonSize,
        bgColor: "white",
        lineBg: "rgba(255, 255, 255, 0.25)",
        onValueChanged: a.changeScale
    }, null, 8, ["value", "onValueChanged"])]), i("div", {
        class: "hud-hassle-controls__button",
        onClick: t[1] || (t[1] = (...b) => a.resetButton && a.resetButton(...b))
    }, "По умолчанию")], 2)) : c("", !0)], 64)) : c("", !0), i("div", {
        class: "hud-hassle-controls__buttons",
        "data-native": a.isEditableMode ? void 0 : !0
    }, [s.isShowControllers ? (n(), o(E, {
        key: 0
    }, [u(_, {
        key: "Voice",
        active: a.isActiveButton("Voice"),
        onMousedown: t[2] || (t[2] = b => a.selectButton("Voice")),
        name: "<Keyboard>/x",
        icon: "VoiceActive",
        editable: a.isEditableMode,
        position: a.controls.Voice,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), a.radioButtonStatus ? (n(), w(_, {
        key: "Radio",
        active: a.isActiveButton("Radio"),
        onPointerdown: t[3] || (t[3] = b => a.selectButton("Radio")),
        name: "<Keyboard>/u",
        editable: a.isEditableMode,
        position: a.controls.Radio,
        "onPosition:updated": a.updatePosition,
        useVw: !0
    }, null, 8, ["active", "editable", "position", "onPosition:updated"])) : c("", !0), a.isSpeedometerShown ? (n(), o(E, {
        key: 2
    }, [a.useJoystick ? c("", !0) : (n(), o(E, {
        key: 0
    }, [u(_, {
        key: "TurnLeft",
        active: a.isActiveButton("TurnLeft"),
        onMousedown: t[10] || (t[10] = b => a.selectButton("TurnLeft")),
        name: "<Keyboard>/a",
        editable: a.isEditableMode,
        position: a.controls.TurnLeft,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        style: {
            "z-index": "100"
        },
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), u(_, {
        key: "TurnRight",
        active: a.isActiveButton("TurnRight"),
        onMousedown: t[11] || (t[11] = b => a.selectButton("TurnRight")),
        name: "<Keyboard>/d",
        editable: a.isEditableMode,
        position: a.controls.TurnRight,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        style: {
            "z-index": "100"
        },
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])], 64)), u(_, {
        name: "<Keyboard>/space",
        key: "HandBrake",
        active: a.isActiveButton("HandBrake"),
        onMousedown: t[12] || (t[12] = b => a.selectButton("HandBrake")),
        editable: a.isEditableMode,
        position: a.controls.HandBrake,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), u(_, {
        key: "Beep",
        active: a.isActiveButton("Beep"),
        onMousedown: t[13] || (t[13] = b => a.selectButton("Beep")),
        name: "<Keyboard>/h",
        editable: a.isEditableMode,
        position: a.controls.Beep,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), N(u(_, {
        name: "<Keyboard>/s",
        key: "PedalStop",
        active: a.isActiveButton("PedalStop"),
        onMousedown: t[14] || (t[14] = b => a.selectButton("PedalStop")),
        editable: a.isEditableMode,
        position: a.controls.PedalStop,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), [
        [S, a.startTouchPedalStop, "press"],
        [S, a.stopTouchPedalStop, "release"]
    ]), N(u(_, {
        name: "<Keyboard>/w",
        key: "PedalGas",
        active: a.isActiveButton("PedalGas"),
        onMousedown: t[15] || (t[15] = b => a.selectButton("PedalGas")),
        editable: a.isEditableMode,
        position: a.controls.PedalGas,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), [
        [S, a.startTouchPedalGas, "press"],
        [S, a.stopTouchPedalGas, "release"]
    ])], 64)) : (n(), o(E, {
        key: 1
    }, [a.isPassenger ? c("", !0) : (n(), o(E, {
        key: 0
    }, [a.isAimMode ? c("", !0) : (n(), w(_, {
        active: a.isActiveButton("Jump"),
        onMousedown: t[4] || (t[4] = b => a.selectButton("Jump")),
        key: "Jump",
        name: "<Keyboard>/leftShift",
        editable: a.isEditableMode,
        position: a.controls.Jump,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])), a.isWeaponActive && !a.isMeleeWeapon ? (n(), w(_, {
        onMousedown: t[5] || (t[5] = b => a.selectButton("Aim")),
        key: "Aim",
        onTouchStartInvoked: a.toggleAim,
        active: a.isActiveButton("Aim") || a.isAimMode,
        editable: a.isEditableMode,
        position: a.controls.Aim,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["onTouchStartInvoked", "active", "editable", "position", "onPosition:updated", "isSquareMobile"])) : c("", !0), a.isPlayerSwiming ? (n(), w(_, {
        key: "Dive",
        active: a.isActiveButton("Dive"),
        onMousedown: t[9] || (t[9] = b => a.selectButton("Dive")),
        name: "<Mouse>/leftButton",
        editable: a.isEditableMode,
        position: a.controls.Dive,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])) : (n(), o(E, {
        key: 2
    }, [a.isWeaponActive && !a.isMeleeWeapon && a.isAimMode && a.totalAmmo ? (n(), o(E, {
        key: 0
    }, [u(_, {
        active: a.isActiveButton("Patron"),
        onMousedown: t[6] || (t[6] = b => a.selectButton("Patron")),
        key: "Patron",
        name: "<Mouse>/leftButton",
        editable: a.isEditableMode,
        position: a.controls.Patron,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"]), u(_, {
        active: a.isActiveButton("SecondPatron"),
        onMousedown: t[7] || (t[7] = b => a.selectButton("SecondPatron")),
        key: "Patron",
        positionKey: "SecondPatron",
        name: "<Mouse>/leftButton",
        editable: a.isEditableMode,
        position: a.controls.SecondPatron,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])], 64)) : c("", !0), !a.isWeaponActive || a.isMeleeWeapon ? (n(), w(_, {
        active: a.isActiveButton("Atack"),
        onMousedown: t[8] || (t[8] = b => a.selectButton("Atack")),
        key: "Atack",
        name: "<Mouse>/leftButton",
        editable: a.isEditableMode,
        position: a.controls.Atack,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])) : c("", !0)], 64))], 64))], 64)), a.isSpeedometerShown || a.isPassenger ? (n(), w(_, {
        key: "LeaveCar",
        active: a.isActiveButton("LeaveCar"),
        onMousedown: t[16] || (t[16] = b => a.selectButton("LeaveCar")),
        name: "<Keyboard>/f",
        editable: a.isEditableMode,
        position: a.controls.LeaveCar,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "editable", "position", "onPosition:updated", "isSquareMobile"])) : a.hasNearestVehicle ? (n(), w(_, {
        key: "SeatCar",
        active: a.isActiveButton("SeatCar"),
        onMousedown: t[17] || (t[17] = b => a.selectButton("SeatCar")),
        name: "<Keyboard>/f&<Keyboard>/g",
        longTouch: !0,
        onTouchEnd: a.onTrySeatCar,
        editable: a.isEditableMode,
        position: a.controls.SeatCar,
        "onPosition:updated": a.updatePosition,
        useVw: !0,
        isSquareMobile: s.isSquareMobile
    }, null, 8, ["active", "onTouchEnd", "editable", "position", "onPosition:updated", "isSquareMobile"])) : c("", !0)], 64)) : c("", !0), !a.isEditableMode && (s.useInvisibleJoystick || s.isShowControllers) ? (n(), w(T, {
        key: 1,
        name: "fade"
    }, {
        default: C(() => [s.data.speedometer.show && a.settings.useJoystick || !s.data.speedometer.show ? (n(), o("div", {
            key: 0,
            class: v(["hud-hassle-controls__joystick", {
                "hud-hassle-controls__joystick_invisible": s.useInvisibleJoystick
            }])
        }, [u(y, {
            ref: "joystick",
            useSprint: !a.isPassenger && !a.isSpeedometerShown,
            isSquareMobile: s.isSquareMobile
        }, null, 8, ["useSprint", "isSquareMobile"])], 2)) : c("", !0)]),
        _: 1
    })) : c("", !0)], 8, wd)], 2)
}
const R = 100,
    Sd = {
        props: ["data", "useInvisibleJoystick", "isShowControllers", "isSquareMobile"],
        components: {
            UIMobileButton: $,
            UIMobileJoystick: cd,
            RangeSlider: bs,
            IconClose: gd
        },
        data: () => ({
            DEFAULT_BUTTON_SCALE: R,
            currentButton: null
        }),
        computed: {
            isSpeedometerShown() {
                return this.data.speedometer.show
            },
            isAimMode() {
                return this.data.isAimMode
            },
            isPassenger() {
                return this.data.isPassenger
            },
            isPlayerSwiming() {
                return this.data.isPlayerSwiming
            },
            isWeaponActive() {
                return !!this.data.info.weapon
            },
            isMeleeWeapon() {
                const e = this.data.info.weapon;
                return (e >= 1 && e <= 15 || e === 46) && e !== 9
            },
            totalAmmo() {
                return this.data.info.totalAmmo
            },
            hasNearestVehicle() {
                return this.data.hasNearestVehicle
            },
            settings() {
                return this.$store.getters["settings/settings"]
            },
            controls() {
                return this.settings.controls ? this.settings.controls : {}
            },
            useJoystick() {
                return this.settings.useJoystick
            },
            isEditableMode() {
                return this.settings.isControlsEditable
            },
            countButtonSize() {
                return this.currentButton ? this.currentButton.scale : R
            },
            radioButtonStatus() {
                return this.$store.getters["voiceChat/radioButton"]
            }
        },
        methods: {
            saveSettings() {
                window.saveControlsSettings(this.controls)
            },
            updatePosition(e, t) {
                this.updateButtonData(e, t)
            },
            closeEditable() {
                this.$store.commit("settings/setEditableMode", !1), window.setDrawLabelStatus(!0), window.setHudStatus(!0), this.currentButton = null, this.saveSettings()
            },
            resetButton() {
                this.changeScale(R), this.currentButton.scale = R;
                const {
                    key: e
                } = this.currentButton;
                this.updateButtonData(e, us[e])
            },
            changeScale(e) {
                const {
                    key: t
                } = this.currentButton;
                this.currentButton.scale = e, this.setButtonScale(t, e)
            },
            isActiveButton(e) {
                return this.isEditableMode && this.currentButton && this.currentButton.key === e
            },
            selectButton(e) {
                this.currentButton = {
                    key: e,
                    scale: this.controls[e].scale
                }
            },
            setButtonScale(e, t) {
                this.updateButtonData(e, {
                    scale: t
                })
            },
            updateButtonData(e, t) {
                this.$store.commit("settings/setControlParams", {
                    name: e,
                    payload: {
                        ...this.controls[e],
                        ...t
                    }
                })
            },
            toggleAim() {
                this.isEditableMode || this.$emit("toggleAim")
            },
            startTouchPedalStop() {
                this.isEditableMode || this.$emit("startTouchPedalStop")
            },
            stopTouchPedalStop() {
                this.isEditableMode || this.$emit("stopTouchPedalStop")
            },
            startTouchPedalGas() {
                this.isEditableMode || this.$emit("startTouchPedalGas")
            },
            stopTouchPedalGas() {
                this.isEditableMode || this.$emit("stopTouchPedalGas")
            },
            onTrySeatCar(e) {
                this.isEditableMode || this.$emit("onTrySeatCar", e)
            }
        }
    },
    Ed = g(Sd, [
        ["render", bd]
    ]),
    Td = {
        class: "hud-hassle-speedometer-appliances__fuel"
    },
    Md = {
        class: "hud-hassle-speedometer-appliances__fuel-value"
    },
    kd = {
        class: "hud-hassle-speedometer-appliances__fuel-value__value"
    },
    Id = {
        style: {
            width: "5.93vh",
            height: "12.31vh"
        },
        viewBox: "0 0 64 133",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Od = ["stroke-dashoffset"],
    Ld = {
        class: "hud-hassle-speedometer-appliances__main"
    },
    Pd = {
        class: "hud-hassle-speedometer-appliances__main__fill",
        style: {
            width: "29.26vh",
            height: "13.43vh"
        },
        viewBox: "0 0 316 145",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ad = ["stroke-dashoffset"],
    Dd = {
        key: 0,
        class: "hud-hassle-speedometer-appliances__speed-bg",
        src: $t
    },
    Hd = {
        class: "hud-hassle-speedometer-appliances__speed"
    },
    xd = {
        class: "hud-hassle-speedometer-appliances__speed__value"
    },
    Bd = {
        class: "hud-hassle-speedometer-appliances__mileage"
    },
    Rd = {
        class: "hud-hassle-speedometer-appliances__mileage__zeros"
    },
    Fd = {
        class: "hud-hassle-speedometer-appliances__mileage__value"
    },
    Nd = {
        class: "hud-hassle-speedometer-appliances__wash"
    },
    Yd = {
        class: "hud-hassle-speedometer-appliances__wash-value"
    },
    Kd = {
        class: "hud-hassle-speedometer-appliances__wash-value__value"
    },
    $d = {
        style: {
            width: "5.93vh",
            height: "12.31vh"
        },
        viewBox: "0 0 64 133",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Zd = ["stroke-dashoffset"];

function Ud(e, t, s, l, r, a) {
    return n(), o("div", {
        class: v(["hud-hassle-speedometer-appliances", {
            "hud-hassle-speedometer-appliances_helloween": s.isHelloween
        }])
    }, [i("div", Td, [i("div", Md, [t[0] || (t[0] = i("img", {
        src: Yt
    }, null, -1)), i("div", kd, p(s.speedometer.fuel) + "л", 1)]), (n(), o("svg", Id, [i("path", {
        d: "M10.1558 197.699C5.62098 180.821 3.2002 163.057 3.2002 144.719C3.2002 90.3406 24.4863 41.0109 59.0592 4.85239L61.0542 2.85742",
        stroke: "#72D373",
        "stroke-width": "6",
        "stroke-dasharray": "300",
        "stroke-dashoffset": 235 - 145 * (s.speedometer.fuel / s.speedometer.maxFuel)
    }, null, 8, Od)]))]), i("div", Ld, [(n(), o("svg", Pd, [i("path", {
        d: "M34.6042 204.937L12.1385 211C6.22381 194.546 3 176.801 3 158.3C3 72.5304 72.2918 3 157.768 3C243.243 3 313 72.5304 313 158.3C313 176.801 309.776 194.546 303.862 211L281.396 204.937",
        stroke: "#F4F1E1",
        "stroke-width": "6",
        "stroke-dasharray": "600",
        "stroke-dashoffset": 510 - 465 * (s.speedometer.speedBar < 1 ? s.speedometer.speedBar : 1),
        style: {
            transition: "all 0.25s ease"
        }
    }, null, 8, Ad)])), s.isHelloween ? (n(), o("img", Dd)) : c("", !0), i("div", Hd, [i("div", xd, p(s.speedometer.speed), 1), t[1] || (t[1] = i("div", {
        class: "hud-hassle-speedometer-appliances__speed__text"
    }, "км/ч", -1))]), i("div", Bd, [i("div", Rd, p(a.mileage.zeros), 1), i("div", Fd, p(a.mileage.value), 1)])]), i("div", Nd, [i("div", Yd, [t[2] || (t[2] = i("img", {
        src: Kt
    }, null, -1)), i("div", Kd, p(a.wash) + "%", 1)]), (n(), o("svg", $d, [i("path", {
        d: "M53.0991 197.699C57.6339 180.821 60.0547 163.057 60.0547 144.719C60.0547 90.3406 38.7685 41.0109 4.19567 4.85239L2.20071 2.85742",
        stroke: "#F4F1E1",
        "stroke-width": "6",
        "stroke-dasharray": "300",
        "stroke-dashoffset": 235 - 145 * s.speedometer.params.wash
    }, null, 8, Zd)]))])], 2)
}
const Vd = {
        props: ["speedometer", "isHelloween"],
        computed: {
            mileage() {
                const e = this.speedometer.mileage;
                return {
                    zeros: Array.from(e.toString().padStart(6, "f")).filter(s => s === "f").join("").split("f").join("0"),
                    value: e
                }
            },
            wash() {
                return Math.ceil((1 - this.speedometer.params.wash) * 100)
            }
        }
    },
    Wd = g(Vd, [
        ["render", Ud]
    ]),
    Gd = {
        class: "hud-hassle-speedometer"
    },
    zd = {
        key: 0,
        class: "hud-hassle-speedometer__controls"
    },
    qd = {
        class: "hud-hassle-speedometer__hint"
    };

function Xd(e, t, s, l, r, a) {
    const d = m("UIMobileButton"),
        h = m("SpeedometerAppliances");
    return n(), o("div", Gd, [u(T, {
        name: "controls"
    }, {
        default: C(() => [e.isControlsShown ? (n(), o("div", zd, [u(d, {
            size: 78,
            key: "Engine",
            active: s.speedometer.params.temperature,
            onClick: a.setCarParamEngine
        }, null, 8, ["active", "onClick"]), u(d, {
            size: 78,
            key: "Key",
            active: s.speedometer.params.key,
            onClick: a.setCarParamKey
        }, null, 8, ["active", "onClick"]), u(d, {
            size: 78,
            key: "Lock",
            active: s.speedometer.params.doors,
            onClick: a.setCarParamLock
        }, null, 8, ["active", "onClick"]), u(d, {
            size: 78,
            key: "Rem",
            active: s.speedometer.params.rem,
            onClick: a.setCarParamRem
        }, null, 8, ["active", "onClick"]), u(d, {
            size: 78,
            key: "Lights",
            active: s.speedometer.params.lights,
            onClick: a.setCarParamLights
        }, null, 8, ["active", "onClick"])])) : c("", !0)]),
        _: 1
    }), i("div", {
        class: "hud-hassle-speedometer__appliances",
        onClick: t[0] || (t[0] = _ => e.isControlsShown = !e.isControlsShown)
    }, [i("div", qd, [t[1] || (t[1] = i("img", {
        src: Zt
    }, null, -1)), k(p(e.isControlsShown ? "Закрыть" : "Меню"), 1)]), u(h, {
        speedometer: s.speedometer,
        isHelloween: s.isHelloween
    }, null, 8, ["speedometer", "isHelloween"])])])
}
const jd = {
        props: ["speedometer", "isHelloween"],
        components: {
            UIMobileButton: $,
            SpeedometerAppliances: Wd
        },
        data: () => ({
            isControlsShown: !1
        }),
        methods: {
            closeControls() {
                this.isControlsShown = !1
            },
            setCarParamEngine() {
                this.$emit("setCarParamEngine")
            },
            setCarParamKey() {
                this.$emit("setCarParamKey")
            },
            setCarParamLock() {
                this.$emit("setCarParamLock")
            },
            setCarParamRem() {
                this.$emit("setCarParamRem")
            },
            setCarParamLights() {
                this.$emit("setCarParamLights")
            }
        }
    },
    Jd = g(jd, [
        ["render", Xd]
    ]),
    Qd = {
        class: "hud hud-hassle"
    };

function e1(e, t, s, l, r, a) {
    const d = m("HudRadar"),
        h = m("HudControls"),
        _ = m("HudInfo"),
        y = m("HudMeta"),
        S = m("HudSpeedometer");
    return n(), o("div", Qd, [a.getConnectingStatus() ? (n(), w(d, {
        key: 0,
        ratioScale: s.ratioScale,
        radar: s.data.radar,
        isShowControllers: s.data.isShowControllers,
        isShowRadarButtons: s.data.isShowRadarButtons,
        isShowRadar: s.data.isShowRadar
    }, null, 8, ["ratioScale", "radar", "isShowControllers", "isShowRadarButtons", "isShowRadar"])) : c("", !0), a.getConnectingStatus() ? (n(), w(h, {
        key: 1,
        ref: "controls",
        isShowControllers: s.data.isShowControllers,
        useInvisibleJoystick: s.useInvisibleJoystick,
        data: s.data,
        isSquareMobile: s.isSquareMobile,
        onStartTouchPedalStop: a.startTouchPedalStop,
        onStopTouchPedalStop: a.stopTouchPedalStop,
        onStartTouchPedalGas: a.startTouchPedalGas,
        onStopTouchPedalGas: a.stopTouchPedalGas,
        onOnTrySeatCar: a.onTrySeatCar,
        onToggleAim: a.toggleAim
    }, null, 8, ["isShowControllers", "useInvisibleJoystick", "data", "isSquareMobile", "onStartTouchPedalStop", "onStopTouchPedalStop", "onStartTouchPedalGas", "onStopTouchPedalGas", "onOnTrySeatCar", "onToggleAim"])) : c("", !0), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.data.info.show ? (n(), w(_, {
            key: 0,
            info: s.data.info,
            server: s.data.server,
            bonus: s.data.bonus,
            isHelloween: s.data.isHelloween,
            isNewYear: s.data.isNewYear,
            isEaster: s.data.isEaster,
            style: f({
                transform: `scale(${s.ratioScale})`
            }),
            isSquareMobile: s.isSquareMobile
        }, null, 8, ["info", "server", "bonus", "isHelloween", "isNewYear", "isEaster", "style", "isSquareMobile"])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.data.meta.show ? (n(), w(y, {
            key: 0,
            ping: s.data.meta.ping,
            fps: s.data.meta.fps
        }, null, 8, ["ping", "fps"])) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "fade"
    }, {
        default: C(() => [s.data.speedometer.show && !a.isEditableMode ? (n(), w(S, {
            key: 0,
            ref: "speedometer",
            speedometer: s.data.speedometer,
            isHelloween: s.data.isHelloween,
            style: f({
                transform: `scale(${a.speedometerScale})`
            }),
            onSetCarParamEngine: a.setCarParamEngine,
            onSetCarParamKey: a.setCarParamKey,
            onSetCarParamLock: a.setCarParamLock,
            onSetCarParamRem: a.setCarParamRem,
            onSetCarParamLights: a.setCarParamLights
        }, null, 8, ["speedometer", "isHelloween", "style", "onSetCarParamEngine", "onSetCarParamKey", "onSetCarParamLock", "onSetCarParamRem", "onSetCarParamLights"])) : c("", !0)]),
        _: 1
    })])
}
const t1 = {
        props: {
            data: {
                type: Object,
                required: !0
            },
            scale: {
                type: Number,
                default: 1
            },
            ratioScale: {
                type: Number,
                default: 1
            },
            useInvisibleJoystick: {
                type: Boolean,
                default: !1
            },
            isSquareMobile: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            HudInfo: wl,
            HudMeta: Ol,
            HudRadar: Jl,
            HudControls: Ed,
            HudSpeedometer: Jd
        },
        computed: {
            speedometerScale() {
                return this.scale ? !this.scale || this.scale === 1 ? this.isSquareMobile ? 1.2 : .9 : this.scale : this.isSquareMobile ? 1.2 : .9
            },
            isEditableMode() {
                return this.$store.getters["settings/settings"].isControlsEditable
            }
        },
        methods: {
            getConnectingStatus() {
                return !window.getInterfaceStatus("Connect")
            },
            closeSpeedometer() {
                const e = this.$refs.speedometer;
                e.isControlsShown && e.closeControls()
            },
            toggleAim() {
                this.$emit("toggleAim")
            },
            startTouchPedalStop() {
                this.$emit("startTouchPedalStop"), this.closeSpeedometer()
            },
            stopTouchPedalStop() {
                this.$emit("stopTouchPedalStop")
            },
            startTouchPedalGas() {
                this.$emit("startTouchPedalGas"), this.closeSpeedometer()
            },
            stopTouchPedalGas() {
                this.$emit("stopTouchPedalGas")
            },
            setCarParamEngine() {
                this.$emit("setCarParamEngine")
            },
            setCarParamKey() {
                this.$emit("setCarParamKey")
            },
            setCarParamLock() {
                this.$emit("setCarParamLock")
            },
            setCarParamRem() {
                this.$emit("setCarParamRem")
            },
            setCarParamLights() {
                this.$emit("setCarParamLights")
            },
            onTrySeatCar(e) {
                this.$emit("onTrySeatCar", e)
            }
        }
    },
    s1 = g(t1, [
        ["render", e1],
        ["__scopeId", "data-v-13d519fa"]
    ]),
    a1 = {
        class: "sniper-aim"
    };

function i1(e, t) {
    return n(), o("div", a1)
}
const n1 = {},
    o1 = g(n1, [
        ["render", i1],
        ["__scopeId", "data-v-bc63a694"]
    ]);
const be = 1920,
    r1 = 2340,
    l1 = 1080,
    Se = 1.45,
    F = 250,
    d1 = 500,
    Ee = 5,
    Te = 13,
    h1 = 2,
    Me = 30,
    u1 = {
        name: "hud",
        components: {
            HudRadmir: Pr,
            HudHassle: s1,
            Chat: Bs,
            RadmirChat: la,
            HassleSniperAim: o1
        },
        data() {
            return {
                serversLogo: Object.assign({
                    "/src/assets/images/hud/servers/0.png": Ut,
                    "/src/assets/images/hud/servers/1.png": Vt,
                    "/src/assets/images/hud/servers/10.png": Wt,
                    "/src/assets/images/hud/servers/11.png": Gt,
                    "/src/assets/images/hud/servers/12.png": zt,
                    "/src/assets/images/hud/servers/13.png": qt,
                    "/src/assets/images/hud/servers/14.png": Xt,
                    "/src/assets/images/hud/servers/15.png": jt,
                    "/src/assets/images/hud/servers/16.png": Jt,
                    "/src/assets/images/hud/servers/17.png": Qt,
                    "/src/assets/images/hud/servers/2.png": es,
                    "/src/assets/images/hud/servers/3.png": ts,
                    "/src/assets/images/hud/servers/4.png": ss,
                    "/src/assets/images/hud/servers/5.png": as,
                    "/src/assets/images/hud/servers/6.png": is,
                    "/src/assets/images/hud/servers/7.png": ns,
                    "/src/assets/images/hud/servers/8.png": os,
                    "/src/assets/images/hud/servers/9.png": rs
                }),
                urlLogo: "",
                isShowLogo: !0,
                server: -1,
                bonus: 1,
                hudType: 0,
                ratioScale: 1,
                isHelloween: !1,
                isNewYear: !1,
                isEaster: !1,
                isVoiceAvailable: !0,
                isShowControllers: !1,
                isShowRadarButtons: !1,
                isShowRadar: !1,
                isEffectEnabled: !0,
                isHudControls: !1,
                isPlayerSwiming: !1,
                isPassenger: !1,
                hasNearestVehicle: !1,
                isAimMode: !1,
                useInvisibleJoystick: !1,
                isOpenedHelp: !1,
                isUseDrugs: !1,
                aim: {
                    show: !1,
                    isSniper: !1,
                    dispersion: 1,
                    duration: F,
                    dispersionTimout: null
                },
                useChat: !0,
                useChatAnimation: !0,
                chatStatus: !0,
                canChatFadeout: !0,
                playerList: {
                    show: !1,
                    playerid: 2,
                    players: [
                        [1, "Pavel_Addams", 47],
                        [2, "Pavel_Addams", 47],
                        [3, "Pavel_Addams", 47],
                        [4, "Pavel_Addams", 47],
                        [5, "Pavel_Addams", 47],
                        [6, "Pavel_Addams", 47],
                        [7, "Pavel_Addams", 47],
                        [8, "Pavel_Addams", 47],
                        [9, "Pavel_Addams", 47],
                        [10, "Pavel_Addams", 47]
                    ]
                },
                activeControl: {
                    pedal: {
                        stop: !1,
                        gas: !1
                    }
                },
                meta: {
                    show: !1,
                    ping: 0,
                    fps: 0
                },
                info: {
                    type: 0,
                    isShowValues: !0,
                    isShowFreeze: !1,
                    show: !1,
                    showBars: !0,
                    weapon: 0,
                    ammoInClip: 0,
                    totalAmmo: 0,
                    money: 0,
                    health: 50,
                    armour: 0,
                    hunger: 50,
                    breath: 100,
                    freeze: 0,
                    wanted: 0,
                    online: 1,
                    id: 0
                },
                speedometer: {
                    show: !1,
                    controls: {
                        state: 0,
                        timout: null
                    },
                    updateDelay: 100,
                    scale: 1,
                    speed: 0,
                    maxSpeed: 180,
                    speedBar: 1,
                    fuel: 25,
                    maxFuel: 100,
                    mileage: 3400,
                    measuring: 0,
                    measuringStartTime: 0,
                    isElectro: !1,
                    params: {
                        doors: !0,
                        temperature: !1,
                        lights: !1,
                        rem: !0,
                        engine: !0,
                        key: !0,
                        wear: 0,
                        damage: 0,
                        wash: .5,
                        turns: {
                            left: !1,
                            right: !1
                        }
                    },
                    tachometer: {
                        show: !1,
                        maxRpm: 8e3,
                        rpm: 1500,
                        gear: "D4",
                        gearsCount: 6
                    }
                },
                radar: {
                    show: !1,
                    greenZone: !1,
                    fishingZone: !1,
                    point: {
                        show: !1,
                        distance: 253
                    },
                    gps: {
                        show: !1,
                        distance: 1292
                    }
                },
                time: {
                    show: !1,
                    string: ""
                },
                buttons: {
                    show: !1,
                    open: !1,
                    keys: {
                        I: {
                            show: !0,
                            code: KEY_CODE_I
                        },
                        Y: {
                            show: !0
                        },
                        N: {
                            show: !0
                        },
                        H: {
                            show: !0,
                            code: KEY_CODE_H
                        },
                        G: {
                            show: !1
                        },
                        E: {
                            show: !1,
                            code: KEY_CODE_E
                        },
                        Q: {
                            show: !1,
                            code: KEY_CODE_Q
                        },
                        J: {
                            show: !0,
                            code: KEY_CODE_J
                        },
                        F: {
                            show: !0
                        },
                        Numpad4: {
                            show: !1
                        },
                        Numpad6: {
                            show: !1
                        },
                        Alt: {
                            show: !0
                        },
                        2: {
                            show: !0
                        }
                    }
                },
                voiceChat: {
                    show: !1,
                    showButtons: !0,
                    entries: []
                }
            }
        },
        watch: {
            "info.weapon": function () {
                this.isAimMode = !1, window.setAimMode(!1)
            }
        },
        computed: {
            settings() {
                return this.$store.getters["settings/settings"]
            },
            isMobile() {
                return this.$root.isMobile
            },
            deviceModel() {
                return this.$root.deviceModel
            },
            isSpecialDevice() {
                return this.$root.isSpecialDevice()
            },
            windowHeight() {
                return window.screen.height
            },
            scale() {
                return this.engine !== "legacy" ? this.getScale(r1) : window.screen.width / window.screen.height <= Se ? this.getScale() : 1
            },
            engine() {
                return this.$root.engine
            },
            developmentMode() {
                return this.$root.developmentMode
            },
            useCameraWeapon() {
                return this.info.weapon == 43
            },
            isVoiceActive() {
                return this.$store.getters["voiceChat/isActive"]
            },
            voiceKeyCode() {
                return this.$store.getters["voiceChat/keyCode"]
            },
            isSquareMobile() {
                return this.$root.isSquareMobile
            },
            chatPageSize() {
                return this.$root.chatPageSize
            },
            maxVoiceChatEntries() {
                if (this.chatPageSize <= Te) return Ee;
                const e = Math.floor((this.chatPageSize - Te) / h1);
                return Ee - e
            }
        },
        methods: {
            setInvisibleJoystickState(e) {
                this.useInvisibleJoystick = e
            },
            updateRatioScale() {
                const e = window.innerWidth,
                    t = window.innerHeight,
                    s = 1.75;
                let r = e / t / s;
                r > 1 && (r = 1), this.ratioScale = r
            },
            setChatAnimationState(e) {
                this.useChatAnimation = e
            },
            getSVGArc([e, t], [s, l], [r, a], d) {
                const h = ([
                        [L, V],
                        [W, G]
                    ], [oe, re]) => [L * oe + V * re, W * oe + G * re],
                    _ = L => [
                        [Math.cos(L), -Math.sin(L)],
                        [Math.sin(L), Math.cos(L)]
                    ],
                    y = ([L, V], [W, G]) => [L + W, V + G];
                a = a % (2 * Math.PI);
                const S = _(d),
                    [b, O] = y(h(S, [s * Math.cos(r), l * Math.sin(r)]), [e, t]),
                    [Z, U] = y(h(S, [s * Math.cos(r + a), l * Math.sin(r + a)]), [e, t]),
                    ze = a > Math.PI ? 1 : 0,
                    qe = a > 0 ? 1 : 0;
                return "M " + b + " " + O + " A " + [s, l, d / (2 * Math.PI) * 360, ze, qe, Z, U].join(" ")
            },
            setEffectEnabled(e) {
                this.isEffectEnabled = e
            },
            setShowControls(e) {
                this.isHudControls = e
            },
            setEffectUseDrugs(e, t) {
                this.isUseDrugs = e, t > 0 && setTimeout(() => {
                    this.isUseDrugs = !1
                }, t)
            },
            getGearNumber(e) {
                return e[0] === "N" ? 0 : Number.parseInt(e.split(/[^0-9]/g).join(""))
            },
            getGearType(e) {
                return e[0] === "N" ? "D" : e.split(/[^A-Za-z]/g).join("")
            },
            getScale(e = be) {
                const t = window.screen.width,
                    s = window.screen.height,
                    l = window.screen.width / window.screen.height;
                return e === be ? l / Se : (t + s) / (e + l1)
            },
            showLogo() {
                this.isShowLogo = !0
            },
            hideLogo() {
                this.isShowLogo = !1
            },
            startTouchTurn(e) {},
            stopTouchTurn(e) {},
            setInfoValuesVisible(e) {
                this.info.isShowValues = e, this.voiceChat.showButtons = e
            },
            setCanChatFadeout(e) {
                this.canChatFadeout = e
            },
            setNewYear(e) {
                this.isNewYear = !!e
            },
            setHelloween(e) {
                this.isHelloween = !!e
            },
            setEaster(e) {
                this.isEaster = !!e
            },
            setLogoUrl(e) {
                this.urlLogo = e
            },
            setServer(e) {
                this.server = e
            },
            setBonus(e) {
                this.bonus = e
            },
            setVoiceAvailable(e) {
                this.isVoiceAvailable = e
            },
            onTrySeatCar(e) {
                let t = "<Keyboard>/f";
                e >= 1500 && (t = "<Keyboard>/g"), window.onScreenControlTouchStart(t), setTimeout(() => window.onScreenControlTouchEnd(t), 250)
            },
            setAim(e, t = !1) {
                this.useCameraWeapon ? e ? window.openInterface("Camera") : window.closeInterface("Camera") : this.aim = {
                    show: e,
                    isSniper: t,
                    dispersion: 1,
                    duration: F
                }
            },
            setAimDispersion(e) {
                this.aim.duration = F, this.aim.dispersion = e, clearTimeout(this.aim.dispersionTimout), this.aim.dispersionTimout = setTimeout(() => {
                    this.aim.duration = d1 * e, this.aim.dispersion = 1
                }, F)
            },
            setHudType(e) {
                this.hudType = e
            },
            getPlayer() {
                return this.playerList.players.filter(e => e[0] == this.playerList.playerid)[0] || null
            },
            setType(e) {
                this.info.type = e
            },
            hideInfo() {
                this.voiceChat.show = !1, this.radar.show = !1, this.info.show = !1
            },
            hideRadar() {
                this.radar.show = !1
            },
            hideInfoBars() {
                this.info.showBars = !1
            },
            hideVoiceChat() {
                this.voiceChat.show = !1
            },
            openInfo() {
                this.voiceChat.show = !0, this.radar.show = !0, this.info.show = !0
            },
            showSpeedometerControls() {
                clearTimeout(this.speedometer.controls.timeout), this.speedometer.controls.state = 1, this.speedometer.controls.timeout = setTimeout(() => {
                    this.speedometer.controls.state = 2, this.speedometer.controls.timeout = setTimeout(() => {
                        this.speedometer.controls.state = 3, this.speedometer.controls.timeout = setTimeout(() => this.speedometer.controls.state = 4, 5e3)
                    }, 500)
                }, 250)
            },
            hideSpeedometerControls() {
                clearTimeout(this.speedometer.controls.timeout), this.speedometer.controls.state = 2, this.speedometer.controls.timeout = setTimeout(() => {
                    this.speedometer.controls.state = 1, this.speedometer.controls.timeout = setTimeout(() => {
                        this.speedometer.controls.state = 0
                    }, 250)
                }, 500)
            },
            setCarParamEngine() {
                window.sendClientKeyEvent("Action")
            },
            setCarParamKey() {
                window.sendClientKeyEvent("AnalogUp"), window.sendClientKeyEvent("AnalogLeft"), sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "Speed_OnPlayerToggleKey")
            },
            setCarParamLock() {
                sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "OnPlayerLockVehicle")
            },
            setCarParamRem() {
                sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "OnPlayerClientSideKey", window.KEY_CODE_SHIFT)
            },
            setCarParamLights() {
                window.sendClientKeyEvent("Fire")
            },
            showControllers() {
                this.isShowControllers = !0
            },
            hideControllers() {
                this.isShowControllers = !1
            },
            showTime() {
                this.time.show = !0
            },
            hideTime() {
                this.time.show = !1
            },
            updateTime(e) {
                this.time.string = e
            },
            updateHungerLevel(e) {
                this.info.hunger = e
            },
            updateFreeze(e) {
                this.info.freeze = e
            },
            showFreeze() {
                this.info.isShowFreeze = !0
            },
            hideFreeze() {
                this.info.isShowFreeze = !1
            },
            showPersonalTag(e) {
                this.radar.point.show = !0, this.radar.point.distance = e
            },
            hidePersonalTag() {
                this.point.show = !1
            },
            hideGreenZoneTab() {
                this.radar.greenZone = !1
            },
            showGreenZoneTab() {
                this.radar.greenZone = !0
            },
            showFishingZone() {
                this.radar.fishingZone = !0
            },
            hideFishingZone() {
                this.radar.fishingZone = !1
            },
            showGPS(e) {
                this.radar.gps.show = !0, this.radar.gps.distance = e
            },
            hideGPS() {
                this.radar.gps.show = !1
            },
            setMaxSpeed(e) {
                this.speedometer.maxSpeed = e
            },
            setSpeed(e) {
                this.speedometer.speed = this.speedometer.measuring > 0 ? Math.ceil(parseInt(e) * 1.33) : parseInt(e), this.speedometer.speedBar = e / this.speedometer.maxSpeed, this.speedometer.measuring > 0 && (this.speedometer.speed == 0 ? this.speedometer.measuringStartTime = new Date : this.speedometer.measuring <= this.speedometer.speed && this.speedometer.measuringStartTime > 0 && (sendClientEvent(gm.EVENT_EXECUTE_PUBLIC, "OnPlayerSpeedometrMeasuring", new Date - this.speedometer.measuringStartTime), this.speedometer.measuringStartTime = 0))
            },
            showTachometer() {
                this.speedometer.tachometer.show = !0
            },
            hideTachometer() {
                this.speedometer.tachometer.show = !1
            },
            setTachometerData(e, t, s, l) {
                this.speedometer.tachometer = {
                    ...this.speedometer.tachometer,
                    rpm: e,
                    maxRpm: t,
                    gear: s,
                    gearsCount: l
                }
            },
            setMeasuring(e) {
                this.speedometer.measuring = e
            },
            setMileage(e) {
                e = parseInt(e);
                let s = e.toString().length,
                    l = "";
                for (let r = 0; r < 6 - s; ++r) l += "0";
                l += e.toString(), this.speedometer.mileage = l
            },
            showSpeedometer(e, t, s) {
                this.speedometer.params.damage = 0, this.speedometer.params.wash = 0, this.speedometer.maxSpeed = t, this.speedometer.isElectro = s, this.updateSpeedometer(e), this.speedometer.show = !0
            },
            updateSpeedometer(e) {
                this.speedometer.params.lights = e[0], this.speedometer.params.temperature = e[1], this.speedometer.params.rem = e[2], this.speedometer.params.doors = e[3], this.setMileage(e[4]), this.speedometer.fuel = Math.floor(e[5]), this.speedometer.maxFuel = e[6], this.speedometer.params.key = e[7], e.length > 8 && (this.speedometer.params.damage = e[8] / 100, this.speedometer.params.wash = e[9] / 100)
            },
            setTurnLightStatus(e, t) {
                let s = e ? "right" : "left",
                    l = e ? "left" : "right",
                    r = !1;
                this.speedometer.params.turns[l] && t && (this.speedometer.params.turns[l] = !1, r = !0), setTimeout(() => {
                    this.speedometer.params.turns[s] = t, r && (this.speedometer.params.turns[l] = !0)
                }, r ? 100 : 0)
            },
            hideSpeedometer() {
                const e = this.speedometer.controls.state;
                e && this.hideSpeedometerControls(), setTimeout(() => {
                    this.speedometer.show = !1, this.speedometer.params.turns.left = !1, this.speedometer.params.turns.right = !1
                }, e ? 750 : 0)
            },
            buttonAction(e) {
                let t = this.buttons.keys[e].code;
                t && sendKeyEvent(t), window.sendClientKeyEvent(e)
            },
            setButtonDisplay(e, t) {
                this.buttons.keys[e].show = t
            },
            setKeyButtonsDisplay(e) {
                this.buttons.show = e
            },
            changeVoiceState(e, t) {
                this.$store.commit("voiceChat/setVoiceChat", {
                    isActive: t,
                    keyCode: e
                })
            },
            startVoiceChatRecord() {
                this.isVoiceActive = !0, sendClientEvent(gm.SET_VOICE_CHAT_STATUS, !0)
            },
            stopVoiceChatRecord() {
                this.isVoiceActive = !1, sendClientEvent(gm.SET_VOICE_CHAT_STATUS, !1)
            },
            toggleAim() {
                this.isAimMode = !this.isAimMode, window.setAimMode(this.isAimMode)
            },
            startTouchPedalStop() {
                this.activeControl.pedal.stop = !0
            },
            stopTouchPedalStop() {
                this.activeControl.pedal.stop = !1
            },
            startTouchPedalGas() {
                this.activeControl.pedal.gas = !0, this.speedometer.controls.state && this.hideSpeedometerControls()
            },
            stopTouchPedalGas() {
                this.activeControl.pedal.gas = !1
            },
            setTime(e) {
                this.time.current = e
            },
            toggleTurn(e) {
                this.setTurnLightStatus(e, !this.speedometer.params.turns[e ? "right" : "left"]), e ? this.buttonAction("Numpad6") : this.buttonAction("Numpad4")
            },
            setChatStatus(e) {
                this.useChat && (this.chatStatus = e)
            },
            formatMileage(e) {
                e = e.toString();
                let s = "";
                if (e.length < 6) {
                    for (let l = 0; l < 6 - e.length; ++l) s += "0";
                    return s + e
                }
                return e
            },
            formatSpeedmetrNumber(e, t) {
                const s = this.speedometer.numbers,
                    l = this.speedometer.speed;
                let r = 0;
                for (const d of s) l >= d && (r = d);
                return l >= e ? "white" : `rgba(255, 255, 255, ${1-.15*(t-s.indexOf(r))})`
            },
            formatSpeed() {
                return this.speedometer.speedBar < 1 ? this.speedometer.speedBar : 1
            },
            calculateHealthPoints() {
                const l = 328 * (1 - this.info.health / 100) + 23,
                    r = 322 * (1 - this.info.health / 100) + 23,
                    a = 325 * (1 - this.info.health / 100) + 6;
                return `${a>325?325:a},16 ${l>328?328:l},5 328,5 322,28 ${r>322?322:r},28`
            },
            calculateHungerPoints() {
                const t = 296 * (1 - this.info.hunger / 100) + 13,
                    s = 296 * (1 - this.info.hunger / 100) + 23;
                return `${t>296?296:t},5 296,5 296,13 ${s>296?296:s},13`
            },
            calculateArmourPoints() {
                const s = 315 * (1 - this.info.armour / 100) + 23,
                    l = 310 * (1 - this.info.armour / 100) + 13;
                return `${s>315?315:s},5, 315,5 310,13, ${l>310?310:l},13`
            },
            addVoiceChatEntry(e) {
                if (this.voiceChat.entries.length >= this.maxVoiceChatEntries) return;
                const t = typeof e == "string" ? JSON.parse(e) : e,
                    s = {
                        type: t[0],
                        name: t[1],
                        id: t[2],
                        isPlaySound: t[3],
                        channel: t[4],
                        streamId: t[5]
                    };
                s.isPlaySound && window.playSound(`voice_chat/${s.type}_start.mp3`, !1, Me), this.voiceChat.entries.push(s)
            },
            removeVoiceChatEntry(e) {
                const t = this.voiceChat.entries.find(s => s.isPlaySound && e.some(l => l[0] === s.id && l[1] === s.streamId));
                t && window.playSound(`voice_chat/${t.type}_end.mp3`, !1, Me), this.voiceChat.entries = this.voiceChat.entries.filter(s => !e.some(l => l[0] === s.id && l[1] === s.streamId))
            },
            showVoiceChatButton(e) {
                e === H.MIC && this.$store.commit("voiceChat/setChatButtonStatus", !0), e === H.PHONE && this.$store.commit("voiceChat/setRadioButtonStatus", !0)
            },
            hideVoiceChatButton(e) {
                e === H.MIC && this.$store.commit("voiceChat/setChatButtonStatus", !1), e === H.PHONE && this.$store.commit("voiceChat/setRadioButtonStatus", !1)
            },
            setVoiceChatMuted(e) {
                this.$store.commit("voiceChat/setVoiceChatMuted", e)
            }
        },
        mounted() {
            this.updateRatioScale()
        },
        created() {
            let e = null,
                t = 0,
                s = 0;
            window.addEventListener("touchstart", d => {
                for (let h of d.touches)
                    if ((h.target.nativeElement || h.target).matches(".hud-iface")) {
                        e = h.identifier, t = h.clientX, s = h.clientY, window.onScreenControlTouchStart("<Mouse>/delta");
                        break
                    }
            }), window.addEventListener("touchmove", d => {
                if (e != null)
                    for (let h of d.touches) {
                        if (h.identifier != e) continue;
                        let _ = (window.App.deviceScreen.width + window.App.deviceScreen.height) / (window.screen.width + window.screen.height),
                            y = (h.clientX - t) * _,
                            S = (h.clientY - s) * _;
                        t = h.clientX, s = h.clientY, window.onScreenControlTouchMove("<Mouse>/delta", y, -S);
                        break
                    }
            }), window.addEventListener("touchend", d => {
                if (e != null) {
                    for (let h of d.touches)
                        if (h.identifier == e) {
                            e = null, window.onScreenControlTouchEnd("<Mouse>/delta");
                            break
                        }
                }
            });
            let l = {};
            const r = d => {
                    (d.target.nativeElement || d.target).matches(".hud-iface") && (l = {
                        screenX: d.screenX,
                        screenY: d.screenY,
                        time: Date.now()
                    })
                },
                a = d => {
                    if (!l.time) return;
                    if (Date.now() - l.time > 200) {
                        l = {};
                        return
                    }
                    Math.hypot(l.screenX - d.screenX, l.screenY - d.screenY) > 20 || onScreenTap({
                        x: l.screenX / window.innerWidth,
                        y: 1 - l.screenY / window.innerHeight
                    })
                };
            window.addEventListener("mousedown", d => {
                d.button === 0 && r({
                    target: d.target,
                    screenX: d.screenX,
                    screenY: d.screenY
                })
            }), window.addEventListener("mouseup", d => {
                d.button === 0 && a({
                    screenX: d.screenX,
                    screenY: d.screenY
                })
            }), window.addEventListener("touchstart", d => {
                if (d.touches.length !== 1) return;
                const h = d.touches[0];
                r({
                    target: d.target,
                    screenX: h.screenX,
                    screenY: h.screenY
                })
            }), window.addEventListener("touchend", d => {
                if (d.touches.length !== 1) return;
                const h = d.touches[0];
                a({
                    screenX: h.screenX,
                    screenY: h.screenY
                })
            }), window.addEventListener("keydown", ({
                keyCode: d
            }) => {
                this.engine === "legacy" && this.chatStatus && d === window.KEY_CODE_F5 && this.setChatStatus(!1)
            }), window.addEventListener("keyup", ({
                keyCode: d
            }) => {
                this.engine === "legacy" && !this.chatStatus && d === window.KEY_CODE_F5 && this.setChatStatus(!0)
            })
        }
    },
    c1 = {
        class: "hud-iface"
    },
    _1 = {
        key: 0,
        class: "hud-aim__sniper"
    },
    m1 = {
        key: 0,
        class: "hud-aim"
    };

function f1(e, t, s, l, r, a) {
    const d = m("HassleSniperAim"),
        h = m("HudRadmir"),
        _ = m("HudHassle"),
        y = m("RadmirChat"),
        S = m("chat");
    return n(), o("div", c1, [u(T, {
        name: "aim"
    }, {
        default: C(() => [r.aim.show && r.aim.isSniper && a.engine === "legacy" ? (n(), o("div", _1)) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "aim"
    }, {
        default: C(() => [r.aim.show && r.aim.isSniper && a.engine !== "legacy" ? (n(), w(d, {
            key: 0
        })) : c("", !0)]),
        _: 1
    }), u(T, {
        name: "aim"
    }, {
        default: C(() => [r.aim.show && !r.aim.isSniper ? (n(), o("div", m1, [i("div", {
            class: "hud-aim__container",
            style: f({
                transitionDuration: `${r.aim.duration}ms`,
                width: `${48*r.aim.dispersion}px`,
                height: `${48*r.aim.dispersion}px`
            })
        }, [(n(), o(E, null, M(4, (b, O) => i("div", {
            class: "hud-aim__arrow",
            key: O
        })), 64))], 4)])) : c("", !0)]),
        _: 1
    }), a.engine == "legacy" ? (n(), w(h, {
        key: 0,
        data: e.$data,
        scale: a.scale,
        ref: "radmir"
    }, null, 8, ["data", "scale"])) : (n(), w(_, {
        key: 1,
        data: e.$data,
        scale: a.scale,
        ratioScale: r.ratioScale,
        useInvisibleJoystick: r.useInvisibleJoystick,
        isSquareMobile: a.isSquareMobile,
        ref: "hassle",
        onStartTouchPedalStop: a.startTouchPedalStop,
        onStopTouchPedalStop: a.stopTouchPedalStop,
        onStartTouchPedalGas: a.startTouchPedalGas,
        onStopTouchPedalGas: a.stopTouchPedalGas,
        onSetCarParamEngine: a.setCarParamEngine,
        onSetCarParamKey: a.setCarParamKey,
        onSetCarParamLock: a.setCarParamLock,
        onSetCarParamRem: a.setCarParamRem,
        onSetCarParamLights: a.setCarParamLights,
        onOnTrySeatCar: a.onTrySeatCar,
        onToggleAim: a.toggleAim
    }, null, 8, ["data", "scale", "ratioScale", "useInvisibleJoystick", "isSquareMobile", "onStartTouchPedalStop", "onStopTouchPedalStop", "onStartTouchPedalGas", "onStopTouchPedalGas", "onSetCarParamEngine", "onSetCarParamKey", "onSetCarParamLock", "onSetCarParamRem", "onSetCarParamLights", "onOnTrySeatCar", "onToggleAim"])), a.engine === "legacy" ? (n(), o(E, {
        key: 2
    }, [r.useChat ? (n(), w(y, {
        key: 0,
        ref: "chat",
        isHudControls: r.isHudControls,
        chatStatus: r.chatStatus,
        canChatFadeout: r.canChatFadeout,
        useChatAnimation: r.useChatAnimation,
        "onHelp:open": t[0] || (t[0] = b => r.isOpenedHelp = !r.isOpenedHelp),
        onOpenChat: t[1] || (t[1] = b => a.changeVoiceState(a.voiceKeyCode, !1))
    }, null, 8, ["isHudControls", "chatStatus", "canChatFadeout", "useChatAnimation"])) : c("", !0)], 64)) : (n(), o(E, {
        key: 3
    }, [r.useChat ? (n(), w(S, {
        key: 0,
        class: v({
            "hassle-chat_hidden": !r.chatStatus
        }),
        ref: "chat",
        chatStatus: r.chatStatus,
        ratioScale: r.ratioScale
    }, null, 8, ["class", "chatStatus", "ratioScale"])) : c("", !0)], 64))])
}
const D1 = g(u1, [
    ["render", f1],
    ["__scopeId", "data-v-4ca67ef9"]
]);
export {
    D1 as
    default
};