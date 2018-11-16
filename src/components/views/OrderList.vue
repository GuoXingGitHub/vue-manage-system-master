
<template>
    <div>
        <div>
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="35%" :before-close="handleClose">

                 <div class="list-group col-md-3">
                    <pre>{{listString}}</pre>
                </div>

            <div class="container">
              <div class="drag-box">
                 <div class="drag-box-item"  >
                    <div class="item-title">可选列（不显示）</div>
                    <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
                        <transition-group tag="div" id="todo" class="item-ul">
                            <div v-for="(item,index) in todo" class="drag-list" :key="index">
                                {{item.content}}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="drag-box-item" >
                    <div class="item-title">已选列（显示）</div>
                    <draggable v-model="doing" @remove="removeHandle" :options="dragOptions" >
                        <transition-group tag="div" id="doing" class="item-ul">
                            <div v-for="(item,index) in doing" class="drag-list" :key="index">
                                {{item.content}}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
              </div>
           </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
        </div>

        <div>
             <el-table :data="tableData"  style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column 
                  prop="date"
                  label="日期"
                  sortable
                  width="180">
                </el-table-column>
            
                <el-table-column
                  prop="name"
                  label="姓名"
                  sortable
                  width="180">
                </el-table-column>
            
                <el-table-column
                  prop="address"
                  label="地址"
                  :formatter="formatter">
                </el-table-column>
              </el-table>
        </div>
    </div>

</template>

<script>
 import draggable from 'vuedraggable';
 export default {
 	    name: 'draglist',
        data() {
            return {
                dialogVisible: false,
                dragOptions:{
                    animation: 100,
                    scroll: false,
                    group: 'sortlist',
                    ghostClass: 'ghost-style'
                },
                todo: [
                    {
                        content: '开发图表组件'
                    },
                    {
                        content: '开发拖拽组件'
                    },
                    {
                        content: '开发权限测试组件'
                    }
                ],
                doing: [
                    {
                        content: '开发登录注册页面'
                    },
                    {
                        content: '开发头部组件'
                    },
                    {
                        content: '开发表格相关组件'
                    },
                    {
                        content: '开发表单相关组件'
                    }
                ],
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1517 弄'
                    }, 
                    {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1516 弄'
                    }
                    ]
               }
        },
        components:{
            draggable
        },
        computed:{
            listString() {
                 return JSON.stringify(this.todo, null, 2);
            },
            list2String() {
                 return JSON.stringify(this.doing, null, 2);
            }
        },
        methods : {
            removeHandle(event){
                console.log(event);
                this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            },
            formatter(row, column) {
                 return row.address;
            },
            handleClose(done) {
                this.$confirm('确认关闭？').then(_ => {
                     done();
                }).catch(_ => {
                });
            }
        }
     }   
</script>

<style scoped>
    .drag-box{
        display: flex;
        user-select: none;
    }
    .drag-box-item {
        flex: 1;
        max-width: 330px;
        min-width: 300px;
        background-color: #eff1f5;
        margin-right: 16px;
        border-radius: 6px;
        border: 1px #e1e4e8 solid;
    }
    .item-title{
        padding: 8px 8px 8px 12px;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        font-weight: 600;
    }
    .item-ul{
        padding: 0 8px 8px;
        height: 500px;
        overflow-y: scroll;
    }
    .item-ul::-webkit-scrollbar{
        width: 0;
    }
    .drag-list {
        border: 1px #e1e4e8 solid;
        padding: 10px;
        margin: 5px 0 10px;
        list-style: none;
        background-color: #fff;
        border-radius: 6px;
        cursor: pointer;
        -webkit-transition: border .3s ease-in;
        transition: border .3s ease-in;
    }
    .drag-list:hover {
        border: 1px solid #20a0ff;
    }
    .drag-title {
        font-weight: 400;
        line-height: 25px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .ghost-style{
        display: block;
        color: transparent;
        border-style: dashed
    }
</style>