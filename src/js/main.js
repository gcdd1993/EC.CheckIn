function main() {
    doSignIn(smzdm)
    doSignIn(idlefish)
    doSignIn(gMap)
    doSignIn(bcs)
}

function doSignIn(app) {
    clearApps()
    sleep(1000)
    app.init()
    app.runApp()
    app.run()
    sleep(1000)
    home()
    sleep(3000)
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