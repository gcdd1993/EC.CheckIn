/**
 * 菜鸟裹裹签到
 */
function Cainiao() {
    this.appName = '菜鸟裹裹'
    this.packageName = 'com.cainiao.wireless'

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
            selector = text('裹酱积分')
            if (has(selector)) {
                click(selector)
            }
            selector = text('查件奖励')
            if (has(selector)) {
                click(selector)
                toast('查件奖励')
            }
            selector = text('TB1m9jbaZKfxu4jSZPfXXb3dXXa-440-132')
                .clz('android.widget.Image')
            if (has(selector)) {
                clickCenter(selector.getOneNodeInfo(500).bounds)
                break
            }
            selector = textMatch('.*明天签到再得')
            if (has(selector)) {
                toast('好像已经签到过了')
                break
            }
            // 好评弹窗
            selector = text('取消')
            if (has(selector)) {
                click(selector)
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const cainiao = new Cainiao()