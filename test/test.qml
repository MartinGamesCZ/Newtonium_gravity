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
			onClicked: () => gravityFunctionHandler("jef1op")
			id: _f9dffb1dcbad42c1be08a72cc5ff49f4
			text: "Click me!"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:11873"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "11873", key: "1f82408cb03d4ae6ba5e4bd8687a2344daaede0b03414f15812cebb071eb4300" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return eval(id); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") getElementById(data.elid)[data.prop] = data.value; }
}