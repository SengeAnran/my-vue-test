<template>
  <keep-alive>
    <div>
      <el-button @click="deleteStr">删除</el-button>
      <div class="editor"></div>
    </div>
  </keep-alive>
</template>

<script>
// 引入核心样式和主题样式
import Quill from 'quill'
import  Delta  from 'quill-delta'
import 'quill/dist/quill.snow.css'
import "quill-better-table/dist/quill-better-table.css";
// import { ImageExtend, QuillWatch } from 'quill-image-extend-module'
import QuillBetterTable from "quill-better-table";
Quill.register(
    {
      "modules/better-table": QuillBetterTable
    },
    true
);
//  按钮提示中文
const titleConfig = {
  'ql-bold': '加粗',
  'ql-color': '颜色',
  'ql-font': '字体',
  'ql-code': '插入代码',
  'ql-italic': '斜体',
  'ql-link': '添加链接',
  'ql-background': '颜色',
  'ql-size': '字体大小',
  'ql-strike': '删除线',
  'ql-script': '上标/下标',
  'ql-underline': '下划线',
  'ql-blockquote': '引用',
  'ql-header': '标题',
  'ql-indent': '缩进',
  'ql-list': '列表',
  'ql-align': '文本对齐',
  'ql-direction': '文本方向',
  'ql-code-block': '代码块',
  'ql-formula': '公式',
  'ql-image': '图片',
  'ql-video': '视频',
  'ql-clean': '清除字体样式',
  'ql-upload': '文件',
  'ql-table': '插入表格',

  // 'ql-table-insert-row': '插入行',
  // 'ql-table-insert-column': '插入列',
  // 'ql-table-delete-row': '删除行',
  // 'ql-table-delete-column': '删除列',
  // 'ql-table-merge-cells': '合并单元格',
  // 'ql-table-unmerge-cells': '拆分单元格',
  // 'ql-table-delete': '删除表格',
}
//  字体
const fontList = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong'];
export default {
  name: 'Editor',
  props: {
    // 用于双向绑定
    value: String
  },
  data () {
    return {
      quill: null,
      options: {
        theme: 'snow',
        modules: {
          // 工具栏的具体配置
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],  // 加粗 斜体 下划线 删除线
              ["blockquote"],// 引用  代码块
              // [{ header: 1 }, { header: 2 }], // 标题 —— 独立平铺
              [{ list: 'ordered' }, { list: 'bullet' }],  // 有序、无序列表
              [{ indent: '-1' }, { indent: '+1' }],// 缩进
              [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
              [{ size: ["small", false, "large", "huge"] }],  // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], // 引用  代码块
              [{'script': 'sub'}, {'script': 'super'}],      // 下标/上标
              [{ font: fontList }], //  [{'font': fontList}],//字体
              [{ align: [] }], // 对齐方式// text direction
              ['clean'], // 清除文本格式
              ["image"], //  ["link", "image", "video"] 链接、图片、视频
              [ // 表单功能
                { table: 'TD' },
                // { 'table-insert-row': 'TIR' },
                // { 'table-insert-column': 'TIC' },
                // { 'table-delete-row': 'TDR' },
                // { 'table-delete-column': 'TDC' }
              ]
            ],
            handlers: {
              // 自定义方法
              table: function (val) {
                // this.quill.getModule('table').insertTable(2, 3)
                if (!this.quill) {
                  return
                }
                //默认插入的表格行列数
                this.quill.getModule("better-table").insertTable(2, 3);
              },
              'image': function (value) {
                if (value) {
                  // 调用iview图片上传
                  // document.querySelector('.ivu-upload .ivu-btn').click()
                } else {
                  this.quill.format('image', false);
                }
              },
              // 'table-insert-row': function () {
              //   // this.quill.getModule('table').insertRowBelow()
              //   console.log(this.quill.getModule('better-table'))
              //   // this.quill.getModule('better-table').insertRowDown()
              // },
              // 'table-insert-column': function () {
              //   this.quill.getModule('table').insertColumnRight()
              // },
              // 'table-delete-row': function () {
              //   this.quill.getModule('table').deleteRow()
              // },
              // 'table-delete-column': function () {
              //   this.quill.getModule('table').deleteColumn()
              // }
            }
          },
          "better-table": {
            operationMenu: {
              items: {
                insertColumnRight: {
                  text: "右边插入一列"
                },
                insertColumnLeft: {
                  text: "左边插入一列"
                },
                insertRowUp: {
                  text: "上边插入一行"
                },
                insertRowDown: {
                  text: "下边插入一行"
                },
                mergeCells: {
                  text: "合并单元格"
                },
                unmergeCells: {
                  text: "拆分单元格"
                },
                deleteColumn: {
                  text: "删除列"
                },
                deleteRow: {
                  text: "删除行"
                },
                deleteTable: {
                  text: "删除表格"
                }
              },
              background: {
                color: "#333"
              },
              color: {
                colors: ["green", "red", "yellow", "blue", "white"],
                text: "background:"
              }
            }
          },
          keyboard: {
            bindings: QuillBetterTable.keyboardBindings
          },
          table: true
        },
        placeholder: ''
      },
    }
  },
  watch: {
    // 监听外部值的传入，用于将值赋予编辑器
    value(val) {
      // console.log('value', val)
      // 如果编辑器没有初始化，则停止赋值
      if (!this.quill || !this.quill.root) {
        return;
      }

      // 获取编辑器当前内容
      let content = this.quill.root.innerHTML;

      // 外部传入了新值，而且与当前编辑器的内容不一致
      if (val && val !== content) {
        // 将外部传入的HTML内容转换成编辑器识别的delta对象
        let delta = this.quill.clipboard.convert({
          html: val
        });
        // 编辑器的内容需要接收delta对象
        this.quill.setContents(delta);
      }
    }
  },
  mounted () {
   this.init();
   this.addQuillTitle()
  },
  // activated () {
  //   this.quill.setContents({})
  // },
  methods: {
    deleteStr() {
      // const res = this.quill.deleteText(4,2); //从编辑器中删除文本，返回代表对应变化的Delta数据
      // const res = this.quill.getContents(); // 返回编辑器的内容——包含格式数据的Delta数据。
      // const res = this.quill.getText(); // 返回编辑器的字符串内容。由于非字符串内容会被忽略掉，所以返回字符串内容的长度会比getLength返回的长度小。注意，尽管Quill为空，编辑器里仍有一行空行，所以这种情况会返回”\n”。
      // const res = this.quill.insertEmbed(10, 'image', 'https://quilljs.com/images/cloud.png'); //插入嵌入对象内容到编辑器，返回代表对应变化的Delta数据。
      // const res = this.quill.insertText(0, 'Hello', 'bold', true) ; //向编辑器中插入文本，可选带有指定的文本格式或多个文本格式，返回代表对应变化的Delta数据。
      // const res = this.quill.insertText(5, 'Quill', {
      //   'color': '#ffff00',
      //   'italic': true
      // }) ; //向编辑器中插入文本，可选带有指定的文本格式或多个文本格式，返回代表对应变化的Delta数据。
      // const res = this.quill.setContents([
      //   { insert: 'Hello ' },
      //   { insert: 'World!', attributes: { bold: true } },
      //   { insert: '\n' }
      // ]); // 用给定的内容覆盖原编辑器内容。内容将会用换行符结尾。返回代表对应变化的Delta数据。如果给定的Delta没有无效的操作，返回值和传入的值相同。
      // const res = this.quill.updateContents(new Delta({
      //   .retain(6)                  // Keep 'Hello '
      //       .delete(5)                  // 'World' is deleted
      //       .insert('Quill')
      //       .retain(1, { bold: true })
      // })  // Apply bold to exclamation mark
    ); //
      // const res = this.quill.getText(); //
      console.log(res)
    },
    init() {
      const dom = this.$el.querySelector('.editor')
      this.quill = new Quill(dom, this.options);
      // 自定义字体

      Quill.import('formats/font').whitelist = fontList; //将字体加入到白名单

      // this.quill.setContents(this.value)
      this.quill.on('text-change', () => {
        console.log()
        if (!this.quill || !this.quill.root) {
          return
        }
        this.$emit("input", this.quill.root.innerHTML);
      })
      // 加入表格操作图标
      // this.$el.querySelector(
      //     '.ql-table-insert-row'
      // ).innerHTML = `<svg t="1591862376726" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6306" width="18" height="200"><path d="M500.8 604.779L267.307 371.392l-45.227 45.27 278.741 278.613L779.307 416.66l-45.248-45.248z" p-id="6307"></path></svg>`
      // this.$el.querySelector(
      //     '.ql-table-insert-column'
      // ).innerHTML = `<svg t="1591862238963" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6509" width="18" height="200"><path d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z" p-id="6510"></path></svg>`
      // this.$el.querySelector(
      //     '.ql-table-delete-row'
      // ).innerHTML = `<svg t="1591862253524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6632" width="18" height="200"><path d="M500.8 461.909333L267.306667 695.296l-45.226667-45.269333 278.741333-278.613334L779.306667 650.026667l-45.248 45.226666z" p-id="6633"></path></svg>`
      // this.$el.querySelector(
      //     '.ql-table-delete-column'
      // ).innerHTML = `<svg t="1591862261059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6755" width="18" height="200"><path d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z" p-id="6756"></path></svg>`
    },
    /**
     * 为操作栏的每个按钮提供中文
     */
    addQuillTitle () {
      const oToolBar = document.querySelector('.ql-toolbar')
      const aButton = oToolBar.querySelectorAll('button')
      const aSelect = oToolBar.querySelectorAll('select')
      aButton.forEach(function (item) {
        if (item.className === 'ql-script') {
          item.value === 'sub' ? (item.title = '下标') : (item.title = '上标')
        } else if (item.className === 'ql-indent') {
          item.value === '+1' ? (item.title = '向右缩进') : (item.title = '向左缩进')
        } else {
          item.title = titleConfig[item.classList[0]]
        }
      })
      aSelect.forEach(function (item) {
        item.parentNode.title = titleConfig[item.classList[0]]
      })
    },
    // 获取内容
    getContentData () {
      return this.quill.getContents()
    }
  },

}
</script>

<style  >
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}

.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimSun]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimSun]::before {
  content: "宋体";
}

.ql-font-SimSun {
  font-family: "SimSun";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimHei]::before {
  content: "黑体";
}


.ql-font-SimHei {
  font-family: "SimHei";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Microsoft-YaHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Microsoft-YaHei]::before {
  content: "微软雅黑";
}

.ql-font-Microsoft-YaHei {
  font-family: "Microsoft YaHei";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=KaiTi]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=KaiTi]::before {
  content: "楷体";
}

.ql-font-KaiTi {
  font-family: "KaiTi";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=FangSong]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=FangSong]::before {
  content: "仿宋";
}

.ql-font-FangSong {
  font-family: "FangSong";
}




</style>
