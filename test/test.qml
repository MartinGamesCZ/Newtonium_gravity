import QtWebSockets 1.6
import QtQuick.Window 2.13
import QtQuick 2.3
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.2
import QtQuick.Controls 1.2

Window {
	visible: true
	width: 700
	height: 500
	title: "Hello World App"
	id: __g_99546cf487e5400fbabbc84b9b160807

	Dialog {
		visible: false
		title: "Hello World App"

		Text {
			id: __g_287d395bf34f4e3c8832b33e5adb8045
			text: "Holla"
			font.hintingPreference: Font.PreferFullHinting
		}
	}

	ColumnLayout {

		Text {
			id: __g_040ae07821dd4521b40d88e59e3d546b
			text: "Test"
			font.hintingPreference: Font.PreferFullHinting
		}

		Button {
			onClicked: () => gravityFunctionHandler("hl4ek")
			id: __g_8b33b0f33e8043b69a40896c35118e40
			text: "click"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:39647"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "39647", key: "d2705e9a538f46388cd34410acabdd45a4efd99959d140ee8417f11cf5163d11" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return eval(id); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") { let prop = getElementById(data.elid); if (data.prop.includes(".")) { const props = data.prop.split("."); for (let i = 0;i < props.length - 1; i++) prop = prop[props[i]]; prop[props[props.length - 1]] = data.value; } else prop[data.prop] = data.value; } if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); }
}