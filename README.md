### Introducation

Using node builds the RESTful interface.

### Key

> 1、自动生成 schema

```js
sequelize-auto -o "./schema" -d todolist -h 127.0.0.1 -u root -p 3306 -x 123456 -e mysql
```

> 2、目录结构

> 3、RESTful

#### 每个资源使用两个 URL

```js
/api/todos        #资源集合的URL
/api/todos/2      #具体某个资源的URL
```

#### 用名词代替动词表示资源

```js
/api/getAllTodos
/api/getAllExternalTodos
/api/createTodo
/api/updateTodo
```

更好的方式

```js
GET /api/todos
GET /api/todos?state=1
POST /api/todo
PUT /api/todo/aa
```

#### 用 HTTP 方法操作资源

使用 URL 指定你要用的资源。使用 HTTP 方法来指定怎么处理这个资源。使用四种 HTTP 方法 POST，GET，PUT，DELETE 可以提供 CRUD 功能（创建，获取，更新，删除）。

* 获取：使用 GET 方法获取资源。GET 请求从不改变资源的状态。无副作用。GET 方法是幂等的。GET 方法具有只读的含义。因此，你可以完美的使用缓存。
* 创建：使用 POST 创建新的资源。
* 更新：使用 PUT 更新现有资源。
* 删除：使用 DELETE 删除现有资源。
