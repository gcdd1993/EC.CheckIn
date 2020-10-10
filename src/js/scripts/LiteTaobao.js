/**
 * 淘宝特价版签到
 */
function LiteTaobao() {
    this.taskName = 'LiteTaobao'
    this.appName = '淘宝特价版'
    this.packageName = 'com.taobao.litetao'

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
            let selector = text('签到拿红包')
            if (has(selector)) {
                click(selector)
            }
            selector = text('收下红包')
            if (has(selector)) {
                click(selector)
                break
            }
            selector = desc('@关闭按钮')
            if (has(selector)) {
                click(selector)
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const liteTaobao = new LiteTaobao()