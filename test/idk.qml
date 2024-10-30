import QtQuick 2.3
import QtQuick.Window 2.13
import QtQuick.Dialogs 1.2
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.2

Window {
  visible: true
  width: 700
  height: 500

  id: root

  ColumnLayout {
    id: cl
    Text {
      objectName: "test"
      text: "Test this"
      font.hintingPreference: Font.PreferFullHinting
    }

    Text {
      text: "Test"
      font.hintingPreference: Font.PreferFullHinting
    }

    Text {
      text: "Test"
      objectName: "test"
      font.hintingPreference: Font.PreferFullHinting
    }

    TextField {
      id: txt
      placeholderText: "Enter text"

      onTextChanged: {
        console.log(txt.text)
      }
    }

    Button {
      id: btn
      text: "click me"

      onClicked: {
        // get "test"
        console.log(cl.children[0].objectName)
      }
    }
  }

}