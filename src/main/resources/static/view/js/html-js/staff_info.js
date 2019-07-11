var v1 = new Vue({
    el: "#app",
    data: {
        currentPage: 1,		//批量显示表格的当前页
        pagesize: 10,				//批量显示表格的分页大小
        totalCount: 0,			//批量显示表格的总记录数
        leng: 0,

        flag1: 0, //用于更新之后的刷新

        staff: {},
        staffs: [],

        phoneVisible: false,
        staffVisible: false,
        addVisible: false,

        staffForm: {
            staffId: "",
            staffAnswer: "",
            staff_again_password: "",
            staff_new_password: "",
        },

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

        addForm: {
            staffId: "",
            staffAnswer: "",
            staffLogin: 0,
            staffName: "",
            staffPhone: "",
            staffQuestion: "",
            staffIsAdmin: 0,
            staffPassword: ""
        },

        phoneForm: {
            staffId: '',
            staffName: '',
            staffPhone: ''
        },

        question: [
            "您目前的姓名是？",
            "您配偶的生日是？",
            "您的学号（或工号）是？",
            "您母亲的生日是？",
            "您高中班主任的名字是？",
            "您父亲的姓名是？",
            "您小学班主任的名字是？",
            "您父亲的生日是？",
            "您配偶的姓名是？",
            "您初中班主任的名字是？",
            "您最熟悉的童年好友名字是？",
            "您最熟悉的学校宿舍舍友名字是？",
            "对您影响最大的人名字是？"
        ],

        shenfen: [
            "管理员",
            "普通员工"
        ],
        tshenfen: "",//用于显示身份

        rules: {

            staff_new_password: [
                {required: true, message: '请输入新密码', trigger: 'blur'},
                {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
            ],
            staff_again_password: [
                {required: true, message: '请再次输入新密码', trigger: 'blur'},
                {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
            ],
            staffPassword: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {min: 6, max: 20, message: '密码长度为6-20位', trigger: 'blur'}
            ],
            staffPhone: [
                {required: true, message: '请输入手机号', trigger: 'blur'},
                {min: 11, max: 11, message: '手机号为11位', trigger: 'blur'},
                {pattern: /^[1-9]\d*$/, message: "请输入纯数字", trigger: 'blur'},
            ],
            staffName: [
                {required: true, message: '请输入员工姓1名', trigger: 'blur'},
                {pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '输入英文或汉字', trigger: 'blur'},
            ],

        },

        url: "http://127.0.0.1:8080/spring"
    },
    methods: {
        loading: function () {
            //初始化信息
            this.staff = this.init_staff();
            var t_staffCode = window.location.href.split("?")[1];	//从网址获取code


            //与后台交互，通过t_staffCode查询 staff信息；
            this.findStaffById(t_staffCode);

            //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
            var handle = this;	//供setTimeout()使用外层this
            window.setTimeout(function () {
                //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                if (handle.staff1.staffId == 0 || handle.staff1.staffIsAdmin == 0 || handle.staff1.staffLogin == 0) {
                    window.location.href = "login.html";
                }
                axios.get(handle.url + "/staff/findAll")
                    .then(response => {
                        handle.staffs = response.data;
                        handle.totalCount = response.data.length;
                        handle.leng = response.data.length;
                        //console.log(handle.leng);
                    })
                    .catch(error => {
                        //console.log(error);
                    });
            }, 400);

        },

        init_phoneForm: function () {
            this.phoneForm.staffCode = '';
            this.phoneForm.staffName = '';
            this.phoneForm.staffPhone = '';
        },

        init_staffForm: function () {
            this.staffAnswer = "";
            this.staffForm.staffAnswer = '';
            this.staffForm.staff_again_password = '';
            this.staffForm.staff_new_password = '';
        },

        init_addForm: function () {
            this.staffId = "";
            this.staffAnswer = "";
            this.staffName = "";
            this.staffPhone = "";
            this.staffQuestion = "";
            this.staffIsAdmin = 0;
        },

        setquestion: function (question) {
            this.addForm.staffQuestion = question;
        },
        setshenfen: function (shenfen) {
            this.tshenfen = shenfen;
            if (shenfen === "普通员工")
                this.addForm.staffIsAdmin = 0;
            else
                this.addForm.staffIsAdmin = 1;
            //console.log(this.addForm.staffIsAdmin);
        },

        addstaff: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios({
                        method: 'post',
                        url: this.url + "/staff/save",
                        data: this.addForm

                    })
                        .then(response => {
                            if (response.status === 200) {
                                this.flag1 += 1;

                                this.$message({
                                    type: 'success',
                                    showClose: true,
                                    message: '添加成功'

                                });
                                this.init_addForm();
                                this.addVisible = false;
                            } else {
                                //console.log(response);
                                this.$alert("添加失败!");
                            }
                        })

                } else {
                    this.$alert("请输入完整信息")
                }
            })
        },

        deletestaff: function (staffId) {
            axios.get(this.url + "/staff/deleteById", {
                params: {
                    id: staffId
                }
            })
                .then(response => {

                    if (response.status === 200) {
                        this.flag1 += 1;

                        this.$message({
                            type: 'success',
                            showClose: true,
                            message: '删除成功'

                        });
                    } else {
                        //console.log(response);
                        this.$alert("删除失败!");
                    }
                })
                .catch(error => {
                    //console.log(error);

                    //this.initdeal();
                });
        },

        showstaff: function (staff) {
            this.staff = staff;
            this.staffForm.staffId = this.staff.staffId;
            this.staffForm.staffQuestion = this.staff.staffQuestion;
            this.staffVisible = true;

        },

        showphone: function (staff) {
            this.staff = staff;
            this.phoneForm.staffId = this.staff.staffId;
            this.phoneForm.staffName = this.staff.staffName;
            this.phoneForm.staffPhone = this.staff.staffPhone;
            this.phoneVisible = true;
        },
        resetstaff: function () {
            this.init_staffForm();
            this.staffVisible = false;
        },
        resetphone: function () {
            this.init_phoneForm();
            this.phoneVisible = false;
        },
        resetadd: function () {
            this.init_addForm();
            this.addVisible = false;
        },
        editphone: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    //判断输入手机号是否正确，若正确则与后台交互，更新数据。
                    if (this.phoneForm.staffPhone.length != 11) {
                        this.$alert("手机号格式不正确！");
                        return false;
                    } else {
                        this.staff.staffPhone = this.phoneForm.staffPhone;
                        axios({
                            method: 'post',
                            url: this.url + "/staff/save",
                            data: this.staff

                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.flag1 += 1;

                                    this.$message({
                                        type: 'success',
                                        showClose: true,
                                        message: '提交成功'

                                    });
                                    this.init_phoneForm();
                                    this.phoneVisible = false;
                                } else {
                                    //console.log(response);
                                    this.$alert("提交失败!");
                                }
                            })
                            .catch(error => {
                                //console.log(error);
                                this.$alert(error);
                            });

                    }
                } else {
                    this.$alert("请填写信息");
                    //console.log('error submit!!');
                    return false;
                }
            });

        },

        editstaff: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //console.log("===========");
                    //判断密保答案是否为空

                    /* if(this.staffForm.staffAnswer.length == 0){
                         this.$alert("密保答案不能为空，请重新输入！");
                        //console.log("card_answer is null!");
                         return false;
                     }


                     if(this.staffForm.staff_new_password.length == 0){
                         this.$alert("新密码不能为空，请重新输入！");
                        //console.log("newPassword is null!");
                         return false;
                     }

                     if(this.staffForm.staff_again_password.length == 0){
                         this.$alert("确认密码不能为空，请重新输入！");
                        //console.log("againPassword is null!");
                         return false;
                     }*/

                    //判断是否正确，若正确则与后台交互，更新数据。
                    if (this.staffForm.staff_again_password != this.staffForm.staff_new_password) {
                        this.$alert("两次输入不一致！");
                        //console.log("not quite！");
                        return false;
                    }


                    //判断密保答案是否正确，若正确则与后台交互，更新数据。
                    if (this.staffForm.staffAnswer != this.staff.staffAnswer) {
                        this.$alert("密保答案不正确！");
                        //console.log("staff_answer is error！");
                        return false;
                    } else {
                        this.staff.staffPassword = this.staffForm.staff_new_password;
                        axios({
                            method: 'post',
                            url: this.url + "/staff/save",
                            data: this.staff

                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.flag1 += 1;
                                    this.$message({
                                        type: 'success',
                                        showClose: true,
                                        message: '提交成功'
                                    });
                                    this.init_staffForm();
                                    this.staffVisible = false;
                                } else {
                                    //console.log(response);
                                    this.$alert("提交失败!");
                                }
                            })
                    }
                } else {
                    this.$alert("请填写完整信息");
                }
            });

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
        //int型id转化为6位string型code。失败返回字符串”error“。
        idToCode6: function (t_id) {
            var response = "";
            var count = t_id.toString().length;

            if (count == 1) {
                response = "00000" + t_id.toString();
            } else if (count == 2) {
                response = "0000" + t_id.toString();
            } else if (count == 3) {
                response = "000" + t_id.toString();
            } else if (count == 4) {
                response = "00" + t_id.toString();
            } else if (count == 5) {
                response = "0" + t_id.toString();
            } else if (count == 6) {
                response = t_id.toString();
            } else {
                response = "error";
            }
            return response;
        },
        //cardClientDetail表格相关
        handleSizeChange: function (pagesize) {
            this.pagesize = pagesize;
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
        },
        //========================== page common =========================================
        select_one: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "work.html" + "?" + t_code;
        },
        select_two: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "signup.html" + "?" + t_code;
        },
        select_three: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "card_info.html" + "?" + t_code;
        },
        select_four: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "client_info.html" + "?" + t_code;
        },
        select_five: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "image_info.html" + "?" + t_code;
        },
        select_six: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "staff_info.html" + "?" + t_code;
        },
        select_seven: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "deal_consume_analyse.html" + "?" + t_code;
        },
        select_eight: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "deal_rebate_analyse.html" + "?" + t_code;
        },
        select_nine: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "deal_recharge_analyse.html" + "?" + t_code;
        },
        select_ten: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "deal_cost_analyse.html" + "?" + t_code;
        },
        select_eleven: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "deal_record.html" + "?" + t_code;
        },
        select_twelve: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "set.html" + "?" + t_code;
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

        flag1: {
            handler() {
                this.loading();
            },
            immediate: true
        }

    }
});