import QtQuick 2.3
import QtQuick.Window 2.13
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.2

Window {
  visible: true
  width: 700
  height: 500

  ColumnLayout {
    id: columnLayout

    Text {
      text: "Test"
      font.hintingPreference: Font.PreferFullHinting
    }

    Button {
      id: btn
      onClicked: () => {
        var n = Qt.createQmlObject('import QtQuick 2.3; Text { text: "Hello" }', columnLayout)

        addElementAtIndex(n, 1)
      }
      text: "click me"
    }
  }

  function addElementAtIndex(element, index) {
        columnLayout.children[1] = element
        columnLayout.children.push(btn)

    }
}