(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(t,e,a){"use strict";a.r(e);var r=a(10),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("code",[t._v("rabbit-digger")]),t._v(" is a proxy software written in "),a("a",{attrs:{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("It is still in the rapid development stage. The documentation may not be consistent with actual usage, so please "),a("a",{attrs:{href:"https://github.com/rabbit-digger/rabbit-digger.github.io/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("submit an issue"),a("OutboundLink")],1),t._v(" if you find any inconsistencies.")]),t._v(" "),a("h3",{attrs:{id:"supported-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-protocol"}},[t._v("#")]),t._v(" Supported Protocol")]),t._v(" "),a("ul",[a("li",[t._v("Shadowsocks")]),t._v(" "),a("li",[t._v("Trojan")]),t._v(" "),a("li",[t._v("HTTP")]),t._v(" "),a("li",[t._v("Socks5")]),t._v(" "),a("li",[t._v("obfs(http_simple)")])]),t._v(" "),a("h3",{attrs:{id:"supported-server-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-server-protocol"}},[t._v("#")]),t._v(" Supported Server Protocol")]),t._v(" "),a("ul",[a("li",[t._v("Socks5")]),t._v(" "),a("li",[t._v("HTTP")]),t._v(" "),a("li",[t._v("http+socks on the same port")]),t._v(" "),a("li",[t._v("Shadowsocks")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Go to the "),a("a",{attrs:{href:"https://github.com/rabbit-digger/rabbit-digger-pro/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Release page"),a("OutboundLink")],1),t._v(" to download the binary file.")]),t._v(" "),a("h2",{attrs:{id:"common-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-usage"}},[t._v("#")]),t._v(" Common Usage")]),t._v(" "),a("h3",{attrs:{id:"normal-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-mode"}},[t._v("#")]),t._v(" Normal mode")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rabbit-digger-pro -c config.example.yaml\n")])])]),a("h3",{attrs:{id:"normal-mode-control-port-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-mode-control-port-access-token"}},[t._v("#")]),t._v(" Normal mode + Control port + Access Token")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rabbit-digger-pro -c config.example.yaml -b 127.0.0.1:8030 --access-token token\n")])])]),a("h3",{attrs:{id:"control-mode-without-any-config-at-launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-mode-without-any-config-at-launch"}},[t._v("#")]),t._v(" Control mode, without any config at launch")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rabbit-digger-pro server -b 127.0.0.1:8030 --access-token token\n")])])]),a("h2",{attrs:{id:"command-line-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-parameters"}},[t._v("#")]),t._v(" Command line parameters")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rabbit-digger-pro 0.1.0\n\nUSAGE:\n    rabbit-digger-pro [OPTIONS] [SUBCOMMAND]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --access-token <access-token>    Access token [env: RD_ACCESS_TOKEN=]\n    -b, --bind <bind>                    HTTP endpoint bind address [env: RD_BIND=]\n    -c, --config <config>                Path to config file [env: RD_CONFIG=]  [default: config.yaml]\n        --userdata <userdata>            Userdata [env: RD_USERDATA=]\n        --web-ui <web-ui>                Web UI. Folder path [env: RD_WEB_UI=]\n        --write-config <write-config>    Write generated config to path\n\nSUBCOMMANDS:\n    generate-schema    Generate schema to path, if not present, output to stdout\n    help               Prints this message or the help of the given subcommand(s)\n    server             Run in server mode\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);