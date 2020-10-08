// const apps = [smzdm, idlefish, gMap, bcs]
const apps = [czb]

function main() {
    apps
        .forEach(app => doSignIn(app))
    toast('任务完成，共签到' + apps.length + "个应用")
}

function doSignIn(app) {
    try {
        clearApps()
        sleep(1000)
        app.init()
        app.runApp()
        app.run()
        sleep(1000)
        home()
        sleep(3000)
    } catch (ex) {
        loge(ex.toString())
    }
}

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

main()