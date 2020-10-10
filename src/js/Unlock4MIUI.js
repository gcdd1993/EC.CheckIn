const passwords = [2, 5, 8, 0]

/**
 小米Mix2S解锁
 */
function unlock() {
    // 10S执行一次亮屏
    const taskId = thread.setInterval(() => device.keepScreenOn(), 1000 * 10)
    while (true) {
        if (has(text('请用密码或指纹解锁'))) {
            break
        }
        swipeToPoint(600, 2000, 600, 1000, 1111)
        sleep(3000)
    }
    passwords.forEach(p => {
        click(id('com.android.systemui:id/key' + p))
        sleep(1000)
    })
    cancelInterval(taskId)
}