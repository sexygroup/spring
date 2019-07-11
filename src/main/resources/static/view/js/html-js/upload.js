var v1 = new Vue({
    el: "#app",
    data: {
        cardCode: "",
        clients: [],
        client: {},
        card: {},
        //图片上传
        path: '',
        dialogImageUrl: '',
        dialogVisible: false,
        dialogFormVisibleImage: false,
        files: [],
        comments: [],
        length: 0,
        url: "/spring",
        myurl: "/spring/upload/",
        selectImage: {}//用于图片预览
    },
    methods: {
        jump: function () {
            window.location.href = "upload_image.html";
        },

        setClient: function (client) {
            this.client = client;
        },
        setImage: function (image) {
            this.selectImage = image;
        },

        check: function () {

            if (this.cardCode !== "") {

                axios.get(this.url + "/card/findById", {
                    params: {
                        id: this.cardCode
                    }
                })
                    .then(response => {

                        if (response.data == null) {
                            this.$alert("查询不到卡号信息");

                        } else {
                            this.card = response.data;

                        }
                    })
                    .catch(error => {
                        console.log(error);

                        //this.initdeal();
                    });


                axios.get(this.url + "/client/findAllProfileByCardId", {
                    params: {
                        id: this.cardCode
                    }
                })
                    .then(response => {
                        this.clients = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });

            }

        },


        //上传相关
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        fileChange(file, fileList) {
            this.files = fileList;
            this.length = this.files.length;
            console.log(this.length);
        },
        upload: function () {
            let fileList = [];
            for (let j in this.files) {
                fileList.push(this.files[j].raw);
            }
            var aFormData = new FormData();
            for (let i in fileList) {
                aFormData.append("files", fileList[i]);

            }

            aFormData.append("clientId", this.client.clientId);
            for (i = 0; i < this.files.length; i++) {
                if (this.comments[i] === undefined)
                    this.comments.splice(i, 0, "无");

                aFormData.append("comments", this.comments[i]);
            }
            console.log(this.comments);
            /*for (let i in this.comments) {


                aFormData.append("comments", this.comments[i]);
            }*/
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            axios(
                {
                    url: this.url + "/image/upload",
                    method: "post",
                    data: aFormData,
                    config: config
                }
            ).then(res => {
                alert("图片上传成功");
                window.location.reload();
            })
                .catch(err => {
                    console.log(err);
                    alert("提交失败!");
                });
        },
    }
})