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
	id: __g_9995343ea78d4a2aa0b631462f5f4fe7

	Dialog {
		visible: false
		id: __g_246e3db7941a4bfeba6c8d6f7e25d59d
		title: "Test"

		Text {
			id: __g_fe657de1246c412ebce8b1176ee28f1c
			text: "Hello"
			font.hintingPreference: Font.PreferFullHinting
		}
	}

	ColumnLayout {

		Text {
			id: __g_dffa993fefff424494aef8683695c5b8
			text: "Test"
			font.hintingPreference: Font.PreferFullHinting
		}

		Button {
			onClicked: () => gravityFunctionHandler("dzils")
			id: __g_c97e9b074d8f42a5910b423f6948ac15
			text: "click"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:24849"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "24849", key: "fe08528c9d424f56b9fbc29929e5cbe57533f22567c340b7a1333fe22f560877" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return existsElementById(id) ? eval(id) : null; }
	function existsElementById(id) { return eval("typeof " + id + " !== 'undefined'"); }
	function callProperty(id, property, args) { console.log("CALL", id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); eval(id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") { let prop = getElementById(data.elid); if (data.prop.includes(".")) { const props = data.prop.split("."); for (let i = 0;i < props.length - 1; i++) prop = prop[props[i]]; prop[props[props.length - 1]] = data.value; } else prop[data.prop] = data.value; } if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); if (data.type == "call_property") callProperty(data.elid, data.prop, data.args); }
}