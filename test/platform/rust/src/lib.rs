use std::{ ffi::CStr, os::raw::c_char };

use qt_core::QString;
use qt_qml::QQmlApplicationEngine;
use qt_gui::QGuiApplication;

#[no_mangle]
pub extern "C" fn open_window(qml: *const c_char) -> i32 {
    let c_str = unsafe { CStr::from_ptr(qml) };
    let qml_str = c_str.to_str().unwrap_or("Tao window");

    QGuiApplication::init(|_| unsafe {
        let mut engine = QQmlApplicationEngine::new();
        engine.load_q_string(&QString::from_std_str(qml_str));
        QGuiApplication::exec()
    });

    0
}
