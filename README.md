<p align="center">
	<a href="https://www.clientbiz.cn"><img src="./doc/icons/clientbiz.ico" width="150" /></a>
</p>
<h1 align="center">ClientBiz IDE </h1>

[官网地址](https://www.clientbiz.cn)

[ClientBiz Web 版本请移步此处（源码地址）](https://github.com/hanbingzi/clientbiz-web)

ClientBiz是一款开源的，支持WEB和客户端版本，能够连接各种类型的关系数据库、非关系型数据库、时序数据库、图数据库、消息队列、注册中心等数据服务的管理软件。

![perview](./doc/images/clientbiz-main.jpg)



<h2 align="center">ClientBiz当前支持的客户端 </h2>

|                        -                        |                       -                        |                        -                         |                     -                      |                       -                        |                   -                    |
|:-----------------------------------------------:|:----------------------------------------------:|:------------------------------------------------:|:------------------------------------------:|:----------------------------------------------:|:--------------------------------------:|
|     ![mysql](./doc/icons/server/mysql.svg)      | ![postgresql](./doc/icons/server/postgre.svg)  |     ![oracle](./doc/icons/server/oracle.svg)     | ![mariadb](./doc/icons/server/mariadb.svg) |   ![redis](./doc/icons/server/sqlserver.svg)   | ![redis](./doc/icons/server/redis.svg) |
|                      Mysql                      |                   Postgresql                   |                      Oracle                      |                  Mariadb                   |                   SqlServer                    |                 Redis                  |
| ![zookeeper](./doc/icons/server/zookeeper.svg)  |     ![kafka](./doc/icons/server/kafka.svg)     |         ![dm](./doc/icons/server/dm.svg)         |    ![tidb](./doc/icons/server/tidb.svg)    | ![oceanbase](./doc/icons/server/oceanbase.svg) |   ![db2](./doc/icons/server/db2.svg)   |
|                    Zookeeper                    |                     Kafka                      |                        达梦                        |                    TiDB                    |                   oceanbase                    |                  DB2                   |
|      ![etcd](./doc/icons/server/etcd.svg)       |  ![TDEngine](./doc/icons/server/tdengine.svg)  | ![clickhouse](./doc/icons/server/clickhouse.svg) |  ![Presto](./doc/icons/server/presto.svg)  |     ![trino](./doc/icons/server/trino.svg)     |                                        |
|                      Etcd                       |                    TDEngine                    |                    ClickHouse                    |                   Presto                   |                     Trino                      |                                        |

## 一：功能特点

- 开源免费
- 支持web和客户端方式安装
- 传统IDE方式管理SQL及其他语言脚本
- 方便的Git管理SQL及其他语言脚本
- 丰富的第三方客户端支持
- 优秀的智能脚本语言提示
- 可视化操作的SQL查询结果展示

## 二：支持的客户端功能介绍

### 1.数据库支持功能
包括：Mysql，Oracle，Postgresql，Mariadb，SqlServer，达梦，TiDB，OceanBase，DB2，ClickHouse，Presto，Trino，TDEngine
```bash
├── 数据库  
│   └── 右键
│       ├── 新建库
│       ├── 删除库
│       ├── 刷新
│       └── 关闭连接              
├── 表   
│   ├── 右键
│   │   ├── 重命名
│   │   ├── 编辑表结构
│   │   ├── 清空表数据
│   │   ├── 删除表
│   │   ├── 复制表创建SQL
│   │   └── 复制表查询语句
│   ├── 表查询
│   │   ├── 条件查询
│   │   ├── 翻页
│   │   ├── 删除一条或多条
│   │   ├── 修改一条或多条
│   │   └── 选中一行右键
│   │       ├── 删除记录
│   │       ├── 上方插入行
│   │       ├── 下方插入行
│   │       ├── 复制行
│   │       ├── 粘贴行
│   │       ├── 复制为insert语句
│   │       ├── 复制为update语句
│   │       └── 复制为delete语句
│   ├── 表新建
│   │   ├── 字段名称
│   │   ├── 字段类型
│   │   ├── 字段长度
│   │   ├── 字段精度
│   │   ├── 字段是否为空
│   │   ├── 字段默认值
│   │   ├── 字段主键
│   │   └── 字段注释
│   │  
│   └── 表编辑
│       ├── 修改字段名称
│       ├── 修改字段类型
│       ├── 修改字段长度
│       ├── 修改字段精度
│       ├── 修改字段是否为空
│       ├── 修改字段默认值
│       ├── 修改字段主键
│       └── 修改字段注释                  
├── 视图
│   ├── 查询
│   ├── 删除
│   └── 复制创建sql
├── 函数
│   ├── 查询详情
│   ├── 删除
│   └── 查看创建sql
├── 存储过程
│   ├── 查询详情
│   ├── 删除
│   └── 查看创建sql
└── 触发器
    ├── 查询详情
    ├── 删除
    └── 查看创建sql
```
#### Mysql数据查询
![](./doc/images/mysql-main1.jpg)
#### sql 智能补充
![](./doc/images/intelli-sense-sql.jpg)

### 2.Redis支持功能

```bash
├── 展示
│   ├── 库
│   ├── key
│       ├── string
│       │   ├── Text 
│       │   ├── Json
│       │   ├── Hex
│       │   ├── Binary
│       │   ├── MsgPack
│       │   ├── Java Serialized
│       │   ├── Java Serialized
│       │   └── Java Serialized
│       ├── hash
│       ├── set
│       ├── zset
│       └── list                  
├── 数据编辑
│       ├── string
│       │   ├── Text 
│       │   ├── Json
│       │   ├── Hex
│       │   ├── Binary
│       │   ├── MsgPack
│       │   ├── Java Serialized
│       │   ├── Java Serialized
│       │   └── Java Serialized
│       ├── hash（新增、删除、修改）
│       ├── set（新增、删除、修改）
│       ├── zset（新增、删除、修改）
│       └── list （新增、删除、修改）                    

```

#### Redis操作主界面
![](./doc/images/redis-main.jpg)

### 3.Zookeeper支持功能

1. 新增key
2. 删除key
3. 修改key

#### Zookeeper操作主界面
![](./doc/images/zookeeper-main.jpg)

### 4.Kafka支持功能
1. 消息
   - 查询消息
   - 新增消息
2. topic
   - 新建topic
3. Broker查看
4. Group查看

#### Kafka操作主界面 
![](./doc/images/kafka-main.jpg)


### 5.Etcd支持功能
1. Data
  - 查询
  - 修改
  - 删除
  - 新增
2. Security
  - 用户
    - 新增
    - 删除
  - 角色
    - 新增
    - 删除
3. Cluster查询


#### Etcd操作主界面
![](./doc/images/etcd-main.jpg)

## 三：运行代码

```bash
$ git clone https://github.com/hanbingzi/clientbiz-ide.git
$ cd clientbiz-ide
$ yarn
$ yarn build
$ yarn rebuild-native --force-rebuild=true
$ yarn start
```


## 捐献作者

开源创作不易，请多支持
<div>
  <img src="./doc/images/wechat-pay.jpg" width="300">
  <img src="./doc/images/zhifubao-pay.jpg" width="300">
</div>

## 商务联系

作者邮箱：hanbingzi@aliyun.com

加我微信
<div>
  <img src="./doc/images/ContactUs.jpg" width="300">
</div>

## 最后


## License

GPL-3.0