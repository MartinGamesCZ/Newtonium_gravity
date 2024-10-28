import QtWebSockets 1.6
import QtQuick.Window 2.13
import QtQuick.Layouts 1.2
import QtQuick 2.15
import QtQuick.Controls 1.2

Window {
	visible: true
	width: 700
	height: 500
	title: "Hello World App"
	id: __g_ed023a136cf84c7c85094d985e05a76f
	objectName: "__g_ed023a136cf84c7c85094d985e05a76f"

	ColumnLayout {
		id: __g_69564b58_7573_49aa_8154_e353f763b54c
		objectName: "__g_69564b58_7573_49aa_8154_e353f763b54c"

		Text {
			id: __g_dc7a4bc6c5194e519a261eebd9cca86e
			objectName: "__g_dc7a4bc6c5194e519a261eebd9cca86e"
			text: "Test"
			font.hintingPreference: Font.PreferFullHinting
		}

		Button {
			onClicked: () => gravityFunctionHandler("lffhi")
			id: __g_a7d545628b1f4521b489d251cb2d26f6
			text: "click"
			objectName: "__g_a7d545628b1f4521b489d251cb2d26f6"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:42466"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "42466", key: "20f0176ac20b4c059c0dcc62e7ab23b7d69cd11b3da84195be7f093bdbf1c56e" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return existsElementById(id) ? eval(id) : eval("null"); }
	function existsElementById(id) { return eval("typeof " + id + " !== 'undefined'"); }
	function callProperty(id, property, args) { console.log("CALL", id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); eval(id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); }
	function createElementAtIndex(str, parent, index) { eval(` const e = Qt.createQmlObject(\`${str}\`, ${parent}); const index = ${index}; const parent = ${parent}; if (index < 0) { index = 0; } parent.children.push(e); const newArray = []; const lastElement = parent.children[parent.children.length - 1]; for (let i = 0; i < index; i++) { newArray.push(parent.children[i]); } newArray.push(lastElement); for (let i = index; i < parent.children.length - 1; i++) { newArray.push(parent.children[i]); } parent.children = newArray;`); }
	function getIndexById(id, parentId) { return eval(`(() => { for (var i = 0; i < ${parentId}.children.length; i++) { if (${parentId}.children[i] === ${id}) return i; } return -1; })() `); }
	function destroyElementFromParent(id, parentId) { eval(` const parent = ${parentId}; for (let i = 0; i < parent.children.length; i++) { if (parent.children[i].objectName === "${id}") parent.children[i].destroy(); }`); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") { let prop = getElementById(data.elid); if (data.prop.includes(".")) { const props = data.prop.split("."); for (let i = 0;i < props.length - 1; i++) prop = prop[props[i]]; prop[props[props.length - 1]] = data.value; } else prop[data.prop] = data.value; } if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); if (data.type == "call_property") callProperty(data.elid, data.prop, data.args); if (data.type == "create_element") createElementAtIndex(data.str, data.parentId, data.index); if (data.type == "insert_before") createElementAtIndex(data.str, data.parentId, getIndexById(data.beforeId, data.parentId)); if (data.type == "destroy_element") destroyElementFromParent(data.elid, data.ptid); }
}