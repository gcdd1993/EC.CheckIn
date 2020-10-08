// const apps = [smzdm, idlefish, gMap, bcs]
const apps = [liteTaobao]

function main() {
    const successCount =
        apps
            .filter(app => doSignIn(app))
            .length
    toast('任务完成，共签到' + successCount + "个应用")
}

function doSignIn(app) {
    if (!checkAppExists(app.packageName)) {
        toast('您未安装 --> ' + app.appName)
        sleep(3000)
        return false
    }
    try {
        clearApps()
        sleep(1000)
        app.init()
        app.runApp()
        app.run()
        sleep(1000)
        home()
        sleep(3000)
        return true
    } catch (ex) {
        loge(ex.toString())
        return false
    }
}

/**
 * 清理后台任务（适配MIUI12）
 */
function clearApps() {
    recentApps()
    while (true) {
        const selector = descMatch('.*双击清理全部任务')
        if (has(selector)) {
            click(selector)
            break
        }
        sleep(1000)
    }
}

/**
 * 目标App是否存在
 */
function checkAppExists(packageName) {
    return utils.isAppExist(packageName)
}

/**
 * 脚本初始化
 */
function init() {
    device.keepScreenOn();
}

/**
 * 脚本卸载
 */
function uninit() {
    device.cancelKeepingAwake();
}

init()
main()
uninit()