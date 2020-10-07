/**
 * 该文件由EasyClick开发工具自动创建
 */
function main() {
    ui.toast("我是ui的Toast函数");
    var set = ui.layout("参数设置", "main.xml");
    ui.layout("其他说明", "main2.xml");
    ui.logd("设置UI结果: " + set);


    //监听Activity的事件设置
    ui.onActivityEvent("onResume", function (eventType) {
        // 可以在这里判断服务是否正常
        ui.logd("activity onResume " + ui.isServiceOk());
    });

    ui.onActivityEvent("onPause", function (eventType) {
        ui.logd("activity onPause");
    });

    ui.onActivityEvent("onStop", function (eventType) {
        ui.logd("activity onStop");
    });
    ui.onActivityEvent("onDestroy", function (eventType) {
        ui.logd("activity onDestroy");
    });


    //Switch 开关按钮的用法
    var auto_env = ui.getViewValue(ui.auto_env);
    ui.logd("tag为 auto_env 的值: " + auto_env);
    //开关按钮的事件
    ui.setEvent(ui.auto_env, "checkedChange", function (view, isChecked) {
        ui.logd("tag为 auto_env isChecked " + isChecked);
        if (isChecked) {
            startAutoEnv();
        }
    });
    if (ui.isServiceOk()) {
        ui.auto_env.setChecked(true);
    } else {
        ui.auto_env.setChecked(false);
    }

    //EditText 编辑框的用法
    var name = ui.getViewValue(ui.name);
    ui.logd("tag为name的值: " + name);
    ui.name.setText("我是name的值");
    //Spinner 下拉选择框用法
    var sex = ui.getViewValue(ui.sex);
    ui.logd("tag为 sex 的值: " + sex);
    //下拉选择框的事件
    ui.setEvent(ui.sex, "itemSelected", function (position, value) {
        ui.logd("tag为 sex itemSelected " + value);
    });

    //RadioButton 单选框用法
    var three = ui.getViewValue(ui.three);
    ui.logd("tag为 three 的值: " + three);
    //单选框的事件
    ui.setEvent(ui.three, "checkedChange", function (view, isChecked) {
        ui.logd("tag为 three isChecked " + isChecked);
    });
    //CheckBox 复选框用法
    var dance = ui.getViewValue(ui.dance);
    ui.logd("tag为 dance 的值: " + dance);
    //复选框的事件
    ui.setEvent(ui.dance, "checkedChange", function (view, isChecked) {
        ui.logd("tag为 dance isChecked " + isChecked);
    });

    //saveAllBtn 保存参数事件
    ui.setEvent(ui.saveAllBtn, "click", function (view) {
        var s = ui.saveAllConfig();
        ui.logd("保存所有参数结果 " + s)
    });

    //系统设置按钮
    ui.setEvent(ui.systemSetting, "click", function (view) {
        ui.openECSystemSetting();

    });
    //启动脚本按钮
    ui.setEvent(ui.startBtn, "click", function (view) {
        ui.start();
    });
    //启动环境按钮
    ui.setEvent(ui.envBtn, "click", function (view) {
        //异步启动环境，如果成功了就设置auto_env 按钮的状态
        startAutoEnv();
    });
    //获取所有的UI参数
    ui.logd("获取所有的UI参数：" + ui.getConfigJSON());
    //设置值的用法，这里先注释掉
    // ui.setViewValue(ui.name, "我是设置的");
    // ui.setViewValue(ui.auto_env, false);
    // ui.setViewValue(ui.sex, "男生|女生");
    // ui.setViewValue(ui.three, true);
    // ui.setViewValue(ui.dance, false)

}

function startAutoEnv() {
    ui.startEnvAsync(function (r) {
        ui.logd("启动环境结果: " + r);
        ui.auto_env.setChecked(r);
    });
}

main();