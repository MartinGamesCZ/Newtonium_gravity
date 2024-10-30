import QtWebSockets 1.6
import QtQuick.Window 2.13
import QtQuick.Layouts 1.2
import QtQuick.Controls 1.4

Window {
	visible: true
	width: 700
	height: 500
	title: "Hello World App"
	id: __g_e7a628e850c048bbbd357f73aa315d48
	objectName: "__g_e7a628e850c048bbbd357f73aa315d48"

	ColumnLayout {
		id: __g_3b1e42b8_cd35_41c4_869a_7d68cc21beda
		objectName: "__g_3b1e42b8_cd35_41c4_869a_7d68cc21beda"

		TextField {
			id: __g_057cd7c78ef9468dadde2d07237ef39c
			text: ""
			onTextChanged: () => gravityFunctionHandler("8n9zye")
			placeholderText: Text
			objectName: "__g_057cd7c78ef9468dadde2d07237ef39c"
		}

		Button {
			onClicked: () => gravityFunctionHandler("i2me3h")
			id: __g_438786d727524ac6b908dc7e7d4b98d3
			text: "Reverse"
			objectName: "__g_438786d727524ac6b908dc7e7d4b98d3"
		}
	}

	WebSocket {
		id: ipc
		url: "ws://localhost:34750"

		onTextMessageReceived: {
			  gotIpcMessage(message)
		}

		onStatusChanged: () => {}
		active: true
	}

	function gravityFunctionHandler(symbol) { callSymbol(symbol); }
	function getCreds() { return { port: "34750", key: "da40f229086f4be2a7535d4e911d56e2d89a7ce789f2440ba6a0365114b7aa4e" }; }
	function callSymbol(symbol) { ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key })); }
	function getElementById(id) { return existsElementById(id) ? eval(id) : eval("null"); }
	function existsElementById(id) { return eval("typeof " + id + " !== 'undefined'"); }
	function callProperty(id, property, args) { console.log("CALL", id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); eval(id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"); }
	function createElementAtIndex(str, parent, index) { eval(` const e = Qt.createQmlObject(\`${str}\`, ${parent}); const index = ${index}; const parent = ${parent}; if (index < 0) { index = 0; } parent.children.push(e); const newArray = []; const lastElement = parent.children[parent.children.length - 1]; for (let i = 0; i < index; i++) { newArray.push(parent.children[i]); } newArray.push(lastElement); for (let i = index; i < parent.children.length - 1; i++) { newArray.push(parent.children[i]); } parent.children = newArray;`); }
	function getIndexById(id, parentId) { return eval(`(() => { for (var i = 0; i < ${parentId}.children.length; i++) { if (${parentId}.children[i] === ${id}) return i; } return -1; })() `); }
	function destroyElementFromParent(id, parentId) { eval(` const parent = ${parentId}; for (let i = 0; i < parent.children.length; i++) { if (parent.children[i].objectName === "${id}") parent.children[i].destroy(); }`); }
	function gotIpcMessage(message) { const data = JSON.parse(message); if (data.type == "eval") eval(data.code); if (data.type == "set_property") { let prop = getElementById(data.elid); if (data.prop.includes(".")) { const props = data.prop.split("."); for (let i = 0;i < props.length - 1; i++) prop = prop[props[i]]; prop[props[props.length - 1]] = data.value; } else prop[data.prop] = data.value; } if (data.type == "get_property") ipc.sendTextMessage(JSON.stringify({ _key: getCreds().key, value: getElementById(data.elid)[data.prop], dkey: data.dkey })); if (data.type == "call_property") callProperty(data.elid, data.prop, data.args); if (data.type == "create_element") createElementAtIndex(data.str, data.parentId, data.index); if (data.type == "insert_before") createElementAtIndex(data.str, data.parentId, getIndexById(data.beforeId, data.parentId)); if (data.type == "destroy_element") destroyElementFromParent(data.elid, data.ptid); }
}