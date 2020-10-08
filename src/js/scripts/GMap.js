/**
 * 高德地图签到
 */
function GMap() {
    this.appName = '高德地图'
    this.packageName = 'com.autonavi.minimap'

    this.init = () => {
        logd('初始化 --> ' + this.appName);
    }

    /**
     * 启动目标应用
     */
    this.runApp = () => {
        utils.openApp(this.packageName)
    }

    /**
     * 执行任务
     */
    this.run = () => {
        while (true) {
            let selector = text('我的')
            if (has(selector)) {
                click(selector)
            }
            selector = text('每日签到')
            if (has(selector)) {
                click(selector)
            }
            if (has(text('签到战绩'))) {
                break
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const gMap = new GMap()