var v1 = new Vue({
    el: '#app',
    data: {
        url: "http://127.0.0.1:8080/spring",
        myurl: "http://127.0.0.1:8080/spring/upload/",
        myurl1: "http://127.0.0.1:8080/spring/QRCode/upload.png",


        load: true,
        flag: false,
        delclient: 0,//用于删除人员后刷新
        index: 0,//用于选择服务select绑定
        flag1: 0,//用于页面刷新
        flagshowrecharge: false,//用于折叠面板充值
        flagshowconsume: false,//用于折叠面板消费记录
        flagshowwork: true,//用于折叠面板工作台
        //弹出框
        dialogFormVisibleRecharge: false,
        dialogFormVisiblePassword: false,
        dialogFormVisibleImage: false,
        dialogFormVisibleQRCode: false,
        //图片上传
        path: '',
        dialogImageUrl: '',
        dialogVisible: false,
        files: [],
        comments: [],
        length: 0,


        selectImage: {},//用于图片预览

        password: '',
        cardCode: "",
        card: {
            cardId: 0,
            cardReferrer: null,
            cardPassword: "",
            cardQuestion: "",
            cardAnswer: "",
            cardMoney: 0,
            cardPoint: 0
        },

        services: [{name: "空"}],
        servicechosed: [],
        servicechosedshow: [],//用于显示

        recharges: [],
        rechargePrice: 0,
        consumes: [],

        totalmoney: '',
        totalDeduct: 0,

        gender: ["男", "女"],
        ages: ["儿童", "青年", "中年", "老年"],

        client: {},
        clients: [],
        clientForm: {
            cardId: 0,
            clientId: 0,
            clientAge: "",
            clientGender: "",
            clientName: "",
            clientPhone: "",
            clientIsHolder: 0,
        },
        clientVisible: false,

        staff: {},
        staffs: [],
        staff1: {
            staffId: 0,
            staffQuestion: '',
            staffAnswer: '',
            staffPassword: '',
            staffIsAdmin: 0,
            staffName: '',
            staffPhone: '',
            staffLogin: 0
        },

        currentPage1: 1,
        pagesize1: 4,
        currentPage2: 1,
        pagesize2: 4,
        currentPage3: 1,
        pagesize3: 4,

        rules: {
            clientGender: [
                {required: true, message: '请选择客户性别', trigger: 'blur'},

            ],
            clientAge: [
                {required: true, message: '请选择开卡人年龄段', trigger: 'blur'},

            ],
            clientName: [
                {required: true, message: '请输入客户姓名', trigger: 'blur'},
                {pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '输入英文或汉字', trigger: 'blur'},
            ],
            clientPhone: [
                {required: false, message: '请输入客户电话或不填', trigger: 'blur'},
                {type: 'string', min: 11, max: 11, message: '长度为11位数字', trigger: 'blur'},
                {pattern: /^[1-9]\d*$/, message: "请输入纯数字", trigger: 'blur'},
            ],

        }
    },
    methods: {
        setgender: function (gender) {
            this.clientForm.clientGender = gender;
        },

        setage: function (age) {
            this.clientForm.clientAge = age;
        },
        initForm: function () {
            this.clientForm.clientAge = "";
            this.clientForm.clientName = "";
            this.clientForm.clientGender = "";
            this.clientForm.cardId = 0;
            this.clientForm.clientPhone = "";

        },
        resetclient: function () {
            this.initForm();
            this.clientVisible = false;
        },
        addclient: function (formName) {
            this.clientForm.cardId = this.cardCode;
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    axios.post(this.url + "/client/save", this.clientForm)
                        .then(response => {
                            if (response.status === 200) {
                                if (confirm("添加成功"))
                                    this.initForm();
                                this.clientVisible = false;

                                this.flag1 += 1;
                            } else {
                                //console.log(response);
                                this.$alert("添加失败!");
                            }
                        })

                } else {
                    this.$alert("请填写完整信息");
                    //console.log('error submit!!');
                    return false;
                }
            });

        },
        codeToId: function (t_code) {
            var response = parseInt(t_code, 10);
            return response;
        },
        loading: function () {
            //初始化信息
            this.staff1 = this.init_staff();
            var t_staffCode = window.location.href.split("?")[1];	//从网址获取code


            //与后台交互，通过t_staffCode查询 staff信息；
            var t_id = this.codeToId(t_staffCode);
            this.findStaffById(t_id);

            //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
            var handle = this;	//供setTimeout()使用外层this
            window.setTimeout(function () {
                //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                if (handle.staff1.staffId == 0 || handle.staff1.staffLogin == 0) {
                    window.location.href = "login.html";
                }
                //console.log("url:" + handle.url);
                axios.get(handle.url + "/service/findAll")
                    .then(response => {
                        handle.services = response.data;
                        //console.log(handle.services);
                    })
                    .catch(error => {
                        //console.log(error);
                    });

                axios.get(handle.url + "/staff/findAll")
                    .then(response => {
                        handle.staffs = response.data;
                        //console.log(handle.staffs);
                    })
                    .catch(error => {
                        //console.log(error);
                    });

                axios.get(handle.url + "/QRCode/generateUrlCode", {
                        params: {
                            url: "8080/SpringClient/upload.html",
                            pictureName: "upload.png"
                        }
                    }
                )
                    .then(response => {
                    })
                    .catch(error => {
                        //console.log(error);
                    });
            }, 400);

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
                            this.initdeal();
                            this.load = true;
                        } else {
                            this.card = response.data;
                            this.load = false;
                            this.flag = true;
                            //if(this.card)
                        }
                    })
                    .catch(error => {
                        //console.log(error);

                        //this.initdeal();
                    });


                axios.get(this.url + "/recharge/findByCardId", {
                    params: {
                        id: this.cardCode
                    }
                })
                    .then(response => {
                        this.recharges = response.data;
                    })
                    .catch(error => {
                        //console.log(error);
                    });
                axios.get(this.url + "/consume/findByCardId", {
                    params: {
                        id: this.cardCode
                    }
                })
                    .then(response => {
                        this.consumes = response.data;
                    })
                    .catch(error => {
                        //console.log(error);
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
                        //console.log(error);
                    });
                this.rechargePrice = '';
            }

        },

        recharge: function () {
            axios({
                method: 'post',
                url: this.url + "/recharge/save",
                data: {
                    cardId: this.cardCode,
                    rechargePrice: this.rechargePrice
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        this.flag1 += 1;
                        this.$message({
                            type: 'success',
                            showClose: true,
                            message: '充值成功'
                        });
                    } else {
                        //console.log(response);
                        this.$alert("充值失败!");
                    }
                })
                .catch(error => {
                });
        },

        checkdeal: function () {


            if (this.staff.staffId != null) {

                if (this.client.clientId != null) {
                    if (this.totalDeduct <= this.card.cardPoint) {
                        //console.log(this.dialogFormVisiblePassword);
                        if (this.totalDeduct <= this.totalmoney) {
                            if (this.card.cardMoney - this.totalmoney >= 0) {

                                this.dialogFormVisiblePassword = true;

                            } else {
                                this.$alert("余额不足!");
                            }
                        } else {
                            this.$alert("抵扣金额不得超过消费金额!");
                        }
                    } else {
                        this.$alert("积分不足！");
                    }
                } else {
                    this.$alert("请选择消费者！");
                }
            } else {
                this.$alert("请选择服务人员！");
            }
        },


        initdeal: function () {
            this.card.cardId = 0;
            this.card.cardAnswer = "";
            this.card.cardQuestion = "";
            this.card.cardMoney = 0;
            this.card.cardPoint = 0;
            this.recharges = [];
            this.consumes = [];
            this.clients = [];
            this.load = false;
            this.servicechosed = [];
            this.servicechosedshow = [];
            this.totalmoney = '';
            this.totalDeduct = 0;
            this.staff = {};
            this.client = {};
        },

        deal: function () {
            if (confirm("确认支付？")) {


                if (this.password != this.card.cardPassword) {
                    this.$alert("密码输入错误!");
                    this.password = '';
                } else {
                    if (this.files.length != 0) {
                        this.upload();
                    }
                    axios({
                        method: 'post',
                        url: this.url + "/consume/saveConsumeList",
                        data: {
                            cardId: this.cardCode,
                            clientId: this.client.clientId,
                            staffId: this.staff.staffId,
                            totalDeduct: parseInt(this.totalDeduct),
                            serviceList: this.servicechosed
                        }
                    })
                        .then(response => {
                            if (response.status === 200) {
                                confirm("支付成功");
                                window.location.reload();


                            } else {
                                //console.log(response);
                                this.$alert("支付失败!");
                            }
                        })
                        .catch(error => {
                            //console.log(error);
                            this.$alert(error);
                        });
                }
            }


        },


        deleteService: function (service, index) {

            if (index > -1) {
                this.servicechosedshow.splice(index, 1);

                this.servicechosed.splice(index, 1);
            }

        },

        deleteclient: function (client) {
            if (client.clientIsHolder == 1) {
                this.$alert("无法删除开卡人!");
            } else if (confirm("确认删除？")) {
                axios.get(
                    this.url + "/client/deleteById", {
                        params: {
                            id: client.clientId
                        }
                    }
                )
                    .then(response => {
                        if (response.status === 200) {
                            this.delclient += 1;
                            this.$message({
                                type: 'success',
                                showClose: true,
                                message: '删除成功'
                            });
                        } else {
                            //console.log(response);
                            this.$alert("无法删除!");
                        }
                    })
                    .catch(error => {
                        //console.log(error);
                        this.$alert(error);
                    });
            }
        },

        //上传相关
        handleRemove(file, fileList) {
            //console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        fileChange(file, fileList) {
            this.files = fileList;
            this.length = this.files.length;
            //console.log(this.length);
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
            //console.log(this.comments);
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
            })
                .catch(err => {
                    //console.log(err);
                    alert("提交失败!");
                });
        },


        handleSizeChange1: function (size) {
            this.pagesize1 = size;
        },
        handleCurrentChange1: function (currentPage) {
            this.currentPage1 = currentPage;
        },
        handleSizeChange2: function (size) {
            this.pagesize2 = size;
        },
        handleCurrentChange2: function (currentPage) {
            this.currentPage2 = currentPage;
        },
        handleSizeChange3: function (size) {
            this.pagesize3 = size;
        },
        handleCurrentChange3: function (currentPage) {
            this.currentPage3 = currentPage;
        },

        setservice: function (service, index) {
            this.index = index;
            var a = {serviceId: service.serviceId, servicePrice: service.servicePrice};
            this.servicechosed.push(a);


            a = {serviceId: service.serviceId, serviceName: service.serviceName, servicePrice: service.servicePrice};
            this.servicechosedshow.push(a);
        },

        setStaff: function (staff) {
            this.staff = staff
        },

        setImage: function (image) {
            this.selectImage = image;
        },


        setClient: function (client) {
            this.client = client;
        },

        handlerecharge: function () {
            if (this.flagshowrecharge == true) {
                document.getElementById("recharge").style.display = "";
            } else {
                document.getElementById("recharge").style.display = "none";
            }
        },

        handleconsume: function () {
            if (this.flagshowconsume == true) {
                document.getElementById("consume").style.display = "";
            } else {
                document.getElementById("consume").style.display = "none";
            }
        },
        handlework: function () {
            if (this.flagshowwork == true) {
                document.getElementById("work").style.display = "";
                document.getElementById("work1").style.display = "";
            } else {
                document.getElementById("work").style.display = "none";
                document.getElementById("work1").style.display = "none";
            }
        },


        //================================不要删除==================================
        //========================== page common =========================================
        select_one: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "staff_work.html" + "?" + t_code;
        },
        select_two: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "staff_signup.html" + "?" + t_code;
        },

        init_staff: function () {
            var t_staff = {};
            t_staff.staffId = 0;
            t_staff.staffQuestion = '';
            t_staff.staffAnswer = '';
            t_staff.staffPassword = '';
            t_staff.staffIsAdmin = 0;
            t_staff.staffName = '';
            t_staff.staffPhone = '';
            t_staff.staffLogin = 0;
            return t_staff;
        },
        findStaffById: function (t_id) {
            //获取后台数据
            var handle = this; //供axios使用外层this
            axios.get(this.url + "/staff/findById", {
                params: {
                    id: t_id
                }
            }).then(function (response) {
                //业务处理
                //console.log(response.data);		//测试代码
                if (response.data == null) {
                    handle.$alert("没有该管理员信息!").catch(() => {
                    });
                    //console.log("can't find from server!!");
                } else {
                    handle.staff1.staffId = response.data.staffId;
                    handle.staff1.staffQuestion = response.data.staffQuestion;
                    handle.staff1.staffAnswer = response.data.staffAnswer;
                    handle.staff1.staffPassword = response.data.staffPassword;
                    handle.staff1.staffIsAdmin = response.data.staffIsAdmin;
                    handle.staff1.staffName = response.data.staffName;
                    handle.staff1.staffPhone = response.data.staffPhone;
                    handle.staff1.staffLogin = response.data.staffLogin;
                }
            }).catch(function (error) {
                //console.log(error);
            });
        },


        //"退出系统"响应函数
        exit: function () {
            //将退出标识由1变为0
            this.staff1.staffLogin = 0;
            //数据上传到后台
            var handle = this;	//供axios使用外层this
            axios.post(this.url + "/staff/save", {
                staffId: this.staff1.staffId,
                staffQuestion: this.staff1.staffQuestion,
                staffAnswer: this.staff1.staffAnswer,
                staffIsAdmin: this.staff1.staffIsAdmin,
                staffName: this.staff1.staffName,
                staffPhone: this.staff1.staffPhone,
                staffPassword: this.staff1.staffPassword,
                staffLogin: this.staff1.staffLogin
            }).then(function (response) {
                //响应处理
                if (handle.staff1.staffId == response.data.staffId) {
                    //console.log("saveStuff Success");
                    //清空表单
                    window.location.href = "login.html";
                } else {
                    handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                    });
                    //console.log("saveStuff defeat");
                }
            }).catch(function (error) {
                //console.log(error);
                handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                });
            });
        },


    },
    watch: {
        servicechosed: {
            handler() {
                var i;
                this.totalmoney = 0;
                for (i = 0; i < this.servicechosed.length; i++) {

                    this.totalmoney += Number(this.servicechosed[i].servicePrice);
                }
            },
            deep: true,
            immediate: true
        },

        flagshowrecharge: {
            handler() {
                this.handlerecharge();
            },
            immediate: true
        },

        flagshowconsume: {
            handler() {
                this.handleconsume();
            },
            immediate: true
        },

        flagshowwork: {
            handler() {
                this.handlework();
            },
            immediate: true
        },

        delclient: {
            handler() {
                this.check();
            },
            immediate: true
        },

        flag1: {
            handler() {
                this.check();
            },
            immediate: true
        }

    }

});
v1.loading();
