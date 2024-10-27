import QtWebSockets 1.6
import QtQuick.Window 2.13
import QtQuick.Layouts 1.2
import QtQuick 2.15
import QtQuick.Controls 1.2

Window {
	visible: true
	width: 500
	height: 500
	title: "Hello World App"

	ColumnLayout {

		Text {
			id: __g_6a328afea7394d1ea11543bbb55fc2eb
			text: "Hello, World!"
			font.hintingPreference: Font.PreferFullHinting
		}

		Button {
			onClicked: () => gravityFunctionHandler("z1x6ww")
			text: "Click me!"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:23647"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "23647", key: "4a6e05a93db34b19ab9f192aaa36497a98c016d24bf147a492403d5e9216a1ee" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return eval(id); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") { let prop = getElementById(data.elid); if (data.prop.includes(".")) { const props = data.prop.split("."); for (let i = 0;i < props.length - 1; i++) prop = prop[props[i]]; prop[props[props.length - 1]] = data.value; } else prop[data.prop] = data.value; } if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); }
}