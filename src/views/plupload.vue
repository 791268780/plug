<template>
    <div id="d2">
        <div id="d3"></div>
        <button id="d1">xxx</button>
    </div>
</template>

<script>
import plupload from 'plupload'

export default {
    data() {
        return{
            plupload:null, 
        }
    },
    created() {
    
        
    },
    methods:{
        it() {
            let plup = new plupload.Uploader({
                browse_button: 'd1', //触发的元素按钮
                url:'api/list', // 提交请求的地址
                filters: {
                    mime_types : [ //只允许上传图片和zip文件
                        { title : "Image files", extensions : "jpg,gif,png" }, 
                        { title : "Zip files", extensions : "zip" },
                        { title : "Mp3 files", extensions : "mp4,mp3" },
                    ],
                    max_file_size : '5555kb', //最大只能上传400kb的文件
                    prevent_duplicates : true //不允许选取重复文件
                },
                multipart_params:{ // 提交的附加信息
                    one:1
                },
                max_retries:0, //请求错误是  是否重新请求
                chunk_size:0, // 当为0时, 不使用切割分片上传
                resize:{  // 暂时不清楚这是啥
                    width: 100,
                    height: 100,
                    crop: true,
                    quality: 60,
                    preserve_headers: false
                },
                drop_element:'d3',//拖拽文件的区域
                container:'d2',
                // flash_swf_url:'' // flash上传方式的url地址
            })
            plup.init()
            
            plup.bind('FilesAdded', (uploader, files)=> {
        //uploader为当前的plupload实例对象，files为一个数组，里面的元素为本次添加到上传队列里的文件对象
        console.log(files);
        //队列添加文件后，直接调用文件上传，也可以单独拿出
        uploader.start();
    });

    //当队列中的某一个文件正要开始上传前触发监听函数参数
     plup.bind("BeforeUpload", (uploader,file)=> {
        //uploader为当前的plupload实例对象，file为触发此事件的文件对象
        console.log("开始上传",file);
    });

    //会在文件上传过程中不断触发，可以用此事件来显示上传进度监听函数参数
     plup.bind('UploadProgress', (uploader, file)=> {
        //uploader为当前的plupload实例对象，file为触发此事件的文件对象
        console.log(file.id,file.name,file.percent);
    });

    //当队列中的某一个文件上传完成后触发监听函数参数
     plup.bind("FileUploaded", (uploader,file,responseObject)=> {
        //uploader为当前的plupload实例对象，file为触发此事件的文件对象，responseObject为服务器返回的信息对象，它有以下3个属性：
        //response：服务器返回的文本
        //responseHeaders：服务器返回的头信息
        //status：服务器返回的http状态码，比如200
        console.log("上传完成",responseObject);
    });
        }
    },
    mounted(){
        this.it()
            //当文件添加到上传队列后触发监听函数参数
     

    },
}
</script>

<style lang="stylus" scoped>
#d3{
    width 400px
    height 400px
    border 1px solid red
}
    
</style>>



    
</style>