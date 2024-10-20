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
			text: "test"
			font.hintingPreference: Font.PreferFullHinting
			color: "#31aa13"
			font.pointSize: 24
			font.weight: Font.Light
			font.family: "Ubuntu"
			font.strikeout: true
			padding: 50
			leftPadding: 10
		}

		Text {
			text: "test"
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
			onClicked: () => gravityFunctionHandler("xftkn")
			text: "Click me!"
		}
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "46602", key: "7821b1cf487f40188a9e6ef95397a171213219bc0e444445a8f354b68cd178e3" }; }
	function callSymbol(symbol) { const creds = getCreds(), xhr = new XMLHttpRequest; xhr.open("GET", `http://localhost:${creds.port}/&/${symbol}`, !0); xhr.setRequestHeader("Authorization", creds.key); xhr.send(); }
}