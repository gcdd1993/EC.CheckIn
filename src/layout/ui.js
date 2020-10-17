const tasks = [
  'BCS',
  'Cainiao',
  'CZB',
  'GMap',
  'Haval',
  'Idlefish',
  'SMZDM',
  'RenRen',
  'JDJR',
]
ui.layout('应用设置', 'app.xml')
ui.layout('定时任务', 'timer.xml')

const savehandler = (view) => {
  ui.saveAllConfig()
}
ui.setEvent(ui.saveBtn, "click", savehandler);
tasks.forEach(task => ui.setViewValue(task, ui.getConfig(task)))
