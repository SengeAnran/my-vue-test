<template>
  <div>
    <quill-editor ref="myTextEditor" v-model="content"></quill-editor>
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
import quillEditor  from './quillEditor.vue'

// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// import ImageResize from 'quill-image-resize-module'
// import { ImageDrop } from 'quill-image-drop-module'
//
// Quill.register("modules/imageResize", ImageResize)
// Quill.register("modules/imageDrop", ImageDrop)
// const marked = require('marked');
import {marked} from "marked";


export default {
  components: {
    quillEditor
  },
  data () {
    return {
      content: "Hello quill",
      editorOption: {
        theme: "snow",
        placeholder: "请输入正文",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["image", "video"]
          ],
          // imageDrop: true,
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: 'black',
          //     border: 'none',
          //     color: 'white'
          //   },
          //   modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          // }
        },
      }
    }
  },
  mounted() {
    console.log(marked);
    this.content=  `
<p>Hello World!</p>
<table cellspacing="0" cellpadding="0"
               style="width:97.62%; margin-right:auto; margin-left:auto; border:0.75pt solid #000000; border-collapse:collapse">
            <tr style="height:21.75pt">
                <td colspan="6"
                    style="border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span
                            style="font-family:宋体; font-weight:bold">作业简史描述</span></p></td>
            </tr>
            <tr style="height:13.5pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span style="font-family:宋体">作业时间</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span style="font-family:宋体">作业类型</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span style="font-family:宋体">作业内容</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span style="font-family:宋体">关键数据</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="text-align:center; font-size:12pt"><span style="font-family:宋体">异常情况记录</span></p>
                </td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>1</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>2</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p>
                    <p class="a6" style="text-align:justify; font-size:12pt"><span>3</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>4</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p>
                    <p class="a6" style="text-align:justify; font-size:12pt"><span>5</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:11pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="font-size:11pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:31.85pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>6</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:31.85pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>7</span></p></td>
                <td style="width:14.6%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
            <tr style="height:37.35pt">
                <td style="width:3.72%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>8</span></p></td>
                <td style="width:14.6%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:13.28%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:12.08%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:center; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:33.9%; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle">
                    <p style="text-align:justify; font-size:12pt"><span>&#xa0;</span></p></td>
                <td style="width:22.42%; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top">
                    <p style="font-size:12pt"><span>&#xa0;</span></p></td>
            </tr>
        </table>`
  }
}
</script>

<style>
</style>
