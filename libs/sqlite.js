function SqliteApiWrapper() {

}

var sqlite = new SqliteApiWrapper();

/**
 * 创建或者链接一个数据库
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param dbName 数据库名称
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.connectOrCreateDb = function (dbName) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.connectOrCreateDb(dbName);
};

/**
 * 创建数据表
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tableName 表名称
 * @param columns 列名称，例如 ["name","pwd"]
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.createTable = function (tableName, columns) {
    if (sqliteWrapper == null) {
        return null;
    }
    columns = JSON.stringify(columns);
    return sqliteWrapper.createTable(tableName, columns);
};


/**
 * 插入数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tableName 表名
 * @param map 数据的map表
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.insert = function (tableName, map) {
    if (sqliteWrapper == null || map == null) {
        return null;
    }

    return sqliteWrapper.insert(tableName, JSON.stringify(map));
};


/**
 * 删除数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.delete = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.delete(sql);
};


/**
 * 更新数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tablename 表名称
 * @param map 数据的map表
 * @param where 条件语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.update = function (tablename, map, where) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.update(tablename, JSON.stringify(map), where);
};
/**
 * 执行sql
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.execSql = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.execSql(sql);
};


/**
 * 删除数据库
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.dropDatabase = function () {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.dropDatabase();
};


/**
 * 删除表
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param table 表名
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.dropTable = function (table) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.dropTable(table);
};


/**
 * 查询数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return JSON | 数据集合对象
 */
SqliteApiWrapper.prototype.query = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    var x = sqliteWrapper.query(sql);
    if (x == null) {
        return null;
    }
    x = javaString2string(x);
    return JSON.parse(x);
};


/**
 * 关闭数据库链接，释放资源
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.close = function () {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.close();
};


