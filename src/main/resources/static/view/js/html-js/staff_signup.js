var v1 = new Vue({
    el: "#app",
    data: {
        //url:"http://127.0.0.1:8080/spring9/"
        url: "http://127.0.0.1:8080/spring",
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
        form: {

            clientAge: "",
            clientName: "",
            clientGender: "",
            clientIsHolder: 1,
            clientPhone: "",
            cardMoney: 0,
            cardQuestion: "",
            cardAnswer: "",
            cardPassword: "",
            cardReferrer: "",
            cardPoint: 0

        },
        cardLevel: [],
        referrers: "",

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
        gender: ["男", "女"],
        ages: ["儿童", "青年", "中年", "老年"],

        rules: {
            clientGender: [
                {required: true, message: '请选择客户性别', trigger: 'blur'},

            ],
            cardMoney: [
                {required: true, pattern: /^[1-9]\d*$/, message: '请选择充值金额', trigger: 'blur'},

            ],
            clientAge: [
                {required: true, message: '请选择开卡人年龄段', trigger: 'blur'},

            ],
            clientName: [
                {required: true, message: '请输入客户姓名', trigger: 'blur'},
                {pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '输入英文或汉字', trigger: 'blur'},
            ],
            clientPhone: [
                {required: false, message: '请输入客户电话', trigger: 'blur'},
                {type: 'string', min: 11, max: 11, message: '长度为11个字符', trigger: 'blur'},
            ],
            cardPassword: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
            ],
            cardQuestion: [
                {required: true, message: '请选择密保问题', trigger: 'blur'},

            ],
            clientAnswer: [
                {required: true, message: '请输入密保答案', trigger: 'blur'},

            ],

        }
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
                if (handle.staff1.staffId == 0 || handle.staff1.staffLogin == 0) {
                    window.location.href = "login.html";
                }
                axios.get(handle.url + "/cardLevel/findAll")
                    .then(response => {
                        handle.cardLevel = response.data;
                        //console.log(handle.cardLevel);
                    })
                    .catch(error => {
                        //console.log(error);
                    });
            }, 400);

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
        fresh: function () {
            window.location.reload();
        },

        initForm: function () {
            this.form.clientAge = "";
            this.form.clientName = "";
            this.form.clientGender = "";
            this.form.clientIsHolder = 1;
            this.form.clientPhone = "";
            this.form.cardMoney = 0;
            this.form.cardQuestion = "";
            this.form.cardAnswer = "";
            this.form.cardPassword = "";
            this.form.cardReferrer = "";
            this.form.cardPoint = 0;
        },

        onSubmit: function (formName) {

            this.$refs[formName].validate((valid) => {
                if (valid) {

                    if (this.form.cardReferrer !== "") {
                        axios.get(this.url + "/card/findById", {
                            params: {
                                id: this.form.cardReferrer
                            }
                        })
                            .then(response => {
                                this.referrers = response.data;
                                if (this.referrers.length == 0) {
                                    this.$alert("推荐人不存在");
                                } else {
                                    this.submit();
                                }
                            })
                            .catch(error => {
                                //console.log(error);
                            });
                    } else {
                        this.submit();
                    }


                } else {
                    //console.log('error submit!!');
                    return false;
                }
            });


        },

        submit: function () {
            axios.post(this.url + "/card/addNewCard", {

                cardQuestion: this.form.cardQuestion,
                cardAnswer: this.form.cardAnswer,
                cardPassword: this.form.cardPassword,
                cardReferrer: this.form.cardReferrer,
                cardMoney: this.form.cardMoney,
                clientAge: this.form.clientAge,
                clientGender: this.form.clientGender,
                clientPhone: this.form.clientPhone,
                clientName: this.form.clientName

            }).then(response => {
                if (response.status === 200) {
                    if (confirm("办卡成功"))
                        this.initForm();
                } else {
                    //console.log(response);
                    this.$alert("办卡失败!");
                }
            })
        },
        setgender: function (gender) {
            this.form.clientGender = gender;
        },

        setage: function (age) {
            this.form.clientAge = age;
        },
        setprice: function (price) {
            this.form.cardMoney = price;
        },
        setquestion: function (question) {
            this.form.cardQuestion = question;
        },


        //================不要删除===================-------------------
        //工具栏(侧栏)响应函数
        select_one: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "staff_work.html" + "?" + t_code;
        },
        select_two: function () {
            var t_code = window.location.href.split("?")[1];
            window.location.href = "staff_signup.html" + "?" + t_code;
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
        }

    }
});
v1.loading();