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
    
    text: "Click me!"

    onClicked: {
      log()
    }
    
}
}

function log() {
    console.log("Hello World")
}
}