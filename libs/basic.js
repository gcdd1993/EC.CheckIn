var modules = {};

function Console() {

}

Console.prototype.log = function (msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logd(formatlog(msg), s);
}
var console = new Console();

/**
 * 载入EC自带的模块
 * @param libName 模块名称
 * @return {*}
 */
function loadECModule(libName) {
    var n = libName + "Wrapper";
    if (modules[n]) {
        //logd("已载入..." + n);
        return;
    }
    var r = ecImporter.loadECModule(libName);
    modules[n] = r;
    return r;
}

/**
 * 休眠
 * @param miSecond 毫秒
 */
function sleep(miSecond) {
    ecImporter.sleep(miSecond);
}

function toast(msg) {
    ecImporter.toast(msg);
}

function toast1(msg) {
    ecImporter.toast1(msg);
}

function toast2(msg) {
    ecImporter.toast2(msg);
}

function getHandler() {
    return ecImporter.getHandler();
}


function formatlog(obj) {
    return obj;
}

/**
 * 调试日志
 * @param msg
 */
function logd(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logd(formatlog(msg), s);
}

/**
 * 信息日志
 * @param msg
 */
function logi(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logi(formatlog(msg), s);
}


/**
 * 错误日志
 * @param msg
 */
function loge(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.loge(formatlog(msg), s);
}

/**
 * 警告日志
 * @param msg
 */
function logw(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logw(formatlog(msg), s);
}

/**
 * 设置保存日志信息到文件中
 * @param save 是否保存
 * @param path 自定义的文件夹
 * @param size 每个文件分隔的尺寸
 * @return 保存日志文件的目录
 */
function setSaveLog(save, path, size) {
    return ecImporter.setSaveLog(save, path, size);
}

/**
 * 打印日志的时候，悬浮窗是否展示行号，正式发布，可以不展示行号，不影响调试和保存在文件的日志
 * @param ds  true 代表显示， false 不显示
 */
function setFloatDisplayLineNumber(ds) {
    return ecImporter.setFloatDisplayLineNumber(ds);
}


/**
 * 清除日志
 * @param lines 整型，要清除的行数，-1 代表全部清除
 */
function clearLog(lines) {
    ecImporter.clearLog(lines);
}

/**
 * 打开EC系统设置页面
 * @return true 成功 false 失败
 */
function openECSystemSetting() {
    return ecImporter.openECSystemSetting();
}

/**
 * 打开EC云控设置
 * @return true 成功 false 失败
 */
function openECloudSetting() {
    return ecImporter.openECloudSetting();
}


/**
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "node_service":"需要",<br/>
 *     "proxy_service":"不需要",<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *     "daemon_service":"是",<br/>
 *      "volume_start_tc":"否",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  node_service : 是否需要启动节点获取服务 值有 需要，不需要两种
 *  proxy_service : 是否需要启动底层代理服务 值有 需要，不需要两种
 *  running_mode : 手势执行服务 值有 无障碍，代理两种
 *  auto_start_service : 开机启动服务 值有 是，否 两种
 *  daemon_service : 守护服务 值有 是，否 两种
 *  volume_start_tc : 音量键启停 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 */
function setECSystemConfig(params) {
    return ecImporter.setECSystemConfig(JSON.stringify(params));
}


/**
 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.apk)或者是文件路径(例如 /sdcard/ab.apk)加载
 * @return true 载入成功， false载入失败
 */
function loadDex(path) {
    return ecImporter.loadDex(path);
}

/**
 * 执行JS文件或者内容
 * @param type 1=文件，2=直接是JS内容
 * @param content 路径例如/sdcard/a.js或者js的内容
 * @return 布尔型，true代表执行成功， false代表失败
 */
function execScript(type, content) {
    return ecImporter.execScript(type, content);
}

/**
 * 载入jar文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.jar)或者是文件路径(例如 /sdcard/ab.jar)加载
 * @return true 载入成功， false载入失败
 */
function loadJar(path) {
    return ecImporter.loadJar(path);
}

/**
 * 退出脚本执行
 */
function exit() {
    ecImporter.exit();
}

/**
 * 重启脚本，适合无限循环，或者有异常的情况可以下载最新的iec再次执行，避免进入UI才能热更新,
 * 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
 * @param path 新的IEC路径，如果不需要可以填写null
 * @param stopCurrent 是否停止当前的脚本
 * @param delay 延迟多少秒后执行
 * @return bool true 代表成功 false 代表失败
 */
function restartScript(path, stopCurrent, delay) {
    return ecImporter.restartScript(path, stopCurrent, delay);
}


/**
 * 保存res文件夹中的资源文件到指定的路径
 * @param fileName 文件名称，不要加res前缀
 * @param path 要保存到的路径地址，例如/sdcard/aa.txt
 * @return boolean|布尔型 true代表保存成功
 */
function saveResToFile(fileName, path) {
    return ecImporter.saveResToFile(fileName, path);
}

/**
 * 读取res文件夹中的资源文件，并返回字符串
 * @param fileName 文件名称，不要加res前缀
 * @return string 如果是null代表没内容
 */
function readResString(fileName) {
    return javaString2string(ecImporter.readResString(fileName));
}

/**
 * 读取res文件夹中的资源文件，并返Bitmap图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return Bitmap 如果是null代表没内容
 */
function readResBitmap(fileName) {
    return ecImporter.readResBitmap(fileName);
}


/**
 * 启动环境
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function startEnv() {
    return ecImporter.startEnv();
}

/**
 * 自动化服务是否正常
 * @return 布尔型  true代表正常，false代表不正常
 */
function isServiceOk() {
    return ecImporter.isServiceOk();
}

/**
 * 设置要执行的IEC文件路径
 * @param path 文件路径
 * @return 布尔型，true代表成功  false代表失败
 */
function setIECPath(path) {
    return ecImporter.setIECPath(path);
}

/**
 * 获取要执行的IEC文件路径
 * @return String，null代表无。ts.iec 代表是包内iec文件，其他代代表存储路径中的文件
 */
function getIECPath() {
    return ecImporter.getIECPath();
}

function javaString2string(x) {
    if (x == null) {
        return null;
    }
    return "" + x;
}

function setStopCallback(callback) {
    ecImporter.onScriptStopCallback(callback);
}

function setExceptionCallback(callback) {
    ecImporter.onScriptExCallback(callback);
}

function object2JsonString(o) {
    if (o == null) {
        return "{}";
    }
    if ((typeof o) === 'string') {
        return o;
    }
    return JSON.stringify(o);
}
