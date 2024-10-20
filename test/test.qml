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
Button {
    
    onClicked: () => gravityFunctionHandler("qq6ai3")
text: "Click me!"
    
    
}
    
}
    function gravityFunctionHandler(symbol) { callSymbol(symbol); console.log("calling symbol", symbol); }
function getCreds() { return { port: "17835", key: "eabad6094df84e07b1f6d23467e2e5fbf86cc41610ff4d28a947069379bd875b" }; }
function callSymbol(symbol) { const creds = getCreds(); console.log("IPC::symbol::" + creds.port + "::" + creds.key + "::" + symbol); const xhr = new XMLHttpRequest; xhr.open("GET", `http://localhost:${creds.port}/&/${symbol}`, !0); xhr.setRequestHeader("Authorization", creds.key); xhr.send(); }
}