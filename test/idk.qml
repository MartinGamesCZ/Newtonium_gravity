import QtQuick 2.15
import QtQuick.Window 2.13
import QtQuick.Controls 1.2

Window {
  visible: true
  width: 500
  height: 500

  Text {
    id: testik
    text: "Hello, World!"
    font.pointSize: 40
  }

  Button {
    // Set pointSize to 20
    onClicked: eval("testik['font.pointSize'] = 20")
    text: "Click me!"
  }
}