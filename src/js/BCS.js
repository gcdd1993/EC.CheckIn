/**
 * 编程狮签到
 */
function BCS() {
    this.appName = '编程狮'
    this.packageName = 'cn.w3cschool.app'

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
            if (has(text('我的'))) {
                click(text('我的'))
                break
            }
            logd('等待进入应用')
            sleep(1000)
        }
        while (true) {
            if (has(text('签到'))) {
                click(text('签到'))
                break
            }
            if (has(text('已签到'))) {
                break
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const bcs = new BCS()