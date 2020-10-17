/**
 * 闲鱼签到
 */
function Idlefish() {
    this.taskName = 'Idlefish'
    this.appName = '闲鱼'
    this.packageName = 'com.taobao.idlefish'

    /**
     * 初始化
     */
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
            selector = text('闲鱼币')
                .clickable(true)
            if (has(selector)) {
                click(selector)
            }
            selector = text('闲鱼币')
                .clickable(false)
            if (has(selector)) {
                break
            }
            // 有时，会自动弹出签到弹窗
            selector = text('签到领取')
            if (has(selector)) {
                break
            }
            selector = text('签到领币')
            if (has(selector)) {
                break
            }
            logd('等待进入签到页面');
            sleep(1000)
        }
        while (true) {
            let selector = text('闲鱼币')
                .clickable(false)
            if (has(selector)) {
                clickPoint(973, 136)
            }
            selector = desc('闲鱼签到')
            if (has(selector)) {
                click(selector)
            }
            selector = text('签到领取')
            if (has(selector)) {
                click(selector)
                break
            }
            selector = text('签到领币')
            if (has(selector)) {
                click(selector)
                break
            }
            logd('等待签到结果');
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const idlefish = new Idlefish()