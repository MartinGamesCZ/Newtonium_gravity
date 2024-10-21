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
			text: "Hello"
			font.hintingPreference: Font.PreferFullHinting
			color: "#31aa13"
			font.pointSize: 24
			font.weight: Font.Light
			font.family: "Ubuntu"
			font.strikeout: true
			padding: 50
			leftPadding: 10
		}

		Button {
			onClicked: () => gravityFunctionHandler("6de58i")
			id: _faa1b73b47f04471aa75b2b1effb94f2
			text: "Click me!"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:12149"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "12149", key: "172a0d13aec44ee181b07e034c0a2d2bf5b347dc65f34a73949efd677451c0f0" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return eval(id); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") getElementById(data.elid)[data.prop] = data.value; if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); }
}